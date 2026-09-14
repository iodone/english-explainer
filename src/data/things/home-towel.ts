import type { ThingData } from '../types';

export const homeTowel: ThingData = {
  id: 'home-towel',
  slug: 'home-towel',
  simpleName: 'The Water Catcher',
  realName: 'Towel',
  category: 'home',
  color: '#F5F5DC',
  funFacts: [
    'This is a soft piece of cloth that takes water off your body.',
    'You use it after you wash yourself.',
    'It can hold a lot of water for its size.',
    'You should wash it often so it stays clean.',
    'Some are very big and some are very small.',
    'The small ones are for your hands and the big ones are for your body.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'fabric', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'edge', position: [0, -0.2, 0], finish: 'hull' },
    { id: 'top', label: 'top', realName: 'loop', position: [0, 0.2, 0], finish: 'titanium' },
    { id: 'inside', label: 'inside', realName: 'fiber', position: [0, 0, 0], finish: 'cold' },
    { id: 'stripe', label: 'stripe', realName: 'stripe', position: [0, 0, 0.02], finish: 'cold' },
    { id: 'wrap', label: 'wrap', realName: 'fold', position: [0, -0.1, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a soft piece of cloth that takes water off your body.'],
        ['You use it after you wash yourself.'],
        ['The ', { text: 'body', part: 'body' }, ' is the big flat part that touches your skin.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is what makes it so good at holding water.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'inside', part: 'inside' }, ' has many tiny parts that grab the water.'],
        ['The ', { text: 'end', part: 'end' }, ' around the ', { text: 'body', part: 'body' }, ' keeps it from coming apart.'],
        ['The ', { text: 'top', part: 'top' }, ' at one end lets you hang it up.'],
        ['When you hang it up, the water goes away and it gets dry.'],
        ['Some have a ', { text: 'stripe', part: 'stripe' }, ' of color to make them look nice.'],
        ['You can roll the ', { text: 'wrap', part: 'wrap' }, ' up small to put it away.'],
        ['The big ones are for your body and the small ones are for your hands.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'inside'], caption: 'The fabric touches your skin and grabs water', sentenceRef: 2 },
    { partIds: ['end'], caption: 'The edge keeps it from coming apart', sentenceRef: 5 },
    { partIds: ['top'], caption: 'You hang it up to dry', sentenceRef: 6 },
    { partIds: ['wrap', 'stripe'], caption: 'You roll it up to put it away', sentenceRef: 9 }
  ],
  keyExpressions: [
    { text: 'towel', partId: 'body' },
    { text: 'fabric', partId: 'body' },
    { text: 'fiber', partId: 'inside' },
    { text: 'loop', partId: 'top' }
  ]
};