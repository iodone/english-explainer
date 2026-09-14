import { SketchMesh } from './primitives';

export default function SpaceMagneticBootSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.12, 0.1, 0.25]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.15]}>
        <boxGeometry args={[0.1, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.08, 8]} />
      </SketchMesh>
      <SketchMesh partId="sole" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.11, 0.02, 0.23]} />
      </SketchMesh>
      <SketchMesh partId="switch" position={[0.06, 0.05, -0.08]}>
        <boxGeometry args={[0.02, 0.015, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, 0.06, 0.08]}>
        <boxGeometry args={[0.08, 0.04, 0.06]} />
      </SketchMesh>
    </group>
  );
}
