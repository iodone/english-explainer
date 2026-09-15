import { SketchMesh } from './primitives';

export default function HomePressureCookerSketch() {
  return (
    <group>
      <SketchMesh partId="pot" position={[0, -0.06, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.46, 26]} />
      </SketchMesh>
      <SketchMesh partId="seal" position={[0, 0.14, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.025, 10, 26]} />
      </SketchMesh>
      <SketchMesh partId="lid" position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.08, 26]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, 0.32, 0]}>
        <boxGeometry args={[0.5, 0.06, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="weight" position={[0, 0.3, 0.16]}>
        <cylinderGeometry args={[0.06, 0.06, 0.1, 16]} />
      </SketchMesh>
      <SketchMesh partId="base" position={[0, -0.34, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 26]} />
      </SketchMesh>
    </group>
  );
}
