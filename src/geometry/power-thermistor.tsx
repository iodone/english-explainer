import { SketchMesh } from './primitives';

export default function PowerThermistorSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <sphereGeometry args={[0.1, 12, 8]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.015, 0.015, 0.15, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.12, 0]}>
        <sphereGeometry args={[0.08, 12, 8]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <sphereGeometry args={[0.06, 8, 6]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[-0.12, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.012, 0.012, 0.1, 8]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0.12, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.012, 0.012, 0.1, 8]} />
      </SketchMesh>
    </group>
  );
}
