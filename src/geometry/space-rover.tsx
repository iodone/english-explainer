import { SketchMesh, Rod, DraftLine } from './primitives'

export default function SpaceRoverSketch() {
  return (
    <group>
      {/* Body - rover body */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.36, 0.18, 0.24]} />
      </SketchMesh>

      {/* Wheels */}
      <SketchMesh partId="wheels" position={[-0.14, -0.10, 0.12]}>
        <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh position={[0.14, -0.10, 0.12]}>
        <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh position={[-0.14, -0.10, -0.12]}>
        <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh position={[0.14, -0.10, -0.12]}>
        <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
      </SketchMesh>

      {/* Arm - robotic arm */}
      <Rod from={[0.18, 0.04, 0]} to={[0.28, 0.12, 0]} radius={0.012} partId="arm" />

      {/* Eye - camera mast */}
      <Rod from={[0, 0.09, 0.08]} to={[0, 0.18, 0.08]} radius={0.008} partId="eye" />
      <SketchMesh position={[0, 0.18, 0.08]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>

      {/* Sun boards - solar panels */}
      <SketchMesh partId="sun-boards" position={[0, 0.09, -0.10]}>
        <boxGeometry args={[0.32, 0.02, 0.16]} />
      </SketchMesh>

      {/* Talk box - antenna */}
      <Rod from={[0, 0.09, -0.04]} to={[0, 0.18, -0.04]} radius={0.006} partId="talk-box" />

      {/* Power box - battery */}
      <SketchMesh partId="power-box" position={[0, -0.04, -0.06]}>
        <boxGeometry args={[0.12, 0.08, 0.10]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.18, -0.12, 0.12], [-0.18, 0.09, 0.12], [0.18, 0.09, 0.12], [0.18, -0.12, 0.12], [-0.18, -0.12, 0.12]]} />
    </group>
  )
}