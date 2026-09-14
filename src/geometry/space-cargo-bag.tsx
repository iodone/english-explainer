import { SketchMesh } from './primitives';

export default function SpaceCargoBagSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.42, 0.36, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[-0.24, 0, 0]}>
        <boxGeometry args={[0.05, 0.32, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.26, 0]}>
        <torusGeometry args={[0.08, 0.02, 8, 16, Math.PI]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0.03]}>
        <boxGeometry args={[0.34, 0.28, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, 0.19, 0]}>
        <boxGeometry args={[0.38, 0.03, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="strap" position={[0.23, 0, 0]}>
        <boxGeometry args={[0.04, 0.38, 0.26]} />
      </SketchMesh>
    </group>
  );
}
