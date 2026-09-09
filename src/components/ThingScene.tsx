import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Line, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import type { ThingData } from '../data/types'

/**
 * ThingScene — 3D wireframe viewer with word-part linking
 *
 * 受控高亮（DESIGN.md §4.1）：
 * - highlightPartId：阅读态，文中部件词点击 → 该部件点亮（thing.color）
 * - activePartIds / pastPartIds / dimOthers：flow 播放态，
 *   当前步全亮、已过步 55%、未到步 15%
 * - onPartClick：点击部件标注点 → 文章列滚动到对应句（图→词）
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

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#3ECFCF" />
        <WireframeModel
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
        <GridFloor />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={3}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
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

/** 部件材质状态机：每帧 lerp 到目标亮度，点亮有渐变（仪器感） */
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
      if (!partId) return // 未标注部件的装饰 mesh 不参与
      const mat = node.material as THREE.MeshBasicMaterial
      if (!mat.userData.baseColor) {
        mat.userData.baseColor = mat.color.clone()
      }
      const base = mat.userData.baseColor as THREE.Color

      let targetOpacity = 0.6
      let targetColor = base
      if (state.activePartIds.includes(partId)) {
        targetOpacity = 0.95
        targetColor = accent
      } else if (state.pastPartIds.includes(partId)) {
        targetOpacity = 0.55
      } else if (state.dimOthers) {
        targetOpacity = 0.15
      } else if (state.highlightPartId === partId) {
        targetOpacity = 0.95
        targetColor = accent
      }

      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, 0.15)
      mat.color.lerp(targetColor, 0.15)
    })
  })
}

/**
 * Procedural wireframe model — switches geometry based on thing.id
 * 每个 mesh 带 name={partId}，供 usePartHighlight 驱动
 */
function WireframeModel({ thing, ...state }: { thing: ThingData } & HighlightState) {
  const groupRef = useRef<THREE.Group>(null)
  usePartHighlight(groupRef, thing, state)

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        {thing.id === 'nuclear-reactor' && <NuclearReactorWire />}
        {thing.id === 'helicopter' && <HelicopterWire />}
        {thing.id === 'space-station' && <SpaceStationWire />}
        {thing.id === 'curiosity-rover' && <CuriosityRoverWire />}
        {thing.id === 'washing-machine' && <WashingMachineWire />}
      </group>
    </Float>
  )
}

/* ─── Wireframe Geometries ─── */

function WireframeMaterial({ color = '#3ECFCF' }: { color?: string }) {
  return (
    <meshBasicMaterial
      color={color}
      wireframe
      transparent
      opacity={0.6}
    />
  )
}

function GlowLine({ points, color = '#3ECFCF' }: { points: [number, number, number][]; color?: string }) {
  return (
    <Line
      points={points}
      color={color}
      lineWidth={1.5}
      transparent
      opacity={0.5}
    />
  )
}

/** 细杆 mesh —— 可被部件高亮命中的"线"（GlowLine 的 Line 不参与高亮） */
function Rod({
  from,
  to,
  radius = 0.03,
  partId,
  color = '#3ECFCF',
}: {
  from: [number, number, number]
  to: [number, number, number]
  radius?: number
  partId?: string
  color?: string
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
    <mesh
      name={partId}
      position={mid.toArray()}
      quaternion={[x, y, z, w]}
    >
      <cylinderGeometry args={[radius, radius, dir.length(), 6]} />
      <WireframeMaterial color={color} />
    </mesh>
  )
}

function NuclearReactorWire() {
  return (
    <group>
      {/* Containment dome — hemisphere */}
      <mesh name="building" position={[0, 2, 0]}>
        <sphereGeometry args={[2, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <WireframeMaterial />
      </mesh>
      {/* Reactor vessel — cylinder */}
      <mesh name="core" position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 3, 12]} />
        <WireframeMaterial color="#E8453C" />
      </mesh>
      {/* Control rods */}
      {[-0.4, 0, 0.4].map((x, i) => (
        <mesh key={i} name="rods" position={[x, 2.2, 0]}>
          <boxGeometry args={[0.15, 1.5, 0.15]} />
          <WireframeMaterial color="#F0923A" />
        </mesh>
      ))}
      {/* Cooling towers */}
      {[-2.5, 2.5].map((x, i) => (
        <mesh key={i} name="water" position={[x, 1, 0]}>
          <cylinderGeometry args={[0.6, 0.8, 3, 8]} />
          <WireframeMaterial />
        </mesh>
      ))}
      {/* Steam pipes → turbine */}
      <Rod from={[1.2, 1, 0]} to={[2.6, 1, 0]} partId="steam" />
      <Rod from={[-1.2, 1, 0]} to={[-2.6, 1, 0]} partId="steam" />
      {/* Power wheel (turbine) */}
      <mesh name="wheel" position={[3.2, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.5, 0.35, 10]} />
        <WireframeMaterial />
      </mesh>
      {/* Turbine blades */}
      {[0, 1, 2, 3, 4, 5].map(i => {
        const angle = (i / 6) * Math.PI * 2
        return (
          <mesh
            key={i}
            name="wheel"
            position={[3.2 + Math.cos(angle) * 0.7, 1 + Math.sin(angle) * 0.7, 0]}
            rotation={[0, 0, angle + Math.PI / 2]}
          >
            <boxGeometry args={[0.35, 0.06, 0.06]} />
            <WireframeMaterial />
          </mesh>
        )
      })}
    </group>
  )
}

