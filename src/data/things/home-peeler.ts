import type { ThingData } from '../types';

export const homePeeler: ThingData = {
  id: 'home-peeler',
  slug: 'home-peeler',
  simpleName: 'The Skin Taker',
  realName: 'Vegetable Peeler',
  category: 'home',
  color: '#808080',
  funFacts: [
    'This thing takes the thin outside part off of many kinds of food.',
    'It has a very sharp edge that cuts just the right part off.',
    'People use it every day to get food ready for cooking.',
    'Some of these can also make long thin pieces of food for cooking.',
    'It was made a long time ago and is still used in every home.',
    'You hold it low and pull it over the food to take skin off.'
  ],
  parts: [
    { id: 'body', label: 'Handle', realName: 'Peeler Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Top End', realName: 'Handle Cap', position: [0, 0, -0.2], finish: 'cold' },
    { id: 'blade', label: 'Sharp Part', realName: 'Cutting Blade', position: [0, 0.04, 0.15], finish: 'warning' },
    { id: 'slot', label: 'Food Hole', realName: 'Eye Remover', position: [0, 0.04, 0.08], finish: 'titanium' },
    { id: 'side', label: 'Side Wall', realName: 'Blade Guard', position: [0.04, 0.04, 0.12], finish: 'hull' },
    { id: 'hang', label: 'Hang Hole', realName: 'Storage Hole', position: [0, 0, -0.18], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that takes the thin outside part off of food.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long part you hold in your hand.'],
        ['The ', { text: 'end', part: 'end' }, ' is a small cap at the back of the handle.'],
        ['The ', { text: 'blade', part: 'blade' }, ' is the sharp piece that cuts the skin off.'],
        ['The ', { text: 'hole', part: 'slot' }, ' is a small hole that takes out bad parts of the food.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'side', part: 'side' }, ' is a wall that stops the blade from going too deep.'],
        ['The ', { text: 'hang', part: 'hang' }, ' lets you put it on a hook when you are done.'],
        ['You hold the ', { text: 'body', part: 'body' }, ' and pull the ', { text: 'blade', part: 'blade' }, ' over the food.'],
        ['The sharp edge takes off just the thin outside part.'],
        ['The ', { text: 'hole', part: 'slot' }, ' helps when there are small dark parts in the food.'],
        ['When done, you can hang it up by the ', { text: 'hang', part: 'hang' }, ' to keep it clean.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'end'], caption: 'You hold the handle in your hand', sentenceRef: 1 },
    { partIds: ['blade', 'side'], caption: 'The sharp part cuts with a wall to stop deep cuts', sentenceRef: 3 },
    { partIds: ['slot'], caption: 'The small hole takes out bad parts', sentenceRef: 4 },
    { partIds: ['hang'], caption: 'Hang it up when done', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'peeler', partId: 'body' },
    { text: 'cutting blade', partId: 'blade' },
    { text: 'eye remover', partId: 'slot' },
    { text: 'blade guard', partId: 'side' }
  ]
};
