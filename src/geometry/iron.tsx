import { SketchMesh, Rod, DraftLine } from './primitives'

/** 熨斗 —— 侧视剪影：热底板压向布纹，水房、蒸汽孔、调温盘与电源线分层展开 */
export default function IronSketch() {
  return (
    <group>
      <DraftLine points={[[-1.7, -0.64, 0], [0.8, -0.64, 0]]} />
      <DraftLine points={[[-1.7, -0.67, 0], [0.8, -0.67, 0]]} />
      {Array.from({ length: 4 }, (_, index) => (
        <DraftLine
          key={`old-line-${index}`}
          points={[
            [-1.55 + index * 0.18, -0.64, 0],
            [-1.48 + index * 0.18, -0.67, 0],
            [-1.41 + index * 0.18, -0.64, 0],
          ]}
        />
      ))}

      <SketchMesh partId="hot-bottom" position={[-0.1, -0.55, 0]}>
        <boxGeometry args={[1.3, 0.07, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="hot-bottom" position={[-0.85, -0.53, 0]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[0.35, 0.07, 0.4]} />
      </SketchMesh>

      <SketchMesh partId="water-room" position={[0.05, -0.28, 0]}>
        <boxGeometry args={[1.0, 0.38, 0.36]} />
      </SketchMesh>

      <SketchMesh partId="heat-maker" position={[0, -0.13, 0.19]}>
        <boxGeometry args={[0.9, 0.045, 0.05]} />
      </SketchMesh>

      {Array.from({ length: 5 }, (_, index) => (
        <SketchMesh
          key={`steam-hole-${index}`}
          partId="steam-holes"
          position={[-0.55 + index * 0.25, -0.6, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.015, 0.015, 0.04, 8]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="hand-holder" position={[-0.25, 0.05, 0]}>
        <boxGeometry args={[0.05, 0.28, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="hand-holder" position={[0.3, 0.05, 0]}>
        <boxGeometry args={[0.05, 0.28, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="hand-holder" position={[0.02, 0.22, 0]} rotation={[0, 0, -0.06]}>
        <boxGeometry args={[0.72, 0.06, 0.07]} />
      </SketchMesh>

      <SketchMesh partId="heat-wheel" position={[-0.45, -0.28, 0.21]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.04, 16]} />
      </SketchMesh>
      {Array.from({ length: 4 }, (_, index) => {
        const angle = (index / 4) * Math.PI * 2
        return (
          <DraftLine
            key={`heat-mark-${index}`}
            points={[
              [-0.45 + Math.cos(angle) * 0.12, -0.28 + Math.sin(angle) * 0.12, 0.21],
              [-0.45 + Math.cos(angle) * 0.17, -0.28 + Math.sin(angle) * 0.17, 0.21],
            ]}
          />
        )
      })}

      <Rod from={[0.55, -0.2, 0]} to={[0.95, -0.08, 0]} radius={0.02} partId="power-wire" />
      <Rod from={[0.95, -0.08, 0]} to={[1.25, 0.18, 0]} radius={0.02} partId="power-wire" />

      <DraftLine points={[[-0.55, -0.7, 0], [-0.62, -0.82, 0], [-0.48, -0.94, 0], [-0.58, -1.05, 0]]} />
      <DraftLine points={[[-0.2, -0.7, 0], [-0.27, -0.82, 0], [-0.13, -0.94, 0], [-0.23, -1.05, 0]]} />
      <DraftLine points={[[0.15, -0.7, 0], [0.08, -0.82, 0], [0.22, -0.94, 0], [0.12, -1.05, 0]]} />
      <DraftLine points={[[-0.25, -0.14, 0.18], [-0.25, -0.42, 0.1]]} />
      <DraftLine points={[[0.05, -0.14, 0.18], [0.05, -0.42, 0.1]]} />
      <DraftLine points={[[0.35, -0.14, 0.18], [0.35, -0.42, 0.1]]} />
    </group>
  )
}
