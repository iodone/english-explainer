import { SketchMesh, Rod, DraftLine } from './primitives'

/** 消防车 — 侧视：驾驶室、水箱、水泵、水带卷与云梯 */

const wheelXs = [-0.58, 0.28, 0.50]
const ladderRungXs = Array.from({ length: 6 }, (_, k) => -0.15 + k * 0.12)
const hoseRingXs = [-0.10, 0.02, 0.14]
const houseOutline: Array<[number, number, number]> = [
  [0.80, -0.50, 0], [0.80, -0.22, 0], [0.96, -0.22, 0],
  [0.96, -0.50, 0], [0.80, -0.50, 0],
]
const roofOutline: Array<[number, number, number]> = [
  [0.77, -0.22, 0], [0.88, -0.11, 0], [0.98, -0.22, 0], [0.77, -0.22, 0],
]
const smokeRings = [
  { radius: 0.018, x: 0.85, y: 0.08 },
  { radius: 0.024, x: 0.89, y: 0.15 },
].map(({ radius, x, y }) =>
  Array.from({ length: 9 }, (_, k) => {
    const a = (k / 8) * Math.PI * 2
    return [x + radius * Math.cos(a), y + radius * Math.sin(a), 0] as [number, number, number]
  }),
)

export default function FireTruckSketch() {
  return (
    <group>
      {wheelXs.map(x =>
        [-0.16, 0.16].map(z => (
          <group key={`wheel-${x}-${z}`}>
            <SketchMesh partId="turning-wheels" position={[x, -0.40, z]}>
              <torusGeometry args={[0.10, 0.02, 8, 18]} />
            </SketchMesh>
            <SketchMesh partId="turning-wheels" position={[x, -0.40, z]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 0.05, 10]} />
            </SketchMesh>
          </group>
        )),
      )}

      <SketchMesh partId="driver-room" position={[-0.52, -0.18, 0]}>
        <boxGeometry args={[0.56, 0.28, 0.30]} />
      </SketchMesh>
      <SketchMesh partId="driver-room" position={[-0.46, 0.09, 0]}>
        <boxGeometry args={[0.44, 0.26, 0.28]} />
      </SketchMesh>
      <Rod from={[-0.80, -0.04, -0.14]} to={[-0.68, 0.22, -0.14]} radius={0.01} partId="driver-room" />
      <Rod from={[-0.80, -0.04, 0.14]} to={[-0.68, 0.22, 0.14]} radius={0.01} partId="driver-room" />

      <SketchMesh partId="loud-horn" position={[-0.46, 0.245, 0]}>
        <boxGeometry args={[0.12, 0.05, 0.26]} />
      </SketchMesh>

      <SketchMesh position={[0.18, -0.20, 0]}>
        <boxGeometry args={[0.84, 0.24, 0.32]} />
      </SketchMesh>

      <SketchMesh partId="water-tank" position={[0.42, 0.03, 0]}>
        <boxGeometry args={[0.28, 0.22, 0.26]} />
      </SketchMesh>
      <SketchMesh partId="pump-heart" position={[0.62, -0.19, 0]}>
        <boxGeometry args={[0.08, 0.20, 0.24]} />
      </SketchMesh>
      {hoseRingXs.map(x => (
        <SketchMesh key={`hose-${x}`} partId="water-hoses" position={[x, -0.20, 0.18]}>
          <torusGeometry args={[0.09, 0.02, 8, 18]} />
        </SketchMesh>
      ))}

      <Rod from={[-0.18, 0.20, -0.09]} to={[0.55, 0.20, -0.09]} radius={0.012} partId="long-ladder" />
      <Rod from={[-0.18, 0.20, 0.09]} to={[0.55, 0.20, 0.09]} radius={0.012} partId="long-ladder" />
      {ladderRungXs.map(x => (
        <Rod
          key={`rung-${x}`}
          from={[x, 0.20, -0.09]}
          to={[x, 0.20, 0.09]}
          radius={0.008}
          partId="long-ladder"
        />
      ))}
      <Rod from={[0.32, 0.14, 0]} to={[0.32, 0.20, 0]} radius={0.01} partId="long-ladder" />
      <Rod from={[0.52, 0.14, 0]} to={[0.52, 0.20, 0]} radius={0.01} partId="long-ladder" />

      <Rod from={[0.66, -0.15, 0]} to={[0.78, -0.08, 0]} radius={0.008} />
      <Rod from={[0.78, -0.08, 0]} to={[0.85, -0.02, 0]} radius={0.008} />

      <DraftLine points={[[-0.95, -0.50, 0], [0.72, -0.50, 0]]} />
      <DraftLine points={houseOutline} />
      <DraftLine points={roofOutline} />
      <SketchMesh position={[0.88, -0.36, 0]}>
        <boxGeometry args={[0.04, 0.04, 0.01]} />
      </SketchMesh>
      <Rod from={[0.84, -0.11, 0]} to={[0.86, -0.03, 0]} radius={0.006} />
      <Rod from={[0.86, -0.03, 0]} to={[0.84, 0.03, 0]} radius={0.006} />
      <Rod from={[0.90, -0.11, 0]} to={[0.92, -0.05, 0]} radius={0.006} />
      <Rod from={[0.92, -0.05, 0]} to={[0.90, 0, 0]} radius={0.006} />
      {smokeRings.map((points, index) => (
        <DraftLine key={`smoke-${index}`} points={points} />
      ))}
    </group>
  )
}
