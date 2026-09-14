import { SketchMesh, Rod, DraftLine } from './primitives'

/** 太空探测器 — space：主体、大天线、太阳板、摄像头、臂、小天线、散热板 */

export default function SpaceProbeSketch() {
  return (
    <group>
      {/* body — 主体 */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.20, 0.16, 0.20]} />
      </SketchMesh>

      {/* big-dish — 大天线 */}
      <SketchMesh partId="big-dish" position={[0, 0.20, 0]}>
        <cylinderGeometry args={[0.10, 0.06, 0.04, 16]} />
      </SketchMesh>

      {/* sun-boards — 太阳板（左） */}
      <SketchMesh partId="sun-boards" position={[-0.28, 0, 0]}>
        <boxGeometry args={[0.18, 0.22, 0.01]} />
      </SketchMesh>
      {/* sun-boards — 太阳板（右） */}
      <SketchMesh partId="sun-boards" position={[0.28, 0, 0]}>
        <boxGeometry args={[0.18, 0.22, 0.01]} />
      </SketchMesh>

      {/* arm — 臂（左） */}
      <Rod from={[-0.12, 0, 0]} to={[-0.20, 0, 0]} radius={0.008} />
      {/* arm — 臂（右） */}
      <Rod from={[0.12, 0, 0]} to={[0.20, 0, 0]} radius={0.008} />

      {/* camera-eye — 摄像头 */}
      <SketchMesh partId="camera-eye" position={[0.14, 0.08, 0.12]}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
      </SketchMesh>

      {/* small-dishes — 小天线 */}
      <SketchMesh partId="small-dishes" position={[0.06, 0.16, 0.06]}>
        <cylinderGeometry args={[0.04, 0.03, 0.03, 12]} />
      </SketchMesh>

      {/* heat-boards — 散热板 */}
      <SketchMesh partId="heat-boards" position={[0, -0.14, 0]}>
        <boxGeometry args={[0.16, 0.06, 0.01]} />
      </SketchMesh>

      {/* decor — 飞行方向线 */}
      <DraftLine points={[[0.5, 0, 0], [0.7, 0, 0]]} />
      <DraftLine points={[[0.5, 0.04, 0], [0.65, 0.04, 0]]} />
      <DraftLine points={[[0.5, -0.04, 0], [0.65, -0.04, 0]]} />
    </group>
  )
}