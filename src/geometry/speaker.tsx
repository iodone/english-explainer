import { SketchMesh, Rod, DraftLine } from './primitives'

/** 音箱 —— 正视剖开：箱体 + 纸盆 + 音圈环 + 磁铁 + 低音孔 + 信号线，前方淡墨弧线示声波 */
export default function SpeakerSketch() {
  const wave = (r: number): [number, number, number][] =>
    Array.from({ length: 9 }, (_, i) => {
      const a = (-Math.PI / 3) + (i / 8) * (2 * Math.PI / 3)
      return [0.1 + r * Math.sin(a), 0.1 + r * Math.cos(a), 0.62] as [number, number, number]
    })

  return (
    <group>
      {/* 箱体 */}
      <SketchMesh partId="box-body" position={[0.1, 0.1, -0.2]}>
        <boxGeometry args={[1.1, 1.5, 0.9]} />
      </SketchMesh>

      {/* 纸盆（小端朝前）+ 防尘帽 */}
      <SketchMesh partId="sound-paper" position={[0.1, 0.1, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.42, 0.45, 24]} />
      </SketchMesh>
      <SketchMesh partId="sound-paper" position={[0.1, 0.1, 0.3]}>
        <sphereGeometry args={[0.09, 10, 8]} />
      </SketchMesh>

      {/* 音圈环（通电成磁的环）+ 固定磁铁 */}
      <SketchMesh partId="wire-ring" position={[0.1, 0.1, -0.02]}>
        <torusGeometry args={[0.14, 0.04, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="still-magnet" position={[0.1, 0.1, -0.16]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.22, 12]} />
      </SketchMesh>

      {/* 低音孔：贯通箱体前后 */}
      <SketchMesh partId="air-hole" position={[0.1, -0.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.95, 12]} />
      </SketchMesh>

      {/* 信号线：从箱体后上角引出 */}
      <Rod from={[0.1, 0.7, -0.65]} to={[0.5, 0.85, -0.95]} radius={0.02} partId="sound-wire" />

      {/* 声波弧线（淡墨，纸盆正前三道弧） */}
      {[0.38, 0.58, 0.78].map(r => (
        <DraftLine key={r} points={wave(r)} />
      ))}
    </group>
  )
}
