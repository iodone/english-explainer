import { SketchMesh, DraftLine } from './primitives'

export default function PowerBankSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.06, 0.20]} />
      </SketchMesh>
      <SketchMesh partId="power-inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.10, 0.04, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="power-in" position={[0, 0, -0.08]}>
        <boxGeometry args={[0.02, 0.02, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="power-out" position={[0, 0, 0.08]}>
        <boxGeometry args={[0.02, 0.02, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0, 0.06, 0.04]}>
        <boxGeometry args={[0.02, 0.004, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="button" position={[0, 0.06, -0.02]}>
        <cylinderGeometry args={[0.01, 0.01, 0.006, 8]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0, 0]}>
        <boxGeometry args={[0.13, 0.065, 0.21]} />
      </SketchMesh>
      <DraftLine points={[[-0.5, -0.06, 0], [0.5, -0.06, 0]]} />
    </group>
  )
}