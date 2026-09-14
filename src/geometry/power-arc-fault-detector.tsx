import { SketchMesh } from './primitives';

export default function PowerArcFaultDetectorSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, -0.02, 0]}>
        <boxGeometry args={[0.46, 0.3, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="board" position={[0, -0.04, 0.04]}>
        <boxGeometry args={[0.34, 0.02, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="coil" position={[-0.14, -0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.06, 0.015, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="clamp" position={[-0.14, 0.11, 0]}>
        <boxGeometry args={[0.09, 0.06, 0.09]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.14, 0.11, 0]}>
        <sphereGeometry args={[0.035, 14, 12]} />
      </SketchMesh>
      <SketchMesh partId="button" position={[0.14, -0.08, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.04, 16]} />
      </SketchMesh>
    </group>
  );
}
