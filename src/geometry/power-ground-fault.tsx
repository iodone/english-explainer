import { SketchMesh, Rod } from './primitives';

export default function PowerGroundFaultSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.3, 0.3, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="panel" position={[0, 0, 0.1]}>
        <boxGeometry args={[0.26, 0.26, 0.015]} />
      </SketchMesh>
      <SketchMesh partId="ring" position={[0, 0.02, -0.02]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.08, 0.022, 8, 22]} />
      </SketchMesh>
      <SketchMesh partId="wind" position={[0.04, 0.02, -0.02]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.08, 0.018, 8, 22]} />
      </SketchMesh>
      <SketchMesh partId="contact" position={[-0.08, 0.09, 0]}>
        <boxGeometry args={[0.06, 0.025, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="contact" position={[-0.08, 0.04, 0]}>
        <boxGeometry args={[0.06, 0.025, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="button" position={[0.07, -0.06, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.04, 14]} />
      </SketchMesh>
      <Rod from={[-0.2, -0.1, 0]} to={[-0.34, -0.18, 0]} radius={0.014} partId="case" />
      <Rod from={[0.2, -0.1, 0]} to={[0.34, -0.18, 0]} radius={0.014} partId="case" />
    </group>
  );
}
