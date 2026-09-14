import type { DictEntry } from '../types'

export const doorLockDict: Record<string, DictEntry> = {
  'door-lock': { word: 'door lock', phonetic: '/dɔːr lɒk/', pos: 'n.', meaning: '门锁' },
  cylinder: { word: 'cylinder', phonetic: '/ˈsɪlɪndər/', pos: 'n.', meaning: '圆柱体', breakdown: [{ part: 'cylind', gloss: 'roll' }, { part: '-er', gloss: 'thing' }] },
  bolt: { word: 'bolt', phonetic: '/boʊlt/', pos: 'n.', meaning: '门栓', breakdown: [{ part: 'bolt', gloss: 'arrow-shaped pin' }] },
  lever: { word: 'lever', phonetic: '/ˈliːvər/', pos: 'n.', meaning: '杠杆', breakdown: [{ part: 'lev', gloss: 'raise' }, { part: '-er', gloss: 'thing' }] },
  tumbler: { word: 'tumbler', phonetic: '/ˈtʌmblər/', pos: 'n.', meaning: '锁芯', breakdown: [{ part: 'tumbl', gloss: 'fall' }, { part: '-er', gloss: 'thing' }] },
  strike: { word: 'strike', phonetic: '/straɪk/', pos: 'n.', meaning: '打击板', breakdown: [{ part: 'strike', gloss: 'hit' }] },
}