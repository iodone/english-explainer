import { SketchMesh } from './primitives'
import type { FC } from 'react'

const SpaceMonitorSketch: FC = () => {
  return (
    <>
      {/* Body: Casing that holds all parts */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.2, 0.15, 3, 2]} />
      </SketchMesh>

      {/* End: Sensor array */}
      <SketchMesh partId="end" position={[0.15, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.08, 12]} />
      </SketchMesh>

      {/* Top: Antenna */}
      <SketchMesh partId="top" position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.12, 8]} />
      </SketchMesh>

      {/* Bottom-part: Base */}
      <SketchMesh partId="bottom-part" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.35, 0.02, 0.2, 4, 1]} />
      </SketchMesh>

      {/* Inside: Circuit board */}
      <SketchMesh partId="inside" position={[0, 0, 0.06]}>
        <boxGeometry args={[0.25, 0.15, 0.02, 3, 2]} />
      </SketchMesh>

      {/* Power: Power unit */}
      <SketchMesh partId="power" position={[-0.15, 0, 0]}>
        <boxGeometry args={[0.08, 0.12, 0.12, 2, 2]} />
      </SketchMesh>
    </>
  )
}

export default SpaceMonitorSketch