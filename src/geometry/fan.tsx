import { SketchMesh, Rod, DraftLine } from './primitives'

/** 电风扇 — 正视：旋叶、护网、立柱、底座与风速开关 */

const bladeAngles = [0.5, 2.6, 4.7]

export default function FanSketch() {
  return (
    <group>
      <SketchMesh partId="spinning-blades" position={[0, 0.28, 0.02]}>
        <sphereGeometry args={[0.03, 10, 8]} />
      </SketchMesh>
      {bladeAngles.map((angle, index) => (
        <SketchMesh
          key={`blade-${index}`}
          partId="spinning-blades"
          position={[Math.cos(angle) * 0.10, 0.28 + Math.sin(angle) * 0.10, 0.02]}
          rotation={[0, 0, angle]}
        >
          <boxGeometry args={[0.17, 0.05, 0.006]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="motor-body" position={[0, 0.28, -0.10]}>
        <boxGeometry args={[0.14, 0.14, 0.13]} />
      </SketchMesh>
      <Rod from={[0, 0.28, -0.035]} to={[0, 0.28, -0.10]} radius={0.02} partId="motor-body" />

      <SketchMesh partId="front-guard" position={[0, 0.28, 0.055]}>
        <torusGeometry args={[0.185, 0.006, 6, 24]} />
      </SketchMesh>
      <Rod from={[0, 0.28, 0.055]} to={[0.131, 0.411, 0.055]} radius={0.003} partId="front-guard" />
      <Rod from={[0, 0.28, 0.055]} to={[-0.131, 0.411, 0.055]} radius={0.003} partId="front-guard" />
      <Rod from={[0, 0.28, 0.055]} to={[0.131, 0.149, 0.055]} radius={0.003} partId="front-guard" />
      <Rod from={[0, 0.28, 0.055]} to={[-0.131, 0.149, 0.055]} radius={0.003} partId="front-guard" />

      <SketchMesh partId="back-guard" position={[0, 0.28, -0.025]}>
        <torusGeometry args={[0.115, 0.005, 6, 20]} />
      </SketchMesh>
      <Rod from={[-0.115, 0.28, -0.025]} to={[0.115, 0.28, -0.025]} radius={0.003} partId="back-guard" />
      <Rod from={[0, 0.165, -0.025]} to={[0, 0.395, -0.025]} radius={0.003} partId="back-guard" />

      <Rod from={[0, 0.20, 0]} to={[0, -0.27, 0]} radius={0.013} partId="floor-stand" />
      <SketchMesh partId="floor-stand" position={[0, -0.15, 0]}>
        <boxGeometry args={[0.045, 0.14, 0.045]} />
      </SketchMesh>

      <SketchMesh partId="foot-plate" position={[0, -0.3675, 0]}>
        <boxGeometry args={[0.32, 0.025, 0.24]} />
      </SketchMesh>

      <SketchMesh partId="speed-switch" position={[0.05, 0.14, 0]}>
        <boxGeometry args={[0.055, 0.05, 0.05]} />
      </SketchMesh>
      <Rod from={[0.05, 0.14, 0.025]} to={[0.07, 0.175, 0.03]} radius={0.004} partId="speed-switch" />

      <DraftLine points={[[-1.0, -0.38, 0], [1.0, -0.38, 0]]} />
      <DraftLine points={[[0.24, 0.36, 0], [0.34, 0.40, 0], [0.46, 0.38, 0]]} />
      <DraftLine points={[[0.24, 0.28, 0], [0.36, 0.30, 0], [0.50, 0.26, 0]]} />
      <DraftLine points={[[0.24, 0.20, 0], [0.34, 0.24, 0], [0.46, 0.22, 0]]} />
      <DraftLine
        points={[[-0.88, 0.02, 0], [-0.88, 0.38, 0], [-0.58, 0.38, 0], [-0.58, 0.02, 0], [-0.88, 0.02, 0]]}
      />
      <DraftLine points={[[-0.73, 0.02, 0], [-0.73, 0.38, 0]]} />
      <DraftLine points={[[-0.88, 0.20, 0], [-0.58, 0.20, 0]]} />
      <SketchMesh position={[-0.72, -0.34, 0]}>
        <boxGeometry args={[0.09, 0.08, 0.09]} />
      </SketchMesh>
      <DraftLine points={[[-0.72, -0.30, 0], [-0.78, -0.20, 0]]} />
      <DraftLine points={[[-0.72, -0.30, 0], [-0.66, -0.22, 0]]} />
    </group>
  )
}
