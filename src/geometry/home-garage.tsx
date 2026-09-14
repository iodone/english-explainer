import { SketchMesh } from './primitives';

const sketch = () => {
  return (
    <>
      {/* Body (Structure) */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.4, 0.3, 0.3]} />
      </SketchMesh>

      {/* Top (Roof) */}
      <SketchMesh partId="top" position={[0, 0.2, 0]}>
        <boxGeometry args={[0.45, 0.05, 0.35]} />
      </SketchMesh>

      {/* End (Door) */}
      <SketchMesh partId="end" position={[0, -0.075, 0.175]}>
        <boxGeometry args={[0.38, 0.25, 0.02]} />
      </SketchMesh>

      {/* Inside (Floor) */}
      <SketchMesh partId="inside" position={[0, -0.175, 0]}>
        <boxGeometry args={[0.38, 0.02, 0.28]} />
      </SketchMesh>

      {/* Power (Opener) */}
      <SketchMesh partId="power" position={[0, 0.15, 0]}>
        <boxGeometry args={[0.1, 0.05, 0.05]} />
      </SketchMesh>

      {/* Plug (Lock) */}
      <SketchMesh partId="plug" position={[0.24, 0, 0.175]}>
        <cylinderGeometry args={[0.02, 0.02, 0.05, 8]} />
      </SketchMesh>
    </>
  );
};

export default sketch;