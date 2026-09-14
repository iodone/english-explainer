import { SketchMesh } from './primitives';

export default function PowerCapacitorSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <cylinderGeometry args={[0.12, 0.12, 0.25, 16]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.06, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.06, 8]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <boxGeometry args={[0.15, 0.18, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, 0.2, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="power">
        <boxGeometry args={[0.14, 0.16, 0.015]} />
      </SketchMesh>
    </group>
  );
}