import { SketchMesh } from './primitives';

export default function SpaceBeaconSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.25, 0.3, 0.25]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.18, 0]}>
        <sphereGeometry args={[0.1, 12, 12]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <boxGeometry args={[0.2, 0.15, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0.2, 0, 0]}>
        <boxGeometry args={[0.08, 0.25, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0, 0.22, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
      </SketchMesh>
    </group>
  );
}