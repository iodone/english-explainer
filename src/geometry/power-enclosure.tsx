import { SketchMesh } from './primitives';

export default function PowerEnclosureSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.25, 0.15]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.08]}>
        <boxGeometry args={[0.28, 0.23, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.14, 0]}>
        <boxGeometry args={[0.32, 0.02, 0.17]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.25, 0.2, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="lock" position={[0, 0.08, -0.09]}>
        <cylinderGeometry args={[0.015, 0.015, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="seal" position={[0, 0.12, 0]}>
        <boxGeometry args={[0.31, 0.01, 0.16]} />
      </SketchMesh>
    </group>
  );
}
