import { SketchMesh } from './primitives';

export default function HomeColanderSketch() {
  return (
    <group>
      <SketchMesh partId="bowl">
        <cylinderGeometry args={[0.3, 0.18, 0.26, 20]} />
      </SketchMesh>
      <SketchMesh partId="rim" position={[0, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.02, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="holes" position={[0, -0.11, 0]}>
        <cylinderGeometry args={[0.022, 0.022, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="holes" position={[0.09, -0.1, 0.05]}>
        <cylinderGeometry args={[0.022, 0.022, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="holes" position={[-0.09, -0.1, 0.05]}>
        <cylinderGeometry args={[0.022, 0.022, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="holes" position={[0.09, -0.1, -0.05]}>
        <cylinderGeometry args={[0.022, 0.022, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="holes" position={[-0.09, -0.1, -0.05]}>
        <cylinderGeometry args={[0.022, 0.022, 0.03, 8]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0.34, 0.08, 0]}>
        <boxGeometry args={[0.1, 0.03, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[-0.34, 0.08, 0]}>
        <boxGeometry args={[0.1, 0.03, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="foot" position={[0, -0.14, 0]}>
        <boxGeometry args={[0.18, 0.02, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="hook" position={[0.34, 0.16, 0]}>
        <torusGeometry args={[0.045, 0.012, 8, 12]} />
      </SketchMesh>
    </group>
  );
}
