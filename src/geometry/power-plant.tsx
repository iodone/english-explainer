import { SketchMesh, DraftLine } from './primitives'

export default function PowerPlantSketch() {
  return (
    <group>
      <SketchMesh partId="building" position={[0, 0, 0]}>
        <boxGeometry args={[0.36, 0.24, 0.28]} />
      </SketchMesh>
      <SketchMesh partId="fire-box" position={[0, 0, -0.06]}>
        <boxGeometry args={[0.22, 0.16, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="turn-part" position={[0, 0.04, 0.04]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.08, 12]} />
      </SketchMesh>
      <SketchMesh partId="make-power-part" position={[0, 0.04, 0.10]}>
        <boxGeometry args={[0.08, 0.06, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="big-spin" position={[0.12, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.20, 16]} />
      </SketchMesh>
      <SketchMesh partId="power-line" position={[0, 0.14, 0]}>
        <boxGeometry args={[0.30, 0.008, 0.008]} />
      </SketchMesh>
      <SketchMesh partId="smoke-pipe" position={[-0.08, 0.10, -0.04]}>
        <boxGeometry args={[0.04, 0.12, 0.04]} />
      </SketchMesh>
      <DraftLine points={[[-0.6, -0.14, 0], [0.6, -0.14, 0]]} />
    </group>
  )
}