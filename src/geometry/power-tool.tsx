import { SketchMesh, Rod, DraftLine } from './primitives'

export default function PowerToolSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.08, 0.14, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, -0.10, 0.02]}>
        <boxGeometry args={[0.06, 0.10, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="turn-part" position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.08, 12]} />
      </SketchMesh>
      <SketchMesh partId="work-end" position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh partId="button" position={[0, -0.06, 0.06]}>
        <boxGeometry args={[0.04, 0.02, 0.01]} />
      </SketchMesh>
      <Rod from={[0, -0.12, -0.04]} to={[0, -0.18, -0.10]} radius={0.006} partId="power-wire" />
      <SketchMesh partId="side-handle" position={[0.08, -0.02, 0]}>
        <boxGeometry args={[0.06, 0.04, 0.04]} />
      </SketchMesh>
      <DraftLine points={[[-0.5, -0.22, 0], [0.5, -0.22, 0]]} />
    </group>
  )
}