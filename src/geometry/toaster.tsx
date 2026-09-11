import { SketchMesh, Rod, DraftLine } from './primitives'

/** 烤面包机 — 正视：机身、双槽、加热丝、弹簧床与屑抽屉 */

const slotCenters = [-0.17, 0.17]
const zigzagPts: Array<[number, number, number]> = [
  [-0.05, -0.15, 0], [0.05, -0.10, 0], [-0.05, -0.05, 0], [0.05, 0, 0],
  [-0.05, 0.05, 0], [0.05, 0.10, 0], [-0.05, 0.15, 0], [0.05, 0.20, 0],
]
const springPts: Array<[number, number, number]> = [
  [-0.22, -0.12, 0], [-0.165, -0.09, 0], [-0.11, -0.15, 0], [-0.055, -0.09, 0],
  [0, -0.15, 0], [0.055, -0.09, 0], [0.11, -0.15, 0], [0.165, -0.09, 0],
  [0.22, -0.12, 0],
]

export default function ToasterSketch() {
  return (
    <group>
      <SketchMesh partId="steel-house" position={[0, 0, 0]}>
        <boxGeometry args={[0.85, 0.55, 0.45]} />
      </SketchMesh>

      {slotCenters.map(cx => (
        <SketchMesh key={`slot-${cx}`} partId="bread-holes" position={[cx, 0.285, 0]}>
          <boxGeometry args={[0.22, 0.02, 0.26]} />
        </SketchMesh>
      ))}

      {slotCenters.map(cx =>
        zigzagPts.slice(0, -1).map((from, index) => (
          <Rod
            key={`wire-${cx}-${index}`}
            from={[cx + from[0], from[1], 0]}
            to={[cx + zigzagPts[index + 1][0], zigzagPts[index + 1][1], 0]}
            radius={0.005}
            partId="hot-wires"
          />
        )),
      )}

      {springPts.slice(0, -1).map((from, index) => (
        <Rod
          key={`spring-${index}`}
          from={from}
          to={springPts[index + 1]}
          radius={0.005}
          partId="spring-bed"
        />
      ))}
      <Rod from={[-0.20, -0.04, -0.12]} to={[0.20, -0.04, -0.12]} radius={0.006} partId="spring-bed" />
      <Rod from={[-0.20, -0.04, 0.12]} to={[0.20, -0.04, 0.12]} radius={0.006} partId="spring-bed" />

      <Rod from={[0.44, 0.14, 0]} to={[0.44, -0.07, 0]} radius={0.012} partId="hold-lever" />
      <SketchMesh partId="hold-lever" position={[0.46, -0.12, 0]}>
        <boxGeometry args={[0.07, 0.09, 0.09]} />
      </SketchMesh>

      <SketchMesh partId="heat-watcher" position={[-0.32, 0.05, 0.24]}>
        <torusGeometry args={[0.065, 0.008, 8, 20]} />
      </SketchMesh>
      <Rod from={[-0.32, 0.05, 0.24]} to={[-0.275, 0.10, 0.24]} radius={0.005} partId="heat-watcher" />

      <SketchMesh partId="crumb-drawer" position={[0, -0.33, 0]}>
        <boxGeometry args={[0.70, 0.10, 0.40]} />
      </SketchMesh>
      <Rod from={[-0.06, -0.33, 0.21]} to={[0.06, -0.33, 0.21]} radius={0.008} partId="crumb-drawer" />

      <DraftLine points={[[-0.85, -0.38, 0], [0.85, -0.38, 0]]} />
      <SketchMesh position={[-0.17, 0.40, 0]}>
        <boxGeometry args={[0.19, 0.16, 0.02]} />
      </SketchMesh>
      <SketchMesh position={[0.17, 0.245, 0]}>
        <boxGeometry args={[0.19, 0.16, 0.02]} />
      </SketchMesh>
      <Rod from={[-0.10, 0.50, 0]} to={[-0.07, 0.58, 0]} radius={0.004} />
      <Rod from={[0.02, 0.52, 0]} to={[0.05, 0.60, 0]} radius={0.004} />
      <Rod from={[0.13, 0.50, 0]} to={[0.10, 0.58, 0]} radius={0.004} />
    </group>
  )
}
