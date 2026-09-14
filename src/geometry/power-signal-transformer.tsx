import { SketchMesh, Rod } from './primitives';

export default function PowerSignalTransformerSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.46, 0.36, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="core">
        <torusGeometry args={[0.14, 0.03, 10, 24]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, 0, 0.06]}>
        <torusGeometry args={[0.14, 0.02, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, 0, -0.06]}>
        <torusGeometry args={[0.14, 0.02, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="sheet" position={[0, 0, -0.1]}>
        <boxGeometry args={[0.34, 0.3, 0.012]} />
      </SketchMesh>
      <Rod from={[-0.22, 0.12, 0]} to={[-0.38, 0.2, 0]} radius={0.014} partId="in" />
      <Rod from={[-0.22, -0.12, 0]} to={[-0.38, -0.2, 0]} radius={0.014} partId="in" />
      <Rod from={[0.22, 0.12, 0]} to={[0.38, 0.2, 0]} radius={0.014} partId="out" />
      <Rod from={[0.22, -0.12, 0]} to={[0.38, -0.2, 0]} radius={0.014} partId="out" />
    </group>
  );
}
