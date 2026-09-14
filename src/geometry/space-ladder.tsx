import { SketchMesh, DraftLine } from './primitives'

export default function SpaceLadderSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.04, 0.3, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="steps" position={[0, -0.1, 0.02]}>
        <boxGeometry args={[0.12, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh position={[0, -0.02, 0.02]}>
        <boxGeometry args={[0.12, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh position={[0, 0.06, 0.02]}>
        <boxGeometry args={[0.12, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh position={[0, 0.1, 0.02]}>
        <boxGeometry args={[0.12, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="hold-parts" position={[-0.08, 0, 0]}>
        <boxGeometry args={[0.02, 0.3, 0.02]} />
      </SketchMesh>
      <SketchMesh position={[0.08, 0, 0]}>
        <boxGeometry args={[0.02, 0.3, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="foot-holds" position={[0, -0.14, 0.02]}>
        <boxGeometry args={[0.06, 0.02, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="top-part" position={[0, 0.16, 0]}>
        <boxGeometry args={[0.08, 0.02, 0.04]} />
      </SketchMesh>
      <DraftLine points={[[-0.06, -0.15, 0.02], [0.06, -0.15, 0.02]]} />
    </group>
  )
}