import type { ThingData } from '../types';

export const spaceDockingPort: ThingData = {
  id: 'space-docking-port',
  slug: 'space-docking-port',
  simpleName: 'The Joining Place',
  realName: 'Docking Port',
  category: 'space',
  color: '#708090',
  funFacts: [
    'This is a place where two space things join together.',
    'It lets people move from one space thing to another without going outside.',
    'It has to be very strong so the two things do not come apart.',
    'The two parts have to line up just right or they can not join.',
    'Some of them are round and some are not.',
    'Without it, people could not visit other space things.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'ring', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'latch', position: [0, 0, 0.15], finish: 'titanium' },
    { id: 'top', label: 'top', realName: 'seal', position: [0, 0, 0.12], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'tunnel', position: [0, 0, 0], finish: 'hull' },
    { id: 'plug', label: 'plug', realName: 'connector', position: [0, 0.15, 0], finish: 'warning' },
    { id: 'power', label: 'power', realName: 'actuator', position: [0, -0.15, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This is a place where two space things join together.'],
        ['The ', { text: 'body', part: 'body' }, ' is the round part that makes the joining strong.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the open space people walk through.'],
        ['The ', { text: 'end', part: 'end' }, ' holds the two parts close so they do not come apart.']
      ]
    },
    {
      sentences: [
        ['When two space things get close, the ', { text: 'end', part: 'end' }, ' on each one find each other.'],
        ['The ', { text: 'power', part: 'power' }, ' pulls them together until they join.'],
        ['The ', { text: 'top', part: 'top' }, ' around the ', { text: 'inside', part: 'inside' }, ' keeps the air in.'],
        ['Without the ', { text: 'top', part: 'top' }, ', the air would go out into space.'],
        ['The ', { text: 'plug', part: 'plug' }, ' sends power and information between the two things.'],
        ['People can then walk from one to the other through the ', { text: 'inside', part: 'inside' }, '.'],
        ['This is how space people visit other space things.']
      ]
    }
  ],
  flow: [
    { partIds: ['end'], caption: 'The latches find each other', sentenceRef: 4 },
    { partIds: ['power'], caption: 'The actuator pulls them together', sentenceRef: 5 },
    { partIds: ['top', 'inside'], caption: 'The seal keeps the air in', sentenceRef: 6 },
    { partIds: ['plug'], caption: 'The connector sends power and information', sentenceRef: 8 }
  ],
  keyExpressions: [
    { text: 'docking port', partId: 'body' },
    { text: 'latch', partId: 'end' },
    { text: 'seal', partId: 'top' },
    { text: 'tunnel', partId: 'inside' }
  ]
};