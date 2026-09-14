import { SketchMesh, Rod, DraftLine } from './primitives'

export default function SolarHeaterSketch() {
  return (
    <group>
      <SketchMesh partId="body" position={[0, 0, 0]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.40, 0.02, 0.28]} />
      </SketchMesh>
      <SketchMesh partId="glass-front" position={[0, 0.04, 0.04]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.38, 0.006, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="dark-part" position={[0, 0, 0.02]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.34, 0.006, 0.22]} />
      </SketchMesh>
      <Rod from={[0, -0.08, -0.04]} to={[0, -0.04, -0.02]} radius={0.008} partId="pipe-in" />
      <Rod from={[0, 0.08, -0.04]} to={[0, 0.04, -0.02]} radius={0.008} partId="pipe-out" />
      <SketchMesh partId="hold-part" position={[0, -0.04, -0.06]}>
        <boxGeometry args={[0.42, 0.03, 0.30]} />
      </SketchMesh>
      <SketchMesh partId="water-box" position={[0, -0.12, -0.04]}>
        <boxGeometry args={[0.24, 0.10, 0.16]} />
      </SketchMesh>
      <DraftLine points={[[-0.6, -0.18, 0], [0.6, -0.18, 0]]} />
    </group>
  )
}