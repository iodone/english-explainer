import { SketchMesh, Rod } from './primitives';

export default function SpaceDataRecorderSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.44, 0.3, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="chip" position={[0, -0.02, 0]}>
        <boxGeometry args={[0.24, 0.06, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="link" position={[-0.18, 0.12, 0]}>
        <boxGeometry args={[0.1, 0.06, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.18, 0.14, 0]}>
        <sphereGeometry args={[0.03, 14, 12]} />
      </SketchMesh>
      <SketchMesh partId="seal" position={[0, 0.18, 0]}>
        <boxGeometry args={[0.4, 0.03, 0.3]} />
      </SketchMesh>
      <Rod from={[0.22, -0.08, 0]} to={[0.32, -0.2, 0]} radius={0.014} partId="plug" />
    </group>
  );
}
