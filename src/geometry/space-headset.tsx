import { SketchMesh } from './primitives';

export default function SpaceHeadsetSketch() {
  return (
    <group>
      <SketchMesh partId="body" rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.1, 0.015, 8, 16, Math.PI]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[-0.12, -0.05, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.03, 12]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.1, 0]}>
        <boxGeometry args={[0.08, 0.02, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="mic" position={[0.1, -0.1, -0.05]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.008, 0.008, 0.1, 6]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, -0.08, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.15, 6]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, -0.08, 0.2]}>
        <boxGeometry args={[0.02, 0.02, 0.03]} />
      </SketchMesh>
    </group>
  );
}
