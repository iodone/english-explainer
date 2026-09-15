import { SketchMesh } from './primitives';

export default function SpaceHeatExchangerSketch() {
  return (
    <group>
      <SketchMesh partId="shell" rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 0.56, 24]} />
      </SketchMesh>
      <SketchMesh partId="bundle" rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.6, 20]} />
      </SketchMesh>
      <SketchMesh partId="inlet" position={[-0.3, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 0.16, 14]} />
      </SketchMesh>
      <SketchMesh partId="outlet" position={[0.3, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 0.16, 14]} />
      </SketchMesh>
      <SketchMesh partId="fins" position={[0, 0.16, 0]}>
        <boxGeometry args={[0.5, 0.02, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="fins" position={[0, 0.2, 0]}>
        <boxGeometry args={[0.5, 0.02, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="sensor" position={[0.2, -0.12, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.08]} />
      </SketchMesh>
    </group>
  );
}
