import type { ThingData } from '../types';

export const spaceMagnetometer: ThingData = {
  id: 'space-magnetometer',
  slug: 'space-magnetometer',
  simpleName: 'The Force Finder',
  realName: 'Magnetometer',
  category: 'space',
  color: '#4682B4',
  funFacts: [
    'This box finds the small push of the field around a ship.',
    'The field of the world is very small, and this box can feel it.',
    'Ships use it to know which way they are turned.',
    'It can also feel the field of a big rock that is close by.',
    'People put the box at the end of a long arm, away from the ship.',
    'The long arm keeps the box away from the metal of the ship.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Sensor Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'coil', label: 'Pick Coil', realName: 'Pickup Coil', position: [-0.16, 0, 0], finish: 'titanium' },
    { id: 'core', label: 'Soft Core', realName: 'Core Bar', position: [-0.16, 0, 0], finish: 'cold' },
    { id: 'boom', label: 'Long Boom', realName: 'Boom Arm', position: [0.3, 0, 0], finish: 'hull' },
    { id: 'box', label: 'Read Box', realName: 'Read Box', position: [0.44, 0, 0], finish: 'titanium' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.54, -0.12, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This box finds the small push of the field around a ship.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the case that holds the parts.'],
        ['The ', { text: 'pick coil', part: 'coil' }, ' is the wire roll that feels the push.'],
        ['The ', { text: 'soft core', part: 'core' }, ' is the metal inside the coil.'],
        ['The ', { text: 'long boom', part: 'boom' }, ' holds the body away from the ship.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'read box', part: 'box' }, ' is the small box that writes down the size.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the answer to the computers.'],
        ['The field of the world pushes on the coil inside the body.'],
        ['The coil turns that push into a small flow of power.'],
        ['The read box turns the flow into a number.'],
        ['People use the number with star pictures to find which way the ship is going.']
      ]
    }
  ],
  flow: [
    { partIds: ['coil'], caption: 'The pick coil feels the push of the field', sentenceRef: 2 },
    { partIds: ['core'], caption: 'The soft core sits inside the coil', sentenceRef: 3 },
    { partIds: ['boom'], caption: 'The long boom holds the body away from the ship', sentenceRef: 4 },
    { partIds: ['box'], caption: 'The read box writes down the number', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'pick coil', partId: 'coil' },
    { text: 'soft core', partId: 'core' },
    { text: 'long boom', partId: 'boom' },
    { text: 'read box', partId: 'box' }
  ]
};
