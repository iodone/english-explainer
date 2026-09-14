import { SketchMesh } from './primitives';

export default function PowerSurgeSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.25, 0.1, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.06, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.06, 0]}>
        <boxGeometry args={[0.2, 0.02, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.15, 0.06, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.08, 0.06, -0.05]}>
        <sphereGeometry args={[0.01, 8, 6]} />
      </SketchMesh>
      <SketchMesh partId="switch" position={[-0.08, 0.06, -0.05]}>
        <boxGeometry args={[0.025, 0.015, 0.02]} />
      </SketchMesh>
    </group>
  );
}
