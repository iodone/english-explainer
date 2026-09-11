import { SketchMesh, DraftLine } from './primitives'

/** 电水壶 — 正视：壶身、壶嘴、提手、加热盘与底座 */

const steamOne: Array<[number, number, number]> = [
  [0.40, 0.24, 0], [0.44, 0.30, 0], [0.40, 0.36, 0],
]
const steamTwo: Array<[number, number, number]> = [
  [0.46, 0.24, 0], [0.50, 0.30, 0], [0.46, 0.36, 0],
]

export default function KettleSketch() {
  return (
    <group>
      <SketchMesh partId="bottom-plate" position={[0, -0.345, 0]}>
        <cylinderGeometry args={[0.34, 0.36, 0.07, 20]} />
      </SketchMesh>
      <SketchMesh partId="hot-plate" position={[0, -0.30, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.018, 20]} />
      </SketchMesh>

      <SketchMesh partId="water-pot" position={[0, -0.10, 0]}>
        <cylinderGeometry args={[0.26, 0.23, 0.40, 20]} />
      </SketchMesh>
      <SketchMesh partId="water-pot" position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.23, 0.17, 0.10, 20]} />
      </SketchMesh>
      <SketchMesh partId="water-pot" position={[0, -0.12, 0.235]}>
        <boxGeometry args={[0.05, 0.14, 0.015]} />
      </SketchMesh>

      <SketchMesh partId="pot-lid" position={[0, 0.215, 0]}>
        <cylinderGeometry args={[0.185, 0.185, 0.035, 20]} />
      </SketchMesh>
      <SketchMesh partId="pot-lid" position={[0, 0.26, 0]}>
        <sphereGeometry args={[0.04, 12, 10]} />
      </SketchMesh>

      <SketchMesh partId="spout" position={[0.29, 0.06, 0]} rotation={[0, 0, -0.9]}>
        <cylinderGeometry args={[0.055, 0.075, 0.28, 12]} />
      </SketchMesh>

      <SketchMesh partId="handle" position={[0, 0.31, 0]}>
        <torusGeometry args={[0.17, 0.018, 8, 20, Math.PI]} />
      </SketchMesh>

      <SketchMesh partId="power-switch" position={[0.26, -0.13, 0]}>
        <boxGeometry args={[0.06, 0.075, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="power-switch" position={[0.26, -0.13, 0.03]}>
        <sphereGeometry args={[0.012, 8, 8]} />
      </SketchMesh>

      <DraftLine points={steamOne} />
      <DraftLine points={steamTwo} />
      <DraftLine points={[[-0.85, -0.38, 0], [0.85, -0.38, 0]]} />
    </group>
  )
}
