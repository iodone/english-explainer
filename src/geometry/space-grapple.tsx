import { SketchMesh } from './primitives';

export default function SpaceGrappleSketch() {
  return (
    <group>
      <SketchMesh partId="base-plate" position={[0, -0.05, -0.08]}>
        <boxGeometry args={[0.62, 0.1, 0.5]} />
      </SketchMesh>
      <SketchMesh partId="grapple-pin" position={[0, 0.12, 0.15]}>
        <boxGeometry args={[0.36, 0.06, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="guide-rail" position={[-0.35, 0, 0.1]}>
        <boxGeometry args={[0.08, 0.14, 0.42]} />
      </SketchMesh>
      <SketchMesh partId="latch" position={[0.3, 0.15, 0.12]}>
        <boxGeometry args={[0.12, 0.12, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="align-pin" position={[0, 0.08, 0.25]}>
        <cylinderGeometry args={[0.05, 0.05, 0.12, 16]} />
      </SketchMesh>
      <SketchMesh partId="drain-hole" position={[-0.2, -0.2, -0.05]}>
        <cylinderGeometry args={[0.04, 0.04, 0.08, 12]} />
      </SketchMesh>
    </group>
  );
}
