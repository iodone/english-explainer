import type { ThingData } from '../types';

export const homeWhisk: ThingData = {
  id: 'home-whisk',
  slug: 'home-whisk',
  simpleName: 'The Fast Mix Stick',
  realName: 'Whisk',
  category: 'home',
  color: '#C0C0C0',
  funFacts: [
    'This tool beats food with wires that move fast.',
    'You move your hand in a small round path to beat.',
    'Air goes into the food and makes it soft.',
    'A whisk can beat eggs in a few seconds.',
    'The wires are thin, so you must wash them with care.',
    'It can hang on a hook by the ring at the top.'
  ],
  parts: [
    { id: 'body', label: 'Hold Body', realName: 'Handle', position: [0, 0.18, 0], finish: 'hull' },
    { id: 'end', label: 'Mix End', realName: 'Wire Loop', position: [0, -0.2, 0], finish: 'cold' },
    { id: 'top', label: 'Top Ring', realName: 'Handle Ring', position: [0, 0.36, 0], finish: 'titanium' },
    { id: 'inside', label: 'Center Space', realName: 'Center Gap', position: [0, -0.18, 0], finish: 'shell' },
    { id: 'plug', label: 'Wire Holder', realName: 'Ferrule', position: [0, 0.02, 0], finish: 'titanium' },
    { id: 'wire', label: 'Loop Wire', realName: 'Whisk Wire', position: [0, -0.28, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a tool that beats soft food in a bowl.'],
        ['The ', { text: 'body', part: 'body' }, ' is the part you hold in your hand.'],
        ['The ', { text: 'end', part: 'end' }, ' has many thin wires that go round and round.'],
        ['The ', { text: 'top', part: 'top' }, ' has a ring so you can hang the tool on a hook.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the open space in the middle of the wires.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' holds the wires to the body.'],
        ['The ', { text: 'wire', part: 'wire' }, ' moves fast and pulls the food through it.'],
        ['You move your hand in a small round path to beat.'],
        ['Air comes into the food as the wires move.'],
        ['This makes the food soft and full of air.'],
        ['You can use it to beat eggs or make bread soft.']
      ]
    }
  ],
  flow: [
    { partIds: ['body'], caption: 'You hold the body in your hand', sentenceRef: 1 },
    { partIds: ['wire'], caption: 'The wire moves and beats the food', sentenceRef: 6 },
    { partIds: ['plug'], caption: 'The holder holds the wire to the body', sentenceRef: 5 },
    { partIds: ['top'], caption: 'The ring lets you hang it up', sentenceRef: 3 }
  ],
  keyExpressions: [
    { text: 'balloon whisk', partId: 'wire' },
    { text: 'wire loop', partId: 'wire' },
    { text: 'ferrule', partId: 'plug' },
    { text: 'handle ring', partId: 'top' }
  ]
};
