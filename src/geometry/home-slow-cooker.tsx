import { SketchMesh } from './primitives';

export default function HomeSlowCookerSketch() {
  return (
    <group>
      <SketchMesh partId="pot" position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.42, 26]} />
      </SketchMesh>
      <SketchMesh partId="lid" position={[0, 0.24, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.06, 26]} />
      </SketchMesh>
      <SketchMesh partId="base" position={[0, -0.32, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 26]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0.5, 0, 0]}>
        <boxGeometry args={[0.18, 0.08, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="dial" position={[0.3, -0.32, 0.34]}>
        <cylinderGeometry args={[0.07, 0.07, 0.04, 18]} />
      </SketchMesh>
      <SketchMesh partId="cord" position={[-0.5, -0.3, -0.1]}>
        <boxGeometry args={[0.2, 0.05, 0.07]} />
      </SketchMesh>
    </group>
  );
}
