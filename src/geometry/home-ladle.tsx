import { SketchMesh } from './primitives';

export default function HomeLadleSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <sphereGeometry args={[0.1, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.05, 0]}>
        <torusGeometry args={[0.09, 0.01, 8, 12]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, -0.02, 0]}>
        <sphereGeometry args={[0.08, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="hook" position={[0, 0, -0.35]}>
        <torusGeometry args={[0.02, 0.005, 8, 12]} />
      </SketchMesh>
      <SketchMesh partId="pour" position={[0.05, 0.04, 0.05]}>
        <boxGeometry args={[0.03, 0.02, 0.03]} />
      </SketchMesh>
    </group>
  );
}
