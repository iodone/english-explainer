import { SketchMesh, DraftLine } from './primitives'

export default function SpaceGymSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="seat" position={[0, -0.04, 0]}>
        <boxGeometry args={[0.14, 0.04, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[0, 0.04, 0.06]}>
        <boxGeometry args={[0.12, 0.06, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="move-part" position={[0, 0.08, -0.04]}>
        <boxGeometry args={[0.16, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="foot-part" position={[0, -0.1, 0]}>
        <boxGeometry args={[0.12, 0.02, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="show-part" position={[0, 0.12, 0.04]}>
        <boxGeometry args={[0.08, 0.04, 0.005]} />
      </SketchMesh>
      <DraftLine points={[[-0.1, -0.1, 0.06], [0.1, -0.1, 0.06]]} />
    </group>
  )
}