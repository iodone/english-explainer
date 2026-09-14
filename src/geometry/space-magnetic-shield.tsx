import { SketchMesh, Rod } from './primitives';

export default function SpaceMagneticShieldSketch() {
  return (
    <group>
      <SketchMesh partId="field">
        <sphereGeometry args={[0.5, 16, 12]} />
      </SketchMesh>
      <SketchMesh partId="ring" rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.028, 8, 28]} />
      </SketchMesh>
      <SketchMesh partId="coil" rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.28, 0.05, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="box" position={[0.34, 0.12, 0]}>
        <boxGeometry args={[0.12, 0.12, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="sensor" position={[0, 0.36, 0]}>
        <boxGeometry args={[0.09, 0.07, 0.09]} />
      </SketchMesh>
      <Rod from={[0.34, 0, 0]} to={[0.46, 0, 0]} radius={0.018} partId="frame" />
      <Rod from={[-0.34, 0, 0]} to={[-0.46, 0, 0]} radius={0.018} partId="frame" />
      <Rod from={[0, 0, 0.34]} to={[0, 0, 0.46]} radius={0.018} partId="frame" />
      <Rod from={[0, 0, -0.34]} to={[0, 0, -0.46]} radius={0.018} partId="frame" />
    </group>
  );
}
