import { SketchMesh, Rod } from './primitives';

export default function HomeDehumidifierSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.3, 0.42, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="holes" position={[0, 0.14, -0.13]}>
        <boxGeometry args={[0.22, 0.1, 0.012]} />
      </SketchMesh>
      <SketchMesh partId="fan" position={[0, 0.16, -0.07]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.03, 16]} />
      </SketchMesh>
      <Rod from={[-0.1, 0.04, 0]} to={[0.1, 0.04, 0]} radius={0.012} partId="coil" />
      <Rod from={[-0.1, 0.08, 0]} to={[0.1, 0.08, 0]} radius={0.012} partId="coil" />
      <Rod from={[-0.1, 0.12, 0]} to={[0.1, 0.12, 0]} radius={0.012} partId="coil" />
      <SketchMesh partId="tank" position={[0, -0.16, 0.01]}>
        <boxGeometry args={[0.24, 0.16, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="switch" position={[0.09, -0.02, -0.13]}>
        <boxGeometry args={[0.05, 0.05, 0.02]} />
      </SketchMesh>
    </group>
  );
}
