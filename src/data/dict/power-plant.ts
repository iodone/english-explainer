import type { DictEntry } from '../types'

export const powerPlantDict: Record<string, DictEntry> = {
  'power-plant': { word: 'power plant', phonetic: '/ˈpaʊər plænt/', pos: 'n.', meaning: '发电厂' },
  turbine: { word: 'turbine', phonetic: '/ˈtɜːrbaɪn/', pos: 'n.', meaning: '涡轮机', breakdown: [{ part: 'turb', gloss: 'whirl' }, { part: '-ine', gloss: 'relating to' }] },
  generator: { word: 'generator', phonetic: '/ˈdʒɛnəreɪtər/', pos: 'n.', meaning: '发电机', breakdown: [{ part: 'gener', gloss: 'produce' }, { part: '-ator', gloss: 'one who does' }] },
  boiler: { word: 'boiler', phonetic: '/ˈbɔɪlər/', pos: 'n.', meaning: '锅炉', breakdown: [{ part: 'boil', gloss: 'make hot' }, { part: '-er', gloss: 'thing' }] },
  chimney: { word: 'chimney', phonetic: '/ˈtʃɪmni/', pos: 'n.', meaning: '烟囱', breakdown: [{ part: 'chimney', gloss: 'fireplace pipe' }] },
}