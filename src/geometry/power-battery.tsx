import { SketchMesh, DraftLine } from './primitives'

export default function PowerBatterySketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.14, 0.16, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="top-part" position={[0, 0.09, 0]}>
        <boxGeometry args={[0.14, 0.02, 0.08]} />
      </SketchMesh>
      <SketchMesh partId="inside" position={[0, 0, 0]}>
        <boxGeometry args={[0.1, 0.12, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="top-one" position={[-0.04, 0.1, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.02, 8]} />
      </SketchMesh>
      <SketchMesh partId="top-two" position={[0.04, 0.1, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.02, 8]} />
      </SketchMesh>
      <SketchMesh partId="cover" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.14, 0.02, 0.08]} />
      </SketchMesh>
      <DraftLine points={[[-0.07, -0.08, 0.04], [0.07, -0.08, 0.04]]} />
    </group>
  )
}