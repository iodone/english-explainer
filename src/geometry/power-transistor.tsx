import { SketchMesh } from './primitives'
import type { FC } from 'react'

const PowerTransistorSketch: FC = () => {
  return (
    <>
      {/* Body: Package */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.15, 0.12, 0.1, 2, 2]} />
      </SketchMesh>

      {/* End: Leads */}
      <SketchMesh partId="end" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.1, 0.06, 0.08, 2, 1]} />
      </SketchMesh>

      {/* Inside: Die */}
      <SketchMesh partId="inside" position={[0, 0, 0.04]}>
        <boxGeometry args={[0.1, 0.08, 0.02, 2, 1]} />
      </SketchMesh>

      {/* Top: Heat spreader */}
      <SketchMesh partId="top" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.15, 0.02, 0.1, 3, 1]} />
      </SketchMesh>

      {/* Plug: Gate pin */}
      <SketchMesh partId="plug" position={[0.08, 0.08, 0]}>
        <boxGeometry args={[0.02, 0.06, 0.02, 1, 1]} />
      </SketchMesh>

      {/* Bottom-part: Tab */}
      <SketchMesh partId="bottom-part" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.12, 0.02, 0.08, 2, 1]} />
      </SketchMesh>
    </>
  )
}

export default PowerTransistorSketch