import { SketchMesh, Rod, DraftLine } from './primitives'

/** 水坝 —— 侧剖：上游蓄水、阶梯坝体、引水管、水轮机房与鱼道 */
export default function DamSketch() {
  return (
    <group>
      <SketchMesh partId="wall-body" position={[0, 0.62, 0]}>
        <boxGeometry args={[0.5, 0.35, 1.0]} />
      </SketchMesh>
      <SketchMesh partId="wall-body" position={[-0.05, 0.22, 0]}>
        <boxGeometry args={[0.7, 0.45, 1.0]} />
      </SketchMesh>
      <SketchMesh partId="wall-body" position={[-0.1, -0.25, 0]}>
        <boxGeometry args={[0.95, 0.5, 1.0]} />
      </SketchMesh>

      <SketchMesh partId="still-water" position={[-1.05, 0.58, 0]}>
        <boxGeometry args={[1.7, 0.04, 1.0]} />
      </SketchMesh>

      <SketchMesh partId="water-gate" position={[0.28, 0.35, 0]}>
        <boxGeometry args={[0.35, 0.4, 0.55]} />
      </SketchMesh>

      <Rod from={[-0.45, 0.5, 0.22]} to={[0.5, -0.5, 0.22]} radius={0.07} partId="fall-pipes" />
      <Rod from={[-0.45, 0.5, -0.22]} to={[0.5, -0.5, -0.22]} radius={0.07} partId="fall-pipes" />

      <SketchMesh partId="spin-rooms" position={[0.95, -0.62, 0]}>
        <boxGeometry args={[0.85, 0.5, 0.95]} />
      </SketchMesh>
      <SketchMesh partId="spin-rooms" position={[0.78, -0.64, 0.5]}>
        <torusGeometry args={[0.18, 0.04, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="spin-rooms" position={[1.05, -0.66, 0.5]}>
        <torusGeometry args={[0.1, 0.03, 8, 16]} />
      </SketchMesh>

      <SketchMesh partId="power-maker" position={[1.5, -0.58, 0]}>
        <boxGeometry args={[0.42, 0.38, 0.6]} />
      </SketchMesh>
      <SketchMesh partId="power-maker" position={[1.5, -0.36, 0]}>
        <boxGeometry args={[0.5, 0.06, 0.66]} />
      </SketchMesh>

      {[
        [-0.35, 0.5],
        [-0.1, 0.1],
        [0.15, -0.3],
        [0.4, -0.7],
      ].map(([x, y], index) => (
        <SketchMesh key={`fish-way-${index}`} partId="fish-way" position={[x, y, 0.45]}>
          <boxGeometry args={[0.2, 0.07, 0.22]} />
        </SketchMesh>
      ))}

      <DraftLine points={[[0.3, 0.25, 0.28], [0.42, 0.0, 0.28], [0.5, -0.25, 0.28]]} />
      <DraftLine points={[[0.3, 0.25, -0.28], [0.42, 0.0, -0.28], [0.5, -0.25, -0.28]]} />
      <DraftLine points={[[0.6, -0.95, 0], [1.9, -0.95, 0]]} />
      <DraftLine points={[[0.7, -1.05, -0.3], [1.8, -1.05, -0.3]]} />
      <DraftLine points={[[-1.9, -0.95, 0], [0.4, -0.95, 0]]} />
      <DraftLine points={[[-1.5, 0.58, 0.3], [-1.1, 0.58, 0.3]]} />
      <DraftLine points={[[-1.7, 0.5, -0.2], [-1.3, 0.5, -0.2]]} />
      <DraftLine points={[[1.5, -0.35, 0], [1.85, 0.1, 0], [2.3, 0.1, 0]]} />
      <DraftLine points={[[2.25, 0.1, 0], [2.25, -0.3, 0]]} />
    </group>
  )
}
