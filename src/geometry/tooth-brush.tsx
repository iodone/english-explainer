import { SketchMesh, DraftLine } from './primitives'

export default function ToothBrushSketch() {
  return (
    <group>
      <SketchMesh partId="handle" position={[0, 0, 0]}>
        <boxGeometry args={[0.06, 0.2, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="head" position={[0, 0.16, 0]}>
        <boxGeometry args={[0.08, 0.08, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="hairs" position={[0, 0.21, 0]}>
        <boxGeometry args={[0.07, 0.02, 0.035]} />
      </SketchMesh>
      <SketchMesh partId="grip" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.07, 0.06, 0.045]} />
      </SketchMesh>
      <DraftLine points={[[0, 0.22, 0.02], [0, 0.25, 0.02]]} />
    </group>
  )
}