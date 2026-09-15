import { SketchMesh, Rod } from './primitives';

export default function SpaceCargoCraneSketch() {
  return (
    <group>
      <SketchMesh partId="arm" position={[0.1, 0.06, 0]} rotation={[0, 0, -Math.PI / 14]}>
        <boxGeometry args={[0.5, 0.07, 0.07]} />
      </SketchMesh>
      <SketchMesh partId="joint" position={[0.24, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 0.1, 18]} />
      </SketchMesh>
      <SketchMesh partId="motor" position={[0.24, -0.14, 0]}>
        <boxGeometry args={[0.1, 0.12, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="pod" position={[0.42, -0.36, 0]}>
        <boxGeometry args={[0.2, 0.16, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.02, 0.16, 0]}>
        <sphereGeometry args={[0.035, 14, 12]} />
      </SketchMesh>
      <Rod from={[0.42, -0.02, 0]} to={[0.42, -0.26, 0]} radius={0.01} partId="cable" />
    </group>
  );
}
