import { SketchMesh } from './primitives';

export default function PowerWaveAnalyzerSketch() {
  return (
    <group>
      <SketchMesh partId="case" position={[0, -0.05, -0.1]}>
        <boxGeometry args={[1.05, 0.62, 0.42]} />
      </SketchMesh>
      <SketchMesh partId="screen" position={[0, 0.11, 0.13]}>
        <boxGeometry args={[0.72, 0.36, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="chip" position={[-0.24, -0.2, 0.14]}>
        <boxGeometry args={[0.2, 0.1, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="input" position={[-0.58, -0.2, 0.05]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 0.18, 14]} />
      </SketchMesh>
      <SketchMesh partId="knob" position={[0.4, -0.2, 0.14]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 18]} />
      </SketchMesh>
      <SketchMesh partId="alarm" position={[0.44, 0.24, 0.13]}>
        <sphereGeometry args={[0.05, 16, 12]} />
      </SketchMesh>
    </group>
  );
}
