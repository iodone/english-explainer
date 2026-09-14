import { SketchMesh } from './primitives'
import type { FC } from 'react'

const HomeWindowSketch: FC = () => {
  return (
    <>
      {/* Body: Frame */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.4, 0.04, 3, 4]} />
      </SketchMesh>

      {/* Top: Top sash */}
      <SketchMesh partId="top" position={[0, 0.12, 0]}>
        <boxGeometry args={[0.28, 0.04, 0.04, 4, 1]} />
      </SketchMesh>

      {/* Glass: Glass pane */}
      <SketchMesh partId="glass" position={[0, 0, 0.04]}>
        <planeGeometry args={[0.28, 0.38, 2, 3]} />
      </SketchMesh>

      {/* Bottom-part: Bottom sash */}
      <SketchMesh partId="bottom-part" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.28, 0.04, 0.04, 4, 1]} />
      </SketchMesh>

      {/* Lock: Latch */}
      <SketchMesh partId="lock" position={[0.12, 0, 0.04]}>
        <boxGeometry args={[0.03, 0.03, 0.02, 1, 1]} />
      </SketchMesh>

      {/* Handle: Handle */}
      <SketchMesh partId="handle" position={[-0.12, 0, 0.04]}>
        <cylinderGeometry args={[0.008, 0.008, 0.04, 8]} />
      </SketchMesh>
    </>
  )
}

export default HomeWindowSketch