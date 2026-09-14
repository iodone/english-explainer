import { SketchMesh } from './primitives'

export default function HomeBroomSketch() {
  return (
    <group>
      {/* Body */}
      <SketchMesh partId="body" position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.25, 16]} />
      </SketchMesh>
      {/* Brush */}
      <SketchMesh partId="brush" position={[0, -0.02, 0]}>
        <boxGeometry args={[0.1, 0.06, 0.08]} />
      </SketchMesh>
      {/* End */}
      <SketchMesh partId="end" position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.02, 16]} />
      </SketchMesh>
      {/* Hold part */}
      <SketchMesh partId="hold-part" position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.04, 16]} />
      </SketchMesh>
      {/* Base */}
      <SketchMesh partId="base" position={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.02, 0.1]} />
      </SketchMesh>
      {/* Bristles */}
      <SketchMesh partId="bristles" position={[0.05, -0.03, 0.05]}>
        <boxGeometry args={[0.02, 0.04, 0.02]} />
      </SketchMesh>
    </group>
  )
}