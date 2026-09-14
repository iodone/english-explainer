import { SketchMesh, DraftLine } from './primitives'

export default function WindPowerSketch() {
  return (
    <group>
      <SketchMesh partId="tower" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 0.36, 12]} />
      </SketchMesh>
      <SketchMesh partId="big-spin" position={[0, 0.14, 0.02]}>
        <boxGeometry args={[0.006, 0.20, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="front-part" position={[0, 0.10, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="turn-part" position={[0, 0.10, -0.02]}>
        <cylinderGeometry args={[0.02, 0.02, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh partId="power-wire" position={[0, -0.04, -0.04]}>
        <boxGeometry args={[0.008, 0.20, 0.008]} />
      </SketchMesh>
      <SketchMesh partId="bottom-part" position={[0, -0.18, 0]}>
        <boxGeometry args={[0.14, 0.04, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="point-part" position={[0, 0.12, 0.04]}>
        <boxGeometry args={[0.02, 0.02, 0.02]} />
      </SketchMesh>
      <DraftLine points={[[-0.5, -0.22, 0], [0.5, -0.22, 0]]} />
    </group>
  )
}