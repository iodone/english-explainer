import { SketchMesh, Rod, DraftLine } from './primitives'

export default function AirConditionerSketch() {
  return (
    <group>
      {/* Body - housing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.40, 0.20, 0.16]} />
      </SketchMesh>

      {/* Front part - front panel */}
      <SketchMesh partId="front-part" position={[0, 0, 0.10]}>
        <boxGeometry args={[0.38, 0.18, 0.02]} />
      </SketchMesh>

      {/* Cold part - evaporator */}
      <SketchMesh partId="cold-part" position={[0, 0, 0.04]}>
        <boxGeometry args={[0.32, 0.12, 0.04]} />
      </SketchMesh>

      {/* Hot part - condenser */}
      <SketchMesh partId="hot-part" position={[0, 0, -0.04]}>
        <boxGeometry args={[0.32, 0.12, 0.04]} />
      </SketchMesh>

      {/* Fan */}
      <SketchMesh partId="fan" position={[0, 0, 0.06]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02, 12]} />
      </SketchMesh>

      {/* Air out - outlet */}
      <SketchMesh partId="air-out" position={[0, 0.08, 0.10]}>
        <boxGeometry args={[0.20, 0.04, 0.02]} />
      </SketchMesh>

      {/* Power wire */}
      <Rod from={[0, -0.10, -0.08]} to={[0, -0.12, -0.14]} radius={0.008} partId="power-wire" />

      {/* Outline */}
      <DraftLine points={[[-0.20, -0.10, 0.08], [-0.20, 0.10, 0.08], [0.20, 0.10, 0.08], [0.20, -0.10, 0.08], [-0.20, -0.10, 0.08]]} />
    </group>
  )
}