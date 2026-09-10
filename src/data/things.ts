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
