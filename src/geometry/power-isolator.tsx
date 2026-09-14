import { SketchMesh } from './primitives';

export default function PowerIsolatorSketch() {
  return (
    <group>
      <SketchMesh partId="handle" position={[0, 0.3, 0]}>
        <boxGeometry args={[0.06, 0.22, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0, 0.14, 0]}>
        <boxGeometry args={[0.22, 0.03, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="jaw" position={[0.14, 0.06, 0]}>
        <boxGeometry args={[0.08, 0.08, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="jaw" position={[-0.14, 0.06, 0]}>
        <boxGeometry args={[0.08, 0.08, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0.26, 0.06, 0]}>
        <boxGeometry args={[0.08, 0.1, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[-0.26, 0.06, 0]}>
        <boxGeometry args={[0.08, 0.1, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="case" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.5, 0.2, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="lock" position={[0.2, 0.2, 0.08]}>
        <boxGeometry args={[0.06, 0.06, 0.03]} />
      </SketchMesh>
    </group>
  );
}
