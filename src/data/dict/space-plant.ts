import type { DictEntry } from '../types'

export const spacePlantDict: Record<string, DictEntry> = {
  'space-plant': { word: 'space plant', phonetic: '/speɪs plænt/', pos: 'n.', meaning: '太空植物' },
  growth: { word: 'growth', phonetic: '/ɡroʊθ/', pos: 'n.', meaning: '生长', breakdown: [{ part: 'grow', gloss: 'get bigger' }, { part: '-th', gloss: 'state' }] },
  chamber: { word: 'chamber', phonetic: '/ˈtʃeɪmbər/', pos: 'n.', meaning: '室', breakdown: [{ part: 'chamber', gloss: 'room' }] },
  irrigation: { word: 'irrigation', phonetic: '/ˌɪrɪˈɡeɪʃən/', pos: 'n.', meaning: '灌溉', breakdown: [{ part: 'irrig', gloss: 'water' }, { part: '-ation', gloss: 'process' }] },
  circulation: { word: 'circulation', phonetic: '/ˌsɜːrkjʊˈleɪʃən/', pos: 'n.', meaning: '循环', breakdown: [{ part: 'circul', gloss: 'circle' }, { part: '-ation', gloss: 'process' }] },
}