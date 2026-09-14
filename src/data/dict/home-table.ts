import type { DictEntry } from '../types'

export const homeTableDict: Record<string, DictEntry> = {
  'home-table': { word: 'table', phonetic: '/ˈteɪbəl/', pos: 'n.', meaning: '桌子' },
  table: { word: 'table', phonetic: '/ˈteɪbəl/', pos: 'n.', meaning: '桌子', breakdown: [{ part: 'table', gloss: 'Old French from Latin tabula (board)' }] },
  tabletop: { word: 'tabletop', phonetic: '/ˈteɪbəltɒp/', pos: 'n.', meaning: '桌面', breakdown: [{ part: 'table', gloss: 'table' }, { part: 'top', gloss: 'upper surface' }] },
  leg: { word: 'leg', phonetic: '/leɡ/', pos: 'n.', meaning: '腿', breakdown: [{ part: 'leggr', gloss: 'Old Norse for leg' }] },
  apron: { word: 'apron', phonetic: '/ˈeɪprən/', pos: 'n.', meaning: '围裙；裙板', breakdown: [{ part: 'naperon', gloss: 'Old French for small cloth' }] },
  pad: { word: 'pad', phonetic: '/pæd/', pos: 'n.', meaning: '垫子', breakdown: [{ part: 'pad', gloss: 'soft stuffing' }] },
}