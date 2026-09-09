import type { DictEntry } from './types'
import { nuclearReactorDict } from './dict/nuclear-reactor'
import { helicopterDict } from './dict/helicopter'
import { spaceStationDict } from './dict/space-station'
import { curiosityRoverDict } from './dict/curiosity-rover'
import { washingMachineDict } from './dict/washing-machine'

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
