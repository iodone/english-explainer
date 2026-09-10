import { SketchMesh, Rod, DraftLine } from './primitives'

/** 卫星 —— 中央主体轮廓：太阳翼、计算盒、相机、天线、星敏感器与推力器 */
export default function SatelliteSketch() {
  return (
    <group>
      <DraftLine
        points={[
          [-0.28, 0.43, 0],
          [0.28, 0.43, 0],
          [0.28, -0.43, 0],
          [-0.28, -0.43, 0],
          [-0.28, 0.43, 0],
        ]}
      />

      <SketchMesh partId="brain-box" position={[0, 0.25, 0]}>
        <boxGeometry args={[0.3, 0.22, 0.3]} />
      </SketchMesh>

      {[-1, 1].map(side => (
        <group key={`sun-wing-${side}`}>
          <SketchMesh partId="sun-wings" position={[side * 1.02, 0.05, 0]}>
            <boxGeometry args={[1.25, 0.04, 0.55]} />
          </SketchMesh>
          <Rod
            from={[side * 0.28, 0.05, 0]}
            to={[side * 0.4, 0.05, 0]}
            radius={0.025}
            partId="sun-wings"
          />
          {[-0.15, 0, 0.15].map(offset => (
            <DraftLine
              key={`wing-line-${side}-${offset}`}
              points={[
                [side * 0.44, 0.08, offset],
                [side * 1.6, 0.08, offset],
              ]}
            />
          ))}
        </group>
      ))}

      {[-0.16, 0.16].map(z => (
        <SketchMesh key={`turn-wheel-${z}`} partId="turn-wheels" position={[0, -0.12, z]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.05, 16]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="watch-eye" position={[0, -0.62, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.18, 14]} />
      </SketchMesh>
      <SketchMesh partId="watch-eye" position={[0, -0.72, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.07, 0.015, 8, 18]} />
      </SketchMesh>

      <Rod from={[0, 0.43, 0]} to={[0.25, 0.72, 0]} radius={0.025} partId="talk-dish" />
      <SketchMesh partId="talk-dish" position={[0.25, 0.78, 0]} rotation={[0, 0, -0.5]}>
        <torusGeometry args={[0.16, 0.02, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="talk-dish" position={[0.25, 0.88, 0]}>
        <sphereGeometry args={[0.03, 10, 8]} />
      </SketchMesh>

      <SketchMesh partId="star-eyes" position={[-0.25, 0.6, 0]} rotation={[0, 0, -0.6]}>
        <cylinderGeometry args={[0.05, 0.05, 0.16, 12]} />
      </SketchMesh>

      {[
        [-0.22, -0.5, -0.22],
        [0.22, -0.5, -0.22],
        [-0.22, -0.5, 0.22],
        [0.22, -0.5, 0.22],
      ].map(([x, y, z], index) => (
        <SketchMesh key={`push-foot-${index}`} partId="push-feet" position={[x, y, z]}>
          <cylinderGeometry args={[0.02, 0.05, 0.1, 8]} />
        </SketchMesh>
      ))}

      {[0.22, 0.32, 0.42].map(offset => (
        <DraftLine
          key={`signal-arc-${offset}`}
          points={[
            [0.38 + offset * 0.5, 0.9 + offset * 0.2, 0],
            [0.48 + offset * 0.5, 1.04 + offset * 0.2, 0],
            [0.62 + offset * 0.5, 1.12 + offset * 0.2, 0],
          ]}
        />
      ))}
      <DraftLine points={[[-0.85, -0.85, 0], [-0.3, -0.75, 0], [0.3, -0.78, 0], [0.85, -0.9, 0]]} />
      <DraftLine points={[[-0.7, -0.98, 0], [-0.2, -0.88, 0], [0.25, -0.9, 0], [0.7, -1.02, 0]]} />
      {[
        [-1.1, 1.0],
        [1.25, 1.35],
        [-0.55, 1.45],
      ].map(([x, y], index) => (
        <group key={`star-${index}`}>
          <DraftLine points={[[x - 0.05, y, 0], [x + 0.05, y, 0]]} />
          <DraftLine points={[[x, y - 0.05, 0], [x, y + 0.05, 0]]} />
        </group>
      ))}
      <DraftLine points={[[-1.6, 0.6, 0], [-1.35, 0.55, 0]]} />
      <DraftLine points={[[-1.6, 0.35, 0], [-1.35, 0.32, 0]]} />
    </group>
  )
}
