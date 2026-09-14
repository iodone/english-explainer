import { SketchMesh, DraftLine } from './primitives'

export default function HomeBedSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.2, 0.04, 0.28]} />
      </SketchMesh>
      <SketchMesh partId="soft-part" position={[0, 0.06, 0]}>
        <boxGeometry args={[0.18, 0.06, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="head-part" position={[0, 0.1, -0.14]}>
        <boxGeometry args={[0.2, 0.12, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="foot-part" position={[0, 0.06, 0.14]}>
        <boxGeometry args={[0.2, 0.06, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0.1, 0]}>
        <boxGeometry args={[0.16, 0.02, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="pillow" position={[0, 0.12, -0.1]}>
        <boxGeometry args={[0.12, 0.04, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="legs" position={[-0.08, -0.06, -0.12]}>
        <boxGeometry args={[0.03, 0.08, 0.03]} />
      </SketchMesh>
      <SketchMesh position={[0.08, -0.06, -0.12]}>
        <boxGeometry args={[0.03, 0.08, 0.03]} />
      </SketchMesh>
      <SketchMesh position={[-0.08, -0.06, 0.12]}>
        <boxGeometry args={[0.03, 0.08, 0.03]} />
      </SketchMesh>
      <SketchMesh position={[0.08, -0.06, 0.12]}>
        <boxGeometry args={[0.03, 0.08, 0.03]} />
      </SketchMesh>
      <DraftLine points={[[-0.1, -0.1, 0.14], [0.1, -0.1, 0.14]]} />
    </group>
  )
}