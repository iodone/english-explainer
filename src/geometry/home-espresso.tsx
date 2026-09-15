import { SketchMesh, Rod } from './primitives';

export default function HomeEspressoSketch() {
  return (
    <group>
      <SketchMesh partId="head" position={[0, 0.14, 0]}>
        <boxGeometry args={[0.3, 0.14, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="holder" position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.1, 0.08, 0.12, 18]} />
      </SketchMesh>
      <SketchMesh partId="wand" position={[0.24, 0.02, 0]} rotation={[0, 0, Math.PI / 8]}>
        <cylinderGeometry args={[0.02, 0.02, 0.26, 12]} />
      </SketchMesh>
      <SketchMesh partId="gauge" position={[-0.2, 0.22, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.03, 18]} />
      </SketchMesh>
      <SketchMesh partId="tray" position={[0, -0.26, 0]}>
        <boxGeometry args={[0.34, 0.04, 0.26]} />
      </SketchMesh>
      <Rod from={[-0.26, -0.22, 0]} to={[-0.4, -0.32, 0]} radius={0.014} partId="cord" />
    </group>
  );
}
