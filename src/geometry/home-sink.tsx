import { SketchMesh } from './primitives';

const sketch = () => {
  return (
    <>
      {/* Body (Basin) */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.4, 0.2, 0.3]} />
      </SketchMesh>

      {/* Top (Faucet pipe) */}
      <SketchMesh partId="top" position={[0, 0.175, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.15, 8]} />
      </SketchMesh>

      {/* Pipe (Drain pipe) */}
      <SketchMesh partId="pipe" position={[0, -0.25, 0]}>
        <boxGeometry args={[0.08, 0.3, 0.08]} />
      </SketchMesh>

      {/* Handle */}
      <SketchMesh partId="handle" position={[-0.24, 0.1, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.12, 8]} />
      </SketchMesh>

      {/* Drain */}
      <SketchMesh partId="drain" position={[0, -0.125, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.05, 16]} />
      </SketchMesh>

      {/* Hole (Overflow) */}
      <SketchMesh partId="hole" position={[0.24, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.08, 8]} />
      </SketchMesh>
    </>
  );
};

export default sketch;