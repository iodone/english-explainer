import { SketchMesh, Rod } from './primitives';

export default function SpaceLaserCommunicatorSketch() {
  return (
    <group>
      <SketchMesh partId="box">
        <boxGeometry args={[0.3, 0.24, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="pipe" position={[0, 0, 0.22]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.12, 0.28, 12]} />
      </SketchMesh>
      <SketchMesh partId="lens" position={[0, 0, 0.37]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.03, 16]} />
      </SketchMesh>
      <SketchMesh partId="glass" position={[0, 0, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.085, 0.085, 0.012, 16]} />
      </SketchMesh>
      <Rod from={[0, 0, 0.42]} to={[0, 0, 0.95]} radius={0.018} partId="beam" />
      <Rod from={[0, -0.1, -0.11]} to={[0, -0.26, -0.11]} radius={0.022} partId="wire" />
    </group>
  );
}
