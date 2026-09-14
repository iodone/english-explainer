import { SketchMesh } from './primitives';

const sketch = () => {
  return (
    <>
      {/* Body (Housing) */}
      <SketchMesh partId="body">
        <boxGeometry args={[0.25, 0.2, 0.2]} />
      </SketchMesh>

      {/* End (Output) */}
      <SketchMesh partId="end" position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 8]} />
      </SketchMesh>

      {/* Top (Input) */}
      <SketchMesh partId="top" position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 8]} />
      </SketchMesh>

      {/* Inside (Circuit) */}
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.2, 0.15, 0.15]} />
      </SketchMesh>

      {/* Plug (Connector) */}
      <SketchMesh partId="plug" position={[0.165, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.08, 8]} />
      </SketchMesh>

      {/* Power (Sensor) */}
      <SketchMesh partId="power" position={[-0.165, 0, 0]}>
        <boxGeometry args={[0.05, 0.08, 0.08]} />
      </SketchMesh>
    </>
  );
};

export default sketch;