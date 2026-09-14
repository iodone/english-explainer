import { SketchMesh, Rod } from './primitives';

export default function PowerLoadBreakSwitchSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.52, 0.34, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="handle" position={[0.34, 0.08, 0]} rotation={[0, 0, -Math.PI / 5]}>
        <boxGeometry args={[0.2, 0.05, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0.06, 0.02, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <boxGeometry args={[0.4, 0.035, 0.035]} />
      </SketchMesh>
      <SketchMesh partId="contact" position={[-0.17, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 0.08, 14]} />
      </SketchMesh>
      <SketchMesh partId="arc" position={[-0.17, 0.13, 0]}>
        <boxGeometry args={[0.12, 0.14, 0.12]} />
      </SketchMesh>
      <Rod from={[-0.34, 0, 0]} to={[-0.5, 0, 0]} radius={0.014} partId="wire" />
    </group>
  );
}
