import { SketchMesh, Rod } from './primitives';

export default function SpaceGyroscopeSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.42, 0.36, 0.32]} />
      </SketchMesh>
      <SketchMesh partId="wheel" rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.05, 22]} />
      </SketchMesh>
      <SketchMesh partId="motor" position={[-0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.14, 16]} />
      </SketchMesh>
      <SketchMesh partId="frame" rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.17, 0.015, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="sensor" position={[0.18, 0, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
      </SketchMesh>
      <Rod from={[0.18, -0.12, 0]} to={[0.3, -0.24, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
