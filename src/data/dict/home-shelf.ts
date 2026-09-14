import type { DictEntry } from '../types'

export const homeShelfDict: Record<string, DictEntry> = {
  'home-shelf': { word: 'shelf', phonetic: '/ʃelf/', pos: 'n.', meaning: '架子' },
  shelf: { word: 'shelf', phonetic: '/ʃelf/', pos: 'n.', meaning: '架子', breakdown: [{ part: 'scylfe', gloss: 'Old English for board' }] },
  bracket: { word: 'bracket', phonetic: '/ˈbrækɪt/', pos: 'n.', meaning: '支架', breakdown: [{ part: 'braca', gloss: 'Old French for support' }] },
  lip: { word: 'lip', phonetic: '/lɪp/', pos: 'n.', meaning: '唇；边缘', breakdown: [{ part: 'lippa', gloss: 'Old English for lip' }] },
  panel: { word: 'panel', phonetic: '/ˈpænəl/', pos: 'n.', meaning: '面板', breakdown: [{ part: 'pan', gloss: 'French for cloth' }, { part: '-el', gloss: 'small' }] },
}