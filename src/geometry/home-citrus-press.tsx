import { SketchMesh } from './primitives';

export default function HomeCitrusPressSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, -0.06, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.08, 24]} />
      </SketchMesh>
      <SketchMesh partId="tray" position={[0, -0.01, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.04, 24]} />
      </SketchMesh>
      <SketchMesh partId="cone" position={[0, 0.16, 0]}>
        <coneGeometry args={[0.14, 0.26, 20]} />
      </SketchMesh>
      <SketchMesh partId="hold" position={[0.32, 0.06, 0]}>
        <boxGeometry args={[0.16, 0.06, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0, -0.04, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.06, 12]} />
      </SketchMesh>
      <SketchMesh partId="cup" position={[0, -0.26, 0]}>
        <cylinderGeometry args={[0.16, 0.13, 0.2, 20]} />
      </SketchMesh>
    </group>
  );
}
