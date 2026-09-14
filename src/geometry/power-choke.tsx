import { SketchMesh } from './primitives';

export default function PowerChokeSketch() {
  return (
    <group>
      <SketchMesh partId="body" rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.11, 0.11, 0.3, 16]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[-0.24, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.16, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.24, 0.06, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.32, 12]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, 0.12, 8]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, 0.12, 8]} />
      </SketchMesh>
    </group>
  );
}
