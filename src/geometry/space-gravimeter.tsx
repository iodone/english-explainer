import { SketchMesh, Rod } from './primitives';

export default function SpaceGravimeterSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.26, 0.36, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="spring" position={[0, 0.11, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.12, 10]} />
      </SketchMesh>
      <SketchMesh partId="weight" position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.1, 16]} />
      </SketchMesh>
      <SketchMesh partId="coil" position={[0, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.075, 0.014, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="leg" position={[0, -0.22, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.08, 18]} />
      </SketchMesh>
      <Rod from={[0.12, -0.14, 0]} to={[0.26, -0.22, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
