import type { ThingData } from '../types';

export const homeSlowCooker: ThingData = {
  id: 'home-slow-cooker',
  slug: 'home-slow-cooker',
  simpleName: 'The Slow Pot',
  realName: 'Slow Cooker',
  category: 'home',
  color: '#C4643C',
  funFacts: [
    'This pot can cook food for eight hours or more.',
    'The lid keeps the water in the food, so the food stays soft.',
    'You can start it in the morning and eat at night.',
    'The outside of the pot stays warm, so you can touch it.',
    'Some people use it to make food for a party.',
    'Never set it near the edge of a table, or it may fall.'
  ],
  parts: [
    { id: 'pot', label: 'Big Pot', realName: 'Cooking Pot', position: [0, -0.1, 0], finish: 'hull' },
    { id: 'lid', label: 'Lid', realName: 'Lid', position: [0, 0.3, 0], finish: 'titanium' },
    { id: 'handle', label: 'Side Handle', realName: 'Handle', position: [0.5, 0, 0], finish: 'cold' },
    { id: 'base', label: 'Hot Base', realName: 'Hot Plate', position: [0, -0.35, 0], finish: 'warning' },
    { id: 'dial', label: 'Heat Dial', realName: 'Dial', position: [0.4, 0.2, 0.25], finish: 'titanium' },
    { id: 'cord', label: 'Power Line', realName: 'Power Cord', position: [-0.5, -0.2, -0.1], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This pot cooks food all day on very low heat.'],
        ['The ', { text: 'big pot', part: 'pot' }, ' holds the food and keeps the heat in.'],
        ['The ', { text: 'lid', part: 'lid' }, ' sits on top and stops the heat from going out.'],
        ['The ', { text: 'hot plate', part: 'base' }, ' makes the heat, and that heat is low.'],
        ['The ', { text: 'side handle', part: 'handle' }, ' stays cool so you can pick the pot up.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'heat dial', part: 'dial' }, ' lets you pick a low or a high heat.'],
        ['The ', { text: 'power line', part: 'cord' }, ' brings power in from the wall.'],
        ['You put in the food and water in the morning and close the lid.'],
        ['All day the pot cooks the food very slow, and nothing burns.'],
        ['When you come home, the food is hot and ready to eat.'],
        ['The pot stays at a low heat, so the food does not burn on the bottom.']
      ]
    }
  ],
  flow: [
    { partIds: ['pot'], caption: 'The big pot holds the food and keeps the heat in', sentenceRef: 1 },
    { partIds: ['lid'], caption: 'The lid sits on top and stops the heat from going out', sentenceRef: 2 },
    { partIds: ['base'], caption: 'The hot plate makes the heat, and that heat is low', sentenceRef: 3 },
    { partIds: ['dial'], caption: 'The heat dial lets you pick a low or a high heat', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'big pot', partId: 'pot' },
    { text: 'hot plate', partId: 'base' },
    { text: 'side handle', partId: 'handle' },
    { text: 'heat dial', partId: 'dial' }
  ]
};
