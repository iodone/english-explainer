import { SketchMesh, Rod } from './primitives';

export default function SpaceAntennaDishSketch() {
  return (
    <group>
      <SketchMesh partId="dish" rotation={[-Math.PI / 3, 0, 0]}>
        <sphereGeometry args={[0.34, 22, 12, 0, Math.PI * 2, 0, Math.PI / 3]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0, 0.16, 0.06]}>
        <boxGeometry args={[0.04, 0.28, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="feed" position={[0, 0.3, 0.06]}>
        <boxGeometry args={[0.08, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="motor" position={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.12, 16]} />
      </SketchMesh>
      <SketchMesh partId="base" position={[0, -0.38, 0]}>
        <cylinderGeometry args={[0.16, 0.18, 0.08, 20]} />
      </SketchMesh>
      <Rod from={[0.14, -0.36, 0]} to={[0.28, -0.44, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
