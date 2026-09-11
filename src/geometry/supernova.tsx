import { SketchMesh, Rod, DraftLine } from './primitives'

/** 超新星 — 太空：铁核、爆发芒线、冲击环、抛射碎块与残尘新星 */

const heartDots: Array<[number, number]> = [
  [0.022, 0.028],
  [-0.024, 0.012],
  [0.012, -0.026],
]
const burstAngles = [0.2, 0.9, 1.5, 2.2, 2.9, 3.6, 4.3, 5.0]
const waveAngles = [0.3, 1.35, 2.4, 3.45, 4.5, 5.55]
const bitPts: Array<[number, number, number]> = [
  [0.30, 0.22, 0.05],
  [-0.33, 0.18, -0.04],
  [0.24, -0.26, 0.06],
  [-0.28, -0.24, -0.05],
  [0.38, -0.05, -0.03],
  [-0.40, 0.02, 0.04],
  [0.10, 0.34, -0.05],
]
const newStarCenters: Array<[number, number, number]> = [
  [0.30, -0.14, 0],
  [0.40, -0.20, 0.03],
  [0.34, -0.08, -0.02],
]
const backgroundStars: Array<[number, number]> = [
  [-0.75, 0.35],
  [-0.70, -0.30],
  [0.72, 0.32],
  [0.65, -0.32],
]

export default function SupernovaSketch() {
  return (
    <group>
      <SketchMesh partId="iron-heart" position={[0, 0.02, 0]}>
        <sphereGeometry args={[0.035, 10, 8]} />
      </SketchMesh>
      {heartDots.map(([x, y], index) => (
        <SketchMesh key={`heart-dot-${index}`} partId="iron-heart" position={[x, 0.02 + y, 0]}>
          <sphereGeometry args={[0.014, 8, 6]} />
        </SketchMesh>
      ))}

      {burstAngles.map((angle, index) => (
        <Rod
          key={`burst-${index}`}
          from={[0.06 * Math.cos(angle), 0.02 + 0.06 * Math.sin(angle), 0]}
          to={[0.28 * Math.cos(angle), 0.02 + 0.28 * Math.sin(angle), 0]}
          radius={0.004}
          partId="big-flash"
        />
      ))}

      <SketchMesh partId="flash-rings" position={[0, 0.02, 0]} rotation={[0.4, 0, 0.2]}>
        <torusGeometry args={[0.16, 0.005, 6, 24]} />
      </SketchMesh>
      <SketchMesh partId="flash-rings" position={[0, 0.02, 0]} rotation={[-0.3, 0, 0.5]}>
        <torusGeometry args={[0.24, 0.005, 6, 24]} />
      </SketchMesh>

      {waveAngles.map((angle, index) => (
        <group key={`wave-${index}`}>
          <SketchMesh
            partId="push-waves"
            position={[0.36 * Math.cos(angle), 0.02 + 0.36 * Math.sin(angle), 0]}
          >
            <sphereGeometry args={[0.012, 8, 6]} />
          </SketchMesh>
          <SketchMesh
            partId="push-waves"
            position={[
              0.46 * Math.cos(angle + 0.5),
              0.02 + 0.46 * Math.sin(angle + 0.5),
              0,
            ]}
          >
            <sphereGeometry args={[0.010, 8, 6]} />
          </SketchMesh>
        </group>
      ))}

      {bitPts.map(([x, y, z], index) => (
        <SketchMesh
          key={`bit-${index}`}
          partId="flying-bits"
          position={[x, y, z]}
          rotation={[x * 9, y * 9, z * 9]}
        >
          <boxGeometry args={[0.028, 0.028, 0.028]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="star-dust" position={[0.30, -0.16, 0]} scale={[1.3, 0.8, 0.9]}>
        <sphereGeometry args={[0.16, 12, 9]} />
      </SketchMesh>
      <SketchMesh partId="star-dust" position={[0.44, -0.10, -0.03]} scale={[1.1, 0.9, 0.9]}>
        <sphereGeometry args={[0.12, 10, 8]} />
      </SketchMesh>
      <SketchMesh partId="star-dust" position={[0.36, -0.26, 0.04]} scale={[1.2, 0.7, 0.9]}>
        <sphereGeometry args={[0.10, 10, 8]} />
      </SketchMesh>

      {newStarCenters.map(([x, y, z], index) => (
        <group key={`new-star-${index}`}>
          <SketchMesh partId="new-stars" position={[x, y, z]}>
            <sphereGeometry args={[0.02, 8, 6]} />
          </SketchMesh>
          <DraftLine points={[[x - 0.03, y, z], [x + 0.03, y, z]]} />
          <DraftLine points={[[x, y - 0.03, z], [x, y + 0.03, z]]} />
        </group>
      ))}

      {backgroundStars.map(([x, y], index) => (
        <group key={`background-star-${index}`}>
          <DraftLine points={[[x - 0.025, y, 0], [x + 0.025, y, 0]]} />
          <DraftLine points={[[x, y - 0.025, 0], [x, y + 0.025, 0]]} />
        </group>
      ))}
    </group>
  )
}
