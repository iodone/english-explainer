import { SketchMesh } from './primitives'

export default function SpaceCompassSketch() {
  return (
    <group>
      {/* Body */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 32]} />
      </SketchMesh>
      {/* Needle */}
      <SketchMesh partId="needle" position={[0, 0.01, 0]}>
        <boxGeometry args={[0.002, 0.002, 0.06]} />
      </SketchMesh>
      {/* Markings */}
      <SketchMesh partId="markings" position={[0, 0.011, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.005, 32]} />
      </SketchMesh>
      {/* Glass */}
      <SketchMesh partId="glass" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.005, 32]} />
      </SketchMesh>
      {/* Bottom part */}
      <SketchMesh partId="bottom-part" position={[0, -0.01, 0]}>
        <boxGeometry args={[0.12, 0.005, 0.08]} />
      </SketchMesh>
      {/* Hold part */}
      <SketchMesh partId="hold-part" position={[0, -0.02, 0]}>
        <torusGeometry args={[0.008, 0.003, 8, 16, Math.PI * 2]} />
      </SketchMesh>
    </group>
  )
}