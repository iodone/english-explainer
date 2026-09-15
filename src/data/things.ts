import type { ThingData } from './types'
import { nuclearReactor } from './things/nuclear-reactor'
import { helicopter } from './things/helicopter'
import { spaceStation } from './things/space-station'
import { curiosityRover } from './things/curiosity-rover'
import { washingMachine } from './things/washing-machine'
import { microwave } from './things/microwave'
import { refrigerator } from './things/refrigerator'
import { elevator } from './things/elevator'
import { bicycle } from './things/bicycle'
import { clock } from './things/clock'
import { vacuumCleaner } from './things/vacuum-cleaner'
import { toilet } from './things/toilet'
import { speaker } from './things/speaker'
import { drill } from './things/drill'
import { camera } from './things/camera'
import { battery } from './things/battery'
import { zipper } from './things/zipper'
import { lock } from './things/lock'
import { scissors } from './things/scissors'
import { pencil } from './things/pencil'
import { iron } from './things/iron'
import { glasses } from './things/glasses'
import { faucet } from './things/faucet'
import { lightBulb } from './things/light-bulb'
import { stapler } from './things/stapler'
import { submarine } from './things/submarine'
import { telescope } from './things/telescope'
import { spaceSuit } from './things/space-suit'
import { windmill } from './things/windmill'
import { train } from './things/train'
import { rocket } from './things/rocket'
import { dam } from './things/dam'
import { ship } from './things/ship'
import { satellite } from './things/satellite'
import { sunCatcher } from './things/sun-catcher'
import { hotAirBalloon } from './things/hot-air-balloon'
import { moonLander } from './things/moon-lander'
import { waterWheel } from './things/water-wheel'
import { airplane } from './things/airplane'
import { comet } from './things/comet'
import { steamEngine } from './things/steam-engine'
import { car } from './things/car'
import { moon } from './things/moon'
import { powerGrid } from './things/power-grid'
import { escalator } from './things/escalator'
import { blackHole } from './things/black-hole'
import { sun } from './things/sun'
import { crane } from './things/crane'
import { mars } from './things/mars'
import { electricMotor } from './things/electric-motor'
import { bridge } from './things/bridge'
import { earth } from './things/earth'
import { atom } from './things/atom'
import { drone } from './things/drone'
import { galaxy } from './things/galaxy'
import { geothermal } from './things/geothermal'
import { sailboat } from './things/sailboat'
import { saturn } from './things/saturn'
import { fusion } from './things/fusion'
import { motorcycle } from './things/motorcycle'
import { jupiter } from './things/jupiter'
import { generator } from './things/generator'
import { subway } from './things/subway'
import { spaceShuttle } from './things/space-shuttle'
import { wavePower } from './things/wave-power'
import { fireTruck } from './things/fire-truck'
import { spaceElevator } from './things/space-elevator'
import { flywheel } from './things/flywheel'
import { toaster } from './things/toaster'
import { airship } from './things/airship'
import { voyager } from './things/voyager'
import { kettle } from './things/kettle'
import { cableCar } from './things/cable-car'
import { charger } from './things/charger'
import { asteroid } from './things/asteroid'
import { oilRig } from './things/oil-rig'
import { bus } from './things/bus'
import { fan } from './things/fan'
import { nebula } from './things/nebula'
import { solarPanel } from './things/solar-panel'
import { excavator } from './things/excavator'
import { piano } from './things/piano'
import { supernova } from './things/supernova'
import { transformer } from './things/transformer'
import { sewingMachine } from './things/sewing-machine'
import { hovercraft } from './things/hovercraft'
import { spaceFarm } from './things/space-farm'
import { spaceFood } from './things/space-food'
import { spaceRobot } from './things/space-robot'
import { windTurbine } from './things/wind-turbine'
import { fuelCell } from './things/fuel-cell'
import { powerInverter } from './things/power-inverter'
import { blender } from './things/blender'
import { tram } from './things/tram'
import { spaceship } from './things/spaceship'
import { dishwasher } from './things/dishwasher'
import { wagon } from './things/wagon'
import { waterHeater } from './things/water-heater'
import { spaceProbe } from './things/space-probe'
import { stethoscope } from './things/stethoscope'
import { monorail } from './things/monorail'
import { spaceHelmet } from './things/space-helmet'
import { vacuumFlask } from './things/vacuum-flask'
import { electricFan } from './things/electric-fan'
import { spaceGlove } from './things/space-glove'
import { riceCooker } from './things/rice-cooker'
import { trolley } from './things/trolley'
import { spaceBoot } from './things/space-boot'
import { breadMaker } from './things/bread-maker'
import { waterPump } from './things/water-pump'
import { spaceCamera } from './things/space-camera'
import { waterFilter } from './things/water-filter'
import { batteryCharger } from './things/battery-charger'
import { spaceRover } from './things/space-rover'
import { eggCooker } from './things/egg-cooker'
import { gasStove } from './things/gas-stove'
import { spaceHabitat } from './things/space-habitat'
import { airConditioner } from './things/air-conditioner'
import { powerSwitch } from './things/power-switch'
import { spaceMining } from './things/space-mining'
import { coffeeMaker } from './things/coffee-maker'
import { powerOutlet } from './things/power-outlet'
import { spaceLab } from './things/space-lab'
import { iceMaker } from './things/ice-maker'
import { powerMeter } from './things/power-meter'
import { spaceWelder } from './things/space-welder'
import { foodWarmer } from './things/food-warmer'
import { batteryPack } from './things/battery-pack'
import { spaceAntenna } from './things/space-antenna'
import { waterCooler } from './things/water-cooler'
import { solarHeater } from './things/solar-heater'
import { spaceTelescope } from './things/space-telescope'
import { dishWasher } from './things/dish-washer'
import { powerPlant } from './things/power-plant'
import { spaceCraft } from './things/space-craft'
import { trashCan } from './things/trash-can'
import { electricWire } from './things/electric-wire'
import { spaceRocket } from './things/space-rocket'
import { bookShelf } from './things/book-shelf'
import { powerTool } from './things/power-tool'
import { spaceLander } from './things/space-lander'
import { doorLock } from './things/door-lock'
import { windPower } from './things/wind-power'
import { spaceJunk } from './things/space-junk'
import { doorBell } from './things/door-bell'
import { powerBank } from './things/power-bank'
import { spaceMirror } from './things/space-mirror'
import { windowBlind } from './things/window-blind'
import { powerCable } from './things/power-cable'
import { spacePlant } from './things/space-plant'
import { doorHandle } from './things/door-handle'
import { powerSocket } from './things/power-socket'
import { spaceGps } from './things/space-gps'
import { toothBrush } from './things/tooth-brush'
import { powerFuse } from './things/power-fuse'
import { spaceFoodHeater } from './things/space-food-heater'
import { homeAlarm } from './things/home-alarm'
import { powerController } from './things/power-controller'
import { spaceGym } from './things/space-gym'
import { homeFan } from './things/home-fan'
import { powerBattery } from './things/power-battery'
import { spaceLadder } from './things/space-ladder'
import { homeTable } from './things/home-table'
import { powerLight } from './things/power-light'
import { spacePipe } from './things/space-pipe'
import { homeBed } from './things/home-bed'
import { powerHeater } from './things/power-heater'
import { spaceHammer } from './things/space-hammer'
import { homeChair } from './things/home-chair'
import { powerWire } from './things/power-wire'
import { spaceWrench } from './things/space-wrench'
import { homeShelf } from './things/home-shelf'
import { powerVent } from './things/power-vent'
import { spaceDrill } from './things/space-drill'
import { homeRug } from './things/home-rug'
import { powerPlug } from './things/power-plug'
import { spaceClamp } from './things/space-clamp'
import { homeBroom } from './things/home-broom'
import { powerCord } from './things/power-cord'
import { spaceCompass } from './things/space-compass'
import { homeMat } from './things/home-mat'
import { powerAdapter } from './things/power-adapter'
import { spaceSignal } from './things/space-signal'
import { homeCurtain } from './things/home-curtain'
import { powerRelay } from './things/power-relay'
import { spaceMonitor } from './things/space-monitor'
import { homeDoor } from './things/home-door'
import { powerTransistor } from './things/power-transistor'
import { spaceCalculator } from './things/space-calculator'
import { homeWindow } from './things/home-window'
import { powerAmplifier } from './things/power-amplifier'
import { spaceTug } from './things/space-tug'
import { homeSink } from './things/home-sink'
import { powerTransformer } from './things/power-transformer'
import { spaceAirlock } from './things/space-airlock'
import { homeGarage } from './things/home-garage'
import { powerRegulator } from './things/power-regulator'
import { spaceCapsule } from './things/space-capsule'
import { homeOven } from './things/home-oven'
import { powerTurbine } from './things/power-turbine'
import { spaceParachute } from './things/space-parachute'
import { homeShoe } from './things/home-shoe'
import { powerStrip } from './things/power-strip'
import { spaceFlare } from './things/space-flare'
import { homeKey } from './things/home-key'
import { powerSolenoid } from './things/power-solenoid'
import { spaceBeacon } from './things/space-beacon'
import { homeMirror } from './things/home-mirror'
import { powerRectifier } from './things/power-rectifier'
import { spaceDockingPort } from './things/space-docking-port'
import { homeTowel } from './things/home-towel'
import { powerCapacitor } from './things/power-capacitor'
import { spaceManipulator } from './things/space-manipulator'
import { homeBucket } from './things/home-bucket'
import { powerOscillator } from './things/power-oscillator'
import { spaceLabModule } from './things/space-lab-module'
import { homeShutter } from './things/home-shutter'
import { powerFuseBox } from './things/power-fuse-box'
import { spaceFoodPacket } from './things/space-food-packet'
import { homeCeilingFan } from './things/home-ceiling-fan'
import { powerChoke } from './things/power-choke'
import { spaceVentValve } from './things/space-vent-valve'
import { homeIron } from './things/home-iron'
import { powerThermistor } from './things/power-thermistor'
import { spaceHandrail } from './things/space-handrail'
import { homePeeler } from './things/home-peeler'
import { powerVaristor } from './things/power-varistor'
import { spaceFilter } from './things/space-filter'
import { homeStrainer } from './things/home-strainer'
import { powerDinRail } from './things/power-din-rail'
import { spaceCargoNet } from './things/space-cargo-net'
import { homeRollingPin } from './things/home-rolling-pin'
import { powerEnclosure } from './things/power-enclosure'
import { spaceMagneticBoot } from './things/space-magnetic-boot'
import { homeLadle } from './things/home-ladle'
import { powerSurge } from './things/power-surge'
import { spaceHeadset } from './things/space-headset'
import { homeSpatula } from './things/home-spatula'
import { powerThermostat } from './things/power-thermostat'
import { spaceRadiationVest } from './things/space-radiation-vest'
import { homeIroningBoard } from './things/home-ironing-board'
import { powerChokeCoil } from './things/power-choke-coil'
import { spaceLaserCommunicator } from './things/space-laser-communicator'
import { homeDehumidifier } from './things/home-dehumidifier'
import { powerCapacitorBank } from './things/power-capacitor-bank'
import { spaceDockingRing } from './things/space-docking-ring'
import { homeFoodProcessor } from './things/home-food-processor'
import { powerBusbar } from './things/power-busbar'
import { spaceRadiator } from './things/space-radiator'
import { homeGrater } from './things/home-grater'
import { powerContactor } from './things/power-contactor'
import { spaceThruster } from './things/space-thruster'
import { homeColander } from './things/home-colander'
import { powerIsolator } from './things/power-isolator'
import { spaceSolarArray } from './things/space-solar-array'
import { homeMandoline } from './things/home-mandoline'
import { powerGrounding } from './things/power-grounding'
import { spaceManipulatorArm } from './things/space-manipulator-arm'
import { homeMortar } from './things/home-mortar'
import { powerHeatSink } from './things/power-heat-sink'
import { spaceAirFilter } from './things/space-air-filter'
import { homePepperMill } from './things/home-pepper-mill'
import { powerBusDuct } from './things/power-bus-duct'
import { spaceDustFilter } from './things/space-dust-filter'
import { homeGarlicPress } from './things/home-garlic-press'
import { powerSlipRing } from './things/power-slip-ring'
import { spaceParticleShield } from './things/space-particle-shield'
import { homePizzaCutter } from './things/home-pizza-cutter'
import { powerFaultRelay } from './things/power-fault-relay'
import { spaceCoolantLoop } from './things/space-coolant-loop'
import { homeCanOpener } from './things/home-can-opener'
import { powerSignalTransformer } from './things/power-signal-transformer'
import { spaceMagneticShield } from './things/space-magnetic-shield'
import { homeTeaStrainer } from './things/home-tea-strainer'
import { powerEarthSwitch } from './things/power-earth-switch'
import { spaceAntennaArray } from './things/space-antenna-array'
import { homeEggSlicer } from './things/home-egg-slicer'
import { powerCurrentSensor } from './things/power-current-sensor'
import { spaceSignalDish } from './things/space-signal-dish'
import { homeNutCracker } from './things/home-nut-cracker'
import { powerBatteryFuse } from './things/power-battery-fuse'
import { spaceStarTracker } from './things/space-star-tracker'
import { homeIceCreamScoop } from './things/home-ice-cream-scoop'
import { powerVoltageRegulator } from './things/power-voltage-regulator'
import { spaceSunSensor } from './things/space-sun-sensor'
import { homeCorkOpener } from './things/home-cork-opener'
import { powerGroundFault } from './things/power-ground-fault'
import { spaceCargoBag } from './things/space-cargo-bag'
import { homeWhisk } from './things/home-whisk'
import { powerInductor } from './things/power-inductor'
import { spaceGyroscope } from './things/space-gyroscope'
import { homeVegetablePeeler } from './things/home-vegetable-peeler'
import { powerSurgeProtector } from './things/power-surge-protector'
import { spaceMagnetometer } from './things/space-magnetometer'
import { homeCitrusPress } from './things/home-citrus-press'
import { powerArcFaultDetector } from './things/power-arc-fault-detector'
import { spaceRadiometer } from './things/space-radiometer'
import { homeAppleCorer } from './things/home-apple-corer'
import { powerLoadBreakSwitch } from './things/power-load-break-switch'
import { spaceSpectrometer } from './things/space-spectrometer'
import { homeAvocadoSlicer } from './things/home-avocado-slicer'
import { powerDisconnectSwitch } from './things/power-disconnect-switch'
import { spaceGravimeter } from './things/space-gravimeter'
import { homeMelonBaller } from './things/home-melon-baller'
import { powerCircuitRecloser } from './things/power-circuit-recloser'
import { spaceFuelCell } from './things/space-fuel-cell'
import { homeBreadMachine } from './things/home-bread-machine'
import { powerEncoder } from './things/power-encoder'
import { spaceCargoCrane } from './things/space-cargo-crane'
import { homeCrepeMaker } from './things/home-crepe-maker'
import { powerCurrentLimiter } from './things/power-current-limiter'
import { spaceDataRecorder } from './things/space-data-recorder'
import { homeSandwichMaker } from './things/home-sandwich-maker'
import { powerSignalFilter } from './things/power-signal-filter'
import { spaceLightFilter } from './things/space-light-filter'
import { homeYogurtMaker } from './things/home-yogurt-maker'
import { powerDataLogger } from './things/power-data-logger'
import { spaceHeatExchanger } from './things/space-heat-exchanger'
import { homePopcornMaker } from './things/home-popcorn-maker'
import { powerCircuitBreaker } from './things/power-circuit-breaker'
import { spaceAntennaDish } from './things/space-antenna-dish'
import { homeEspresso } from './things/home-espresso'
import { powerCircuitMonitor } from './things/power-circuit-monitor'
import { spaceLaserRange } from './things/space-laser-range'
import { homePastaMaker } from './things/home-pasta-maker'
import { powerVoltageSensor } from './things/power-voltage-sensor'
import { spaceSolarSail } from './things/space-solar-sail'
import { homeBreadToaster } from './things/home-bread-toaster'
import { powerCurrentShunt } from './things/power-current-shunt'
import { spaceMeteorShield } from './things/space-meteor-shield'
import { homeBlender } from './things/home-blender'
import { powerFrequencyCounter } from './things/power-frequency-counter'
import { spaceRobotArm } from './things/space-robot-arm'
import { homeMicrowave } from './things/home-microwave'
import { powerWaveAnalyzer } from './things/power-wave-analyzer'
import { spaceGrapple } from './things/space-grapple'
import { homeWaffleMaker } from './things/home-waffle-maker'
import { powerPhaseDetector } from './things/power-phase-detector'
import { spaceDockingCollar } from './things/space-docking-collar'
import { homeSlowCooker } from './things/home-slow-cooker'
import { powerGroundTester } from './things/power-ground-tester'
import { spacePayloadFairing } from './things/space-payload-fairing'
import { homeToasterOven } from './things/home-toaster-oven'
import { powerContinuityTester } from './things/power-continuity-tester'

