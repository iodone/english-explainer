import type { ThingData } from '../types';

export const homeLadle: ThingData = {
  id: 'home-ladle',
  slug: 'home-ladle',
  simpleName: 'The Soup Spoon',
  realName: 'Kitchen Ladle',
  category: 'home',
  color: '#C0C0C0',
  funFacts: [
    'This thing is a big food tool for getting hot food or other thin food out of a pot.',
    'It has a long handle so you do not have to put your hand near the hot food.',
    'Some of these have a small hole in the bowl so water can go out.',
    'People use it to put food from a big pot into a small bowl.',
    'It is one of the biggest food tools you can find in a kitchen.',
    'The bowl part is round so it can hold a lot of food at one time.'
  ],
  parts: [
    { id: 'body', label: 'Bowl Part', realName: 'Ladle Bowl', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Long Handle', realName: 'Handle Shaft', position: [0, 0, -0.3], finish: 'cold' },
    { id: 'top', label: 'Edge Part', realName: 'Rim Edge', position: [0, 0.05, 0], finish: 'titanium' },
    { id: 'inside', label: 'Deep Part', realName: 'Bowl Interior', position: [0, -0.02, 0], finish: 'warning' },
    { id: 'hook', label: 'Hang Part', realName: 'Hang Hole', position: [0, 0, -0.35], finish: 'hull' },
    { id: 'pour', label: 'Pour Part', realName: 'Pour Spout', position: [0.05, 0.04, 0.05], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This is a big food tool for getting hot food out of a pot.'],
        ['The ', { text: 'body', part: 'body' }, ' is the round bowl part that holds the food.'],
        ['The ', { text: 'end', part: 'end' }, ' is the long part you hold to reach into the pot.'],
        ['The ', { text: 'top', part: 'top' }, ' is the edge of the bowl that stops food from going over.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the deep part that holds a lot of food.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hook', part: 'hook' }, ' at the end lets you hang it up when done.'],
        ['The ', { text: 'pour', part: 'pour' }, ' is a small part on one side that helps pour food out.'],
        ['You put the ', { text: 'body', part: 'body' }, ' into the pot and get a lot of food.'],
        ['Then you move it over to a bowl and let the food fall out.'],
        ['The ', { text: 'pour', part: 'pour' }, ' helps the food go where you want it.'],
        ['The ', { text: 'end', part: 'end' }, ' is long so you do not have to touch the hot food.']
      ]
    }
  ],
  flow: [
    { partIds: ['end', 'body'], caption: 'You hold the long handle and put it in the pot', sentenceRef: 7 },
    { partIds: ['inside', 'top'], caption: 'The deep bowl holds a lot of food', sentenceRef: 4 },
    { partIds: ['pour'], caption: 'The pour part helps food go into the bowl', sentenceRef: 9 },
    { partIds: ['hook'], caption: 'Hang it up when done', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'ladle', partId: 'body' },
    { text: 'ladle bowl', partId: 'body' },
    { text: 'pour spout', partId: 'pour' },
    { text: 'handle shaft', partId: 'end' }
  ]
};
