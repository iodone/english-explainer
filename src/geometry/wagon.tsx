import { SketchMesh, DraftLine } from './primitives'

/** 手推车 — transport：车身、车轮、拉杆、把手、底板、侧壁、载物空间 */
const wheelXs = [-0.18, 0.18]

export default function WagonSketch() {
  return (
    <group>
      {/* cart-body — 车身 */}
      <SketchMesh partId="cart-body" position={[0, 0.04, 0]}>
        <boxGeometry args={[0.50, 0.16, 0.28]} />
      </SketchMesh>

      {/* wheels — 4个车轮 */}
      {wheelXs.map((x) => (
        <SketchMesh key={`wheel-f-${x}`} partId="wheels" position={[x, -0.14, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 12]} />
        </SketchMesh>
      ))}
      {wheelXs.map((x) => (
        <SketchMesh key={`wheel-b-${x}`} partId="wheels" position={[x, -0.14, -0.16]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 12]} />
        </SketchMesh>
      ))}

      {/* pull-bar — 拉杆 */}
      <SketchMesh partId="pull-bar" position={[0.34, -0.04, 0]}>
        <boxGeometry args={[0.14, 0.04, 0.04]} />
      </SketchMesh>

      {/* handle — 把手 */}
      <SketchMesh partId="handle" position={[0.44, 0.02, 0]}>
        <boxGeometry args={[0.04, 0.10, 0.06]} />
      </SketchMesh>

      {/* floor — 底板 */}
      <SketchMesh partId="floor" position={[0, -0.04, 0]}>
        <boxGeometry args={[0.48, 0.02, 0.26]} />
      </SketchMesh>

      {/* side-walls — 侧壁 */}
      <SketchMesh partId="side-walls" position={[0, 0.10, 0.14]}>
        <boxGeometry args={[0.48, 0.12, 0.015]} />
      </SketchMesh>
      <SketchMesh partId="side-walls" position={[0, 0.10, -0.14]}>
        <boxGeometry args={[0.48, 0.12, 0.015]} />
      </SketchMesh>
      <SketchMesh partId="side-walls" position={[-0.24, 0.10, 0]}>
        <boxGeometry args={[0.015, 0.12, 0.28]} />
      </SketchMesh>

      {/* load-space — 载物空间（装饰线表示） */}
      <DraftLine points={[[-0.22, 0.02, 0.12], [0.22, 0.02, 0.12]]} />
      <DraftLine points={[[-0.22, 0.02, -0.12], [0.22, 0.02, -0.12]]} />

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.28, 0], [0.9, -0.28, 0]]} />
    </group>
  )
}