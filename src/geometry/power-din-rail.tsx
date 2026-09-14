import { SketchMesh } from './primitives';

export default function PowerDinRailSketch() {
  return (
    <group>
      <SketchMesh partId="body" rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.7, 8]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.35]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.06, 0]}>
        <boxGeometry args={[0.05, 0.03, 0.6]} />
      </SketchMesh>
      <SketchMesh partId="mount" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.06, 0.02, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="slot" position={[0, 0.03, 0]}>
        <boxGeometry args={[0.04, 0.015, 0.55]} />
      </SketchMesh>
      <SketchMesh partId="side" position={[0.03, 0.04, 0]}>
        <boxGeometry args={[0.01, 0.025, 0.6]} />
      </SketchMesh>
    </group>
  );
}
