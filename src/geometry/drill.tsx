import { SketchMesh, Rod, DraftLine } from './primitives'

/** 手电钻 —— 侧视朝右：机身电机 + 齿轮组 + 夹头 + 钻头，下探手柄 + 电池；钻尖一圈淡墨示转动 */
export default function DrillSketch() {
  const spin = (): [number, number, number][] =>
    Array.from({ length: 13 }, (_, i) => {
      const a = (i / 12) * Math.PI * 2
      return [1.05, 0.15 + 0.13 * Math.cos(a), 0.13 * Math.sin(a)] as [number, number, number]
    })

  return (
    <group>
      {/* 电机机身 + 尾部凸起 */}
      <SketchMesh partId="spin-maker" position={[-0.1, 0.15, 0]}>
        <boxGeometry args={[0.85, 0.4, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="spin-maker" position={[-0.62, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.25, 10]} />
      </SketchMesh>

      {/* 变速轮组：电机侧小轮快 → 大轮慢而有力 → 输出小轮 */}
      <SketchMesh partId="speed-changer" position={[0.28, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.06, 12]} />
      </SketchMesh>
      <SketchMesh partId="speed-changer" position={[0.45, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.06, 12]} />
      </SketchMesh>
      <SketchMesh partId="speed-changer" position={[0.56, 0.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.06, 12]} />
      </SketchMesh>

      {/* 夹头（锥形三爪）+ 钻头（两段收细） */}
      <SketchMesh partId="turn-grip" position={[0.72, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.09, 0.3, 12]} />
      </SketchMesh>
      <Rod from={[0.87, 0.15, 0]} to={[1.35, 0.15, 0]} radius={0.028} partId="turning-point" />
      <Rod from={[1.35, 0.15, 0]} to={[1.5, 0.15, 0]} radius={0.014} partId="turning-point" />

      {/* 手柄（前倾）+ 底部电池 + 扳机 */}
      <SketchMesh partId="hand-hold" position={[-0.6, -0.42, 0]} rotation={[0, 0, -0.15]}>
        <boxGeometry args={[0.32, 0.85, 0.3]} />
      </SketchMesh>
      <SketchMesh partId="power-box" position={[-0.66, -0.95, 0]} rotation={[0, 0, -0.15]}>
        <boxGeometry args={[0.38, 0.3, 0.34]} />
      </SketchMesh>
      <SketchMesh partId="go-button" position={[-0.42, -0.1, 0.22]}>
        <boxGeometry args={[0.15, 0.28, 0.22]} />
      </SketchMesh>

      {/* 钻杆转动指示圈（淡墨） */}
      <DraftLine points={spin()} />
    </group>
  )
}
