import { SketchMesh } from './primitives';

const sketch = () => {
  return (
    <>
      {/* Body (Tank) */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.25, 0.25]} />
      </SketchMesh>

      {/* Top (Bushing) */}
      <SketchMesh partId="top" position={[0, 0.15, 0]}>
        <boxGeometry args={[0.2, 0.05, 0.2]} />
      </SketchMesh>

      {/* End (Base) */}
      <SketchMesh partId="end" position={[0, -0.15, 0]}>
        <boxGeometry args={[0.25, 0.05, 0.2]} />
      </SketchMesh>

      {/* Inside (Core) */}
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <torusGeometry args={[0.1, 0.03, 16, 32]} />
      </SketchMesh>

      {/* Plug (Insulator) */}
      <SketchMesh partId="plug" position={[0, -0.185, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.12, 8]} />
      </SketchMesh>

      {/* Power (Winding) */}
      <SketchMesh partId="power" position={[-0.19, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 8]} />
      </SketchMesh>
    </>
  );
};

export default sketch;