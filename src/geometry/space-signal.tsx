import { SketchMesh } from './primitives'
import type { FC } from 'react'

const SpaceSignalSketch: FC = () => {
  return (
    <>
      {/* Body: The main part that sends the message */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.12, 0.12, 3, 2]} />
      </SketchMesh>

      {/* Sender: Part that makes the waves */}
      <SketchMesh partId="sender" position={[0.15, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.12, 8]} />
      </SketchMesh>

      {/* Top: Round thing on top */}
      <SketchMesh partId="top" position={[0, 0.15, 0]}>
        <sphereGeometry args={[0.08, 12, 8]} />
      </SketchMesh>

      {/* Inside: Part that turns words into waves */}
      <SketchMesh partId="inside" position={[0, 0, 0.06]}>
        <boxGeometry args={[0.25, 0.1, 0.02, 4, 2]} />
      </SketchMesh>

      {/* End: Part that points to where it is going */}
      <SketchMesh partId="end" position={[-0.15, 0, 0]}>
        <coneGeometry args={[0.03, 0.08, 8]} />
      </SketchMesh>

      {/* Power: Part that makes it work */}
      <SketchMesh partId="power" position={[0, -0.12, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.06, 8]} />
      </SketchMesh>
    </>
  )
}

export default SpaceSignalSketch