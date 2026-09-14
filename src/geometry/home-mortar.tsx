import { SketchMesh } from './primitives';

export default function HomeMortarSketch() {
  return (
    <group>
      <SketchMesh partId="bowl">
        <cylinderGeometry args={[0.3, 0.2, 0.24, 20]} />
      </SketchMesh>
      <SketchMesh partId="side" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.28, 0.02, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="lip" position={[0, 0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.025, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="foot" position={[0, -0.14, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.04, 16]} />
      </SketchMesh>
      <SketchMesh partId="head" position={[0, 0.04, 0]}>
        <sphereGeometry args={[0.08, 12, 12]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.34, 12]} />
      </SketchMesh>
    </group>
  );
}
