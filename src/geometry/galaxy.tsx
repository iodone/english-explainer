import { SketchMesh, Rod, DraftLine } from './primitives'

/** 星系 — 薄盘、旋臂、核球与暗晕 */

const armOne: Array<[number, number]> = [
  [0.2, 0.0],
  [0.201, 0.146],
  [0.096, 0.295],
  [-0.119, 0.366],
  [-0.388, 0.282],
  [-0.597, 0.0],
  [-0.601, -0.437],
  [-0.286, -0.879],
  [0.355, -1.094],
]
const armTwo: Array<[number, number]> = armOne.map(([x, y]) => [-x, -y])
const ringPoints = (radius: number): Array<[number, number, number]> =>
  Array.from({ length: 25 }, (_, j) => {
    const a = (j / 24) * Math.PI * 2
    return [radius * Math.cos(a), radius * Math.sin(a), 0] as [number, number, number]
  })
const rimPoints = ringPoints(1.0)
const midRingPoints = ringPoints(0.75)
const innerRingPoints = ringPoints(0.5)
const dustOne: Array<[number, number]> = [
  [-0.097, 0.3],
  [-0.332, 0.241],
  [-0.527, 0.0],
  [-0.544, -0.396],
  [-0.264, -0.812],
]
const dustTwo: Array<[number, number]> = dustOne.map(([x, y]) => [-x, -y])
const starCloudSpots: Array<[number, number]> = [
  [-0.49, 0.14], [-0.445, 0.17], [-0.525, 0.19],
  [-0.44, -0.66], [-0.395, -0.63], [-0.475, -0.61],
  [0.32, -0.99], [0.365, -0.96], [0.285, -0.94],
  [0.49, -0.14], [0.445, -0.17], [0.525, -0.19],
  [0.44, 0.66], [0.395, 0.63], [0.475, 0.61],
]
const haloSpots: Array<[number, number, number]> = [
  [0.9, 0.9, 0.35], [-0.9, 0.9, 0.35], [0.9, -0.9, 0.35], [-0.9, -0.9, 0.35],
  [0.9, 0.9, -0.35], [-0.9, 0.9, -0.35], [0.9, -0.9, -0.35], [-0.9, -0.9, -0.35],
]
const backgroundStars: Array<[number, number]> = [
  [-1.5, 0.9], [-0.7, 1.3], [0.3, 1.45], [1.2, 1.1], [1.6, 0.3],
  [1.5, -0.8], [0.6, -1.4], [-0.5, -1.35], [-1.4, -0.6],
]
const hereRing: Array<[number, number, number]> = [
  [0.54, -0.22, 0], [0.522, -0.178, 0], [0.48, -0.16, 0], [0.438, -0.178, 0],
  [0.42, -0.22, 0], [0.438, -0.262, 0], [0.48, -0.28, 0], [0.522, -0.262, 0], [0.54, -0.22, 0],
]

export default function GalaxySketch() {
  return (
    <group>
      {/* flat-wheel — 三环与辐条 */}
      {rimPoints.slice(0, -1).map((from, index) => (
        <Rod
          key={`rim-${index}`}
          from={from}
          to={rimPoints[index + 1]}
          radius={0.014}
          partId="flat-wheel"
        />
      ))}
      {midRingPoints.slice(0, -1).map((from, index) => (
        <Rod
          key={`mid-ring-${index}`}
          from={from}
          to={midRingPoints[index + 1]}
          radius={0.008}
          partId="flat-wheel"
        />
      ))}
      {innerRingPoints.slice(0, -1).map((from, index) => (
        <Rod
          key={`inner-ring-${index}`}
          from={from}
          to={innerRingPoints[index + 1]}
          radius={0.008}
          partId="flat-wheel"
        />
      ))}
      {Array.from({ length: 8 }, (_, j) => {
        const a = (j / 8) * Math.PI * 2
        return (
          <Rod
            key={`spoke-${j}`}
            from={[0.5 * Math.cos(a), 0.5 * Math.sin(a), 0]}
            to={[1.0 * Math.cos(a), 1.0 * Math.sin(a), 0]}
            radius={0.006}
            partId="flat-wheel"
          />
        )
      })}

      {/* heart-light — 核球与内核 */}
      <SketchMesh partId="heart-light" position={[0, 0, 0]}>
        <sphereGeometry args={[0.13, 20, 14]} />
      </SketchMesh>
      <SketchMesh partId="heart-light" position={[0, 0, 0]}>
        <sphereGeometry args={[0.06, 16, 10]} />
      </SketchMesh>

      {/* turning-arms — 对数螺线双臂 */}
      {armOne.slice(0, -1).map(([x, y], index) => (
        <Rod
          key={`arm-one-${index}`}
          from={[x, y, 0]}
          to={[armOne[index + 1][0], armOne[index + 1][1], 0]}
          radius={0.012}
          partId="turning-arms"
        />
      ))}
      {armTwo.slice(0, -1).map(([x, y], index) => (
        <Rod
          key={`arm-two-${index}`}
          from={[x, y, 0]}
          to={[armTwo[index + 1][0], armTwo[index + 1][1], 0]}
          radius={0.012}
          partId="turning-arms"
        />
      ))}

      {/* star-clouds — 恒星形成区 */}
      {starCloudSpots.map(([x, y], index) => (
        <SketchMesh key={`cloud-${index}`} partId="star-clouds" position={[x, y, 0]}>
          <sphereGeometry args={[0.022, 10, 8]} />
        </SketchMesh>
      ))}

      {/* dust-rivers — 双侧尘埃带 */}
      {dustOne.slice(0, -1).map(([x, y], index) => (
        <Rod
          key={`dust-one-${index}`}
          from={[x, y, 0]}
          to={[dustOne[index + 1][0], dustOne[index + 1][1], 0]}
          radius={0.006}
          partId="dust-rivers"
        />
      ))}
      {dustTwo.slice(0, -1).map(([x, y], index) => (
        <Rod
          key={`dust-two-${index}`}
          from={[x, y, 0]}
          to={[dustTwo[index + 1][0], dustTwo[index + 1][1], 0]}
          radius={0.006}
          partId="dust-rivers"
        />
      ))}

      {/* old-star-groups — 球状星团晕点 */}
      {haloSpots.map((position, index) => (
        <SketchMesh key={`group-${index}`} partId="old-star-groups" position={position}>
          <sphereGeometry args={[0.025, 10, 8]} />
        </SketchMesh>
      ))}

      {/* hidden-hold — 暗物质晕 */}
      <SketchMesh partId="hidden-hold" position={[0, 0, 0]}>
        <sphereGeometry args={[1.55, 24, 16]} />
      </SketchMesh>

      {/* decor — 背景星与观测位置 */}
      {backgroundStars.map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.03, y, 0], [x + 0.03, y, 0]]} />
          <DraftLine points={[[x, y - 0.03, 0], [x, y + 0.03, 0]]} />
        </group>
      ))}
      <DraftLine points={hereRing} />
      <DraftLine points={[[0.6, -0.3, 0], [0.64, -0.26, 0]]} />
      <DraftLine points={[[0.6, -0.26, 0], [0.64, -0.3, 0]]} />
    </group>
  )
}
