import { SketchMesh, Rod } from './primitives';

export default function HomeEggSlicerSketch() {
  return (
    <group>
      <SketchMesh partId="tray" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.36, 0.03, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="cup" position={[0, -0.06, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.06, 20]} />
      </SketchMesh>
      <SketchMesh partId="frame" position={[-0.16, 0.06, 0.12]}>
        <boxGeometry args={[0.04, 0.34, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="frame" position={[0.16, 0.06, 0.12]}>
        <boxGeometry args={[0.04, 0.34, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="frame" position={[-0.16, 0.06, -0.12]}>
        <boxGeometry args={[0.04, 0.34, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="frame" position={[0.16, 0.06, -0.12]}>
        <boxGeometry args={[0.04, 0.34, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, 0.24, 0]}>
        <boxGeometry args={[0.4, 0.04, 0.28]} />
      </SketchMesh>
      <Rod from={[-0.1, 0, 0.12]} to={[-0.1, 0, -0.12]} radius={0.005} partId="wire" />
      <Rod from={[-0.05, 0, 0.12]} to={[-0.05, 0, -0.12]} radius={0.005} partId="wire" />
      <Rod from={[0, 0, 0.12]} to={[0, 0, -0.12]} radius={0.005} partId="wire" />
      <Rod from={[0.05, 0, 0.12]} to={[0.05, 0, -0.12]} radius={0.005} partId="wire" />
      <Rod from={[0.1, 0, 0.12]} to={[0.1, 0, -0.12]} radius={0.005} partId="wire" />
      <SketchMesh partId="spring" position={[-0.16, -0.03, -0.12]}>
        <cylinderGeometry args={[0.012, 0.012, 0.12, 8]} />
      </SketchMesh>
      <SketchMesh partId="spring" position={[0.16, -0.03, -0.12]}>
        <cylinderGeometry args={[0.012, 0.012, 0.12, 8]} />
      </SketchMesh>
    </group>
  );
}
