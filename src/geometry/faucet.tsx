import { SketchMesh, Rod, DraftLine } from './primitives'

/** 水龙头 —— 侧剖图：墙内水管、双盘阀、螺纹杆、十字把手和落水气泡 */
export default function FaucetSketch() {
  return (
    <group>
      <DraftLine points={[[-1.5, -0.9, 0], [-1.5, 0.3, 0], [-1.35, 0.3, 0], [-1.35, -0.9, 0], [-1.5, -0.9, 0]]} />
      {Array.from({ length: 4 }, (_, index) => (
        <DraftLine
          key={`wall-mark-${index}`}
          points={[[-1.49, -0.8 + index * 0.25, 0], [-1.36, -0.72 + index * 0.25, 0]]}
        />
      ))}

      <Rod from={[-1.5, -0.75, 0]} to={[-0.6, -0.75, 0]} radius={0.09} partId="water-pipe" />
      <Rod from={[-0.6, -0.75, 0]} to={[-0.6, -0.2, 0]} radius={0.09} partId="water-pipe" />

      <SketchMesh partId="tap-body" position={[-0.6, 0.15, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.75, 24]} />
      </SketchMesh>

      <SketchMesh partId="turn-doors" position={[-0.6, -0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.03, 20]} />
      </SketchMesh>
      <SketchMesh partId="turn-doors" position={[-0.6, -0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.03, 20]} />
      </SketchMesh>
      <SketchMesh partId="turn-doors" position={[-0.53, -0.12, 0.09]}>
        <boxGeometry args={[0.05, 0.05, 0.01]} />
      </SketchMesh>
      <SketchMesh partId="turn-doors" position={[-0.53, -0.08, 0.09]}>
        <boxGeometry args={[0.05, 0.05, 0.01]} />
      </SketchMesh>

      <SketchMesh partId="turning-screw" position={[-0.6, 0.35, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.5, 12]} />
      </SketchMesh>
      {Array.from({ length: 4 }, (_, index) => (
        <DraftLine
          key={`screw-turn-${index}`}
          points={[
            [-0.65, 0.18 + index * 0.1, 0.04],
            [-0.55, 0.23 + index * 0.1, 0.04],
          ]}
        />
      ))}

      <SketchMesh partId="hand-turner" position={[-0.6, 0.68, 0]}>
        <boxGeometry args={[0.5, 0.05, 0.05]} />
      </SketchMesh>
      <SketchMesh partId="hand-turner" position={[-0.6, 0.68, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.5]} />
      </SketchMesh>

      <SketchMesh partId="tap-body" position={[-0.35, 0.5, 0]}>
        <boxGeometry args={[0.14, 0.3, 0.14]} />
      </SketchMesh>
      <SketchMesh partId="spout-mouth" position={[0, 0.55, 0]}>
        <boxGeometry args={[0.7, 0.14, 0.14]} />
      </SketchMesh>

      <SketchMesh partId="air-adder" position={[0.38, 0.48, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.08, 14]} />
      </SketchMesh>

      <DraftLine
        points={[
          [-1.4, -0.75, 0],
          [-0.6, -0.75, 0],
          [-0.6, -0.1, 0],
          [-0.3, 0.5, 0],
          [0.35, 0.55, 0],
          [0.38, 0.4, 0],
          [0.38, -0.7, 0],
        ]}
      />
      {Array.from({ length: 3 }, (_, bubbleIndex) => {
        const y = -0.22 + bubbleIndex * -0.18
        return Array.from({ length: 8 }, (_, pointIndex) => {
          const startAngle = (pointIndex / 8) * Math.PI * 2
          const endAngle = ((pointIndex + 1) / 8) * Math.PI * 2
          return (
            <DraftLine
              key={`bubble-${bubbleIndex}-${pointIndex}`}
              points={[
                [0.38 + Math.cos(startAngle) * 0.025, y + Math.sin(startAngle) * 0.025, 0],
                [0.38 + Math.cos(endAngle) * 0.025, y + Math.sin(endAngle) * 0.025, 0],
              ]}
            />
          )
        })
      })}
      <DraftLine points={[[-0.46, 0.88, 0], [-0.6, 0.94, 0], [-0.74, 0.88, 0]]} />
      <DraftLine points={[[-0.44, 0.96, 0], [-0.6, 1.02, 0], [-0.76, 0.96, 0]]} />
      <DraftLine points={[[-0.52, 1.03, 0], [-0.68, 1.09, 0]]} />

      <DraftLine points={[[0.1, -0.85, 0], [0.9, -0.85, 0], [0.9, -0.7, 0], [0.1, -0.7, 0], [0.1, -0.85, 0]]} />
      <DraftLine points={[[0.15, -0.77, 0], [0.85, -0.77, 0]]} />
    </group>
  )
}
