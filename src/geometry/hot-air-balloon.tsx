import { SketchMesh, Rod, DraftLine } from './primitives'

/** 热气球 —— 纵向构图：布袋、燃烧器、开口、顶门、吊线与载人舱 */
export default function HotAirBalloonSketch() {
  return (
    <group>
      <SketchMesh partId="cloth-bag" position={[0, 1.35, 0]} scale={[1, 1.15, 1]}>
        <sphereGeometry args={[0.85, 18, 14]} />
      </SketchMesh>

      <SketchMesh partId="fire-mouth" position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.26, 0.34, 0.28, 12]} />
      </SketchMesh>

      <SketchMesh partId="fire-maker" position={[0, 0, 0]}>
        <boxGeometry args={[0.34, 0.18, 0.34]} />
      </SketchMesh>
      <Rod from={[-0.15, -0.245, 0]} to={[-0.15, -0.09, 0]} radius={0.022} partId="fire-maker" />
      <Rod from={[0.15, -0.245, 0]} to={[0.15, -0.09, 0]} radius={0.022} partId="fire-maker" />

      <SketchMesh partId="top-door" position={[0, 2.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.16, 0.03, 8, 20]} />
      </SketchMesh>

      {[
        [-0.24, -0.24],
        [0.24, -0.24],
        [0.24, 0.24],
        [-0.24, 0.24],
      ].map(([x, z], index) => (
        <Rod
          key={`tie-line-${index}`}
          from={[x, 0.31, z]}
          to={[Math.sign(x) * 0.23, -0.24, Math.sign(z) * 0.23]}
          radius={0.012}
          partId="tie-lines"
        />
      ))}

      {[-0.16, 0.16].map(x => (
        <SketchMesh key={`fuel-bottle-${x}`} partId="fuel-bottles" position={[x, -0.44, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.28, 10]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="people-box" position={[0, -0.42, 0]}>
        <boxGeometry args={[0.5, 0.35, 0.5]} />
      </SketchMesh>

      {[-0.08, 0, 0.08].map(x => (
        <DraftLine key={`flame-${x}`} points={[[x, 0.1, 0], [x, 0.36, 0]]} />
      ))}

      {[Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4].map((phi, goreIndex) => (
        <DraftLine
          key={`gore-${goreIndex}`}
          points={Array.from({ length: 9 }, (_, k) => {
            const t = 0.3 + ((Math.PI - 0.6) * k) / 8
            return [
              0.85 * Math.sin(t) * Math.cos(phi),
              1.35 + 0.9775 * Math.cos(t),
              0.85 * Math.sin(t) * Math.sin(phi),
            ] as [number, number, number]
          })}
        />
      ))}

      {[
        [-1.5, 1.7, -1.0, 1.7],
        [-1.0, -0.1, -1.5, -0.1],
      ].map(([x1, y, x2], index) => (
        <group key={`wind-${index}`}>
          <DraftLine points={[[x1, y, 0], [x2, y, 0]]} />
          <DraftLine
            points={[
              [x2 - Math.sign(x2 - x1) * 0.12, y + 0.08, 0],
              [x2, y, 0],
              [x2 - Math.sign(x2 - x1) * 0.12, y - 0.08, 0],
            ]}
          />
        </group>
      ))}

      {[
        [-1.25, 1.0],
        [1.15, 1.25],
      ].map(([x, y], index) => (
        <DraftLine
          key={`cloud-${index}`}
          points={[
            [x - 0.16, y, 0],
            [x - 0.07, y + 0.08, 0],
            [x + 0.07, y + 0.08, 0],
            [x + 0.16, y, 0],
          ]}
        />
      ))}

      <DraftLine points={[[-1.5, -0.85, 0], [1.5, -0.85, 0]]} />
      {[-1.0, -0.2, 0.8].map((x, index) => (
        <DraftLine key={`grass-${index}`} points={[[x, -0.85, 0], [x + 0.04, -0.75, 0]]} />
      ))}
    </group>
  )
}
