import { SketchMesh } from './primitives';

export default function SpaceFoodPacketSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.26, 0.42, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.23, 0]}>
        <boxGeometry args={[0.28, 0.05, 0.07]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.17, 0.035]}>
        <boxGeometry args={[0.24, 0.025, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, -0.03, 0]}>
        <boxGeometry args={[0.2, 0.28, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0.14, 0.1, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.12, 10]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, -0.18, 0.04]}>
        <boxGeometry args={[0.18, 0.08, 0.02]} />
      </SketchMesh>
    </group>
  );
}
