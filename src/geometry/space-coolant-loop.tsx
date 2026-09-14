import { SketchMesh } from './primitives';

export default function SpaceCoolantLoopSketch() {
  return (
    <group>
      <SketchMesh partId="pipe" rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.028, 8, 28]} />
      </SketchMesh>
      <SketchMesh partId="pump" position={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.07, 0.07, 0.1, 16]} />
      </SketchMesh>
      <SketchMesh partId="plate" position={[-0.3, 0, 0]}>
        <boxGeometry args={[0.1, 0.26, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="tank" position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.09, 0.09, 0.18, 16]} />
      </SketchMesh>
      <SketchMesh partId="fin" position={[0, 0.06, 0.3]}>
        <boxGeometry args={[0.26, 0.01, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="fin" position={[0, 0.02, 0.3]}>
        <boxGeometry args={[0.26, 0.01, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="fin" position={[0, -0.02, 0.3]}>
        <boxGeometry args={[0.26, 0.01, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="fin" position={[0, -0.06, 0.3]}>
        <boxGeometry args={[0.26, 0.01, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="valve" position={[-0.21, 0, -0.21]}>
        <boxGeometry args={[0.08, 0.08, 0.08]} />
      </SketchMesh>
    </group>
  );
}
