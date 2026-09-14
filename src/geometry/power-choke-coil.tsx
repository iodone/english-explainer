import { SketchMesh } from './primitives';

export default function PowerChokeCoilSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <torusGeometry args={[0.1, 0.03, 12, 24]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[-0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.012, 0.012, 0.1, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.08, 12]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.06, 10]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.01, 0.01, 0.08, 8]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.01, 0.01, 0.08, 8]} />
      </SketchMesh>
    </group>
  );
}
