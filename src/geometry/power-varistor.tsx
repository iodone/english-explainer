import { SketchMesh } from './primitives';

export default function PowerVaristorSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <cylinderGeometry args={[0.1, 0.1, 0.06, 16]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[-0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.012, 0.012, 0.12, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.01, 0.01, 0.08, 8]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.01, 0.01, 0.08, 8]} />
      </SketchMesh>
    </group>
  );
}
