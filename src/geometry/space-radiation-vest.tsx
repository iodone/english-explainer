import { SketchMesh } from './primitives';

export default function SpaceRadiationVestSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.25, 0.3, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.05, 12]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.15, -0.06]}>
        <boxGeometry args={[0.28, 0.04, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.23, 0.28, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="front" position={[0, 0, -0.07]}>
        <boxGeometry args={[0.22, 0.25, 0.015]} />
      </SketchMesh>
      <SketchMesh partId="close" position={[0, 0, -0.07]}>
        <boxGeometry args={[0.02, 0.2, 0.02]} />
      </SketchMesh>
    </group>
  );
}
