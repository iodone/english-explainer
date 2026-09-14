import { SketchMesh, DraftLine } from './primitives'

export default function SpacePipeSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.24, 12]} />
      </SketchMesh>
      <SketchMesh partId="join-parts" position={[0.12, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh position={[-0.12, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.04, 12]} />
      </SketchMesh>
      <SketchMesh partId="turn-part" position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.08, 12]} />
      </SketchMesh>
      <SketchMesh partId="open-part" position={[-0.1, 0, 0.04]}>
        <boxGeometry args={[0.04, 0.06, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0, 0.04]}>
        <cylinderGeometry args={[0.035, 0.035, 0.22, 12]} />
      </SketchMesh>
      <SketchMesh partId="hold-parts" position={[0, -0.04, -0.04]}>
        <boxGeometry args={[0.06, 0.02, 0.02]} />
      </SketchMesh>
      <DraftLine points={[[-0.12, -0.04, -0.04], [0.12, -0.04, -0.04]]} />
    </group>
  )
}