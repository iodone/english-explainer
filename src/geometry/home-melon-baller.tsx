import { SketchMesh } from './primitives';

export default function HomeMelonBallerSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0.16, 0]}>
        <boxGeometry args={[0.1, 0.24, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.06, 14]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.016, 0.016, 0.16, 10]} />
      </SketchMesh>
      <SketchMesh partId="scoop" position={[0, -0.12, 0]}>
        <sphereGeometry args={[0.07, 16, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="edge" position={[0, -0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.07, 0.008, 8, 22]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0, -0.19, 0]}>
        <cylinderGeometry args={[0.014, 0.014, 0.06, 10]} />
      </SketchMesh>
    </group>
  );
}
