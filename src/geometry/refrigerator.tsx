import { SketchMesh, Rod } from './primitives'

export default function RefrigeratorSketch() {
  return (
    <group>
      <SketchMesh partId="cold-box" position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 2.5, 1.1]} />
      </SketchMesh>
      <SketchMesh partId="ice-room" position={[0, 0.85, 0]}>
        <boxGeometry args={[1.2, 0.6, 0.9]} />
      </SketchMesh>
      <SketchMesh partId="cold-maker" position={[0.45, -0.95, 0.35]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.25, 0.25, 0.6, 10]} />
      </SketchMesh>
      <Rod from={[0.45, -0.95, 0.35]} to={[0.35, -0.5, -0.35]} radius={0.04} partId="cold-road" />
      <Rod from={[0.35, -0.5, -0.35]} to={[-0.35, 0.5, -0.35]} radius={0.04} partId="cold-road" />
      <Rod from={[-0.35, 0.5, -0.35]} to={[0.35, 1.1, -0.35]} radius={0.04} partId="cold-road" />
      <SketchMesh partId="air-pusher" position={[0, -0.2, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.12, 10]} />
      </SketchMesh>
      <SketchMesh partId="heat-watcher" position={[0.7, 0.15, 0.55]}>
        <boxGeometry args={[0.35, 0.25, 0.2]} />
      </SketchMesh>
      <SketchMesh partId="door-seal" position={[0, 1.2, 0.58]}>
        <boxGeometry args={[1.4, 0.08, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="door-seal" position={[0, -1.2, 0.58]}>
        <boxGeometry args={[1.4, 0.08, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="door-seal" position={[-0.7, 0, 0.58]}>
        <boxGeometry args={[0.08, 2.4, 0.1]} />
      </SketchMesh>
      <SketchMesh partId="door-seal" position={[0.7, 0, 0.58]}>
        <boxGeometry args={[0.08, 2.4, 0.1]} />
      </SketchMesh>
    </group>
  )
}
