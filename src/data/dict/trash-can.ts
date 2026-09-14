import type { DictEntry } from '../types'

export const trashCanDict: Record<string, DictEntry> = {
  'trash-can': { word: 'trash can', phonetic: '/træʃ kæn/', pos: 'n.', meaning: '垃圾桶' },
  container: { word: 'container', phonetic: '/kənˈteɪnər/', pos: 'n.', meaning: '容器', breakdown: [{ part: 'con-', gloss: 'together' }, { part: 'tain', gloss: 'hold' }, { part: '-er', gloss: 'thing' }] },
  pedal: { word: 'pedal', phonetic: '/ˈpɛdəl/', pos: 'n.', meaning: '踏板', breakdown: [{ part: 'ped', gloss: 'foot' }, { part: '-al', gloss: 'relating to' }] },
  charcoal: { word: 'charcoal', phonetic: '/ˈtʃɑːrkoʊl/', pos: 'n.', meaning: '活性炭', breakdown: [{ part: 'char', gloss: 'burn' }, { part: 'coal', gloss: 'black fuel' }] },
  filter: { word: 'filter', phonetic: '/ˈfɪltər/', pos: 'n.', meaning: '过滤器', breakdown: [{ part: 'filt', gloss: 'felt' }, { part: '-er', gloss: 'thing' }] },
}