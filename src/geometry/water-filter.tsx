import { SketchMesh, DraftLine } from './primitives'

export default function WaterFilterSketch() {
  return (
    <group>
      {/* Body - housing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.36, 16]} />
      </SketchMesh>

      {/* Water in - inlet */}
      <SketchMesh partId="water-in" position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.06, 8]} />
      </SketchMesh>

      {/* Water out - outlet */}
      <SketchMesh partId="water-out" position={[0, -0.16, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.06, 8]} />
      </SketchMesh>

      {/* Clean part - filter media */}
      <SketchMesh partId="clean-part" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.10, 0.10, 0.24, 16]} />
      </SketchMesh>

      {/* Top cover */}
      <SketchMesh partId="top-cover" position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.04, 16]} />
      </SketchMesh>

      {/* Bottom part */}
      <SketchMesh partId="bottom-part" position={[0, -0.18, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.04, 16]} />
      </SketchMesh>

      {/* Hold ring */}
      <SketchMesh partId="hold-ring" position={[0, -0.12, 0.08]}>
        <boxGeometry args={[0.04, 0.08, 0.04]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.12, -0.20, 0.12], [-0.12, 0.20, 0.12], [0.12, 0.20, 0.12], [0.12, -0.20, 0.12], [-0.12, -0.20, 0.12]]} />
    </group>
  )
}