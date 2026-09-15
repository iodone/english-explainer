import type { ThingData } from '../types';

export const homeYogurtMaker: ThingData = {
  id: 'home-yogurt-maker',
  slug: 'home-yogurt-maker',
  simpleName: 'The Milk Keeper',
  realName: 'Yogurt Maker',
  category: 'home',
  color: '#F5DEB3',
  funFacts: [
    'This box keeps milk warm so good tiny things can turn it into a thick food.',
    'Good tiny things live in the milk and grow in the warm box.',
    'They turn the milk into a thick food in about 8 hours.',
    'You put the milk in the bowl and close the lid.',
    'You can add sweet food or soft food on top.',
    'You wash the bowl and the lid after you use it.'
  ],
  parts: [
    { id: 'bowl', label: 'Food Bowl', realName: 'Bowl', position: [0, 0.02, 0], finish: 'hull' },
    { id: 'lid', label: 'Top Lid', realName: 'Lid', position: [0, 0.18, 0], finish: 'hull' },
    { id: 'heater', label: 'Warm Bar', realName: 'Heater', position: [0, -0.12, 0], finish: 'cold' },
    { id: 'light', label: 'Time Light', realName: 'Timer Light', position: [0.22, 0.06, 0], finish: 'warning' },
    { id: 'cord', label: 'Power Cord', realName: 'Cord', position: [-0.28, -0.08, 0], finish: 'cold' },
    { id: 'stand', label: 'Base Stand', realName: 'Base', position: [0, -0.22, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This box keeps milk warm so good tiny things can turn it into a thick food.'],
        ['The ', { text: 'food bowl', part: 'bowl' }, ' is the cup that holds the milk.'],
        ['The ', { text: 'top lid', part: 'lid' }, ' goes over the bowl and keeps the heat in.'],
        ['The ', { text: 'warm bar', part: 'heater' }, ' is the part that makes the box warm.'],
        ['The ', { text: 'time light', part: 'light' }, ' comes on when the food is ready.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'power cord', part: 'cord' }, ' brings power from the wall.'],
        ['The ', { text: 'base stand', part: 'stand' }, ' holds the bowl up.'],
        ['Good tiny things live in the milk and grow in the warm box.'],
        ['They turn the milk into a thick food in about 8 hours.'],
        ['You put the milk in the bowl and close the lid.'],
        ['The box keeps the milk warm, and you do not touch it.']
      ]
    }
  ],
  flow: [
    { partIds: ['bowl'], caption: 'The food bowl holds the milk', sentenceRef: 1 },
    { partIds: ['lid'], caption: 'The top lid goes over the bowl and keeps the heat in', sentenceRef: 2 },
    { partIds: ['heater'], caption: 'The warm bar makes the box warm', sentenceRef: 3 },
    { partIds: ['light'], caption: 'The time light comes on when the food is ready', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'food bowl', partId: 'bowl' },
    { text: 'top lid', partId: 'lid' },
    { text: 'warm bar', partId: 'heater' },
    { text: 'time light', partId: 'light' }
  ]
};
