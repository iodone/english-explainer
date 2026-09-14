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
import AirplaneSketch from './airplane'
import CometSketch from './comet'
import SteamEngineSketch from './steam-engine'
import CarSketch from './car'
import MoonSketch from './moon'
import PowerGridSketch from './power-grid'
import EscalatorSketch from './escalator'
import BlackHoleSketch from './black-hole'
import SunSketch from './sun'
import CraneSketch from './crane'
import MarsSketch from './mars'
import ElectricMotorSketch from './electric-motor'
import BridgeSketch from './bridge'
import EarthSketch from './earth'
import AtomSketch from './atom'
import DroneSketch from './drone'
import GalaxySketch from './galaxy'
import GeothermalSketch from './geothermal'
import SailboatSketch from './sailboat'
import SaturnSketch from './saturn'
import FusionSketch from './fusion'
import MotorcycleSketch from './motorcycle'
import JupiterSketch from './jupiter'
import GeneratorSketch from './generator'
import SubwaySketch from './subway'
import SpaceShuttleSketch from './space-shuttle'
import WavePowerSketch from './wave-power'
import FireTruckSketch from './fire-truck'
import SpaceElevatorSketch from './space-elevator'
import FlywheelSketch from './flywheel'
import ToasterSketch from './toaster'
import AirshipSketch from './airship'
import VoyagerSketch from './voyager'
import KettleSketch from './kettle'
import CableCarSketch from './cable-car'
import ChargerSketch from './charger'
import AsteroidSketch from './asteroid'
import OilRigSketch from './oil-rig'
import BusSketch from './bus'
import FanSketch from './fan'
import NebulaSketch from './nebula'
import SolarPanelSketch from './solar-panel'
import ExcavatorSketch from './excavator'
import PianoSketch from './piano'
import SupernovaSketch from './supernova'
import TransformerSketch from './transformer'
import SewingMachineSketch from './sewing-machine'
import HovercraftSketch from './hovercraft'
import SpaceFarmSketch from './space-farm'
import SpaceFoodSketch from './space-food'
import SpaceRobotSketch from './space-robot'
import WindTurbineSketch from './wind-turbine'
import FuelCellSketch from './fuel-cell'
import PowerInverterSketch from './power-inverter'
import BlenderSketch from './blender'
import TramSketch from './tram'
import SpaceshipSketch from './spaceship'
import DishwasherSketch from './dishwasher'
import WagonSketch from './wagon'
import WaterHeaterSketch from './water-heater'

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
  airplane: AirplaneSketch,
  comet: CometSketch,
  'steam-engine': SteamEngineSketch,
  car: CarSketch,
  moon: MoonSketch,
  'power-grid': PowerGridSketch,
  escalator: EscalatorSketch,
  'black-hole': BlackHoleSketch,
  sun: SunSketch,
  crane: CraneSketch,
  mars: MarsSketch,
  'electric-motor': ElectricMotorSketch,
  'bridge': BridgeSketch,
  'earth': EarthSketch,
  'atom': AtomSketch,
  'drone': DroneSketch,
  'galaxy': GalaxySketch,
  'geothermal': GeothermalSketch,
  sailboat: SailboatSketch,
  saturn: SaturnSketch,
  fusion: FusionSketch,
  motorcycle: MotorcycleSketch,
  jupiter: JupiterSketch,
  generator: GeneratorSketch,
  subway: SubwaySketch,
  'space-shuttle': SpaceShuttleSketch,
  'wave-power': WavePowerSketch,
  'fire-truck': FireTruckSketch,
  'space-elevator': SpaceElevatorSketch,
  flywheel: FlywheelSketch,
  toaster: ToasterSketch,
  airship: AirshipSketch,
  voyager: VoyagerSketch,
  kettle: KettleSketch,
  'cable-car': CableCarSketch,
  charger: ChargerSketch,
  asteroid: AsteroidSketch,
  'oil-rig': OilRigSketch,
  bus: BusSketch,
  fan: FanSketch,
  nebula: NebulaSketch,
  'solar-panel': SolarPanelSketch,
  excavator: ExcavatorSketch,
  piano: PianoSketch,
  supernova: SupernovaSketch,
  transformer: TransformerSketch,
  'sewing-machine': SewingMachineSketch,
  hovercraft: HovercraftSketch,
  'space-farm': SpaceFarmSketch,
  'space-food': SpaceFoodSketch,
  'space-robot': SpaceRobotSketch,
  'wind-turbine': WindTurbineSketch,
  'fuel-cell': FuelCellSketch,
  'power-inverter': PowerInverterSketch,
  blender: BlenderSketch,
  tram: TramSketch,
  spaceship: SpaceshipSketch,
  dishwasher: DishwasherSketch,
  wagon: WagonSketch,
  'water-heater': WaterHeaterSketch,
}

/** 原语层公共面（常量 / context / 高亮引擎 / 绘制元件），几何文件与 ThingScene 共用 */
export * from './primitives'
