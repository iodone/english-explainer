import { SketchMesh, Rod } from './primitives';

export default function SpaceThrusterSketch() {
  return (
    <group>
      <SketchMesh partId="mount" position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.04, 16]} />
      </SketchMesh>
      <SketchMesh partId="chamber" position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.16, 16]} />
      </SketchMesh>
      <SketchMesh partId="spark" position={[0.1, 0.08, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
      </SketchMesh>
      <Rod from={[-0.16, 0.2, 0]} to={[-0.05, 0.1, 0]} radius={0.018} partId="feed" />
      <Rod from={[0.16, 0.2, 0]} to={[0.05, 0.1, 0]} radius={0.018} partId="feed" />
      <SketchMesh partId="valve" position={[0.16, 0.2, 0]}>
        <boxGeometry args={[0.08, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="bell" position={[0, -0.16, 0]}>
        <cylinderGeometry args={[0.06, 0.17, 0.24, 16]} />
      </SketchMesh>
    </group>
  );
}
