import type { ThingData } from '../types';

export const homePopcornMaker: ThingData = {
  id: 'home-popcorn-maker',
  slug: 'home-popcorn-maker',
  simpleName: 'The Corn Popper',
  realName: 'Popcorn Maker',
  category: 'home',
  color: '#F2E3B3',
  funFacts: [
    'This box heats corn seeds until they open into soft white pieces.',
    'Hot air makes the water in each seed turn into steam.',
    'The steam pushes out, and the seed opens with a pop.',
    'You do not need oil, so the food is dry and light.',
    'The seeds fall into the bowl as soft white pieces.',
    'You eat them warm.'
  ],
  parts: [
    { id: 'bowl', label: 'Corn Bowl', realName: 'Bowl', position: [0, 0, 0], finish: 'hull' },
    { id: 'heater', label: 'Hot Air Part', realName: 'Heater', position: [0, -0.16, 0], finish: 'cold' },
    { id: 'lid', label: 'Top Lid', realName: 'Lid', position: [0, 0.2, 0], finish: 'hull' },
    { id: 'motor', label: 'Turn Motor', realName: 'Motor', position: [0.24, -0.06, 0], finish: 'warning' },
    { id: 'cord', label: 'Power Cord', realName: 'Cord', position: [-0.28, -0.1, 0], finish: 'cold' },
    { id: 'base', label: 'Base', realName: 'Base', position: [0, -0.26, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This box heats corn seeds until they open into soft white pieces.'],
        ['The ', { text: 'corn bowl', part: 'bowl' }, ' is the cup that holds the seeds.'],
        ['The ', { text: 'hot air part', part: 'heater' }, ' makes the air hot.'],
        ['The ', { text: 'top lid', part: 'lid' }, ' keeps the seeds in the bowl.'],
        ['The ', { text: 'turn motor', part: 'motor' }, ' moves the hot air round the bowl.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'power cord', part: 'cord' }, ' brings power from the wall.'],
        ['The ', { text: 'base', part: 'base' }, ' holds the bowl up.'],
        ['Hot air makes the water in each seed turn into steam.'],
        ['The steam pushes out, and the seed opens with a pop.'],
        ['The seeds fall into the bowl as soft white pieces.'],
        ['You eat them warm, and you do not need oil.']
      ]
    }
  ],
  flow: [
    { partIds: ['bowl'], caption: 'The corn bowl holds the seeds', sentenceRef: 1 },
    { partIds: ['heater'], caption: 'The hot air part makes the air hot', sentenceRef: 2 },
    { partIds: ['lid'], caption: 'The top lid keeps the seeds in the bowl', sentenceRef: 3 },
    { partIds: ['motor'], caption: 'The turn motor moves the hot air round the bowl', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'corn bowl', partId: 'bowl' },
    { text: 'hot air part', partId: 'heater' },
    { text: 'top lid', partId: 'lid' },
    { text: 'turn motor', partId: 'motor' }
  ]
};
