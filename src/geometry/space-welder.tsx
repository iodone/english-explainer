import { SketchMesh, Rod, DraftLine } from './primitives'

export default function SpaceWelderSketch() {
  return (
    <group>
      {/* Body - welding gun */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.08, 0.24]} />
      </SketchMesh>

      {/* Fire part - electron beam */}
      <SketchMesh partId="fire-part" position={[0, 0, 0.14]}>
        <cylinderGeometry args={[0.02, 0.02, 0.06, 8]} />
      </SketchMesh>

      {/* Hold part - handle */}
      <SketchMesh partId="hold-part" position={[0, -0.10, 0]}>
        <boxGeometry args={[0.06, 0.12, 0.08]} />
      </SketchMesh>

      {/* Wire - power cable */}
      <Rod from={[0, -0.06, -0.08]} to={[0, -0.12, -0.14]} radius={0.008} partId="wire" />

      {/* Gas pipe */}
      <Rod from={[0, 0.04, -0.06]} to={[0, 0.04, -0.12]} radius={0.006} partId="gas-pipe" />

      {/* Look part - viewing screen */}
      <SketchMesh partId="look-part" position={[0, 0.06, 0.10]}>
        <boxGeometry args={[0.06, 0.04, 0.02]} />
      </SketchMesh>

      {/* Safe cover - shield */}
      <SketchMesh partId="safe-cover" position={[0, 0, 0.12]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 8]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.06, -0.16, 0.12], [-0.06, 0.06, 0.12], [0.06, 0.06, 0.12], [0.06, -0.16, 0.12], [-0.06, -0.16, 0.12]]} />
    </group>
  )
}