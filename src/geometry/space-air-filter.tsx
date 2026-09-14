import { SketchMesh } from './primitives';

export default function SpaceAirFilterSketch() {
  return (
    <group>
      <SketchMesh partId="frame">
        <boxGeometry args={[0.46, 0.4, 0.28]} />
      </SketchMesh>
      <SketchMesh partId="frame" position={[0, -0.23, 0]}>
        <boxGeometry args={[0.5, 0.06, 0.32]} />
      </SketchMesh>
      <SketchMesh partId="inlet" position={[-0.24, 0, 0]}>
        <boxGeometry args={[0.03, 0.18, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="outlet" position={[0.24, 0, 0]}>
        <boxGeometry args={[0.03, 0.18, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="net" position={[-0.08, 0, 0]}>
        <boxGeometry args={[0.01, 0.3, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="pad" position={[0, 0, 0]}>
        <boxGeometry args={[0.06, 0.3, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="fan" position={[0.14, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.11, 0.11, 0.05, 16]} />
      </SketchMesh>
    </group>
  );
}
