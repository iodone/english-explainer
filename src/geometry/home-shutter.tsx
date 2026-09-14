import { SketchMesh } from './primitives';

export default function HomeShutterSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.36, 0.4, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0.21, 0, 0]}>
        <boxGeometry args={[0.05, 0.44, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.23, 0]}>
        <boxGeometry args={[0.44, 0.06, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0.05]}>
        <cylinderGeometry args={[0.015, 0.015, 0.36, 8]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, -0.23, 0]}>
        <boxGeometry args={[0.44, 0.05, 0.07]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0.24, 0.24, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.08, 12]} />
      </SketchMesh>
    </group>
  );
}
