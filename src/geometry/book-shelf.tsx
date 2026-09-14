import { SketchMesh, DraftLine } from './primitives'

export default function BookShelfSketch() {
  return (
    <group>
      <SketchMesh partId="side-left" position={[-0.18, 0, 0]}>
        <boxGeometry args={[0.02, 0.36, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="side-right" position={[0.18, 0, 0]}>
        <boxGeometry args={[0.02, 0.36, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="top-board" position={[0, 0.16, 0]}>
        <boxGeometry args={[0.38, 0.02, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="bottom-board" position={[0, -0.16, 0]}>
        <boxGeometry args={[0.38, 0.02, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="middle-board" position={[0, 0, 0]}>
        <boxGeometry args={[0.38, 0.02, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="back-board" position={[0, 0, -0.08]}>
        <boxGeometry args={[0.38, 0.36, 0.008]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[0, 0.14, -0.06]}>
        <boxGeometry args={[0.06, 0.04, 0.02]} />
      </SketchMesh>
      <DraftLine points={[[-0.6, -0.20, 0], [0.6, -0.20, 0]]} />
    </group>
  )
}