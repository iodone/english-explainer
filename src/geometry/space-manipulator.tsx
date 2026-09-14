import { SketchMesh } from './primitives';

export default function SpaceManipulatorSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, -0.05, 0]}>
        <boxGeometry args={[0.08, 0.45, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.3, 0]}>
        <boxGeometry args={[0.12, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.06, 12]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0.08, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, -0.2, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, 0.12, 0]}>
        <boxGeometry args={[0.06, 0.04, 0.06]} />
      </SketchMesh>
    </group>
  );
}