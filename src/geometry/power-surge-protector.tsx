import { SketchMesh, Rod } from './primitives';

export default function PowerSurgeProtectorSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.42, 0.18, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0.1, 0]}>
        <boxGeometry args={[0.44, 0.02, 0.28]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[-0.06, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 0.04, 16]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.06, 14]} />
      </SketchMesh>
      <Rod from={[0.25, 0, 0]} to={[0.44, 0, 0]} radius={0.022} partId="wire" />
      <SketchMesh partId="light" position={[0.14, 0.12, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.02, 12]} />
      </SketchMesh>
    </group>
  );
}
