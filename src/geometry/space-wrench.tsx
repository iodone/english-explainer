import { SketchMesh, DraftLine } from './primitives'

export default function SpaceWrenchSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.06, 0.12, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="open-part" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.08, 0.04, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="move-part" position={[0.04, 0.08, 0]}>
        <boxGeometry args={[0.02, 0.04, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.04, 0.12, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="grip" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.05, 0.04, 0.035]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[0, -0.16, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.02, 8]} />
      </SketchMesh>
      <DraftLine points={[[0, -0.17, 0.02], [0, -0.2, 0.02]]} />
    </group>
  )
}