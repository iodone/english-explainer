import type { DictEntry } from '../types'

export const doorHandleDict: Record<string, DictEntry> = {
  'door-handle': { word: 'door handle', phonetic: '/dɔːr ˈhændəl/', pos: 'n.', meaning: '门把手' },
  rosette: { word: 'rosette', phonetic: '/roʊˈzɛt/', pos: 'n.', meaning: '玫瑰花饰', breakdown: [{ part: 'ros', gloss: 'rose' }, { part: '-ette', gloss: 'small' }] },
  spindle: { word: 'spindle', phonetic: '/ˈspɪndəl/', pos: 'n.', meaning: '转轴', breakdown: [{ part: 'spind', gloss: 'spin' }, { part: '-le', gloss: 'thing' }] },
  latch: { word: 'latch', phonetic: '/lætʃ/', pos: 'n.', meaning: '门闩', breakdown: [{ part: 'latch', gloss: 'catch' }] },
  spring: { word: 'spring', phonetic: '/sprɪŋ/', pos: 'n.', meaning: '弹簧', breakdown: [{ part: 'spring', gloss: 'jump back' }] },
  screw: { word: 'screw', phonetic: '/skruː/', pos: 'n.', meaning: '螺丝', breakdown: [{ part: 'screw', gloss: 'turn fastener' }] },
}