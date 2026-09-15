import { SketchMesh, Rod } from './primitives';

export default function HomePopcornMakerSketch() {
  return (
    <group>
      <SketchMesh partId="base" position={[0, -0.26, 0]}>
        <cylinderGeometry args={[0.24, 0.26, 0.1, 22]} />
      </SketchMesh>
      <SketchMesh partId="heater" position={[0, -0.16, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.1, 18]} />
      </SketchMesh>
      <SketchMesh partId="bowl" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.24, 0.2, 0.28, 22]} />
      </SketchMesh>
      <SketchMesh partId="lid" position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.05, 22]} />
      </SketchMesh>
      <SketchMesh partId="motor" position={[0.26, -0.08, 0]}>
        <boxGeometry args={[0.1, 0.14, 0.1]} />
      </SketchMesh>
      <Rod from={[-0.26, -0.24, 0]} to={[-0.4, -0.32, 0]} radius={0.014} partId="cord" />
    </group>
  );
}
