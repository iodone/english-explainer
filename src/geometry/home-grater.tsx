import { SketchMesh } from './primitives';

export default function HomeGraterSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.22, 0.4, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="face" position={[0, -0.02, -0.11]}>
        <boxGeometry args={[0.24, 0.36, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0.06, 0.08, -0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[-0.06, 0.08, -0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0.06, -0.04, -0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[-0.06, -0.04, -0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, 0.22, 0]}>
        <boxGeometry args={[0.26, 0.05, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="rim" position={[0, -0.19, 0]}>
        <boxGeometry args={[0.24, 0.03, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="box" position={[0, -0.26, 0.02]}>
        <boxGeometry args={[0.24, 0.1, 0.2]} />
      </SketchMesh>
    </group>
  );
}
