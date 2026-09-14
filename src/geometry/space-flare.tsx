import { SketchMesh } from './primitives';

export default function SpaceFlareSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <cylinderGeometry args={[0.06, 0.06, 0.4, 12]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 0.06, 12]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.07, 0.06, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <cylinderGeometry args={[0.045, 0.045, 0.35, 12]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, -0.15, 0]}>
        <boxGeometry args={[0.04, 0.06, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
      </SketchMesh>
    </group>
  );
}