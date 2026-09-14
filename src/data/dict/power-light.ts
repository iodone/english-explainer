import type { DictEntry } from '../types'

export const powerLightDict: Record<string, DictEntry> = {
  'power-light': { word: 'light fixture', phonetic: '/laɪt ˈfɪkstʃər/', pos: 'n.', meaning: '灯具' },
  light: { word: 'light', phonetic: '/laɪt/', pos: 'n. / adj.', meaning: '光；轻的', breakdown: [{ part: 'lēoht', gloss: 'Old English for light' }] },
  fixture: { word: 'fixture', phonetic: '/ˈfɪkstʃər/', pos: 'n.', meaning: '固定装置', breakdown: [{ part: 'fix', gloss: 'Latin figere (fasten)' }, { part: '-ture', gloss: 'act of' }] },
  bulb: { word: 'bulb', phonetic: '/bʌlb/', pos: 'n.', meaning: '灯泡', breakdown: [{ part: 'bulbus', gloss: 'Latin for onion' }] },
  lampshade: { word: 'lampshade', phonetic: '/ˈlæmpʃeɪd/', pos: 'n.', meaning: '灯罩', breakdown: [{ part: 'lamp', gloss: 'light source' }, { part: 'shade', gloss: 'cover' }] },
  switch: { word: 'switch', phonetic: '/swɪtʃ/', pos: 'n. / v.', meaning: '开关；转换', breakdown: [{ part: 'switch', gloss: 'flexible twig' }] },
  bracket: { word: 'bracket', phonetic: '/ˈbrækɪt/', pos: 'n.', meaning: '支架', breakdown: [{ part: 'braca', gloss: 'Old French for support' }] },
}