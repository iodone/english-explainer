import { SketchMesh, Rod } from './primitives';

export default function HomeSandwichMakerSketch() {
  return (
    <group>
      <SketchMesh partId="bottom">
        <boxGeometry args={[0.42, 0.08, 0.36]} />
      </SketchMesh>
      <SketchMesh partId="edge" position={[0, 0.07, 0]}>
        <boxGeometry args={[0.4, 0.06, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.2, 0]}>
        <boxGeometry args={[0.42, 0.08, 0.36]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0.32, 0.1, 0]}>
        <boxGeometry args={[0.2, 0.05, 0.07]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.16, 0.28, 0]}>
        <sphereGeometry args={[0.03, 14, 12]} />
      </SketchMesh>
      <Rod from={[-0.22, 0, 0]} to={[-0.36, -0.12, 0]} radius={0.014} partId="cord" />
    </group>
  );
}
