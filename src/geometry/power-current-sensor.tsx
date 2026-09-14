import { SketchMesh, Rod } from './primitives';

export default function PowerCurrentSensorSketch() {
  return (
    <group>
      <Rod from={[-0.42, 0, 0]} to={[0.42, 0, 0]} radius={0.03} partId="line" />
      <SketchMesh partId="core" rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.12, 0.026, 10, 24]} />
      </SketchMesh>
      <SketchMesh partId="coil" position={[0.05, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.12, 0.022, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="box" position={[0, -0.17, 0]}>
        <boxGeometry args={[0.26, 0.14, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="set" position={[0.07, -0.17, 0.11]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.04, 14]} />
      </SketchMesh>
      <Rod from={[0.1, -0.2, 0]} to={[0.3, -0.3, 0]} radius={0.012} partId="out" />
    </group>
  );
}
