import type { DictEntry } from '../types'

export const powerHeaterDict: Record<string, DictEntry> = {
  'power-heater': { word: 'electric heater', phonetic: '/ɪˈlɛktrɪk ˈhiːtər/', pos: 'n.', meaning: '电加热器' },
  heater: { word: 'heater', phonetic: '/ˈhiːtər/', pos: 'n.', meaning: '加热器', breakdown: [{ part: 'heat', gloss: 'make hot' }, { part: '-er', gloss: 'thing that does' }] },
  element: { word: 'element', phonetic: '/ˈelɪmənt/', pos: 'n.', meaning: '元素；元件', breakdown: [{ part: 'elementum', gloss: 'Latin for first principle' }] },
  thermostat: { word: 'thermostat', phonetic: '/ˈθɜːrməstæt/', pos: 'n.', meaning: '恒温器', breakdown: [{ part: 'thermo-', gloss: 'heat' }, { part: '-stat', gloss: 'standing' }] },
  cord: { word: 'cord', phonetic: '/kɔːrd/', pos: 'n.', meaning: '绳；线', breakdown: [{ part: 'chorda', gloss: 'Latin for string' }] },
  housing: { word: 'housing', phonetic: '/ˈhaʊzɪŋ/', pos: 'n.', meaning: '外壳', breakdown: [{ part: 'house', gloss: 'house' }, { part: '-ing', gloss: 'material for' }] },
}