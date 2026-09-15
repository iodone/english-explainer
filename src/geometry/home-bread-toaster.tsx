import { SketchMesh } from './primitives';

export default function HomeBreadToasterSketch() {
  return (
    <group>
      <SketchMesh partId="case">
        <boxGeometry args={[0.42, 0.38, 0.3]} />
      </SketchMesh>
      <SketchMesh partId="opening" position={[0, 0.2, 0]}>
        <boxGeometry args={[0.3, 0.03, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, 0, 0.09]}>
        <boxGeometry args={[0.28, 0.26, 0.006]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, 0, -0.09]}>
        <boxGeometry args={[0.28, 0.26, 0.006]} />
      </SketchMesh>
      <SketchMesh partId="lever" position={[0.24, 0.1, 0]}>
        <boxGeometry args={[0.06, 0.14, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="timer" position={[-0.2, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.03, 18]} />
      </SketchMesh>
      <SketchMesh partId="tray" position={[0, -0.21, 0]}>
        <boxGeometry args={[0.38, 0.03, 0.26]} />
      </SketchMesh>
    </group>
  );
}
