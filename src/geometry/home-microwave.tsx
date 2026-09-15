import { SketchMesh } from './primitives';

export default function HomeMicrowaveSketch() {
  return (
    <group>
      <SketchMesh partId="box" position={[0, 0, 0]}>
        <boxGeometry args={[0.9, 0.6, 0.55]} />
      </SketchMesh>
      <SketchMesh partId="table" position={[0, -0.22, 0.05]}>
        <cylinderGeometry args={[0.2, 0.2, 0.03, 24]} />
      </SketchMesh>
      <SketchMesh partId="door" position={[0, 0, 0.3]}>
        <boxGeometry args={[0.86, 0.56, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="wave-maker" position={[-0.55, 0.1, -0.1]}>
        <cylinderGeometry args={[0.09, 0.09, 0.22, 16]} />
      </SketchMesh>
      <SketchMesh partId="timer" position={[0.4, 0.42, 0.22]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 18]} />
      </SketchMesh>
      <SketchMesh partId="vent" position={[0.55, 0.1, -0.1]}>
        <boxGeometry args={[0.1, 0.22, 0.14]} />
      </SketchMesh>
    </group>
  );
}
