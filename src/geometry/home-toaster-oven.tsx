import { SketchMesh } from './primitives';

export default function HomeToasterOvenSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.9, 0.6, 0.6]} />
      </SketchMesh>
      <SketchMesh partId="door" position={[0, 0, 0.32]}>
        <boxGeometry args={[0.82, 0.52, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0, 0.18, 0.38]}>
        <boxGeometry args={[0.5, 0.06, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="tray" position={[0, -0.16, 0.12]}>
        <boxGeometry args={[0.72, 0.03, 0.44]} />
      </SketchMesh>
      <SketchMesh partId="rod" position={[0, 0.1, -0.24]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 0.7, 14]} />
      </SketchMesh>
      <SketchMesh partId="dial" position={[0.4, 0.2, 0.28]}>
        <cylinderGeometry args={[0.07, 0.07, 0.05, 18]} />
      </SketchMesh>
    </group>
  );
}
