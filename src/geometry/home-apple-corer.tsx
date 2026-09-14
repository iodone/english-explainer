import { SketchMesh } from './primitives';

export default function HomeAppleCorerSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.16, 0.1, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="tube" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.34, 20]} />
      </SketchMesh>
      <SketchMesh partId="ring" position={[0, -0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.07, 0.012, 8, 22]} />
      </SketchMesh>
      <SketchMesh partId="hold" position={[0, 0.2, 0]}>
        <boxGeometry args={[0.1, 0.12, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0.15, -0.06, 0]}>
        <boxGeometry args={[0.02, 0.22, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.3, 0]}>
        <boxGeometry args={[0.16, 0.03, 0.16]} />
      </SketchMesh>
    </group>
  );
}
