import { Rod, SketchMesh } from './primitives';

export default function SpaceRoboticHandSketch() {
  return (
    <group>
      <SketchMesh partId="wrist" position={[0, -0.18, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.16, 18]} />
      </SketchMesh>
      <SketchMesh partId="lock" position={[0, -0.28, 0.1]}>
        <cylinderGeometry args={[0.04, 0.04, 0.14, 12]} />
      </SketchMesh>
      <SketchMesh partId="fingers" position={[0, 0.16, 0]}>
        <boxGeometry args={[0.34, 0.22, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="camera" position={[0.16, 0.28, 0.12]}>
        <sphereGeometry args={[0.055, 16, 12]} />
      </SketchMesh>
      <SketchMesh partId="motor" position={[-0.26, -0.1, 0.02]}>
        <cylinderGeometry args={[0.07, 0.07, 0.2, 16]} />
      </SketchMesh>
      <Rod partId="cable" from={[-0.36, -0.06, -0.08]} to={[-0.62, 0.06, -0.16]} radius={0.02} />
    </group>
  );
}
