import { Rod, SketchMesh } from './primitives';

export default function PowerGroundTesterSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.44, 0.3, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="meter" position={[0, 0.3, 0.05]}>
        <boxGeometry args={[0.34, 0.26, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="probe" position={[0, 0.52, 0.2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.24, 12]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0, 0.34, 0.18]}>
        <sphereGeometry args={[0.045, 16, 12]} />
      </SketchMesh>
      <Rod partId="wire" from={[0.22, -0.05, 0]} to={[0.5, -0.2, 0.05]} radius={0.018} />
      <SketchMesh partId="clip" position={[0.56, -0.22, 0.05]}>
        <boxGeometry args={[0.1, 0.06, 0.08]} />
      </SketchMesh>
    </group>
  );
}
