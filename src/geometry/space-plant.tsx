import { SketchMesh, DraftLine } from './primitives'

export default function SpacePlantSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.20, 0.20, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="light" position={[0, 0.08, 0]}>
        <boxGeometry args={[0.16, 0.02, 0.12]} />
      </SketchMesh>
      <SketchMesh partId="dirt-box" position={[0, -0.06, 0]}>
        <boxGeometry args={[0.14, 0.06, 0.10]} />
      </SketchMesh>
      <SketchMesh partId="water-part" position={[0, -0.04, 0.06]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="air-part" position={[0, 0.04, -0.06]}>
        <cylinderGeometry args={[0.02, 0.02, 0.04, 8]} />
      </SketchMesh>
      <SketchMesh partId="look-part" position={[0, 0.06, 0.06]}>
        <boxGeometry args={[0.04, 0.04, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="power-wire" position={[0, -0.08, -0.04]}>
        <boxGeometry args={[0.02, 0.06, 0.02]} />
      </SketchMesh>
      <DraftLine points={[[-0.5, -0.12, 0], [0.5, -0.12, 0]]} />
    </group>
  )
}