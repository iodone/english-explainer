import { SketchMesh, Rod, DraftLine } from './primitives'

export default function WaterPumpSketch() {
  return (
    <group>
      {/* Body - casing */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.20, 16]} />
      </SketchMesh>

      {/* Water in - inlet */}
      <SketchMesh partId="water-in" position={[-0.18, -0.08, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.10, 8]} />
      </SketchMesh>

      {/* Water out - outlet */}
      <SketchMesh partId="water-out" position={[0.18, 0.08, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.10, 8]} />
      </SketchMesh>

      {/* Turn part - impeller */}
      <SketchMesh partId="turn-part" position={[0, 0, 0]}>
        <boxGeometry args={[0.08, 0.12, 0.02]} />
      </SketchMesh>

      {/* Motor */}
      <SketchMesh partId="motor" position={[0, -0.16, 0]}>
        <boxGeometry args={[0.20, 0.10, 0.16]} />
      </SketchMesh>

      {/* Power wire */}
      <Rod from={[0, -0.16, -0.08]} to={[0, -0.22, -0.14]} radius={0.008} partId="power-wire" />

      {/* Stand */}
      <SketchMesh partId="stand" position={[0, -0.24, 0]}>
        <boxGeometry args={[0.28, 0.04, 0.22]} />
      </SketchMesh>

      {/* Outline */}
      <DraftLine points={[[-0.14, -0.26, 0.11], [-0.14, 0.10, 0.11], [0.14, 0.10, 0.11], [0.14, -0.26, 0.11], [-0.14, -0.26, 0.11]]} />
    </group>
  )
}