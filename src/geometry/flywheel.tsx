import { SketchMesh, Rod, DraftLine } from './primitives'

/** 飞轮储能 — 正视：真空箱、重轮、磁浮环、电机与支架 */

const motionArcs: Array<[number, number, number, number]> = [
  [0.270, 0.093, 0.229, 0.181],
  [0.198, 0.218, 0.118, 0.274],
  [0.072, 0.291, -0.024, 0.300],
]

export default function FlywheelSketch() {
  return (
    <group>
      <SketchMesh partId="air-free-box" position={[0, 0.02, 0]}>
        <boxGeometry args={[0.66, 0.66, 0.40]} />
      </SketchMesh>

      <SketchMesh partId="heavy-wheel" position={[0, 0.02, 0]}>
        <torusGeometry args={[0.24, 0.035, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="heavy-wheel" position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.08, 12]} />
      </SketchMesh>
      <Rod from={[0, 0.02, 0]} to={[0.17, 0.19, 0]} radius={0.012} partId="heavy-wheel" />
      <Rod from={[0, 0.02, 0]} to={[-0.17, 0.19, 0]} radius={0.012} partId="heavy-wheel" />
      <Rod from={[0, 0.02, 0]} to={[-0.17, -0.15, 0]} radius={0.012} partId="heavy-wheel" />
      <Rod from={[0, 0.02, 0]} to={[0.17, -0.15, 0]} radius={0.012} partId="heavy-wheel" />

      <SketchMesh position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.52, 12]} />
      </SketchMesh>

      <SketchMesh partId="hold-rings" position={[0, 0.02, 0.23]}>
        <torusGeometry args={[0.055, 0.012, 8, 18]} />
      </SketchMesh>
      <SketchMesh partId="hold-rings" position={[0, 0.02, -0.23]}>
        <torusGeometry args={[0.055, 0.012, 8, 18]} />
      </SketchMesh>

      <SketchMesh partId="spin-motor" position={[0.42, 0.02, 0]}>
        <boxGeometry args={[0.16, 0.16, 0.16]} />
      </SketchMesh>
      <Rod from={[0.42, 0.02, 0.08]} to={[0.05, 0.02, 0.24]} radius={0.01} partId="spin-motor" />

      <SketchMesh partId="air-puller" position={[0.34, 0.46, 0]}>
        <boxGeometry args={[0.10, 0.10, 0.10]} />
      </SketchMesh>
      <Rod from={[0.34, 0.41, 0]} to={[0.16, 0.35, 0]} radius={0.008} partId="air-puller" />

      <Rod from={[0.50, -0.06, 0]} to={[0.62, -0.22, 0]} radius={0.008} partId="power-lines" />
      <Rod from={[0.62, -0.22, 0]} to={[0.70, -0.34, 0]} radius={0.008} partId="power-lines" />
      <Rod from={[0.70, -0.34, 0]} to={[0.70, -0.62, 0]} radius={0.008} partId="power-lines" />

      <Rod from={[-0.33, -0.31, 0]} to={[-0.44, -0.62, 0]} radius={0.012} partId="stand-legs" />
      <Rod from={[-0.33, -0.31, 0]} to={[-0.22, -0.62, 0]} radius={0.012} partId="stand-legs" />
      <Rod from={[0.33, -0.31, 0]} to={[0.44, -0.62, 0]} radius={0.012} partId="stand-legs" />
      <Rod from={[0.33, -0.31, 0]} to={[0.22, -0.62, 0]} radius={0.012} partId="stand-legs" />

      {motionArcs.map(([x1, y1, x2, y2], index) => (
        <Rod key={`motion-${index}`} from={[x1, y1, 0]} to={[x2, y2, 0]} radius={0.006} />
      ))}
      <DraftLine points={[[-0.60, -0.62, 0], [0.80, -0.62, 0]]} />
    </group>
  )
}
