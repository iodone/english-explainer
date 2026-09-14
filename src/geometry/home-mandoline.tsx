import { SketchMesh } from './primitives';

export default function HomeMandolineSketch() {
  return (
    <group>
      <SketchMesh partId="board">
        <boxGeometry args={[0.6, 0.05, 0.36]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.5, 0.02, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="ramp" position={[0, 0.03, 0.16]}>
        <boxGeometry args={[0.56, 0.02, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="guard" position={[-0.2, 0.1, -0.12]}>
        <boxGeometry args={[0.16, 0.08, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="knob" position={[0.32, 0.06, -0.1]}>
        <cylinderGeometry args={[0.05, 0.05, 0.06, 12]} />
      </SketchMesh>
      <SketchMesh partId="leg" position={[-0.24, -0.06, 0.12]}>
        <boxGeometry args={[0.05, 0.1, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="leg" position={[0.24, -0.06, 0.12]}>
        <boxGeometry args={[0.05, 0.1, 0.05]} />
      </SketchMesh>
    </group>
  );
}
