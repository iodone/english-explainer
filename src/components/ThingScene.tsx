import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Line, Text, Edges } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import type { ThingData } from '../data/types'

/**
 * ThingScene — 3D 草稿图纸 viewer（word-part linking）
 *
 * 草稿图纸风格：几何体只画轮廓边缘（Edges，非三角剖分 wireframe），
 * 统一墨色 #2C2A25 画在方格纸上；高亮/流程步骤才引入 thing accent 色。
 * 模型静止（无 Float 漂浮），图纸感 = 静态制图 + 可拖拽观察。
 *
 * 受控高亮（DESIGN.md §4.1）：
 * - highlightPartId：阅读态，文中部件词点击 → 该部件墨线变 accent + 加粗
 * - activePartIds / pastPartIds / dimOthers：flow 播放态，
 *   当前步 accent 加粗、已过步 50%、未到步 12%
 * - onPartClick：点击部件标注点 → 文章列滚动到对应句（图→词）
 */

const INK = '#2C2A25'
const INK_SOFT = '#5A554C'

/** 每个 thing 的取景距离（模型尺度不同，统一相机会显大小不一） */
const THING_CAMERA: Record<string, [number, number, number]> = {
  'nuclear-reactor': [5, 3, 5],
  helicopter: [3.4, 2.1, 3.4],
  'space-station': [5, 3, 5],
  'curiosity-rover': [4.2, 2.5, 4.2],
  'washing-machine': [4.6, 2.7, 4.6],
}

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
          WIREFRAME-{thing.id.slice(0, 8).toUpperCase()}
        </div>
      </div>
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
        <div className="micro-label">DRAG TO ROTATE · SCROLL TO ZOOM</div>
      </div>

      {/* 3D Canvas — 透明底，透出 CSS 方格纸 */}
      <Canvas
        camera={{ position: THING_CAMERA[thing.id] ?? [5, 3, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <SketchModel
          thing={thing}
          highlightPartId={highlightPartId}
          activePartIds={activePartIds}
          pastPartIds={pastPartIds}
          dimOthers={dimOthers}
        />
        <AnnotationLabels
          thing={thing}
          highlightPartId={highlightPartId}
          activePartIds={activePartIds}
          dimOthers={dimOthers}
          onPartClick={onPartClick}
        />
        <CenterAxes />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={3}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.4}
        />
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
 * SketchMesh 本体不可见，实际画线的是其子级 drei <Edges>
 * （Mesh<LineSegmentsGeometry, LineMaterial>）——操作 LineMaterial。
 */
function usePartHighlight(
  root: React.RefObject<THREE.Group | null>,
  thing: ThingData,
  state: HighlightState,
) {
  const accent = new THREE.Color(thing.color)

  useFrame(() => {
    const group = root.current
    if (!group) return
    group.traverse(node => {
      if (!(node instanceof THREE.Mesh)) return
      const partId = node.name
      if (!partId) return
      const edges = node.children.find(
        c =>
          c instanceof THREE.Mesh &&
          (c.material as THREE.Material | undefined)?.type === 'LineMaterial',
      ) as THREE.Mesh | undefined
      if (!edges) return
      const mat = edges.material as THREE.MeshBasicMaterial & { linewidth: number }
      if (!mat.userData.baseColor) {
        mat.userData.baseColor = mat.color.clone()
      }
      const base = mat.userData.baseColor as THREE.Color

      let targetOpacity = 0.85
      let targetColor = base
      let targetWidth = 1
      if (state.activePartIds.includes(partId)) {
        targetOpacity = 1
        targetColor = accent
        targetWidth = 2.5
      } else if (state.pastPartIds.includes(partId)) {
        targetOpacity = 0.5
      } else if (state.dimOthers) {
        targetOpacity = 0.12
      } else if (state.highlightPartId === partId) {
        targetOpacity = 1
        targetColor = accent
        targetWidth = 2.5
      }

      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, 0.15)
      mat.color.lerp(targetColor, 0.15)
      mat.linewidth = THREE.MathUtils.lerp(mat.linewidth, targetWidth, 0.15)
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
 * 草稿网格体：geometry 只画轮廓边缘（EdgesGeometry），
 * 不画三角剖分线 —— 从"3D 渲染"变成"制图"的关键。
 */
function SketchMesh({
  partId,
  children,
  ...props
}: React.ComponentProps<'mesh'> & { partId?: string }) {
  return (
    <mesh name={partId} {...props}>
      {children}
      <meshBasicMaterial visible={false} />
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
            {/* Label */}
            <Text
              position={[0.35, 0.2, 0]}
              fontSize={0.15}
              color={isActive ? accent : hoveredNow ? INK : INK_SOFT}
              anchorX="left"
              outlineWidth={0.01}
              outlineColor="#F4F1EA"
            >
              {part.label.toUpperCase()}
            </Text>
          </group>
        )
      })}
    </group>
  )
}

/* ─── Environment ─── */

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
