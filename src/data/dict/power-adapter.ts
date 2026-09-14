import type { DictEntry } from '../types'

export const powerAdapterDict: Record<string, DictEntry> = {
  'power-adapter': { word: 'power adapter', phonetic: '/ˈpaʊər əˈdæptər/', pos: 'n.', meaning: '电源适配器' },
  adapter: { word: 'adapter', phonetic: '/əˈdæptər/', pos: 'n.', meaning: '适配器', breakdown: [{ part: 'adaptare', gloss: 'To fit' }] },
  'transformer': { word: 'transformer', phonetic: '/trænsˈfɔːrmər/', pos: 'n.', meaning: '变压器', breakdown: [{ part: 'transformare', gloss: 'To change form' }] },
  'indicator': { word: 'indicator', phonetic: '/ˈɪndɪkeɪtər/', pos: 'n.', meaning: '指示器' },
  'prongs': { word: 'prongs', phonetic: '/prɒŋz/', pos: 'n.', meaning: '金属棒', breakdown: [{ part: 'pranga', gloss: 'A pointed piece of metal' }] },
}