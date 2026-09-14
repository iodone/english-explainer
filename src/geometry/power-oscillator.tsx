import { SketchMesh } from './primitives';

export default function PowerOscillatorSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.2, 0.12, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.08, 0.04, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="top">
        <boxGeometry args={[0.08, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <cylinderGeometry args={[0.03, 0.03, 0.08, 8]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, 0, 0.08]}>
        <boxGeometry args={[0.06, 0.06, 0.04]} />
      </SketchMesh>
    </group>
  );
}