import { SketchMesh, Rod, DraftLine } from './primitives'

/** 地热电站 — 双井剖面、汽轮机厂房与冷却塔 */

const wellXs = [-0.42, 0.42]
const wheelRim: Array<[number, number]> = [
  [0.15, 0.0], [0.106, 0.106], [0.0, 0.15], [-0.106, 0.106],
  [-0.15, 0.0], [-0.106, -0.106], [0.0, -0.15], [0.106, -0.106], [0.15, 0.0],
]
const heatRocks: Array<{ position: [number, number, number]; radius: number }> = [
  { position: [-0.25, -1.05, 0], radius: 0.12 },
  { position: [0.05, -1.15, 0], radius: 0.14 },
  { position: [0.3, -1.02, 0], radius: 0.1 },
  { position: [-0.05, -0.95, 0], radius: 0.09 },
  { position: [0.25, -1.28, 0], radius: 0.11 },
]
const undergroundHatches = [-1.6, -1.2, -0.75, 0.75, 1.2, 1.6]
const grassXs = [-1.5, -1.1, 0.1, 0.65]
const heatWaveXs = [-0.15, 0, 0.15]

export default function GeothermalSketch() {
  return (
    <group>
      {/* deep-holes — 双井井壁与井口 */}
      {wellXs.map(x => (
        <group key={`well-${x}`}>
          <Rod from={[x - 0.045, -0.15, 0]} to={[x - 0.045, -1.05, 0]} radius={0.014} partId="deep-holes" />
          <Rod from={[x + 0.045, -0.15, 0]} to={[x + 0.045, -1.05, 0]} radius={0.014} partId="deep-holes" />
          <SketchMesh partId="deep-holes" position={[x, -0.11, 0]}>
            <boxGeometry args={[0.16, 0.08, 0.16]} />
          </SketchMesh>
        </group>
      ))}

      {/* heat-rocks — 热储岩团 */}
      {heatRocks.map((rock, index) => (
        <SketchMesh key={`heat-rock-${index}`} partId="heat-rocks" position={rock.position}>
          <sphereGeometry args={[rock.radius, 14, 10]} />
        </SketchMesh>
      ))}

      {/* water-way — 泵房、地面管与水柱 */}
      <SketchMesh partId="water-way" position={[-0.9, -0.09, 0]}>
        <boxGeometry args={[0.14, 0.12, 0.14]} />
      </SketchMesh>
      <Rod from={[-0.83, -0.05, 0]} to={[-0.42, -0.05, 0]} radius={0.02} partId="water-way" />
      <Rod from={[-0.42, -0.05, 0]} to={[-0.42, -1.0, 0]} radius={0.02} partId="water-way" />

      {/* steam-way — 汽柱与入厂横管 */}
      <Rod from={[0.42, -1.0, 0]} to={[0.42, 0.15, 0]} radius={0.02} partId="steam-way" />
      <Rod from={[0.42, 0.15, 0]} to={[0.85, 0.15, 0]} radius={0.02} partId="steam-way" />

      {/* steam-hall — 门洞式厂房框架 */}
      <Rod from={[0.85, -0.15, 0]} to={[1.35, -0.15, 0]} radius={0.012} partId="steam-hall" />
      <Rod from={[0.85, 0.35, 0]} to={[1.35, 0.35, 0]} radius={0.012} partId="steam-hall" />
      <Rod from={[0.85, -0.15, 0]} to={[0.85, -0.02, 0]} radius={0.012} partId="steam-hall" />
      <Rod from={[0.85, 0.1, 0]} to={[0.85, 0.35, 0]} radius={0.012} partId="steam-hall" />
      <Rod from={[1.35, -0.15, 0]} to={[1.35, 0.35, 0]} radius={0.012} partId="steam-hall" />
      <Rod from={[0.85, 0.35, 0]} to={[1.1, 0.45, 0]} radius={0.012} partId="steam-hall" />
      <Rod from={[1.1, 0.45, 0]} to={[1.35, 0.35, 0]} radius={0.012} partId="steam-hall" />

      {/* turning-wheel — 轮辋、辐条与轮毂 */}
      {wheelRim.slice(0, -1).map(([dx, dy], index) => (
        <Rod
          key={`wheel-rim-${index}`}
          from={[1.02 + dx, 0.12 + dy, 0]}
          to={[1.02 + wheelRim[index + 1][0], 0.12 + wheelRim[index + 1][1], 0]}
          radius={0.008}
          partId="turning-wheel"
        />
      ))}
      <Rod from={[1.02, 0.12, 0]} to={[1.17, 0.12, 0]} radius={0.006} partId="turning-wheel" />
      <Rod from={[1.02, 0.12, 0]} to={[1.02, 0.27, 0]} radius={0.006} partId="turning-wheel" />
      <Rod from={[1.02, 0.12, 0]} to={[0.87, 0.12, 0]} radius={0.006} partId="turning-wheel" />
      <Rod from={[1.02, 0.12, 0]} to={[1.02, -0.03, 0]} radius={0.006} partId="turning-wheel" />
      <SketchMesh partId="turning-wheel" position={[1.02, 0.12, 0]}>
        <sphereGeometry args={[0.03, 12, 8]} />
      </SketchMesh>

      {/* cloud-tower — 三节冷却塔 */}
      <SketchMesh partId="cloud-tower" position={[1.55, -0.025, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.25, 16]} />
      </SketchMesh>
      <SketchMesh partId="cloud-tower" position={[1.55, 0.25, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.35, 16]} />
      </SketchMesh>
      <SketchMesh partId="cloud-tower" position={[1.55, 0.575, 0]}>
        <cylinderGeometry args={[0.12, 0.24, 0.3, 16]} />
      </SketchMesh>

      {/* decor — 地层、流向、建筑与云 */}
      <DraftLine points={[[-1.8, -0.15, 0], [1.8, -0.15, 0]]} />
      {grassXs.map((x, index) => (
        <DraftLine key={`grass-${index}`} points={[[x - 0.03, -0.15, 0], [x, -0.1, 0], [x + 0.03, -0.15, 0]]} />
      ))}
      {undergroundHatches.map((x, index) => (
        <DraftLine key={`underground-${index}`} points={[[x, -0.19, 0], [x - 0.06, -0.25, 0]]} />
      ))}
      <DraftLine points={[[-0.42, -0.48, 0], [-0.42, -0.62, 0]]} />
      <DraftLine points={[[-0.46, -0.57, 0], [-0.42, -0.62, 0], [-0.38, -0.57, 0]]} />
      <DraftLine points={[[0.42, -0.62, 0], [0.42, -0.48, 0]]} />
      <DraftLine points={[[0.38, -0.53, 0], [0.42, -0.48, 0], [0.46, -0.53, 0]]} />
      {heatWaveXs.map((x, index) => (
        <DraftLine
          key={`heat-wave-${index}`}
          points={[[x, -0.75, 0], [x + 0.03, -0.79, 0], [x - 0.03, -0.83, 0], [x, -0.87, 0]]}
        />
      ))}
      <DraftLine points={[[-1.47, -0.15, 0], [-1.47, -0.02, 0], [-1.23, -0.02, 0], [-1.23, -0.15, 0], [-1.47, -0.15, 0]]} />
      <DraftLine points={[[-1.5, -0.02, 0], [-1.35, 0.08, 0], [-1.2, -0.02, 0]]} />
      <DraftLine points={[[-1.4, -0.11, 0], [-1.4, -0.06, 0], [-1.33, -0.06, 0], [-1.33, -0.11, 0], [-1.4, -0.11, 0]]} />
      <DraftLine points={[[1.35, 0.3, 0], [1.47, 0.3, 0]]} />
      <DraftLine points={[[1.23, -0.05, 0], [1.33, -0.05, 0], [1.33, 0.05, 0], [1.23, 0.05, 0], [1.23, -0.05, 0]]} />
      <DraftLine points={[[1.05, 0.12, 0], [1.28, 0.05, 0]]} />
      <DraftLine points={[[1.52, 0.73, 0], [1.48, 0.77, 0], [1.52, 0.81, 0]]} />
      <DraftLine points={[[1.58, 0.73, 0], [1.62, 0.77, 0], [1.58, 0.81, 0]]} />
      <DraftLine points={[[1.42, 0.88, 0], [1.48, 0.94, 0], [1.54, 0.88, 0]]} />
      <DraftLine points={[[1.54, 0.88, 0], [1.6, 0.94, 0], [1.66, 0.88, 0]]} />
      <DraftLine points={[[1.66, 0.88, 0], [1.72, 0.94, 0], [1.78, 0.88, 0]]} />
      <DraftLine points={[[1.42, 0.88, 0], [1.78, 0.88, 0]]} />
    </group>
  )
}
