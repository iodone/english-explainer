import { SketchMesh } from './primitives';

export default function HomeBlenderSketch() {
  return (
    <group>
      <SketchMesh partId="jar" position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.19, 0.16, 0.36, 22]} />
      </SketchMesh>
      <SketchMesh partId="lid" position={[0, 0.36, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 22]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.26, 0.01, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="motor" position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.18, 18]} />
      </SketchMesh>
      <SketchMesh partId="base" position={[0, -0.34, 0]}>
        <cylinderGeometry args={[0.17, 0.19, 0.1, 22]} />
      </SketchMesh>
      <SketchMesh partId="dial" position={[0.2, -0.34, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 0.03, 16]} />
      </SketchMesh>
    </group>
  );
}
