import { SketchMesh, Rod } from './primitives';

export default function PowerVoltageSensorSketch() {
  return (
    <group>
      <SketchMesh partId="case" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.34, 0.14, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="chip" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.1, 0.05, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="display" position={[0.06, 0.14, 0]}>
        <boxGeometry args={[0.14, 0.05, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="alarm" position={[-0.13, 0.14, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.05, 16]} />
      </SketchMesh>
      <Rod from={[-0.18, 0, 0]} to={[-0.34, -0.06, 0]} radius={0.012} partId="input" />
      <Rod from={[0.18, 0, 0]} to={[0.34, -0.06, 0]} radius={0.012} partId="output" />
    </group>
  );
}
