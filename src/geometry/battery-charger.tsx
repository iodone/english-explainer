import { SketchMesh, Rod, DraftLine } from './primitives'

export default function BatteryChargerSketch() {
  return (
    <group>
      {/* Body - housing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.30, 0.20, 0.16]} />
      </SketchMesh>

      {/* Plug */}
      <SketchMesh partId="plug" position={[0, 0.14, 0]}>
        <boxGeometry args={[0.06, 0.06, 0.04]} />
      </SketchMesh>

      {/* Wire */}
      <Rod from={[0, 0.10, 0]} to={[0, 0.14, 0]} radius={0.008} partId="wire" />

      {/* Light - LED indicator */}
      <SketchMesh partId="light" position={[0, 0.04, 0.10]}>
        <sphereGeometry args={[0.02, 8, 8]} />
      </SketchMesh>

      {/* Inside part - circuit board */}
      <SketchMesh partId="inside-part" position={[0, 0, 0]}>
        <boxGeometry args={[0.24, 0.14, 0.10]} />
      </SketchMesh>

      {/* Put in - battery slot */}
      <SketchMesh partId="put-in" position={[0, -0.06, 0.06]}>
        <boxGeometry args={[0.16, 0.08, 0.06]} />
      </SketchMesh>

      {/* Cool holes - ventilation */}
      <SketchMesh partId="cool-holes" position={[0, -0.04, -0.10]}>
        <boxGeometry args={[0.20, 0.10, 0.02]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.15, -0.10, 0.08], [-0.15, 0.10, 0.08], [0.15, 0.10, 0.08], [0.15, -0.10, 0.08], [-0.15, -0.10, 0.08]]} />
    </group>
  )
}