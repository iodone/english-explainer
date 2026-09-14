import type { ThingData } from '../types';

export const homeGarlicPress: ThingData = {
  id: 'home-garlic-press',
  slug: 'home-garlic-press',
  simpleName: 'The Smash Press',
  realName: 'Garlic Press',
  category: 'home',
  color: '#808080',
  funFacts: [
    'A garlic press smashes a small cup of garlic with one hard push.',
    'You do not need a knife, so your hands stay clean and safe.',
    'The holes in the front face let the soft part come out.',
    'The hard skin stays in the cup and is thrown away.',
    'It works best when the garlic is put in with no skin.',
    'People wash it right after use, or the smell stays for a long time.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Press Body', position: [0, -0.06, 0], finish: 'hull' },
    { id: 'arm', label: 'Press Arms', realName: 'Press Handles', position: [0.06, 0.24, 0.05], finish: 'titanium' },
    { id: 'plate', label: 'Smash Plate', realName: 'Press Piston', position: [0.02, 0.17, 0], finish: 'warning' },
    { id: 'pivot', label: 'Swing Point', realName: 'Pivot Pin', position: [-0.17, 0.1, 0], finish: 'titanium' },
    { id: 'cup', label: 'Small Cup', realName: 'Garlic Chamber', position: [0.02, 0.12, 0], finish: 'cold' },
    { id: 'holes', label: 'Hole Face', realName: 'Hole Plate', position: [0.02, 0.12, 0.08], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This small press smashes a cup of garlic with one hard push of your hand.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the part that holds all the other parts together.'],
        ['The ', { text: 'press arms', part: 'arm' }, ' are the two long parts you hold and push down.'],
        ['The ', { text: 'smash plate', part: 'plate' }, ' is the flat part that pushes the garlic through the holes.'],
        ['The ', { text: 'swing point', part: 'pivot' }, ' is the part where the two arms turn.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'small cup', part: 'cup' }, ' is the space where you put the garlic.'],
        ['The ', { text: 'hole face', part: 'holes' }, ' has many small holes in the front.'],
        ['You push the arms down and the smash plate moves through the cup.'],
        ['The soft part of the garlic comes out of the holes and falls on your food.'],
        ['The hard skin stays in the cup and you throw it away.'],
        ['You wash it right after use, because the smell of garlic stays for a long time.']
      ]
    }
  ],
  flow: [
    { partIds: ['arm'], caption: 'You push the press arms down', sentenceRef: 2 },
    { partIds: ['plate'], caption: 'The smash plate pushes the garlic through the holes', sentenceRef: 3 },
    { partIds: ['cup'], caption: 'The small cup holds the garlic', sentenceRef: 5 },
    { partIds: ['holes'], caption: 'The hole face lets the soft part come out', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'press arms', partId: 'arm' },
    { text: 'smash plate', partId: 'plate' },
    { text: 'small cup', partId: 'cup' },
    { text: 'hole face', partId: 'holes' }
  ]
};
