import { SketchMesh, Rod } from './primitives';

export default function PowerFaultRelaySketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.4, 0.34, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="sense" position={[0, 0.12, 0]}>
        <boxGeometry args={[0.16, 0.08, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="coil" position={[-0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.07, 0.022, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="contact" position={[0.12, 0.03, 0]}>
        <boxGeometry args={[0.06, 0.03, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="contact" position={[0.12, -0.03, 0]}>
        <boxGeometry args={[0.06, 0.03, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="set" position={[0, -0.14, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
      </SketchMesh>
      <Rod from={[-0.2, 0.08, 0]} to={[-0.36, 0.14, 0]} radius={0.014} partId="wire" />
      <Rod from={[-0.2, -0.08, 0]} to={[-0.36, -0.14, 0]} radius={0.014} partId="wire" />
    </group>
  );
}
