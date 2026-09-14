import { SketchMesh, Rod, DraftLine } from './primitives'

export default function SpaceLanderSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.16, 0.12, 0.16]} />
      </SketchMesh>
      <Rod from={[0.06, -0.06, 0]} to={[0.10, -0.14, 0]} radius={0.008} partId="leg" />
      <SketchMesh partId="foot" position={[0.10, -0.14, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.01, 12]} />
      </SketchMesh>
      <SketchMesh partId="fire-part" position={[0, -0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.04, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="look-part" position={[0, 0.06, 0.06]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="talk-part" position={[0, 0.10, 0]}>
        <boxGeometry args={[0.02, 0.04, 0.02]} />
      </SketchMesh>
      <Rod from={[0.06, 0.02, 0.06]} to={[0.12, 0.06, 0.10]} radius={0.005} partId="arm" />
      <DraftLine points={[[-0.5, -0.16, 0], [0.5, -0.16, 0]]} />
    </group>
  )
}