import { SketchMesh, Rod, DraftLine } from './primitives';

export default function PowerGroundingSketch() {
  return (
    <group>
      <SketchMesh partId="bus" position={[0, 0.34, 0]}>
        <boxGeometry args={[0.3, 0.06, 0.08]} />
      </SketchMesh>
      <Rod from={[0, 0.3, 0]} to={[0, -0.05, 0]} radius={0.02} partId="wire" />
      <SketchMesh partId="sign" position={[0.24, 0.3, 0]}>
        <boxGeometry args={[0.16, 0.1, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="clamp" position={[0, 0.02, 0]}>
        <boxGeometry args={[0.08, 0.08, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="hole" position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.02, 16]} />
      </SketchMesh>
      <SketchMesh partId="rod" position={[0, -0.24, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.4, 12]} />
      </SketchMesh>
      <DraftLine points={[[-0.5, -0.05, 0], [0.5, -0.05, 0]]} />
    </group>
  );
}
