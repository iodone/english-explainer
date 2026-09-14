import { SketchMesh } from './primitives'

export default function SpaceDrillSketch() {
  return (
    <group>
      {/* Body */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.04, 0.12, 0.04]} />
      </SketchMesh>
      {/* Point */}
      <SketchMesh partId="point" position={[0, 0.1, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.015, 0.06, 16]} />
      </SketchMesh>
      {/* Spinning part */}
      <SketchMesh partId="spinning-part" position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.04, 16]} />
      </SketchMesh>
      {/* Handle */}
      <SketchMesh partId="handle" position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.02, 0.015, 0.06, 16]} />
      </SketchMesh>
      {/* Buttons */}
      <SketchMesh partId="buttons" position={[0, -0.06, 0.03]}>
        <boxGeometry args={[0.01, 0.005, 0.01]} />
      </SketchMesh>
      {/* Hold part */}
      <SketchMesh partId="hold-part" position={[0, -0.12, 0]}>
        <torusGeometry args={[0.01, 0.005, 8, 16, Math.PI * 2]} />
      </SketchMesh>
    </group>
  )
}