import { SketchMesh, Rod, DraftLine } from './primitives'

/** 摩托车 — 侧视：双轮、车架三角、引擎、把手与排气 */

const frameTriangle: Array<[number, number, number]> = [
  [0.05, -0.06, 0],
  [-0.26, 0.24, 0],
  [-0.58, -0.30, 0],
  [0.05, -0.06, 0],
]

function Wheel({ cx, partId }: { cx: number; partId: string }) {
  return (
    <group>
      <SketchMesh partId={partId} position={[cx, -0.34, 0]}>
        <torusGeometry args={[0.26, 0.03, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId={partId} position={[cx, -0.34, 0]}>
        <sphereGeometry args={[0.045, 10, 8]} />
      </SketchMesh>
      <Rod
        from={[cx - 0.22, -0.34, 0]}
        to={[cx + 0.22, -0.34, 0]}
        radius={0.008}
        partId={partId}
      />
      <Rod
        from={[cx - 0.11, -0.53, 0]}
        to={[cx + 0.11, -0.15, 0]}
        radius={0.008}
        partId={partId}
      />
      <Rod
        from={[cx - 0.11, -0.15, 0]}
        to={[cx + 0.11, -0.53, 0]}
        radius={0.008}
        partId={partId}
      />
    </group>
  )
}

export default function MotorcycleSketch() {
  return (
    <group>
      <Wheel cx={-0.58} partId="back-wheel" />
      <Wheel cx={0.58} partId="round-wheel" />

      <Rod from={[0.44, 0.18, 0]} to={[-0.26, 0.24, 0]} radius={0.016} partId="metal-bones" />
      <Rod from={[0.44, 0.12, 0]} to={[0.05, -0.06, 0]} radius={0.016} partId="metal-bones" />
      {frameTriangle.slice(0, -1).map((from, index) => (
        <Rod
          key={`frame-${index}`}
          from={from}
          to={frameTriangle[index + 1]}
          radius={0.016}
          partId="metal-bones"
        />
      ))}

      <SketchMesh partId="fire-heart" position={[0.06, -0.14, 0]}>
        <boxGeometry args={[0.30, 0.24, 0.18]} />
      </SketchMesh>
      <Rod from={[0.18, -0.06, 0]} to={[0.18, 0.04, 0]} radius={0.006} partId="fire-heart" />
      <Rod from={[0.22, -0.02, 0]} to={[0.22, 0.06, 0]} radius={0.006} partId="fire-heart" />

      <Rod from={[0.44, 0.16, 0]} to={[0.50, 0.32, 0]} radius={0.016} partId="turning-stick" />
      <Rod from={[0.46, 0.30, 0]} to={[0.58, -0.32, 0]} radius={0.012} partId="turning-stick" />
      <Rod from={[0.54, 0.30, 0]} to={[0.58, -0.32, 0]} radius={0.012} partId="turning-stick" />
      <Rod from={[0.46, 0.36, -0.15]} to={[0.46, 0.36, 0.15]} radius={0.012} partId="turning-stick" />
      <SketchMesh partId="turning-stick" position={[0.46, 0.36, -0.16]}>
        <sphereGeometry args={[0.028, 10, 8]} />
      </SketchMesh>
      <SketchMesh partId="turning-stick" position={[0.46, 0.36, 0.16]}>
        <sphereGeometry args={[0.028, 10, 8]} />
      </SketchMesh>

      <Rod from={[0.06, -0.26, 0]} to={[0.02, -0.42, 0]} radius={0.022} partId="smoke-pipe" />
      <Rod from={[0.02, -0.42, 0]} to={[-0.55, -0.46, 0]} radius={0.022} partId="smoke-pipe" />
      <SketchMesh partId="smoke-pipe" position={[-0.58, -0.47, 0]}>
        <sphereGeometry args={[0.04, 10, 8]} />
      </SketchMesh>

      <SketchMesh partId="ride-seat" position={[-0.34, 0.30, 0]}>
        <boxGeometry args={[0.30, 0.06, 0.14]} />
      </SketchMesh>
      <Rod from={[-0.46, 0.30, 0]} to={[-0.56, 0.38, 0]} radius={0.012} partId="ride-seat" />
      <SketchMesh partId="ride-seat" position={[-0.58, 0.40, 0]}>
        <sphereGeometry args={[0.03, 10, 8]} />
      </SketchMesh>

      <DraftLine
        points={[
          [-1.10, -0.62, 0], [-1.00, -0.58, 0], [-0.90, -0.62, 0],
          [-0.80, -0.58, 0], [-0.70, -0.62, 0], [-0.60, -0.58, 0],
          [-0.50, -0.62, 0], [-0.40, -0.58, 0], [-0.30, -0.62, 0],
          [-0.20, -0.58, 0], [-0.10, -0.62, 0], [0, -0.58, 0],
          [0.10, -0.62, 0], [0.20, -0.58, 0], [0.30, -0.62, 0],
          [0.40, -0.58, 0], [0.50, -0.62, 0], [0.60, -0.58, 0],
          [0.70, -0.62, 0], [0.80, -0.58, 0], [0.90, -0.62, 0],
          [1.00, -0.58, 0], [1.10, -0.62, 0],
        ]}
      />
      <DraftLine points={[[-0.95, -0.15, 0], [-1.25, -0.15, 0]]} />
      <DraftLine points={[[-0.95, 0, 0], [-1.25, 0, 0]]} />
      <DraftLine points={[[-0.95, 0.15, 0], [-1.25, 0.15, 0]]} />
      <DraftLine
        points={[
          [1.25, 0.95, 0], [1.20, 1.04, 0], [1.10, 1.04, 0],
          [1.05, 0.95, 0], [1.10, 0.86, 0], [1.20, 0.86, 0], [1.25, 0.95, 0],
        ]}
      />
      <DraftLine
        points={[
          [-1.20, 0.85, 0], [-1.12, 0.90, 0], [-1.05, 0.85, 0],
          [-1.12, 0.80, 0], [-1.20, 0.85, 0],
        ]}
      />
    </group>
  )
}
