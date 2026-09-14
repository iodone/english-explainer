import { SketchMesh } from './primitives'
import type { FC } from 'react'

const HomeDoorSketch: FC = () => {
  return (
    <>
      {/* Body: Door panel */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.25, 0.6, 0.04, 2, 4]} />
      </SketchMesh>

      {/* Top: Top rail */}
      <SketchMesh partId="top" position={[0, 0.15, 0]}>
        <boxGeometry args={[0.25, 0.04, 0.04, 4, 1]} />
      </SketchMesh>

      {/* Handle: Handle */}
      <SketchMesh partId="handle" position={[0.1, 0, 0.04]}>
        <cylinderGeometry args={[0.01, 0.01, 0.06, 8]} />
      </SketchMesh>

      {/* Lock: Lock */}
      <SketchMesh partId="lock" position={[0.1, -0.05, 0.04]}>
        <boxGeometry args={[0.03, 0.03, 0.02, 2, 1]} />
      </SketchMesh>

      {/* Bottom-part: Bottom rail */}
      <SketchMesh partId="bottom-part" position={[0, -0.15, 0]}>
        <boxGeometry args={[0.25, 0.04, 0.04, 4, 1]} />
      </SketchMesh>

      {/* Hinge: Hinge */}
      <SketchMesh partId="hinge" position={[-0.15, 0, 0.02]}>
        <cylinderGeometry args={[0.01, 0.01, 0.08, 8]} />
      </SketchMesh>
    </>
  )
}

export default HomeDoorSketch