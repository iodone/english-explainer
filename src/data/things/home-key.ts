import type { ThingData } from '../types';

export const homeKey: ThingData = {
  id: 'home-key',
  slug: 'home-key',
  simpleName: 'The Door Opener',
  realName: 'Key',
  category: 'home',
  color: '#C0C0C0',
  funFacts: [
    'This is a small metal thing that opens a lock.',
    'Almost everyone has one in their pocket or bag.',
    'It has a special shape that only fits one lock.',
    'Some newer ones do not have a shape at all — they use power instead.',
    'If you lose it, you can not get into your house.',
    'Some people have many of them for different doors.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'blade', position: [0, 0, 0], finish: 'titanium' },
    { id: 'end', label: 'end', realName: 'teeth', position: [0, -0.15, 0], finish: 'titanium' },
    { id: 'top', label: 'top', realName: 'bow', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'groove', position: [0, 0, 0], finish: 'hull' },
    { id: 'hole', label: 'hole', realName: 'hole', position: [0, 0.18, 0], finish: 'hull' },
    { id: 'point', label: 'point', realName: 'tip', position: [0, -0.2, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This is a small metal thing that opens a lock.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long part that goes into the lock.'],
        ['The ', { text: 'top', part: 'top' }, ' is the round part you hold with your fingers.'],
        ['The ', { text: 'end', part: 'end' }, ' are the parts on the ', { text: 'body', part: 'body' }, ' that push the lock open.']
      ]
    },
    {
      sentences: [
        ['Each one has a different shape on the ', { text: 'end', part: 'end' }, '.'],
        ['The shape has to go with the lock or it will not work.'],
        ['The ', { text: 'inside', part: 'inside' }, ' on the ', { text: 'body', part: 'body' }, ' is part of what makes the shape special.'],
        ['You put the ', { text: 'point', part: 'point' }, ' into the lock and turn it.'],
        ['The ', { text: 'top', part: 'top' }, ' has a ', { text: 'hole', part: 'hole' }, ' so you can put it on a ring.'],
        ['When you turn it, the ', { text: 'end', part: 'end' }, ' push the parts inside the lock.'],
        ['This makes the lock open so you can get in.']
      ]
    }
  ],
  flow: [
    { partIds: ['point', 'body'], caption: 'You put the point into the lock', sentenceRef: 7 },
    { partIds: ['end'], caption: 'The teeth push the parts inside', sentenceRef: 9 },
    { partIds: ['top'], caption: 'You hold the top and turn', sentenceRef: 7 },
    { partIds: ['hole'], caption: 'The hole lets you keep it on a ring', sentenceRef: 8 }
  ],
  keyExpressions: [
    { text: 'key', partId: 'body' },
    { text: 'teeth', partId: 'end' },
    { text: 'bow', partId: 'top' },
    { text: 'groove', partId: 'inside' }
  ]
};