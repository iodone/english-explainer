import { SketchMesh, Rod, DraftLine } from './primitives'

/** 小行星 — 太空：蛋形岩体、金属核、冰坑与轨道 */

const starCenters: Array<[number, number]> = [
  [0.55, -0.30], [0.05, 0.45], [-0.75, -0.35],
]

export default function AsteroidSketch() {
  return (
    <group>
      <SketchMesh partId="rock-body" position={[-0.10, 0.06, 0]} scale={[1.3, 1.0, 0.95]}>
        <sphereGeometry args={[0.30, 18, 14]} />
      </SketchMesh>

      <SketchMesh partId="sun-face" position={[-0.10, 0.06, 0]} scale={[1.3, 1.0, 0.95]}>
        <sphereGeometry args={[0.305, 16, 12, Math.PI / 2, Math.PI]} />
      </SketchMesh>

      <SketchMesh partId="metal-heart" position={[-0.10, 0.02, 0]}>
        <sphereGeometry args={[0.12, 12, 10]} />
      </SketchMesh>

      <SketchMesh partId="big-crater" position={[-0.34, 0.25, 0.10]} rotation={[0.5, 0.4, 0.6]}>
        <torusGeometry args={[0.09, 0.018, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="big-crater" position={[-0.36, 0.27, 0.13]} rotation={[0.5, 0.4, 0.6]}>
        <torusGeometry args={[0.05, 0.010, 8, 18]} />
      </SketchMesh>

      <SketchMesh partId="ice-pocket" position={[-0.30, -0.08, 0.16]} scale={[1, 0.45, 1]}>
        <sphereGeometry args={[0.055, 12, 10]} />
      </SketchMesh>
      <SketchMesh partId="ice-pocket" position={[-0.30, -0.08, 0.16]} rotation={[1.2, 0, 0.3]}>
        <torusGeometry args={[0.05, 0.008, 8, 16]} />
      </SketchMesh>

      <Rod from={[-0.32, -0.10, 0.16]} to={[-0.56, -0.28, 0.16]} radius={0.006} partId="gas-jet" />
      <SketchMesh partId="gas-jet" position={[-0.58, -0.295, 0.16]}>
        <sphereGeometry args={[0.012, 8, 8]} />
      </SketchMesh>

      <SketchMesh partId="orbit-line" position={[0.20, -0.18, 0]} scale={[1, 0.3, 1]}>
        <torusGeometry args={[0.85, 0.006, 6, 60]} />
      </SketchMesh>

      <SketchMesh position={[0.80, 0.32, 0]}>
        <sphereGeometry args={[0.13, 16, 12]} />
      </SketchMesh>
      <DraftLine points={[[0.80, 0.47, 0], [0.80, 0.55, 0]]} />
      <DraftLine points={[[0.95, 0.32, 0], [1.03, 0.32, 0]]} />
      <DraftLine points={[[0.65, 0.32, 0], [0.57, 0.32, 0]]} />
      <DraftLine points={[[0.80, 0.17, 0], [0.80, 0.09, 0]]} />
      {starCenters.map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.02, y, 0], [x + 0.02, y, 0]]} />
          <DraftLine points={[[x, y - 0.02, 0], [x, y + 0.02, 0]]} />
        </group>
      ))}
      <SketchMesh position={[0.45, -0.42, -0.15]}>
        <sphereGeometry args={[0.03, 8, 6]} />
      </SketchMesh>
    </group>
  )
}
