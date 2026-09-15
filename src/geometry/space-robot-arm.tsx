import { Rod, SketchMesh } from './primitives';

export default function SpaceRobotArmSketch() {
  return (
    <group>
      <SketchMesh partId="shoulder" position={[-0.42, -0.02, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.22, 20]} />
      </SketchMesh>
      <SketchMesh partId="motor" position={[-0.42, 0.2, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.16, 16]} />
      </SketchMesh>
      <Rod partId="boom" from={[-0.42, 0, 0]} to={[0.36, 0, 0]} radius={0.075} />
      <Rod partId="boom" from={[0.44, 0, 0]} to={[0.74, 0, 0]} radius={0.05} />
      <SketchMesh partId="elbow" position={[0.4, 0, 0]}>
        <sphereGeometry args={[0.1, 18, 12]} />
      </SketchMesh>
      <SketchMesh partId="hand" position={[0.82, 0, 0]}>
        <boxGeometry args={[0.16, 0.18, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="camera" position={[0.62, 0.14, 0.1]}>
        <boxGeometry args={[0.09, 0.07, 0.09]} />
      </SketchMesh>
    </group>
  );
}
