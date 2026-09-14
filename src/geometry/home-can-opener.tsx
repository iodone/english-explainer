import { SketchMesh } from './primitives';

export default function HomeCanOpenerSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0.18, 0.02, 0]}>
        <boxGeometry args={[0.34, 0.16, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="blade" rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.012, 20]} />
      </SketchMesh>
      <SketchMesh partId="gear" position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 0.012, 16]} />
      </SketchMesh>
      <SketchMesh partId="gear" position={[0.05, 0.15, 0]}>
        <boxGeometry args={[0.02, 0.02, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="gear" position={[-0.05, 0.15, 0]}>
        <boxGeometry args={[0.02, 0.02, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="gear" position={[0, 0.2, 0]}>
        <boxGeometry args={[0.02, 0.02, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="turn" position={[0.36, 0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.07, 14]} />
      </SketchMesh>
      <SketchMesh partId="grip" position={[0.5, 0.04, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.16, 0.05, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="jaw" position={[0, -0.12, 0]}>
        <boxGeometry args={[0.1, 0.04, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="jaw" position={[0.13, -0.12, 0]}>
        <boxGeometry args={[0.1, 0.04, 0.05]} />
      </SketchMesh>
    </group>
  );
}
