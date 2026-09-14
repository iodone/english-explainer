import { SketchMesh, Rod, DraftLine } from './primitives'

export default function PowerSwitchSketch() {
  return (
    <group>
      {/* Body - faceplate */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.20, 0.28, 0.04]} />
      </SketchMesh>

      {/* Flip part - toggle */}
      <SketchMesh partId="switch-part" position={[0, 0.04, 0.04]}>
        <boxGeometry args={[0.06, 0.10, 0.02]} />
      </SketchMesh>

      {/* Inside part - contacts */}
      <SketchMesh partId="inside-part" position={[0, 0, -0.02]}>
        <boxGeometry args={[0.12, 0.08, 0.02]} />
      </SketchMesh>

      {/* Wire in - line terminal */}
      <Rod from={[0, -0.06, -0.04]} to={[0, -0.10, -0.08]} radius={0.008} partId="wire-in" />

      {/* Wire out - load terminal */}
      <Rod from={[0, 0.06, -0.04]} to={[0, 0.10, -0.08]} radius={0.008} partId="wire-out" />

      {/* Hold part - mounting bracket */}
      <SketchMesh partId="hold-part" position={[0, 0, -0.06]}>
        <boxGeometry args={[0.18, 0.24, 0.02]} />
      </SketchMesh>

      {/* Light - indicator LED */}
      <SketchMesh partId="light" position={[0, 0.08, 0.04]}>
        <sphereGeometry args={[0.012, 8, 8]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.10, -0.14, 0.02], [-0.10, 0.14, 0.02], [0.10, 0.14, 0.02], [0.10, -0.14, 0.02], [-0.10, -0.14, 0.02]]} />
    </group>
  )
}