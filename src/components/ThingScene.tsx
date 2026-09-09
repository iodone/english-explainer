import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Line,
  Text,
  Edges,
  Bounds,
  GizmoHelper,
  GizmoViewport,
} from '@react-three/drei'
import { createContext, useContext, useRef, useState } from 'react'
import * as THREE from 'three'
import type { ThingData } from '../data/types'

/**
 * ThingScene — 3D 草稿图纸 viewer（word-part linking）
 *
 * 绘制风格按 DESIGN.md §1.5 JX-7b 规范：
 * - 外壳/结构件 = 半透明灰实体面（体量感）+ 墨 Edges 轮廓（四边形拓扑感）
 * - 地面 = 3D 透视网格（CAD 虚空工作区）+ 虚线中心轴
 * - 右上角坐标轴 gizmo；标签 billboard 等宽大写（工程数据格式）
 * - 取景 = Bounds 自适应（fit + observe，分栏拖动后自动重取景）
 *
 * 受控高亮（DESIGN.md §4.1）：
 * - highlightPartId：阅读态，文中部件词点击 → 该部件墨线变 accent + 加粗
 * - activePartIds / pastPartIds / dimOthers：flow 播放态，
 *   当前步 accent 加粗、已过步 50%、未到步 12%
 * - onPartClick：点击部件本体/标注点 → 文章列滚动到对应句（图→词）
 */

const INK = '#2C2A25'
const INK_SOFT = '#5A554C'
/** JX-7b 军工灰：外壳半透明实体面 */
const HULL_GREY = '#6E6C64'
/** CAD viewport 纸色（Canvas 实底，与文章列纸面同源） */
const PAPER = '#F4F1EA'

/** 图→词点击通道：SketchMesh（几何深处）经 context 触达，不逐层传 prop */
const PartClickContext = createContext<((partId: string) => void) | null>(null)

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
        <PartClickContext.Provider value={onPartClick ?? null}>
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
        </PartClickContext.Provider>
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

/* ─── Part highlight engine ─── */

interface HighlightState {
  highlightPartId: string | null
  activePartIds: string[]
  pastPartIds: string[]
  dimOthers: boolean
}

/**
 * 部件草稿线状态机：每帧 lerp 到目标（点亮有渐变，仪器感）。
 * 双材质：本体半透明灰面（体量）+ 子级 drei <Edges> 墨线（轮廓）。
 */
function usePartHighlight(
  root: React.RefObject<THREE.Group | null>,
  thing: ThingData,
  state: HighlightState,
) {
  const accent = new THREE.Color(thing.color)
  const hullGrey = new THREE.Color(HULL_GREY)
  const ink = new THREE.Color(INK)

  useFrame(() => {
    const group = root.current
    if (!group) return
    group.traverse(node => {
      if (!(node instanceof THREE.Mesh)) return
      const partId = node.name
      if (!partId) return

      // 本体半透明面
      const faceMat = node.material as THREE.MeshBasicMaterial
      // Edges 墨线（drei Edges 渲染为子 Mesh，材质 LineMaterial）
      const edges = node.children.find(
        c =>
          c instanceof THREE.Mesh &&
          (c.material as THREE.Material | undefined)?.type === 'LineMaterial',
      ) as THREE.Mesh | undefined
      if (!edges) return
      const lineMat = edges.material as THREE.MeshBasicMaterial & { linewidth: number }

      let lineOpacity = 0.85
      let lineColor: THREE.Color = ink
      let lineWidth = 1
      let faceOpacity = 0.1
      let faceColor: THREE.Color = hullGrey

      if (state.activePartIds.includes(partId)) {
        lineOpacity = 1; lineColor = accent; lineWidth = 2.5
        faceOpacity = 0.28; faceColor = accent
      } else if (state.pastPartIds.includes(partId)) {
        lineOpacity = 0.5; faceOpacity = 0.06
      } else if (state.dimOthers) {
        lineOpacity = 0.12; faceOpacity = 0.02
      } else if (state.highlightPartId === partId) {
        lineOpacity = 1; lineColor = accent; lineWidth = 2.5
        faceOpacity = 0.28; faceColor = accent
      }

      faceMat.opacity = THREE.MathUtils.lerp(faceMat.opacity, faceOpacity, 0.15)
      faceMat.color.lerp(faceColor, 0.15)
      lineMat.opacity = THREE.MathUtils.lerp(lineMat.opacity, lineOpacity, 0.15)
      lineMat.color.lerp(lineColor, 0.15)
      lineMat.linewidth = THREE.MathUtils.lerp(lineMat.linewidth, lineWidth, 0.15)
    })
  })
}

