import type { ThingData } from '../types';

export const homeSandwichMaker: ThingData = {
  id: 'home-sandwich-maker',
  slug: 'home-sandwich-maker',
  simpleName: 'The Hot Press',
  realName: 'Sandwich Maker',
  category: 'home',
  color: '#E0A050',
  funFacts: [
    'This tool presses bread and food between two hot plates.',
    'The hot plates warm the food and make the bread brown.',
    'You wait a short time and then open the plates.',
    'You can put cheese or other food in the middle.',
    'The plates get hot, so you must not touch them.',
    'You wash the plates after they get cool.'
  ],
  parts: [
    { id: 'top', label: 'Top Press', realName: 'Top Plate', position: [0, 0.1, 0], finish: 'hull' },
    { id: 'bottom', label: 'Bottom Press', realName: 'Bottom Plate', position: [0, -0.08, 0], finish: 'hull' },
    { id: 'handle', label: 'Side Handle', realName: 'Handle', position: [0.32, 0.04, 0], finish: 'titanium' },
    { id: 'light', label: 'Hot Light', realName: 'Heat Light', position: [0.2, 0.16, 0], finish: 'warning' },
    { id: 'cord', label: 'Power Cord', realName: 'Cord', position: [-0.3, -0.06, 0], finish: 'cold' },
    { id: 'edge', label: 'Food Edge', realName: 'Edge', position: [0, -0.02, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This tool presses bread and food between two hot plates.'],
        ['The ', { text: 'top press', part: 'top' }, ' is the hot plate that comes down.'],
        ['The ', { text: 'bottom press', part: 'bottom' }, ' is the hot plate that stays still.'],
        ['The ', { text: 'side handle', part: 'handle' }, ' is the part you hold when you close it.'],
        ['The ', { text: 'hot light', part: 'light' }, ' comes on when the plates are ready.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'power cord', part: 'cord' }, ' brings power from the wall.'],
        ['The ', { text: 'food edge', part: 'edge' }, ' keeps the food in the plates.'],
        ['You put the food between the bread and close the top.'],
        ['The hot plates warm the food and make the bread brown.'],
        ['You wait a short time and then open the plates.'],
        ['The food is warm, and the bread is a warm brown.']
      ]
    }
  ],
  flow: [
    { partIds: ['top'], caption: 'The top press is the hot plate that comes down', sentenceRef: 1 },
    { partIds: ['bottom'], caption: 'The bottom press stays still', sentenceRef: 2 },
    { partIds: ['handle'], caption: 'The side handle is the part you hold', sentenceRef: 3 },
    { partIds: ['light'], caption: 'The hot light comes on when the plates are ready', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'top press', partId: 'top' },
    { text: 'bottom press', partId: 'bottom' },
    { text: 'side handle', partId: 'handle' },
    { text: 'hot light', partId: 'light' }
  ]
};
