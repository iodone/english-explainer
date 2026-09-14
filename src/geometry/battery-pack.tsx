import { SketchMesh, DraftLine } from './primitives'

export default function BatteryPackSketch() {
  return (
    <group>
      {/* Body - housing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.24, 0.12, 0.08]} />
      </SketchMesh>

      {/* Inside part - battery cells */}
      <SketchMesh partId="inside-part" position={[0, 0, 0]}>
        <boxGeometry args={[0.20, 0.08, 0.06]} />
      </SketchMesh>

      {/* Put in - input port */}
      <SketchMesh partId="put-in" position={[0, 0.06, 0.06]}>
        <boxGeometry args={[0.04, 0.02, 0.02]} />
      </SketchMesh>

      {/* Take out - output port */}
      <SketchMesh partId="take-out" position={[0, -0.06, 0.06]}>
        <boxGeometry args={[0.04, 0.02, 0.02]} />
      </SketchMesh>

      {/* Light - LED indicators */}
      <SketchMesh partId="light" position={[0, 0.04, 0.08]}>
        <sphereGeometry args={[0.012, 8, 8]} />
      </SketchMesh>

      {/* Button */}
      <SketchMesh partId="button" position={[0, 0.06, 0.08]}>
        <sphereGeometry args={[0.012, 8, 8]} />
      </SketchMesh>

      {/* Safe part - protection circuit */}
      <SketchMesh partId="safe-part" position={[0, 0, -0.04]}>
        <boxGeometry args={[0.16, 0.06, 0.02]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.12, -0.06, 0.04], [-0.12, 0.06, 0.04], [0.12, 0.06, 0.04], [0.12, -0.06, 0.04], [-0.12, -0.06, 0.04]]} />
    </group>
  )
}