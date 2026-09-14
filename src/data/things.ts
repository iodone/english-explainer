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
