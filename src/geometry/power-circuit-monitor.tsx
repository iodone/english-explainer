import { SketchMesh, Rod } from './primitives';

export default function PowerCircuitMonitorSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.46, 0.3, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="display" position={[0.1, 0.08, 0.02]}>
        <boxGeometry args={[0.22, 0.14, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="alarm" position={[-0.14, 0.12, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 0.05, 16]} />
      </SketchMesh>
      <SketchMesh partId="button" position={[-0.12, -0.1, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.03, 14]} />
      </SketchMesh>
      <SketchMesh partId="input" position={[0.32, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.14, 14]} />
      </SketchMesh>
      <Rod from={[-0.24, 0, 0]} to={[-0.38, -0.12, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
