import { SketchMesh, DraftLine } from './primitives'

export default function PowerControllerSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.22, 0.12, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="brain" position={[0, 0.02, 0]}>
        <boxGeometry args={[0.08, 0.04, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="in-part" position={[-0.12, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh partId="out-part" position={[0.12, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh partId="show-part" position={[0, 0.06, 0.045]}>
        <boxGeometry args={[0.12, 0.04, 0.005]} />
      </SketchMesh>
      <SketchMesh partId="cool-part" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.18, 0.02, 0.07]} />
      </SketchMesh>
      <DraftLine points={[[-0.11, -0.06, 0.045], [0.11, -0.06, 0.045]]} />
    </group>
  )
}