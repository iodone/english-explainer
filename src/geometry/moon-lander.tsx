import { SketchMesh, Rod, DraftLine } from './primitives'

/** 登月舱 —— 侧视两级结构：下降级、上升级、双喷火件、支腿、梯子与金箔蒙皮 */
export default function MoonLanderSketch() {
  return (
    <group>
      <SketchMesh partId="bottom-room" position={[0, -0.15, 0]}>
        <boxGeometry args={[0.9, 0.42, 0.9]} />
      </SketchMesh>

      <SketchMesh partId="top-room" position={[0, 0.32, 0]}>
        <boxGeometry args={[0.62, 0.5, 0.62]} />
      </SketchMesh>
      <DraftLine
        points={[
          [-0.15, 0.46, 0.315],
          [0.0, 0.46, 0.315],
          [0.0, 0.57, 0.315],
          [-0.15, 0.57, 0.315],
          [-0.15, 0.46, 0.315],
        ]}
      />
      <DraftLine
        points={[
          [0.12, 0.46, 0.315],
          [0.27, 0.46, 0.315],
          [0.27, 0.57, 0.315],
          [0.12, 0.57, 0.315],
          [0.12, 0.46, 0.315],
        ]}
      />

      <SketchMesh partId="gold-coat" position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.66, 0.66, 0.44, 8, 1, true]} />
      </SketchMesh>

      <SketchMesh partId="landing-fire" position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.14, 0.26, 0.28, 14]} />
      </SketchMesh>

      <SketchMesh partId="up-engine" position={[0, 0.66, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.18, 12]} />
      </SketchMesh>

      {[-1, 1].map(xSign =>
        [-1, 1].map(zSign => (
          <group key={`moon-leg-${xSign}-${zSign}`}>
            <Rod
              from={[xSign * 0.45, -0.3, zSign * 0.3]}
              to={[xSign * 0.72, -0.73, zSign * 0.3]}
              radius={0.028}
              partId="moon-legs"
            />
            <SketchMesh partId="moon-legs" position={[xSign * 0.72, -0.76, zSign * 0.3]}>
              <cylinderGeometry args={[0.13, 0.13, 0.05, 10]} />
            </SketchMesh>
          </group>
        )),
      )}

      <Rod from={[-0.13, 0.08, 0.68]} to={[-0.13, -0.72, 0.68]} radius={0.018} partId="moon-steps" />
      <Rod from={[0.13, 0.08, 0.68]} to={[0.13, -0.72, 0.68]} radius={0.018} partId="moon-steps" />
      {Array.from({ length: 6 }, (_, index) => (
        <Rod
          key={`moon-step-${index}`}
          from={[-0.13, -0.02 - index * 0.13, 0.68]}
          to={[0.13, -0.02 - index * 0.13, 0.68]}
          radius={0.014}
          partId="moon-steps"
        />
      ))}

      <DraftLine points={[[-1.5, -0.82, 0], [-0.5, -0.86, 0], [0.5, -0.86, 0], [1.5, -0.82, 0]]} />
      <DraftLine points={[[-0.2, -0.82, 0], [0.1, -0.82, 0]]} />
      <DraftLine points={[[0.7, -0.84, 0], [0.95, -0.84, 0]]} />

      {[
        [-1.2, 1.2],
        [1.3, 1.0],
        [-0.8, 1.8],
        [1.0, 1.7],
      ].map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}

      {Array.from({ length: 8 }, (_, index) => {
        const startAngle = (index / 8) * Math.PI * 2
        const endAngle = ((index + 1) / 8) * Math.PI * 2
        return (
          <DraftLine
            key={`earth-${index}`}
            points={[
              [1.45 + Math.cos(startAngle) * 0.12, 1.45 + Math.sin(startAngle) * 0.12, 0],
              [1.45 + Math.cos(endAngle) * 0.12, 1.45 + Math.sin(endAngle) * 0.12, 0],
            ]}
          />
        )
      })}
      <DraftLine points={[[1.38, 1.45, 0], [1.52, 1.48, 0]]} />
    </group>
  )
}
