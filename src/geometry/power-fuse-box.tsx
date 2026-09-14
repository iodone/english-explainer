import { SketchMesh } from './primitives';

export default function PowerFuseBoxSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.28, 0.36, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0.15, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.32, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.19, 0]}>
        <boxGeometry args={[0.3, 0.03, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0.02]}>
        <boxGeometry args={[0.16, 0.1, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, -0.12, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.07, 12]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, 0.08, 0.02]}>
        <boxGeometry args={[0.18, 0.08, 0.05]} />
      </SketchMesh>
    </group>
  );
}
