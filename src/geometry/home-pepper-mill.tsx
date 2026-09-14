import { SketchMesh } from './primitives';

export default function HomePepperMillSketch() {
  return (
    <group>
      <SketchMesh partId="turn" position={[0, 0.26, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.06, 16]} />
      </SketchMesh>
      <SketchMesh partId="store" position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.14, 16]} />
      </SketchMesh>
      <SketchMesh partId="body" position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.34, 16]} />
      </SketchMesh>
      <SketchMesh partId="rod" position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
      </SketchMesh>
      <SketchMesh partId="grind" position={[0, -0.14, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 16]} />
      </SketchMesh>
      <SketchMesh partId="set" position={[0, -0.22, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.04, 12]} />
      </SketchMesh>
    </group>
  );
}
