import { SketchMesh, Rod } from './primitives';

export default function PowerDisconnectSwitchSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.52, 0.34, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0.34, 0.08, 0]} rotation={[0, 0, -Math.PI / 5]}>
        <boxGeometry args={[0.2, 0.05, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0.06, 0.02, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <boxGeometry args={[0.38, 0.03, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="clamp" position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.09, 14]} />
      </SketchMesh>
      <SketchMesh partId="sign" position={[0.2, -0.14, 0]}>
        <boxGeometry args={[0.1, 0.06, 0.1]} />
      </SketchMesh>
      <Rod from={[-0.36, 0, 0]} to={[-0.52, 0, 0]} radius={0.014} partId="wire" />
    </group>
  );
}
