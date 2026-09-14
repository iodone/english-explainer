import { SketchMesh } from './primitives';

export default function SpaceVentValveSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.1, 12]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.06, 12, 8]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.02, 16]} />
      </SketchMesh>
      <SketchMesh partId="seal" position={[0, 0, -0.1]}>
        <torusGeometry args={[0.1, 0.015, 8, 16]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0.15, 0, 0]}>
        <boxGeometry args={[0.04, 0.08, 0.04]} />
      </SketchMesh>
    </group>
  );
}
