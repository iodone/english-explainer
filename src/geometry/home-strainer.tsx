import { SketchMesh } from './primitives';

export default function HomeStrainerSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <sphereGeometry args={[0.15, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.08, 0]}>
        <torusGeometry args={[0.14, 0.015, 8, 16]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.01, 16]} />
      </SketchMesh>
      <SketchMesh partId="hook" position={[0, 0, -0.3]}>
        <torusGeometry args={[0.02, 0.005, 8, 12]} />
      </SketchMesh>
      <SketchMesh partId="rest" position={[0, -0.1, 0]}>
        <boxGeometry args={[0.04, 0.02, 0.04]} />
      </SketchMesh>
    </group>
  );
}
