import { SketchMesh, Rod } from './primitives';

export default function PowerCurrentShuntSketch() {
  return (
    <group>
      <SketchMesh partId="bar" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.5, 0.03, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="in" position={[-0.3, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.12, 14]} />
      </SketchMesh>
      <SketchMesh partId="out" position={[0.3, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.12, 14]} />
      </SketchMesh>
      <SketchMesh partId="screen" position={[0.16, -0.14, 0]}>
        <boxGeometry args={[0.16, 0.08, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="case" position={[0, -0.16, 0]}>
        <boxGeometry args={[0.44, 0.12, 0.18]} />
      </SketchMesh>
      <Rod from={[-0.16, 0.04, 0]} to={[-0.16, -0.1, 0]} radius={0.01} partId="sense" />
    </group>
  );
}
