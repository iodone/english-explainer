import { SketchMesh, SeamRing, DraftLine } from './primitives'

/**
 * The Egg Beater（home-whisk）
 *
 * 布局：柄在上（+Y），丝笼在下，和数据里的 position 一致。
 * 密度：柄是收腰的回转体 + 一圈防滑箍 + 顶端的挂环（环有立柱，不是浮在柄上）；
 * 箍口（ferrule）是金属套 + 两道压箍；丝笼不是三根光圈的堆叠——
 * 外层 4 条长圈（end）+ 内层 4 条短圈（wire），在箍口收拢、向下张开；
 * 中间那团"空"用一层极淡的**幽灵体积**表示（finish: shell），读得出被丝围住的空腔。
 * 尺度提醒：整件跨度 ≈ 0.7，**小世界**（figure-craft craft.md §5），
 * 世界空间的标注件靠 ThingScene 归一放大，这里只按物件自身比例写坐标。
 */
export default function HomeWhiskSketch() {
  // 外层丝圈：4 条，绕 Y 每 45° 一条；拉到 1.4 倍高（球笼形）
  const outer = [0, 1, 2, 3].map(k => (k * Math.PI) / 4)
  // 内层丝圈：错开 22.5°，笼更窄也更短
  const inner = [0, 1, 2, 3].map(k => Math.PI / 8 + (k * Math.PI) / 4)

  return (
    <group>
      {/* 柄：收腰的回转体 + 端头圆帽 + 挂环立柱 */}
      <SketchMesh partId="body" position={[0, 0.185, 0]}>
        <cylinderGeometry args={[0.03, 0.042, 0.26, 14]} />
      </SketchMesh>
      <SketchMesh partId="body" position={[0, 0.312, 0]}>
        <sphereGeometry args={[0.03, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      <SketchMesh partId="body" position={[0, 0.335, 0]}>
        <cylinderGeometry args={[0.008, 0.009, 0.03, 8]} />
      </SketchMesh>
      {/* 握位防滑箍：贴着收腰的表面走（半径跟着柄径变） */}
      {[
        [0.105, 0.0398],
        [0.145, 0.038],
        [0.185, 0.0362],
      ].map(([y, r]) => (
        <SeamRing key={y} partId="body" center={[0, y, 0]} radius={r} tube={0.004} axis="y" />
      ))}

      {/* 挂环：立柱顶上的一个立环 */}
      <SketchMesh partId="top" position={[0, 0.375, 0]}>
        <torusGeometry args={[0.026, 0.0065, 8, 20]} />
      </SketchMesh>

      {/* 箍口：金属套 + 上下两道压箍 + 收口小帽 */}
      <SketchMesh partId="plug" position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.041, 0.038, 0.075, 16]} />
      </SketchMesh>
      <SeamRing partId="plug" center={[0, 0.05, 0]} radius={0.0405} tube={0.005} axis="y" />
      <SeamRing partId="plug" center={[0, -0.005, 0]} radius={0.0395} tube={0.005} axis="y" />
      <SketchMesh partId="plug" position={[0, -0.018, 0]}>
        <cylinderGeometry args={[0.03, 0.036, 0.016, 16]} />
      </SketchMesh>

      {/* 外层长圈：从箍口收拢处向下张开的球笼 */}
      {outer.map(a => (
        <SketchMesh key={`o${a}`} partId="end" position={[0, -0.157, 0]} rotation={[0, a, 0]} scale={[1, 1.4, 1]}>
          <torusGeometry args={[0.1, 0.0055, 6, 36]} />
        </SketchMesh>
      ))}

      {/* 内层短圈：同一收拢点、笼更窄更短 */}
      {inner.map(a => (
        <SketchMesh key={`i${a}`} partId="wire" position={[0, -0.129, 0]} rotation={[0, a, 0]} scale={[1, 1.55, 1]}>
          <torusGeometry args={[0.074, 0.005, 6, 30]} />
        </SketchMesh>
      ))}

      {/* 中间的空：一层极淡的幽灵体积（读得出"丝围起来的空腔"，不是实心件） */}
      <SketchMesh partId="inside" position={[0, -0.13, 0]} scale={[1, 1.5, 1]}>
        <sphereGeometry args={[0.062, 18, 12]} />
      </SketchMesh>

      {/* 图纸装饰：中心轴 */}
      <DraftLine points={[[0, 0.4, 0], [0, -0.29, 0]]} opacity={0.2} />
    </group>
  )
}
