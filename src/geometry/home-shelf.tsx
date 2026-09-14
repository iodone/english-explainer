import { SketchMesh, DraftLine } from './primitives'

export default function HomeShelfSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.24, 0.02, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="hold-parts" position={[-0.1, -0.04, -0.06]}>
        <boxGeometry args={[0.02, 0.06, 0.02]} />
      </SketchMesh>
      <SketchMesh position={[0.1, -0.04, -0.06]}>
        <boxGeometry args={[0.02, 0.06, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="sides" position={[-0.12, 0.04, 0]}>
        <boxGeometry args={[0.02, 0.08, 0.12]} />
      </SketchMesh>
      <SketchMesh position={[0.12, 0.04, 0]}>
        <boxGeometry args={[0.02, 0.08, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="lip" position={[0, 0.02, 0.06]}>
        <boxGeometry args={[0.24, 0.04, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="back-part" position={[0, 0.04, -0.06]}>
        <boxGeometry args={[0.24, 0.08, 0.01]} />
      </SketchMesh>
      <DraftLine points={[[-0.12, -0.04, 0.06], [0.12, -0.04, 0.06]]} />
    </group>
  )
}