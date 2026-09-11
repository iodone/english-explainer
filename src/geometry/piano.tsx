import { SketchMesh, Rod, DraftLine } from './primitives'

/** 三角钢琴 — 侧视：琴弦、音锤、键盘、琴盖、踏板与琴腿 */

const stringSpecs: Array<[number, number]> = [
  [-0.36, 0.125],
  [-0.24, 0.11],
  [-0.12, 0.095],
  [0.0, 0.08],
  [0.12, 0.065],
]
const hammerXs = [-0.36, -0.24, -0.12, 0, 0.12]
const legPts: Array<[number, number]> = [
  [0.30, 0.05],
  [0.02, -0.04],
  [-0.42, 0.05],
]
const pedalZs = [0.018, -0.018]

export default function PianoSketch() {
  return (
    <group>
      <SketchMesh partId="singing-box" position={[-0.09, 0.06, 0]}>
        <boxGeometry args={[0.66, 0.10, 0.28]} />
      </SketchMesh>
      <SketchMesh partId="singing-box" position={[-0.47, 0.06, 0]}>
        <boxGeometry args={[0.16, 0.10, 0.28]} />
      </SketchMesh>

      {stringSpecs.map(([x, length], index) => (
        <Rod
          key={`string-${index}`}
          from={[x, 0.065, -length]}
          to={[x, 0.065, length]}
          radius={0.0025}
          partId="song-strings"
        />
      ))}

      {hammerXs.map((x, index) => (
        <SketchMesh key={`hammer-${index}`} partId="jump-hammers" position={[x, 0.042, 0]}>
          <boxGeometry args={[0.018, 0.018, 0.018]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="play-keys" position={[0.31, 0.075, 0]}>
        <boxGeometry args={[0.14, 0.025, 0.30]} />
      </SketchMesh>
      <SketchMesh partId="play-keys" position={[0.30, 0.092, 0]}>
        <boxGeometry args={[0.12, 0.008, 0.14]} />
      </SketchMesh>

      <SketchMesh partId="wood-lid" position={[-0.15, 0.195, 0]} rotation={[0, 0, 0.28]}>
        <boxGeometry args={[0.62, 0.012, 0.26]} />
      </SketchMesh>
      <Rod from={[-0.28, 0.115, 0.06]} to={[-0.315, 0.17, 0.06]} radius={0.004} partId="wood-lid" />

      {legPts.map(([x, z], index) => (
        <Rod
          key={`leg-${index}`}
          from={[x, 0.01, z]}
          to={[x, -0.38, z]}
          radius={0.012}
          partId="wood-legs"
        />
      ))}

      <SketchMesh partId="foot-pedals" position={[0.27, -0.335, 0.02]}>
        <boxGeometry args={[0.11, 0.018, 0.07]} />
      </SketchMesh>
      {pedalZs.map((z, index) => (
        <SketchMesh key={`pedal-${index}`} partId="foot-pedals" position={[0.27, -0.324, z]}>
          <boxGeometry args={[0.05, 0.006, 0.022]} />
        </SketchMesh>
      ))}

      <DraftLine points={[[-1.0, -0.38, 0], [1.0, -0.38, 0]]} />
      <SketchMesh position={[0.54, -0.23, 0]}>
        <boxGeometry args={[0.18, 0.04, 0.12]} />
      </SketchMesh>
      <Rod from={[0.475, -0.25, 0.04]} to={[0.475, -0.38, 0.04]} radius={0.008} />
      <Rod from={[0.605, -0.25, 0.04]} to={[0.605, -0.38, 0.04]} radius={0.008} />
      <DraftLine points={[[-0.20, 0.24, 0], [-0.12, 0.30, 0], [-0.04, 0.27, 0]]} />
      <DraftLine points={[[-0.02, 0.33, 0], [0.06, 0.38, 0], [0.13, 0.35, 0]]} />
    </group>
  )
}
