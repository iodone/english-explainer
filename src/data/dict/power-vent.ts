import type { DictEntry } from '../types'

export const powerVentDict: Record<string, DictEntry> = {
  'power-vent': { word: 'power vent', phonetic: '/ˈpaʊər vɛnt/', pos: 'n.', meaning: '电力通风口' },
  vent: { word: 'vent', phonetic: '/vɛnt/', pos: 'n.', meaning: '通风口', breakdown: [{ part: 'ventus', gloss: 'Latin for wind' }] },
  louver: { word: 'louver', phonetic: '/ˈluːvər/', pos: 'n.', meaning: '百叶窗', breakdown: [{ part: 'lovier', gloss: 'Old French for tower opening' }] },
  sensor: { word: 'sensor', phonetic: '/ˈsensər/', pos: 'n.', meaning: '传感器', breakdown: [{ part: 'sens', gloss: 'feel' }, { part: '-or', gloss: 'thing that' }] },
  housing: { word: 'housing', phonetic: '/ˈhaʊzɪŋ/', pos: 'n.', meaning: '外壳', breakdown: [{ part: 'house', gloss: 'house' }, { part: '-ing', gloss: 'material for' }] },
  blade: { word: 'blade', phonetic: '/bleɪd/', pos: 'n.', meaning: '叶片', breakdown: [{ part: 'blæd', gloss: 'Old English for leaf' }] },
}