import { SketchMesh } from './primitives';

export default function SpaceDockingPortSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <torusGeometry args={[0.25, 0.06, 12, 24]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, 0.08]}>
        <boxGeometry args={[0.08, 0.08, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0, 0.06]}>
        <torusGeometry args={[0.22, 0.02, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, 0.18, 0]}>
        <boxGeometry args={[0.06, 0.06, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, -0.18, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.08, 8]} />
      </SketchMesh>
    </group>
  );
}