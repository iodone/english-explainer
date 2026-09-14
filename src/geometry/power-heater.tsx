import { SketchMesh, DraftLine } from './primitives'

export default function PowerHeaterSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.16, 0.14, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="hot-part" position={[0, 0, 0.04]}>
        <cylinderGeometry args={[0.04, 0.04, 0.08, 12]} />
      </SketchMesh>
      <SketchMesh partId="blow-part" position={[0, -0.06, 0.04]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 8]} />
      </SketchMesh>
      <SketchMesh partId="buttons" position={[0, 0.08, 0.06]}>
        <boxGeometry args={[0.08, 0.02, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, -0.04, -0.06]}>
        <cylinderGeometry args={[0.005, 0.005, 0.06, 8]} />
      </SketchMesh>
      <SketchMesh partId="safe-part" position={[0, 0.06, -0.04]}>
        <boxGeometry args={[0.04, 0.02, 0.02]} />
      </SketchMesh>
      <DraftLine points={[[-0.08, -0.07, 0.06], [0.08, -0.07, 0.06]]} />
    </group>
  )
}