import { SketchMesh } from './primitives';

export default function PowerCircuitBreakerSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.3, 0.34, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0.06, 0.02, 0.14]}>
        <boxGeometry args={[0.08, 0.14, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="contacts" position={[-0.08, -0.04, 0]}>
        <boxGeometry args={[0.06, 0.05, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="contacts" position={[-0.08, 0.06, 0]}>
        <boxGeometry args={[0.06, 0.05, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="coil" position={[0.04, -0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.05, 0.013, 8, 18]} />
      </SketchMesh>
      <SketchMesh partId="trip" position={[0.02, 0.1, 0]}>
        <boxGeometry args={[0.1, 0.05, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="vent" position={[-0.12, -0.14, 0]}>
        <boxGeometry args={[0.12, 0.03, 0.14]} />
      </SketchMesh>
    </group>
  );
}
