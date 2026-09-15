import { SketchMesh, Rod } from './primitives';

export default function SpaceFuelCellSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.34, 0.34, 0.3]} />
      </SketchMesh>
      <SketchMesh partId="plate" position={[0, 0.2, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="pipe" position={[-0.26, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.26, 12]} />
      </SketchMesh>
      <SketchMesh partId="tank" position={[-0.46, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 0.2, 16]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0.14, 0.24, 0]}>
        <sphereGeometry args={[0.03, 14, 12]} />
      </SketchMesh>
      <Rod from={[0.18, 0.06, 0]} to={[0.3, -0.06, 0]} radius={0.014} partId="wire" />
    </group>
  );
}
