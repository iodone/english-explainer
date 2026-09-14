import { SketchMesh } from './primitives';

export default function HomeRollingPinSketch() {
  return (
    <group>
      <SketchMesh partId="body" rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 12]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.1, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.1, 8]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.45, 10]} />
      </SketchMesh>
      <SketchMesh partId="face" position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.45, 12]} />
      </SketchMesh>
      <SketchMesh partId="ring" position={[0, 0, -0.22]}>
        <torusGeometry args={[0.03, 0.008, 8, 12]} />
      </SketchMesh>
    </group>
  );
}
