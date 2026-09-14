import { SketchMesh } from './primitives';

export default function HomeNutCrackerSketch() {
  return (
    <group>
      <SketchMesh partId="arm" position={[0.08, 0.1, 0]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[0.52, 0.06, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="arm" position={[0.08, -0.1, 0]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[0.52, 0.06, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="jaw" position={[-0.04, 0.05, 0]}>
        <boxGeometry args={[0.12, 0.06, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="jaw" position={[-0.04, -0.05, 0]}>
        <boxGeometry args={[0.12, 0.06, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="cup" position={[-0.06, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.045, 0.012, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="joint" position={[-0.26, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.1, 12]} />
      </SketchMesh>
      <SketchMesh partId="spring" position={[0.22, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.14, 10]} />
      </SketchMesh>
      <SketchMesh partId="grip" position={[0.44, 0.15, 0]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[0.14, 0.08, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="grip" position={[0.44, -0.15, 0]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[0.14, 0.08, 0.06]} />
      </SketchMesh>
    </group>
  );
}
