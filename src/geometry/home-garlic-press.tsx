import { SketchMesh } from './primitives';

export default function HomeGarlicPressSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.36, 0.1, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="cup" position={[0.02, 0.12, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.12, 16]} />
      </SketchMesh>
      <SketchMesh partId="holes" position={[0.02, 0.12, 0.075]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
      </SketchMesh>
      <SketchMesh partId="plate" position={[0.02, 0.17, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.04, 16]} />
      </SketchMesh>
      <SketchMesh partId="pivot" position={[-0.17, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.14, 10]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0.06, 0.26, 0.06]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.34, 0.035, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0.06, 0.26, -0.06]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.34, 0.035, 0.03]} />
      </SketchMesh>
    </group>
  );
}
