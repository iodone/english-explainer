import {
  SketchMesh,
  Rod,
  DraftLine,
  BoltCircle,
  SeamRing,
  TickRing,
  Gear,
} from './primitives'

/**
 * 挂钟 —— 表盘 + 双针（10:10 姿态）+ 拉出下方的机芯（轮系/发条/擒纵/摆轮）
 *
 * 2026-10-13 anatomy 技法：零件不再是"几个圆柱"，而是真齿形的轮系 + 60 分刻度 +
 * 背板螺栓圈 + 箍带缝；三个齿轮按「中心距 = 两分度圆半径之和」真正啮合摆放。
 */
export default function ClockSketch() {
  const face: [number, number] = [0.1, 0.25]
  const dialZ = 0.16

  // 轮系三挡（分度圆半径 = 中心距分配，保证啮合）
  const gearA: [number, number] = [0.15, -0.85] // 大轮 r .20
  const gearB: [number, number] = [-0.19, -0.85] // 中轮 r .14（距 A .34 = .20+.14）
  const gearC: [number, number] = [-0.315, -0.634] // 小轮 r .11（距 B .25 = .14+.11）

  return (
    <group>
      {/* 表盘：盘面 + 外圈 + 中心轴帽 + 60 分刻度（长刻度每 5 分一条） */}
      <SketchMesh partId="time-face" position={[face[0], face[1], 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.06, 48]} />
      </SketchMesh>
      <SketchMesh partId="time-face" position={[face[0], face[1], 0.13]}>
        <torusGeometry args={[0.8, 0.06, 8, 48]} />
      </SketchMesh>
      <SketchMesh partId="time-face" position={[face[0], face[1], 0.16]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.05, 8]} />
      </SketchMesh>
      <TickRing
        center={[face[0], face[1], dialZ + 0.005]}
        radius={0.66}
        count={60}
        longEvery={5}
        long={0.1}
        short={0.045}
      />

      {/* 表圈内侧的分缝与紧固（图版细节密度） */}
      <SeamRing partId="time-face" center={[face[0], face[1], 0.11]} radius={0.72} tube={0.012} />
      <BoltCircle
        partId="time-face"
        center={[face[0], face[1], 0.13]}
        radius={0.735}
        count={12}
        boltRadius={0.016}
        height={0.03}
      />

      {/* 短针（时针，指向 10 点）与长针（分针，指向 2 点），各带配重尾 */}
      <SketchMesh partId="short-pointer" position={[-0.07, 0.35, 0.18]} rotation={[0, 0, Math.PI / 3]}>
        <boxGeometry args={[0.06, 0.4, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="short-pointer" position={[0.13, 0.11, 0.18]} rotation={[0, 0, Math.PI / 3]}>
        <cylinderGeometry args={[0.035, 0.035, 0.02, 10]} />
      </SketchMesh>
      <SketchMesh partId="long-pointer" position={[0.37, 0.41, 0.2]} rotation={[0, 0, -Math.PI / 3]}>
        <boxGeometry args={[0.045, 0.62, 0.02]} />
      </SketchMesh>
      <SketchMesh partId="long-pointer" position={[0.06, 0.19, 0.2]} rotation={[0, 0, -Math.PI / 3]}>
        <cylinderGeometry args={[0.03, 0.03, 0.02, 10]} />
      </SketchMesh>

      {/* 转动心脏：三枚真齿形齿轮，按中心距啮合 */}
      <Gear partId="turning-heart" radius={0.2} teeth={20} toothDepth={0.05} depth={0.05} position={[gearA[0], gearA[1], -0.08]} />
      <Gear partId="turning-heart" radius={0.14} teeth={14} toothDepth={0.042} depth={0.05} position={[gearB[0], gearB[1], -0.08]} />
      <Gear partId="turning-heart" radius={0.11} teeth={11} toothDepth={0.036} depth={0.05} position={[gearC[0], gearC[1], -0.08]} />
      {/* 夹板 + 轴孔螺栓 */}
      <SketchMesh position={[0.15, -0.85, -0.17]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.44, 0.44, 0.02, 6]} />
      </SketchMesh>
      <BoltCircle
        partId="turning-heart"
        center={[0.15, -0.85, -0.18]}
        radius={0.36}
        count={6}
        boltRadius={0.02}
        height={0.03}
      />

      {/* 上发条金属：三圈同心盘簧 + 卷轴 */}
      <SketchMesh partId="push-back-metal" position={[1.0, -0.45, -0.06]}>
        <torusGeometry args={[0.26, 0.035, 6, 32]} />
      </SketchMesh>
      <SketchMesh partId="push-back-metal" position={[1.0, -0.45, -0.06]}>
        <torusGeometry args={[0.18, 0.032, 6, 28]} />
      </SketchMesh>
      <SketchMesh partId="push-back-metal" position={[1.0, -0.45, -0.06]}>
        <torusGeometry args={[0.1, 0.03, 6, 22]} />
      </SketchMesh>
      <SketchMesh partId="push-back-metal" position={[1.0, -0.45, -0.06]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.06, 10]} />
      </SketchMesh>

      {/* 滴答止动器：擒纵叉 + 擒纵轮（轮齿更尖，齿数更多） */}
      <SketchMesh partId="tick-stopper" position={[-0.75, -0.42, -0.06]}>
        <boxGeometry args={[0.09, 0.26, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="tick-stopper" position={[-0.62, -0.72, -0.06]}>
        <boxGeometry args={[0.2, 0.06, 0.05]} />
      </SketchMesh>
      <Gear partId="tick-stopper" radius={0.13} teeth={15} toothDepth={0.05} depth={0.05} position={[-0.55, -0.62, -0.08]} />

      {/* 快摆轮：摆轮环 + 游丝连杆 + 三根辐条 */}
      <SketchMesh partId="swing-wheel" position={[-1.0, -0.95, -0.06]}>
        <torusGeometry args={[0.18, 0.045, 8, 26]} />
      </SketchMesh>
      {[0, 1, 2].map(i => {
        const a = (i / 3) * Math.PI
        return (
          <Rod
            key={i}
            partId="swing-wheel"
            from={[-1.0 - Math.cos(a) * 0.17, -0.95 - Math.sin(a) * 0.17, -0.06]}
            to={[-1.0 + Math.cos(a) * 0.17, -0.95 + Math.sin(a) * 0.17, -0.06]}
            radius={0.012}
          />
        )
      })}
      <Rod from={[-0.85, -0.9, -0.06]} to={[-0.68, -0.66, -0.06]} radius={0.015} partId="swing-wheel" />

      {/* 机芯底板的中心轴线（制图习惯：淡墨虚线） */}
      <DraftLine
        points={[
          [-1.3, -0.3, -0.13],
          [-0.55, -0.3, -0.13],
        ]}
        opacity={0.22}
      />
    </group>
  )
}
