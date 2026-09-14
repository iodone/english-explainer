import { SketchMesh } from './primitives';

export default function HomePizzaCutterSketch() {
  return (
    <group>
      <SketchMesh partId="wheel" rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.012, 24]} />
      </SketchMesh>
      <SketchMesh partId="edge" rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.16, 0.01, 6, 24]} />
      </SketchMesh>
      <SketchMesh partId="hub" rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.06, 12]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0.06, 0.02, 0.05]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.34, 0.035, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0.06, 0.02, -0.05]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.34, 0.035, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="grip" position={[0.4, 0.1, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.24, 12]} />
      </SketchMesh>
      <SketchMesh partId="guard" position={[0, 0.14, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.2, 0.012, 6, 20, Math.PI]} />
      </SketchMesh>
    </group>
  );
}
