import { SketchMesh } from './primitives';

const sketch = () => {
  return (
    <>
      {/* Body (Chamber) */}
      <SketchMesh partId="body">
        <cylinderGeometry args={[0.2, 0.2, 0.3, 16]} />
      </SketchMesh>

      {/* End (Outer door) */}
      <SketchMesh partId="end" position={[0, -0.225, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.3]} />
      </SketchMesh>

      {/* Top (Inner door) */}
      <SketchMesh partId="top" position={[0, 0.225, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.3]} />
      </SketchMesh>

      {/* Inside (Control panel) */}
      <SketchMesh partId="inside" position={[0.24, 0, 0]}>
        <boxGeometry args={[0.05, 0.15, 0.15]} />
      </SketchMesh>

      {/* Power (Air pump) */}
      <SketchMesh partId="power" position={[-0.24, 0, 0]}>
        <boxGeometry args={[0.08, 0.12, 0.12]} />
      </SketchMesh>

      {/* Plug (Seal) */}
      <SketchMesh partId="plug" position={[0, 0, 0.24]}>
        <torusGeometry args={[0.2, 0.02, 8, 32]} />
      </SketchMesh>
    </>
  );
};

export default sketch;