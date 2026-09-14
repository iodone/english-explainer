import { SketchMesh, Rod } from './primitives';

export default function SpaceRadiatorSketch() {
  return (
    <group>
      <SketchMesh partId="panel">
        <boxGeometry args={[0.7, 0.5, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="face" position={[0, 0, -0.03]}>
        <boxGeometry args={[0.68, 0.48, 0.01]} />
      </SketchMesh>
      <Rod from={[-0.32, 0.15, 0.04]} to={[0.32, 0.15, 0.04]} radius={0.012} partId="pipe" />
      <Rod from={[-0.32, 0, 0.04]} to={[0.32, 0, 0.04]} radius={0.012} partId="pipe" />
      <Rod from={[-0.32, -0.15, 0.04]} to={[0.32, -0.15, 0.04]} radius={0.012} partId="pipe" />
      <SketchMesh partId="inlet" position={[0.3, 0.2, 0.03]}>
        <boxGeometry args={[0.14, 0.1, 0.08]} />
      </SketchMesh>
      <Rod from={[-0.35, -0.2, 0]} to={[-0.5, -0.35, -0.1]} radius={0.02} partId="arm" />
      <SketchMesh partId="joint" position={[0, 0.28, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.08, 12]} />
      </SketchMesh>
    </group>
  );
}
