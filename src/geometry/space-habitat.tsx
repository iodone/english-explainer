import { SketchMesh, DraftLine } from './primitives'

export default function SpaceHabitatSketch() {
  return (
    <group>
      {/* Body - pressure vessel */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.36, 16]} />
      </SketchMesh>

      {/* Rooms - living quarters */}
      <SketchMesh partId="rooms" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.24, 0.14, 0.20]} />
      </SketchMesh>

      {/* Air part - life support */}
      <SketchMesh partId="air-part" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.16, 0.08, 0.14]} />
      </SketchMesh>

      {/* Sun boards - solar arrays */}
      <SketchMesh partId="sun-boards" position={[0, 0.12, -0.10]}>
        <boxGeometry args={[0.32, 0.02, 0.16]} />
      </SketchMesh>

      {/* Talk box - communications */}
      <SketchMesh partId="talk-box" position={[0, 0.10, 0.08]}>
        <boxGeometry args={[0.08, 0.06, 0.06]} />
      </SketchMesh>

      {/* Water box - water recycling */}
      <SketchMesh partId="water-box" position={[0, -0.04, 0.08]}>
        <boxGeometry args={[0.12, 0.08, 0.08]} />
      </SketchMesh>

      {/* Food room - greenhouse */}
      <SketchMesh partId="food-room" position={[0, 0.04, -0.08]}>
        <cylinderGeometry args={[0.06, 0.06, 0.10, 8]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.18, -0.18, 0.18], [-0.18, 0.18, 0.18], [0.18, 0.18, 0.18], [0.18, -0.18, 0.18], [-0.18, -0.18, 0.18]]} />
    </group>
  )
}