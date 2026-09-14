import { SketchMesh } from './primitives'
import type { FC } from 'react'

const HomeCurtainSketch: FC = () => {
  return (
    <>
      {/* Body: The big piece of cloth */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.4, 0.8, 0.02, 2, 4]} />
      </SketchMesh>

      {/* Top: Part at very top */}
      <SketchMesh partId="top" position={[0, 0.15, 0]}>
        <boxGeometry args={[0.4, 0.05, 0.02, 4, 1]} />
      </SketchMesh>

      {/* Rod: Long round thing above window */}
      <SketchMesh partId="rod" position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.5, 8]} />
      </SketchMesh>

      {/* Rings: Round things around rod */}
      <SketchMesh partId="rings" position={[0, 0.15, 0]}>
        <torusGeometry args={[0.015, 0.004, 8, 12]} />
      </SketchMesh>

      {/* Bottom-part: Heavier edge at bottom */}
      <SketchMesh partId="bottom-part" position={[0, -0.15, 0]}>
        <boxGeometry args={[0.4, 0.03, 0.02, 4, 1]} />
      </SketchMesh>

      {/* Cloth: Material the body is made of */}
      <SketchMesh partId="cloth" position={[0, 0, 0.01]}>
        <planeGeometry args={[0.38, 0.78, 2, 4]} />
      </SketchMesh>
    </>
  )
}

export default HomeCurtainSketch