import { SketchMesh, Rod, DraftLine } from './primitives'

export default function EggCookerSketch() {
  return (
    <group>
      {/* Body - base */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.12, 16]} />
      </SketchMesh>

      {/* Pot - heating plate */}
      <SketchMesh partId="pot" position={[0, -0.04, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.04, 16]} />
      </SketchMesh>

      {/* Lid */}
      <SketchMesh partId="lid" position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.04, 16]} />
      </SketchMesh>

      {/* Egg holes */}
      <SketchMesh partId="egg-holes" position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.10, 0.10, 0.04, 16]} />
      </SketchMesh>

      {/* Water line */}
      <SketchMesh partId="water-line" position={[0, -0.02, 0.10]}>
        <boxGeometry args={[0.04, 0.02, 0.02]} />
      </SketchMesh>

      {/* Button */}
      <SketchMesh partId="button" position={[0, 0.08, 0.12]}>
        <sphereGeometry args={[0.02, 8, 8]} />
      </SketchMesh>

      {/* Power wire */}
      <Rod from={[0, -0.06, -0.08]} to={[0, -0.10, -0.14]} radius={0.008} partId="power-wire" />

      {/* Outline */}
      <DraftLine points={[[-0.14, -0.06, 0.14], [-0.14, 0.14, 0.14], [0.14, 0.14, 0.14], [0.14, -0.06, 0.14], [-0.14, -0.06, 0.14]]} />
    </group>
  )
}