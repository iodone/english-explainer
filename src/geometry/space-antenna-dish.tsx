import { SketchMesh, SeamRing, Rod, BoltCircle, DraftLine } from './primitives'

/**
 * The Talk Dish（space-antenna-dish）
 *
 * 布局：抛物面朝上前倾（和数据 position 的大方向一致），馈源用三根支杆吊在盘面前方，
 * 盘背接转台电机、电机坐在底座上，信号线从底座侧面引下来。
 * 密度：盘面是**带边箍的壳**（口沿一圈实心箍 + 背面的径向加强筋 + 中心轮毂）；
 * 馈源是一节喇叭管（锥口 + 圆筒 + 法兰）；馈源支杆是真 Rod（三根，能参与高亮）；
 * 电机有散热箍与轴承座（U 形叉臂）；底座带螺栓圈与出线口。
 * 尺度提醒：整件跨度 ≈ 0.9，**小世界**（figure-craft craft.md §5），
 * 世界空间的标注件靠 ThingScene 归一放大，这里只按物件自身比例写坐标。
 */
export default function SpaceAntennaDishSketch() {
  const R = 0.34 // 盘口半径
  const TILT = 0.95 // 盘面绕 X 的倾角（开口朝上前方）
  const FOCUS: [number, number, number] = [0, 0.3, 0.06] // 馈源位置
  // 盘面局部基（开口方向 = +Y 转 TILT）
  const ny = Math.cos(TILT)
  const nz = Math.sin(TILT)
  // 三条支杆在盘口上的落点（局部 u = +X，v = 轴向叉乘 u）
  const rimAngles = [Math.PI / 2, Math.PI * 1.17, Math.PI * 1.83]
  const rimPoints = rimAngles.map(a => {
    const cu = Math.cos(a) * R
    const cv = Math.sin(a) * R
    return [cu, cv * ny, cv * nz] as [number, number, number]
  })

  return (
    <group>
      {/* 盘面：抛物面壳（开口朝上前倾）+ 口沿箍 + 背面加强筋 + 轮毂 */}
      <group rotation={[TILT, 0, 0]}>
        <SketchMesh partId="dish" position={[0, -0.09, 0]}>
          <sphereGeometry args={[R, 30, 14, 0, Math.PI * 2, 0, 0.62]} />
        </SketchMesh>
        <SeamRing partId="dish" center={[0, -0.09, 0]} radius={R * 0.94} tube={0.012} axis="y" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
          const a = (i / 8) * Math.PI * 2
          return (
            <Rod
              key={a}
              partId="dish"
              radius={0.006}
              from={[Math.cos(a) * R * 0.9, -0.09, Math.sin(a) * R * 0.9]}
              to={[Math.cos(a) * 0.07, -0.2, Math.sin(a) * 0.07]}
            />
          )
        })}
        <SeamRing partId="dish" center={[0, -0.2, 0]} radius={0.075} tube={0.014} axis="y" />
        <SketchMesh partId="dish" position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.062, 0.062, 0.05, 18]} />
        </SketchMesh>
      </group>

      {/* 馈源支杆：三根真杆，从盘口收到馈源根部 */}
      {rimPoints.map(p => (
        <Rod key={p.join()} partId="arm" radius={0.0075} from={p} to={[FOCUS[0], FOCUS[1] - 0.05, FOCUS[2]]} />
      ))}

      {/* 馈源：喇叭口 + 圆筒 + 根部法兰 */}
      <group position={FOCUS} rotation={[-TILT + Math.PI, 0, 0]}>
        <SketchMesh partId="feed" position={[0, 0.035, 0]}>
          <cylinderGeometry args={[0.052, 0.03, 0.07, 18, 1, true]} />
        </SketchMesh>
        <SketchMesh partId="feed" position={[0, -0.01, 0]}>
          <cylinderGeometry args={[0.032, 0.032, 0.05, 16]} />
        </SketchMesh>
        <SeamRing partId="feed" center={[0, -0.032, 0]} radius={0.038} tube={0.007} axis="y" />
      </group>

      {/* 转台：U 形叉臂 + 电机（散热箍）+ 轴承座 */}
      <SketchMesh partId="motor" position={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.062, 0.062, 0.13, 20]} />
      </SketchMesh>
      <SeamRing partId="motor" center={[0, -0.245, 0]} radius={0.064} tube={0.008} axis="y" />
      <SeamRing partId="motor" center={[0, -0.315, 0]} radius={0.064} tube={0.008} axis="y" />
      {[-1, 1].map(s => (
        <SketchMesh key={s} partId="motor" position={[s * 0.085, -0.245, 0]}>
          <boxGeometry args={[0.02, 0.14, 0.05]} />
        </SketchMesh>
      ))}

      {/* 底座：圆台 + 螺栓圈 + 出线口 */}
      <SketchMesh partId="base" position={[0, -0.375, 0]}>
        <cylinderGeometry args={[0.16, 0.18, 0.06, 22]} />
      </SketchMesh>
      <BoltCircle partId="base" center={[0, -0.35, 0]} radius={0.13} count={8} boltRadius={0.011} height={0.02} axis="y" />
      <SketchMesh partId="base" position={[0.13, -0.36, 0]}>
        <boxGeometry args={[0.05, 0.045, 0.04]} />
      </SketchMesh>

      {/* 信号线：从出线口折下来的一段粗导线 */}
      <Rod partId="wire" from={[0.15, -0.365, 0]} to={[0.3, -0.44, 0.02]} radius={0.013} />
      <Rod partId="wire" from={[0.3, -0.44, 0.02]} to={[0.46, -0.4, 0]} radius={0.013} />

      {/* 图纸装饰：盘面的轴向中心线 */}
      <DraftLine points={[[0, 0.5, 0.62], [0, -0.42, -0.52]]} opacity={0.16} />
    </group>
  )
}
