import { SketchMesh } from './primitives'
import type { FC } from 'react'

const SpaceCalculatorSketch: FC = () => {
  return (
    <>
      {/* Body: Casing */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.2, 0.3, 0.08, 2, 3]} />
      </SketchMesh>

      {/* End: Keypad */}
      <SketchMesh partId="end" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.18, 0.12, 0.02, 3, 2]} />
      </SketchMesh>

      {/* Top: Display */}
      <SketchMesh partId="top" position={[0, 0.12, 0]}>
        <boxGeometry args={[0.18, 0.08, 0.02, 3, 1]} />
      </SketchMesh>

      {/* Inside: Processor */}
      <SketchMesh partId="inside" position={[0, 0, 0.05]}>
        <boxGeometry args={[0.15, 0.1, 0.02, 2, 1]} />
      </SketchMesh>

      {/* Power: Battery */}
      <SketchMesh partId="power" position={[0, -0.15, 0.04]}>
        <boxGeometry args={[0.1, 0.04, 0.06, 2, 1]} />
      </SketchMesh>

      {/* Plug: Data port */}
      <SketchMesh partId="plug" position={[0.12, 0, 0]}>
        <boxGeometry args={[0.02, 0.06, 0.04, 1, 1]} />
      </SketchMesh>
    </>
  )
}

export default SpaceCalculatorSketch