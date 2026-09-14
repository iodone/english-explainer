import type { DictEntry } from '../types'

export const windowBlindDict: Record<string, DictEntry> = {
  'window-blind': { word: 'window blind', phonetic: '/ˈwɪndoʊ blaɪnd/', pos: 'n.', meaning: '百叶窗' },
  slat: { word: 'slat', phonetic: '/slæt/', pos: 'n.', meaning: '板条', breakdown: [{ part: 'slat', gloss: 'thin strip' }] },
  headrail: { word: 'headrail', phonetic: '/ˈhɛdreɪl/', pos: 'n.', meaning: '顶轨', breakdown: [{ part: 'head', gloss: 'top' }, { part: 'rail', gloss: 'bar' }] },
  ladder: { word: 'ladder', phonetic: '/ˈlædər/', pos: 'n.', meaning: '梯子', breakdown: [{ part: 'ladd', gloss: 'climb' }, { part: '-er', gloss: 'thing' }] },
  wand: { word: 'wand', phonetic: '/wɒnd/', pos: 'n.', meaning: '棒', breakdown: [{ part: 'wand', gloss: 'stick' }] },
  bracket: { word: 'bracket', phonetic: '/ˈbrækɪt/', pos: 'n.', meaning: '支架', breakdown: [{ part: 'brack', gloss: 'support' }, { part: '-et', gloss: 'small' }] },
}