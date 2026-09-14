import { SketchMesh, Rod } from './primitives';

export default function SpaceStarTrackerSketch() {
  return (
    <group>
      <SketchMesh partId="lens" position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.02, 20]} />
      </SketchMesh>
      <SketchMesh partId="chip" position={[0, 0, -0.02]}>
        <boxGeometry args={[0.14, 0.14, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="hood" position={[0, 0, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.16, 16, 1, true]} />
      </SketchMesh>
      <SketchMesh partId="shutter" position={[0, 0.13, 0.2]}>
        <boxGeometry args={[0.2, 0.06, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="plate" position={[0, -0.17, -0.04]}>
        <boxGeometry args={[0.3, 0.03, 0.22]} />
      </SketchMesh>
      <Rod from={[0.06, 0.06, -0.04]} to={[0.12, -0.14, -0.12]} radius={0.012} partId="wire" />
    </group>
  );
}
