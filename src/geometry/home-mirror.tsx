import { SketchMesh } from './primitives';

export default function HomeMirrorSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.4, 0.55, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, 0.025]}>
        <boxGeometry args={[0.35, 0.5, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.3, 0]}>
        <boxGeometry args={[0.42, 0.04, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0.015]}>
        <boxGeometry args={[0.36, 0.51, 0.005]} />
      </SketchMesh>
      <SketchMesh partId="back" position={[0, 0, -0.025]}>
        <boxGeometry args={[0.38, 0.53, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="hook" position={[0, 0.32, -0.01]}>
        <torusGeometry args={[0.03, 0.008, 8, 12]} />
      </SketchMesh>
    </group>
  );
}