import { SketchMesh, DraftLine } from './primitives'

export default function PowerFuseSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.16, 12]} />
      </SketchMesh>
      <SketchMesh partId="thin-wire" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.14, 8]} />
      </SketchMesh>
      <SketchMesh partId="ends" position={[0, 0.09, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh position={[0, -0.09, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh partId="window" position={[0.06, 0, 0]}>
        <boxGeometry args={[0.005, 0.1, 0.04]} />
      </SketchMesh>
      <DraftLine points={[[-0.07, 0.1, 0], [0.07, 0.1, 0]]} />
    </group>
  )
}