import { SketchMesh } from './primitives';

export default function HomePeelerSketch() {
  return (
    <group>
      <SketchMesh partId="body" rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.025, 0.35, 8]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.2]}>
        <sphereGeometry args={[0.03, 8, 6]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0, 0.04, 0.15]}>
        <boxGeometry args={[0.06, 0.005, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="slot" position={[0, 0.04, 0.08]}>
        <sphereGeometry args={[0.015, 8, 6]} />
      </SketchMesh>
      <SketchMesh partId="side" position={[0.04, 0.04, 0.12]}>
        <boxGeometry args={[0.01, 0.03, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="hang" position={[0, 0, -0.18]}>
        <torusGeometry args={[0.015, 0.005, 8, 12]} />
      </SketchMesh>
    </group>
  );
}
