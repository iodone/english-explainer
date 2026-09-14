import { SketchMesh, Rod, DraftLine } from './primitives'

export default function BreadMakerSketch() {
  return (
    <group>
      {/* Body - housing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.36, 0.36, 0.30]} />
      </SketchMesh>

      {/* Pot - baking pot inside */}
      <SketchMesh partId="pot" position={[0, -0.04, 0]}>
        <cylinderGeometry args={[0.12, 0.10, 0.24, 16]} />
      </SketchMesh>

      {/* Blade - kneading blade */}
      <Rod from={[0, -0.04, -0.06]} to={[0, -0.04, 0.06]} radius={0.012} partId="blade" />

      {/* Lid */}
      <SketchMesh partId="lid" position={[0, 0.18, 0]}>
        <boxGeometry args={[0.36, 0.04, 0.30]} />
      </SketchMesh>

      {/* Window - viewing window */}
      <SketchMesh partId="window" position={[0, 0.20, 0.08]}>
        <boxGeometry args={[0.16, 0.01, 0.12]} />
      </SketchMesh>

      {/* Button - control panel */}
      <SketchMesh partId="button" position={[0, 0.12, 0.14]}>
        <boxGeometry args={[0.18, 0.06, 0.02]} />
      </SketchMesh>

      {/* Power wire */}
      <Rod from={[0, -0.14, -0.10]} to={[0, -0.20, -0.16]} radius={0.008} partId="power-wire" />

      {/* Outline */}
      <DraftLine points={[[-0.18, -0.18, 0.15], [-0.18, 0.20, 0.15], [0.18, 0.20, 0.15], [0.18, -0.18, 0.15], [-0.18, -0.18, 0.15]]} />
    </group>
  )
}