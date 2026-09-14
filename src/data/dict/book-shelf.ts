import type { DictEntry } from '../types'

export const bookShelfDict: Record<string, DictEntry> = {
  'book-shelf': { word: 'bookshelf', phonetic: '/ˈbʊkʃɛlf/', pos: 'n.', meaning: '书架', breakdown: [{ part: 'book', gloss: 'reading thing' }, { part: 'shelf', gloss: 'flat board' }] },
  shelf: { word: 'shelf', phonetic: '/ʃɛlf/', pos: 'n.', meaning: '架子', breakdown: [{ part: 'shelf', gloss: 'flat board for holding' }] },
  panel: { word: 'panel', phonetic: '/ˈpænəl/', pos: 'n.', meaning: '面板', breakdown: [{ part: 'pan', gloss: 'piece' }, { part: '-el', gloss: 'small' }] },
  bracket: { word: 'bracket', phonetic: '/ˈbrækɪt/', pos: 'n.', meaning: '支架', breakdown: [{ part: 'brack', gloss: 'support' }, { part: '-et', gloss: 'small' }] },
}