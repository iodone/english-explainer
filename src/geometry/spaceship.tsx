import { SketchMesh, DraftLine } from './primitives'

/** 宇宙飞船 — space：机身、机翼、尾翼、机头、窗户、舱门、发动机 */

export default function SpaceshipSketch() {
  return (
    <group>
      {/* body — 机身 */}
      <SketchMesh partId="body" position={[0, 0, 0]}>
        <boxGeometry args={[0.56, 0.16, 0.18]} />
      </SketchMesh>

      {/* wings — 双翼 */}
      <SketchMesh partId="wings" position={[-0.04, -0.04, 0.22]}>
        <boxGeometry args={[0.28, 0.02, 0.20]} />
      </SketchMesh>
      <SketchMesh partId="wings" position={[-0.04, -0.04, -0.22]}>
        <boxGeometry args={[0.28, 0.02, 0.20]} />
      </SketchMesh>

      {/* tail — 垂直尾翼 */}
      <SketchMesh partId="tail" position={[-0.36, 0.10, 0]}>
        <boxGeometry args={[0.10, 0.16, 0.015]} />
      </SketchMesh>

      {/* nose — 锥形头部 */}
      <SketchMesh partId="nose" position={[0.36, 0, 0]}>
        <boxGeometry args={[0.10, 0.10, 0.10]} />
      </SketchMesh>

      {/* windows — 舷窗 */}
      <SketchMesh partId="windows" position={[0.12, 0.08, 0.08]}>
        <boxGeometry args={[0.06, 0.04, 0.008]} />
      </SketchMesh>
      <SketchMesh partId="windows" position={[0.20, 0.08, 0.08]}>
        <boxGeometry args={[0.06, 0.04, 0.008]} />
      </SketchMesh>

      {/* door — 舱门 */}
      <SketchMesh partId="door" position={[-0.08, 0.08, 0.10]}>
        <boxGeometry args={[0.08, 0.10, 0.008]} />
      </SketchMesh>

      {/* engines — 发动机 */}
      <SketchMesh partId="engines" position={[-0.34, -0.06, 0.06]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.04, 0.10, 12]} />
      </SketchMesh>
      <SketchMesh partId="engines" position={[-0.34, -0.06, -0.06]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.04, 0.10, 12]} />
      </SketchMesh>

      {/* decor — 地面线 */}
      <DraftLine points={[[-0.9, -0.28, 0], [0.9, -0.28, 0]]} />

      {/* decor — 尾焰 */}
      <DraftLine points={[[-0.40, -0.06, 0.06], [-0.52, -0.06, 0.06]]} />
      <DraftLine points={[[-0.40, -0.06, -0.06], [-0.52, -0.06, -0.06]]} />
      <DraftLine points={[[-0.40, -0.06, 0], [-0.56, -0.06, 0]]} />
    </group>
  )
}