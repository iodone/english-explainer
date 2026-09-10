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
