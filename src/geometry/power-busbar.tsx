import { SketchMesh } from './primitives';

export default function PowerBusbarSketch() {
  return (
    <group>
      <SketchMesh partId="bar">
        <boxGeometry args={[0.6, 0.06, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0.05, 0]}>
        <boxGeometry args={[0.62, 0.02, 0.13]} />
      </SketchMesh>
      <SketchMesh partId="plate" position={[0, 0, 0.08]}>
        <boxGeometry args={[0.12, 0.08, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0.14, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.09, 8]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[-0.14, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.09, 8]} />
      </SketchMesh>
      <SketchMesh partId="stand" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.1, 0.12, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="meter" position={[0.2, 0.1, 0.06]}>
        <boxGeometry args={[0.09, 0.07, 0.03]} />
      </SketchMesh>
    </group>
  );
}