/**
 * 草稿线框模型 — 按 thing.id 分发几何体。
 * SketchMesh 带 name={partId}，供 usePartHighlight 驱动。
 */
function SketchModel({ thing, ...state }: { thing: ThingData } & HighlightState) {
  const groupRef = useRef<THREE.Group>(null)
  usePartHighlight(groupRef, thing, state)

  return (
    <group ref={groupRef}>
      {thing.id === 'nuclear-reactor' && <NuclearReactorSketch />}
      {thing.id === 'helicopter' && <HelicopterSketch />}
      {thing.id === 'space-station' && <SpaceStationSketch />}
      {thing.id === 'curiosity-rover' && <CuriosityRoverSketch />}
      {thing.id === 'washing-machine' && <WashingMachineSketch />}
    </group>
  )
}

/* ─── Sketch primitives ─── */

/**
 * 草稿网格体（JX-7b §材质分层）：
 * 半透明军工灰实体面（体量/遮蔽感）+ Edges 墨线轮廓（非三角剖分）。
 * 点击本体 = 点部件（图→词）。
 */
function SketchMesh({
  partId,
  children,
  ...props
}: React.ComponentProps<'mesh'> & { partId?: string }) {
  const onPartClick = useContext(PartClickContext)
  const clickable = !!partId && !!onPartClick

  return (
    <mesh
      name={partId}
      {...props}
      onClick={
        clickable
          ? e => {
              e.stopPropagation()
              onPartClick!(partId!)
            }
          : undefined
      }
      onPointerOver={
        clickable
          ? e => {
              e.stopPropagation()
              document.body.style.cursor = 'pointer'
            }
          : undefined
      }
      onPointerOut={
        clickable
          ? () => {
              document.body.style.cursor = ''
            }
          : undefined
      }
    >
      {children}
      <meshBasicMaterial
        color={HULL_GREY}
        transparent
        opacity={0.1}
        depthWrite={false}
      />
      <Edges color={INK} lineWidth={1} threshold={10} transparent opacity={0.85} />
    </mesh>
  )
}

/** 细杆 —— 可被部件高亮命中的"线"（4 面方杆，手绘粗线感） */
function Rod({
  from,
  to,
  radius = 0.03,
  partId,
}: {
  from: [number, number, number]
  to: [number, number, number]
  radius?: number
  partId?: string
}) {
  const start = new THREE.Vector3(...from)
  const end = new THREE.Vector3(...to)
  const mid = start.clone().add(end).multiplyScalar(0.5)
  const dir = end.clone().sub(start)
  const quat = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    dir.clone().normalize(),
  )
  const { x, y, z, w } = quat
  return (
    <SketchMesh
      partId={partId}
      position={mid.toArray()}
      quaternion={[x, y, z, w]}
    >
      <cylinderGeometry args={[radius, radius, dir.length(), 4]} />
    </SketchMesh>
  )
}

/** 淡墨辅助线（面板格线等，不参与高亮） */
function DraftLine({ points }: { points: [number, number, number][] }) {
  return (
    <Line
      points={points}
      color={INK}
      lineWidth={1}
      transparent
      opacity={0.4}
    />
  )
}

/* ─── Geometries（草稿化，统一墨线） ─── */

