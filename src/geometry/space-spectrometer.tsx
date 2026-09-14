import { SketchMesh, Rod } from './primitives';

export default function SpaceSpectrometerSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.52, 0.26, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="slit" position={[-0.24, 0, 0]}>
        <boxGeometry args={[0.02, 0.2, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="mirror" position={[-0.06, 0, 0]} rotation={[0, 0, Math.PI / 5]}>
        <boxGeometry args={[0.14, 0.2, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="lens" position={[0.12, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 0.03, 18]} />
      </SketchMesh>
      <SketchMesh partId="chip" position={[0.24, 0, 0]}>
        <boxGeometry args={[0.06, 0.12, 0.12]} />
      </SketchMesh>
      <Rod from={[0.26, -0.1, 0]} to={[0.36, -0.22, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
