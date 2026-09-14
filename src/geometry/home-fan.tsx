import { SketchMesh, DraftLine } from './primitives'

export default function HomeFanSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh partId="spinning-part" position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 6]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0.1, 0.02]}>
        <cylinderGeometry args={[0.09, 0.09, 0.01, 12]} />
      </SketchMesh>
      <SketchMesh partId="neck" position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.08, 8]} />
      </SketchMesh>
      <SketchMesh partId="buttons" position={[0, 0.02, 0.06]}>
        <boxGeometry args={[0.06, 0.02, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="turn-part" position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 8]} />
      </SketchMesh>
      <DraftLine points={[[0, 0.1, 0.03], [0, 0.15, 0.03]]} />
    </group>
  )
}