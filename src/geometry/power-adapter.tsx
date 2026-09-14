import { SketchMesh } from './primitives'

export default function PowerAdapterSketch() {
  return (
    <group>
      {/* Body */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.04, 0.06, 0.03]} />
      </SketchMesh>
      {/* Plug */}
      <SketchMesh partId="plug" position={[0, 0, 0.05]}>
        <cylinderGeometry args={[0.005, 0.005, 0.04, 16]} />
      </SketchMesh>
      {/* End */}
      <SketchMesh partId="end" position={[0, 0, -0.05]}>
        <cylinderGeometry args={[0.01, 0.005, 0.02, 16]} />
      </SketchMesh>
      {/* Light */}
      <SketchMesh partId="light" position={[0, 0.02, 0]}>
        <sphereGeometry args={[0.005, 16, 16]} />
      </SketchMesh>
      {/* Inside */}
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.035, 0.055, 0.025]} />
      </SketchMesh>
      {/* Hold part */}
      <SketchMesh partId="hold-part" position={[0, -0.02, 0]}>
        <boxGeometry args={[0.04, 0.01, 0.03]} />
      </SketchMesh>
    </group>
  )
}