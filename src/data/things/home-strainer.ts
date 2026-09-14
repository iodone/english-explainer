import type { ThingData } from '../types';

export const homeStrainer: ThingData = {
  id: 'home-strainer',
  slug: 'home-strainer',
  simpleName: 'The Water Sifter',
  realName: 'Kitchen Strainer',
  category: 'home',
  color: '#C0C0C0',
  funFacts: [
    'This thing lets water go through but keeps food in.',
    'People use it to take water off of cooked food.',
    'It has many small holes that are just right for water to go through.',
    'Some of these have very small holes for very thin water.',
    'You can also use it to wash small pieces of food.',
    'It is one of the most used things in the kitchen.'
  ],
  parts: [
    { id: 'body', label: 'Round Bowl', realName: 'Strainer Bowl', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Long Handle', realName: 'Handle Shaft', position: [0, 0, -0.25], finish: 'cold' },
    { id: 'top', label: 'Edge Ring', realName: 'Rim Ring', position: [0, 0.08, 0], finish: 'titanium' },
    { id: 'inside', label: 'Hole Part', realName: 'Mesh Screen', position: [0, -0.02, 0], finish: 'warning' },
    { id: 'hook', label: 'Hang Part', realName: 'Hang Hook', position: [0, 0, -0.3], finish: 'hull' },
    { id: 'rest', label: 'Stand Part', realName: 'Rest Feet', position: [0, -0.1, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that lets water go through but keeps food in.'],
        ['The ', { text: 'body', part: 'body' }, ' is the round bowl with many small holes.'],
        ['The ', { text: 'end', part: 'end' }, ' is the long part you hold to move it.'],
        ['The ', { text: 'top', part: 'top' }, ' is the ring around the top of the bowl.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the part with all the small holes.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hook', part: 'hook' }, ' lets you hang it up when you are done.'],
        ['The ', { text: 'rest', part: 'rest' }, ' are small parts at the bottom that let it stand up.'],
        ['You put food in the ', { text: 'body', part: 'body' }, ' and water goes out through the ', { text: 'inside', part: 'inside' }, '.'],
        ['The holes are just right so water goes through but food stays in.'],
        ['The ', { text: 'end', part: 'end' }, ' lets you hold it over a pot or bowl.'],
        ['When done, you can hang it by the ', { text: 'hook', part: 'hook' }, ' to let it dry.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'inside'], caption: 'The bowl with holes holds the food', sentenceRef: 1 },
    { partIds: ['end'], caption: 'You hold the long handle', sentenceRef: 2 },
    { partIds: ['top', 'rest'], caption: 'The ring and feet let it stand well', sentenceRef: 6 },
    { partIds: ['hook'], caption: 'Hang it up to dry', sentenceRef: 10 }
  ],
  keyExpressions: [
    { text: 'strainer', partId: 'body' },
    { text: 'mesh screen', partId: 'inside' },
    { text: 'rim ring', partId: 'top' },
    { text: 'handle shaft', partId: 'end' }
  ]
};
