import { SketchMesh } from './primitives';

const sketch = () => {
  return (
    <>
      {/* Body */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.2, 0.2]} />
      </SketchMesh>

      {/* End (Engine) */}
      <SketchMesh partId="end" position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
      </SketchMesh>

      {/* Top (Docking port) */}
      <SketchMesh partId="top" position={[0, 0.175, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.15, 16]} />
      </SketchMesh>

      {/* Inside (Cargo) */}
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.15, 16]} />
      </SketchMesh>

      {/* Power (Thruster) */}
      <SketchMesh partId="power" position={[-0.19, 0, 0]}>
        <boxGeometry args={[0.08, 0.05, 0.08]} />
      </SketchMesh>

      {/* Plug (Connection) */}
      <SketchMesh partId="plug" position={[0.19, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 8]} />
      </SketchMesh>
    </>
  );
};

export default sketch;