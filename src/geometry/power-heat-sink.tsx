import { SketchMesh } from './primitives';

export default function PowerHeatSinkSketch() {
  return (
    <group>
      <SketchMesh partId="plate" position={[0, -0.16, 0]}>
        <boxGeometry args={[0.44, 0.03, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="part" position={[0, -0.23, 0]}>
        <boxGeometry args={[0.2, 0.08, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="fin" position={[-0.16, -0.03, 0]}>
        <boxGeometry args={[0.02, 0.22, 0.32]} />
      </SketchMesh>
      <SketchMesh partId="fin" position={[-0.08, -0.03, 0]}>
        <boxGeometry args={[0.02, 0.22, 0.32]} />
      </SketchMesh>
      <SketchMesh partId="fin" position={[0, -0.03, 0]}>
        <boxGeometry args={[0.02, 0.22, 0.32]} />
      </SketchMesh>
      <SketchMesh partId="fin" position={[0.08, -0.03, 0]}>
        <boxGeometry args={[0.02, 0.22, 0.32]} />
      </SketchMesh>
      <SketchMesh partId="fin" position={[0.16, -0.03, 0]}>
        <boxGeometry args={[0.02, 0.22, 0.32]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.09, 0]}>
        <boxGeometry args={[0.42, 0.02, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="clip" position={[0.24, -0.2, 0]}>
        <boxGeometry args={[0.1, 0.05, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0.18, -0.16, 0.14]}>
        <cylinderGeometry args={[0.02, 0.02, 0.05, 8]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[-0.18, -0.16, 0.14]}>
        <cylinderGeometry args={[0.02, 0.02, 0.05, 8]} />
      </SketchMesh>
    </group>
  );
}
