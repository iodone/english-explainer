import type { ThingData } from '../types';

export const spaceLightFilter: ThingData = {
  id: 'space-light-filter',
  slug: 'space-light-filter',
  simpleName: 'The Sun Guard',
  realName: 'Light Filter',
  category: 'space',
  color: '#F4C430',
  funFacts: [
    'This glass stops the bad light from the sun and lets the good light in.',
    'Too much sun light can hurt your eyes and the tools on a ship.',
    'The coat stops that light and lets the rest come in.',
    'People put this glass on helmets and on the windows of a ship.',
    'A dark coat can make the world look a warm brown.',
    'The sun sense tells people when the light is too strong.'
  ],
  parts: [
    { id: 'glass', label: 'Glass Layer', realName: 'Glass Layer', position: [0, 0, 0], finish: 'hull' },
    { id: 'frame', label: 'Main Frame', realName: 'Frame', position: [0, 0, 0], finish: 'titanium' },
    { id: 'coat', label: 'Light Coat', realName: 'Coating', position: [0, 0.03, 0], finish: 'cold' },
    { id: 'sensor', label: 'Sun Sense', realName: 'Light Sensor', position: [0.24, 0.04, 0], finish: 'warning' },
    { id: 'seal', label: 'Edge Seal', realName: 'Seal', position: [0, -0.06, 0], finish: 'hull' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.34, -0.02, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This glass stops the bad light from the sun and lets the good light in.'],
        ['The ', { text: 'glass layer', part: 'glass' }, ' is the clear part that the light goes through.'],
        ['The ', { text: 'main frame', part: 'frame' }, ' is the strong part that holds the glass.'],
        ['The ', { text: 'light coat', part: 'coat' }, ' is the thin skin on the glass that stops the bad light.'],
        ['The ', { text: 'sun sense', part: 'sensor' }, ' is the part that reads how much light is on the glass.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'edge seal', part: 'seal' }, ' keeps the glass in the frame.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the answer to the computers.'],
        ['Too much sun light can hurt your eyes and the tools on a ship.'],
        ['The coat stops that light and lets the rest come in.'],
        ['People put this glass on helmets and on the windows of a ship.'],
        ['The sun sense tells people when the light is too strong.']
      ]
    }
  ],
  flow: [
    { partIds: ['glass'], caption: 'The glass layer is the clear part that the light goes through', sentenceRef: 1 },
    { partIds: ['frame'], caption: 'The main frame holds the glass', sentenceRef: 2 },
    { partIds: ['coat'], caption: 'The light coat stops the bad light', sentenceRef: 3 },
    { partIds: ['sensor'], caption: 'The sun sense reads how much light is on the glass', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'glass layer', partId: 'glass' },
    { text: 'main frame', partId: 'frame' },
    { text: 'light coat', partId: 'coat' },
    { text: 'sun sense', partId: 'sensor' }
  ]
};
