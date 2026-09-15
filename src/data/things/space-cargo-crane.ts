import type { ThingData } from '../types';

export const spaceCargoCrane: ThingData = {
  id: 'space-cargo-crane',
  slug: 'space-cargo-crane',
  simpleName: 'The Cargo Arm',
  realName: 'Cargo Crane',
  category: 'space',
  color: '#78909C',
  funFacts: [
    'This long arm moves heavy loads from one place to another.',
    'In space there is no ground to hold the load up.',
    'The arm must hold the load and stop it from floating away.',
    'A person on the ground can move the arm with a stick and a screen.',
    'It can move a load that is too heavy for a person to lift.',
    'People use it to move boxes onto and off a ship.'
  ],
  parts: [
    { id: 'arm', label: 'Main Arm', realName: 'Boom', position: [0, 0, 0], finish: 'hull' },
    { id: 'joint', label: 'Turn Joint', realName: 'Rotary Joint', position: [0.22, 0, 0], finish: 'titanium' },
    { id: 'cable', label: 'Load Cable', realName: 'Cable', position: [0.4, -0.1, 0], finish: 'cold' },
    { id: 'motor', label: 'Turn Motor', realName: 'Motor', position: [0.22, -0.12, 0], finish: 'warning' },
    { id: 'pod', label: 'Cargo Pod', realName: 'Pod', position: [0.4, -0.34, 0], finish: 'hull' },
    { id: 'light', label: 'Work Light', realName: 'Work Light', position: [0.06, 0.12, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This long arm moves heavy loads from one place to another.'],
        ['The ', { text: 'main arm', part: 'arm' }, ' is the long part that reaches out.'],
        ['The ', { text: 'turn joint', part: 'joint' }, ' is the part that lets the arm turn.'],
        ['The ', { text: 'load cable', part: 'cable' }, ' is the line that holds the load.'],
        ['The ', { text: 'turn motor', part: 'motor' }, ' is the part that moves the arm.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'cargo pod', part: 'pod' }, ' is the box that carries the load.'],
        ['The ', { text: 'work light', part: 'light' }, ' shows the arm when the sun is down.'],
        ['In space there is no ground to hold the load up.'],
        ['The arm must hold the load and stop it from floating away.'],
        ['The joint turns, and the cable lowers the pod.'],
        ['People use the arm to move boxes onto and off a ship.']
      ]
    }
  ],
  flow: [
    { partIds: ['arm'], caption: 'The main arm is the long part that reaches out', sentenceRef: 1 },
    { partIds: ['joint'], caption: 'The turn joint lets the arm turn', sentenceRef: 2 },
    { partIds: ['cable'], caption: 'The load cable holds the load', sentenceRef: 3 },
    { partIds: ['motor'], caption: 'The turn motor moves the arm', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'main arm', partId: 'arm' },
    { text: 'turn joint', partId: 'joint' },
    { text: 'load cable', partId: 'cable' },
    { text: 'turn motor', partId: 'motor' }
  ]
};
