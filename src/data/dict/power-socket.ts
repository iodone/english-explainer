import type { DictEntry } from '../types'

export const powerSocketDict: Record<string, DictEntry> = {
  'power-socket': { word: 'power socket', phonetic: '/ˈpaʊər ˈsɒkɪt/', pos: 'n.', meaning: '电源插座' },
  socket: { word: 'socket', phonetic: '/ˈsɒkɪt/', pos: 'n.', meaning: '插座', breakdown: [{ part: 'sock', gloss: 'hollow' }, { part: '-et', gloss: 'small' }] },
  terminal: { word: 'terminal', phonetic: '/ˈtɜːrmɪnəl/', pos: 'n.', meaning: '端子', breakdown: [{ part: 'termin', gloss: 'end' }, { part: '-al', gloss: 'relating to' }] },
  faceplate: { word: 'faceplate', phonetic: '/ˈfeɪspleɪt/', pos: 'n.', meaning: '面板', breakdown: [{ part: 'face', gloss: 'front' }, { part: 'plate', gloss: 'flat piece' }] },
  contact: { word: 'contact', phonetic: '/ˈkɒntækt/', pos: 'n.', meaning: '触点', breakdown: [{ part: 'con-', gloss: 'together' }, { part: 'tact', gloss: 'touch' }] },
}