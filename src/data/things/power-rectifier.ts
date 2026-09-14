import type { ThingData } from '../types';

export const powerRectifier: ThingData = {
  id: 'power-rectifier',
  slug: 'power-rectifier',
  simpleName: 'The One-Way Power Box',
  realName: 'Rectifier',
  category: 'power',
  color: '#2F4F4F',
  funFacts: [
    'This is a box that changes the kind of power that comes from the wall.',
    'Power from the wall goes back and forth, but some things need power that only goes one way.',
    'This box changes the back-and-forth power into one-way power.',
    'You can find it inside your phone charger.',
    'Without it, many things would not work right.',
    'It works by only letting power go in one direction.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'output', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'input', position: [0, -0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'diode', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'plug', realName: 'terminal', position: [0.15, 0, 0], finish: 'titanium' },
    { id: 'power', label: 'power', realName: 'heat sink', position: [-0.15, 0, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a box that changes the kind of power that comes from the wall.'],
        ['Power from the wall goes back and forth very fast.'],
        ['Some things need power that only goes one way.'],
        ['The ', { text: 'body', part: 'body' }, ' holds the parts that do the changing.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'top', part: 'top' }, ' is where the back-and-forth power comes in.'],
        ['The ', { text: 'inside', part: 'inside' }, ' inside only lets power go one way.'],
        ['It stops the power from going the wrong way.'],
        ['The one-way power comes out of the ', { text: 'end', part: 'end' }, '.'],
        ['The ', { text: 'plug', part: 'plug' }, ' joins it to the thing that needs the power.'],
        ['The ', { text: 'power', part: 'power' }, ' on the side takes away the heat.'],
        ['You can find this box inside your phone charger.']
      ]
    }
  ],
  flow: [
    { partIds: ['top'], caption: 'Back-and-forth power comes in', sentenceRef: 4 },
    { partIds: ['inside'], caption: 'The diode only lets power go one way', sentenceRef: 5 },
    { partIds: ['end', 'plug'], caption: 'One-way power goes out', sentenceRef: 7 },
    { partIds: ['power'], caption: 'The heat sink takes away the heat', sentenceRef: 9 }
  ],
  keyExpressions: [
    { text: 'rectifier', partId: 'body' },
    { text: 'diode', partId: 'inside' },
    { text: 'terminal', partId: 'plug' },
    { text: 'heat sink', partId: 'power' }
  ]
};