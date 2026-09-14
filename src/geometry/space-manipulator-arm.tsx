import { SketchMesh } from './primitives';

export default function SpaceManipulatorArmSketch() {
  return (
    <group>
      <SketchMesh partId="root" position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.08, 0.62, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="joint" position={[0, 0.26, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.12, 12]} />
      </SketchMesh>
      <SketchMesh partId="hand" position={[0, 0.36, 0]}>
        <boxGeometry args={[0.14, 0.12, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="finger" position={[0.07, 0.47, 0]}>
        <boxGeometry args={[0.03, 0.14, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="finger" position={[-0.07, 0.47, 0]}>
        <boxGeometry args={[0.03, 0.14, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="eye" position={[0.11, 0.36, 0.07]}>
        <boxGeometry args={[0.05, 0.05, 0.04]} />
      </SketchMesh>
    </group>
  );
}
