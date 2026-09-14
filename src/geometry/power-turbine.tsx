import { SketchMesh } from './primitives';

export default function PowerTurbineSketch() {
  return (
    <group>
      <SketchMesh partId="body">
        <boxGeometry args={[0.5, 0.4, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="end" position={[0, -0.25, 0]}>
        <boxGeometry args={[0.4, 0.1, 0.35]} />
      </SketchMesh>
      <SketchMesh partId="top" position={[0, 0.25, 0]}>
        <boxGeometry args={[0.4, 0.1, 0.35]} />
      </SketchMesh>
      <SketchMesh partId="inside">
        <cylinderGeometry args={[0.15, 0.15, 0.35, 16]} />
      </SketchMesh>
      <SketchMesh partId="blade" position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 3]} />
      </SketchMesh>
      <SketchMesh partId="power" position={[0, 0, 0.25]}>
        <boxGeometry args={[0.25, 0.25, 0.15]} />
      </SketchMesh>
    </group>
  );
}