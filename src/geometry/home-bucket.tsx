import { SketchMesh } from './primitives';

export default function HomeBucketSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <cylinderGeometry args={[0.2, 0.15, 0.3, 16]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.17, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.04, 16]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.16, 0]}>
        <torusGeometry args={[0.2, 0.015, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <cylinderGeometry args={[0.18, 0.13, 0.28, 16]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, 0.25, 0]}>
        <torusGeometry args={[0.12, 0.012, 8, 16, Math.PI]} />
      </SketchMesh>
      <SketchMesh partId="pour" position={[0.18, 0.12, 0]}>
        <boxGeometry args={[0.06, 0.04, 0.04]} />
      </SketchMesh>
    </group>
  );
}