import { SketchMesh, Rod, DraftLine } from './primitives'

export default function FoodWarmerSketch() {
  return (
    <group>
      {/* Body - housing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.36, 0.10, 0.24]} />
      </SketchMesh>

      {/* Heat part - heating element */}
      <SketchMesh partId="heat-part" position={[0, -0.04, 0]}>
        <boxGeometry args={[0.30, 0.02, 0.20]} />
      </SketchMesh>

      {/* Food place - warming tray */}
      <SketchMesh partId="food-place" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.32, 0.04, 0.22]} />
      </SketchMesh>

      {/* Top part - glass lid */}
      <SketchMesh partId="top-part" position={[0, 0.10, 0]}>
        <boxGeometry args={[0.34, 0.06, 0.24]} />
      </SketchMesh>

      {/* Button */}
      <SketchMesh partId="button" position={[0, 0.06, 0.12]}>
        <cylinderGeometry args={[0.02, 0.02, 0.02, 8]} />
      </SketchMesh>

      {/* Light */}
      <SketchMesh partId="light" position={[0, 0.08, 0.10]}>
        <sphereGeometry args={[0.012, 8, 8]} />
      </SketchMesh>

      {/* Power wire */}
      <Rod from={[0, -0.05, -0.10]} to={[0, -0.10, -0.16]} radius={0.008} partId="power-wire" />

      {/* Outline */}
      <DraftLine points={[[-0.18, -0.05, 0.12], [-0.18, 0.13, 0.12], [0.18, 0.13, 0.12], [0.18, -0.05, 0.12], [-0.18, -0.05, 0.12]]} />
    </group>
  )
}