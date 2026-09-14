import { SketchMesh, DraftLine } from './primitives'

export default function PowerWireSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.28, 12]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.28, 8]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.28, 12]} />
      </SketchMesh>
      <SketchMesh partId="end-parts" position={[0.14, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh position={[-0.14, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh partId="bend-parts" position={[0.1, 0, 0]}>
        <cylinderGeometry args={[0.028, 0.025, 0.02, 8]} />
      </SketchMesh>
      <SketchMesh position={[-0.1, 0, 0]}>
        <cylinderGeometry args={[0.028, 0.025, 0.02, 8]} />
      </SketchMesh>
      <DraftLine points={[[-0.14, 0.03, 0], [0.14, 0.03, 0]]} />
    </group>
  )
}