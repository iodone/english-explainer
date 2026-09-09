import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Line,
  Text,
  Bounds,
  GizmoHelper,
  GizmoViewport,
} from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import type { ComponentRef } from 'react'
import * as THREE from 'three'
import type { ThingData } from '../data/types'
import {
  GEOMETRY,
  PartMetaContext,
  usePartHighlight,
  INK,
  INK_SOFT,
  WARNING_RED,
} from '../geometry'
import type { HighlightState, PartMeta } from '../geometry'

/** CAD viewport 纸色（Canvas 实底，与文章列纸面同源） */
const PAPER = '#F4F1EA'
const LABEL_BASE_OFFSET = new THREE.Vector3(0.35, 0.2, 0)
const LABEL_LINE_POINTS: [number, number, number][] = [
  [0, 0, 0],
  [0.3, 0.2, 0],
]
const LABEL_OFFSET_CANDIDATES: Array<[number, number]> = [
  [0, 0],
  [0, 0.24],
  [0, -0.24],
  [0, 0.48],
  [0, -0.48],
  [0, 0.72],
  [0, -0.72],
]
const LABEL_CHARACTER_WIDTH = 0.095
const LABEL_HEIGHT = 0.18

interface ScreenRect {
  left: number
  right: number
  top: number
  bottom: number
}

type LineElement = ComponentRef<typeof Line>
type TextElement = ComponentRef<typeof Text>

function updateLeaderLine(line: unknown, labelOffset: THREE.Vector3) {
  const lineElement = line as {
    geometry: { setPositions: (positions: number[]) => void }
    computeLineDistances?: () => void
  }

  lineElement.geometry.setPositions([
    0,
    0,
    0,
    labelOffset.x - 0.05,
    labelOffset.y,
    labelOffset.z,
  ])
  lineElement.computeLineDistances?.()
}

function setMaterialOpacity(object: unknown, opacity: number) {
  const material = (object as { material?: THREE.Material | THREE.Material[] }).material
  if (!material) return

  const materials = Array.isArray(material) ? material : [material]
  for (const item of materials) {
    item.transparent = true
    item.opacity = opacity
  }
}

/**
 * ThingScene — 3D 草稿图纸 viewer（word-part linking）
 *
 * 绘制风格按 DESIGN.md §1.5 JX-7b 规范：
 * - 外壳/结构件 = 半透明灰实体面（体量感）+ 墨 Edges 轮廓（四边形拓扑感）
 * - 地面 = 3D 透视网格（CAD 虚空工作区）+ 虚线中心轴
 * - 右上角坐标轴 gizmo；标签 billboard 等宽大写（工程数据格式）
 * - 取景 = Bounds 自适应（fit + observe，分栏拖动后自动重取景）
 *
 * 几何体按 thing.id 从 GEOMETRY map 分发（src/geometry/<slug>.tsx，一 thing 一文件）；
 * 本文件只保留场景编排：Canvas、标注层（AnnotationLabels）、环境（轴/网格）、相机控制。
 *
 * 受控高亮（DESIGN.md §4.1）：
 * - highlightPartId：阅读态，文中部件词点击 → 该部件墨线变 accent + 加粗
 * - activePartIds / pastPartIds / dimOthers：flow 播放态，
 *   当前步 accent 加粗、已过步 50%、未到步 12%
 * - onPartClick：点击部件本体/标注点 → 文章列滚动到对应句（图→词）
 */

export interface ThingSceneProps {
  thing: ThingData
  highlightPartId?: string | null
  activePartIds?: string[]
  pastPartIds?: string[]
  dimOthers?: boolean
  onPartClick?: (partId: string) => void
}

