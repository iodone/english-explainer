import { SketchMesh } from './primitives';

export default function SpaceDockingCollarSketch() {
  return (
    <group>
      <SketchMesh partId="ring" position={[0, 0, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.05, 12, 28]} />
      </SketchMesh>
      <SketchMesh partId="seal" position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.025, 10, 26]} />
      </SketchMesh>
      <SketchMesh partId="port" position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.1, 24]} />
      </SketchMesh>
      <SketchMesh partId="latch" position={[0.4, 0, 0.1]}>
        <boxGeometry args={[0.14, 0.1, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="guide" position={[-0.3, 0.2, 0.12]}>
        <cylinderGeometry args={[0.03, 0.03, 0.16, 12]} />
      </SketchMesh>
      <SketchMesh partId="sensor" position={[0.2, -0.3, 0.08]}>
        <boxGeometry args={[0.1, 0.08, 0.08]} />
      </SketchMesh>
    </group>
  );
}
