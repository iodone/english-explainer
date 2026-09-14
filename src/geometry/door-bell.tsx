import { SketchMesh, Rod, DraftLine } from './primitives'

export default function DoorBellSketch() {
  return (
    <group>
      <SketchMesh partId="button" position={[0, 0, 0.04]}>
        <cylinderGeometry args={[0.02, 0.02, 0.01, 12]} />
      </SketchMesh>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.06, 0.06, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="sound-part" position={[0, 0, -0.08]}>
        <boxGeometry args={[0.10, 0.08, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="inside-part" position={[0, 0, -0.06]}>
        <cylinderGeometry args={[0.01, 0.01, 0.03, 8]} />
      </SketchMesh>
      <Rod from={[0, -0.04, -0.04]} to={[0, -0.04, 0]} radius={0.004} partId="wire" />
      <SketchMesh partId="look-part" position={[0, 0.04, 0.06]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="talk-part" position={[0, -0.04, 0.02]}>
        <cylinderGeometry args={[0.02, 0.02, 0.01, 8]} />
      </SketchMesh>
      <DraftLine points={[[-0.5, -0.10, 0], [0.5, -0.10, 0]]} />
    </group>
  )
}