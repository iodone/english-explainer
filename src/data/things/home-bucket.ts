import type { ThingData } from '../types';

export const homeBucket: ThingData = {
  id: 'home-bucket',
  slug: 'home-bucket',
  simpleName: 'The Water Holder',
  realName: 'Bucket',
  category: 'home',
  color: '#F5DEB3',
  funFacts: [
    'This is a round container for carrying things.',
    'You can carry water or sand or many other things in it.',
    'It has a handle on top so you can hold it.',
    'Some are made of metal and some are made of soft stuff.',
    'Kids use them at the water to build things with sand.',
    'Almost every house has at least one.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'pail', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'bottom', position: [0, -0.15, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'rim', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'interior', position: [0, 0, 0], finish: 'hull' },
    { id: 'handle', label: 'handle', realName: 'handle', position: [0, 0.2, 0], finish: 'titanium' },
    { id: 'pour', label: 'pour', realName: 'spout', position: [0.15, 0.12, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a round container for carrying things.'],
        ['You can carry water or sand or many other things in it.'],
        ['The ', { text: 'body', part: 'body' }, ' is the round part that holds everything.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is where the things go.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'end', part: 'end' }, ' at the bottom keeps things from falling out.'],
        ['The ', { text: 'top', part: 'top' }, ' around the top makes it strong.'],
        ['The ', { text: 'handle', part: 'handle' }, ' on top lets you carry it.'],
        ['You can hold the ', { text: 'handle', part: 'handle' }, ' and walk with it.'],
        ['The ', { text: 'pour', part: 'pour' }, ' on one side helps you pour things out.'],
        ['Kids use them at the water to build things with sand.'],
        ['Almost every house has at least one of these.']
      ]
    }
  ],
  flow: [
    { partIds: ['inside', 'body'], caption: 'You put things inside the round container', sentenceRef: 2 },
    { partIds: ['end'], caption: 'The bottom keeps things from falling out', sentenceRef: 4 },
    { partIds: ['handle'], caption: 'You hold the handle to carry it', sentenceRef: 6 },
    { partIds: ['pour'], caption: 'The spout helps you pour things out', sentenceRef: 8 }
  ],
  keyExpressions: [
    { text: 'bucket', partId: 'body' },
    { text: 'pail', partId: 'body' },
    { text: 'handle', partId: 'handle' },
    { text: 'spout', partId: 'pour' }
  ]
};