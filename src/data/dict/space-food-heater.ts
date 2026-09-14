import type { DictEntry } from '../types'

export const spaceFoodHeaterDict: Record<string, DictEntry> = {
  'space-food-heater': { word: 'space food heater', phonetic: '/speɪs fuːd ˈhiːtər/', pos: 'n.', meaning: '太空食物加热器' },
  heater: { word: 'heater', phonetic: '/ˈhiːtər/', pos: 'n.', meaning: '加热器', breakdown: [{ part: 'heat', gloss: 'make hot' }, { part: '-er', gloss: 'thing that does' }] },
  chamber: { word: 'chamber', phonetic: '/ˈtʃeɪmbər/', pos: 'n.', meaning: '室；腔', breakdown: [{ part: 'chambre', gloss: 'French for room' }] },
  microwave: { word: 'microwave', phonetic: '/ˈmaɪkroʊweɪv/', pos: 'n.', meaning: '微波', breakdown: [{ part: 'micro-', gloss: 'small' }, { part: 'wave', gloss: 'wave' }] },
  indicator: { word: 'indicator', phonetic: '/ˈɪndɪkeɪtər/', pos: 'n.', meaning: '指示器', breakdown: [{ part: 'in-', gloss: 'toward' }, { part: 'dicare', gloss: 'point out' }, { part: '-tor', gloss: 'thing that' }] },
  access: { word: 'access', phonetic: '/ˈækses/', pos: 'n. / v.', meaning: '进入；访问', breakdown: [{ part: 'ac-', gloss: 'to' }, { part: 'cedere', gloss: 'go' }] },
}