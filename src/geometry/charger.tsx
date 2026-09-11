import { SketchMesh, Rod, DraftLine } from './primitives'

/** 充电器 — 正视夜景：插头、电线、适配器与手机电量条 */

const wirePtsA: Array<[number, number, number]> = [
  [-0.24, 0.13, 0], [-0.14, 0.10, 0], [-0.05, 0.02, 0],
  [0.05, -0.08, 0], [0.18, -0.12, 0], [0.25, -0.15, 0],
]
const wirePtsB: Array<[number, number, number]> = [
  [0.39, -0.15, 0], [0.46, -0.18, 0], [0.52, -0.22, 0],
]

export default function ChargerSketch() {
  return (
    <group>
      <SketchMesh position={[-0.485, 0, 0]}>
        <boxGeometry args={[0.05, 1.0, 0.55]} />
      </SketchMesh>

      <SketchMesh partId="wall-socket" position={[-0.455, 0.10, 0]}>
        <boxGeometry args={[0.025, 0.15, 0.11]} />
      </SketchMesh>
      <SketchMesh partId="wall-socket" position={[-0.445, 0.135, -0.028]}>
        <boxGeometry args={[0.02, 0.035, 0.014]} />
      </SketchMesh>
      <SketchMesh partId="wall-socket" position={[-0.445, 0.135, 0.028]}>
        <boxGeometry args={[0.02, 0.035, 0.014]} />
      </SketchMesh>

      <Rod from={[-0.36, 0.135, -0.028]} to={[-0.45, 0.135, -0.028]} radius={0.008} partId="metal-legs" />
      <Rod from={[-0.36, 0.135, 0.028]} to={[-0.45, 0.135, 0.028]} radius={0.008} partId="metal-legs" />

      <SketchMesh partId="wall-plug" position={[-0.30, 0.10, 0]}>
        <boxGeometry args={[0.13, 0.10, 0.08]} />
      </SketchMesh>

      {wirePtsA.slice(0, -1).map((from, index) => (
        <Rod
          key={`wire-a-${index}`}
          from={from}
          to={wirePtsA[index + 1]}
          radius={0.009}
          partId="power-wire"
        />
      ))}
      {wirePtsB.slice(0, -1).map((from, index) => (
        <Rod
          key={`wire-b-${index}`}
          from={from}
          to={wirePtsB[index + 1]}
          radius={0.009}
          partId="power-wire"
        />
      ))}

      <SketchMesh partId="safe-box" position={[0.32, -0.15, 0]}>
        <boxGeometry args={[0.15, 0.10, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="safe-box" position={[0.365, -0.13, 0.033]}>
        <sphereGeometry args={[0.012, 8, 8]} />
      </SketchMesh>

      <SketchMesh partId="small-phone" position={[0.57, -0.22, 0]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[0.16, 0.32, 0.025]} />
      </SketchMesh>
      <SketchMesh partId="battery-bar" position={[0.57, -0.12, 0.016]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[0.11, 0.048, 0.005]} />
      </SketchMesh>
      <SketchMesh partId="battery-bar" position={[0.558, -0.12, 0.016]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[0.085, 0.032, 0.007]} />
      </SketchMesh>
      <SketchMesh partId="battery-bar" position={[0.632, -0.12, 0.016]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[0.012, 0.03, 0.005]} />
      </SketchMesh>

      <DraftLine points={[[0.15, -0.38, 0], [0.9, -0.38, 0]]} />
      <SketchMesh position={[0.55, 0.35, 0]}>
        <torusGeometry args={[0.05, 0.012, 8, 20, 4.5]} />
      </SketchMesh>
      <DraftLine points={[[0.20, 0.30, 0], [0.20, 0.36, 0]]} />
      <DraftLine points={[[0.17, 0.33, 0], [0.23, 0.33, 0]]} />
      <DraftLine points={[[0.35, 0.46, 0], [0.35, 0.52, 0]]} />
      <DraftLine points={[[0.32, 0.49, 0], [0.38, 0.49, 0]]} />
    </group>
  )
}
