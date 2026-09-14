import type { DictEntry } from '../types'

export const toothBrushDict: Record<string, DictEntry> = {
  'tooth-brush': { word: 'toothbrush', phonetic: '/ˈtuːθbrʌʃ/', pos: 'n.', meaning: '牙刷' },
  tooth: { word: 'tooth', phonetic: '/tuːθ/', pos: 'n.', meaning: '牙齿', breakdown: [{ part: 'tooth', gloss: 'Old English tōth' }] },
  brush: { word: 'brush', phonetic: '/brʌʃ/', pos: 'n. / v.', meaning: '刷子；刷', breakdown: [{ part: 'brush', gloss: 'French brosse' }] },
  handle: { word: 'handle', phonetic: '/ˈhændəl/', pos: 'n. / v.', meaning: '把手；处理', breakdown: [{ part: 'hand', gloss: 'hand' }, { part: '-le', gloss: 'tool for' }] },
  bristle: { word: 'bristle', phonetic: '/ˈbrɪsəl/', pos: 'n.', meaning: '刷毛', breakdown: [{ part: 'brist', gloss: 'short stiff hair' }, { part: '-le', gloss: 'small' }] },
  grip: { word: 'grip', phonetic: '/ɡrɪp/', pos: 'n. / v.', meaning: '握把；紧握', breakdown: [{ part: 'grip', gloss: 'Old English gripe (grasp)' }] },
  hygiene: { word: 'hygiene', phonetic: '/ˈhaɪdʒiːn/', pos: 'n.', meaning: '卫生', breakdown: [{ part: 'Hygieia', gloss: 'Greek goddess of health' }] },
}