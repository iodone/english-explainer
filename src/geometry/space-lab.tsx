import { SketchMesh, DraftLine } from './primitives'

export default function SpaceLabSketch() {
  return (
    <group>
      {/* Body - module */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.34, 16]} />
      </SketchMesh>

      {/* Rooms - work areas */}
      <SketchMesh partId="rooms" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.22, 0.16, 0.18]} />
      </SketchMesh>

      {/* Look part - viewing ports */}
      <SketchMesh partId="look-part" position={[0, 0, 0.12]}>
        <cylinderGeometry args={[0.04, 0.04, 0.04, 8]} />
      </SketchMesh>

      {/* Sun boards - solar panels */}
      <SketchMesh partId="sun-boards" position={[0, 0.12, -0.10]}>
        <boxGeometry args={[0.28, 0.02, 0.14]} />
      </SketchMesh>

      {/* Talk box - communications */}
      <SketchMesh partId="talk-box" position={[0, 0.10, 0.08]}>
        <boxGeometry args={[0.08, 0.06, 0.06]} />
      </SketchMesh>

      {/* Air part - life support */}
      <SketchMesh partId="air-part" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.14, 0.08, 0.12]} />
      </SketchMesh>

      {/* Join part - docking port */}
      <SketchMesh partId="join-part" position={[0, 0, -0.14]}>
        <cylinderGeometry args={[0.06, 0.06, 0.06, 8]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.16, -0.17, 0.16], [-0.16, 0.17, 0.16], [0.16, 0.17, 0.16], [0.16, -0.17, 0.16], [-0.16, -0.17, 0.16]]} />
    </group>
  )
}