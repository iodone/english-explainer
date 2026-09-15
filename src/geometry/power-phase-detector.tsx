import { SketchMesh } from './primitives';

export default function PowerPhaseDetectorSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.55, 20]} />
      </SketchMesh>
      <SketchMesh partId="probe" position={[0, 0.35, 0.1]}>
        <cylinderGeometry args={[0.025, 0.025, 0.2, 12]} />
      </SketchMesh>
      <SketchMesh partId="led-light" position={[0, 0.2, 0.3]}>
        <sphereGeometry args={[0.04, 16, 12]} />
      </SketchMesh>
      <SketchMesh partId="buzzer" position={[0.2, -0.15, -0.1]}>
        <cylinderGeometry args={[0.06, 0.06, 0.05, 16]} />
      </SketchMesh>
      <SketchMesh partId="switch" position={[0.35, 0.1, 0.15]}>
        <boxGeometry args={[0.08, 0.05, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="clip" position={[-0.3, -0.2, 0.05]}>
        <boxGeometry args={[0.16, 0.06, 0.1]} />
      </SketchMesh>
    </group>
  );
}
