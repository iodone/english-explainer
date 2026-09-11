import { SketchMesh, Rod, DraftLine } from './primitives'

/** 缆车 — 侧视：缆索、塔架、客舱与驱动站 */

const wirePts: Array<[number, number, number]> = [
  [-0.85, 0.20, 0], [-0.62, 0.26, 0], [-0.25, 0.40, 0],
  [0.05, 0.24, 0], [0.35, 0.40, 0], [0.62, 0.27, 0], [0.85, 0.26, 0],
]
const towerXs = [-0.25, 0.35]
const mountainOne: Array<[number, number, number]> = [
  [-0.75, -0.52, -0.30], [-0.45, -0.05, -0.30], [-0.15, -0.52, -0.30],
]
const mountainTwo: Array<[number, number, number]> = [
  [0.15, -0.52, -0.30], [0.50, 0.02, -0.30], [0.85, -0.52, -0.30],
]

export default function CableCarSketch() {
  return (
    <group>
      {wirePts.slice(0, -1).map((from, index) => (
        <Rod
          key={`wire-${index}`}
          from={from}
          to={wirePts[index + 1]}
          radius={0.012}
          partId="main-wire"
        />
      ))}

      {towerXs.map(x => (
        <group key={`tower-${x}`}>
          <Rod
            from={[x - 0.05, -0.52, 0]}
            to={[x - 0.015, 0.40, 0]}
            radius={0.014}
            partId="steel-tower"
          />
          <Rod
            from={[x + 0.05, -0.52, 0]}
            to={[x + 0.015, 0.40, 0]}
            radius={0.014}
            partId="steel-tower"
          />
          <Rod
            from={[x - 0.04, -0.15, 0]}
            to={[x + 0.04, 0.05, 0]}
            radius={0.006}
            partId="steel-tower"
          />
          <Rod
            from={[x + 0.04, -0.15, 0]}
            to={[x - 0.04, 0.05, 0]}
            radius={0.006}
            partId="steel-tower"
          />
          <SketchMesh partId="steel-tower" position={[x, 0.43, 0]}>
            <torusGeometry args={[0.045, 0.012, 8, 16]} />
          </SketchMesh>
        </group>
      ))}

      <SketchMesh partId="sky-cabin" position={[-0.10, 0.06, 0]}>
        <boxGeometry args={[0.24, 0.20, 0.18]} />
      </SketchMesh>
      <SketchMesh partId="sky-cabin" position={[-0.10, 0.17, 0]}>
        <boxGeometry args={[0.26, 0.03, 0.20]} />
      </SketchMesh>
      <SketchMesh partId="sky-cabin" position={[-0.16, 0.08, 0.095]}>
        <boxGeometry args={[0.07, 0.08, 0.012]} />
      </SketchMesh>
      <SketchMesh partId="sky-cabin" position={[-0.04, 0.08, 0.095]}>
        <boxGeometry args={[0.07, 0.08, 0.012]} />
      </SketchMesh>
      <SketchMesh partId="sky-cabin" position={[0.03, 0.045, 0.095]}>
        <boxGeometry args={[0.06, 0.13, 0.012]} />
      </SketchMesh>

      <Rod from={[-0.10, 0.16, 0]} to={[-0.10, 0.30, 0]} radius={0.012} partId="hanging-arm" />
      <SketchMesh partId="hanging-arm" position={[-0.10, 0.27, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="carrier-wheel" position={[-0.10, 0.30, 0]}>
        <torusGeometry args={[0.05, 0.014, 8, 18]} />
      </SketchMesh>

      <SketchMesh partId="power-house" position={[0.88, -0.35, 0]}>
        <boxGeometry args={[0.30, 0.34, 0.24]} />
      </SketchMesh>
      <SketchMesh partId="power-house" position={[0.88, -0.15, 0]}>
        <boxGeometry args={[0.34, 0.04, 0.28]} />
      </SketchMesh>
      <SketchMesh partId="power-house" position={[0.83, -0.45, 0.125]}>
        <boxGeometry args={[0.08, 0.14, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="power-house" position={[0.92, -0.30, 0.125]}>
        <boxGeometry args={[0.07, 0.07, 0.01]} />
      </SketchMesh>

      <SketchMesh partId="drive-wheel" position={[0.86, 0.22, 0]}>
        <torusGeometry args={[0.15, 0.02, 8, 24]} />
      </SketchMesh>
      <Rod from={[0.86, 0.22, -0.06]} to={[0.86, 0.22, 0.06]} radius={0.015} partId="drive-wheel" />

      <SketchMesh position={[-0.88, -0.40, 0]}>
        <boxGeometry args={[0.16, 0.22, 0.16]} />
      </SketchMesh>
      <SketchMesh position={[-0.85, 0.20, 0]}>
        <torusGeometry args={[0.06, 0.012, 8, 16]} />
      </SketchMesh>
      <DraftLine points={[[-1.0, -0.52, 0], [1.0, -0.52, 0]]} />
      <DraftLine points={mountainOne} />
      <DraftLine points={mountainTwo} />
      <DraftLine points={[[-0.70, -0.52, -0.20], [-0.68, -0.42, -0.20], [-0.66, -0.52, -0.20]]} />
      <DraftLine points={[[-0.10, -0.52, -0.20], [-0.08, -0.42, -0.20], [-0.06, -0.52, -0.20]]} />
      <DraftLine points={[[0.25, -0.52, -0.20], [0.27, -0.42, -0.20], [0.29, -0.52, -0.20]]} />
      <DraftLine
        points={[[-0.30, 0.72, 0], [-0.24, 0.75, 0], [-0.18, 0.72, 0], [-0.24, 0.69, 0], [-0.30, 0.72, 0]]}
      />
      <DraftLine
        points={[[0.30, 0.78, 0], [0.36, 0.81, 0], [0.42, 0.78, 0], [0.36, 0.75, 0], [0.30, 0.78, 0]]}
      />
    </group>
  )
}