function NuclearReactorSketch() {
  return (
    <group>
      {/* Containment dome — hemisphere */}
      <SketchMesh partId="building" position={[0, 2, 0]}>
        <sphereGeometry args={[2, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      {/* Reactor vessel — cylinder */}
      <SketchMesh partId="core" position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 3, 12]} />
      </SketchMesh>
      {/* Control rods */}
      {[-0.4, 0, 0.4].map((x, i) => (
        <SketchMesh key={i} partId="rods" position={[x, 2.2, 0]}>
          <boxGeometry args={[0.15, 1.5, 0.15]} />
        </SketchMesh>
      ))}
      {/* Cooling towers */}
      {[-2.5, 2.5].map((x, i) => (
        <SketchMesh key={i} partId="water" position={[x, 1, 0]}>
          <cylinderGeometry args={[0.6, 0.8, 3, 8]} />
        </SketchMesh>
      ))}
      {/* Steam pipes → turbine */}
      <Rod from={[1.2, 1, 0]} to={[2.6, 1, 0]} partId="steam" />
      <Rod from={[-1.2, 1, 0]} to={[-2.6, 1, 0]} partId="steam" />
      {/* Power wheel (turbine) */}
      <SketchMesh partId="wheel" position={[3.2, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.5, 0.35, 10]} />
      </SketchMesh>
      {/* Turbine blades */}
      {[0, 1, 2, 3, 4, 5].map(i => {
        const angle = (i / 6) * Math.PI * 2
        return (
          <SketchMesh
            key={i}
            partId="wheel"
            position={[3.2 + Math.cos(angle) * 0.7, 1 + Math.sin(angle) * 0.7, 0]}
            rotation={[0, 0, angle + Math.PI / 2]}
          >
            <boxGeometry args={[0.35, 0.06, 0.06]} />
          </SketchMesh>
        )
      })}
    </group>
  )
}

function HelicopterSketch() {
  return (
    <group>
      {/* Fuselage */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <capsuleGeometry args={[0.6, 2, 8, 12]} />
      </SketchMesh>
      {/* Main rotor */}
      <SketchMesh partId="rotor" position={[0, 1.2, 0]}>
        <boxGeometry args={[4, 0.05, 0.3]} />
      </SketchMesh>
      {/* Rotor hub */}
      <SketchMesh partId="rotor" position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 8]} />
      </SketchMesh>
      {/* Tail boom */}
      <SketchMesh partId="tail" position={[0, 0.2, -2.5]}>
        <boxGeometry args={[0.3, 0.3, 2.5]} />
      </SketchMesh>
      {/* Tail rotor */}
      <SketchMesh partId="tail" position={[0.3, 0.2, -3.8]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[1, 0.03, 0.15]} />
      </SketchMesh>
      {/* Landing skids — two rails + struts */}
      <Rod from={[-0.5, -1.2, 0.9]} to={[-0.5, -1.2, -0.9]} partId="skids" />
      <Rod from={[0.5, -1.2, 0.9]} to={[0.5, -1.2, -0.9]} partId="skids" />
      <Rod from={[-0.5, -0.8, 0.6]} to={[-0.5, -1.2, 0.6]} partId="skids" />
      <Rod from={[-0.5, -0.8, -0.6]} to={[-0.5, -1.2, -0.6]} partId="skids" />
      <Rod from={[0.5, -0.8, 0.6]} to={[0.5, -1.2, 0.6]} partId="skids" />
      <Rod from={[0.5, -0.8, -0.6]} to={[0.5, -1.2, -0.6]} partId="skids" />
      {/* Windshield */}
      <SketchMesh partId="window" position={[0, 0.3, 1.2]}>
        <sphereGeometry args={[0.5, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
    </group>
  )
}

function SpaceStationSketch() {
  return (
    <group>
      {/* Central truss */}
      <SketchMesh partId="truss" position={[0, 0, 0]}>
        <boxGeometry args={[5, 0.3, 0.3]} />
      </SketchMesh>
      {/* Modules */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <SketchMesh key={i} partId="modules" position={[x, 0, 0.8]}>
          <cylinderGeometry args={[0.4, 0.4, 1.2, 8]} />
        </SketchMesh>
      ))}
      {/* Solar arrays */}
      {[-3, 3].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <SketchMesh partId="solar">
            <boxGeometry args={[2.5, 1.8, 0.05]} />
          </SketchMesh>
          {/* Panel grid lines */}
          <DraftLine points={[[-1.25, -0.9, 0.01], [-1.25, 0.9, 0.01]]} />
          <DraftLine points={[[-0.625, -0.9, 0.01], [-0.625, 0.9, 0.01]]} />
          <DraftLine points={[[0, -0.9, 0.01], [0, 0.9, 0.01]]} />
          <DraftLine points={[[0.625, -0.9, 0.01], [0.625, 0.9, 0.01]]} />
        </group>
      ))}
      {/* Radiators */}
      <SketchMesh partId="radiators" position={[2, 1, 0]}>
        <boxGeometry args={[1.5, 1, 0.05]} />
      </SketchMesh>
      {/* Cupola */}
      <SketchMesh partId="dome" position={[0, -0.5, 1.2]}>
        <sphereGeometry args={[0.3, 8, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </SketchMesh>
      {/* Long grabber (Canadarm) — two segments */}
      <Rod from={[-0.5, 0.9, 0.8]} to={[0.2, 1.4, 0.4]} partId="arm" />
      <Rod from={[0.2, 1.4, 0.4]} to={[0.9, 1.7, 0]} partId="arm" />
    </group>
  )
}

