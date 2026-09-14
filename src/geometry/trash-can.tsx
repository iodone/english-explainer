import { SketchMesh, Rod, DraftLine } from './primitives'

export default function TrashCanSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.10, 0.08, 0.24, 16]} />
      </SketchMesh>
      <SketchMesh partId="top-part" position={[0, 0.14, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.02, 16]} />
      </SketchMesh>
      <Rod from={[0, 0.18, 0]} to={[0, 0.18, 0.06]} radius={0.006} partId="handle" />
      <Rod from={[0, -0.12, 0.08]} to={[0, -0.12, 0.10]} radius={0.008} partId="foot-pedal" />
      <SketchMesh partId="inside-box" position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.08, 0.06, 0.18, 16]} />
      </SketchMesh>
      <SketchMesh partId="smell-part" position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.01, 16]} />
      </SketchMesh>
      <SketchMesh partId="ring" position={[0, 0.10, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.10, 0.10, 0.006, 16]} />
      </SketchMesh>
      <DraftLine points={[[-0.5, -0.14, 0], [0.5, -0.14, 0]]} />
    </group>
  )
}