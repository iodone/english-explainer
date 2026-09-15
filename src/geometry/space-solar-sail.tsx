import { SketchMesh, Rod } from './primitives';

export default function SpaceSolarSailSketch() {
  return (
    <group>
      <SketchMesh partId="sail" position={[0, 0.02, 0]}>
        <boxGeometry args={[0.9, 0.01, 0.9]} />
      </SketchMesh>
      <SketchMesh partId="boom" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.98, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="boom" position={[0, 0.04, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.98, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="cable" position={[0, -0.14, 0]}>
        <boxGeometry args={[0.6, 0.006, 0.006]} />
      </SketchMesh>
      <SketchMesh partId="sensor" position={[0, 0.14, 0]}>
        <boxGeometry args={[0.07, 0.05, 0.07]} />
      </SketchMesh>
      <SketchMesh partId="hub" position={[0, -0.22, 0]}>
        <cylinderGeometry args={[0.07, 0.09, 0.12, 16]} />
      </SketchMesh>
      <Rod from={[0.06, -0.28, 0]} to={[0.16, -0.36, 0]} radius={0.01} partId="wire" />
    </group>
  );
}