export default function ThingScene({
  thing,
  highlightPartId = null,
  activePartIds = [],
  pastPartIds = [],
  dimOthers = false,
  onPartClick,
}: ThingSceneProps) {
  // partId → 配色角色（数据驱动，几何层不重复配色知识）
  const partMeta = useMemo<PartMeta>(
    () => ({
      onPartClick: onPartClick ?? null,
      finishOf: partId => thing.parts.find(p => p.id === partId)?.finish ?? 'hull',
    }),
    [thing, onPartClick],
  )

  return (
    <div className="w-full h-full reticle">
      {/* HUD overlay labels */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="micro-label text-hud-cyan">SPECIMEN</div>
        <div className="font-mono text-xs text-ink-faint mt-1">
          {thing.realName.toUpperCase()}
        </div>
      </div>
      <div className="absolute top-4 right-4 z-10 pointer-events-none text-right">
        <div className="micro-label">MODEL</div>
        <div className="font-mono text-xs text-ink-faint mt-1">
          SKETCH-{thing.id.slice(0, 8).toUpperCase()}
        </div>
      </div>
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
        <div className="micro-label">DRAG TO ROTATE · SCROLL TO ZOOM · CLICK A PART</div>
      </div>

      {/* 3D Canvas — 纸色实底（CAD viewport），3D 地面网格提供透视参考 */}
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        style={{ background: PAPER }}
      >
        <PartMetaContext.Provider value={partMeta}>
          {/* key=thing.id：切模型时 Bounds 重新 fit；margin 略松给标注留空间 */}
          <Bounds key={thing.id} fit clip observe margin={1.1}>
            <SketchModel
              thing={thing}
              highlightPartId={highlightPartId}
              activePartIds={activePartIds}
              pastPartIds={pastPartIds}
              dimOthers={dimOthers}
            />
          </Bounds>
        </PartMetaContext.Provider>
        <AnnotationLabels
          thing={thing}
          highlightPartId={highlightPartId}
          activePartIds={activePartIds}
          dimOthers={dimOthers}
          onPartClick={onPartClick}
        />
        <CenterAxes />
        <GroundGrid />
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.05}
          minDistance={2.5}
          maxDistance={18}
          autoRotate
          autoRotateSpeed={0.4}
        />
        {/* 右上角数字化指南针（JX-7b §HUD） */}
        <GizmoHelper alignment="top-right" margin={[76, 76]}>
          <GizmoViewport
            axisColors={['#E8453C', '#4ADE80', '#60A5FA']}
            labelColor={INK}
          />
        </GizmoHelper>
      </Canvas>
    </div>
  )
}

/**
 * 草稿线框模型 — 按 thing.id 从 GEOMETRY map 取几何体分发。
 * 几何文件内部 SketchMesh 带 name={partId}，供 usePartHighlight 驱动。
 */
function SketchModel({ thing, ...state }: { thing: ThingData } & HighlightState) {
  const groupRef = useRef<THREE.Group>(null)
  usePartHighlight(groupRef, thing, state)
  const Sketch = GEOMETRY[thing.id]

  return (
    <group ref={groupRef}>
      {Sketch && <Sketch />}
    </group>
  )
}

/* ─── Annotation Labels ─── */

