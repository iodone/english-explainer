import { SketchMesh, Rod } from './primitives';

export default function PowerBatteryFuseSketch() {
  return (
    <group>
      <SketchMesh partId="case" rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 20]} />
      </SketchMesh>
      <SketchMesh partId="sand" rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.095, 0.095, 0.52, 18]} />
      </SketchMesh>
      <Rod from={[-0.26, 0, 0]} to={[0.26, 0, 0]} radius={0.018} partId="fuse" />
      <SketchMesh partId="cap" position={[-0.31, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.13, 0.13, 0.03, 20]} />
      </SketchMesh>
      <SketchMesh partId="cap" position={[0.31, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.13, 0.13, 0.03, 20]} />
      </SketchMesh>
      <Rod from={[-0.33, 0, 0]} to={[-0.46, 0, 0]} radius={0.02} partId="in" />
      <Rod from={[0.33, 0, 0]} to={[0.46, 0, 0]} radius={0.02} partId="out" />
    </group>
  );
}
