import { SketchMesh } from './primitives';

export default function SpaceCapsuleSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <cylinderGeometry args={[0.35, 0.4, 0.5, 16]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.4, 0.35, 0.1, 16]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.2, 0.35, 0.1, 16]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <cylinderGeometry args={[0.28, 0.32, 0.4, 16]} />
      </SketchMesh>
      <SketchMesh partId="heat-shield" position={[0, -0.32, 0]}>
        <cylinderGeometry args={[0.42, 0.38, 0.06, 16]} />
      </SketchMesh>
      <SketchMesh partId="seat" position={[0, -0.05, 0]}>
        <boxGeometry args={[0.2, 0.08, 0.2]} />
      </SketchMesh>
    </group>
  );
}