import { SketchMesh } from './primitives';

export default function HomeKeySketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.04, 0.3, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.18, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, -0.05, 0.01]}>
        <boxGeometry args={[0.06, 0.15, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0, 0.2, 0]}>
        <ringGeometry args={[0.03, 0.06, 12]} />
      </SketchMesh>
      <SketchMesh partId="point" position={[0, -0.22, 0]}>
        <boxGeometry args={[0.03, 0.04, 0.02]} />
      </SketchMesh>
    </group>
  );
}