import { SketchMesh, Rod } from './primitives'

export default function ElevatorSketch() {
  return (
    <group>
      <SketchMesh partId="room" position={[0, -0.3, 0]}>
        <boxGeometry args={[1.1, 1.3, 1.1]} />
      </SketchMesh>
      <Rod from={[0, 1.1, 0]} to={[0, -0.3, 0]} radius={0.035} partId="strong-line" />
      <Rod from={[0, 1.1, 0]} to={[1.3, -0.3, 0]} radius={0.035} partId="strong-line" />
      <SketchMesh partId="top-wheel" position={[0, 1.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.22, 16]} />
      </SketchMesh>
      <SketchMesh partId="other-weight" position={[1.3, -0.3, 0]}>
        <boxGeometry args={[0.75, 1.1, 0.75]} />
      </SketchMesh>
      <Rod from={[-0.75, -1.3, 0]} to={[-0.75, 0.6, 0]} radius={0.04} partId="straight-tracks" />
      <Rod from={[0.75, -1.3, 0]} to={[0.75, 0.6, 0]} radius={0.04} partId="straight-tracks" />
      <SketchMesh partId="door-brain" position={[0, 0.35, 0.62]}>
        <boxGeometry args={[0.55, 0.18, 0.7]} />
      </SketchMesh>
      {[-0.65, 0.65].map((x, index) => (
        <SketchMesh key={index} partId="catch-teeth" position={[x, -1.05, 0]}>
          <boxGeometry args={[0.18, 0.18, 0.18]} />
        </SketchMesh>
      ))}
    </group>
  )
}
