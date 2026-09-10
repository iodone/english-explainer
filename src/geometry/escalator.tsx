import { SketchMesh, Rod, DraftLine } from './primitives'

const stepPositions: Array<[number, number, number]> = [
  [-1.0, -0.28, 0],
  [-0.65, -0.16, 0],
  [-0.3, -0.03, 0],
  [0.05, 0.09, 0],
  [0.4, 0.22, 0],
  [0.75, 0.34, 0],
  [1.1, 0.47, 0],
  [1.45, 0.6, 0],
  [1.78, 0.55, 0],
  [2.06, 0.55, 0],
  [-1.42, -0.36, 0],
  [-1.7, -0.36, 0],
  [1.3, 0.27, 0],
  [0.9, 0.12, 0],
  [0.5, -0.02, 0],
  [0.1, -0.16, 0],
  [-0.3, -0.31, 0],
  [-0.7, -0.45, 0],
]

const lowerMarks: Array<[[number, number], [number, number]]> = [
  [[-2.3, -0.45], [-2.2, -0.52]],
  [[-1.9, -0.45], [-1.8, -0.52]],
  [[-1.5, -0.45], [-1.4, -0.52]],
  [[-1.1, -0.45], [-1.0, -0.52]],
]

const upperMarks: Array<[[number, number], [number, number]]> = [
  [[2.0, 0.6], [2.1, 0.53]],
  [[2.4, 0.6], [2.5, 0.53]],
  [[2.8, 0.6], [2.9, 0.53]],
  [[3.1, 0.6], [3.2, 0.53]],
]

const railSegments: Array<[[number, number], [number, number]]> = [
  [[-1.194, -0.428], [1.506, 0.542]],
  [[1.506, 0.542], [1.82, 0.28]],
  [[-1.194, -0.428], [-1.52, -0.66]],
]

export default function EscalatorSketch() {
  return (
    <group>
      <SketchMesh partId="step-chain" position={[1.55, 0.42, 0]}>
        <torusGeometry args={[0.13, 0.025, 8, 24]} />
      </SketchMesh>
      <SketchMesh partId="step-chain" position={[-1.15, -0.55, 0]}>
        <torusGeometry args={[0.13, 0.025, 8, 24]} />
      </SketchMesh>
      <Rod from={[-1.194, -0.428, 0]} to={[1.506, 0.542, 0]} radius={0.014} partId="step-chain" />
      <Rod from={[-1.106, -0.672, 0]} to={[1.594, 0.298, 0]} radius={0.014} partId="step-chain" />

      {stepPositions.map((position, index) => (
        <SketchMesh key={`step-${index}`} partId="moving-steps" position={position}>
          <boxGeometry args={[0.26, 0.05, 0.55]} />
        </SketchMesh>
      ))}

      {[-0.24, 0.24].map(z =>
        railSegments.map(([from, to], index) => (
          <Rod
            key={`rail-${z}-${index}`}
            from={[...from, z]}
            to={[...to, z]}
            radius={0.008}
            partId="bent-rails"
          />
        )),
      )}

      <SketchMesh partId="motor-heart" position={[2.1, 0.32, 0]}>
        <boxGeometry args={[0.3, 0.22, 0.3]} />
      </SketchMesh>
      <SketchMesh partId="motor-heart" position={[2.1, 0.32, 0]}>
        <torusGeometry args={[0.06, 0.015, 8, 20]} />
      </SketchMesh>
      <Rod from={[1.95, 0.37, 0]} to={[1.68, 0.4, 0]} radius={0.012} partId="motor-heart" />

      <SketchMesh partId="under-room" position={[-1.35, -0.6, 0]}>
        <boxGeometry args={[0.9, 0.35, 0.7]} />
      </SketchMesh>
      <SketchMesh partId="under-room" position={[1.95, 0.3, 0]}>
        <boxGeometry args={[0.85, 0.35, 0.7]} />
      </SketchMesh>

      <Rod from={[-1.3, 0.08, 0.3]} to={[1.8, 1.16, 0.3]} radius={0.016} partId="hand-rail" />
      <Rod from={[-1.27, -0.01, 0.3]} to={[1.83, 1.07, 0.3]} radius={0.016} partId="hand-rail" />
      <SketchMesh partId="hand-rail" position={[-1.3, 0.02, 0.3]}>
        <torusGeometry args={[0.05, 0.012, 8, 20]} />
      </SketchMesh>
      <SketchMesh partId="hand-rail" position={[1.8, 1.11, 0.3]}>
        <torusGeometry args={[0.05, 0.012, 8, 20]} />
      </SketchMesh>

      {[-0.3, 0.3].map(z => (
        <group key={`side-wall-${z}`}>
          <Rod from={[-1.25, 0.02, z]} to={[1.75, 1.1, z]} radius={0.012} partId="side-walls" />
          <Rod from={[-1.35, -0.35, z]} to={[1.65, 0.55, z]} radius={0.012} partId="side-walls" />
          <Rod from={[-0.8, -0.27, z]} to={[-0.8, 0.18, z]} radius={0.008} partId="side-walls" />
          <Rod from={[0.25, 0.09, z]} to={[0.25, 0.54, z]} radius={0.008} partId="side-walls" />
          <Rod from={[1.3, 0.46, z]} to={[1.3, 0.91, z]} radius={0.008} partId="side-walls" />
        </group>
      ))}

      <DraftLine points={[[-2.7, -0.45, 0], [-0.7, -0.45, 0]]} />
      {lowerMarks.map(([from, to], index) => (
        <DraftLine key={`lower-mark-${index}`} points={[[...from, 0], [...to, 0]]} />
      ))}
      <DraftLine points={[[1.7, 0.6, 0], [3.2, 0.6, 0]]} />
      {upperMarks.map(([from, to], index) => (
        <DraftLine key={`upper-mark-${index}`} points={[[...from, 0], [...to, 0]]} />
      ))}
      <DraftLine points={[[-2.7, -0.85, 0], [3.2, -0.85, 0]]} />
      <DraftLine points={[[0.2, 0.5, 0], [0.3, 0.58, 0]]} />
      <DraftLine points={[[0.3, 0.58, 0], [0.4, 0.5, 0]]} />
    </group>
  )
}
