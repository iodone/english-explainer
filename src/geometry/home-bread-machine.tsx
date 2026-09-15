import { SketchMesh, Rod } from './primitives';

export default function HomeBreadMachineSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.44, 0.44, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="tin" position={[0, 0.02, 0]}>
        <boxGeometry args={[0.24, 0.26, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.14, 0.02, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="lid" position={[0, 0.24, 0]}>
        <boxGeometry args={[0.46, 0.06, 0.42]} />
      </SketchMesh>
      <SketchMesh partId="heater" position={[0, -0.18, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 12]} />
      </SketchMesh>
      <Rod from={[-0.22, -0.1, 0]} to={[-0.36, -0.18, 0]} radius={0.014} partId="wire" />
    </group>
  );
}
