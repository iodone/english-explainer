import { SketchMesh, Rod, DraftLine } from './primitives'

export default function DishWasherSketch() {
  return (
    <group>
      <SketchMesh partId="box-body" position={[0, 0, 0]}>
        <boxGeometry args={[0.40, 0.32, 0.30]} />
      </SketchMesh>
      <SketchMesh partId="door" position={[0, -0.18, 0.14]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.38, 0.02, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="top-spin" position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.10, 0.10, 0.008, 16]} />
      </SketchMesh>
      <SketchMesh partId="bottom-spin" position={[0, -0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.10, 0.10, 0.008, 16]} />
      </SketchMesh>
      <SketchMesh partId="water-box" position={[0, -0.14, 0]}>
        <boxGeometry args={[0.34, 0.06, 0.24]} />
      </SketchMesh>
      <Rod from={[0, -0.10, -0.12]} to={[0, -0.14, -0.20]} radius={0.008} partId="dirty-water-pipe" />
      <SketchMesh partId="button" position={[0, 0.14, 0.14]}>
        <boxGeometry args={[0.12, 0.02, 0.02]} />
      </SketchMesh>
      <DraftLine points={[[-0.6, -0.20, 0], [0.6, -0.20, 0]]} />
    </group>
  )
}