import type { DictEntry } from '../types'

export const homeBedDict: Record<string, DictEntry> = {
  'home-bed': { word: 'bed', phonetic: '/bed/', pos: 'n.', meaning: '床' },
  bed: { word: 'bed', phonetic: '/bed/', pos: 'n.', meaning: '床', breakdown: [{ part: 'bedd', gloss: 'Old English for sleeping place' }] },
  mattress: { word: 'mattress', phonetic: '/ˈmætrəs/', pos: 'n.', meaning: '床垫', breakdown: [{ part: 'matrah', gloss: 'Arabic for cushion' }] },
  headboard: { word: 'headboard', phonetic: '/ˈhedbɔːrd/', pos: 'n.', meaning: '床头板', breakdown: [{ part: 'head', gloss: 'head' }, { part: 'board', gloss: 'flat piece' }] },
  footboard: { word: 'footboard', phonetic: '/ˈfʊtbɔːrd/', pos: 'n.', meaning: '床尾板', breakdown: [{ part: 'foot', gloss: 'foot' }, { part: 'board', gloss: 'flat piece' }] },
  blanket: { word: 'blanket', phonetic: '/ˈblæŋkɪt/', pos: 'n.', meaning: '毯子', breakdown: [{ part: 'blanc', gloss: 'French for white' }] },
  pillow: { word: 'pillow', phonetic: '/ˈpɪloʊ/', pos: 'n.', meaning: '枕头', breakdown: [{ part: 'pyle', gloss: 'Old English from Latin pulvinus (cushion)' }] },
  frame: { word: 'frame', phonetic: '/freɪm/', pos: 'n.', meaning: '框架', breakdown: [{ part: 'frame', gloss: 'Old English for structure' }] },
}