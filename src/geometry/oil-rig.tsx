import { SketchMesh, Rod, DraftLine } from './primitives'

/** 海上钻井平台 — 侧视：导管腿、甲板、井架、火炬臂与吊机 */

const legXs = [-0.18, 0.18]
const waveArcs: Array<Array<[number, number, number]>> = [
  [[-0.90, -0.05, 0], [-0.75, -0.02, 0], [-0.60, -0.05, 0]],
  [[-0.40, -0.05, 0], [-0.25, -0.02, 0], [-0.10, -0.05, 0]],
  [[0.10, -0.05, 0], [0.25, -0.02, 0], [0.40, -0.05, 0]],
]

export default function OilRigSketch() {
  return (
    <group>
      {legXs.map(x => (
        <group key={`legs-${x}`}>
          <Rod from={[x - 0.06, -0.52, 0]} to={[x - 0.02, -0.02, 0]} radius={0.012} partId="sea-legs" />
          <Rod from={[x + 0.06, -0.52, 0]} to={[x + 0.02, -0.02, 0]} radius={0.012} partId="sea-legs" />
          <Rod from={[x - 0.05, -0.40, 0]} to={[x + 0.05, -0.18, 0]} radius={0.005} partId="sea-legs" />
          <Rod from={[x + 0.05, -0.40, 0]} to={[x - 0.05, -0.18, 0]} radius={0.005} partId="sea-legs" />
        </group>
      ))}

      <SketchMesh partId="work-floor" position={[0, 0, 0]}>
        <boxGeometry args={[0.64, 0.05, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="work-floor" position={[0, -0.055, 0]}>
        <boxGeometry args={[0.58, 0.035, 0.22]} />
      </SketchMesh>

      <SketchMesh partId="worker-home" position={[-0.20, 0.09, 0]}>
        <boxGeometry args={[0.18, 0.13, 0.16]} />
      </SketchMesh>
      <SketchMesh partId="worker-home" position={[-0.20, 0.11, 0.082]}>
        <boxGeometry args={[0.14, 0.025, 0.008]} />
      </SketchMesh>
      <SketchMesh partId="worker-home" position={[-0.20, 0.165, 0]}>
        <boxGeometry args={[0.20, 0.02, 0.18]} />
      </SketchMesh>

      <Rod from={[-0.05, 0.025, 0]} to={[0.05, 0.46, 0]} radius={0.008} partId="drill-tower" />
      <Rod from={[0.15, 0.025, 0]} to={[0.05, 0.46, 0]} radius={0.008} partId="drill-tower" />
      <Rod from={[-0.05, 0.025, -0.08]} to={[0.05, 0.46, -0.08]} radius={0.006} partId="drill-tower" />
      <Rod from={[0.15, 0.025, -0.08]} to={[0.05, 0.46, -0.08]} radius={0.006} partId="drill-tower" />
      <Rod from={[-0.01, 0.22, 0]} to={[0.11, 0.10, 0]} radius={0.004} partId="drill-tower" />
      <Rod from={[0.11, 0.22, 0]} to={[-0.01, 0.10, 0]} radius={0.004} partId="drill-tower" />
      <SketchMesh partId="drill-tower" position={[0.05, 0.485, -0.04]}>
        <boxGeometry args={[0.07, 0.05, 0.10]} />
      </SketchMesh>

      <Rod from={[0.05, 0.40, 0]} to={[0.05, -0.52, 0]} radius={0.010} partId="drill-pipe" />
      <SketchMesh partId="drill-pipe" position={[0.05, 0.22, 0]}>
        <boxGeometry args={[0.06, 0.05, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="drill-pipe" position={[0.05, -0.50, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.05, 0.06, 0.05]} />
      </SketchMesh>

      <Rod from={[-0.30, 0.03, 0]} to={[-0.58, 0.30, 0]} radius={0.009} partId="fire-tower" />
      <Rod from={[-0.30, 0.03, 0]} to={[-0.50, 0.05, 0]} radius={0.004} partId="fire-tower" />
      <SketchMesh partId="fire-tower" position={[-0.60, 0.335, 0]}>
        <sphereGeometry args={[0.035, 10, 8]} />
      </SketchMesh>

      <SketchMesh partId="load-crane" position={[0.26, 0.07, 0]}>
        <boxGeometry args={[0.06, 0.09, 0.08]} />
      </SketchMesh>
      <Rod from={[0.26, 0.115, 0]} to={[0.52, 0.27, 0]} radius={0.007} partId="load-crane" />
      <Rod from={[0.26, 0.12, 0]} to={[0.40, 0.20, 0]} radius={0.004} partId="load-crane" />
      <Rod from={[0.52, 0.27, 0]} to={[0.52, 0.12, 0]} radius={0.003} partId="load-crane" />
      <SketchMesh partId="load-crane" position={[0.52, 0.105, 0]}>
        <boxGeometry args={[0.03, 0.03, 0.03]} />
      </SketchMesh>

      <DraftLine points={[[-1.05, -0.05, 0], [1.05, -0.05, 0]]} />
      {waveArcs.map((points, index) => (
        <DraftLine key={`wave-${index}`} points={points} />
      ))}
      <DraftLine points={[[-1.05, -0.52, 0], [1.05, -0.52, 0]]} />
      <DraftLine points={[[-0.80, -0.52, 0], [-0.74, -0.47, 0], [-0.68, -0.52, 0]]} />
      <DraftLine points={[[-0.20, -0.52, 0], [-0.14, -0.47, 0], [-0.08, -0.52, 0]]} />
      <SketchMesh position={[0.62, -0.075, 0]}>
        <boxGeometry args={[0.20, 0.05, 0.10]} />
      </SketchMesh>
      <SketchMesh position={[0.65, -0.02, 0]}>
        <boxGeometry args={[0.08, 0.05, 0.09]} />
      </SketchMesh>
      <Rod from={[0.56, -0.05, 0]} to={[0.56, 0.05, 0]} radius={0.004} />
      <DraftLine
        points={[[-0.80, 0.35, 0], [-0.74, 0.40, 0], [-0.68, 0.35, 0], [-0.74, 0.30, 0], [-0.80, 0.35, 0]]}
      />
      <DraftLine
        points={[[0.20, 0.55, 0], [0.26, 0.60, 0], [0.32, 0.55, 0], [0.26, 0.50, 0], [0.20, 0.55, 0]]}
      />
    </group>
  )
}
