import type { ComponentType } from 'react'
import NuclearReactorSketch from './nuclear-reactor'
import HelicopterSketch from './helicopter'
import SpaceStationSketch from './space-station'
import CuriosityRoverSketch from './curiosity-rover'
import WashingMachineSketch from './washing-machine'
import MicrowaveSketch from './microwave'
import RefrigeratorSketch from './refrigerator'
import ElevatorSketch from './elevator'
import BicycleSketch from './bicycle'
import ClockSketch from './clock'
import VacuumCleanerSketch from './vacuum-cleaner'
import ToiletSketch from './toilet'
import SpeakerSketch from './speaker'
import DrillSketch from './drill'
import CameraSketch from './camera'
import BatterySketch from './battery'
import ZipperSketch from './zipper'
import LockSketch from './lock'
import ScissorsSketch from './scissors'
import PencilSketch from './pencil'
import IronSketch from './iron'
import GlassesSketch from './glasses'
import FaucetSketch from './faucet'
import LightBulbSketch from './light-bulb'
import StaplerSketch from './stapler'
import SubmarineSketch from './submarine'
import TelescopeSketch from './telescope'
import SpaceSuitSketch from './space-suit'
import WindmillSketch from './windmill'
import TrainSketch from './train'
import RocketSketch from './rocket'
import DamSketch from './dam'
import ShipSketch from './ship'
import SatelliteSketch from './satellite'
import SunCatcherSketch from './sun-catcher'
import HotAirBalloonSketch from './hot-air-balloon'
import MoonLanderSketch from './moon-lander'
import WaterWheelSketch from './water-wheel'

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
  bicycle: BicycleSketch,
  clock: ClockSketch,
  'vacuum-cleaner': VacuumCleanerSketch,
  toilet: ToiletSketch,
  speaker: SpeakerSketch,
  drill: DrillSketch,
  camera: CameraSketch,
  battery: BatterySketch,
  zipper: ZipperSketch,
  lock: LockSketch,
  scissors: ScissorsSketch,
  pencil: PencilSketch,
  iron: IronSketch,
  glasses: GlassesSketch,
  faucet: FaucetSketch,
  'light-bulb': LightBulbSketch,
  stapler: StaplerSketch,
  submarine: SubmarineSketch,
  telescope: TelescopeSketch,
  'space-suit': SpaceSuitSketch,
  windmill: WindmillSketch,
  train: TrainSketch,
  rocket: RocketSketch,
  dam: DamSketch,
  ship: ShipSketch,
  satellite: SatelliteSketch,
  'sun-catcher': SunCatcherSketch,
  'hot-air-balloon': HotAirBalloonSketch,
  'moon-lander': MoonLanderSketch,
  'water-wheel': WaterWheelSketch,
}

/** 原语层公共面（常量 / context / 高亮引擎 / 绘制元件），几何文件与 ThingScene 共用 */
export * from './primitives'
