import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Line,
  Html,
  Bounds,
  GizmoHelper,
  useGizmoContext,
} from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import type { ComponentRef } from 'react'
import * as THREE from 'three'
import type { ThingData } from '../data/types'
import {
  GEOMETRY,
  AccentContext,
  PartMetaContext,
  usePartHighlight,
  INK,
  WARNING_RED,
} from '../geometry'
import type { HighlightState, PartMeta } from '../geometry'

/** CAD viewport 纸色（Canvas 实底，与文章列纸面同源） */
const PAPER = '#F4F1EA'
/** 标签落点候选：沿部件包围盒"朝外方向"的试探距离（世界单位，逐级外推找空位） */
const LABEL_REACH_CANDIDATES = [0.95, 1.3, 1.7, 2.15, 2.65]
/** 包围盒朝外点的试探比例（0=中心，1=盒边缘） */
const ANCHOR_EDGE_T = [0.72, 1.0]
/** 引线水平尾巴长度（世界单位） */
const LABEL_TAIL = 0.5
/** 标签多行文本的样式（DOM 渲染，可直接读设计字体令牌） */
const LABEL_STYLE = {
  fontFamily: "var(--font-mono)",
  fontSize: '10px',
  letterSpacing: '0.06em',
  lineHeight: '1.25',
} as const
/** 标签文本宽高的粗略估算（DOM 测量前的碰撞预判，屏幕像素） */
const LABEL_ROW_PX = 13
const LABEL_CHAR_PX = 6.6

type LineElement = ComponentRef<typeof Line>

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
 * - 右上角坐标轴 gizmo；标注走工程图 leader line（包围盒边缘出线 + 折角 + 两行中英）
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

  // 正交 = 工程图观看方式（blueprint 技法移植），默认透视保留 3D 辅证的亲和力
  const [ortho, setOrtho] = useState(false)
  const accentColor = useMemo(() => new THREE.Color(thing.color), [thing.color])
  // 几何根组：标注层读它的包围盒来算部件边缘锚点
  const partsRef = useRef<THREE.Group>(null)

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

      {/* 正交 / 透视切换（工程图观看方式） */}
      <button
        className="absolute bottom-4 right-4 z-10 micro-label px-3 py-1.5 border border-ink-faint text-ink-soft hover:border-hud-cyan hover:text-hud-cyan pointer-events-auto"
        onClick={() => setOrtho(o => !o)}
      >
        VIEW: {ortho ? 'ORTHO' : 'PERSPECTIVE'}
      </button>

      {/* 3D Canvas — 纸色实底（CAD viewport），3D 地面网格提供透视参考 */}
      <Canvas
        key={ortho ? 'ortho' : 'persp'}
        orthographic={ortho}
        camera={
          ortho
            ? { position: [5, 3.6, 5], zoom: 110 }
            : { position: [5, 3, 5], fov: 50 }
        }
        style={{ background: PAPER }}
      >
        <AccentContext.Provider value={accentColor}>
          <PartMetaContext.Provider value={partMeta}>
            {/* key=thing.id：切模型时 Bounds 重新 fit；margin 略松给标注留空间 */}
            <Bounds key={thing.id} fit clip observe margin={1.1}>
              <SketchModel
                thing={thing}
                partsRef={partsRef}
                highlightPartId={highlightPartId}
                activePartIds={activePartIds}
                pastPartIds={pastPartIds}
                dimOthers={dimOthers}
              />
            </Bounds>
          </PartMetaContext.Provider>
          <AnnotationLabels
            thing={thing}
            partsRef={partsRef}
            highlightPartId={highlightPartId}
            activePartIds={activePartIds}
            dimOthers={dimOthers}
            onPartClick={onPartClick}
          />
        </AccentContext.Provider>
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
        <AxisGizmo />
      </Canvas>
    </div>
  )
}

/**
 * 草稿线框模型 — 按 thing.id 从 GEOMETRY map 取几何体分发。
 * 几何文件内部 SketchMesh 带 name={partId}，供 usePartHighlight 驱动。
 */
