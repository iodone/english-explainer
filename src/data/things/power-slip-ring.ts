import type { ThingData } from '../types';

export const powerSlipRing: ThingData = {
  id: 'power-slip-ring',
  slug: 'power-slip-ring',
  simpleName: 'The Turn Wire',
  realName: 'Slip Ring',
  category: 'power',
  color: '#B8860B',
  funFacts: [
    'This part lets power go into a machine that turns all day.',
    'It is used in turning machines and wind power boxes.',
    'The turning part touches the fixed part with a soft brush.',
    'The brush wears down over time, so people change it now and then.',
    'A brush that is worn can get very hot, so people check it often.',
    'It is small, but the whole machine stops if it fails.'
  ],
  parts: [
    { id: 'ring', label: 'Turn Ring', realName: 'Slip Ring', position: [0, 0.08, 0], finish: 'titanium' },
    { id: 'brush', label: 'Touch Brush', realName: 'Carbon Brush', position: [0.12, 0.08, 0], finish: 'warning' },
    { id: 'shaft', label: 'Center Shaft', realName: 'Turning Shaft', position: [0, 0.02, 0], finish: 'titanium' },
    { id: 'case', label: 'Main Case', realName: 'Ring Housing', position: [0, -0.16, 0], finish: 'hull' },
    { id: 'wire', label: 'Power Wire', realName: 'Lead Wire', position: [0.24, 0.16, 0], finish: 'hull' },
    { id: 'mount', label: 'Mount Plate', realName: 'Mount Plate', position: [0, -0.28, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This part carries power from a fixed wire to a part that turns all day.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the turning parts inside.'],
        ['The ', { text: 'center shaft', part: 'shaft' }, ' is the long rod that turns with the machine.'],
        ['The ', { text: 'turn ring', part: 'ring' }, ' is the metal circle that turns with the shaft.'],
        ['The ', { text: 'touch brush', part: 'brush' }, ' is the soft block that rubs on the ring.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'power wire', part: 'wire' }, ' takes the power out to the machines.'],
        ['The ', { text: 'mount plate', part: 'mount' }, ' holds the case on the wall of the machine.'],
        ['Power comes in on the brush and goes through the ring.'],
        ['The ring turns, but the brush stays in one place and rubs on it.'],
        ['The brushes wear down over time, so people change them.'],
        ['It lets a machine turn all day and still take power from a wire.']
      ]
    }
  ],
  flow: [
    { partIds: ['brush'], caption: 'The touch brush rubs on the turning ring', sentenceRef: 4 },
    { partIds: ['ring'], caption: 'The turn ring carries power to the turning shaft', sentenceRef: 3 },
    { partIds: ['wire'], caption: 'The power wire takes power out to the machines', sentenceRef: 5 },
    { partIds: ['mount'], caption: 'The mount plate holds the case on the machine', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'turn ring', partId: 'ring' },
    { text: 'touch brush', partId: 'brush' },
    { text: 'center shaft', partId: 'shaft' },
    { text: 'power wire', partId: 'wire' }
  ]
};
