import { SketchMesh } from './primitives';

export default function HomeWhiskSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.035, 0.045, 0.28, 12]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.2, 0]}>
        <torusGeometry args={[0.1, 0.012, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.36, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.045, 0.01, 8, 18]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, -0.18, 0]}>
        <cylinderGeometry args={[0.065, 0.065, 0.18, 12]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.06, 12]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, -0.3, 0]}>
        <torusGeometry args={[0.08, 0.01, 8, 24]} />
      </SketchMesh>
    </group>
  );
}
