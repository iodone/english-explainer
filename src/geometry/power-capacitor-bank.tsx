import { SketchMesh, Rod } from './primitives';

export default function PowerCapacitorBankSketch() {
  return (
    <group>
      <SketchMesh partId="rack" position={[0, -0.2, 0]}>
        <boxGeometry args={[0.44, 0.03, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="rack" position={[-0.21, 0, 0]}>
        <boxGeometry args={[0.03, 0.4, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="rack" position={[0.21, 0, 0]}>
        <boxGeometry args={[0.03, 0.4, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="cell" position={[-0.11, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
      </SketchMesh>
      <SketchMesh partId="cell" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
      </SketchMesh>
      <SketchMesh partId="cell" position={[0.11, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
      </SketchMesh>
      <SketchMesh partId="bar" position={[0, 0.2, 0]}>
        <boxGeometry args={[0.42, 0.03, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="board" position={[0, -0.06, 0.14]}>
        <boxGeometry args={[0.16, 0.1, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.16, 0.1, 0.14]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>
      <Rod from={[-0.21, -0.2, 0]} to={[-0.21, -0.38, 0]} radius={0.02} partId="wire" />
    </group>
  );
}
