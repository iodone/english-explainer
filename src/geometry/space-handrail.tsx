import { SketchMesh } from './primitives';

export default function SpaceHandrailSketch() {
  return (
    <group>
      <SketchMesh partId="body" rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.7, 12]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, 0, -0.35]}>
        <sphereGeometry args={[0.04, 12, 8]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.5, 8]} />
      </SketchMesh>
      <SketchMesh partId="mount" position={[0, -0.1, 0]}>
        <boxGeometry args={[0.06, 0.06, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="join" position={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.04, 0.04, 0.05, 12]} />
      </SketchMesh>
      <SketchMesh partId="tip" position={[0, 0, 0.35]}>
        <sphereGeometry args={[0.04, 12, 8]} />
      </SketchMesh>
    </group>
  );
}
