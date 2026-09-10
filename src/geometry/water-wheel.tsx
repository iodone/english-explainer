import { SketchMesh, Rod, DraftLine } from './primitives'

/** 水车 —— 侧视：水槽、闸门、桨轮、轴系、齿轮组与磨石 */
export default function WaterWheelSketch() {
  return (
    <group>
      <SketchMesh partId="big-wheel" position={[-0.35, 0.15, 0]}>
        <torusGeometry args={[0.95, 0.045, 10, 40]} />
      </SketchMesh>
      {Array.from({ length: 8 }, (_, index) => {
        const angle = (index / 8) * Math.PI * 2
        return (
          <Rod
            key={`spoke-${index}`}
            from={[-0.35, 0.15, 0]}
            to={[-0.35 + Math.cos(angle) * 0.9, 0.15 + Math.sin(angle) * 0.9, 0]}
            radius={0.02}
            partId="big-wheel"
          />
        )
      })}

      {Array.from({ length: 12 }, (_, index) => {
        const angle = (index / 12) * Math.PI * 2
        return (
          <SketchMesh
            key={`water-board-${index}`}
            partId="water-boards"
            position={[-0.35 + Math.cos(angle), 0.15 + Math.sin(angle), 0]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.2, 0.13, 0.14]} />
          </SketchMesh>
        )
      })}

      <SketchMesh partId="middle-stick" position={[-0.35, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.28, 12]} />
      </SketchMesh>
      <SketchMesh partId="middle-stick" position={[0.35, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 1.4, 10]} />
      </SketchMesh>

      <SketchMesh partId="gear-wheels" position={[1.05, 0.15, 0]}>
        <torusGeometry args={[0.2, 0.035, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="gear-wheels" position={[1.38, 0.42, 0]}>
        <torusGeometry args={[0.13, 0.035, 8, 20]} />
      </SketchMesh>
      {[
        { x: 1.05, y: 0.15, r: 0.25 },
        { x: 1.38, y: 0.42, r: 0.18 },
      ].map(({ x, y, r }, gearIndex) =>
        Array.from({ length: 8 }, (_, toothIndex) => {
          const angle = (toothIndex / 8) * Math.PI * 2
          return (
            <SketchMesh
              key={`gear-tooth-${gearIndex}-${toothIndex}`}
              partId="gear-wheels"
              position={[x + Math.cos(angle) * r, y + Math.sin(angle) * r, 0]}
            >
              <boxGeometry args={[0.05, 0.05, 0.04]} />
            </SketchMesh>
          )
        }),
      )}
      <Rod from={[1.38, 0.42, 0]} to={[1.38, 0.64, 0]} radius={0.022} partId="gear-wheels" />

      <SketchMesh partId="stone-pair" position={[1.15, 0.72, 0]}>
        <cylinderGeometry args={[0.32, 0.32, 0.12, 20]} />
      </SketchMesh>
      <SketchMesh partId="stone-pair" position={[1.15, 0.56, 0]}>
        <cylinderGeometry args={[0.32, 0.32, 0.12, 20]} />
      </SketchMesh>

      <SketchMesh partId="water-road" position={[-1.25, 1.32, 0]} rotation={[0, 0, -0.15]}>
        <boxGeometry args={[1.1, 0.08, 0.34]} />
      </SketchMesh>

      <SketchMesh partId="water-gate" position={[-0.7, 1.13, 0]}>
        <boxGeometry args={[0.07, 0.36, 0.3]} />
      </SketchMesh>
      <Rod from={[-0.7, 1.31, 0]} to={[-0.7, 1.56, 0]} radius={0.02} partId="water-gate" />

      <DraftLine
        points={[
          [0.85, -0.5, 0],
          [1.6, -0.5, 0],
          [1.6, 1.05, 0],
          [0.85, 1.05, 0],
          [0.85, -0.5, 0],
        ]}
      />
      <DraftLine points={[[0.78, 1.05, 0], [1.225, 1.4, 0], [1.67, 1.05, 0]]} />
      <DraftLine
        points={[
          [1.15, -0.5, 0],
          [1.08, -0.28, 0],
          [1.22, -0.28, 0],
          [1.15, -0.5, 0],
        ]}
      />

      <DraftLine points={[[-1.7, -0.85, 0], [0.2, -0.85, 0]]} />
      {[-1.35, -0.95, -0.55].map(x => (
        <DraftLine key={`wave-${x}`} points={[[x, -0.78, 0], [x + 0.1, -0.73, 0], [x + 0.2, -0.78, 0]]} />
      ))}
      {[-0.66, -0.58, -0.5].map((x, index) => (
        <DraftLine key={`fall-${index}`} points={[[x, 1.22 - index * 0.02, 0], [x, 1.09, 0]]} />
      ))}
      <DraftLine points={[[0.9, -0.5, 0], [0.9, -0.85, 0]]} />
      <DraftLine points={[[1.55, -0.5, 0], [1.55, -0.85, 0]]} />
      <DraftLine points={[[-1.8, -0.85, 0], [1.8, -0.85, 0]]} />
    </group>
  )
}
