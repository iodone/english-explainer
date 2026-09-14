import type { ThingData } from '../types';

export const homeAppleCorer: ThingData = {
  id: 'home-apple-corer',
  slug: 'home-apple-corer',
  simpleName: 'The Core Taker',
  realName: 'Apple Corer',
  category: 'home',
  color: '#808080',
  funFacts: [
    'This tool takes the core out of an apple in one push.',
    'The ring cuts all the way around the core.',
    'The core slides into the tube and comes out with the tool.',
    'You do not need power to use it.',
    'Some tools also cut the apple into parts as you push.',
    'You wash it in warm water after you use it.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Body Grip', position: [0, 0, 0], finish: 'hull' },
    { id: 'ring', label: 'Cut Ring', realName: 'Cutting Ring', position: [0, -0.14, 0], finish: 'titanium' },
    { id: 'tube', label: 'Core Tube', realName: 'Core Tube', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'hold', label: 'Grip Hold', realName: 'Handle', position: [0, 0.2, 0], finish: 'hull' },
    { id: 'blade', label: 'Side Blade', realName: 'Side Blade', position: [0.16, -0.06, 0], finish: 'titanium' },
    { id: 'end', label: 'Push End', realName: 'Push Plate', position: [0, 0.3, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This tool takes the core out of an apple in one push.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the part that holds the ring.'],
        ['The ', { text: 'cut ring', part: 'ring' }, ' is the round blade that goes around the core.'],
        ['The ', { text: 'core tube', part: 'tube' }, ' is the wide tube that holds the core.'],
        ['The ', { text: 'grip hold', part: 'hold' }, ' is the part your hand holds.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'side blade', part: 'blade' }, ' cuts the apple into parts as you push.'],
        ['The ', { text: 'push end', part: 'end' }, ' is the flat top you press with your hand.'],
        ['You set the ring on the top of the apple.'],
        ['You push the tool down, and the ring cuts around the core.'],
        ['The core slides into the tube, and the side blade cuts the rest.'],
        ['You pull the tool out and the core comes with it.']
      ]
    }
  ],
  flow: [
    { partIds: ['ring'], caption: 'The cut ring goes around the core', sentenceRef: 2 },
    { partIds: ['tube'], caption: 'The core tube holds the core', sentenceRef: 3 },
    { partIds: ['blade'], caption: 'The side blade cuts the rest of the apple', sentenceRef: 5 },
    { partIds: ['end'], caption: 'The push end is the flat top you press', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'cut ring', partId: 'ring' },
    { text: 'core tube', partId: 'tube' },
    { text: 'grip hold', partId: 'hold' },
    { text: 'push end', partId: 'end' }
  ]
};
