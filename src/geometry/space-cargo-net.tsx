import { SketchMesh } from './primitives';

export default function SpaceCargoNetSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <planeGeometry args={[0.4, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.08, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.4, 8]} />
      </SketchMesh>
      <SketchMesh partId="line" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.35, 6]} />
      </SketchMesh>
      <SketchMesh partId="corner" position={[0.2, 0.2, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="base" position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.4, 8]} />
      </SketchMesh>
    </group>
  );
}
