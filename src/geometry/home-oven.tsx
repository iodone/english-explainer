import { SketchMesh } from './primitives';

export default function HomeOvenSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.7, 0.55, 0.5]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.05, 0.28]}>
        <boxGeometry args={[0.6, 0.4, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.3, 0]}>
        <boxGeometry args={[0.7, 0.04, 0.5]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <boxGeometry args={[0.6, 0.4, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, -0.2, 0]}>
        <boxGeometry args={[0.5, 0.02, 0.35]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, 0.1, 0.3]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
      </SketchMesh>
    </group>
  );
}