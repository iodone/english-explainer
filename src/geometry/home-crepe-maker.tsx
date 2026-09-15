import { SketchMesh, Rod } from './primitives';

export default function HomeCrepeMakerSketch() {
  return (
    <group>
      <SketchMesh partId="plate" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.06, 26]} />
      </SketchMesh>
      <SketchMesh partId="edge" position={[0, 0.05, 0]}>
        <torusGeometry args={[0.26, 0.012, 8, 26]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[-0.34, 0.02, 0]}>
        <boxGeometry args={[0.18, 0.05, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.22, 0.08, 0]}>
        <sphereGeometry args={[0.03, 14, 12]} />
      </SketchMesh>
      <SketchMesh partId="spreader" position={[0.16, -0.1, 0]}>
        <boxGeometry args={[0.14, 0.02, 0.08]} />
      </SketchMesh>
      <Rod from={[-0.4, -0.02, 0]} to={[-0.52, -0.14, 0]} radius={0.014} partId="cord" />
    </group>
  );
}
