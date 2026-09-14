import { SketchMesh } from './primitives';

export default function SpaceSignalDishSketch() {
  return (
    <group>
      <SketchMesh partId="dish" rotation={[-Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[0.32, 20, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="feed" position={[0, 0, 0.24]}>
        <boxGeometry args={[0.06, 0.06, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0.07, 0.3]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.16, 0.012, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="gear" position={[0, -0.32, -0.04]}>
        <cylinderGeometry args={[0.07, 0.07, 0.03, 12]} />
      </SketchMesh>
      <SketchMesh partId="gear" position={[0.075, -0.32, -0.04]}>
        <boxGeometry args={[0.025, 0.03, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="gear" position={[-0.075, -0.32, -0.04]}>
        <boxGeometry args={[0.025, 0.03, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="post" position={[0, -0.45, -0.04]}>
        <cylinderGeometry args={[0.045, 0.055, 0.22, 12]} />
      </SketchMesh>
      <SketchMesh partId="box" position={[0.2, -0.2, -0.22]}>
        <boxGeometry args={[0.16, 0.14, 0.12]} />
      </SketchMesh>
    </group>
  );
}
