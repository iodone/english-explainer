import { SketchMesh, DraftLine } from './primitives'

export default function SpaceMirrorSketch() {
  return (
    <group>
      <SketchMesh partId="big-mirror" position={[0, 0, 0]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.24, 0.006, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="body" position={[0, 0, -0.06]}>
        <boxGeometry args={[0.12, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="wing" position={[0.10, 0, -0.04]}>
        <boxGeometry args={[0.10, 0.004, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="talk-part" position={[0, 0.06, -0.04]}>
        <boxGeometry args={[0.02, 0.04, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="turn-part" position={[0, -0.04, -0.06]}>
        <cylinderGeometry args={[0.02, 0.02, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh partId="point-part" position={[0, 0.04, 0.04]}>
        <boxGeometry args={[0.03, 0.03, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.08, 0.02, 0.02]} />
      </SketchMesh>
      <DraftLine points={[[-0.6, -0.08, 0], [0.6, -0.08, 0]]} />
    </group>
  )
}