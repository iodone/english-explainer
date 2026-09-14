import { SketchMesh, Rod, DraftLine } from './primitives'

/** 太空机器人 — space：机身、摄像头眼、抓取臂、工具臂、磁足、天线、工具箱 */

const eyeXs = [-0.06, 0.06]

export default function SpaceRobotSketch() {
  return (
    <group>
      {/* body */}
      <SketchMesh partId="body" position={[0, 0.02, 0]}>
        <boxGeometry args={[0.32, 0.26, 0.20]} />
      </SketchMesh>

      {/* camera-eye — 2球 */}
      {eyeXs.map((x) => (
        <SketchMesh key={`eye-${x}`} partId="camera-eye" position={[x, 0.22, 0]}>
          <sphereGeometry args={[0.03, 10, 8]} />
        </SketchMesh>
      ))}

      {/* grab-arm — 肩 + 上臂 + 前臂 */}
      <SketchMesh partId="grab-arm" position={[-0.20, 0.10, 0]}>
        <sphereGeometry args={[0.025, 8, 6]} />
      </SketchMesh>
      <Rod from={[-0.20, 0.10, 0]} to={[-0.32, -0.02, 0]} radius={0.012} partId="grab-arm" />
      <Rod from={[-0.32, -0.02, 0]} to={[-0.28, -0.14, 0]} radius={0.010} partId="grab-arm" />

      {/* tool-arm — 肩 + 上臂 + 前臂 */}
      <SketchMesh partId="tool-arm" position={[0.20, 0.10, 0]}>
        <sphereGeometry args={[0.025, 8, 6]} />
      </SketchMesh>
      <Rod from={[0.20, 0.10, 0]} to={[0.32, -0.02, 0]} radius={0.012} partId="tool-arm" />
      <Rod from={[0.32, -0.02, 0]} to={[0.28, -0.14, 0]} radius={0.010} partId="tool-arm" />

      {/* magnets — 4件 */}
      <SketchMesh partId="magnets" position={[-0.10, -0.20, -0.08]}>
        <boxGeometry args={[0.04, 0.02, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="magnets" position={[-0.10, -0.20, 0.08]}>
        <boxGeometry args={[0.04, 0.02, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="magnets" position={[0.10, -0.20, -0.08]}>
        <boxGeometry args={[0.04, 0.02, 0.04]} />
      </SketchMesh>
      <SketchMesh partId="magnets" position={[0.10, -0.20, 0.08]}>
        <boxGeometry args={[0.04, 0.02, 0.04]} />
      </SketchMesh>

      {/* talk-stick */}
      <Rod from={[0, 0.28, 0]} to={[0, 0.40, 0]} radius={0.006} partId="talk-stick" />

      {/* tool-box */}
      <SketchMesh partId="tool-box" position={[0.22, -0.12, 0]}>
        <boxGeometry args={[0.10, 0.10, 0.10]} />
      </SketchMesh>

      {/* decor — 夹爪叉形 */}
      <DraftLine points={[[-0.28, -0.14, 0], [-0.32, -0.18, 0]]} />
      <DraftLine points={[[-0.28, -0.14, 0], [-0.24, -0.18, 0]]} />

      {/* decor — 工具头十字 */}
      <DraftLine points={[[0.28, -0.14, 0], [0.30, -0.16, 0]]} />
      <DraftLine points={[[0.26, -0.16, 0], [0.30, -0.14, 0]]} />

      {/* decor — 星星3点 */}
      <DraftLine points={[[-0.60, 0.35, 0], [-0.58, 0.35, 0]]} />
      <DraftLine points={[[0.65, -0.30, 0], [0.67, -0.30, 0]]} />
      <DraftLine points={[[0.50, 0.40, 0], [0.52, 0.40, 0]]} />
    </group>
  )
}