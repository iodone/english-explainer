import type { ThingData } from '../types';

export const homePizzaCutter: ThingData = {
  id: 'home-pizza-cutter',
  slug: 'home-pizza-cutter',
  simpleName: 'The Round Cutter',
  realName: 'Pizza Cutter',
  category: 'home',
  color: '#C0C0C0',
  funFacts: [
    'A pizza cutter cuts a flat bread into even parts with one push.',
    'The wheel is round and turns as you push it over the food.',
    'You can cut a whole pizza in a few seconds with it.',
    'The guard keeps your hand away from the sharp wheel.',
    'The grip is warm to hold while the wheel turns under it.',
    'You wash it right after use, because food stays on the wheel.'
  ],
  parts: [
    { id: 'wheel', label: 'Round Wheel', realName: 'Cutting Wheel', position: [0, 0, 0], finish: 'titanium' },
    { id: 'edge', label: 'Sharp Edge', realName: 'Blade Edge', position: [0, 0, 0], finish: 'warning' },
    { id: 'hub', label: 'Center Hub', realName: 'Hub Cap', position: [0, 0, 0.05], finish: 'cold' },
    { id: 'arm', label: 'Wheel Arm', realName: 'Yoke Frame', position: [0.2, 0.06, 0], finish: 'hull' },
    { id: 'grip', label: 'Hold Grip', realName: 'Handle', position: [0.42, 0.13, 0], finish: 'hull' },
    { id: 'guard', label: 'Hand Guard', realName: 'Finger Guard', position: [0, 0.2, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This small wheel cuts a flat bread into even parts with one push of your hand.'],
        ['The ', { text: 'round wheel', part: 'wheel' }, ' is the round part that rolls over the food.'],
        ['The ', { text: 'sharp edge', part: 'edge' }, ' is the thin line around the wheel that cuts.'],
        ['The ', { text: 'wheel arm', part: 'arm' }, ' holds the wheel so that it can turn.'],
        ['The ', { text: 'hold grip', part: 'grip' }, ' is the part your hand holds.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hand guard', part: 'guard' }, ' is the part that keeps your hand away from the edge.'],
        ['The ', { text: 'center hub', part: 'hub' }, ' is the middle part that the wheel turns around.'],
        ['You push the cutter over the food and the wheel turns.'],
        ['The sharp edge goes all the way through and makes one clean line.'],
        ['You can cut a whole bread into even parts in a few seconds.'],
        ['You wash it right after use, because food stays on the wheel.']
      ]
    }
  ],
  flow: [
    { partIds: ['wheel'], caption: 'The round wheel rolls over the food', sentenceRef: 1 },
    { partIds: ['edge'], caption: 'The sharp edge cuts through the food', sentenceRef: 2 },
    { partIds: ['grip'], caption: 'The hold grip is what your hand holds', sentenceRef: 4 },
    { partIds: ['guard'], caption: 'The hand guard keeps your hand away from the edge', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'round wheel', partId: 'wheel' },
    { text: 'sharp edge', partId: 'edge' },
    { text: 'hold grip', partId: 'grip' },
    { text: 'hand guard', partId: 'guard' }
  ]
};
