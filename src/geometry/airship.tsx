import { SketchMesh, Rod, DraftLine } from './primitives'

/** 飞艇 — 侧视：椭球气囊、吊舱、尾鳍、发动机与系留索 */

const finTop: Array<[number, number, number]> = [
  [0.78, 0.58, 0], [1.02, 0.78, 0], [1.02, 0.58, 0], [0.78, 0.58, 0],
]
const finBottom: Array<[number, number, number]> = [
  [0.74, 0.46, 0], [0.95, 0.30, 0], [0.95, 0.46, 0], [0.74, 0.46, 0],
]
const enginePods: Array<[number, number, number]> = [
  [-0.32, 0.05, 0.14],
  [0.30, 0.05, -0.14],
]
const circleAt = (radius: number, x: number, y: number): Array<[number, number, number]> =>
  Array.from({ length: 9 }, (_, k) => {
    const a = (k / 8) * Math.PI * 2
    return [x + radius * Math.cos(a), y + radius * Math.sin(a), 0] as [number, number, number]
  })
const clouds = [
  circleAt(0.05, -0.72, 0.92),
  circleAt(0.065, -0.62, 0.90),
  circleAt(0.045, 0.52, 0.98),
  circleAt(0.06, 0.62, 0.96),
]

export default function AirshipSketch() {
  return (
    <group>
      <SketchMesh partId="gas-bag" position={[0, 0.52, 0]} scale={[1.45, 0.62, 0.62]}>
        <sphereGeometry args={[0.60, 18, 14]} />
      </SketchMesh>

      {[-0.30, 0.30].map(x => (
        <SketchMesh key={`air-bag-${x}`} partId="inside-air-bags" position={[x, 0.52, 0]} scale={[1.4, 0.9, 0.9]}>
          <sphereGeometry args={[0.14, 12, 10]} />
        </SketchMesh>
      ))}

      <SketchMesh partId="hanging-room" position={[0, 0.055, 0]}>
        <boxGeometry args={[0.44, 0.16, 0.20]} />
      </SketchMesh>
      {[-0.13, 0, 0.13].map(x => (
        <SketchMesh key={`window-${x}`} partId="hanging-room" position={[x, 0.055, 0.105]}>
          <boxGeometry args={[0.05, 0.05, 0.01]} />
        </SketchMesh>
      ))}

      {finTop.slice(0, -1).map((from, index) => (
        <Rod
          key={`fin-top-${index}`}
          from={from}
          to={finTop[index + 1]}
          radius={0.008}
          partId="turn-fins"
        />
      ))}
      {finBottom.slice(0, -1).map((from, index) => (
        <Rod
          key={`fin-bottom-${index}`}
          from={from}
          to={finBottom[index + 1]}
          radius={0.008}
          partId="turn-fins"
        />
      ))}
      <Rod from={[0.74, 0.52, 0]} to={[1.02, 0.52, 0]} radius={0.01} partId="turn-fins" />

      <Rod from={[-0.22, 0.10, 0]} to={[-0.32, 0.05, 0.14]} radius={0.006} partId="turning-blades" />
      <Rod from={[0.22, 0.10, 0]} to={[0.30, 0.05, -0.14]} radius={0.006} partId="turning-blades" />
      {enginePods.map(([x, y, z], pod) => (
        <group key={`engine-${pod}`}>
          <SketchMesh partId="turning-blades" position={[x, y, z]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.045, 0.045, 0.12, 10]} />
          </SketchMesh>
          <SketchMesh partId="turning-blades" position={[x, y, z]}>
            <torusGeometry args={[0.075, 0.008, 8, 18]} />
          </SketchMesh>
          <Rod from={[x, y - 0.07, z]} to={[x, y + 0.07, z]} radius={0.005} partId="turning-blades" />
          <Rod from={[x - 0.07, y, z]} to={[x + 0.07, y, z]} radius={0.005} partId="turning-blades" />
          <SketchMesh partId="turning-blades" position={[x, y, z]}>
            <sphereGeometry args={[0.02, 8, 6]} />
          </SketchMesh>
        </group>
      ))}

      {[0.10, -0.10].map(z => (
        <SketchMesh key={`fuel-${z}`} partId="fuel-tank" position={[-0.50, 0.16, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.16, 10]} />
        </SketchMesh>
      ))}

      <Rod from={[-0.87, 0.52, 0]} to={[-0.98, -0.40, 0]} radius={0.008} partId="nose-rope" />
      <Rod from={[-0.98, -0.40, 0]} to={[-0.98, -0.52, 0]} radius={0.01} partId="nose-rope" />
      <SketchMesh partId="nose-rope" position={[-0.98, -0.42, 0]}>
        <boxGeometry args={[0.12, 0.04, 0.08]} />
      </SketchMesh>

      <DraftLine points={[[-1.05, -0.52, 0], [0.95, -0.52, 0]]} />
      {clouds.map((points, index) => (
        <DraftLine key={`cloud-${index}`} points={points} />
      ))}
    </group>
  )
}
