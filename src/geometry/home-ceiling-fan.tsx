import { SketchMesh } from './primitives';

export default function HomeCeilingFanSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <cylinderGeometry args={[0.12, 0.1, 0.14, 16]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0.25, -0.04, 0]}>
        <boxGeometry args={[0.38, 0.02, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[-0.25, -0.04, 0]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[0.38, 0.02, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.04, 0.25]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.38, 0.02, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.04, -0.25]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.38, 0.02, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.08, 12]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, -0.14, 0.12]}>
        <cylinderGeometry args={[0.006, 0.006, 0.2, 8]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0.08, 0.12, 0]}>
        <boxGeometry args={[0.05, 0.08, 0.05]} />
      </SketchMesh>
    </group>
  );
}
