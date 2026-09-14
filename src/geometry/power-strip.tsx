import { SketchMesh } from './primitives';

export default function PowerStripSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.7, 0.08, 0.15]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.05, 0]}>
        <boxGeometry args={[0.6, 0.02, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0, -0.35]}>
        <boxGeometry args={[0.06, 0.06, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <boxGeometry args={[0.65, 0.05, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, 0.06, 0.1]}>
        <boxGeometry args={[0.06, 0.03, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
      </SketchMesh>
    </group>
  );
}