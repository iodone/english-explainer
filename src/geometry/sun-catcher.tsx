import { SketchMesh, Rod, DraftLine } from './primitives'

/** 光伏板 —— 侧视倾角：电池层、玻璃面、背板、电网栅、逆变器与跟踪支架 */
export default function SunCatcherSketch() {
  return (
    <group>
      <group position={[-0.35, 0.2, 0]} rotation={[0, 0, -0.436]}>
        <SketchMesh partId="light-plate" position={[0, 0, 0]}>
          <boxGeometry args={[1.35, 0.05, 0.95]} />
        </SketchMesh>
        <SketchMesh partId="glass-face" position={[0, 0.045, 0]}>
          <boxGeometry args={[1.39, 0.02, 0.99]} />
        </SketchMesh>
        <SketchMesh partId="back-board" position={[0, -0.05, 0]}>
          <boxGeometry args={[1.4, 0.03, 1.0]} />
        </SketchMesh>
        {[-0.3, 0, 0.3].map(y => (
          <SketchMesh key={`wire-row-${y}`} partId="wire-net" position={[0, 0.065, y]}>
            <boxGeometry args={[1.25, 0.02, 0.02]} />
          </SketchMesh>
        ))}
        {[-0.42, -0.14, 0.14, 0.42].map(x => (
          <SketchMesh key={`wire-column-${x}`} partId="wire-net" position={[x, 0.065, 0]}>
            <boxGeometry args={[0.02, 0.02, 0.85]} />
          </SketchMesh>
        ))}
        <SketchMesh partId="sky-turner" position={[0, -0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.25, 14]} />
        </SketchMesh>
      </group>

      <Rod from={[-0.7, -0.75, 0]} to={[-0.35, 0.02, 0]} radius={0.025} partId="stand-legs" />
      <Rod from={[0, -0.75, 0]} to={[-0.35, 0.02, 0]} radius={0.025} partId="stand-legs" />
      <Rod from={[0.5, -0.75, 0]} to={[-0.15, -0.16, 0]} radius={0.02} partId="stand-legs" />

      <SketchMesh partId="light-changer" position={[1.35, -0.6, 0]}>
        <boxGeometry args={[0.4, 0.32, 0.3]} />
      </SketchMesh>
      <SketchMesh partId="light-changer" position={[1.35, -0.41, 0]}>
        <boxGeometry args={[0.46, 0.05, 0.34]} />
      </SketchMesh>

      {Array.from({ length: 8 }, (_, index) => {
        const startAngle = (index / 8) * Math.PI * 2
        const endAngle = ((index + 1) / 8) * Math.PI * 2
        return (
          <DraftLine
            key={`sun-circle-${index}`}
            points={[
              [1.75 + Math.cos(startAngle) * 0.13, 1.35 + Math.sin(startAngle) * 0.13, 0],
              [1.75 + Math.cos(endAngle) * 0.13, 1.35 + Math.sin(endAngle) * 0.13, 0],
            ]}
          />
        )
      })}
      {Array.from({ length: 8 }, (_, index) => {
        const angle = (index / 8) * Math.PI * 2
        return (
          <DraftLine
            key={`sun-ray-${index}`}
            points={[
              [1.75 + Math.cos(angle) * 0.18, 1.35 + Math.sin(angle) * 0.18, 0],
              [1.75 + Math.cos(angle) * 0.29, 1.35 + Math.sin(angle) * 0.29, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[1.5, 1.1, 0], [1.0, 0.85, 0]]} />
      <DraftLine points={[[1.35, 0.95, 0], [0.85, 0.72, 0]]} />
      <DraftLine points={[[1.15, 0.78, 0], [0.68, 0.58, 0]]} />
      <DraftLine points={[[-1.5, -0.75, 0], [2.0, -0.75, 0]]} />
      <DraftLine points={[[0.35, 0.52, 0], [0.9, -0.1, 0], [1.35, -0.44, 0]]} />
    </group>
  )
}
