import { SketchMesh, Rod, DraftLine } from './primitives'

export default function SpaceBootSketch() {
  return (
    <group>
      {/* Hard cover - outer shell */}
      <SketchMesh partId="hard-cover" position={[0, 0, 0.04]}>
        <boxGeometry args={[0.28, 0.32, 0.24]} />
      </SketchMesh>

      {/* Soft inside - pressure bladder */}
      <SketchMesh partId="soft-inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.24, 0.28, 0.20]} />
      </SketchMesh>

      {/* Hard bottom - sole */}
      <SketchMesh partId="hard-bottom" position={[0, -0.14, 0]}>
        <boxGeometry args={[0.30, 0.04, 0.26]} />
      </SketchMesh>

      {/* Leg ring - disconnect ring */}
      <SketchMesh partId="leg-ring" position={[0, 0.14, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.04, 16]} />
      </SketchMesh>

      {/* Front part - toe cap */}
      <SketchMesh partId="front-part" position={[0, -0.08, 0.10]}>
        <boxGeometry args={[0.22, 0.16, 0.06]} />
      </SketchMesh>

      {/* Rubber bottom - traction pads */}
      <SketchMesh partId="rubber-bottom" position={[0, -0.16, 0]}>
        <boxGeometry args={[0.30, 0.02, 0.26]} />
      </SketchMesh>

      {/* Heater wire */}
      <Rod from={[-0.10, 0, -0.04]} to={[0.10, 0, -0.04]} radius={0.006} partId="heater-wire" />

      {/* Outline */}
      <DraftLine points={[[-0.14, -0.16, 0.12], [-0.14, 0.16, 0.12], [0.14, 0.16, 0.12], [0.14, -0.16, 0.12], [-0.14, -0.16, 0.12]]} />
    </group>
  )
}