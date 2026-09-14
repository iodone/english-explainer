import { SketchMesh, DraftLine } from './primitives'

export default function ElectricWireSketch() {
  return (
    <group>
      <SketchMesh partId="outside" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.28, 8]} />
      </SketchMesh>
      <SketchMesh partId="inside-wire" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.28, 8]} />
      </SketchMesh>
      <SketchMesh partId="end-part" position={[0, 0, 0.12]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="ground-wire" position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.006, 0.006, 0.20, 6]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, 0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.20, 8]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[0, 0, 0.10]}>
        <boxGeometry args={[0.05, 0.05, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="bend-part" position={[0, 0, -0.08]}>
        <sphereGeometry args={[0.025, 8, 6]} />
      </SketchMesh>
      <DraftLine points={[[-0.6, -0.06, 0], [0.6, -0.06, 0]]} />
    </group>
  )
}