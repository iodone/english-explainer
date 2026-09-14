import { SketchMesh, DraftLine } from './primitives'

export default function SpaceHammerSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.03, 0.16, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="hit-face" position={[0, 0.04, 0.04]}>
        <boxGeometry args={[0.08, 0.06, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="hook" position={[0, 0.04, -0.04]}>
        <boxGeometry args={[0.06, 0.03, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="grip" position={[0, -0.1, 0]}>
        <boxGeometry args={[0.04, 0.06, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[0, -0.12, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.02, 8]} />
      </SketchMesh>
      <DraftLine points={[[0, -0.14, 0.02], [0, -0.16, 0.02]]} />
    </group>
  )
}