import type { ThingData } from '../types';

export const homePressureCooker: ThingData = {
  id: 'home-pressure-cooker',
  slug: 'home-pressure-cooker',
  simpleName: 'The Fast Pot',
  realName: 'Pressure Cooker',
  category: 'home',
  color: '#B8453C',
  funFacts: [
    'The steam inside this pot can push as hard as a big truck.',
    'Food cooks here in a third of the usual time.',
    'The heavy top moves and lets steam out if the push gets too high.',
    'Never open the lid while the heavy top still moves.',
    'Let the pot sit until all the steam is gone.',
    'People have cooked this way for a very long time.'
  ],
  parts: [
    { id: 'pot', label: 'Big Pot', realName: 'Cooking Pot', position: [0, -0.1, 0], finish: 'hull' },
    { id: 'lid', label: 'Lock Lid', realName: 'Lock Lid', position: [0, 0.3, 0], finish: 'titanium' },
    { id: 'handle', label: 'Top Handle', realName: 'Top Handle', position: [0, 0.45, 0], finish: 'cold' },
    { id: 'weight', label: 'Heavy Top', realName: 'Weight', position: [0, 0.35, 0.15], finish: 'warning' },
    { id: 'seal', label: 'Air Seal', realName: 'Seal', position: [0, 0.15, 0.1], finish: 'cold' },
    { id: 'base', label: 'Hot Base', realName: 'Hot Plate', position: [0, -0.35, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This pot cooks food very fast with hot steam under a locked lid.'],
        ['The ', { text: 'big pot', part: 'pot' }, ' holds the food and the steam under high push.'],
        ['The ', { text: 'lock lid', part: 'lid' }, ' stays shut so the steam can not get out.'],
        ['The ', { text: 'top handle', part: 'handle' }, ' lets you carry the pot and turn the lid.'],
        ['The ', { text: 'hot plate', part: 'base' }, ' makes the heat that turns water into steam.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'air seal', part: 'seal' }, ' keeps the steam inside the pot.'],
        ['The ', { text: 'heavy top', part: 'weight' }, ' lets a little steam out when the push is too high.'],
        ['The steam is very hot, so the food cooks in a few minutes.'],
        ['You must let the pot cool before you open the lid.'],
        ['If you open it too soon, hot steam can burn you.'],
        ['This pot cooks food in half the time of a usual pot.']
      ]
    }
  ],
  flow: [
    { partIds: ['pot'], caption: 'The big pot holds the food and the steam under high push', sentenceRef: 1 },
    { partIds: ['lid'], caption: 'The lock lid stays shut so the steam can not get out', sentenceRef: 2 },
    { partIds: ['base'], caption: 'The hot plate makes the heat that turns water into steam', sentenceRef: 4 },
    { partIds: ['weight'], caption: 'The heavy top lets a little steam out when the push is too high', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'big pot', partId: 'pot' },
    { text: 'lock lid', partId: 'lid' },
    { text: 'heavy top', partId: 'weight' },
    { text: 'air seal', partId: 'seal' }
  ]
};
