import type { ThingData } from '../types';

export const spaceLaserRange: ThingData = {
  id: 'space-laser-range',
  slug: 'space-laser-range',
  simpleName: 'The Light Ruler',
  realName: 'Laser Range Finder',
  category: 'space',
  color: '#EF5350',
  funFacts: [
    'This box uses a light beam to tell how far a thing is.',
    'The light goes out and comes back at the same speed all the time.',
    'The time it takes tells how far the thing is.',
    'It can tell the distance to the moon, and it is close to the true number.',
    'People use it to find how far away a rock or a ship is.',
    'It works in the dark, because it makes its own light.'
  ],
  parts: [
    { id: 'laser', label: 'Light Beam', realName: 'Laser', position: [-0.14, 0.06, 0], finish: 'cold' },
    { id: 'mirror', label: 'Small Mirror', realName: 'Mirror', position: [0, 0.06, 0], finish: 'hull' },
    { id: 'sensor', label: 'Time Sense', realName: 'Sensor', position: [0.14, 0.06, 0], finish: 'hull' },
    { id: 'mount', label: 'Mount Arm', realName: 'Mount', position: [0, -0.16, 0], finish: 'titanium' },
    { id: 'light', label: 'Power Light', realName: 'Power Light', position: [0.16, -0.04, 0], finish: 'warning' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.28, -0.14, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This box uses a light beam to tell how far a thing is.'],
        ['The ', { text: 'light beam', part: 'laser' }, ' is the thin line of light that goes out.'],
        ['The ', { text: 'small mirror', part: 'mirror' }, ' sends the light out and takes it back.'],
        ['The ', { text: 'time sense', part: 'sensor' }, ' takes the time for the light to come back.'],
        ['The ', { text: 'mount arm', part: 'mount' }, ' holds the box on the ship.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'power light', part: 'light' }, ' shows that the box is on.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the number to the computers.'],
        ['The light goes out and comes back at the same speed all the time.'],
        ['The time it takes tells how far the thing is.'],
        ['It can tell the distance to the moon, and it is close to the true number.'],
        ['People use it to find how far away a rock or a ship is.']
      ]
    }
  ],
  flow: [
    { partIds: ['laser'], caption: 'The light beam is the thin line of light that goes out', sentenceRef: 1 },
    { partIds: ['mirror'], caption: 'The small mirror sends the light out and takes it back', sentenceRef: 2 },
    { partIds: ['sensor'], caption: 'The time sense takes the time for the light to come back', sentenceRef: 3 },
    { partIds: ['mount'], caption: 'The mount arm holds the box on the ship', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'light beam', partId: 'laser' },
    { text: 'small mirror', partId: 'mirror' },
    { text: 'time sense', partId: 'sensor' },
    { text: 'mount arm', partId: 'mount' }
  ]
};
