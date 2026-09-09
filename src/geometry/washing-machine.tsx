import { SketchMesh, Rod } from './primitives'

/** Box that Cleans Clothes（washing-machine）— 洗涤筒 / 干衣筒 / 控制面板 / 连接管 */
export default function WashingMachineSketch() {
  return (
    <group>
      {/* Washing machine */}
      <SketchMesh partId="drum" position={[-1.2, 0, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
      </SketchMesh>
      {/* Drum */}
      <SketchMesh partId="drum" position={[-1.2, 0, 0.76]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.05, 8, 16]} />
      </SketchMesh>
      {/* Door circle */}
      <SketchMesh partId="drum" position={[-1.2, 0, 0.78]}>
        <ringGeometry args={[0.4, 0.55, 16]} />
      </SketchMesh>
      {/* Dryer */}
      <SketchMesh partId="hot-air" position={[1.2, 0, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
      </SketchMesh>
      {/* Dryer drum */}
      <SketchMesh partId="hot-air" position={[1.2, 0, 0.76]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.05, 8, 16]} />
      </SketchMesh>
      {/* Control panel / soap box area */}
      <SketchMesh partId="soap" position={[-1.2, 1.1, 0.76]}>
        <boxGeometry args={[1.2, 0.3, 0.05]} />
      </SketchMesh>
      {/* Connection pipe */}
      <Rod from={[-0.45, 0.5, 0]} to={[0.45, 0.5, 0]} partId="pump" />
    </group>
  )
}
