import { SketchMesh } from './primitives';

export default function HomePastaMakerSketch() {
  return (
    <group>
      <SketchMesh partId="hopper" position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.18, 0.12, 0.16, 20]} />
      </SketchMesh>
      <SketchMesh partId="screw" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.28, 18]} />
      </SketchMesh>
      <SketchMesh partId="die" position={[0, -0.16, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.04, 22]} />
      </SketchMesh>
      <SketchMesh partId="motor" position={[0, 0.04, 0.2]}>
        <boxGeometry args={[0.12, 0.14, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[-0.28, 0.04, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.16, 12]} />
      </SketchMesh>
      <SketchMesh partId="tray" position={[0, -0.34, 0]}>
        <boxGeometry args={[0.34, 0.04, 0.26]} />
      </SketchMesh>
    </group>
  );
}