function HelicopterWire() {
  return (
    <group>
      {/* Fuselage */}
      <mesh name="body" position={[0, 0, 0]}>
        <capsuleGeometry args={[0.6, 2, 8, 12]} />
        <WireframeMaterial />
      </mesh>
      {/* Main rotor */}
      <mesh name="rotor" position={[0, 1.2, 0]}>
        <boxGeometry args={[4, 0.05, 0.3]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Rotor hub */}
      <mesh name="rotor" position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 8]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Tail boom */}
      <mesh name="tail" position={[0, 0.2, -2.5]}>
        <boxGeometry args={[0.3, 0.3, 2.5]} />
        <WireframeMaterial />
      </mesh>
      {/* Tail rotor */}
      <mesh name="tail" position={[0.3, 0.2, -3.8]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[1, 0.03, 0.15]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Landing skids — two rails + struts */}
      <Rod from={[-0.5, -1.2, 0.9]} to={[-0.5, -1.2, -0.9]} partId="skids" />
      <Rod from={[0.5, -1.2, 0.9]} to={[0.5, -1.2, -0.9]} partId="skids" />
      <Rod from={[-0.5, -0.8, 0.6]} to={[-0.5, -1.2, 0.6]} partId="skids" />
      <Rod from={[-0.5, -0.8, -0.6]} to={[-0.5, -1.2, -0.6]} partId="skids" />
      <Rod from={[0.5, -0.8, 0.6]} to={[0.5, -1.2, 0.6]} partId="skids" />
      <Rod from={[0.5, -0.8, -0.6]} to={[0.5, -1.2, -0.6]} partId="skids" />
      {/* Windshield */}
      <mesh name="window" position={[0, 0.3, 1.2]}>
        <sphereGeometry args={[0.5, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <WireframeMaterial color="#60A5FA" />
      </mesh>
    </group>
  )
}

function SpaceStationWire() {
  return (
    <group>
      {/* Central truss */}
      <mesh name="truss" position={[0, 0, 0]}>
        <boxGeometry args={[5, 0.3, 0.3]} />
        <WireframeMaterial />
      </mesh>
      {/* Modules */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <mesh key={i} name="modules" position={[x, 0, 0.8]}>
          <cylinderGeometry args={[0.4, 0.4, 1.2, 8]} />
          <WireframeMaterial color="#60A5FA" />
        </mesh>
      ))}
      {/* Solar arrays */}
      {[-3, 3].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh name="solar">
            <boxGeometry args={[2.5, 1.8, 0.05]} />
            <WireframeMaterial color="#F0923A" />
          </mesh>
          {/* Panel grid lines */}
          <GlowLine points={[[-1.25, -0.9, 0.01], [-1.25, 0.9, 0.01]]} />
          <GlowLine points={[[-0.625, -0.9, 0.01], [-0.625, 0.9, 0.01]]} />
          <GlowLine points={[[0, -0.9, 0.01], [0, 0.9, 0.01]]} />
          <GlowLine points={[[0.625, -0.9, 0.01], [0.625, 0.9, 0.01]]} />
        </group>
      ))}
      {/* Radiators */}
      <mesh name="radiators" position={[2, 1, 0]}>
        <boxGeometry args={[1.5, 1, 0.05]} />
        <WireframeMaterial color="#E8453C" />
      </mesh>
      {/* Cupola */}
      <mesh name="dome" position={[0, -0.5, 1.2]}>
        <sphereGeometry args={[0.3, 8, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <WireframeMaterial color="#60A5FA" />
      </mesh>
      {/* Long grabber (Canadarm) — two segments */}
      <Rod from={[-0.5, 0.9, 0.8]} to={[0.2, 1.4, 0.4]} partId="arm" color="#F0923A" />
      <Rod from={[0.2, 1.4, 0.4]} to={[0.9, 1.7, 0]} partId="arm" color="#F0923A" />
    </group>
  )
}

