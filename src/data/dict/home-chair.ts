import type { DictEntry } from '../types'

export const homeChairDict: Record<string, DictEntry> = {
  'home-chair': { word: 'chair', phonetic: '/tʃɛr/', pos: 'n.', meaning: '椅子' },
  chair: { word: 'chair', phonetic: '/tʃɛr/', pos: 'n.', meaning: '椅子', breakdown: [{ part: 'chaïre', gloss: 'French from Greek kathedra (seat)' }] },
  seat: { word: 'seat', phonetic: '/siːt/', pos: 'n.', meaning: '座位', breakdown: [{ part: 'sæte', gloss: 'Old English for sitting place' }] },
  backrest: { word: 'backrest', phonetic: '/ˈbækrest/', pos: 'n.', meaning: '靠背', breakdown: [{ part: 'back', gloss: 'back' }, { part: 'rest', gloss: 'support' }] },
  armrest: { word: 'armrest', phonetic: '/ˈɑːrmrest/', pos: 'n.', meaning: '扶手', breakdown: [{ part: 'arm', gloss: 'arm' }, { part: 'rest', gloss: 'support' }] },
  glide: { word: 'glide', phonetic: '/ɡlaɪd/', pos: 'n. / v.', meaning: '滑动', breakdown: [{ part: 'glidan', gloss: 'Old English for slide' }] },
}