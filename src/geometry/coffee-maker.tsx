import { SketchMesh, Rod, DraftLine } from './primitives'

export default function CoffeeMakerSketch() {
  return (
    <group>
      {/* Body - housing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.24, 0.30, 0.20]} />
      </SketchMesh>

      {/* Water box - reservoir */}
      <SketchMesh partId="water-box" position={[0, 0.08, -0.06]}>
        <boxGeometry args={[0.18, 0.16, 0.10]} />
      </SketchMesh>

      {/* Heat part - heating element */}
      <SketchMesh partId="heat-part" position={[0, -0.04, 0]}>
        <boxGeometry args={[0.16, 0.04, 0.12]} />
      </SketchMesh>

      {/* Put in - filter basket */}
      <SketchMesh partId="put-in" position={[0, 0.04, 0.06]}>
        <cylinderGeometry args={[0.06, 0.06, 0.08, 8]} />
      </SketchMesh>

      {/* Pot - carafe */}
      <SketchMesh partId="pot" position={[0, -0.10, 0.06]}>
        <cylinderGeometry args={[0.06, 0.08, 0.12, 8]} />
      </SketchMesh>

      {/* Top part - lid */}
      <SketchMesh partId="top-part" position={[0, 0.14, 0]}>
        <boxGeometry args={[0.22, 0.04, 0.18]} />
      </SketchMesh>

      {/* Power wire */}
      <Rod from={[0, -0.10, -0.10]} to={[0, -0.16, -0.16]} radius={0.008} partId="power-wire" />

      {/* Outline */}
      <DraftLine points={[[-0.12, -0.16, 0.10], [-0.12, 0.16, 0.10], [0.12, 0.16, 0.10], [0.12, -0.16, 0.10], [-0.12, -0.16, 0.10]]} />
    </group>
  )
}