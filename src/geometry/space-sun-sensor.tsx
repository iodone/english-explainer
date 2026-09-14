import { SketchMesh, Rod } from './primitives';

export default function SpaceSunSensorSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.26, 0.16, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="plate" position={[0, 0.09, 0]}>
        <boxGeometry args={[0.24, 0.012, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.022, 0.022, 0.02, 12]} />
      </SketchMesh>
      <SketchMesh partId="cell" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.18, 0.015, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="chip" position={[0, -0.02, 0]}>
        <boxGeometry args={[0.12, 0.04, 0.12]} />
      </SketchMesh>
      <Rod from={[0.13, -0.04, 0]} to={[0.24, -0.08, 0]} radius={0.01} partId="wire" />
    </group>
  );
}
