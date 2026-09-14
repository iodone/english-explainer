import { SketchMesh, Rod } from './primitives';

export default function SpaceSolarArraySketch() {
  return (
    <group>
      <SketchMesh partId="wing">
        <boxGeometry args={[0.9, 0.5, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="face" position={[0, 0, -0.02]}>
        <boxGeometry args={[0.88, 0.48, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="cell" position={[-0.28, 0.12, -0.04]}>
        <boxGeometry args={[0.2, 0.15, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="cell" position={[0, 0.12, -0.04]}>
        <boxGeometry args={[0.2, 0.15, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="cell" position={[0.28, 0.12, -0.04]}>
        <boxGeometry args={[0.2, 0.15, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="cell" position={[-0.28, -0.12, -0.04]}>
        <boxGeometry args={[0.2, 0.15, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="cell" position={[0, -0.12, -0.04]}>
        <boxGeometry args={[0.2, 0.15, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="cell" position={[0.28, -0.12, -0.04]}>
        <boxGeometry args={[0.2, 0.15, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="bar" position={[0, -0.27, 0]}>
        <boxGeometry args={[0.94, 0.04, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="joint" position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 12]} />
      </SketchMesh>
      <Rod from={[0, -0.4, 0]} to={[0, -0.58, -0.12]} radius={0.02} partId="wire" />
    </group>
  );
}
