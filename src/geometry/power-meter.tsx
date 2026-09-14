import { SketchMesh, Rod, DraftLine } from './primitives'

export default function PowerMeterSketch() {
  return (
    <group>
      {/* Body - housing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.22, 0.30, 0.14]} />
      </SketchMesh>

      {/* Glass front - display window */}
      <SketchMesh partId="glass-front" position={[0, 0, 0.08]}>
        <boxGeometry args={[0.16, 0.14, 0.02]} />
      </SketchMesh>

      {/* Numbers - register */}
      <SketchMesh partId="numbers" position={[0, 0, 0.06]}>
        <boxGeometry args={[0.14, 0.08, 0.02]} />
      </SketchMesh>

      {/* Turn part - disc */}
      <SketchMesh partId="turn-part" position={[0, -0.02, 0.04]}>
        <cylinderGeometry args={[0.04, 0.04, 0.01, 12]} />
      </SketchMesh>

      {/* Wire in - line input */}
      <Rod from={[0, -0.08, -0.04]} to={[0, -0.12, -0.08]} radius={0.008} partId="wire-in" />

      {/* Wire out - load output */}
      <Rod from={[0, 0.08, -0.04]} to={[0, 0.12, -0.08]} radius={0.008} partId="wire-out" />

      {/* Hold part - mounting base */}
      <SketchMesh partId="hold-part" position={[0, 0, -0.08]}>
        <boxGeometry args={[0.20, 0.28, 0.04]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.11, -0.15, 0.07], [-0.11, 0.15, 0.07], [0.11, 0.15, 0.07], [0.11, -0.15, 0.07], [-0.11, -0.15, 0.07]]} />
    </group>
  )
}