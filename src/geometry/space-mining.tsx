import { SketchMesh, Rod, DraftLine } from './primitives'

export default function SpaceMiningSketch() {
  return (
    <group>
      {/* Body - mining vessel */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.32, 0.20, 0.22]} />
      </SketchMesh>

      {/* Dig arm - excavation arm */}
      <Rod from={[0.16, 0, 0]} to={[0.30, 0.10, 0]} radius={0.014} partId="dig-arm" />
      <SketchMesh position={[0.30, 0.10, 0]}>
        <boxGeometry args={[0.06, 0.06, 0.06]} />
      </SketchMesh>

      {/* Hold box - storage bay */}
      <SketchMesh partId="hold-box" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.24, 0.10, 0.18]} />
      </SketchMesh>

      {/* Sun boards - solar arrays */}
      <SketchMesh partId="sun-boards" position={[0, 0.12, -0.10]}>
        <boxGeometry args={[0.28, 0.02, 0.14]} />
      </SketchMesh>

      {/* Look part - navigation system */}
      <SketchMesh partId="look-part" position={[0, 0.10, 0.08]}>
        <boxGeometry args={[0.08, 0.06, 0.06]} />
      </SketchMesh>

      {/* Talk box - communications */}
      <SketchMesh partId="talk-box" position={[0, 0.08, 0.12]}>
        <boxGeometry args={[0.06, 0.04, 0.04]} />
      </SketchMesh>

      {/* Fire parts - thrusters */}
      <SketchMesh partId="fire-parts" position={[-0.14, -0.06, -0.08]}>
        <cylinderGeometry args={[0.03, 0.03, 0.06, 8]} />
      </SketchMesh>
      <SketchMesh position={[-0.14, -0.06, 0.08]}>
        <cylinderGeometry args={[0.03, 0.03, 0.06, 8]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.16, -0.14, 0.11], [-0.16, 0.12, 0.11], [0.16, 0.12, 0.11], [0.16, -0.14, 0.11], [-0.16, -0.14, 0.11]]} />
    </group>
  )
}