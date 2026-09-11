import { SketchMesh, Rod, DraftLine } from './primitives'

/** 波浪能 — 海面浮动摆体、铰链、发电机、海床锚与海缆 */

const landLinePath: Array<[number, number, number]> = [
  [0.30, 0.28, 0], [0.55, -0.58, 0], [1.30, -0.58, 0], [1.28, 0.40, 0],
]
const seaSurface = Array.from({ length: 15 }, (_, k) => {
  const x = -1.35 + k * 0.1929
  return [x, 0.35 + 0.06 * Math.sin(k * 0.9), 0] as [number, number, number]
})
const seaFloor = Array.from({ length: 13 }, (_, k) => {
  const x = -1.35 + k * 0.225
  return [x, -0.75 + 0.03 * Math.sin(k * 1.3), 0] as [number, number, number]
})
const sunCircle = Array.from({ length: 9 }, (_, k) => {
  const a = (k / 7) * Math.PI * 2
  return [-1.15 + 0.08 * Math.cos(a), 0.95 + 0.08 * Math.sin(a), 0] as [number, number, number]
})
const rockOutline: Array<[number, number, number]> = [
  [1.10, -0.35, 0], [1.28, 0.42, 0], [1.44, -0.35, 0], [1.10, -0.35, 0],
]
const houseOutline: Array<[number, number, number]> = [
  [1.17, 0.42, 0], [1.17, 0.60, 0], [1.39, 0.60, 0], [1.39, 0.42, 0], [1.17, 0.42, 0],
]
const roofOutline: Array<[number, number, number]> = [
  [1.17, 0.60, 0], [1.28, 0.68, 0], [1.39, 0.60, 0], [1.17, 0.60, 0],
]

export default function WavePowerSketch() {
  return (
    <group>
      <SketchMesh partId="sea-rider" position={[-0.42, 0.36, 0]}>
        <sphereGeometry args={[0.17, 14, 10]} />
      </SketchMesh>
      <SketchMesh partId="sea-rider" position={[-0.20, 0.36, 0]}>
        <boxGeometry args={[0.36, 0.22, 0.24]} />
      </SketchMesh>
      <Rod from={[-0.02, 0.36, -0.12]} to={[0.10, 0.36, 0]} radius={0.014} partId="sea-rider" />
      <Rod from={[-0.02, 0.36, 0.12]} to={[0.10, 0.36, 0]} radius={0.014} partId="sea-rider" />

      <SketchMesh partId="wave-walls" position={[-0.42, 0.36, -0.128]}>
        <boxGeometry args={[0.20, 0.19, 0.014]} />
      </SketchMesh>
      <SketchMesh partId="wave-walls" position={[-0.42, 0.36, 0.128]}>
        <boxGeometry args={[0.20, 0.19, 0.014]} />
      </SketchMesh>
      <Rod from={[-0.52, 0.24, 0]} to={[-0.60, 0.36, 0]} radius={0.014} partId="wave-walls" />
      <Rod from={[-0.60, 0.36, 0]} to={[-0.52, 0.48, 0]} radius={0.014} partId="wave-walls" />

      <SketchMesh partId="turn-pin" position={[0.12, 0.36, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.032, 0.032, 0.52, 10]} />
      </SketchMesh>
      <SketchMesh partId="turn-pin" position={[0.12, 0.36, -0.26]}>
        <sphereGeometry args={[0.05, 10, 8]} />
      </SketchMesh>
      <SketchMesh partId="turn-pin" position={[0.12, 0.36, 0.26]}>
        <sphereGeometry args={[0.05, 10, 8]} />
      </SketchMesh>

      <SketchMesh partId="power-maker" position={[0.30, 0.36, 0]}>
        <boxGeometry args={[0.15, 0.15, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="power-maker" position={[0.30, 0.36, 0.10]}>
        <torusGeometry args={[0.055, 0.012, 6, 16]} />
      </SketchMesh>
      <Rod from={[0.12, 0.36, 0.10]} to={[0.245, 0.36, 0.10]} radius={0.012} partId="power-maker" />

      <Rod from={[0.12, 0.36, -0.26]} to={[0.50, -0.60, -0.12]} radius={0.02} partId="long-arm" />
      <Rod from={[0.12, 0.36, 0.26]} to={[0.50, -0.60, 0.12]} radius={0.02} partId="long-arm" />
      <Rod from={[0.50, -0.60, -0.12]} to={[0.50, -0.60, 0.12]} radius={0.016} partId="long-arm" />

      <SketchMesh partId="bed-plate" position={[0.50, -0.675, 0]}>
        <boxGeometry args={[0.42, 0.15, 0.32]} />
      </SketchMesh>
      <SketchMesh partId="bed-plate" position={[0.36, -0.58, -0.14]}>
        <sphereGeometry args={[0.07, 10, 8]} />
      </SketchMesh>
      <SketchMesh partId="bed-plate" position={[0.36, -0.58, 0.14]}>
        <sphereGeometry args={[0.07, 10, 8]} />
      </SketchMesh>

      {landLinePath.slice(0, -1).map((from, index) => (
        <Rod
          key={`land-line-${index}`}
          from={from}
          to={landLinePath[index + 1]}
          radius={0.012}
          partId="land-line"
        />
      ))}

      <DraftLine points={seaSurface} />
      <DraftLine points={seaFloor} />
      <DraftLine points={rockOutline} />
      <DraftLine points={houseOutline} />
      <DraftLine points={roofOutline} />
      <DraftLine points={[[1.22, 0.50, 0], [1.34, 0.50, 0]]} />
      <DraftLine points={[[1.28, 0.44, 0], [1.28, 0.56, 0]]} />
      <DraftLine points={[[-1.01, 0.46, 0], [-0.90, 0.50, 0], [-1.00, 0.54, 0]]} />
      <DraftLine points={[[-1.21, 0.41, 0], [-1.10, 0.45, 0], [-1.20, 0.49, 0]]} />
      <DraftLine points={sunCircle} />
      <DraftLine points={[[-1.29, 0.95, 0], [-1.36, 0.95, 0]]} />
      <DraftLine points={[[-0.94, 0.95, 0], [-0.87, 0.95, 0]]} />
    </group>
  )
}
