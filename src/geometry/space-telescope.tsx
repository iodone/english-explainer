import { SketchMesh, DraftLine } from './primitives'

export default function SpaceTelescopeSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.28, 16]} />
      </SketchMesh>
      <SketchMesh partId="big-mirror" position={[0, 0, -0.10]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.10, 0.10, 0.01, 24]} />
      </SketchMesh>
      <SketchMesh partId="small-mirror" position={[0, 0, 0.06]}>
        <boxGeometry args={[0.04, 0.04, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="eye-part" position={[0, 0, 0.10]}>
        <boxGeometry args={[0.06, 0.06, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="sun-cover" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.30, 0.006, 0.20]} />
      </SketchMesh>
      <SketchMesh partId="power-wing" position={[0.12, 0, 0]}>
        <boxGeometry args={[0.14, 0.004, 0.10]} />
      </SketchMesh>
      <SketchMesh partId="talk-part" position={[0, 0.08, 0.04]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>
      <DraftLine points={[[-0.9, -0.10, 0], [0.9, -0.10, 0]]} />
    </group>
  )
}