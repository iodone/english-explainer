import type { ThingData } from '../types';

export const homeMelonBaller: ThingData = {
  id: 'home-melon-baller',
  slug: 'home-melon-baller',
  simpleName: 'The Round Scooper',
  realName: 'Melon Baller',
  category: 'home',
  color: '#228B22',
  funFacts: [
    'This tool cuts round balls out of soft food.',
    'The cut edge is a thin, sharp ring on the small cup.',
    'You push the scoop in and turn it, and a ball comes out.',
    'The small hole lets you push the ball out with a finger.',
    'You can use it on soft food of many colors.',
    'You wash it in warm water after you use it.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Handle Body', position: [0, 0.14, 0], finish: 'hull' },
    { id: 'scoop', label: 'Round Scoop', realName: 'Scoop Cup', position: [0, -0.12, 0], finish: 'titanium' },
    { id: 'edge', label: 'Cut Edge', realName: 'Edge', position: [0, -0.19, 0], finish: 'cold' },
    { id: 'arm', label: 'Short Arm', realName: 'Arm', position: [0, 0.02, 0], finish: 'hull' },
    { id: 'hole', label: 'Small Hole', realName: 'Hole', position: [0, -0.26, 0], finish: 'titanium' },
    { id: 'end', label: 'Grip End', realName: 'End', position: [0, 0.28, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This tool cuts round balls out of soft food.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the part that holds the scoop.'],
        ['The ', { text: 'round scoop', part: 'scoop' }, ' is the small cup that cuts the food.'],
        ['The ', { text: 'cut edge', part: 'edge' }, ' is the thin, sharp ring on the cup.'],
        ['The ', { text: 'short arm', part: 'arm' }, ' joins the scoop to the body.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'small hole', part: 'hole' }, ' lets the food come out of the cup.'],
        ['The ', { text: 'grip end', part: 'end' }, ' is the part your hand holds.'],
        ['You push the scoop into the soft food.'],
        ['The cut edge cuts a round ball out of the food.'],
        ['You pull the tool out, and the ball comes with it.'],
        ['The small hole lets you push the ball out with a finger.']
      ]
    }
  ],
  flow: [
    { partIds: ['scoop'], caption: 'The round scoop is the small cup that cuts the food', sentenceRef: 2 },
    { partIds: ['edge'], caption: 'The cut edge is the thin, sharp ring on the cup', sentenceRef: 3 },
    { partIds: ['hole'], caption: 'The small hole lets the food come out of the cup', sentenceRef: 5 },
    { partIds: ['end'], caption: 'The grip end is the part your hand holds', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'round scoop', partId: 'scoop' },
    { text: 'cut edge', partId: 'edge' },
    { text: 'small hole', partId: 'hole' },
    { text: 'grip end', partId: 'end' }
  ]
};
