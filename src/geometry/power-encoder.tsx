import { SketchMesh, Rod } from './primitives';

export default function PowerEncoderSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.3, 0.3, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="disc" rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.03, 24]} />
      </SketchMesh>
      <SketchMesh partId="lamp" position={[0, 0.12, 0]}>
        <sphereGeometry args={[0.02, 12, 10]} />
      </SketchMesh>
      <SketchMesh partId="eye" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.06, 0.05, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="shaft" position={[0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, 0.2, 12]} />
      </SketchMesh>
      <Rod from={[-0.18, -0.08, 0]} to={[-0.3, -0.18, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
