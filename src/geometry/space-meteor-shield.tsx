import { SketchMesh } from './primitives';

export default function SpaceMeteorShieldSketch() {
  return (
    <group>
      <SketchMesh partId="outer" position={[0, 0, 0.02]}>
        <boxGeometry args={[0.56, 0.56, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="middle" position={[0, 0, -0.04]}>
        <boxGeometry args={[0.56, 0.56, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="inner" position={[0, 0, -0.1]}>
        <boxGeometry args={[0.56, 0.56, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="frame" position={[0, 0, -0.05]}>
        <boxGeometry args={[0.6, 0.6, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="sensor" position={[0, 0.24, 0.03]}>
        <boxGeometry args={[0.08, 0.06, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="mount" position={[0, 0, -0.16]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.05, 20]} />
      </SketchMesh>
    </group>
  );
}
