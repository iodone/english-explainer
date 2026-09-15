import { SketchMesh } from './primitives';

export default function HomeWaffleMakerSketch() {
  return (
    <group>
      <SketchMesh partId="bottom-plate" position={[0, -0.22, 0]}>
        <boxGeometry args={[0.72, 0.12, 0.6]} />
      </SketchMesh>
      <SketchMesh partId="top-plate" position={[0, 0.22, 0]}>
        <boxGeometry args={[0.72, 0.14, 0.6]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0.5, 0.28, 0.15]}>
        <boxGeometry args={[0.3, 0.07, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[-0.45, 0.35, 0.2]}>
        <sphereGeometry args={[0.05, 16, 12]} />
      </SketchMesh>
      <SketchMesh partId="pour-spot" position={[0, 0.3, 0.4]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 18]} />
      </SketchMesh>
      <SketchMesh partId="cord" position={[-0.5, -0.3, -0.1]}>
        <boxGeometry args={[0.22, 0.06, 0.08]} />
      </SketchMesh>
    </group>
  );
}
