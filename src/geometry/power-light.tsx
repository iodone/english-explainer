import { SketchMesh, DraftLine } from './primitives'

export default function PowerLightSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh partId="light-part" position={[0, 0, 0]}>
        <sphereGeometry args={[0.04, 12, 12]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.06, 0.04, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh partId="switch" position={[0, 0.1, 0.06]}>
        <boxGeometry args={[0.03, 0.02, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[0, 0.14, 0]}>
        <boxGeometry args={[0.08, 0.02, 0.08]} />
      </SketchMesh>
      <DraftLine points={[[-0.04, 0.14, 0.04], [0.04, 0.14, 0.04]]} />
    </group>
  )
}