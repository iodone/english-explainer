import type { ComponentType } from 'react'
import NuclearReactorSketch from './nuclear-reactor'
import HelicopterSketch from './helicopter'
import SpaceStationSketch from './space-station'
import CuriosityRoverSketch from './curiosity-rover'
import WashingMachineSketch from './washing-machine'
import MicrowaveSketch from './microwave'
import RefrigeratorSketch from './refrigerator'
import ElevatorSketch from './elevator'

/**
 * thing.id → 几何体分发表。
 * 加新 thing：建 src/geometry/<slug>.tsx（default export），在此注册一行。
 * 数据注册（things.ts）与几何注册（此表）分开维护，互不冲突。
 */
export const GEOMETRY: Record<string, ComponentType> = {
  'nuclear-reactor': NuclearReactorSketch,
  helicopter: HelicopterSketch,
  'space-station': SpaceStationSketch,
  'curiosity-rover': CuriosityRoverSketch,
  'washing-machine': WashingMachineSketch,
  microwave: MicrowaveSketch,
  refrigerator: RefrigeratorSketch,
  elevator: ElevatorSketch,
}

/** 原语层公共面（常量 / context / 高亮引擎 / 绘制元件），几何文件与 ThingScene 共用 */
export * from './primitives'
