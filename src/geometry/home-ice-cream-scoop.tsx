import { SketchMesh, Rod } from './primitives';

export default function HomeIceCreamScoopSketch() {
  return (
    <group>
      <SketchMesh partId="bowl" position={[-0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <sphereGeometry args={[0.16, 18, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="band" rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.06, 0.018, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="grip" position={[0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 0.34, 16]} />
      </SketchMesh>
      <SketchMesh partId="lever" position={[0.2, 0.08, 0]} rotation={[0, 0, 0.18]}>
        <boxGeometry args={[0.26, 0.025, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="sweep" position={[-0.26, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.075, 0.075, 0.01, 16]} />
      </SketchMesh>
      <Rod from={[-0.24, 0, 0]} to={[0.05, 0, 0]} radius={0.008} partId="sweep" />
      <SketchMesh partId="cap" position={[0.42, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
      </SketchMesh>
    </group>
  );
}
