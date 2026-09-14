import { SketchMesh, Rod } from './primitives';

export default function PowerCircuitRecloserSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.44, 0.32, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="switch" position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.14, 16]} />
      </SketchMesh>
      <SketchMesh partId="coil" position={[-0.16, -0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.06, 0.014, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="board" position={[0.08, -0.04, 0.06]}>
        <boxGeometry args={[0.2, 0.02, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0.32, -0.1, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.16, 0.04, 0.04]} />
      </SketchMesh>
      <Rod from={[-0.24, 0, 0]} to={[-0.4, 0, 0]} radius={0.014} partId="wire" />
    </group>
  );
}
