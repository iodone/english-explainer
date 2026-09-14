import { SketchMesh, Rod } from './primitives';

export default function PowerVoltageRegulatorSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.4, 0.24, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="chip" position={[-0.06, 0.08, 0]}>
        <boxGeometry args={[0.14, 0.05, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="heat" position={[0.14, 0.16, 0]}>
        <boxGeometry args={[0.02, 0.14, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="heat" position={[0.18, 0.16, 0]}>
        <boxGeometry args={[0.02, 0.14, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="heat" position={[0.22, 0.16, 0]}>
        <boxGeometry args={[0.02, 0.14, 0.2]} />
      </SketchMesh>
      <Rod from={[-0.06, 0.12, 0]} to={[-0.06, 0.22, 0]} radius={0.008} partId="sense" />
      <Rod from={[-0.06, 0.16, 0]} to={[-0.2, 0.22, 0]} radius={0.008} partId="sense" />
      <Rod from={[-0.22, -0.02, 0]} to={[-0.36, -0.08, 0]} radius={0.018} partId="in" />
      <Rod from={[0.22, -0.02, 0]} to={[0.36, -0.08, 0]} radius={0.018} partId="out" />
    </group>
  );
}
