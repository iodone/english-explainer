import { SketchMesh } from './primitives';

export default function SpaceParachuteSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.4, 4]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.35, 0]}>
        <ringGeometry args={[0.05, 0.12, 16]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, -0.25, 0]}>
        <boxGeometry args={[0.15, 0.12, 0.15]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0, 0.3, 0]}>
        <ringGeometry args={[0.02, 0.06, 8]} />
      </SketchMesh>
      <SketchMesh partId="strap" position={[0, -0.15, 0]}>
        <boxGeometry args={[0.08, 0.15, 0.08]} />
      </SketchMesh>
    </group>
  );
}