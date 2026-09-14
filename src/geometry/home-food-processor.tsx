import { SketchMesh } from './primitives';

export default function HomeFoodProcessorSketch() {
  return (
    <group>
      <SketchMesh partId="bowl">
        <cylinderGeometry args={[0.2, 0.17, 0.24, 20]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.02, 8]} />
      </SketchMesh>
      <SketchMesh partId="lid" position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.21, 0.21, 0.03, 20]} />
      </SketchMesh>
      <SketchMesh partId="feed" position={[0.03, 0.28, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.12, 12]} />
      </SketchMesh>
      <SketchMesh partId="motor" position={[0, -0.24, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.18, 20]} />
      </SketchMesh>
      <SketchMesh partId="button" position={[0.13, -0.2, 0.12]}>
        <boxGeometry args={[0.06, 0.04, 0.04]} />
      </SketchMesh>
    </group>
  );
}
