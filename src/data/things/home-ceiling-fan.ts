import type { ThingData } from '../types';

export const homeCeilingFan: ThingData = {
  id: 'home-ceiling-fan',
  slug: 'home-ceiling-fan',
  simpleName: 'The Top Wind Maker',
  realName: 'Ceiling Fan',
  category: 'home',
  color: '#87CEEB',
  funFacts: [
    'This fan hangs from the top of a room so it is out of the way.',
    'The arms push air down and make people feel cool.',
    'It can make a room feel cool without making the air cold.',
    'Some fans have a chain, and some have a wall switch.',
    'You should turn off the power before you clean it.',
    'A big fan can move a lot of air with very little power.'
  ],
  parts: [
    { id: 'body', label: 'Fan Body', realName: 'Motor Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Arm End', realName: 'Fan Blade', position: [0.24, -0.04, 0], finish: 'cold' },
    { id: 'top', label: 'Top Mount', realName: 'Mount Bracket', position: [0, 0.3, 0], finish: 'titanium' },
    { id: 'inside', label: 'Turning Part', realName: 'Rotor', position: [0, 0.05, 0], finish: 'warning' },
    { id: 'plug', label: 'Pull Chain', realName: 'Speed Chain', position: [0, -0.12, 0.1], finish: 'titanium' },
    { id: 'power', label: 'Power Line', realName: 'Motor Coil', position: [0.08, 0.12, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This is a wind maker that hangs from the top of a room.'],
        ['The ', { text: 'body', part: 'body' }, ' holds the parts that turn and makes a low sound.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part that holds the fan to the room.'],
        ['The ', { text: 'inside', part: 'inside' }, ' turns fast and moves the arms of the fan.'],
        ['The ', { text: 'end', part: 'end' }, ' of each arm is wide and pushes air down.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' is a small chain you pull to start the fan.'],
        ['The ', { text: 'power', part: 'power' }, ' line brings power from the wall to the fan.'],
        ['When the arms turn, they push air around the room.'],
        ['On hot days, this makes a room feel cool.'],
        ['Some fans can turn the other way to help in cold times.'],
        ['This fan is easy to reach with a long stick if it is up high.']
      ]
    }
  ],
  flow: [
    { partIds: ['top'], caption: 'The mount holds the fan to the room', sentenceRef: 2 },
    { partIds: ['plug', 'power'], caption: 'The chain and power line start the fan', sentenceRef: 5 },
    { partIds: ['inside'], caption: 'The turning part moves the arms', sentenceRef: 3 },
    { partIds: ['end'], caption: 'The wide ends push air down', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'ceiling fan', partId: 'body' },
    { text: 'fan blade', partId: 'end' },
    { text: 'mount bracket', partId: 'top' },
    { text: 'pull chain', partId: 'plug' }
  ]
};