function CuriosityRoverSketch() {
  return (
    <group>
      {/* Body box */}
      <SketchMesh partId="body" position={[0, 0.5, 0]}>
        <boxGeometry args={[1.5, 0.8, 2]} />
      </SketchMesh>
      {/* Camera mast */}
      <SketchMesh partId="mast" position={[0, 1.8, 0.5]}>
        <cylinderGeometry args={[0.08, 0.08, 1.5, 6]} />
      </SketchMesh>
      {/* Camera head */}
      <SketchMesh partId="mast" position={[0, 2.5, 0.5]}>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
      </SketchMesh>
      {/* Wheels — 6 of them */}
      {[[-0.9, 0, 0.7], [-0.9, 0, -0.7], [0.9, 0, 0.7], [0.9, 0, -0.7], [-0.9, 0, 0], [0.9, 0, 0]].map(([x, y, z], i) => (
        <SketchMesh key={i} partId="wheels" position={[x, y, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.15, 12]} />
        </SketchMesh>
      ))}
      {/* Robotic arm — two segments */}
      <Rod from={[0, 0.5, 1]} to={[0, 0.35, 1.7]} partId="arm" radius={0.04} />
      <Rod from={[0, 0.35, 1.7]} to={[0, 0.1, 2.3]} partId="arm" radius={0.04} />
      {/* RTG power */}
      <SketchMesh partId="power" position={[-1, 0.8, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
      </SketchMesh>
    </group>
  )
}

function WashingMachineSketch() {
  return (
    <group>
      {/* Washing machine */}
      <SketchMesh partId="drum" position={[-1.2, 0, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
      </SketchMesh>
      {/* Drum */}
      <SketchMesh partId="drum" position={[-1.2, 0, 0.76]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.05, 8, 16]} />
      </SketchMesh>
      {/* Door circle */}
      <SketchMesh partId="drum" position={[-1.2, 0, 0.78]}>
        <ringGeometry args={[0.4, 0.55, 16]} />
      </SketchMesh>
      {/* Dryer */}
      <SketchMesh partId="hot-air" position={[1.2, 0, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
      </SketchMesh>
      {/* Dryer drum */}
      <SketchMesh partId="hot-air" position={[1.2, 0, 0.76]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.05, 8, 16]} />
      </SketchMesh>
      {/* Control panel / soap box area */}
      <SketchMesh partId="soap" position={[-1.2, 1.1, 0.76]}>
        <boxGeometry args={[1.2, 0.3, 0.05]} />
      </SketchMesh>
      {/* Connection pipe */}
      <Rod from={[-0.45, 0.5, 0]} to={[0.45, 0.5, 0]} partId="pump" />
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

  return (
    <group>
      {thing.parts.map(part => {
        const hoveredNow = hovered === part.id
        const isActive =
          highlightPartId === part.id || activePartIds.includes(part.id)
        const show = hoveredNow || isActive
        const dotColor = isActive ? accent : hoveredNow ? '#3ECFCF' : INK
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
              points={[[0, 0, 0], [0.3, 0.2, 0]]}
              color={show ? dotColor : INK}
              lineWidth={show ? 1.5 : 1}
              transparent
              opacity={dimOthers && !isActive ? 0.15 : show ? 0.9 : 0.5}
            />
            {/* Label — 等宽大写工程标注（billboard） */}
            <Text
              position={[0.35, 0.2, 0]}
              fontSize={0.15}
              color={isActive ? accent : hoveredNow ? INK : INK_SOFT}
              anchorX="left"
              outlineWidth={0.01}
              outlineColor={PAPER}
            >
              {part.label.toUpperCase()}
            </Text>
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
