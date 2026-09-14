import type { ThingData } from '../types';

export const spaceMagneticShield: ThingData = {
  id: 'space-magnetic-shield',
  slug: 'space-magnetic-shield',
  simpleName: 'The Force Field',
  realName: 'Magnetic Shield',
  category: 'space',
  color: '#4B0082',
  funFacts: [
    'A ship in space flies through a wind of bits that carry a small charge.',
    'This ring makes a strong push field around the ship.',
    'The field pushes those bits to the side before they touch the walls.',
    'It uses a lot of power, so most ships use it only for a short time.',
    'The field can not stop light or rocks that carry no charge.',
    'People watch the field with a small box to be sure it is on.'
  ],
  parts: [
    { id: 'coil', label: 'Big Coil', realName: 'Magnet Coil', position: [0, 0, 0], finish: 'titanium' },
    { id: 'ring', label: 'Coil Ring', realName: 'Coil Ring', position: [0.34, 0, 0], finish: 'hull' },
    { id: 'field', label: 'Push Field', realName: 'Field Zone', position: [0, 0, 0], finish: 'warning' },
    { id: 'box', label: 'Power Box', realName: 'Power Supply', position: [0.3, 0.12, 0], finish: 'hull' },
    { id: 'sensor', label: 'Field Sensor', realName: 'Field Sensor', position: [0, 0.36, 0], finish: 'cold' },
    { id: 'frame', label: 'Hold Frame', realName: 'Mount Arm', position: [0.42, 0, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['Bits that fly through space carry a small charge and can go through a thin wall.'],
        ['The ', { text: 'big coil', part: 'coil' }, ' is the roll of wire that makes the push field.'],
        ['The ', { text: 'coil ring', part: 'ring' }, ' is the ring that holds the coil around the ship.'],
        ['The ', { text: 'push field', part: 'field' }, ' is the space around the ship where bits are pushed away.'],
        ['The ', { text: 'power box', part: 'box' }, ' is the part that sends power to the coil.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'field sensor', part: 'sensor' }, ' is the small part that tells people how strong the field is.'],
        ['The ', { text: 'hold frame', part: 'frame' }, ' is the frame that holds the ring on the ship.'],
        ['When the coil gets power, it makes a field around the ship.'],
        ['A bit that comes near the ship is pushed to the side by the field.'],
        ['The field is turned off when the ship does not need it, to save power.'],
        ['People must turn it on again before the ship goes through a dust cloud.']
      ]
    }
  ],
  flow: [
    { partIds: ['coil'], caption: 'The big coil makes the push field', sentenceRef: 1 },
    { partIds: ['ring'], caption: 'The coil ring holds the coil around the ship', sentenceRef: 2 },
    { partIds: ['field'], caption: 'The push field pushes bits away from the ship', sentenceRef: 3 },
    { partIds: ['box'], caption: 'The power box sends power to the coil', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'big coil', partId: 'coil' },
    { text: 'coil ring', partId: 'ring' },
    { text: 'push field', partId: 'field' },
    { text: 'power box', partId: 'box' }
  ]
};
