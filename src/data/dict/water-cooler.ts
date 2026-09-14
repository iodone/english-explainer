import type { DictEntry } from '../types'

export const waterCoolerDict: Record<string, DictEntry> = {
  'water-cooler': { word: 'water cooler', phonetic: '/ˈwɔːtər ˈkuːlər/', pos: 'n.', meaning: '饮水机' },
  reservoir: { word: 'reservoir', phonetic: '/ˈrɛzərvwɑːr/', pos: 'n.', meaning: '水库；储液器', breakdown: [{ part: 're-', gloss: 'again' }, { part: 'serv', gloss: 'keep' }, { part: '-oir', gloss: 'place' }] },
  spigot: { word: 'spigot', phonetic: '/ˈspɪɡət/', pos: 'n.', meaning: '龙头', breakdown: [{ part: 'spig', gloss: 'plug' }, { part: '-ot', gloss: 'small' }] },
  cooling: { word: 'cooling', phonetic: '/ˈkuːlɪŋ/', pos: 'n.', meaning: '冷却', breakdown: [{ part: 'cool', gloss: 'cold' }, { part: '-ing', gloss: 'action' }] },
  compressor: { word: 'compressor', phonetic: '/kəmˈprɛsər/', pos: 'n.', meaning: '压缩机', breakdown: [{ part: 'com-', gloss: 'together' }, { part: 'press', gloss: 'press' }, { part: '-or', gloss: 'one who does' }] },
}