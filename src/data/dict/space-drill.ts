import type { DictEntry } from '../types'

export const spaceDrillDict: Record<string, DictEntry> = {
  'space-drill': { word: 'space drill', phonetic: '/speɪs drɪl/', pos: 'n.', meaning: '太空钻' },
  drill: { word: 'drill', phonetic: '/drɪl/', pos: 'n.', meaning: '钻头' },
  'hole': { word: 'hole', phonetic: '/hoʊl/', pos: 'n.', meaning: '洞', breakdown: [{ part: 'hol', gloss: 'Old English for hollow' }] },
  'backward': { word: 'backward', phonetic: '/ˈbækwərd/', pos: 'adv.', meaning: '向后' },
  'motor': { word: 'motor', phonetic: '/ˈmoʊtər/', pos: 'n.', meaning: '马达' },
}