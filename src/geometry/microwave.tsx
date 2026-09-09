import { SketchMesh, Rod } from './primitives'

export default function MicrowaveSketch() {
  return (
    <group>
      <SketchMesh partId="door-screen" position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 1.3, 1.2]} />
      </SketchMesh>
      <SketchMesh partId="door-screen" position={[0, -0.05, 0.62]}>
        <boxGeometry args={[1.0, 0.75, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="turning-table" position={[0, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.06, 16]} />
      </SketchMesh>
      <SketchMesh partId="wave-maker" position={[0.75, 0.3, -0.25]}>
        <cylinderGeometry args={[0.22, 0.22, 0.45, 10]} />
      </SketchMesh>
      <Rod from={[0.75, 0.3, -0.25]} to={[0, 0.3, -0.1]} radius={0.04} partId="wave-road" />
      <SketchMesh partId="power-changer" position={[-0.8, -0.35, -0.25]}>
        <boxGeometry args={[0.5, 0.4, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="control-brain" position={[0, 0.55, 0]}>
        <boxGeometry args={[0.8, 0.15, 0.7]} />
      </SketchMesh>
      <SketchMesh partId="air-pusher" position={[0, 0, -0.65]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.12, 10]} />
      </SketchMesh>
    </group>
  )
}
