import { SketchMesh } from './primitives'
import type { FC } from 'react'

const PowerRelaySketch: FC = () => {
  return (
    <>
      {/* Body: Housing that holds everything */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.2, 0.3, 0.15, 3, 3]} />
      </SketchMesh>

      {/* End: Terminals where power lines join */}
      <SketchMesh partId="end" position={[0, -0.1, 0]}>
        <boxGeometry args={[0.15, 0.05, 0.1, 3, 1]} />
      </SketchMesh>

      {/* Inside: Coil of thin wire */}
      <SketchMesh partId="inside" position={[0, 0, 0.04]}>
        <torusGeometry args={[0.04, 0.015, 12, 16]} />
      </SketchMesh>

      {/* Contact: Small piece that moves */}
      <SketchMesh partId="contact" position={[0, 0.05, 0.04]}>
        <boxGeometry args={[0.04, 0.02, 0.02, 2, 1]} />
      </SketchMesh>

      {/* Plug: Control pins */}
      <SketchMesh partId="plug" position={[0, 0.1, 0]}>
        <boxGeometry args={[0.08, 0.05, 0.06, 2, 1]} />
      </SketchMesh>

      {/* Bottom-part: Base */}
      <SketchMesh partId="bottom-part" position={[0, -0.15, 0]}>
        <boxGeometry args={[0.25, 0.02, 0.2, 4, 1]} />
      </SketchMesh>
    </>
  )
}

export default PowerRelaySketch