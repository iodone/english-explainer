import { SketchMesh } from './primitives'
import type { FC } from 'react'

const PowerAmplifierSketch: FC = () => {
  return (
    <>
      {/* Body: Chassis */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.15, 0.2, 3, 2]} />
      </SketchMesh>

      {/* End: Terminals */}
      <SketchMesh partId="end" position={[0, -0.1, 0]}>
        <boxGeometry args={[0.25, 0.04, 0.15, 3, 1]} />
      </SketchMesh>

      {/* Top: Heat sink */}
      <SketchMesh partId="top" position={[0, 0.1, 0]}>
        <boxGeometry args={[0.28, 0.04, 0.18, 4, 2]} />
      </SketchMesh>

      {/* Inside: Circuit */}
      <SketchMesh partId="inside" position={[0, 0, 0.06]}>
        <boxGeometry args={[0.25, 0.12, 0.02, 3, 2]} />
      </SketchMesh>

      {/* Plug: Input */}
      <SketchMesh partId="plug" position={[-0.15, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.06, 8]} />
      </SketchMesh>

      {/* Power: Power supply */}
      <SketchMesh partId="power" position={[0.15, 0, 0]}>
        <boxGeometry args={[0.08, 0.12, 0.15, 2, 2]} />
      </SketchMesh>
    </>
  )
}

export default PowerAmplifierSketch