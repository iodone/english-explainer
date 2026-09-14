import { SketchMesh, Rod } from './primitives';

export default function PowerBusDuctSketch() {
  return (
    <group>
      <SketchMesh partId="duct">
        <boxGeometry args={[0.9, 0.14, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="bar" position={[0, 0.035, 0]}>
        <boxGeometry args={[0.86, 0.025, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="bar" position={[0, -0.035, 0]}>
        <boxGeometry args={[0.86, 0.025, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.92, 0.02, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="joint" position={[0.46, 0, 0]}>
        <boxGeometry args={[0.1, 0.16, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="plug" position={[-0.2, -0.13, 0]}>
        <boxGeometry args={[0.12, 0.1, 0.12]} />
      </SketchMesh>
      <Rod from={[-0.3, 0.07, 0]} to={[-0.3, 0.28, 0]} radius={0.012} partId="hang" />
      <Rod from={[0.3, 0.07, 0]} to={[0.3, 0.28, 0]} radius={0.012} partId="hang" />
    </group>
  );
}
