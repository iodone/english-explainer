import { SketchMesh } from './primitives'

export default function HomeMatSketch() {
  return (
    <group>
      {/* Body */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 0.01, 0.2]} />
      </SketchMesh>
      {/* Top */}
      <SketchMesh partId="top" position={[0, 0.01, 0]}>
        <planeGeometry args={[0.3, 0.2]} />
      </SketchMesh>
      {/* Edges */}
      <SketchMesh partId="edges" position={[0, 0, 0.1]}>
        <boxGeometry args={[0.3, 0.015, 0.01]} />
      </SketchMesh>
      {/* Bottom part */}
      <SketchMesh partId="bottom-part" position={[0, -0.01, 0]}>
        <planeGeometry args={[0.3, 0.2]} />
      </SketchMesh>
      {/* Picture */}
      <SketchMesh partId="picture" position={[0, 0.011, 0]}>
        <planeGeometry args={[0.15, 0.1]} />
      </SketchMesh>
      {/* Threads */}
      <SketchMesh partId="threads" position={[0.1, 0.02, 0.1]}>
        <boxGeometry args={[0.02, 0.015, 0.02]} />
      </SketchMesh>
    </group>
  )
}