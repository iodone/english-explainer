import { SketchMesh } from './primitives'

export default function HomeRugSketch() {
  return (
    <group>
      {/* Body */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 0.01, 0.3]} />
      </SketchMesh>
      {/* Top */}
      <SketchMesh partId="top" position={[0, 0.01, 0]}>
        <planeGeometry args={[0.4, 0.3]} />
      </SketchMesh>
      {/* Picture */}
      <SketchMesh partId="picture" position={[0, 0.011, 0]}>
        <planeGeometry args={[0.2, 0.15]} />
      </SketchMesh>
      {/* Bottom part */}
      <SketchMesh partId="bottom-part" position={[0, -0.01, 0]}>
        <planeGeometry args={[0.4, 0.3]} />
      </SketchMesh>
      {/* Edges */}
      <SketchMesh partId="edges" position={[0, 0, 0.15]}>
        <boxGeometry args={[0.4, 0.01, 0.02]} />
      </SketchMesh>
      {/* Threads */}
      <SketchMesh partId="threads" position={[0.1, 0.02, 0.1]}>
        <boxGeometry args={[0.02, 0.01, 0.02]} />
      </SketchMesh>
    </group>
  )
}