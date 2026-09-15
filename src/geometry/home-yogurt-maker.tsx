import { SketchMesh, Rod } from './primitives';

export default function HomeYogurtMakerSketch() {
  return (
    <group>
      <SketchMesh partId="stand" position={[0, -0.22, 0]}>
        <cylinderGeometry args={[0.32, 0.34, 0.1, 24]} />
      </SketchMesh>
      <SketchMesh partId="heater" position={[0, -0.14, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.05, 22]} />
      </SketchMesh>
      <SketchMesh partId="bowl" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.22, 0.18, 0.26, 22]} />
      </SketchMesh>
      <SketchMesh partId="lid" position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.05, 22]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.22, 0.06, 0]}>
        <sphereGeometry args={[0.03, 14, 12]} />
      </SketchMesh>
      <Rod from={[-0.28, -0.2, 0]} to={[-0.42, -0.3, 0]} radius={0.014} partId="cord" />
    </group>
  );
}
