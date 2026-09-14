import { SketchMesh } from './primitives'

export default function SpaceClampSketch() {
  return (
    <group>
      {/* Body */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.06, 0.12, 0.04]} />
      </SketchMesh>
      {/* Jaws */}
      <SketchMesh partId="jaws" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.04, 0.02, 0.04]} />
      </SketchMesh>
      {/* Handle */}
      <SketchMesh partId="handle" position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.06, 16]} />
      </SketchMesh>
      {/* Move part */}
      <SketchMesh partId="move-part" position={[0, 0.02, 0.03]}>
        <cylinderGeometry args={[0.005, 0.005, 0.04, 16]} />
      </SketchMesh>
      {/* Grip */}
      <SketchMesh partId="grip" position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.04, 16]} />
      </SketchMesh>
      {/* Hold part */}
      <SketchMesh partId="hold-part" position={[0, -0.12, 0]}>
        <torusGeometry args={[0.01, 0.005, 8, 16, Math.PI * 2]} />
      </SketchMesh>
    </group>
  )
}