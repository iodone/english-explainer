import type { DictEntry } from '../types'

export const powerToolDict: Record<string, DictEntry> = {
  'power-tool': { word: 'power tool', phonetic: '/ˈpaʊər tuːl/', pos: 'n.', meaning: '电动工具' },
  motor: { word: 'motor', phonetic: '/ˈmoʊtər/', pos: 'n.', meaning: '马达', breakdown: [{ part: 'mot', gloss: 'move' }, { part: '-or', gloss: 'thing' }] },
  chuck: { word: 'chuck', phonetic: '/tʃʌk/', pos: 'n.', meaning: '夹头', breakdown: [{ part: 'chuck', gloss: 'grip' }] },
  trigger: { word: 'trigger', phonetic: '/ˈtrɪɡər/', pos: 'n.', meaning: '扳机', breakdown: [{ part: 'trig', gloss: 'pull' }, { part: '-er', gloss: 'thing' }] },
  auxiliary: { word: 'auxiliary', phonetic: '/ɔːɡˈzɪljəri/', pos: 'adj.', meaning: '辅助的', breakdown: [{ part: 'auxili', gloss: 'help' }, { part: '-ary', gloss: 'relating to' }] },
}