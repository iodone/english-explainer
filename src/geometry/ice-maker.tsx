import { SketchMesh, Rod, DraftLine } from './primitives'

export default function IceMakerSketch() {
  return (
    <group>
      {/* Body - housing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.28, 0.24, 0.22]} />
      </SketchMesh>

      {/* Water box - reservoir */}
      <SketchMesh partId="water-box" position={[0, 0.06, 0]}>
        <boxGeometry args={[0.22, 0.10, 0.18]} />
      </SketchMesh>

      {/* Cold part - freezing plate */}
      <SketchMesh partId="cold-part" position={[0, -0.02, 0.06]}>
        <boxGeometry args={[0.18, 0.04, 0.08]} />
      </SketchMesh>

      {/* Ice box - ice basket */}
      <SketchMesh partId="ice-box" position={[0, -0.08, 0]}>
        <boxGeometry args={[0.20, 0.08, 0.16]} />
      </SketchMesh>

      {/* Top part - lid */}
      <SketchMesh partId="top-part" position={[0, 0.12, 0]}>
        <boxGeometry args={[0.28, 0.04, 0.22]} />
      </SketchMesh>

      {/* Button */}
      <SketchMesh partId="button" position={[0, 0.08, 0.10]}>
        <sphereGeometry args={[0.02, 8, 8]} />
      </SketchMesh>

      {/* Power wire */}
      <Rod from={[0, -0.10, -0.08]} to={[0, -0.14, -0.14]} radius={0.008} partId="power-wire" />

      {/* Outline */}
      <DraftLine points={[[-0.14, -0.12, 0.11], [-0.14, 0.14, 0.11], [0.14, 0.14, 0.11], [0.14, -0.12, 0.11], [-0.14, -0.12, 0.11]]} />
    </group>
  )
}