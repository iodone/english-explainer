import type { DictEntry } from '../types'

export const doorBellDict: Record<string, DictEntry> = {
  'door-bell': { word: 'doorbell', phonetic: '/ˈdɔːrbɛl/', pos: 'n.', meaning: '门铃', breakdown: [{ part: 'door', gloss: 'entrance' }, { part: 'bell', gloss: 'sound maker' }] },
  chime: { word: 'chime', phonetic: '/tʃaɪm/', pos: 'n.', meaning: '铃声', breakdown: [{ part: 'chime', gloss: 'bell sound' }] },
  striker: { word: 'striker', phonetic: '/ˈstraɪkər/', pos: 'n.', meaning: '击锤', breakdown: [{ part: 'strike', gloss: 'hit' }, { part: '-er', gloss: 'thing' }] },
  wiring: { word: 'wiring', phonetic: '/ˈwaɪərɪŋ/', pos: 'n.', meaning: '线路', breakdown: [{ part: 'wire', gloss: 'metal line' }, { part: '-ing', gloss: 'system of' }] },
  speaker: { word: 'speaker', phonetic: '/ˈspiːkər/', pos: 'n.', meaning: '扬声器', breakdown: [{ part: 'speak', gloss: 'talk' }, { part: '-er', gloss: 'thing' }] },
}