function SketchModel({
  thing,
  partsRef,
  ...state
}: { thing: ThingData; partsRef: React.RefObject<THREE.Group | null> } & HighlightState) {
  usePartHighlight(partsRef, thing, state)
  const Sketch = GEOMETRY[thing.id]

  return (
    <group ref={partsRef}>
      {Sketch && <Sketch />}
    </group>
  )
}

/* ─── Annotation Labels ─── */

interface Rect {
  left: number
  right: number
  top: number
  bottom: number
}

/**
 * 工程图标注层（2026-09-29 重做 · A/D 方案）
 *
 * 与旧版的区别：
 * - 锚点从"部件中心 + 固定偏移"改为"部件包围盒朝外点"——引线从几何边缘出发
 * - 引线走真图纸的 leader line 语法：部件点 → 出形 → 斜段 → 水平尾巴 → 文字
 * - 标签用 DOM 渲染（drei Html）：读得到设计字体令牌、可放中英两行、横排不随相机转
 * - 避让：沿朝外方向逐级外推，用屏幕矩形占用检测挑空位；都不行就淡出（不叠字）
 *
 * 坐标说明：AnnotationLabels 的 group 在场景根（无变换），因此引线/标签可以直接
 * 用世界坐标；部件点（part.position 在模型局部空间）经 root.localToWorld 换算。
 */
