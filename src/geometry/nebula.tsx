import { SketchMesh, Rod, DraftLine } from './primitives'

/** 星云 — 太空：气体云团、尘带、原恒星、星风、发光环与老星 */

const dustXs = [-0.48, -0.34, -0.20, -0.06, 0.08, 0.22, 0.36]
const heartOffs: Array<[number, number]> = [
  [0, 0],
  [0.03, 0.02],
  [-0.025, 0.03],
  [0.02, -0.03],
  [-0.03, -0.02],
]
const babyStarCenters: Array<[number, number, number]> = [
  [0.18, 0.02, 0],
  [0.25, -0.06, 0.03],
  [0.14, -0.07, -0.02],
]
const skinDots: Array<[number, number]> = [
  [-0.46, 0.155],
  [-0.50, 0.125],
  [-0.545, 0.10],
  [-0.585, 0.085],
  [-0.62, 0.08],
]
const backgroundStars: Array<[number, number]> = [
  [-0.75, -0.25],
  [0.70, 0.30],
  [0.55, -0.30],
  [-0.60, 0.42],
]

export default function NebulaSketch() {
  return (
    <group>
      <SketchMesh partId="gas-cloud" position={[-0.08, 0.05, 0]} scale={[1.25, 0.85, 1]}>
        <sphereGeometry args={[0.34, 14, 10]} />
      </SketchMesh>
      <SketchMesh partId="gas-cloud" position={[-0.30, 0.18, -0.04]} scale={[1.1, 0.9, 0.9]}>
        <sphereGeometry args={[0.24, 12, 9]} />
      </SketchMesh>
      <SketchMesh partId="gas-cloud" position={[0.02, -0.16, 0.05]} scale={[1.2, 0.8, 0.9]}>
        <sphereGeometry args={[0.20, 12, 9]} />
      </SketchMesh>

      {dustXs.map((x, index) => (
        <SketchMesh key={`dust-${index}`} partId="dust-road" position={[x, -0.02 + x * 0.28, 0]}>
          <sphereGeometry args={[0.02, 8, 6]} />
        </SketchMesh>
      ))}

      {heartOffs.map(([dx, dy], index) => (
        <SketchMesh
          key={`heart-${index}`}
          partId="dark-heart"
          position={[0.14 + dx, -0.12 + dy, 0]}
        >
          <sphereGeometry args={[0.024, 8, 6]} />
        </SketchMesh>
      ))}

      {babyStarCenters.map(([x, y, z], index) => (
        <group key={`baby-star-${index}`}>
          <SketchMesh partId="baby-stars" position={[x, y, z]}>
            <sphereGeometry args={[0.022, 8, 6]} />
          </SketchMesh>
          <DraftLine points={[[x - 0.03, y, z], [x + 0.03, y, z]]} />
          <DraftLine points={[[x, y - 0.03, z], [x, y + 0.03, z]]} />
        </group>
      ))}

      <Rod from={[0.28, 0.04, 0]} to={[0.40, 0.12, 0]} radius={0.003} partId="star-wind" />
      <Rod from={[0.40, 0.12, 0]} to={[0.52, 0.10, 0]} radius={0.003} partId="star-wind" />
      <Rod from={[0.30, -0.04, 0]} to={[0.44, -0.02, 0]} radius={0.003} partId="star-wind" />
      <Rod from={[0.44, -0.02, 0]} to={[0.56, 0.02, 0]} radius={0.003} partId="star-wind" />
      <Rod from={[0.26, -0.12, 0]} to={[0.38, -0.18, 0]} radius={0.003} partId="star-wind" />
      <Rod from={[0.38, -0.18, 0]} to={[0.50, -0.16, 0]} radius={0.003} partId="star-wind" />

      <SketchMesh partId="light-ring" position={[0.20, -0.02, 0]} rotation={[0.5, 0, 0.4]}>
        <torusGeometry args={[0.10, 0.006, 6, 24]} />
      </SketchMesh>

      <SketchMesh partId="old-star" position={[-0.42, 0.18, 0]}>
        <sphereGeometry args={[0.028, 8, 8]} />
      </SketchMesh>
      {skinDots.map(([x, y], index) => (
        <SketchMesh key={`skin-${index}`} partId="old-star" position={[x, y, 0]}>
          <sphereGeometry args={[0.011, 6, 6]} />
        </SketchMesh>
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
