import { SketchMesh, DraftLine } from './primitives'

export default function SpaceFoodHeaterSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.24, 0.16, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="door" position={[0, 0, 0.105]}>
        <boxGeometry args={[0.2, 0.14, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, -0.02, 0.04]}>
        <boxGeometry args={[0.2, 0.02, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="buttons" position={[0, 0.06, 0.105]}>
        <boxGeometry args={[0.12, 0.04, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.08, 0.04, 0.105]}>
        <sphereGeometry args={[0.015, 12, 12]} />
      </SketchMesh>
      <DraftLine points={[[-0.12, -0.08, 0.105], [0.12, -0.08, 0.105]]} />
    </group>
  )
}