import type { ThingData } from '../types';

export const homeCitrusPress: ThingData = {
  id: 'home-citrus-press',
  slug: 'home-citrus-press',
  simpleName: 'The Juice Squeezer',
  realName: 'Citrus Press',
  category: 'home',
  color: '#FFA500',
  funFacts: [
    'This tool pushes the juice out of a round food in one move.',
    'The cone has small points that break the soft inside.',
    'The juice runs down through the small hole and into the cup.',
    'You do not need power or a motor to use it.',
    'You turn the food as you push, so you get all of the juice.',
    'All the parts come off, so you can wash them in warm water.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Press Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'cone', label: 'Squeeze Cone', realName: 'Reamer', position: [0, 0.14, 0], finish: 'titanium' },
    { id: 'tray', label: 'Juice Tray', realName: 'Tray', position: [0, 0, 0], finish: 'cold' },
    { id: 'hold', label: 'Grip Hold', realName: 'Handle', position: [0.3, 0.02, 0], finish: 'hull' },
    { id: 'hole', label: 'Small Hole', realName: 'Drain Hole', position: [0, -0.06, 0], finish: 'titanium' },
    { id: 'cup', label: 'Catch Cup', realName: 'Cup', position: [0, -0.24, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This tool pushes the juice out of a round food in one move.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the part that holds the food.'],
        ['The ', { text: 'squeeze cone', part: 'cone' }, ' is the top that goes into the food.'],
        ['The ', { text: 'juice tray', part: 'tray' }, ' is the part that catches the juice.'],
        ['The ', { text: 'grip hold', part: 'hold' }, ' is the part your hand holds.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'small hole', part: 'hole' }, ' is where the juice runs out of the tray.'],
        ['The ', { text: 'catch cup', part: 'cup' }, ' sits under the hole and holds the juice.'],
        ['You push the food down on the cone and turn it.'],
        ['The cone breaks the soft inside of the food.'],
        ['The juice runs through the small hole into the cup.'],
        ['You wash the parts in warm water after you use it.']
      ]
    }
  ],
  flow: [
    { partIds: ['cone'], caption: 'The squeeze cone goes into the food', sentenceRef: 2 },
    { partIds: ['tray'], caption: 'The juice tray catches the juice', sentenceRef: 3 },
    { partIds: ['hole'], caption: 'The small hole lets the juice run out', sentenceRef: 5 },
    { partIds: ['cup'], caption: 'The catch cup holds the juice', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'squeeze cone', partId: 'cone' },
    { text: 'juice tray', partId: 'tray' },
    { text: 'small hole', partId: 'hole' },
    { text: 'catch cup', partId: 'cup' }
  ]
};
