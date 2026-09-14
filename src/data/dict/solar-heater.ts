import type { DictEntry } from '../types'

export const solarHeaterDict: Record<string, DictEntry> = {
  'solar-heater': { word: 'solar heater', phonetic: '/ˈsoʊlər ˈhiːtər/', pos: 'n.', meaning: '太阳能热水器' },
  absorber: { word: 'absorber', phonetic: '/əbˈzɔːrbər/', pos: 'n.', meaning: '吸收体', breakdown: [{ part: 'ab-', gloss: 'away' }, { part: 'sorb', gloss: 'suck in' }, { part: '-er', gloss: 'one who does' }] },
  collector: { word: 'collector', phonetic: '/kəˈlɛktər/', pos: 'n.', meaning: '集热器', breakdown: [{ part: 'col-', gloss: 'together' }, { part: 'lect', gloss: 'choose' }, { part: '-or', gloss: 'one who does' }] },
  inlet: { word: 'inlet', phonetic: '/ˈɪnlɛt/', pos: 'n.', meaning: '入口', breakdown: [{ part: 'in-', gloss: 'in' }, { part: 'let', gloss: 'allow' }] },
  outlet: { word: 'outlet', phonetic: '/ˈaʊtlɛt/', pos: 'n.', meaning: '出口', breakdown: [{ part: 'out-', gloss: 'out' }, { part: 'let', gloss: 'allow' }] },
}