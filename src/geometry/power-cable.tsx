import { SketchMesh, DraftLine } from './primitives'

export default function PowerCableSketch() {
  return (
    <group>
      <SketchMesh partId="outside" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.28, 12]} />
      </SketchMesh>
      <SketchMesh partId="inside-wire" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.28, 8]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.018, 0.018, 0.20, 8]} />
      </SketchMesh>
      <SketchMesh partId="end-part" position={[0, 0, 0.12]}>
        <boxGeometry args={[0.04, 0.04, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[0, 0, 0.10]}>
        <boxGeometry args={[0.05, 0.05, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="join-part" position={[0, 0, -0.06]}>
        <boxGeometry args={[0.05, 0.05, 0.03]} />
      </SketchMesh>
      <SketchMesh partId="ground-wire" position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.006, 0.006, 0.20, 6]} />
      </SketchMesh>
      <DraftLine points={[[-0.5, -0.06, 0], [0.5, -0.06, 0]]} />
    </group>
  )
}