function AnnotationLabels({
  thing,
  highlightPartId,
  activePartIds,
  dimOthers,
  onPartClick,
}: {
  thing: ThingData
  highlightPartId: string | null
  activePartIds: string[]
  dimOthers: boolean
  onPartClick?: (partId: string) => void
}) {
  const [hovered, setHovered] = useState<string | null>(null)
  const accent = thing.color
  const labelGroupRefs = useRef<(THREE.Group | null)[]>([])
  const lineRefs = useRef<(LineElement | null)[]>([])
  const textRefs = useRef<(TextElement | null)[]>([])
  const layoutTemp = useMemo(
    () => ({
      cameraRight: new THREE.Vector3(),
      cameraUp: new THREE.Vector3(),
      partPosition: new THREE.Vector3(),
      baseWorld: new THREE.Vector3(),
      candidateWorld: new THREE.Vector3(),
      widthEnd: new THREE.Vector3(),
      heightEnd: new THREE.Vector3(),
      projected: new THREE.Vector3(),
      labelOffset: new THREE.Vector3(),
    }),
    [],
  )
  const labelPriority = (partId: string) => {
    const isActive =
      highlightPartId === partId || activePartIds.includes(partId)

    return isActive ? 0 : hovered === partId ? 1 : 2
  }

  useFrame(({ camera, size }) => {
    const order = thing.parts.map((_, index) => index)
    const distances = thing.parts.map(() => 0)
    const occupied: ScreenRect[] = []

    layoutTemp.cameraRight.set(1, 0, 0).applyQuaternion(camera.quaternion)
    layoutTemp.cameraUp.set(0, 1, 0).applyQuaternion(camera.quaternion)

    for (let index = 0; index < thing.parts.length; index += 1) {
      const position = thing.parts[index].position
      layoutTemp.partPosition.set(position[0], position[1], position[2])
      distances[index] = camera.position.distanceToSquared(layoutTemp.partPosition)
    }

    order.sort((left, right) => {
      const priority =
        labelPriority(thing.parts[left].id) - labelPriority(thing.parts[right].id)
      if (priority !== 0) return priority
      return distances[left] - distances[right]
    })

    for (const index of order) {
      const part = thing.parts[index]
      const labelGroup = labelGroupRefs.current[index]
      const line = lineRefs.current[index]
      const text = textRefs.current[index]
      if (!labelGroup || !line || !text) continue

      layoutTemp.baseWorld.set(
        part.position[0] + LABEL_BASE_OFFSET.x,
        part.position[1] + LABEL_BASE_OFFSET.y,
        part.position[2] + LABEL_BASE_OFFSET.z,
      )

      let selectedRect: ScreenRect | null = null
      let selectedOffset = LABEL_OFFSET_CANDIDATES[0]
      const labelWidthWorld = Math.max(
        0.35,
        part.label.length * LABEL_CHARACTER_WIDTH,
      )

      for (const candidateOffset of LABEL_OFFSET_CANDIDATES) {
        layoutTemp.candidateWorld
          .copy(layoutTemp.baseWorld)
          .addScaledVector(layoutTemp.cameraRight, candidateOffset[0])
          .addScaledVector(layoutTemp.cameraUp, candidateOffset[1])

        layoutTemp.projected.copy(layoutTemp.candidateWorld).project(camera)
        const screenX =
          (layoutTemp.projected.x * 0.5 + 0.5) * size.width
        const screenY =
          (-layoutTemp.projected.y * 0.5 + 0.5) * size.height

        layoutTemp.widthEnd
          .copy(layoutTemp.candidateWorld)
          .addScaledVector(layoutTemp.cameraRight, 1)
        layoutTemp.projected.copy(layoutTemp.widthEnd).project(camera)
        const unitEndX =
          (layoutTemp.projected.x * 0.5 + 0.5) * size.width
        const pixelsPerWorldX = Math.abs(unitEndX - screenX)
        const widthPx = labelWidthWorld * pixelsPerWorldX

        layoutTemp.heightEnd
          .copy(layoutTemp.candidateWorld)
          .addScaledVector(layoutTemp.cameraUp, 1)
        layoutTemp.projected.copy(layoutTemp.heightEnd).project(camera)
        const unitEndY =
          (-layoutTemp.projected.y * 0.5 + 0.5) * size.height
        const pixelsPerWorldY = Math.abs(unitEndY - screenY)
        const heightPx = LABEL_HEIGHT * pixelsPerWorldY

        const candidateRect: ScreenRect = {
          left: screenX - 3,
          right: screenX + widthPx + 3,
          top: screenY - heightPx / 2 - 3,
          bottom: screenY + heightPx / 2 + 3,
        }
        const intersects = occupied.some(rect =>
          candidateRect.left < rect.right &&
          candidateRect.right > rect.left &&
          candidateRect.top < rect.bottom &&
          candidateRect.bottom > rect.top,
        )

        if (!intersects) {
          selectedRect = candidateRect
          selectedOffset = candidateOffset
          break
        }
      }

      layoutTemp.labelOffset
        .copy(LABEL_BASE_OFFSET)
        .addScaledVector(layoutTemp.cameraRight, selectedOffset[0])
        .addScaledVector(layoutTemp.cameraUp, selectedOffset[1])
      labelGroup.position.copy(layoutTemp.labelOffset)
      updateLeaderLine(line, layoutTemp.labelOffset)

      const isActive =
        highlightPartId === part.id || activePartIds.includes(part.id)
      const isHovered = hovered === part.id
      const show = isActive || isHovered
      const lineOpacity =
        dimOthers && !isActive ? 0.15 : show ? 0.9 : 0.5
      const isFaded = selectedRect === null

      setMaterialOpacity(text, isFaded ? 0.18 : 1)
      setMaterialOpacity(line, isFaded ? lineOpacity * 0.25 : lineOpacity)

      if (selectedRect) occupied.push(selectedRect)
    }
  })

  return (
    <group>
      {thing.parts.map((part, index) => {
        const hoveredNow = hovered === part.id
        const isActive =
          highlightPartId === part.id || activePartIds.includes(part.id)
        const show = hoveredNow || isActive
        // 常态 dot 跟部件配色角色：警示红件红 dot，灰件墨 dot
        const idleColor = part.finish === 'warning' ? WARNING_RED : INK
        const dotColor = isActive ? accent : hoveredNow ? '#3ECFCF' : idleColor
        const dotOpacity = dimOthers && !isActive ? 0.2 : show ? 1 : 0.85
        return (
          <group key={part.id} position={part.position}>
            {/* Dot marker — clickable (图→词) */}
            <mesh
              onPointerOver={e => {
                e.stopPropagation()
                setHovered(part.id)
                document.body.style.cursor = 'pointer'
              }}
              onPointerOut={() => {
                setHovered(null)
                document.body.style.cursor = ''
              }}
              onClick={e => {
                e.stopPropagation()
                onPartClick?.(part.id)
              }}
              scale={show ? 1.5 : 1}
            >
              <sphereGeometry args={[0.07, 8, 8]} />
              <meshBasicMaterial
                color={dotColor}
                transparent
                opacity={dotOpacity}
              />
            </mesh>
            {/* Leader line from dot to label */}
            <Line
              ref={line => {
                lineRefs.current[index] = line
              }}
              points={LABEL_LINE_POINTS}
              color={show ? dotColor : INK}
              lineWidth={show ? 1.5 : 1}
              transparent
              opacity={dimOthers && !isActive ? 0.15 : show ? 0.9 : 0.5}
            />
            {/* Label — 等宽大写工程标注（billboard） */}
            <group
              ref={group => {
                labelGroupRefs.current[index] = group
              }}
              position={LABEL_BASE_OFFSET.toArray() as [number, number, number]}
            >
              <Text
                ref={text => {
                  textRefs.current[index] = text
                }}
                position={[0, 0, 0]}
                fontSize={0.15}
                color={isActive ? accent : hoveredNow ? INK : INK_SOFT}
                anchorX="left"
                outlineWidth={0.01}
                outlineColor={PAPER}
              >
                {part.label.toUpperCase()}
              </Text>
            </group>
          </group>
        )
      })}
    </group>
  )
}

/* ─── Environment（CAD viewport） ─── */

/** 图纸中心轴线（经典制图符号，虚线淡墨） */
function CenterAxes() {
  return (
    <group position={[0, -1.6, 0]}>
      <Line
        points={[[-6, 0, 0], [6, 0, 0]]}
        color={INK}
        lineWidth={1}
        transparent
        opacity={0.25}
        dashed
        dashSize={0.15}
        gapSize={0.1}
      />
      <Line
        points={[[0, 0, -6], [0, 0, 6]]}
        color={INK}
        lineWidth={1}
        transparent
        opacity={0.25}
        dashed
        dashSize={0.15}
        gapSize={0.1}
      />
    </group>
  )
}

/** 3D 透视地面网格（JX-7b §环境：CAD 虚空工作区的无限延伸淡灰细线） */
function GroundGrid() {
  return (
    <gridHelper
      args={[40, 40, '#C9C2B4', '#C9C2B4']}
      position={[0, -1.6, 0]}
      material-transparent
      material-opacity={0.22}
    />
  )
}
