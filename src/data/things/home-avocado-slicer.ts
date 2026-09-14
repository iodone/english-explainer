import type { ThingData } from '../types';

export const homeAvocadoSlicer: ThingData = {
  id: 'home-avocado-slicer',
  slug: 'home-avocado-slicer',
  simpleName: 'The Green Food Tool',
  realName: 'Avocado Slicer',
  category: 'home',
  color: '#228B22',
  funFacts: [
    'This tool cuts a green food and takes out the hard seed.',
    'The ring cuts the skin, and the side blade cuts the soft food into strips.',
    'The scoop takes the soft food off the skin in one move.',
    'The tool end pushes out the hard seed.',
    'You do not need power to use it.',
    'You wash it in warm water after you use it.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Body Grip', position: [0, 0, 0], finish: 'hull' },
    { id: 'ring', label: 'Cut Ring', realName: 'Slicing Ring', position: [0, -0.14, 0], finish: 'titanium' },
    { id: 'blade', label: 'Side Blade', realName: 'Wire Blade', position: [0, -0.02, 0], finish: 'titanium' },
    { id: 'scoop', label: 'Round Scoop', realName: 'Scoop', position: [0, -0.24, 0], finish: 'cold' },
    { id: 'hold', label: 'Grip Hold', realName: 'Handle', position: [0, 0.16, 0], finish: 'hull' },
    { id: 'end', label: 'Tool End', realName: 'Pit Push', position: [0, 0.28, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This tool cuts a green food and takes out the hard seed.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the part that holds the ring.'],
        ['The ', { text: 'cut ring', part: 'ring' }, ' is the round blade that cuts the green food.'],
        ['The ', { text: 'side blade', part: 'blade' }, ' cuts the food into long strips.'],
        ['The ', { text: 'round scoop', part: 'scoop' }, ' is the cup that takes the soft food out.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'grip hold', part: 'hold' }, ' is the part your hand holds.'],
        ['The ', { text: 'tool end', part: 'end' }, ' is the part you use to take out the seed.'],
        ['You push the ring down over the green food.'],
        ['The ring cuts the skin, and the side blade cuts it into strips.'],
        ['You turn the scoop and it takes the soft food off the skin.'],
        ['The tool end pushes out the hard seed from the soft food.']
      ]
    }
  ],
  flow: [
    { partIds: ['ring'], caption: 'The cut ring cuts the green food', sentenceRef: 2 },
    { partIds: ['blade'], caption: 'The side blade cuts the food into long strips', sentenceRef: 3 },
    { partIds: ['scoop'], caption: 'The round scoop takes the soft food out', sentenceRef: 4 },
    { partIds: ['end'], caption: 'The tool end takes out the seed', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'cut ring', partId: 'ring' },
    { text: 'side blade', partId: 'blade' },
    { text: 'round scoop', partId: 'scoop' },
    { text: 'grip hold', partId: 'hold' }
  ]
};
