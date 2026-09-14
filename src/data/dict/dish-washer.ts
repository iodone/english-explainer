import type { DictEntry } from '../types'

export const dishWasherDict: Record<string, DictEntry> = {
  'dish-washer': { word: 'dishwasher', phonetic: '/ˈdɪʃwɒʃər/', pos: 'n.', meaning: '洗碗机', breakdown: [{ part: 'dish', gloss: 'plate' }, { part: 'washer', gloss: 'one that washes' }] },
  spray: { word: 'spray', phonetic: '/spreɪ/', pos: 'n.', meaning: '喷雾', breakdown: [{ part: 'spray', gloss: 'scatter water' }] },
  reservoir: { word: 'reservoir', phonetic: '/ˈrɛzərvwɑːr/', pos: 'n.', meaning: '储液器', breakdown: [{ part: 're-', gloss: 'again' }, { part: 'serv', gloss: 'keep' }, { part: '-oir', gloss: 'place' }] },
  hose: { word: 'hose', phonetic: '/hoʊz/', pos: 'n.', meaning: '软管', breakdown: [{ part: 'hose', gloss: 'tube for water' }] },
  drain: { word: 'drain', phonetic: '/dreɪn/', pos: 'n.', meaning: '排水管', breakdown: [{ part: 'drain', gloss: 'draw off water' }] },
}