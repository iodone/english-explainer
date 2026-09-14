import { SketchMesh, DraftLine } from './primitives'

export default function SpaceCraftSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.24, 16]} />
      </SketchMesh>
      <SketchMesh partId="front-part" position={[0, 0, 0.12]}>
        <sphereGeometry args={[0.07, 16, 12]} />
      </SketchMesh>
      <SketchMesh partId="fire-part" position={[0, 0, -0.14]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.06, 12]} />
      </SketchMesh>
      <SketchMesh partId="power-part" position={[0.08, 0, 0]}>
        <boxGeometry args={[0.06, 0.06, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="talk-part" position={[0, 0.08, 0.04]}>
        <boxGeometry args={[0.04, 0.02, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="air-part" position={[0, -0.06, 0.06]}>
        <boxGeometry args={[0.08, 0.04, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="wing" position={[0.14, 0, -0.04]}>
        <boxGeometry args={[0.12, 0.004, 0.08]} />
      </SketchMesh>
      <DraftLine points={[[-0.6, -0.10, 0], [0.6, -0.10, 0]]} />
    </group>
  )
}