import { SketchMesh, Rod, DraftLine } from './primitives'

export default function WindowBlindSketch() {
  return (
    <group>
      <SketchMesh partId="top-bar" position={[0, 0.16, 0]}>
        <boxGeometry args={[0.30, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="flat-piece" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.28, 0.004, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="side-string" position={[0.12, 0, 0]}>
        <boxGeometry args={[0.004, 0.30, 0.004]} />
      </SketchMesh>
      <Rod from={[0.14, -0.08, 0]} to={[0.14, -0.16, 0]} radius={0.004} partId="pull-string" />
      <Rod from={[0.16, 0.08, 0]} to={[0.16, 0.16, 0]} radius={0.004} partId="turn-stick" />
      <SketchMesh partId="bottom-bar" position={[0, -0.16, 0]}>
        <boxGeometry args={[0.30, 0.02, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="hold-part" position={[-0.14, 0.16, 0]}>
        <boxGeometry args={[0.02, 0.04, 0.03]} />
      </SketchMesh>
      <DraftLine points={[[-0.5, -0.20, 0], [0.5, -0.20, 0]]} />
    </group>
  )
}