import type { DictEntry } from '../types'

export const spaceRocketDict: Record<string, DictEntry> = {
  'space-rocket': { word: 'space rocket', phonetic: '/speɪs ˈrɒkɪt/', pos: 'n.', meaning: '太空火箭' },
  rocket: { word: 'rocket', phonetic: '/ˈrɒkɪt/', pos: 'n.', meaning: '火箭', breakdown: [{ part: 'rock', gloss: 'fly up' }, { part: '-et', gloss: 'small' }] },
  nose: { word: 'nose', phonetic: '/noʊz/', pos: 'n.', meaning: '鼻；前端', breakdown: [{ part: 'nose', gloss: 'front point' }] },
  cone: { word: 'cone', phonetic: '/koʊn/', pos: 'n.', meaning: '锥体', breakdown: [{ part: 'cone', gloss: 'pointed shape' }] },
  nozzle: { word: 'nozzle', phonetic: '/ˈnɒzəl/', pos: 'n.', meaning: '喷嘴', breakdown: [{ part: 'nozz', gloss: 'nose' }, { part: '-le', gloss: 'small' }] },
  booster: { word: 'booster', phonetic: '/ˈbuːstər/', pos: 'n.', meaning: '助推器', breakdown: [{ part: 'boost', gloss: 'push up' }, { part: '-er', gloss: 'thing' }] },
}