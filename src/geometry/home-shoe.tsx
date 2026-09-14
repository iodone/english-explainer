import { SketchMesh } from './primitives';

export default function HomeShoeSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0.05, 0.02]}>
        <boxGeometry args={[0.2, 0.12, 0.35]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.06, 0.02]}>
        <boxGeometry args={[0.22, 0.04, 0.38]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.12, 0.05]}>
        <boxGeometry args={[0.12, 0.02, 0.15]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, -0.01, 0.02]}>
        <boxGeometry args={[0.16, 0.02, 0.3]} />
      </SketchMesh>
      <SketchMesh partId="front" position={[0, 0.02, 0.2]}>
        <boxGeometry args={[0.18, 0.1, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0, 0.1, 0.0]}>
        <boxGeometry args={[0.14, 0.08, 0.12]} />
      </SketchMesh>
    </group>
  );
}