import type { ThingData } from '../types';

export const spaceRadiator: ThingData = {
  id: 'space-radiator',
  slug: 'space-radiator',
  simpleName: 'The Heat Thrower',
  realName: 'Space Radiator',
  category: 'space',
  color: '#C0C0C0',
  funFacts: [
    'A ship makes a lot of heat, and this sheet throws it all away.',
    'In space there is no air, so heat cannot go away as it does at home.',
    'The sheet throws heat out as light, so it must face the dark.',
    'One side of the sheet is hot and the other side is very cold.',
    'Big sheets are used on space stations to keep people cool.',
    'If the sheet cannot throw heat away, the ship will get too hot for people.'
  ],
  parts: [
    { id: 'panel', label: 'Main Sheet', realName: 'Radiator Panel', position: [0, 0, 0], finish: 'hull' },
    { id: 'pipe', label: 'Flow Pipes', realName: 'Coolant Tubes', position: [0, 0, 0.04], finish: 'titanium' },
    { id: 'face', label: 'Dark Face', realName: 'Outer Surface', position: [0, 0, -0.03], finish: 'cold' },
    { id: 'inlet', label: 'Hot Side', realName: 'Heat Inlet', position: [0.3, 0.2, 0.03], finish: 'warning' },
    { id: 'arm', label: 'Hold Arm', realName: 'Mounting Arm', position: [-0.35, -0.2, 0], finish: 'titanium' },
    { id: 'joint', label: 'Turn Joint', realName: 'Hinge Joint', position: [0, 0.28, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This big flat sheet throws heat away from a ship into cold space.'],
        ['The ', { text: 'main sheet', part: 'panel' }, ' is the wide flat part that faces space.'],
        ['The ', { text: 'flow pipes', part: 'pipe' }, ' carry hot water from the ship into the sheet.'],
        ['The ', { text: 'dark face', part: 'face' }, ' is the side that turns toward the dark and throws heat away.'],
        ['The ', { text: 'hot side', part: 'inlet' }, ' is where the hot water comes into the pipes.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hold arm', part: 'arm' }, ' keeps the sheet out away from the body of the ship.'],
        ['The ', { text: 'turn joint', part: 'joint' }, ' lets the sheet turn so it can face away from the sun.'],
        ['In space there is no air, so heat cannot go away by itself.'],
        ['The heat must go out as light from the dark face of the sheet.'],
        ['A bigger sheet can throw away more heat in the same time.'],
        ['These sheets keep people and machines cool on a space station.']
      ]
    }
  ],
  flow: [
    { partIds: ['pipe'], caption: 'The flow pipes carry hot water into the sheet', sentenceRef: 2 },
    { partIds: ['face'], caption: 'The dark face throws the heat out as light', sentenceRef: 8 },
    { partIds: ['joint'], caption: 'The turn joint lets the sheet face away from the sun', sentenceRef: 6 },
    { partIds: ['arm'], caption: 'The hold arm keeps the sheet away from the ship', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'radiator panel', partId: 'panel' },
    { text: 'flow pipes', partId: 'pipe' },
    { text: 'dark face', partId: 'face' },
    { text: 'turn joint', partId: 'joint' }
  ]
};
