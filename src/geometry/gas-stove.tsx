import { SketchMesh, Rod, DraftLine } from './primitives'

export default function GasStoveSketch() {
  return (
    <group>
      {/* Body - cooktop */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.40, 0.06, 0.30]} />
      </SketchMesh>

      {/* Fire rings - burners */}
      <SketchMesh partId="fire-rings" position={[-0.10, 0.04, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh position={[0.10, 0.04, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02, 12]} />
      </SketchMesh>

      {/* Top parts - grates */}
      <SketchMesh partId="top-parts" position={[-0.10, 0.06, 0]}>
        <boxGeometry args={[0.14, 0.02, 0.14]} />
      </SketchMesh>
      <SketchMesh position={[0.10, 0.06, 0]}>
        <boxGeometry args={[0.14, 0.02, 0.14]} />
      </SketchMesh>

      {/* Turn handles - knobs */}
      <SketchMesh partId="turn-handles" position={[-0.10, 0.02, 0.14]}>
        <cylinderGeometry args={[0.02, 0.02, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh position={[0.10, 0.02, 0.14]}>
        <cylinderGeometry args={[0.02, 0.02, 0.03, 8]} />
      </SketchMesh>

      {/* Gas pipe */}
      <Rod from={[0, -0.03, -0.15]} to={[0, -0.08, -0.18]} radius={0.010} partId="gas-pipe" />

      {/* Light part - igniter */}
      <SketchMesh partId="light-part" position={[0, 0.02, 0.06]}>
        <boxGeometry args={[0.04, 0.02, 0.04]} />
      </SketchMesh>

      {/* Bottom part - oven */}
      <SketchMesh partId="bottom-part" position={[0, -0.14, 0]}>
        <boxGeometry args={[0.38, 0.16, 0.28]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.20, -0.22, 0.15], [-0.20, 0.07, 0.15], [0.20, 0.07, 0.15], [0.20, -0.22, 0.15], [-0.20, -0.22, 0.15]]} />
    </group>
  )
}