import type { DictEntry } from '../types'

export const windPowerDict: Record<string, DictEntry> = {
  'wind-power': { word: 'wind turbine', phonetic: '/wɪnd ˈtɜːrbaɪn/', pos: 'n.', meaning: '风力发电机' },
  turbine: { word: 'turbine', phonetic: '/ˈtɜːrbaɪn/', pos: 'n.', meaning: '涡轮机', breakdown: [{ part: 'turb', gloss: 'whirl' }, { part: '-ine', gloss: 'relating to' }] },
  rotor: { word: 'rotor', phonetic: '/ˈroʊtər/', pos: 'n.', meaning: '转子', breakdown: [{ part: 'rot', gloss: 'turn' }, { part: '-or', gloss: 'thing' }] },
  nacelle: { word: 'nacelle', phonetic: '/nəˈsɛl/', pos: 'n.', meaning: '机舱', breakdown: [{ part: 'nacelle', gloss: 'small boat' }] },
  anemometer: { word: 'anemometer', phonetic: '/ˌænɪˈmɒmɪtər/', pos: 'n.', meaning: '风速计', breakdown: [{ part: 'anemo', gloss: 'wind' }, { part: 'meter', gloss: 'measure' }] },
  foundation: { word: 'foundation', phonetic: '/faʊnˈdeɪʃən/', pos: 'n.', meaning: '地基', breakdown: [{ part: 'found', gloss: 'base' }, { part: '-ation', gloss: 'state of' }] },
}