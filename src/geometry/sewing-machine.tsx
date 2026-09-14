import { SketchMesh, Rod, DraftLine } from './primitives'

/** 缝纫机 — home：针、线轴、梭芯、手轮、传动带、踏板 */

export default function SewingMachineSketch() {
  return (
    <group>
      {/* cloth-table — 台面 */}
      <SketchMesh partId="cloth-table" position={[0, -0.16, 0]}>
        <boxGeometry args={[0.66, 0.05, 0.30]} />
      </SketchMesh>

      {/* 机身 decor — 顶臂 */}
      <SketchMesh position={[-0.06, 0.09, 0]}>
        <boxGeometry args={[0.42, 0.10, 0.22]} />
      </SketchMesh>
      {/* 机身 decor — 左机头 */}
      <SketchMesh position={[-0.20, 0.00, 0]}>
        <boxGeometry args={[0.12, 0.14, 0.24]} />
      </SketchMesh>
      {/* 机身 decor — 右立柱 */}
      <SketchMesh position={[0.24, -0.03, 0]}>
        <boxGeometry args={[0.12, 0.20, 0.22]} />
      </SketchMesh>

      {/* sharp-needle */}
      <SketchMesh partId="sharp-needle" position={[-0.20, -0.115, 0]}>
        <boxGeometry args={[0.008, 0.10, 0.008]} />
      </SketchMesh>

      {/* top-thread — 线轴 + 2 Rod */}
      <SketchMesh partId="top-thread" position={[-0.02, 0.165, 0]}>
        <boxGeometry args={[0.03, 0.05, 0.03]} />
      </SketchMesh>
      <Rod from={[-0.02, 0.14, 0]} to={[-0.20, 0.07, 0]} radius={0.003} partId="top-thread" />
      <Rod from={[-0.20, 0.07, 0]} to={[-0.20, -0.065, 0]} radius={0.003} partId="top-thread" />

      {/* under-thread — 梭芯 torus */}
      <SketchMesh partId="under-thread" position={[-0.20, -0.225, 0]}>
        <torusGeometry args={[0.045, 0.012, 8, 24]} />
      </SketchMesh>

      {/* hand-wheel — torus + 轮毂 */}
      <SketchMesh partId="hand-wheel" position={[0.34, -0.02, 0]}>
        <torusGeometry args={[0.095, 0.022, 8, 32]} />
      </SketchMesh>
      <SketchMesh partId="hand-wheel" position={[0.34, -0.02, 0]}>
        <boxGeometry args={[0.02, 0.04, 0.04]} />
      </SketchMesh>

      {/* drive-band — 双股 Rod */}
      <Rod from={[0.335, -0.23, 0]} to={[0.34, -0.11, 0]} radius={0.003} partId="drive-band" />
      <Rod from={[0.335, -0.29, 0]} to={[0.34, -0.125, 0]} radius={0.003} partId="drive-band" />

      {/* foot-switch — 底板 + 踏片 */}
      <SketchMesh partId="foot-switch" position={[0.50, -0.3625, 0]}>
        <boxGeometry args={[0.11, 0.035, 0.09]} />
      </SketchMesh>
      <SketchMesh partId="foot-switch" position={[0.50, -0.335, 0]} rotation={[0, 0, 0.25]}>
        <boxGeometry args={[0.06, 0.015, 0.07]} />
      </SketchMesh>

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.38, 0], [0.9, -0.38, 0]]} />

      {/* decor — 机柜双腿 */}
      <SketchMesh position={[-0.25, -0.2825, 0]}>
        <boxGeometry args={[0.04, 0.195, 0.20]} />
      </SketchMesh>
      <SketchMesh position={[0.25, -0.2825, 0]}>
        <boxGeometry args={[0.04, 0.195, 0.20]} />
      </SketchMesh>

      {/* decor — 布料薄盒 */}
      <SketchMesh position={[-0.17, -0.129, 0]}>
        <boxGeometry args={[0.14, 0.012, 0.10]} />
      </SketchMesh>

      {/* decor — 布上针脚3短划 */}
      <DraftLine points={[[-0.12, -0.123, 0.05], [-0.10, -0.123, 0.05]]} />
      <DraftLine points={[[-0.07, -0.123, 0.05], [-0.05, -0.123, 0.05]]} />
      <DraftLine points={[[-0.02, -0.123, 0.05], [0.00, -0.123, 0.05]]} />

      {/* decor — 电机 */}
      <SketchMesh position={[0.24, -0.26, 0]}>
        <boxGeometry args={[0.16, 0.10, 0.18]} />
      </SketchMesh>
      {/* decor — 皮带轮 */}
      <SketchMesh position={[0.33, -0.26, 0]}>
        <boxGeometry args={[0.02, 0.06, 0.06]} />
      </SketchMesh>

      {/* decor — 手轮辐条十字 */}
      <DraftLine points={[[0.26, -0.02, 0], [0.42, -0.02, 0]]} />
      <DraftLine points={[[0.34, -0.10, 0], [0.34, 0.06, 0]]} />
    </group>
  )
}
