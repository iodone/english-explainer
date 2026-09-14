import { SketchMesh } from './primitives';

export default function HomeIroningBoardSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.03, 0.8]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.45]}>
        <coneGeometry args={[0.12, 0.15, 4]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.03, 0]}>
        <boxGeometry args={[0.28, 0.015, 0.75]} />
      </SketchMesh>
      <SketchMesh partId="leg" position={[0, -0.2, 0]}>
        <boxGeometry args={[0.03, 0.3, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="rest" position={[0, 0.06, 0.35]}>
        <boxGeometry args={[0.15, 0.02, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="bend" position={[0, -0.1, 0.15]}>
        <cylinderGeometry args={[0.02, 0.02, 0.06, 8]} />
      </SketchMesh>
    </group>
  );
}