function CuriosityRoverWire() {
  return (
    <group>
      {/* Body box */}
      <mesh name="body" position={[0, 0.5, 0]}>
        <boxGeometry args={[1.5, 0.8, 2]} />
        <WireframeMaterial />
      </mesh>
      {/* Camera mast */}
      <mesh name="mast" position={[0, 1.8, 0.5]}>
        <cylinderGeometry args={[0.08, 0.08, 1.5, 6]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Camera head */}
      <mesh name="mast" position={[0, 2.5, 0.5]}>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
        <WireframeMaterial color="#E8453C" />
      </mesh>
      {/* Wheels — 6 of them */}
      {[[-0.9, 0, 0.7], [-0.9, 0, -0.7], [0.9, 0, 0.7], [0.9, 0, -0.7], [-0.9, 0, 0], [0.9, 0, 0]].map(([x, y, z], i) => (
        <mesh key={i} name="wheels" position={[x, y, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.15, 12]} />
          <WireframeMaterial />
        </mesh>
      ))}
      {/* Robotic arm — two segments */}
      <Rod from={[0, 0.5, 1]} to={[0, 0.35, 1.7]} partId="arm" color="#F0923A" radius={0.04} />
      <Rod from={[0, 0.35, 1.7]} to={[0, 0.1, 2.3]} partId="arm" color="#F0923A" radius={0.04} />
      {/* RTG power */}
      <mesh name="power" position={[-1, 0.8, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <WireframeMaterial color="#E8453C" />
      </mesh>
    </group>
  )
}

function WashingMachineWire() {
  return (
    <group>
      {/* Washing machine */}
      <mesh name="drum" position={[-1.2, 0, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
        <WireframeMaterial />
      </mesh>
      {/* Drum */}
      <mesh name="drum" position={[-1.2, 0, 0.76]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.05, 8, 16]} />
        <WireframeMaterial color="#4ADE80" />
      </mesh>
      {/* Door circle */}
      <mesh name="drum" position={[-1.2, 0, 0.78]}>
        <ringGeometry args={[0.4, 0.55, 16]} />
        <WireframeMaterial color="#4ADE80" />
      </mesh>
      {/* Dryer */}
      <mesh name="hot-air" position={[1.2, 0, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Dryer drum */}
      <mesh name="hot-air" position={[1.2, 0, 0.76]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.05, 8, 16]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Control panel / soap box area */}
      <mesh name="soap" position={[-1.2, 1.1, 0.76]}>
        <boxGeometry args={[1.2, 0.3, 0.05]} />
        <WireframeMaterial />
      </mesh>
      {/* Connection pipe */}
      <Rod from={[-0.45, 0.5, 0]} to={[0.45, 0.5, 0]} partId="pump" color="#4ADE80" />
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
        const dotColor = isActive ? accent : hoveredNow ? '#E8453C' : '#3ECFCF'
        const dotOpacity = dimOthers && !isActive ? 0.2 : show ? 1 : 0.5
        return (
          <group key={part.id} position={part.position}>
            {/* Dot marker — clickable (图→词) */}
            <mesh
              onPointerOver={e => { e.stopPropagation(); setHovered(part.id) }}
              onPointerOut={() => setHovered(null)}
              onClick={e => { e.stopPropagation(); onPartClick?.(part.id) }}
              scale={show ? 1.5 : 1}
            >
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshBasicMaterial
                color={dotColor}
                transparent
                opacity={dotOpacity}
              />
            </mesh>
            {/* Leader line from dot to label */}
            <Line
              points={[[0, 0, 0], [0.3, 0.2, 0]]}
              color={show ? dotColor : '#3ECFCF'}
              lineWidth={show ? 1.5 : 1}
              transparent
              opacity={dimOthers && !isActive ? 0.15 : show ? 0.9 : 0.4}
            />
            {/* Label */}
            <Text
              position={[0.35, 0.2, 0]}
              fontSize={0.15}
              color={show ? dotColor : '#5A554C'}
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

function GridFloor() {
  return (
    <gridHelper
      args={[12, 24, '#8E8678', '#B4AA9B']}
      position={[0, -2, 0]}
    />
  )
}
