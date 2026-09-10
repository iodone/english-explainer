import { SketchMesh, Rod, DraftLine } from './primitives'

/** 地球 — 分层洋葱、海陆面、磁场与日风偏转 */

const oceanSpheres: Array<{
  radius: number
  widthSegments: number
  heightSegments: number
  position: [number, number, number]
}> = [
  { radius: 0.13, widthSegments: 16, heightSegments: 12, position: [0.42, 0.12, 0.4] },
  { radius: 0.12, widthSegments: 16, heightSegments: 12, position: [-0.5, -0.05, 0.33] },
  { radius: 0.11, widthSegments: 14, heightSegments: 10, position: [-0.05, -0.5, 0.33] },
]

const landSpheres: Array<{
  radius: number
  widthSegments: number
  heightSegments: number
  position: [number, number, number]
}> = [
  { radius: 0.07, widthSegments: 12, heightSegments: 10, position: [0.35, 0.42, 0.3] },
  { radius: 0.07, widthSegments: 12, heightSegments: 10, position: [-0.42, 0.35, 0.25] },
  { radius: 0.065, widthSegments: 12, heightSegments: 10, position: [-0.3, -0.45, 0.32] },
  { radius: 0.06, widthSegments: 12, heightSegments: 10, position: [0.15, -0.5, 0.31] },
]

const rightOuterFieldPoints: Array<[number, number, number]> = [
  [0.08, 0.76, 0],
  [0.4, 0.68, 0],
  [0.72, 0.45, 0],
  [1.05, 0, 0],
  [0.72, -0.45, 0],
  [0.4, -0.68, 0],
  [0.08, -0.76, 0],
]

const rightInnerFieldPoints: Array<[number, number, number]> = [
  [0.1, 0.72, 0],
  [0.38, 0.6, 0],
  [0.63, 0.36, 0],
  [0.88, 0, 0],
  [0.63, -0.36, 0],
  [0.38, -0.6, 0],
  [0.1, -0.72, 0],
]

const backgroundStars: Array<[number, number]> = [
  [-2.3, 1.25],
  [-2.45, -0.8],
  [1.9, -1.1],
  [2.2, 0.9],
]

export default function EarthSketch() {
  return (
    <group>
      {/* stone-skin — 外层石壳 */}
      <SketchMesh partId="stone-skin" position={[0, 0, 0]}>
        <sphereGeometry args={[0.62, 26, 20]} />
      </SketchMesh>

      {/* hot-middle — 缓慢流动的热幔 */}
      <SketchMesh partId="hot-middle" position={[0, 0, 0]}>
        <sphereGeometry args={[0.4, 22, 16]} />
      </SketchMesh>

      {/* turning-heart — 外核与内核 */}
      <SketchMesh partId="turning-heart" position={[0, 0, 0]}>
        <sphereGeometry args={[0.18, 16, 12]} />
      </SketchMesh>
      <SketchMesh partId="turning-heart" position={[0, 0, 0]}>
        <sphereGeometry args={[0.09, 12, 10]} />
      </SketchMesh>

      {/* blue-water — 海洋贴面 */}
      {oceanSpheres.map((ocean, index) => (
        <SketchMesh key={`ocean-${index}`} partId="blue-water" position={ocean.position}>
          <sphereGeometry args={[ocean.radius, ocean.widthSegments, ocean.heightSegments]} />
        </SketchMesh>
      ))}

      {/* dry-lands — 半没陆地 */}
      {landSpheres.map((land, index) => (
        <SketchMesh key={`land-${index}`} partId="dry-lands" position={land.position}>
          <sphereGeometry args={[land.radius, land.widthSegments, land.heightSegments]} />
        </SketchMesh>
      ))}

      {/* air-skin — 大气包层 */}
      <SketchMesh partId="air-skin" position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 24, 18]} />
      </SketchMesh>

      {/* power-field — 左右偶极场线 */}
      {[
        { key: 'right-outer', points: rightOuterFieldPoints },
        { key: 'right-inner', points: rightInnerFieldPoints },
        {
          key: 'left-outer',
          points: rightOuterFieldPoints.map(([x, y, z]) => [-x, y, z] as [number, number, number]),
        },
        {
          key: 'left-inner',
          points: rightInnerFieldPoints.map(([x, y, z]) => [-x, y, z] as [number, number, number]),
        },
      ].map(({ key, points }) =>
        points.slice(0, -1).map((from, index) => (
          <Rod
            key={`${key}-${index}`}
            from={from}
            to={points[index + 1]}
            radius={0.008}
            partId="power-field"
          />
        )),
      )}

      {/* decor — 月亮、月轨、地轴、日风与背景星 */}
      <SketchMesh position={[1.45, 0.55, 0]}>
        <sphereGeometry args={[0.09, 14, 10]} />
      </SketchMesh>
      {Array.from({ length: 5 }, (_, index) => {
        const startAngle = (10 + index * 11) * (Math.PI / 180)
        const endAngle = (10 + (index + 1) * 11) * (Math.PI / 180)
        return (
          <DraftLine
            key={`moon-orbit-${index}`}
            points={[
              [Math.cos(startAngle) * 1.55, Math.sin(startAngle) * 1.55, 0],
              [Math.cos(endAngle) * 1.55, Math.sin(endAngle) * 1.55, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[0.41, -0.95, 0], [-0.41, 0.95, 0]]} />

      <DraftLine points={[[-2, 0.35, 0], [-1.45, 0.42, 0], [-1.15, 0.62, 0], [-1, 0.9, 0]]} />
      <DraftLine points={[[-1, 0.9, 0], [-1.1, 0.85, 0]]} />
      <DraftLine points={[[-1, 0.9, 0], [-1.02, 0.79, 0]]} />
      <DraftLine points={[[-2, -0.35, 0], [-1.45, -0.42, 0], [-1.15, -0.62, 0], [-1, -0.9, 0]]} />
      <DraftLine points={[[-1, -0.9, 0], [-1.1, -0.85, 0]]} />
      <DraftLine points={[[-1, -0.9, 0], [-1.02, -0.79, 0]]} />

      {backgroundStars.map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}
    </group>
  )
}
