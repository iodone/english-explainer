import { SketchMesh, Rod, DraftLine } from './primitives'

/** 原子 — 核子点阵、电子云、能级壳与跃迁示意 */

const pushPoints: Array<[number, number, number]> = [
  [0.054, 0.031, 0],
  [-0.054, 0.031, 0],
  [0, -0.062, 0],
]

const stillPoints: Array<[number, number, number]> = [
  [0, 0.062, 0],
  [-0.054, -0.031, 0],
  [0.054, -0.031, 0],
]

const lightFlyers: Array<[number, number, number]> = [
  [0.268, 0.225, 0],
  [-0.564, -0.205, 0],
  [0.386, -0.46, 0],
]

const pullHands: Array<[[number, number, number], [number, number, number]]> = [
  [[0.115, 0.096, 0], [0.23, 0.193, 0]],
  [[-0.141, -0.051, 0], [-0.282, -0.103, 0]],
  [[0.096, -0.115, 0], [0.193, -0.23, 0]],
]

export default function AtomSketch() {
  return (
    <group>
      {/* heavy-heart — 原子核包层 */}
      <SketchMesh partId="heavy-heart" position={[0, 0, 0]}>
        <sphereGeometry args={[0.135, 16, 12]} />
      </SketchMesh>

      {/* push-points — 质子六角阵 */}
      {pushPoints.map((position, index) => (
        <SketchMesh key={`push-point-${index}`} partId="push-points" position={position}>
          <sphereGeometry args={[0.045, 12, 10]} />
        </SketchMesh>
      ))}

      {/* still-points — 中子六角阵 */}
      {stillPoints.map((position, index) => (
        <SketchMesh key={`still-point-${index}`} partId="still-points" position={position}>
          <sphereGeometry args={[0.045, 12, 10]} />
        </SketchMesh>
      ))}

      {/* light-flyers — 壳层电子 */}
      {lightFlyers.map((position, index) => (
        <SketchMesh key={`light-flyer-${index}`} partId="light-flyers" position={position}>
          <sphereGeometry args={[0.03, 12, 10]} />
        </SketchMesh>
      ))}

      {/* near-road — 内电子壳层 */}
      <SketchMesh partId="near-road" position={[0, 0, 0]}>
        <sphereGeometry args={[0.35, 20, 16]} />
      </SketchMesh>

      {/* far-road — 外电子壳层 */}
      <SketchMesh partId="far-road" position={[0, 0, 0]}>
        <sphereGeometry args={[0.6, 24, 18]} />
      </SketchMesh>

      {/* pull-hands — 核电吸引连线 */}
      {pullHands.map(([from, to], index) => (
        <Rod key={`pull-hand-${index}`} from={from} to={to} radius={0.006} partId="pull-hands" />
      ))}

      {/* decor — 光子射出与电子跃迁 */}
      <DraftLine
        points={[
          [0.093, 0.348, 0],
          [0.17, 0.4, 0],
          [0.13, 0.47, 0],
          [0.21, 0.52, 0],
          [0.17, 0.59, 0],
          [0.25, 0.64, 0],
          [0.22, 0.71, 0],
        ]}
      />
      <DraftLine points={[[0.22, 0.71, 0], [0.15, 0.68, 0]]} />
      <DraftLine points={[[0.22, 0.71, 0], [0.19, 0.63, 0]]} />

      <DraftLine points={[[-0.564, -0.205, 0], [-0.51, -0.09, 0]]} />
      <DraftLine points={[[-0.46, -0.02, 0], [-0.4, 0.05, 0]]} />
      <DraftLine points={[[-0.36, 0.09, 0], [-0.33, 0.12, 0]]} />
      <DraftLine points={[[-0.33, 0.12, 0], [-0.39, 0.08, 0]]} />
      <DraftLine points={[[-0.33, 0.12, 0], [-0.35, 0.17, 0]]} />
    </group>
  )
}
