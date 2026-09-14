import { SketchMesh, Rod, DraftLine } from './primitives'

export default function SpaceAntennaSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.03, 0.08, 12]} />
      </SketchMesh>
      <SketchMesh partId="big-dish" position={[0, 0, -0.10]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.03, 24]} />
      </SketchMesh>
      <Rod from={[0, 0, -0.08]} to={[0, 0, -0.02]} radius={0.010} partId="arm" />
      <SketchMesh partId="talk-part" position={[0, 0, 0.06]}>
        <boxGeometry args={[0.06, 0.06, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="power-wire" position={[0, -0.06, 0.04]}>
        <boxGeometry args={[0.02, 0.08, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="turn-part" position={[0, -0.04, -0.08]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[0, -0.10, -0.06]}>
        <boxGeometry args={[0.20, 0.02, 0.20]} />
      </SketchMesh>
      <DraftLine points={[[-0.9, -0.12, 0], [0.9, -0.12, 0]]} />
    </group>
  )
}