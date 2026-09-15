import { SketchMesh } from './primitives';

export default function PowerRelayBoxSketch() {
  return (
    <group>
      <SketchMesh partId="case" position={[0, 0, 0]}>
        <boxGeometry args={[0.7, 0.5, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="coil" position={[0, 0.1, 0.02]}>
        <cylinderGeometry args={[0.1, 0.1, 0.22, 18]} />
      </SketchMesh>
      <SketchMesh partId="contact" position={[0, -0.05, 0.16]}>
        <boxGeometry args={[0.16, 0.06, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="spring" position={[-0.26, 0, 0.05]}>
        <cylinderGeometry args={[0.045, 0.045, 0.2, 14]} />
      </SketchMesh>
      <SketchMesh partId="flag" position={[0.28, 0.2, 0.2]}>
        <boxGeometry args={[0.12, 0.08, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="terminal" position={[-0.32, -0.2, 0.06]}>
        <cylinderGeometry args={[0.05, 0.05, 0.16, 14]} />
      </SketchMesh>
    </group>
  );
}
