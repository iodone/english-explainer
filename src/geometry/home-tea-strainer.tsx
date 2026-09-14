import { SketchMesh, Rod } from './primitives';

export default function HomeTeaStrainerSketch() {
  return (
    <group>
      <SketchMesh partId="bowl">
        <cylinderGeometry args={[0.16, 0.11, 0.14, 20]} />
      </SketchMesh>
      <SketchMesh partId="mesh" position={[0, -0.07, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.012, 20]} />
      </SketchMesh>
      <SketchMesh partId="rim" position={[0, 0.07, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.16, 0.012, 8, 24]} />
      </SketchMesh>
      <Rod from={[0.14, 0.09, 0]} to={[0.4, 0.18, 0]} radius={0.014} partId="handle" />
      <SketchMesh partId="rest" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.22, 0.012, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="lid" position={[0, 0.11, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.016, 20]} />
      </SketchMesh>
    </group>
  );
}
