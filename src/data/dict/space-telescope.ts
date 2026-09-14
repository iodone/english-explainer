import type { DictEntry } from '../types'

export const spaceTelescopeDict: Record<string, DictEntry> = {
  'space-telescope': { word: 'space telescope', phonetic: '/speɪs ˈtɛləskoʊp/', pos: 'n.', meaning: '太空望远镜' },
  telescope: { word: 'telescope', phonetic: '/ˈtɛləskoʊp/', pos: 'n.', meaning: '望远镜', breakdown: [{ part: 'tele-', gloss: 'far' }, { part: 'scope', gloss: 'look' }] },
  mirror: { word: 'mirror', phonetic: '/ˈmɪrər/', pos: 'n.', meaning: '镜子', breakdown: [{ part: 'mirr', gloss: 'wonder' }, { part: '-or', gloss: 'thing' }] },
  optical: { word: 'optical', phonetic: '/ˈɒptɪkəl/', pos: 'adj.', meaning: '光学的', breakdown: [{ part: 'opt', gloss: 'see' }, { part: '-ical', gloss: 'relating to' }] },
  camera: { word: 'camera', phonetic: '/ˈkæmərə/', pos: 'n.', meaning: '相机', breakdown: [{ part: 'camer', gloss: 'room' }, { part: '-a', gloss: 'Latin ending' }] },
  sunshield: { word: 'sunshield', phonetic: '/ˈsʌnʃiːld/', pos: 'n.', meaning: '遮阳罩', breakdown: [{ part: 'sun', gloss: 'sun' }, { part: 'shield', gloss: 'protection' }] },
}