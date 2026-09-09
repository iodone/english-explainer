import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Line, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import type { ThingData } from '../data/things'

/**
 * ThingScene — central 3D wireframe viewer
 * Procedural wireframe models with HUD annotation overlays
 */
export default function ThingScene({ thing }: { thing: ThingData }) {
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
        <WireframeModel thing={thing} />
        <AnnotationLabels thing={thing} />
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

/**
 * Procedural wireframe model — switches geometry based on thing category
 */
function WireframeModel({ thing }: { thing: ThingData }) {
  const groupRef = useRef<THREE.Group>(null)

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

function NuclearReactorWire() {
  return (
    <group>
      {/* Containment dome — hemisphere */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[2, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <WireframeMaterial />
      </mesh>
      {/* Reactor vessel — cylinder */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 3, 12]} />
        <WireframeMaterial color="#E8453C" />
      </mesh>
      {/* Control rods */}
      {[-0.4, 0, 0.4].map((x, i) => (
        <mesh key={i} position={[x, 2.2, 0]}>
          <boxGeometry args={[0.15, 1.5, 0.15]} />
          <WireframeMaterial color="#F0923A" />
        </mesh>
      ))}
      {/* Cooling towers */}
      {[-2.5, 2.5].map((x, i) => (
        <mesh key={i} position={[x, 1, 0]}>
          <cylinderGeometry args={[0.6, 0.8, 3, 8]} />
          <WireframeMaterial />
        </mesh>
      ))}
      {/* Steam pipes */}
      <GlowLine points={[[1.2, 1, 0], [2, 1, 0], [2, 2, 0]]} />
      <GlowLine points={[[-1.2, 1, 0], [-2, 1, 0], [-2, 2, 0]]} />
    </group>
  )
}

function HelicopterWire() {
  return (
    <group>
      {/* Fuselage */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.6, 2, 8, 12]} />
        <WireframeMaterial />
      </mesh>
      {/* Main rotor */}
      <mesh position={[0, 1.2, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[4, 0.05, 0.3]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Rotor hub */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 8]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Tail boom */}
      <mesh position={[0, 0.2, -2.5]}>
        <boxGeometry args={[0.3, 0.3, 2.5]} />
        <WireframeMaterial />
      </mesh>
      {/* Tail rotor */}
      <mesh position={[0.3, 0.2, -3.8]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[1, 0.03, 0.15]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Landing skids */}
      <GlowLine points={[[-0.5, -0.8, 0.5], [-0.5, -1.2, 0.5], [-0.5, -1.2, -0.5], [-0.5, -0.8, -0.5]]} />
      <GlowLine points={[[0.5, -0.8, 0.5], [0.5, -1.2, 0.5], [0.5, -1.2, -0.5], [0.5, -0.8, -0.5]]} />
      {/* Windshield */}
      <mesh position={[0, 0.3, 1.2]}>
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
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5, 0.3, 0.3]} />
        <WireframeMaterial />
      </mesh>
      {/* Modules */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <mesh key={i} position={[x, 0, 0.8]}>
          <cylinderGeometry args={[0.4, 0.4, 1.2, 8]} />
          <WireframeMaterial color="#60A5FA" />
        </mesh>
      ))}
      {/* Solar arrays */}
      {[-3, 3].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh>
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
      <mesh position={[2, 1, 0]}>
        <boxGeometry args={[1.5, 1, 0.05]} />
        <WireframeMaterial color="#E8453C" />
      </mesh>
      {/* Cupola */}
      <mesh position={[0, -0.5, 1.2]}>
        <sphereGeometry args={[0.3, 8, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <WireframeMaterial color="#60A5FA" />
      </mesh>
    </group>
  )
}

function CuriosityRoverWire() {
  return (
    <group>
      {/* Body box */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.5, 0.8, 2]} />
        <WireframeMaterial />
      </mesh>
      {/* Camera mast */}
      <mesh position={[0, 1.8, 0.5]}>
        <cylinderGeometry args={[0.08, 0.08, 1.5, 6]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Camera head */}
      <mesh position={[0, 2.5, 0.5]}>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
        <WireframeMaterial color="#E8453C" />
      </mesh>
      {/* Wheels — 6 of them */}
      {[[-0.9, 0, 0.7], [-0.9, 0, -0.7], [0.9, 0, 0.7], [0.9, 0, -0.7], [-0.9, 0, 0], [0.9, 0, 0]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.15, 12]} />
          <WireframeMaterial />
        </mesh>
      ))}
      {/* Robotic arm */}
      <GlowLine points={[[0, 0.5, 1], [0, 0.3, 1.8], [0, 0.1, 2.3]]} color="#F0923A" />
      {/* RTG power */}
      <mesh position={[-1, 0.8, 0]}>
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
      <mesh position={[-1.2, 0, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
        <WireframeMaterial />
      </mesh>
      {/* Drum */}
      <mesh position={[-1.2, 0, 0.76]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.05, 8, 16]} />
        <WireframeMaterial color="#4ADE80" />
      </mesh>
      {/* Door circle */}
      <mesh position={[-1.2, 0, 0.78]}>
        <ringGeometry args={[0.4, 0.55, 16]} />
        <WireframeMaterial color="#4ADE80" />
      </mesh>
      {/* Dryer */}
      <mesh position={[1.2, 0, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Dryer drum */}
      <mesh position={[1.2, 0, 0.76]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.05, 8, 16]} />
        <WireframeMaterial color="#F0923A" />
      </mesh>
      {/* Control panel */}
      <mesh position={[-1.2, 1.1, 0.76]}>
        <boxGeometry args={[1.2, 0.3, 0.05]} />
        <WireframeMaterial />
      </mesh>
      {/* Connection pipe */}
      <GlowLine points={[[-0.45, 0.5, 0], [0.45, 0.5, 0]]} color="#4ADE80" />
    </group>
  )
}

/* ─── Annotation Labels ─── */

function AnnotationLabels({ thing }: { thing: ThingData }) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <group>
      {thing.parts.map(part => {
        const active = hovered === part.id
        return (
          <group key={part.id} position={part.position}>
            {/* Dot marker */}
            <mesh
              onPointerOver={e => { e.stopPropagation(); setHovered(part.id) }}
              onPointerOut={() => setHovered(null)}
            >
              <sphereGeometry args={[active ? 0.12 : 0.08, 8, 8]} />
              <meshBasicMaterial
                color={active ? '#E8453C' : '#3ECFCF'}
                transparent
                opacity={active ? 1 : 0.5}
              />
            </mesh>
            {/* Leader line from dot to label */}
            <Line
              points={[[0, 0, 0], [0.3, 0.2, 0]]}
              color={active ? '#E8453C' : '#3ECFCF'}
              lineWidth={1}
              transparent
              opacity={active ? 0.9 : 0.4}
            />
            {/* Label */}
            <Text
              position={[0.35, 0.2, 0]}
              fontSize={0.15}
              color={active ? '#E8453C' : '#5A554C'}
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