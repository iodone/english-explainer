import { SketchMesh } from './primitives';

export default function SpacePayloadFairingSketch() {
  return (
    <group>
      <SketchMesh partId="shell" position={[0, 0.25, 0]}>
        <coneGeometry args={[0.28, 0.7, 20, 1, true]} />
      </SketchMesh>
      <SketchMesh partId="heat-layer" position={[0, 0.25, 0]}>
        <coneGeometry args={[0.3, 0.72, 20, 1, true]} />
      </SketchMesh>
      <SketchMesh partId="split-line" position={[0, 0.25, 0]}>
        <boxGeometry args={[0.02, 0.7, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="clamp" position={[0.3, -0.05, 0.1]}>
        <boxGeometry args={[0.12, 0.08, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="spring" position={[-0.3, 0.05, 0.08]}>
        <cylinderGeometry args={[0.04, 0.04, 0.24, 14]} />
      </SketchMesh>
      <SketchMesh partId="bolt" position={[0.2, -0.2, 0.12]}>
        <cylinderGeometry args={[0.03, 0.03, 0.14, 12]} />
      </SketchMesh>
    </group>
  );
}
