import type { DictEntry } from '../types'

export const spaceAntennaDict: Record<string, DictEntry> = {
  'space-antenna': { word: 'space antenna', phonetic: '/speɪs ænˈtɛnə/', pos: 'n.', meaning: '太空天线' },
  antenna: { word: 'antenna', phonetic: '/ænˈtɛnə/', pos: 'n.', meaning: '天线', breakdown: [{ part: 'ante-', gloss: 'before' }, { part: '-nna', gloss: 'Latin for feeler' }] },
  transmitter: { word: 'transmitter', phonetic: '/trænzˈmɪtər/', pos: 'n.', meaning: '发射器', breakdown: [{ part: 'trans-', gloss: 'across' }, { part: 'mitt', gloss: 'send' }, { part: '-er', gloss: 'one who does' }] },
  reflector: { word: 'reflector', phonetic: '/rɪˈflɛktər/', pos: 'n.', meaning: '反射器', breakdown: [{ part: 're-', gloss: 'back' }, { part: 'flect', gloss: 'bend' }, { part: '-or', gloss: 'one who does' }] },
  signal: { word: 'signal', phonetic: '/ˈsɪɡnəl/', pos: 'n.', meaning: '信号', breakdown: [{ part: 'sign', gloss: 'mark' }, { part: '-al', gloss: 'relating to' }] },
  satellite: { word: 'satellite', phonetic: '/ˈsætəlaɪt/', pos: 'n.', meaning: '卫星', breakdown: [{ part: 'satell', gloss: 'companion' }, { part: '-ite', gloss: 'connected with' }] },
}