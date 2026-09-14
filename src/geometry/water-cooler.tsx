import { SketchMesh, Rod, DraftLine } from './primitives'

export default function WaterCoolerSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.30, 0.44, 0.28]} />
      </SketchMesh>
      <SketchMesh partId="water-box" position={[0, 0.10, 0]}>
        <boxGeometry args={[0.26, 0.14, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="cold-part" position={[0, -0.04, 0]}>
        <boxGeometry args={[0.24, 0.10, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="hot-part" position={[0, -0.04, 0.06]}>
        <boxGeometry args={[0.20, 0.08, 0.08]} />
      </SketchMesh>
      <Rod from={[0, -0.08, 0.10]} to={[0, -0.12, 0.14]} radius={0.006} partId="cold-button" />
      <Rod from={[0, -0.08, 0.08]} to={[0, -0.12, 0.12]} radius={0.006} partId="hot-button" />
      <SketchMesh partId="power-wire" position={[0, -0.12, -0.08]}>
        <boxGeometry args={[0.03, 0.10, 0.03]} />
      </SketchMesh>
      <DraftLine points={[[-0.6, -0.24, 0], [0.6, -0.24, 0]]} />
    </group>
  )
}