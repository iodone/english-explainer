import { SketchMesh } from './primitives'

export default function PowerCordSketch() {
  return (
    <group>
      {/* Body */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.02, 0.02, 0.2]} />
      </SketchMesh>
      {/* Plug */}
      <SketchMesh partId="plug" position={[0, 0, 0.1]}>
        <boxGeometry args={[0.04, 0.03, 0.02]} />
      </SketchMesh>
      {/* End */}
      <SketchMesh partId="end" position={[0, 0, -0.1]}>
        <boxGeometry args={[0.03, 0.02, 0.02]} />
      </SketchMesh>
      {/* Outside */}
      <SketchMesh partId="outside" position={[0, 0.01, 0]}>
        <boxGeometry args={[0.02, 0.005, 0.2]} />
      </SketchMesh>
      {/* Inside */}
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.015, 0.015, 0.2]} />
      </SketchMesh>
      {/* Hold part */}
      <SketchMesh partId="hold-part" position={[0, 0, 0.08]}>
        <cylinderGeometry args={[0.015, 0.01, 0.02, 16]} />
      </SketchMesh>
    </group>
  )
}