import { SketchMesh, Rod } from './primitives';

export default function SpaceLaserRangeSketch() {
  return (
    <group>
      <SketchMesh partId="mirror" position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.03, 22]} />
      </SketchMesh>
      <SketchMesh partId="laser" position={[-0.16, 0.06, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 0.16, 16]} />
      </SketchMesh>
      <SketchMesh partId="sensor" position={[0.16, 0.06, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 0.16, 16]} />
      </SketchMesh>
      <SketchMesh partId="mount" position={[0, -0.16, 0]}>
        <boxGeometry args={[0.22, 0.16, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.16, -0.06, 0.1]}>
        <sphereGeometry args={[0.03, 14, 12]} />
      </SketchMesh>
      <Rod from={[0.22, -0.12, 0]} to={[0.32, -0.2, 0]} radius={0.012} partId="wire" />
    </group>
  );
}
