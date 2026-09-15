import type { ThingData } from '../types';

export const powerCurrentShunt: ThingData = {
  id: 'power-current-shunt',
  slug: 'power-current-shunt',
  simpleName: 'The Power Bridge',
  realName: 'Current Shunt',
  category: 'power',
  color: '#A1887F',
  funFacts: [
    'This part lets most of the power pass and sends a small part to a meter.',
    'The bar has very little push, so it does not get hot.',
    'A small part of the power goes through the sense wire.',
    'The meter uses that small part to tell how big the power is.',
    'That is why people use it to read very big power.',
    'It is safer than putting a meter right in the big line.'
  ],
  parts: [
    { id: 'bar', label: 'Shunt Bar', realName: 'Shunt Bar', position: [0, 0.06, 0], finish: 'hull' },
    { id: 'in', label: 'Input End', realName: 'Terminal', position: [-0.3, 0.06, 0], finish: 'titanium' },
    { id: 'out', label: 'Output End', realName: 'Terminal', position: [0.3, 0.06, 0], finish: 'titanium' },
    { id: 'sense', label: 'Sense Wire', realName: 'Sense Wire', position: [-0.16, -0.06, 0], finish: 'cold' },
    { id: 'screen', label: 'Read Screen', realName: 'Display', position: [0.16, -0.06, 0], finish: 'warning' },
    { id: 'case', label: 'Main Case', realName: 'Case', position: [0, -0.2, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This part lets most of the power pass and sends a small part to a meter.'],
        ['The ', { text: 'shunt bar', part: 'bar' }, ' is the thick metal part that the power goes through.'],
        ['The ', { text: 'input end', part: 'in' }, ' takes the power in from the line.'],
        ['The ', { text: 'output end', part: 'out' }, ' sends the power on to the machine.'],
        ['The ', { text: 'sense wire', part: 'sense' }, ' takes a small part of the power to the meter.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'read screen', part: 'screen' }, ' shows how big the power is.'],
        ['The ', { text: 'main case', part: 'case' }, ' holds the bar and the screen.'],
        ['The bar has very little push, so it does not get hot.'],
        ['A small part of the power goes through the sense wire.'],
        ['The meter uses that small part to tell how big the power is.'],
        ['That is why people use it to read very big power.']
      ]
    }
  ],
  flow: [
    { partIds: ['bar'], caption: 'The shunt bar is the thick metal part that the power goes through', sentenceRef: 1 },
    { partIds: ['in'], caption: 'The input end takes the power in from the line', sentenceRef: 2 },
    { partIds: ['out'], caption: 'The output end sends the power on to the machine', sentenceRef: 3 },
    { partIds: ['sense'], caption: 'The sense wire takes a small part of the power to the meter', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'shunt bar', partId: 'bar' },
    { text: 'input end', partId: 'in' },
    { text: 'output end', partId: 'out' },
    { text: 'sense wire', partId: 'sense' }
  ]
};
