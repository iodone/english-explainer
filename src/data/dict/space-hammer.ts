import type { DictEntry } from '../types'

export const spaceHammerDict: Record<string, DictEntry> = {
  'space-hammer': { word: 'space hammer', phonetic: '/speɪs ˈhæmər/', pos: 'n.', meaning: '太空锤子' },
  hammer: { word: 'hammer', phonetic: '/ˈhæmər/', pos: 'n.', meaning: '锤子', breakdown: [{ part: 'hamor', gloss: 'Old English for hammer' }] },
  handle: { word: 'handle', phonetic: '/ˈhændəl/', pos: 'n.', meaning: '把手', breakdown: [{ part: 'hand', gloss: 'hand' }, { part: '-le', gloss: 'tool for' }] },
  claw: { word: 'claw', phonetic: '/klɔː/', pos: 'n.', meaning: '爪子', breakdown: [{ part: 'clawu', gloss: 'Old English for claw' }] },
  strap: { word: 'strap', phonetic: '/stræp/', pos: 'n.', meaning: '带子', breakdown: [{ part: 'strop', gloss: 'strip of leather' }] },
  striking: { word: 'striking', phonetic: '/ˈstraɪkɪŋ/', pos: 'adj. / n.', meaning: '打击的', breakdown: [{ part: 'strike', gloss: 'hit' }, { part: '-ing', gloss: 'act of' }] },
}