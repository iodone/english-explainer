import { SketchMesh, Rod, DraftLine } from './primitives'

/** 公交车 — 侧视：长车身、侧窗、车门、司机座与后置引擎 */

const wheelXs = [0.33, 0, -0.33]

export default function BusSketch() {
  return (
    <group>
      <SketchMesh partId="long-body" position={[0, -0.10, 0]}>
        <boxGeometry args={[0.95, 0.30, 0.30]} />
      </SketchMesh>
      <SketchMesh partId="long-body" position={[0, 0.0625, 0]}>
        <boxGeometry args={[0.97, 0.025, 0.32]} />
      </SketchMesh>

      <SketchMesh partId="top-windows" position={[-0.06, -0.02, 0.152]}>
        <boxGeometry args={[0.78, 0.13, 0.012]} />
      </SketchMesh>
      <SketchMesh partId="top-windows" position={[0.462, -0.06, 0]} rotation={[0, 0, -0.15]}>
        <boxGeometry args={[0.015, 0.16, 0.22]} />
      </SketchMesh>

      <SketchMesh partId="front-door" position={[0.35, -0.13, 0.158]}>
        <boxGeometry args={[0.022, 0.22, 0.015]} />
      </SketchMesh>
      <SketchMesh partId="front-door" position={[0.39, -0.13, 0.158]}>
        <boxGeometry args={[0.022, 0.22, 0.015]} />
      </SketchMesh>

      <SketchMesh partId="driver-seat" position={[0.33, -0.12, 0.05]}>
        <boxGeometry args={[0.07, 0.035, 0.07]} />
      </SketchMesh>
      <SketchMesh partId="driver-seat" position={[0.295, -0.06, 0.05]}>
        <boxGeometry args={[0.03, 0.11, 0.07]} />
      </SketchMesh>
      <SketchMesh partId="driver-seat" position={[0.38, -0.08, 0.05]} rotation={[1.2, 0, 0]}>
        <torusGeometry args={[0.03, 0.006, 6, 16]} />
      </SketchMesh>

      <Rod from={[0.24, 0.03, 0.02]} to={[0.24, -0.01, 0.02]} radius={0.003} partId="stop-bell" />
      <SketchMesh partId="stop-bell" position={[0.24, -0.035, 0.02]}>
        <sphereGeometry args={[0.026, 10, 8]} />
      </SketchMesh>
      <SketchMesh partId="stop-bell" position={[0.24, -0.065, 0.02]}>
        <sphereGeometry args={[0.008, 8, 8]} />
      </SketchMesh>

      {wheelXs.map(x => (
        <SketchMesh key={`wheel-${x}`} partId="wheel-set" position={[x, -0.30, 0]}>
          <torusGeometry args={[0.08, 0.026, 8, 18]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="back-engine" position={[-0.35, -0.18, 0]}>
        <boxGeometry args={[0.15, 0.11, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="back-engine" position={[-0.477, -0.16, 0]}>
        <boxGeometry args={[0.012, 0.12, 0.16]} />
      </SketchMesh>

      <DraftLine points={[[-1.0, -0.38, 0], [1.0, -0.38, 0]]} />
      <Rod from={[0.78, -0.38, 0]} to={[0.78, -0.10, 0]} radius={0.006} />
      <SketchMesh position={[0.78, -0.075, 0]}>
        <boxGeometry args={[0.11, 0.055, 0.008]} />
      </SketchMesh>
      <DraftLine points={[[-0.94, -0.38, 0], [-0.88, -0.25, 0], [-0.82, -0.38, 0]]} />
      <DraftLine points={[[-0.88, -0.25, 0], [-0.82, -0.30, 0], [-0.88, -0.38, 0]]} />
      <DraftLine
        points={[[-0.60, 0.35, 0], [-0.54, 0.40, 0], [-0.48, 0.35, 0], [-0.54, 0.30, 0], [-0.60, 0.35, 0]]}
      />
      <DraftLine
        points={[[0.20, 0.45, 0], [0.26, 0.50, 0], [0.32, 0.45, 0], [0.26, 0.40, 0], [0.20, 0.45, 0]]}
      />
    </group>
  )
}
