import { SketchMesh } from './primitives';

export default function PowerSignalFilterSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.54, 0.24, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="in" position={[-0.34, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.14, 14]} />
      </SketchMesh>
      <SketchMesh partId="coil" position={[-0.12, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.06, 0.016, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="cap" position={[0.08, 0.1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.08, 16]} />
      </SketchMesh>
      <SketchMesh partId="out" position={[0.34, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.14, 14]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.18, 0.15, 0]}>
        <sphereGeometry args={[0.03, 14, 12]} />
      </SketchMesh>
    </group>
  );
}
