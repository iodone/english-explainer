import { SketchMesh, DraftLine } from './primitives'

export default function SpaceGpsSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.24, 0.14, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="screen" position={[0, 0.04, 0.025]}>
        <boxGeometry args={[0.18, 0.1, 0.005]} />
      </SketchMesh>
      <SketchMesh partId="top-part" position={[0, 0.14, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.12, 8]} />
      </SketchMesh>
      <SketchMesh partId="buttons" position={[-0.04, -0.02, 0.025]}>
        <boxGeometry args={[0.04, 0.04, 0.005]} />
      </SketchMesh>
      <SketchMesh position={[0.04, -0.02, 0.025]}>
        <boxGeometry args={[0.04, 0.04, 0.005]} />
      </SketchMesh>
      <DraftLine points={[[-0.12, -0.07, 0.025], [0.12, -0.07, 0.025]]} />
    </group>
  )
}