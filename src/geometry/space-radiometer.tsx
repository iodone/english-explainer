import { SketchMesh, Rod } from './primitives';

export default function SpaceRadiometerSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, -0.14, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.2, 20]} />
      </SketchMesh>
      <SketchMesh partId="glass" position={[0, 0.02, 0]}>
        <sphereGeometry args={[0.2, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="pin" position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.18, 10]} />
      </SketchMesh>
      <SketchMesh partId="vane" position={[0, 0.03, 0]}>
        <boxGeometry args={[0.22, 0.006, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="vane" position={[0, 0.03, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.22, 0.006, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="dial" position={[0.22, -0.16, 0]}>
        <boxGeometry args={[0.14, 0.1, 0.1]} />
      </SketchMesh>
      <Rod from={[0.22, -0.22, 0]} to={[0.32, -0.3, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
