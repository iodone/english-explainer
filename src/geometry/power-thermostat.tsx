import { SketchMesh } from './primitives';

export default function PowerThermostatSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.15, 0.12, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.02, -0.03]}>
        <boxGeometry args={[0.1, 0.06, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.06, -0.03]}>
        <boxGeometry args={[0.08, 0.02, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, -0.06, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, 0.05, 0.03]}>
        <boxGeometry args={[0.05, 0.03, 0.02]} />
      </SketchMesh>
    </group>
  );
}
