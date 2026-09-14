import type { ThingData } from '../types';

export const spaceSolarArray: ThingData = {
  id: 'space-solar-array',
  slug: 'space-solar-array',
  simpleName: 'The Sun Power Board',
  realName: 'Solar Array',
  category: 'space',
  color: '#1E90FF',
  funFacts: [
    'A solar array can make power for many years with no fuel at all.',
    'It must turn to face the sun as the ship goes around the world.',
    'The cells are dark so they can take in more light from the sun.',
    'One big wing can make enough power for a small ship and its lights.',
    'When the wing is in the dark, the ship must use power from a battery.',
    'These wings are very light, because the ship must carry them all the way.'
  ],
  parts: [
    { id: 'wing', label: 'Big Wing', realName: 'Solar Wing', position: [0, 0, 0], finish: 'hull' },
    { id: 'cell', label: 'Sun Cells', realName: 'Solar Cells', position: [0, 0.12, -0.04], finish: 'titanium' },
    { id: 'bar', label: 'Hold Bar', realName: 'Support Beam', position: [0, -0.27, 0], finish: 'hull' },
    { id: 'joint', label: 'Turn Joint', realName: 'Rotating Joint', position: [0, -0.35, 0], finish: 'cold' },
    { id: 'face', label: 'Light Side', realName: 'Sun Side', position: [0, 0, -0.02], finish: 'warning' },
    { id: 'wire', label: 'Power Line', realName: 'Output Cable', position: [0, -0.48, -0.06], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This big board turns sun light into power for a ship in space.'],
        ['The ', { text: 'big wing', part: 'wing' }, ' is the wide flat part that holds all the cells.'],
        ['The ', { text: 'sun cells', part: 'cell' }, ' are small dark parts that make power from light.'],
        ['The ', { text: 'hold bar', part: 'bar' }, ' runs along the wing and keeps it straight.'],
        ['The ', { text: 'turn joint', part: 'joint' }, ' lets the whole wing turn to face the sun.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'light side', part: 'face' }, ' is the side that must look at the sun.'],
        ['The ', { text: 'power line', part: 'wire' }, ' carries the power from the wing into the ship.'],
        ['When the ship is in the dark, the board makes no power at all.'],
        ['The wing can turn in when the ship must move fast.'],
        ['Big wings make a lot of power, but they are heavy and take much room.'],
        ['These boards give power to almost every ship that goes far from the world.']
      ]
    }
  ],
  flow: [
    { partIds: ['cell'], caption: 'The sun cells make power from light', sentenceRef: 2 },
    { partIds: ['face'], caption: 'The light side must look at the sun', sentenceRef: 5 },
    { partIds: ['bar'], caption: 'The hold bar keeps the wing straight', sentenceRef: 3 },
    { partIds: ['wire'], caption: 'The power line carries power into the ship', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'solar array', partId: 'wing' },
    { text: 'sun cells', partId: 'cell' },
    { text: 'hold bar', partId: 'bar' },
    { text: 'turn joint', partId: 'joint' }
  ]
};
