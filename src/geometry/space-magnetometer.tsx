import { SketchMesh, Rod } from './primitives';

export default function SpaceMagnetometerSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.26, 0.26, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="coil" position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.16, 20]} />
      </SketchMesh>
      <SketchMesh partId="core" position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, 0.22, 12]} />
      </SketchMesh>
      <SketchMesh partId="boom" position={[0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 10]} />
      </SketchMesh>
      <SketchMesh partId="box" position={[0.42, 0, 0]}>
        <boxGeometry args={[0.14, 0.14, 0.14]} />
      </SketchMesh>
      <Rod from={[0.44, -0.1, 0]} to={[0.52, -0.24, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
