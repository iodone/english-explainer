import { SketchMesh, Rod } from './primitives';

export default function SpaceAntennaArraySketch() {
  return (
    <group>
      <SketchMesh partId="dish" rotation={[-Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[0.34, 20, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="feed" position={[0, 0, 0.26]}>
        <boxGeometry args={[0.07, 0.07, 0.12]} />
      </SketchMesh>
      <Rod from={[0, 0.32, -0.02]} to={[0, 0, 0.24]} radius={0.014} partId="arm" />
      <SketchMesh partId="turn" position={[0, -0.38, 0]}>
        <cylinderGeometry args={[0.05, 0.06, 0.22, 14]} />
      </SketchMesh>
      <SketchMesh partId="panel" position={[0, -0.28, -0.32]}>
        <boxGeometry args={[0.24, 0.2, 0.1]} />
      </SketchMesh>
      <Rod from={[0.02, 0.02, 0.2]} to={[0.06, -0.22, -0.26]} radius={0.012} partId="line" />
    </group>
  );
}
