import { SketchMesh } from './primitives';

export default function SpaceLabModuleSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <cylinderGeometry args={[0.2, 0.2, 0.5, 16]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.1, 0.2, 0.16, 16]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.31, 0]}>
        <sphereGeometry args={[0.15, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, -0.03, 0]}>
        <boxGeometry args={[0.18, 0.2, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.12, 12]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.28, 0.03, 0.14]} />
      </SketchMesh>
    </group>
  );
}
