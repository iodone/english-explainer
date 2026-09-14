import type { DictEntry } from '../types'

export const spaceGymDict: Record<string, DictEntry> = {
  'space-gym': { word: 'space gym', phonetic: '/speɪs dʒɪm/', pos: 'n.', meaning: '太空健身房' },
  gym: { word: 'gym', phonetic: '/dʒɪm/', pos: 'n.', meaning: '健身房', breakdown: [{ part: 'gymnasion', gloss: 'Greek for exercise place' }] },
  exercise: { word: 'exercise', phonetic: '/ˈeksərsaɪz/', pos: 'n. / v.', meaning: '锻炼；练习', breakdown: [{ part: 'ex-', gloss: 'out' }, { part: 'arcere', gloss: 'keep away' }] },
  restraint: { word: 'restraint', phonetic: '/rɪˈstreɪnt/', pos: 'n.', meaning: '约束；限制', breakdown: [{ part: 're-', gloss: 'back' }, { part: 'stringere', gloss: 'bind tight' }] },
  resistance: { word: 'resistance', phonetic: '/rɪˈzɪstəns/', pos: 'n.', meaning: '阻力；抵抗', breakdown: [{ part: 're-', gloss: 'against' }, { part: 'sistere', gloss: 'stand' }] },
  muscle: { word: 'muscle', phonetic: '/ˈmʌsəl/', pos: 'n.', meaning: '肌肉', breakdown: [{ part: 'musculus', gloss: 'Latin for little mouse' }] },
}