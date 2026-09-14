import { SketchMesh } from './primitives'

export default function PowerPlugSketch() {
  return (
    <group>
      {/* Body */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.04, 0.06, 0.03]} />
      </SketchMesh>
      {/* Bits */}
      <SketchMesh partId="bits" position={[0, 0, 0.05]}>
        <cylinderGeometry args={[0.005, 0.005, 0.04, 16]} />
      </SketchMesh>
      {/* Safety bit */}
      <SketchMesh partId="safety-bit" position={[0, -0.02, 0.05]}>
        <cylinderGeometry args={[0.005, 0.005, 0.05, 16]} />
      </SketchMesh>
      {/* End */}
      <SketchMesh partId="end" position={[0, 0, -0.04]}>
        <cylinderGeometry args={[0.015, 0.01, 0.02, 16]} />
      </SketchMesh>
      {/* Top part */}
      <SketchMesh partId="top-part" position={[0, 0.02, 0]}>
        <boxGeometry args={[0.04, 0.01, 0.03]} />
      </SketchMesh>
      {/* Bottom part */}
      <SketchMesh partId="bottom-part" position={[0, -0.02, 0]}>
        <boxGeometry args={[0.04, 0.01, 0.03]} />
      </SketchMesh>
    </group>
  )
}