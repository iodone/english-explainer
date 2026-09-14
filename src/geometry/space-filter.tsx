import { SketchMesh } from './primitives';

export default function SpaceFilterSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.3, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.06, 0.06, 0.05, 12]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.06, 0.06, 0.05, 12]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.25, 0.25, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="seal" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.32, 0.02, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0, -0.12]}>
        <boxGeometry args={[0.28, 0.28, 0.01]} />
      </SketchMesh>
    </group>
  );
}
