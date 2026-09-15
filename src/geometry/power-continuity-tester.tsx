import { Rod, SketchMesh } from './primitives';

export default function PowerContinuityTesterSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.42, 0.28, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="probe-a" position={[0, 0.34, 0.06]}>
        <cylinderGeometry args={[0.022, 0.022, 0.28, 12]} />
      </SketchMesh>
      <SketchMesh partId="probe-b" position={[0, -0.34, 0.06]}>
        <cylinderGeometry args={[0.022, 0.022, 0.28, 12]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0, 0.16, 0.18]}>
        <sphereGeometry args={[0.05, 16, 12]} />
      </SketchMesh>
      <SketchMesh partId="battery" position={[0.22, -0.12, -0.1]}>
        <boxGeometry args={[0.16, 0.1, 0.12]} />
      </SketchMesh>
      <Rod partId="wire" from={[-0.2, -0.1, 0]} to={[-0.64, -0.24, 0.06]} radius={0.02} />
    </group>
  );
}
