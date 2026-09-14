import type { DictEntry } from '../types'

export const spaceJunkDict: Record<string, DictEntry> = {
  'space-junk': { word: 'space debris', phonetic: '/speɪs dəˈbriː/', pos: 'n.', meaning: '太空碎片' },
  debris: { word: 'debris', phonetic: '/dəˈbriː/', pos: 'n.', meaning: '碎片', breakdown: [{ part: 'debris', gloss: 'broken pieces' }] },
  fragment: { word: 'fragment', phonetic: '/ˈfræɡmənt/', pos: 'n.', meaning: '碎片', breakdown: [{ part: 'frag', gloss: 'break' }, { part: '-ment', gloss: 'result' }] },
  satellite: { word: 'satellite', phonetic: '/ˈsætəlaɪt/', pos: 'n.', meaning: '卫星', breakdown: [{ part: 'satell', gloss: 'companion' }, { part: '-ite', gloss: 'connected with' }] },
  flake: { word: 'flake', phonetic: '/fleɪk/', pos: 'n.', meaning: '薄片', breakdown: [{ part: 'flake', gloss: 'thin piece' }] },
  bolt: { word: 'bolt', phonetic: '/boʊlt/', pos: 'n.', meaning: '螺栓', breakdown: [{ part: 'bolt', gloss: 'fastener' }] },
}