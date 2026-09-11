import type { ThingData } from '../types'

export const fan: ThingData = {
  id: 'fan',
  slug: 'fan',
  simpleName: 'The Air Pusher',
  realName: 'Electric Fan',
  category: 'home',
  funFacts: [
    'The fastest fans spin more than 300 times in one second.',
    'Strange but true: a fan in a closed room makes the air a little warmer, not cooler — the running motor warms it up as it turns. The cool feeling comes from the moving air on your skin.',
    'Before wall power, a fan was just paper and thin wood, waved by hand — and in much of the world, people still do it that way now.',
  ],
  parts: [
    { id: 'spinning-blades', label: 'spinning blades', realName: 'Blade Set', position: [0, 0.28, 0.02], finish: 'warning' },
    { id: 'motor-body', label: 'motor body', realName: 'Motor Housing', position: [0, 0.28, -0.09], finish: 'titanium' },
    { id: 'front-guard', label: 'front guard', realName: 'Front Grille', position: [0, 0.28, 0.06], finish: 'hull' },
    { id: 'back-guard', label: 'back guard', realName: 'Rear Grille', position: [0, 0.28, -0.02], finish: 'cold' },
    { id: 'floor-stand', label: 'floor stand', realName: 'Stand Pole', position: [0, 0, 0], finish: 'cold' },
    { id: 'foot-plate', label: 'foot plate', realName: 'Base Plate', position: [0, -0.32, 0], finish: 'cold' },
    { id: 'speed-switch', label: 'speed switch', realName: 'Speed Control', position: [0.05, 0.14, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'On a hot day, this thing makes its own ',
          { text: 'breeze', dict: 'breeze' },
          ' — moving air that feels cool on your skin.',
        ],
        ['The idea is old and simple: move the air, and you feel better.'],
        [
          'Hundreds of years ago, people did the job by hand, with ',
          { text: 'fans', dict: 'fan' },
          ' made of paper.',
        ],
      ],
    },
    {
      sentences: [
        [
          'This one turns by itself, with a set of ',
          { text: 'spinning blades', part: 'spinning-blades' },
          ' doing the work.',
        ],
        [
          'Behind them sits the ',
          { text: 'motor body', part: 'motor-body', dict: 'motor' },
          ' — the strong little heart that never stops turning while the fan is on.',
        ],
        [
          'A ',
          { text: 'front guard', part: 'front-guard' },
          ' and a ',
          { text: 'back guard', part: 'back-guard' },
          ' — round nets of thin bars — keep little fingers away from the blades.',
        ],
        ['The bars are close together, so the air passes through, but a finger can not.'],
      ],
    },
    {
      sentences: [
        [
          'Under the head, a tall ',
          { text: 'floor stand', part: 'floor-stand' },
          ' holds everything up, so the moving air reaches you where you sit.',
        ],
        [
          'At the bottom, a wide ',
          { text: 'foot plate', part: 'foot-plate' },
          ' keeps the whole thing from falling over.',
        ],
        [
          'Near the top, a small ',
          { text: 'speed switch', part: 'speed-switch', dict: 'switch' },
          ' lets you pick: slow air for sleeping, or fast air for the hottest hours.',
        ],
        ['Many fans can also turn their heads from side to side, sending the cool air across the whole room.'],
      ],
    },
    {
      sentences: [
        ['Press the switch, and the blades come alive in a second — no waiting, no noise, just wind.'],
        ['The moving air also carries away the warm cover of air that sits on your skin, and that is what makes you feel cool.'],
        ['That is the way of the air pusher: turn it on, and the summer room turns kind.'],
      ],
    },
  ],
  flow: [
    { partIds: ['spinning-blades'], sentenceRef: 3, caption: 'The spinning blades go around and around, pushing the air toward you.' },
    { partIds: ['motor-body'], sentenceRef: 4, caption: 'The motor body does the turning, hour after hour, never stopping.' },
    { partIds: ['front-guard', 'back-guard'], sentenceRef: 5, caption: 'The front guard and back guard let the air through and keep fingers out.' },
    { partIds: ['foot-plate', 'floor-stand'], sentenceRef: 8, caption: 'A wide foot plate holds the floor, and the floor stand holds the head up where you sit.' },
    { partIds: ['speed-switch'], sentenceRef: 9, caption: 'The speed switch sets how fast the air comes: slow for sleep, fast for the hottest hours.' },
  ],
  keyExpressions: [
    { text: 'go around and around, pushing the air toward you', partId: 'spinning-blades' },
    { text: 'the strong little heart that never stops turning', partId: 'motor-body' },
    { text: 'a round net of thin bars', partId: 'front-guard' },
    { text: 'keep little fingers away from the blades', partId: 'back-guard' },
    { text: 'holds everything up, so the air reaches you', partId: 'floor-stand' },
    { text: 'wide and low, so it will not fall over', partId: 'foot-plate' },
    { text: 'slow air for sleeping, or fast air for the hottest hours', partId: 'speed-switch' },
    { text: 'makes its own breeze' },
    { text: 'turns its head from side to side' },
  ],
  color: '#E76F51',
}
