import { SketchMesh } from './primitives';

export default function HomeIronSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.25, 0.12, 0.35]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.22]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.08, 0.15, 4]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.12, 0.05]}>
        <boxGeometry args={[0.06, 0.08, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0.04, 0.05]}>
        <boxGeometry args={[0.18, 0.06, 0.15]} />
      </SketchMesh>
      <SketchMesh partId="sole" position={[0, -0.07, 0]}>
        <boxGeometry args={[0.22, 0.015, 0.3]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0.2, 0.1, 0.15]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.015, 0.015, 0.2, 8]} />
      </SketchMesh>
    </group>
  );
}
