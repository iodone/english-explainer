import { SketchMesh } from './primitives';

export default function HomeSpatulaSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.08, 0.015, 0.15]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.2, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.02, 0.08]}>
        <boxGeometry args={[0.07, 0.005, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="side" position={[0.04, 0.02, 0]}>
        <boxGeometry args={[0.01, 0.015, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="hang" position={[0, 0, -0.3]}>
        <torusGeometry args={[0.015, 0.004, 8, 12]} />
      </SketchMesh>
      <SketchMesh partId="grip" position={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.018, 0.015, 0.08, 8]} />
      </SketchMesh>
    </group>
  );
}
