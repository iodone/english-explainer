import type { DictEntry } from '../types'

export const spaceMirrorDict: Record<string, DictEntry> = {
  'space-mirror': { word: 'space mirror', phonetic: '/speɪs ˈmɪrər/', pos: 'n.', meaning: '太空反射镜' },
  reflector: { word: 'reflector', phonetic: '/rɪˈflɛktər/', pos: 'n.', meaning: '反射器', breakdown: [{ part: 're-', gloss: 'back' }, { part: 'flect', gloss: 'bend' }, { part: '-or', gloss: 'thing' }] },
  attitude: { word: 'attitude', phonetic: '/ˈætɪtjuːd/', pos: 'n.', meaning: '姿态', breakdown: [{ part: 'atti', gloss: 'fit' }, { part: '-tude', gloss: 'state' }] },
  deployment: { word: 'deployment', phonetic: '/dɪˈplɔɪmənt/', pos: 'n.', meaning: '展开', breakdown: [{ part: 'de-', gloss: 'away' }, { part: 'ploy', gloss: 'fold' }, { part: '-ment', gloss: 'action' }] },
  tracker: { word: 'tracker', phonetic: '/ˈtrækər/', pos: 'n.', meaning: '追踪器', breakdown: [{ part: 'track', gloss: 'follow' }, { part: '-er', gloss: 'thing' }] },
}