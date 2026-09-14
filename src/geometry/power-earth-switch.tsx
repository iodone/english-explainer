import { SketchMesh, Rod } from './primitives';

export default function PowerEarthSwitchSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.32, 0.3, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="post" position={[-0.1, 0.19, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 12]} />
      </SketchMesh>
      <SketchMesh partId="post" position={[0.1, 0.19, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 12]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0.02, 0.26, 0]} rotation={[0, 0, -0.25]}>
        <boxGeometry args={[0.36, 0.03, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="stop" position={[-0.18, 0.22, 0]}>
        <boxGeometry args={[0.06, 0.06, 0.08]} />
      </SketchMesh>
      <Rod from={[0.18, 0.24, 0]} to={[0.36, 0.1, 0]} radius={0.018} partId="handle" />
      <Rod from={[0, -0.15, 0]} to={[0, -0.5, 0]} radius={0.025} partId="bar" />
      <Rod from={[-0.16, -0.15, 0]} to={[-0.16, -0.5, 0]} radius={0.02} partId="bar" />
    </group>
  );
}
