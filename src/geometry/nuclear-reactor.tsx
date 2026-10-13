import {
  SketchMesh,
  Rod,
  BoltCircle,
  SeamRing,
  PanelLines,
} from './primitives'

/**
 * Heavy Metal Power Building（nuclear-reactor）
 * 安全壳穹顶 / 堆芯 / 控制棒 / 冷却塔 / 汽轮机
 *
 * 2026-10-13 anatomy 技法：穹顶改透明壳（finish='shell'）露出内部堆芯 ——
 * 这是 DESIGN §1.5「双层表达」的正解；另补箍带缝、法兰螺栓圈、底座分缝、
 * 检修梯，让大件不再是一根光筒。
 */
export default function NuclearReactorSketch() {
  return (
    <group>
      {/* 安全壳穹顶（finish=shell：纸面 22% 透明，堆芯与控制棒透出来） */}
      <SketchMesh partId="building" position={[0, 2, 0]}>
        <sphereGeometry args={[2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </SketchMesh>
      {/* 穹顶底环加强箍 + 环形基础 */}
      <SeamRing partId="building" center={[0, 2.02, 0]} radius={2.0} tube={0.07} />
      <SketchMesh partId="building" position={[0, 1.94, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.05, 2.15, 0.16, 40]} />
      </SketchMesh>
      <BoltCircle partId="building" center={[0, 1.9, 0]} radius={1.98} count={16} boltRadius={0.05} height={0.1} axis="y" />
      {/* 穹顶通风短管 */}
      <SketchMesh partId="building" position={[1.1, 3.15, 0.6]}>
        <cylinderGeometry args={[0.14, 0.16, 0.5, 10]} />
      </SketchMesh>
      <SeamRing partId="building" center={[1.1, 3.4, 0.6]} radius={0.16} tube={0.025} />

      {/* 压力壳：筒身 + 法兰螺栓圈 + 两道环缝（结构件，不刷警示红） */}
      <SketchMesh partId="building" position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 3, 32]} />
      </SketchMesh>
      <SeamRing partId="building" center={[0, 1.6, 0]} radius={1.2} tube={0.03} />
      <SeamRing partId="building" center={[0, -0.4, 0]} radius={1.2} tube={0.03} />
      <BoltCircle partId="building" center={[0, 2.0, 0]} radius={1.28} count={12} boltRadius={0.07} height={0.12} axis="y" />
      {/* 堆芯本体（发光红件） */}
      <SketchMesh partId="core" position={[0, 0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.72, 0.72, 2.0, 16]} />
      </SketchMesh>
      {/* 燃料棒束（细节密度：一圈 8 根） */}
      <BoltCircle partId="core" center={[0, 0.4, 0]} radius={0.44} count={8} boltRadius={0.07} height={1.9} axis="y" />

      {/* 控制棒：三根 + 顶部驱动齿条 */}
      {[-0.4, 0, 0.4].map((x, i) => (
        <SketchMesh key={i} partId="rods" position={[x, 1.9, 0]}>
          <boxGeometry args={[0.14, 1.4, 0.14]} />
        </SketchMesh>
      ))}
      <SketchMesh partId="building" position={[0, 2.72, 0]}>
        <boxGeometry args={[1.1, 0.14, 0.3]} />
      </SketchMesh>

      {/* 冷却塔 ×2：筒身 + 三道箍带 + 检修梯 */}
      {[-2.7, 2.7].map((x, i) => (
        <group key={i}>
          <SketchMesh partId="water" position={[x, 1, 0]}>
            <cylinderGeometry args={[0.6, 0.8, 3, 24]} />
          </SketchMesh>
          {[0.45, 1.0, 1.55].map((y, j) => (
            <SeamRing
              key={j}
              partId="water"
              center={[x, y, 0]}
              radius={0.6 + (1.55 - y) * 0.13 + 0.02}
              tube={0.028}
            />
          ))}
          <Rod partId="water" from={[x + 0.72, 0.1, 0]} to={[x + 0.58, 2.4, 0]} radius={0.022} />
          <Rod partId="water" from={[x + 0.78, 1.2, 0]} to={[x + 0.63, 1.2, 0]} radius={0.016} />
        </group>
      ))}

      {/* 蒸汽管 → 汽轮机（两根主管 + 支撑） */}
      <Rod from={[1.2, 1.6, 0]} to={[2.7, 1.6, 0]} partId="steam" />
      <Rod from={[-1.2, 1.6, 0]} to={[-2.7, 1.6, 0]} partId="steam" />
      <Rod from={[1.9, 1.6, 0]} to={[1.9, 0.15, 0]} radius={0.03} partId="steam" />
      <Rod from={[-1.9, 1.6, 0]} to={[-1.9, 0.15, 0]} radius={0.03} partId="steam" />

      {/* 汽轮机：缸体 + 法兰螺栓 + 一圈叶片 + 轴 */}
      <SketchMesh partId="wheel" position={[3.5, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.5, 0.42, 24]} />
      </SketchMesh>
      <SeamRing partId="wheel" center={[3.5, 1, 0]} radius={0.5} tube={0.025} axis="x" />
      <BoltCircle partId="wheel" center={[3.66, 1, 0]} radius={0.56} count={10} boltRadius={0.035} height={0.06} axis="x" />
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2
        return (
          <SketchMesh
            key={i}
            partId="wheel"
            position={[3.5 + Math.cos(angle) * 0.68, 1 + Math.sin(angle) * 0.68, 0]}
            rotation={[0, 0, angle + Math.PI / 2]}
          >
            <boxGeometry args={[0.3, 0.05, 0.05]} />
          </SketchMesh>
        )
      })}
      <Rod from={[3.5, 1, 0]} to={[4.35, 1, 0]} radius={0.06} partId="wheel" />

      {/* 厂房底座：分缝 + 中心轴线 */}
      <PanelLines
        lines={[
          [[-4.2, -0.62, -1.7], [4.2, -0.62, -1.7]],
          [[-4.2, -0.62, 1.7], [4.2, -0.62, 1.7]],
          [[-4.2, -0.62, -1.7], [-4.2, -0.62, 1.7]],
          [[-0.1, -0.62, -1.7], [-0.1, -0.62, 1.7]],
          [[2.4, -0.62, -1.7], [2.4, -0.62, 1.7]],
        ]}
        opacity={0.26}
      />
    </group>
  )
}
