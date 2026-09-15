import { SketchMesh } from './primitives';

export default function PowerCurrentLimiterSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.5, 0.24, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="sense" position={[-0.14, 0.1, 0]}>
        <boxGeometry args={[0.1, 0.06, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="chip" position={[0.04, 0.1, 0]}>
        <boxGeometry args={[0.12, 0.05, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="in" position={[-0.32, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.14, 14]} />
      </SketchMesh>
      <SketchMesh partId="out" position={[0.32, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.14, 14]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.16, 0.15, 0]}>
        <sphereGeometry args={[0.03, 14, 12]} />
      </SketchMesh>
    </group>
  );
}
