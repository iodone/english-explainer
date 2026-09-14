import { SketchMesh } from './primitives';

export default function HomeVegetablePeelerSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.28, 0.055, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[-0.03, 0.02, 0]}>
        <boxGeometry args={[0.2, 0.008, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[-0.17, 0.02, 0]}>
        <boxGeometry args={[0.05, 0.012, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[-0.02, 0.06, 0]}>
        <boxGeometry args={[0.24, 0.012, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="hold" position={[0.07, 0.045, 0]}>
        <boxGeometry args={[0.06, 0.02, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0.24, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 0.2, 16]} />
      </SketchMesh>
    </group>
  );
}