function AnnotationLabels({
  thing,
  partsRef,
  highlightPartId,
  activePartIds,
  dimOthers,
  onPartClick,
}: {
  thing: ThingData
  partsRef: React.RefObject<THREE.Group | null>
  highlightPartId: string | null
  activePartIds: string[]
  dimOthers: boolean
  onPartClick?: (partId: string) => void
}) {
  const [hovered, setHovered] = useState<string | null>(null)
  const accent = thing.color
  const lineRefs = useRef<(LineElement | null)[]>([])
  const htmlRefs = useRef<(THREE.Group | null)[]>([])
  const labelRefs = useRef<(HTMLDivElement | null)[]>([])

  const tmp = useMemo(
    () => ({
      right: new THREE.Vector3(),
      up: new THREE.Vector3(),
      box: new THREE.Box3(),
      size: new THREE.Vector3(),
      nodeCenter: new THREE.Vector3(),
      rootWorld: new THREE.Vector3(),
      normal: new THREE.Vector3(),
      scratch: new THREE.Vector3(),
      projected: new THREE.Vector3(),
      vis: new THREE.Vector3(),
      dot: new THREE.Vector3(),
      edge: new THREE.Vector3(),
      shoulder: new THREE.Vector3(),
      label: new THREE.Vector3(),
      localPart: new THREE.Vector3(),
    }),
    [],
  )

  interface BoxEntry {
    center: THREE.Vector3
    normal: THREE.Vector3
    radius: number
  }

  const labelPriority = (partId: string) =>
    highlightPartId === partId || activePartIds.includes(partId)
      ? 0
      : hovered === partId
        ? 1
        : 2

  useFrame(({ camera, size }) => {
    const root = partsRef.current
    if (!root) return

    // root 的世界矩阵（Bounds 每帧改它的 scale，必须显式刷新）
    root.updateWorldMatrix(true, false)
    root.getWorldPosition(tmp.rootWorld)

    // ① 部件包围盒（世界）→ 中心 / 朝外法线 / 半径
    const boxes = new Map<string, BoxEntry>()
    const counts = new Map<string, number>()
    root.traverse(node => {
      if (!(node instanceof THREE.Mesh) || !node.name) return
      tmp.box.setFromObject(node)
      if (tmp.box.isEmpty()) return
      tmp.box.getCenter(tmp.nodeCenter)
      tmp.box.getSize(tmp.size)
      const entry =
        boxes.get(node.name) ??
        { center: new THREE.Vector3(), normal: new THREE.Vector3(), radius: 0 }
      entry.center.add(tmp.nodeCenter)
      entry.radius = Math.max(entry.radius, tmp.size.length() / 2)
      tmp.scratch.copy(tmp.nodeCenter).sub(tmp.rootWorld)
      if (tmp.scratch.lengthSq() > 1e-8) entry.normal.add(tmp.scratch.normalize())
      boxes.set(node.name, entry)
      counts.set(node.name, (counts.get(node.name) ?? 0) + 1)
    })
    // 同名多 mesh（面 + 外壳描边）取平均
    for (const [id, entry] of boxes) {
      const n = counts.get(id) ?? 1
      if (n > 1) entry.center.divideScalar(n)
    }

    tmp.right.set(1, 0, 0).applyQuaternion(camera.quaternion)
    tmp.up.set(0, 1, 0).applyQuaternion(camera.quaternion)

    const toScreen = (world: THREE.Vector3) => {
      tmp.projected.copy(world).project(camera)
      return {
        x: (tmp.projected.x * 0.5 + 0.5) * size.width,
        y: (-tmp.projected.y * 0.5 + 0.5) * size.height,
        visible: tmp.projected.z < 1,
      }
    }

    const occupied: Rect[] = []
    const order = thing.parts.map((_, i) => i)
    const distanceOf = thing.parts.map(part => {
      const entry = boxes.get(part.id)
      const c = entry?.center ?? tmp.dot.set(...part.position)
      return camera.position.distanceToSquared(c)
    })
    order.sort((a, b) => {
      const p = labelPriority(thing.parts[a].id) - labelPriority(thing.parts[b].id)
      return p !== 0 ? p : distanceOf[a] - distanceOf[b]
    })

    for (const index of order) {
      const part = thing.parts[index]
      const line = lineRefs.current[index]
      const htmlGroup = htmlRefs.current[index]
      const labelEl = labelRefs.current[index]
      if (!line || !htmlGroup || !labelEl) continue
      // 无几何的部件退化：用数据里的 position 当锚点
      const entry =
        boxes.get(part.id) ??
        {
          center: new THREE.Vector3(...part.position),
          normal: new THREE.Vector3(0, 1, 0),
          radius: 0.2,
        }

      // ② 朝外方向：部件几何法线，退化用"相对图纸中心"
      tmp.normal.copy(entry.normal)
      if (tmp.normal.lengthSq() < 1e-8) tmp.normal.copy(entry.center).sub(tmp.rootWorld)
      if (tmp.normal.lengthSq() < 1e-8) tmp.normal.set(0, 1, 0)
      tmp.normal.normalize()
      const radius = Math.max(entry.radius, 0.14)

      // 屏幕朝向（相机右/上基分解）；折角因此横平竖直，读起来像图纸
      const sx = tmp.normal.dot(tmp.right)
      const sy = tmp.normal.dot(tmp.up)
      tmp.vis.copy(tmp.right).multiplyScalar(sx).addScaledVector(tmp.up, sy)
      if (tmp.vis.lengthSq() < 1e-6) tmp.vis.copy(tmp.up)
      tmp.vis.normalize()

      const rows = part.realName ? 2 : 1
      const longest = Math.max(part.label.length, part.realName?.length ?? 0)
      const estWidth = longest * LABEL_CHAR_PX + 8
      const estHeight = rows * LABEL_ROW_PX

      // 部件点（模型局部 → 世界）：引线从这里出发
      tmp.localPart.set(part.position[0], part.position[1], part.position[2])
      const dotWorld = root.localToWorld(tmp.localPart.clone())

      type Placement = {
        edge: THREE.Vector3
        shoulder: THREE.Vector3
        label: THREE.Vector3
      }
      let placed: Placement | null = null
      let nearest: (Placement & { dist: number }) | null = null

      for (const t of ANCHOR_EDGE_T) {
        const edgeWorld = entry.center.clone().addScaledVector(tmp.normal, radius * t)
        if (!toScreen(edgeWorld).visible) continue

        for (const reach of LABEL_REACH_CANDIDATES) {
          const shoulderWorld = edgeWorld.clone().addScaledVector(tmp.vis, reach)
          const labelWorld = shoulderWorld
            .clone()
            .addScaledVector(tmp.right, (sx >= 0 ? 1 : -1) * LABEL_TAIL)
          const s = toScreen(labelWorld)
          if (!s.visible) continue

          const left = sx >= 0 ? s.x : s.x - estWidth
          const rect: Rect = {
            left: left - 4,
            right: left + estWidth + 4,
            top: s.y - estHeight / 2 - 3,
            bottom: s.y + estHeight / 2 + 3,
          }
          const candidate = { edge: edgeWorld, shoulder: shoulderWorld, label: labelWorld }
          const dist = toScreen(edgeWorld).x - s.x
          if (!nearest || Math.abs(dist) < Math.abs(nearest.dist)) {
            nearest = { ...candidate, dist }
          }

          const hit = occupied.some(
            r =>
              rect.left < r.right &&
              rect.right > r.left &&
              rect.top < r.bottom &&
              rect.bottom > r.top,
          )
          if (!hit) {
            placed = candidate
            occupied.push(rect)
            break
          }
        }
        if (placed) break
      }

      const pick = placed ?? nearest
      const faded = !placed
      const isActive = highlightPartId === part.id || activePartIds.includes(part.id)
      const isHovered = hovered === part.id
      const show = isActive || isHovered

      if (pick) {
        // 引线：部件点 → 出形点 → 斜段肩点 → 水平尾巴终点（4 点 3 段）
        line.geometry.setPositions([
          dotWorld.x, dotWorld.y, dotWorld.z,
          pick.edge.x, pick.edge.y, pick.edge.z,
          pick.shoulder.x, pick.shoulder.y, pick.shoulder.z,
          pick.label.x, pick.label.y, pick.label.z,
        ])
        line.computeLineDistances?.()
        htmlGroup.position.copy(pick.label)
        htmlGroup.visible = true
      } else {
        htmlGroup.visible = false
      }

      labelEl.style.opacity = String(faded ? 0.35 : show ? 1 : 0.9)
      labelEl.style.transform =
        sx >= 0 ? 'translateY(-50%)' : 'translate(-100%, -50%)'
      labelEl.style.textAlign = sx >= 0 ? 'left' : 'right'
      labelEl.style.color = isActive ? accent : isHovered ? '#3ECFCF' : '#5A554C'
      setMaterialOpacity(line, dimOthers && !isActive ? 0.15 : show ? 0.9 : 0.5)
    }
  })

  return (
    <group>
      {thing.parts.map((part, index) => {
        const hoveredNow = hovered === part.id
        const isActive = highlightPartId === part.id || activePartIds.includes(part.id)
        const show = hoveredNow || isActive
        const idleColor = part.finish === 'warning' ? WARNING_RED : INK
        const dotColor = isActive ? accent : hoveredNow ? '#3ECFCF' : idleColor
        const dotOpacity = dimOthers && !isActive ? 0.2 : show ? 1 : 0.85
        return (
          <group key={part.id}>
            {/* 部件点 — 可点击（图→词），留在模型坐标系内 */}
            <mesh
              position={part.position}
              scale={show ? 1.5 : 1}
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
            >
              <sphereGeometry args={[0.07, 8, 8]} />
              <meshBasicMaterial color={dotColor} transparent opacity={dotOpacity} />
            </mesh>

            {/* 折角引线：点 → 出形 → 斜段 → 平段，每帧按包围盒重排 */}
            <Line
              ref={node => {
                lineRefs.current[index] = node
              }}
              points={[
                [0, 0, 0],
                [0.2, 0.2, 0],
                [0.35, 0.35, 0],
                [0.55, 0.35, 0],
              ]}
              color={show ? dotColor : INK}
              lineWidth={show ? 1.5 : 1}
              transparent
              opacity={0.5}
            />

            {/* 标签：DOM 渲染，横排两行（简单名 / 真名），不随相机旋转 */}
            <group
              ref={node => {
                htmlRefs.current[index] = node
              }}
            >
              <Html position={[0, 0, 0]} zIndexRange={[8, 0]} style={{ pointerEvents: 'none' }}>
                <div
                  ref={node => {
                    labelRefs.current[index] = node
                  }}
                  style={{ ...LABEL_STYLE, whiteSpace: 'nowrap', opacity: 0.9 }}
                >
                  <span style={{ display: 'block' }}>{part.label.toUpperCase()}</span>
                  {part.realName && (
                    <span style={{ display: 'block', color: '#8E8678', fontSize: '9px' }}>
                      {part.realName}
                    </span>
                  )}
                </div>
              </Html>
            </group>
          </group>
        )
      })}
    </group>
  )
}

