import { SketchMesh, SeamRing, Rod, TickRing, PanelLines } from './primitives'

/**
 * The Power Watcher（power-current-sensor）
 *
 * 布局：电缆沿 X 穿过铁芯，铁芯下半挂着传感器箱，箱顶一个量程旋钮，箱侧引出信号线。
 * 密度：铁芯是**开口夹环**（两瓣半环 + 一侧铰链、一侧搭扣，像真的卡钳式互感器），
 * 两瓣上各绕一组二次线（coil = 小环 + 一圈刻度状绕组）；箱体有面板分缝、
 * 四角螺栓、端子上排；旋钮带一圈刻度、旁边一块小铭牌；信号线是带接头的软线。
 * 尺度提醒：整件跨度 ≈ 0.9，**小世界**（figure-craft craft.md §5），
 * 世界空间的标注件靠 ThingScene 归一放大，这里只按物件自身比例写坐标。
 */
export default function PowerCurrentSensorSketch() {
  const R = 0.12
  return (
    <group>
      {/* 一次电缆：穿过铁芯的粗线 + 两端各一道束紧箍 */}
      <Rod partId="line" from={[-0.44, 0, 0]} to={[0.44, 0, 0]} radius={0.032} />
      <SeamRing partId="line" center={[-0.3, 0, 0]} radius={0.034} tube={0.007} axis="x" />
      <SeamRing partId="line" center={[0.3, 0, 0]} radius={0.034} tube={0.007} axis="x" />

      {/* 铁芯：两瓣开口夹环（上半可开），铰链在 -Z、搭扣在 +Z */}
      {[0.5, -0.5].map(half => (
        <SketchMesh key={half} partId="core" rotation={[0, half * 0.06, 0]}>
          <torusGeometry args={[R, 0.026, 10, 26, Math.PI]} />
        </SketchMesh>
      ))}
      <SketchMesh partId="core" position={[0, R, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.014, 0.014, 0.06, 10]} />
      </SketchMesh>
      <SketchMesh partId="core" position={[0, -R, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.05, 10]} />
      </SketchMesh>

      {/* 二次线：两个绕在铁芯上的线圈 + 一圈绕组刻度 */}
      {[0.05, -0.05].map(x => (
        <group key={x} position={[x, 0, 0]}>
          <SeamRing partId="coil" center={[0, 0, 0]} radius={R} tube={0.02} axis="x" />
          <TickRing partId="coil" center={[0, 0, 0]} radius={R + 0.022} count={18} longEvery={3} long={0.007} short={0.0035} axis="x" asPart />
        </group>
      ))}

      {/* 箱体：面板分缝 + 四角螺栓 + 顶上端子排 */}
      <SketchMesh partId="box" position={[0, -0.19, 0]}>
        <boxGeometry args={[0.3, 0.16, 0.22]} />
      </SketchMesh>
      <SketchMesh partId="box" position={[0, -0.19, 0.112]}>
        <boxGeometry args={[0.24, 0.1, 0.014]} />
      </SketchMesh>
      {[
        [-0.12, -0.12, 0.1],
        [0.12, -0.12, 0.1],
        [-0.12, -0.26, 0.1],
        [0.12, -0.26, 0.1],
      ].map(p => (
        <SketchMesh key={p.join()} partId="box" position={p as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.03, 8]} />
        </SketchMesh>
      ))}
      {[-0.055, 0, 0.055].map(x => (
        <SeamRing key={x} partId="box" center={[x, -0.115, 0]} radius={0.022} tube={0.006} axis="y" />
      ))}
      <PanelLines
        lines={[
          [[-0.15, -0.15, 0.108], [0.15, -0.15, 0.108]],
          [[0.06, -0.27, 0.108], [0.06, -0.1, 0.108]],
        ]}
        opacity={0.3}
      />

      {/* 量程旋钮：柱身 + 一圈刻度 + 指针刻线 */}
      <SketchMesh partId="set" position={[0.085, -0.185, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.042, 0.046, 0.038, 18]} />
      </SketchMesh>
      <TickRing partId="set" center={[0.085, -0.185, 0.162]} radius={0.034} count={12} longEvery={3} long={0.012} short={0.006} axis="z" asPart />
      <Rod partId="set" from={[0.085, -0.185, 0.166]} to={[0.085, -0.148, 0.166]} radius={0.005} />

      {/* 信号线：带接头的软线（两段折线）*/}
      <Rod partId="out" from={[0.12, -0.22, 0.05]} to={[0.28, -0.3, 0.11]} radius={0.013} />
      <Rod partId="out" from={[0.28, -0.3, 0.11]} to={[0.42, -0.26, 0.06]} radius={0.013} />
      <SeamRing partId="out" center={[0.28, -0.3, 0.11]} radius={0.016} tube={0.005} axis="y" />
    </group>
  )
}
