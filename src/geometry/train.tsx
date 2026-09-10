import { SketchMesh, Rod, DraftLine } from './primitives'

/** 列车 —— 侧视编组：机车、受电弓、接触网、客车、轮对与双轨 */
export default function TrainSketch() {
  const wheelXs = [0.85, 1.5, -0.4, 0.2, -1.5, -0.9, -2.6, -2.0]

  return (
    <group>
      <SketchMesh partId="power-car" position={[1.15, 0.38, 0]}>
        <boxGeometry args={[1.15, 0.55, 0.52]} />
      </SketchMesh>
      <SketchMesh partId="power-car" position={[1.15, 0.7, 0]}>
        <boxGeometry args={[0.75, 0.1, 0.4]} />
      </SketchMesh>
      <SketchMesh partId="power-car" position={[1.7, 0.32, 0]}>
        <boxGeometry args={[0.35, 0.4, 0.44]} />
      </SketchMesh>

      <Rod from={[1.05, 0.72, 0]} to={[1.18, 0.98, 0]} radius={0.02} partId="power-arm" />
      <Rod from={[1.18, 0.98, 0]} to={[1.31, 0.72, 0]} radius={0.02} partId="power-arm" />
      <SketchMesh partId="power-arm" position={[1.18, 1.0, 0]}>
        <boxGeometry args={[0.32, 0.04, 0.06]} />
      </SketchMesh>

      <Rod from={[-2.5, 1.18, 0]} to={[2.3, 1.18, 0]} radius={0.018} partId="sky-wire" />

      {[-0.1, -1.2, -2.3].map((x, index) => (
        <SketchMesh key={`people-car-${index}`} partId="people-cars" position={[x, 0.35, 0]}>
          <boxGeometry args={[0.95, 0.5, 0.5]} />
        </SketchMesh>
      ))}
      <Rod from={[0.46, 0.3, 0]} to={[0.59, 0.3, 0]} radius={0.025} partId="people-cars" />
      <Rod from={[-0.7, 0.3, 0]} to={[-0.57, 0.3, 0]} radius={0.025} partId="people-cars" />
      <Rod from={[-1.8, 0.3, 0]} to={[-1.67, 0.3, 0]} radius={0.025} partId="people-cars" />

      {wheelXs.map(x =>
        [-0.28, 0.28].map(z => (
          <SketchMesh
            key={`wheel-${x}-${z}`}
            partId="wheel-sets"
            position={[x, 0.17, z]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.17, 0.17, 0.07, 14]} />
          </SketchMesh>
        )),
      )}

      <SketchMesh partId="rail-lines" position={[-0.4, 0.02, 0.28]}>
        <boxGeometry args={[4.1, 0.05, 0.06]} />
      </SketchMesh>
      <SketchMesh partId="rail-lines" position={[-0.4, 0.02, -0.28]}>
        <boxGeometry args={[4.1, 0.05, 0.06]} />
      </SketchMesh>

      {Array.from({ length: 8 }, (_, index) => (
        <DraftLine
          key={`tie-${index}`}
          points={[[-2.4 + index * 0.63, -0.06, -0.3], [-2.4 + index * 0.63, -0.06, 0.3]]}
        />
      ))}
      <DraftLine points={[[-2.95, 0.5, 0], [-3.2, 0.5, 0]]} />
      <DraftLine points={[[-3.0, 0.32, 0], [-3.28, 0.32, 0]]} />
      <DraftLine points={[[-2.9, 0.15, 0], [-3.1, 0.15, 0]]} />
      <DraftLine points={[[2.2, 1.18, 0], [2.2, 0, 0]]} />
      <DraftLine points={[[2.0, 1.0, 0], [2.4, 1.0, 0]]} />
      <DraftLine points={[[-2.2, 1.18, 0], [-2.2, 0, 0]]} />
      <DraftLine points={[[-2.4, 1.0, 0], [-2.0, 1.0, 0]]} />
    </group>
  )
}