/* ─── AxisGizmo（制图室版三向轴标） ─── */

/** 轴头标签贴图：纸色圆底 + 墨色描边 + 等宽大写字母（全墨色，唯一强调留给原点 HUD 青点） */
function makeAxisLabel(text: string, color: string) {
  const canvas = document.createElement('canvas')
  canvas.width = 96
  canvas.height = 96
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, 96, 96)
  ctx.beginPath()
  ctx.arc(48, 48, 30, 0, Math.PI * 2)
  ctx.fillStyle = PAPER
  ctx.fill()
  ctx.lineWidth = 3
  ctx.strokeStyle = color
  ctx.stroke()
  ctx.font = 'bold 38px ui-monospace, SFMono-Regular, Menlo, monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#2C2A25'
  ctx.fillText(text, 48, 51)
  const texture = new THREE.CanvasTexture(canvas)
  texture.anisotropy = 4
  return texture
}

/** 单条轴：墨色细杆 + 纸色轴头标签 */
function Axis({
  dir,
  letter,
  color,
  onPick,
}: {
  dir: [number, number, number]
  letter: string
  color: string
  onPick?: (e: { stopPropagation: () => void; object: THREE.Object3D }) => void
}) {
  const texture = useMemo(() => makeAxisLabel(letter, color), [letter, color])
  const rotation = useMemo(() => {
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(...dir).normalize(),
    )
    return new THREE.Euler().setFromQuaternion(q)
  }, [dir])

  return (
    <>
      {/* 轴杆：细墨线（制图线条，不用实心块） */}
      <mesh position={[dir[0] * 0.42, dir[1] * 0.42, dir[2] * 0.42]} rotation={rotation}>
        <cylinderGeometry args={[0.012, 0.012, 0.84, 6]} />
        <meshBasicMaterial color={INK} toneMapped={false} transparent opacity={0.75} />
      </mesh>
      {/* 轴头：贴图 sprite，可点（点一下相机对齐该轴） */}
      <sprite
        position={dir}
        scale={[0.9, 0.9, 0.9]}
        onPointerDown={
          onPick
            ? e => {
                e.stopPropagation()
                onPick(e as never)
              }
            : undefined
        }
      >
        <spriteMaterial map={texture} alphaTest={0.25} toneMapped={false} />
      </sprite>
    </>
  )
}

/**
 * 三向轴标：替代默认 R/G/B GizmoViewport。
 * 纸面 + 墨线语言，读作"坐标轴指示符"而不是彩色控件。
 */
function AxisGizmo() {
  const { tweenCamera } = useGizmoContext()
  return (
    <GizmoHelper alignment="top-right" margin={[76, 76]}>
      <group scale={40}>
        <Axis dir={[1, 0, 0]} letter="X" color={INK} onPick={e => tweenCamera(e.object.position)} />
        <Axis dir={[0, 1, 0]} letter="Y" color={INK} onPick={e => tweenCamera(e.object.position)} />
        <Axis dir={[0, 0, 1]} letter="Z" color={INK} onPick={e => tweenCamera(e.object.position)} />
        {/* 原点识别点：全轴唯一强调色（HUD 青） */}
        <mesh>
          <sphereGeometry args={[0.05, 10, 10]} />
          <meshBasicMaterial color="#3ECFCF" toneMapped={false} />
        </mesh>
      </group>
    </GizmoHelper>
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
