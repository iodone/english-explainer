import { SketchMesh } from './primitives';

export default function PowerRectifierSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.2, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.12, 0]}>
        <boxGeometry args={[0.15, 0.04, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.15, 0.04, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <boxGeometry args={[0.12, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0.18, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.08, 8]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[-0.18, 0, 0]}>
        <boxGeometry args={[0.04, 0.18, 0.16]} />
      </SketchMesh>
    </group>
  );
}