/**
 * 数据注册表 —— 单一事实来源。
 * 加新 thing：在 things/ 加数据文件 + dict/ 加词条，然后在这里加一行。
 */
export const things: ThingData[] = [
  nuclearReactor,
  helicopter,
  spaceStation,
  curiosityRover,
  washingMachine,
  microwave,
  refrigerator,
  elevator,
  bicycle,
  clock,
  vacuumCleaner,
  toilet,
  speaker,
  drill,
  camera,
  battery,
  zipper,
  lock,
  scissors,
  pencil,
  iron,
  glasses,
  faucet,
  lightBulb,
  stapler,
  submarine,
  telescope,
  spaceSuit,
  windmill,
  train,
  rocket,
  dam,
  ship,
  satellite,
  sunCatcher,
  hotAirBalloon,
  moonLander,
  waterWheel,
  airplane,
  comet,
  steamEngine,
  car,
  moon,
  powerGrid,
  escalator,
  blackHole,
  sun,
  crane,
  mars,
  electricMotor,
  bridge,
  earth,
  atom,
  drone,
  galaxy,
  geothermal,
  sailboat,
  saturn,
  fusion,
  motorcycle,
  jupiter,
  generator,
  subway,
  spaceShuttle,
  wavePower,
  fireTruck,
  spaceElevator,
  flywheel,
  toaster,
  airship,
  voyager,
  kettle,
  cableCar,
  charger,
  asteroid,
  oilRig,
  bus,
  fan,
  nebula,
  solarPanel,
  excavator,
  piano,
  supernova,
  transformer,
  sewingMachine,
  hovercraft,
  spaceFarm,
  spaceFood,
  spaceRobot,
  windTurbine,
  fuelCell,
  powerInverter,
  blender,
  tram,
  spaceship,
  dishwasher,
  wagon,
  waterHeater,
  spaceProbe,
  stethoscope,
  monorail,
  spaceHelmet,
  vacuumFlask,
  electricFan,
  spaceGlove,
  riceCooker,
  trolley,
  spaceBoot,
  breadMaker,
  waterPump,
  spaceCamera,
  waterFilter,
  batteryCharger,
  spaceRover,
  eggCooker,
  gasStove,
  spaceHabitat,
  airConditioner,
  powerSwitch,
  spaceMining,
  coffeeMaker,
  powerOutlet,
  spaceLab,
  iceMaker,
  powerMeter,
  spaceWelder,
  foodWarmer,
  batteryPack,
  spaceAntenna,
  waterCooler,
  solarHeater,
  spaceTelescope,
  dishWasher,
  powerPlant,
  spaceCraft,
  trashCan,
  electricWire,
  spaceRocket,
  bookShelf,
  powerTool,
  spaceLander,
  doorLock,
  windPower,
  spaceJunk,
  doorBell,
  powerBank,
  spaceMirror,
  windowBlind,
  powerCable,
  spacePlant,
  doorHandle,
  powerSocket,
  spaceGps,
  toothBrush,
  powerFuse,
  spaceFoodHeater,
  homeAlarm,
  powerController,
  spaceGym,
  homeFan,
  powerBattery,
  spaceLadder,
  homeTable,
  powerLight,
  spacePipe,
  homeBed,
  powerHeater,
  spaceHammer,
  homeChair,
  powerWire,
  spaceWrench,
  homeShelf,
  powerVent,
  spaceDrill,
  homeRug,
  powerPlug,
  spaceClamp,
  homeBroom,
  powerCord,
  spaceCompass,
  homeMat,
  powerAdapter,
  spaceSignal,
  homeCurtain,
  powerRelay,
  spaceMonitor,
  homeDoor,
  powerTransistor,
  spaceCalculator,
  homeWindow,
  powerAmplifier,
  spaceTug,
  homeSink,
  powerTransformer,
  spaceAirlock,
  homeGarage,
  powerRegulator,
  spaceCapsule,
  homeOven,
  powerTurbine,
  spaceParachute,
  homeShoe,
  powerStrip,
  spaceFlare,
  homeKey,
  powerSolenoid,
  spaceBeacon,
  homeMirror,
  powerRectifier,
  spaceDockingPort,
  homeTowel,
  powerCapacitor,
  spaceManipulator,
  homeBucket,
  powerOscillator,
  spaceLabModule,
  homeShutter,
  powerFuseBox,
  spaceFoodPacket,
  homeCeilingFan,
  powerChoke,
  spaceVentValve,
  homeIron,
  powerThermistor,
  spaceHandrail,
  homePeeler,
  powerVaristor,
  spaceCargoBag,
  homeWhisk,
  powerInductor,
  spaceFilter,
  homeStrainer,
  powerDinRail,
  spaceCargoNet,
  homeRollingPin,
  powerEnclosure,
  spaceMagneticBoot,
  homeLadle,
  powerSurge,
  spaceHeadset,
  homeSpatula,
  powerThermostat,
  spaceRadiationVest,
  homeIroningBoard,
  powerChokeCoil,
  spaceLaserCommunicator,
  homeDehumidifier,
  powerCapacitorBank,
  spaceDockingRing,
  homeFoodProcessor,
  powerBusbar,
  spaceRadiator,
  homeGrater,
  powerContactor,
  spaceThruster,
  homeColander,
  powerIsolator,
  spaceSolarArray,
  homeMandoline,
  powerGrounding,
  spaceManipulatorArm,
  homeMortar,
  powerHeatSink,
  spaceAirFilter,
  homePepperMill,
  powerBusDuct,
  spaceDustFilter,
  homeGarlicPress,
  powerSlipRing,
  spaceParticleShield,
  homePizzaCutter,
  powerFaultRelay,
  spaceCoolantLoop,
  homeCanOpener,
  powerSignalTransformer,
  spaceMagneticShield,
  homeTeaStrainer,
  powerEarthSwitch,
  spaceAntennaArray,
  homeEggSlicer,
  powerCurrentSensor,
  spaceSignalDish,
  homeNutCracker,
  powerBatteryFuse,
  spaceStarTracker,
  homeIceCreamScoop,
  powerVoltageRegulator,
  spaceSunSensor,
  homeCorkOpener,
  powerGroundFault,
  spaceGyroscope,
  homeVegetablePeeler,
  powerSurgeProtector,
  spaceMagnetometer,
  homeCitrusPress,
  powerArcFaultDetector,
  spaceRadiometer,
  homeAppleCorer,
  powerLoadBreakSwitch,
  spaceSpectrometer,
  homeAvocadoSlicer,
  powerDisconnectSwitch,
  spaceGravimeter,
  homeMelonBaller,
  powerCircuitRecloser,
  spaceFuelCell,
  homeBreadMachine,
  powerEncoder,
  spaceCargoCrane,
  homeCrepeMaker,
  powerCurrentLimiter,
  spaceDataRecorder,
  homeSandwichMaker,
  powerSignalFilter,
  spaceLightFilter,
  homeYogurtMaker,
  powerDataLogger,
  spaceHeatExchanger,
  homePopcornMaker,
  powerCircuitBreaker,
  spaceAntennaDish,
  homeEspresso,
  powerCircuitMonitor,
  spaceLaserRange,
  homePastaMaker,
  powerVoltageSensor,
  spaceSolarSail,
  homeBreadToaster,
  powerCurrentShunt,
  spaceMeteorShield,
  homeBlender,
  powerFrequencyCounter,
  spaceRobotArm,
  homeMicrowave,
  powerWaveAnalyzer,
  spaceGrapple,
  homeWaffleMaker,
  powerPhaseDetector,
  spaceDockingCollar,
  homeSlowCooker,
  powerGroundTester,
  spacePayloadFairing,
  homeToasterOven,
  powerContinuityTester,
]

export const getThingBySlug = (slug: string): ThingData | undefined =>
  things.find(t => t.slug === slug)

export const categories = [
  { id: 'all', label: 'All Things' },
  { id: 'power', label: 'Power' },
  { id: 'transport', label: 'Move' },
  { id: 'space', label: 'Space' },
  { id: 'home', label: 'Home' },
]
