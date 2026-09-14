import type { DictEntry } from '../types'

export const spaceWrenchDict: Record<string, DictEntry> = {
  'space-wrench': { word: 'space wrench', phonetic: '/speɪs rɛntʃ/', pos: 'n.', meaning: '太空扳手' },
  wrench: { word: 'wrench', phonetic: '/rɛntʃ/', pos: 'n.', meaning: '扳手', breakdown: [{ part: 'wrencan', gloss: 'Old English for twist' }] },
  jaw: { word: 'jaw', phonetic: '/dʒɔː/', pos: 'n.', meaning: '钳口', breakdown: [{ part: 'jawe', gloss: 'Old English for cheek' }] },
  adjustable: { word: 'adjustable', phonetic: '/əˈdʒʌstəbəl/', pos: 'adj.', meaning: '可调节的', breakdown: [{ part: 'ad-', gloss: 'to' }, { part: 'justus', gloss: 'right' }, { part: '-able', gloss: 'can be' }] },
  handle: { word: 'handle', phonetic: '/ˈhændəl/', pos: 'n.', meaning: '把手', breakdown: [{ part: 'hand', gloss: 'hand' }, { part: '-le', gloss: 'tool for' }] },
  tether: { word: 'tether', phonetic: '/ˈtɛðər/', pos: 'n.', meaning: '系绳', breakdown: [{ part: 'tjoðr', gloss: 'Old Norse for rope' }] },
}