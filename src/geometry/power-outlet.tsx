import { SketchMesh, Rod, DraftLine } from './primitives'

export default function PowerOutletSketch() {
  return (
    <group>
      {/* Body - faceplate */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.20, 0.28, 0.04]} />
      </SketchMesh>

      {/* Holes - socket openings */}
      <SketchMesh partId="holes" position={[-0.04, 0.04, 0.04]}>
        <boxGeometry args={[0.03, 0.06, 0.01]} />
      </SketchMesh>
      <SketchMesh position={[0.04, 0.04, 0.04]}>
        <boxGeometry args={[0.03, 0.06, 0.01]} />
      </SketchMesh>

      {/* Inside part - contacts */}
      <SketchMesh partId="inside-part" position={[0, 0, -0.02]}>
        <boxGeometry args={[0.12, 0.08, 0.02]} />
      </SketchMesh>

      {/* Wire in - line wire */}
      <Rod from={[0, -0.08, -0.04]} to={[0, -0.12, -0.08]} radius={0.008} partId="wire-in" />

      {/* Ground wire */}
      <Rod from={[0, 0.08, -0.04]} to={[0, 0.12, -0.08]} radius={0.008} partId="ground-wire" />

      {/* Hold part - mounting bracket */}
      <SketchMesh partId="hold-part" position={[0, 0, -0.06]}>
        <boxGeometry args={[0.18, 0.24, 0.02]} />
      </SketchMesh>

      {/* Safe part - safety shutter */}
      <SketchMesh partId="safe-part" position={[0, 0, 0.02]}>
        <boxGeometry args={[0.14, 0.14, 0.01]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.10, -0.14, 0.02], [-0.10, 0.14, 0.02], [0.10, 0.14, 0.02], [0.10, -0.14, 0.02], [-0.10, -0.14, 0.02]]} />
    </group>
  )
}