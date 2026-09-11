import type { DictEntry } from './types'
import { nuclearReactorDict } from './dict/nuclear-reactor'
import { helicopterDict } from './dict/helicopter'
import { spaceStationDict } from './dict/space-station'
import { curiosityRoverDict } from './dict/curiosity-rover'
import { washingMachineDict } from './dict/washing-machine'
import { microwaveDict } from './dict/microwave'
import { refrigeratorDict } from './dict/refrigerator'
import { elevatorDict } from './dict/elevator'
import { bicycleDict } from './dict/bicycle'
import { clockDict } from './dict/clock'
import { vacuumCleanerDict } from './dict/vacuum-cleaner'
import { toiletDict } from './dict/toilet'
import { speakerDict } from './dict/speaker'
import { drillDict } from './dict/drill'
import { cameraDict } from './dict/camera'
import { batteryDict } from './dict/battery'
import { zipperDict } from './dict/zipper'
import { lockDict } from './dict/lock'
import { scissorsDict } from './dict/scissors'
import { pencilDict } from './dict/pencil'
import { ironDict } from './dict/iron'
import { glassesDict } from './dict/glasses'
import { faucetDict } from './dict/faucet'
import { lightBulbDict } from './dict/light-bulb'
import { staplerDict } from './dict/stapler'
import { submarineDict } from './dict/submarine'
import { telescopeDict } from './dict/telescope'
import { spaceSuitDict } from './dict/space-suit'
import { windmillDict } from './dict/windmill'
import { trainDict } from './dict/train'
import { rocketDict } from './dict/rocket'
import { damDict } from './dict/dam'
import { shipDict } from './dict/ship'
import { satelliteDict } from './dict/satellite'
import { sunCatcherDict } from './dict/sun-catcher'
import { airplaneDict } from './dict/airplane'
import { cometDict } from './dict/comet'
import { moonDict } from './dict/moon'
import { powerGridDict } from './dict/power-grid'
import { escalatorDict } from './dict/escalator'
import { blackHoleDict } from './dict/black-hole'
import { sunDict } from './dict/sun'
import { craneDict } from './dict/crane'
import { marsDict } from './dict/mars'
import { electricMotorDict } from './dict/electric-motor'
import { bridgeDict } from './dict/bridge'
import { earthDict } from './dict/earth'
import { atomDict } from './dict/atom'
import { droneDict } from './dict/drone'
import { galaxyDict } from './dict/galaxy'
import { geothermalDict } from './dict/geothermal'
import { sailboatDict } from './dict/sailboat'
import { saturnDict } from './dict/saturn'
import { fusionDict } from './dict/fusion'
import { motorcycleDict } from './dict/motorcycle'
import { jupiterDict } from './dict/jupiter'
import { generatorDict } from './dict/generator'
import { subwayDict } from './dict/subway'
import { spaceShuttleDict } from './dict/space-shuttle'
import { fireTruckDict } from './dict/fire-truck'
import { spaceElevatorDict } from './dict/space-elevator'
import { flywheelDict } from './dict/flywheel'
import { toasterDict } from './dict/toaster'
import { airshipDict } from './dict/airship'
import { voyagerDict } from './dict/voyager'
import { kettleDict } from './dict/kettle'
import { cableCarDict } from './dict/cable-car'
import { chargerDict } from './dict/charger'
import { asteroidDict } from './dict/asteroid'
import { oilRigDict } from './dict/oil-rig'
import { busDict } from './dict/bus'
import { fanDict } from './dict/fan'
import { nebulaDict } from './dict/nebula'
import { solarPanelDict } from './dict/solar-panel'
import { excavatorDict } from './dict/excavator'
import { pianoDict } from './dict/piano'
import { supernovaDict } from './dict/supernova'

/**
 * 词典汇总层。
 * 不同 thing 的词条 key 有意重叠（water / power / spin…），
 * 先到先得——词条内容等价，不互相覆盖，保证来源可预期。
 */
const sources: Record<string, DictEntry>[] = [
  nuclearReactorDict,
  helicopterDict,
  spaceStationDict,
  curiosityRoverDict,
  washingMachineDict,
  microwaveDict,
  refrigeratorDict,
  elevatorDict,
  bicycleDict,
  clockDict,
  vacuumCleanerDict,
  toiletDict,
  speakerDict,
  drillDict,
  cameraDict,
  batteryDict,
  zipperDict,
  lockDict,
  scissorsDict,
  pencilDict,
  ironDict,
  glassesDict,
  faucetDict,
  lightBulbDict,
  staplerDict,
  submarineDict,
  telescopeDict,
  spaceSuitDict,
  windmillDict,
  trainDict,
  rocketDict,
  damDict,
  shipDict,
  satelliteDict,
  sunCatcherDict,
  airplaneDict,
  cometDict,
  moonDict,
  powerGridDict,
  escalatorDict,
  blackHoleDict,
  sunDict,
  craneDict,
  marsDict,
  electricMotorDict,
  bridgeDict,
  earthDict,
  atomDict,
  droneDict,
  galaxyDict,
  geothermalDict,
  sailboatDict,
  saturnDict,
  fusionDict,
  motorcycleDict,
  jupiterDict,
  generatorDict,
  subwayDict,
  spaceShuttleDict,
  fireTruckDict,
  spaceElevatorDict,
  flywheelDict,
  toasterDict,
  airshipDict,
  voyagerDict,
  kettleDict,
  cableCarDict,
  chargerDict,
  asteroidDict,
  oilRigDict,
  busDict,
  fanDict,
  nebulaDict,
  solarPanelDict,
  excavatorDict,
  pianoDict,
  supernovaDict,
]

export const dictionary: Record<string, DictEntry> = sources.reduce(
  (acc, dict) => {
    for (const [key, entry] of Object.entries(dict)) {
      if (!(key in acc)) acc[key] = entry
    }
    return acc
  },
  {} as Record<string, DictEntry>,
)

/** 词条查询；miss 返回 null（WordPopup 显示 no-entry 态） */
export function lookupWord(key: string): DictEntry | null {
  return dictionary[key] ?? null
}
