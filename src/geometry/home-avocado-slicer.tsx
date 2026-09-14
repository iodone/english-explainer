import { SketchMesh } from './primitives';

export default function HomeAvocadoSlicerSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.16, 0.12, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="hold" position={[0, 0.18, 0]}>
        <boxGeometry args={[0.12, 0.16, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.06, 16]} />
      </SketchMesh>
      <SketchMesh partId="ring" position={[0, -0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.08, 0.012, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0, -0.04, 0]}>
        <boxGeometry args={[0.18, 0.16, 0.012]} />
      </SketchMesh>
      <SketchMesh partId="scoop" position={[0, -0.22, 0]}>
        <sphereGeometry args={[0.08, 16, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </SketchMesh>
    </group>
  );
}
