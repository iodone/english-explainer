import { SketchMesh, Rod, DraftLine } from './primitives'

/** 挖掘机 — 侧视朝右：履带、机身、驾驶室、配重与动臂铲斗 */

const wheelPts: Array<[number, number]> = [
  [-0.28, 0.081],
  [-0.13, 0.081],
  [0.02, 0.081],
  [0.17, 0.081],
  [-0.28, -0.081],
  [-0.13, -0.081],
  [0.02, -0.081],
  [0.17, -0.081],
]

export default function ExcavatorSketch() {
  return (
    <group>
      <SketchMesh partId="road-tracks" position={[-0.10, -0.315, 0]}>
        <boxGeometry args={[0.56, 0.13, 0.16]} />
      </SketchMesh>
      {wheelPts.map(([x, z], index) => (
        <SketchMesh key={`wheel-${index}`} partId="road-tracks" position={[x, -0.325, z]}>
          <sphereGeometry args={[0.032, 10, 8]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="engine-heart" position={[-0.10, -0.135, 0]}>
        <boxGeometry args={[0.40, 0.18, 0.20]} />
      </SketchMesh>
      <Rod from={[-0.19, -0.045, 0]} to={[-0.165, 0.09, 0]} radius={0.012} partId="engine-heart" />

      <SketchMesh partId="driver-box" position={[0.075, -0.005, 0.025]}>
        <boxGeometry args={[0.13, 0.12, 0.15]} />
      </SketchMesh>

      <SketchMesh partId="tail-weight" position={[-0.345, -0.135, 0]}>
        <boxGeometry args={[0.09, 0.13, 0.19]} />
      </SketchMesh>

      <Rod from={[0.06, -0.09, 0]} to={[0.36, 0.09, 0]} radius={0.026} partId="big-arm" />
      <Rod from={[0.36, 0.09, 0]} to={[0.52, -0.14, 0]} radius={0.021} partId="little-arm" />

      <SketchMesh partId="biting-mouth" position={[0.565, -0.185, 0]} rotation={[0, 0, 0.55]}>
        <boxGeometry args={[0.13, 0.10, 0.11]} />
      </SketchMesh>
      <Rod
        from={[0.615, -0.245, 0.03]}
        to={[0.632, -0.283, 0.03]}
        radius={0.004}
        partId="biting-mouth"
      />
      <Rod
        from={[0.615, -0.245, -0.03]}
        to={[0.632, -0.283, -0.03]}
        radius={0.004}
        partId="biting-mouth"
      />

      <DraftLine points={[[-1.0, -0.38, 0], [1.0, -0.38, 0]]} />
      <SketchMesh position={[0.72, -0.355, 0]}>
        <sphereGeometry args={[0.03, 8, 6]} />
      </SketchMesh>
      <SketchMesh position={[0.78, -0.362, 0]}>
        <sphereGeometry args={[0.024, 8, 6]} />
      </SketchMesh>
      <SketchMesh position={[0.75, -0.338, 0]}>
        <sphereGeometry args={[0.018, 8, 6]} />
      </SketchMesh>
      <SketchMesh position={[-0.145, 0.14, 0]}>
        <sphereGeometry args={[0.014, 8, 6]} />
      </SketchMesh>
      <SketchMesh position={[-0.12, 0.205, 0]}>
        <sphereGeometry args={[0.02, 8, 6]} />
      </SketchMesh>
    </group>
  )
}
