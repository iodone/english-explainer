import { SketchMesh, Rod } from './primitives';

export default function SpaceLightFilterSketch() {
  return (
    <group>
      <SketchMesh partId="frame">
        <boxGeometry args={[0.44, 0.5, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="glass">
        <boxGeometry args={[0.36, 0.42, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="coat" position={[0, 0, 0.03]}>
        <boxGeometry args={[0.34, 0.4, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="seal" position={[0, 0, -0.03]}>
        <boxGeometry args={[0.38, 0.44, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="sensor" position={[0.16, 0.22, 0.03]}>
        <boxGeometry args={[0.07, 0.07, 0.05]} />
      </SketchMesh>
      <Rod from={[0.22, -0.24, 0]} to={[0.32, -0.34, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
