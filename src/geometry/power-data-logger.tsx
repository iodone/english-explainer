import { SketchMesh, Rod } from './primitives';

export default function PowerDataLoggerSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.42, 0.28, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="chip" position={[0, -0.04, 0]}>
        <boxGeometry args={[0.2, 0.05, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="display" position={[0.13, 0.1, 0]}>
        <boxGeometry args={[0.16, 0.1, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="battery" position={[0.14, -0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.14, 14]} />
      </SketchMesh>
      <SketchMesh partId="button" position={[-0.13, -0.1, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.03, 14]} />
      </SketchMesh>
      <Rod from={[-0.22, 0, 0]} to={[-0.36, -0.1, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
