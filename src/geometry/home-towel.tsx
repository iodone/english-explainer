import { SketchMesh } from './primitives';

export default function HomeTowelSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.5, 0.02, 0.8]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.42]}>
        <boxGeometry args={[0.52, 0.025, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0, 0.42]}>
        <torusGeometry args={[0.03, 0.01, 8, 12]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <boxGeometry args={[0.48, 0.018, 0.78]} />
      </SketchMesh>
      <SketchMesh partId="stripe" position={[0, 0.012, 0]}>
        <boxGeometry args={[0.1, 0.005, 0.8]} />
      </SketchMesh>
      <SketchMesh partId="wrap" position={[0, 0, -0.15]}>
        <boxGeometry args={[0.5, 0.04, 0.02]} />
      </SketchMesh>
    </group>
  );
}