import type { ThingData } from '../types';

export const spaceRadiometer: ThingData = {
  id: 'space-radiometer',
  slug: 'space-radiometer',
  simpleName: 'The Heat Measurer',
  realName: 'Radiometer',
  category: 'space',
  color: '#FF6347',
  funFacts: [
    'This box tells how much heat comes from the sun.',
    'The vane turns when light from the sun hits it.',
    'It does not need power or a motor to turn.',
    'The dark side of each vane gets warm, and that moves the air.',
    'It can sit on a ship and work for years.',
    'People use the number to tell how hot the sun is.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'vane', label: 'Spin Vane', realName: 'Vane Wheel', position: [0, 0.02, 0], finish: 'titanium' },
    { id: 'pin', label: 'Thin Pin', realName: 'Pivot Pin', position: [0, 0.02, 0], finish: 'cold' },
    { id: 'glass', label: 'Glass Cap', realName: 'Glass Dome', position: [0, 0.02, 0], finish: 'hull' },
    { id: 'dial', label: 'Read Dial', realName: 'Read Dial', position: [0.2, 0, 0], finish: 'titanium' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.3, -0.1, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This box tells how much heat comes from the sun.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the case that holds the parts.'],
        ['The ', { text: 'spin vane', part: 'vane' }, ' is the light wheel that turns in the sun.'],
        ['The ', { text: 'thin pin', part: 'pin' }, ' is the point the vane turns on.'],
        ['The ', { text: 'glass cap', part: 'glass' }, ' keeps the air out of the case.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'read dial', part: 'dial' }, ' shows a number for the heat.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the number to the computers.'],
        ['When light from the sun hits the vane, the dark side gets warm.'],
        ['The warm side pushes the air, and the vane turns.'],
        ['More heat makes the vane turn faster.'],
        ['People read the number to know how hot the sun is.']
      ]
    }
  ],
  flow: [
    { partIds: ['vane'], caption: 'The spin vane turns when light from the sun hits it', sentenceRef: 2 },
    { partIds: ['pin'], caption: 'The thin pin is the point the vane turns on', sentenceRef: 3 },
    { partIds: ['dial'], caption: 'The read dial shows a number for the heat', sentenceRef: 5 },
    { partIds: ['wire'], caption: 'The lead wire takes the number to the computers', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'spin vane', partId: 'vane' },
    { text: 'thin pin', partId: 'pin' },
    { text: 'glass cap', partId: 'glass' },
    { text: 'read dial', partId: 'dial' }
  ]
};
