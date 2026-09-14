import { SketchMesh } from './primitives';

export default function SpaceDustFilterSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.44, 0.42, 0.3]} />
      </SketchMesh>
      <SketchMesh partId="case" position={[0, -0.23, 0]}>
        <boxGeometry args={[0.48, 0.04, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="mesh" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.36, 0.01, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="ring" position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.11, 0.02, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="bag" position={[0, -0.13, 0]}>
        <cylinderGeometry args={[0.14, 0.1, 0.18, 16]} />
      </SketchMesh>
      <SketchMesh partId="door" position={[0, 0.06, 0.16]}>
        <boxGeometry args={[0.3, 0.3, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, 0.06, 0.2]}>
        <boxGeometry args={[0.07, 0.14, 0.04]} />
      </SketchMesh>
    </group>
  );
}
