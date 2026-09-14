import type { ThingData } from '../types';

export const spaceSunSensor: ThingData = {
  id: 'space-sun-sensor',
  slug: 'space-sun-sensor',
  simpleName: 'The Sun Finder',
  realName: 'Sun Sensor',
  category: 'space',
  color: '#FFD700',
  funFacts: [
    'This small box tells a ship where the sun is.',
    'Light comes in through a small hole and lands on a cell.',
    'The place where the light lands tells the ship which way the sun is.',
    'It is used with star pictures to keep a ship on the right path.',
    'The cell makes a small power when light falls on it.',
    'It works only in the day, so it is used with other boxes at night.'
  ],
  parts: [
    { id: 'cell', label: 'Light Cell', realName: 'Sun Cell', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'hole', label: 'Small Hole', realName: 'Aperture', position: [0, 0.1, 0], finish: 'hull' },
    { id: 'plate', label: 'Top Plate', realName: 'Mask Plate', position: [0, 0.09, 0], finish: 'hull' },
    { id: 'chip', label: 'Read Chip', realName: 'Sensor Chip', position: [0, -0.02, 0], finish: 'warning' },
    { id: 'case', label: 'Main Case', realName: 'Sensor Case', position: [0, 0, 0], finish: 'cold' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.16, -0.04, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['A ship in space must know where the sun is at all times.'],
        ['The ', { text: 'small hole', part: 'hole' }, ' is the narrow opening in the top plate.'],
        ['The ', { text: 'top plate', part: 'plate' }, ' is the flat part with the hole in it.'],
        ['The ', { text: 'light cell', part: 'cell' }, ' is the part that makes a small power when light falls on it.'],
        ['The ', { text: 'read chip', part: 'chip' }, ' is the part that reads where the light lands.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the cell and the chip.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the answer to the computers.'],
        ['Light comes through the small hole and falls on the light cell.'],
        ['The chip reads the place where the light lands on the cell.'],
        ['That place tells the ship which way the sun is.'],
        ['People use it with star pictures, so the ship knows where it is going.']
      ]
    }
  ],
  flow: [
    { partIds: ['hole'], caption: 'The small hole lets the light in', sentenceRef: 1 },
    { partIds: ['plate'], caption: 'The top plate holds the hole', sentenceRef: 2 },
    { partIds: ['cell'], caption: 'The light cell makes a small power', sentenceRef: 3 },
    { partIds: ['chip'], caption: 'The read chip reads where the light lands', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'small hole', partId: 'hole' },
    { text: 'top plate', partId: 'plate' },
    { text: 'light cell', partId: 'cell' },
    { text: 'read chip', partId: 'chip' }
  ]
};
