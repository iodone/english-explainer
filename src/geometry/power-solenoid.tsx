import { SketchMesh } from './primitives';

export default function PowerSolenoidSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <cylinderGeometry args={[0.12, 0.12, 0.3, 16]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.12, 8]} />
      </SketchMesh>
      <SketchMesh partId="top">
        <torusGeometry args={[0.1, 0.02, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <cylinderGeometry args={[0.035, 0.035, 0.25, 8]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, -0.18, 0]}>
        <boxGeometry args={[0.06, 0.04, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 8]} />
      </SketchMesh>
    </group>
  );
}