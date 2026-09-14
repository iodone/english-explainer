import { SketchMesh } from './primitives';

export default function PowerContactorSketch() {
  return (
    <group>
      <SketchMesh partId="box">
        <boxGeometry args={[0.5, 0.4, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="coil" position={[0, -0.12, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.12, 16]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0, 0.02, 0]}>
        <boxGeometry args={[0.3, 0.03, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="pad" position={[0.1, 0.14, 0]}>
        <boxGeometry args={[0.08, 0.03, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="pad" position={[-0.1, 0.14, 0]}>
        <boxGeometry args={[0.08, 0.03, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="spring" position={[0.16, 0.02, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.14, 8]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[-0.24, 0.1, 0]}>
        <boxGeometry args={[0.05, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[-0.24, -0.1, 0]}>
        <boxGeometry args={[0.05, 0.08, 0.08]} />
      </SketchMesh>
    </group>
  );
}
