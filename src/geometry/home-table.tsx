import { SketchMesh, DraftLine } from './primitives'

export default function HomeTableSketch() {
  return (
    <group>
      <SketchMesh partId="top-part" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.24, 0.02, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="legs" position={[-0.1, -0.02, 0.06]}>
        <boxGeometry args={[0.03, 0.18, 0.03]} />
      </SketchMesh>
      <SketchMesh position={[0.1, -0.02, 0.06]}>
        <boxGeometry args={[0.03, 0.18, 0.03]} />
      </SketchMesh>
      <SketchMesh position={[-0.1, -0.02, -0.06]}>
        <boxGeometry args={[0.03, 0.18, 0.03]} />
      </SketchMesh>
      <SketchMesh position={[0.1, -0.02, -0.06]}>
        <boxGeometry args={[0.03, 0.18, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="under-part" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.22, 0.04, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="foot-parts" position={[-0.1, -0.11, 0.06]}>
        <boxGeometry args={[0.04, 0.01, 0.04]} />
      </SketchMesh>
      <SketchMesh position={[0.1, -0.11, 0.06]}>
        <boxGeometry args={[0.04, 0.01, 0.04]} />
      </SketchMesh>
      <SketchMesh position={[-0.1, -0.11, -0.06]}>
        <boxGeometry args={[0.04, 0.01, 0.04]} />
      </SketchMesh>
      <SketchMesh position={[0.1, -0.11, -0.06]}>
        <boxGeometry args={[0.04, 0.01, 0.04]} />
      </SketchMesh>
      <DraftLine points={[[-0.12, -0.11, 0.08], [0.12, -0.11, 0.08]]} />
    </group>
  )
}