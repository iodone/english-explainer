import type { ThingData } from '../types';

export const spaceGravimeter: ThingData = {
  id: 'space-gravimeter',
  slug: 'space-gravimeter',
  simpleName: 'The Pull Measurer',
  realName: 'Gravimeter',
  category: 'space',
  color: '#4682B4',
  funFacts: [
    'This box tells how hard the world pulls on things here.',
    'The pull of the world makes the weight hang down.',
    'A spring gets longer where the pull is a bit more.',
    'The read coil sees that small move and turns it into a number.',
    'People use the number to find what is under the ground.',
    'It can find a heavy rock far under your feet.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'spring', label: 'Hold Spring', realName: 'Spring', position: [0, 0.1, 0], finish: 'titanium' },
    { id: 'weight', label: 'Small Weight', realName: 'Proof Mass', position: [0, -0.04, 0], finish: 'cold' },
    { id: 'coil', label: 'Read Coil', realName: 'Pickup Coil', position: [0, -0.04, 0], finish: 'titanium' },
    { id: 'leg', label: 'Ground Leg', realName: 'Foot', position: [0, -0.24, 0], finish: 'hull' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.24, -0.16, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This box tells how hard the world pulls on things here.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the case that holds the parts.'],
        ['The ', { text: 'hold spring', part: 'spring' }, ' is the part that hangs from the top.'],
        ['The ', { text: 'small weight', part: 'weight' }, ' is the heavy part that hangs on the spring.'],
        ['The ', { text: 'read coil', part: 'coil' }, ' is the part that reads how far the weight moved.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'ground leg', part: 'leg' }, ' holds the box on the ground.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the number to the computers.'],
        ['The pull of the world makes the weight hang down.'],
        ['Where the pull is a bit more, the spring gets a bit longer.'],
        ['The read coil sees that small move and turns it into a number.'],
        ['People use the number to find what is under the ground.']
      ]
    }
  ],
  flow: [
    { partIds: ['spring'], caption: 'The hold spring hangs from the top', sentenceRef: 2 },
    { partIds: ['weight'], caption: 'The small weight hangs on the spring', sentenceRef: 3 },
    { partIds: ['coil'], caption: 'The read coil reads how far the weight moved', sentenceRef: 4 },
    { partIds: ['leg'], caption: 'The ground leg holds the box on the ground', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'hold spring', partId: 'spring' },
    { text: 'small weight', partId: 'weight' },
    { text: 'read coil', partId: 'coil' },
    { text: 'ground leg', partId: 'leg' }
  ]
};
