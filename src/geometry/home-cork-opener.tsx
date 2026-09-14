import { SketchMesh, Rod } from './primitives';

export default function HomeCorkOpenerSketch() {
  return (
    <group>
      <SketchMesh partId="cap" position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 0.06, 16]} />
      </SketchMesh>
      <SketchMesh partId="grip" position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 0.1, 16]} />
      </SketchMesh>
      <SketchMesh partId="collar" rotation={[Math.PI / 2, 0, 0]} position={[0, 0.16, 0]}>
        <torusGeometry args={[0.045, 0.014, 8, 20]} />
      </SketchMesh>
      <Rod from={[0, 0.16, 0]} to={[0, 0, 0]} radius={0.01} partId="spiral" />
      <SketchMesh partId="spiral" position={[0, 0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.05, 0.008, 6, 18]} />
      </SketchMesh>
      <SketchMesh partId="spiral" position={[0, 0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.045, 0.008, 6, 18]} />
      </SketchMesh>
      <SketchMesh partId="hook" position={[-0.08, 0.02, 0]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.12, 0.02, 0.03]} />
      </SketchMesh>
      <Rod from={[0.06, 0.02, 0]} to={[0.18, 0.12, 0]} radius={0.014} partId="arm" />
    </group>
  );
}
