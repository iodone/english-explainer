import { SketchMesh, DraftLine } from './primitives'

export default function PowerSocketSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.08, 0.10, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="hole-left" position={[-0.02, 0, 0.02]}>
        <cylinderGeometry args={[0.006, 0.006, 0.01, 8]} />
      </SketchMesh>
      <SketchMesh partId="hole-right" position={[0.02, 0, 0.02]}>
        <cylinderGeometry args={[0.006, 0.006, 0.01, 8]} />
      </SketchMesh>
      <SketchMesh partId="ground-hole" position={[0, -0.03, 0.02]}>
        <cylinderGeometry args={[0.008, 0.008, 0.01, 8]} />
      </SketchMesh>
      <SketchMesh partId="inside-part" position={[0, 0, -0.02]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="wire" position={[0, 0, -0.06]}>
        <boxGeometry args={[0.02, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="switch" position={[0, 0.04, 0.02]}>
        <boxGeometry args={[0.04, 0.02, 0.01]} />
      </SketchMesh>
      <DraftLine points={[[-0.4, -0.08, 0], [0.4, -0.08, 0]]} />
    </group>
  )
}