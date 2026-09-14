import { SketchMesh } from './primitives';

export default function SpaceDockingRingSketch() {
  return (
    <group>
      <SketchMesh partId="ring">
        <torusGeometry args={[0.3, 0.045, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="seal" position={[0, 0, -0.05]}>
        <torusGeometry args={[0.3, 0.025, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="hole" rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.03, 24]} />
      </SketchMesh>
      <SketchMesh partId="lock" position={[0, -0.3, 0]}>
        <boxGeometry args={[0.1, 0.09, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="lock" position={[0.21, 0.21, 0]}>
        <boxGeometry args={[0.1, 0.09, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="guide" position={[0.3, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.05, 0.12, 10]} />
      </SketchMesh>
      <SketchMesh partId="guide" position={[-0.3, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.05, 0.12, 10]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[-0.2, 0.2, 0.05]}>
        <boxGeometry args={[0.05, 0.05, 0.04]} />
      </SketchMesh>
    </group>
  );
}
