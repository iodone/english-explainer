import { SketchMesh, Rod } from './primitives';

export default function SpaceParticleShieldSketch() {
  return (
    <group>
      <SketchMesh partId="panel" position={[0, 0, 0.16]}>
        <boxGeometry args={[0.6, 0.6, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="gap" position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.28]} />
      </SketchMesh>
      <SketchMesh partId="wall" position={[0, 0, -0.16]}>
        <boxGeometry args={[0.6, 0.6, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="frame" position={[0, 0.28, 0]}>
        <boxGeometry args={[0.62, 0.05, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="frame" position={[0, -0.28, 0]}>
        <boxGeometry args={[0.62, 0.05, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="frame" position={[-0.28, 0, 0]}>
        <boxGeometry args={[0.05, 0.52, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="frame" position={[0.28, 0, 0]}>
        <boxGeometry args={[0.05, 0.52, 0.34]} />
      </SketchMesh>
      <Rod from={[-0.24, 0.24, 0.15]} to={[-0.24, 0.24, -0.15]} radius={0.014} partId="post" />
      <Rod from={[0.24, 0.24, 0.15]} to={[0.24, 0.24, -0.15]} radius={0.014} partId="post" />
      <Rod from={[-0.24, -0.24, 0.15]} to={[-0.24, -0.24, -0.15]} radius={0.014} partId="post" />
      <Rod from={[0.24, -0.24, 0.15]} to={[0.24, -0.24, -0.15]} radius={0.014} partId="post" />
      <SketchMesh partId="sensor" position={[0, 0.33, 0]}>
        <boxGeometry args={[0.14, 0.05, 0.1]} />
      </SketchMesh>
    </group>
  );
}
