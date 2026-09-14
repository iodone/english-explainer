import { SketchMesh, Rod } from './primitives';

export default function PowerSlipRingSketch() {
  return (
    <group>
      <SketchMesh partId="shaft" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 0.5, 16]} />
      </SketchMesh>
      <SketchMesh partId="ring" position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.075, 0.018, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="ring" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.075, 0.018, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="brush" position={[0.11, 0.1, 0]}>
        <boxGeometry args={[0.08, 0.05, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="brush" position={[0.11, 0, 0]}>
        <boxGeometry args={[0.08, 0.05, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="case" position={[0, -0.16, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.14, 16]} />
      </SketchMesh>
      <SketchMesh partId="case" position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.04, 16]} />
      </SketchMesh>
      <Rod from={[0.14, 0.1, 0]} to={[0.32, 0.22, 0]} radius={0.012} partId="wire" />
      <SketchMesh partId="mount" position={[0, -0.27, 0]}>
        <boxGeometry args={[0.32, 0.03, 0.3]} />
      </SketchMesh>
    </group>
  );
}
