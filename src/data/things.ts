import type { ThingData } from './types'
import { nuclearReactor } from './things/nuclear-reactor'
import { helicopter } from './things/helicopter'
import { spaceStation } from './things/space-station'
import { curiosityRover } from './things/curiosity-rover'
import { washingMachine } from './things/washing-machine'
import { microwave } from './things/microwave'
import { refrigerator } from './things/refrigerator'
import { elevator } from './things/elevator'

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
