import type { ThingData } from '../types';

export const powerVoltageRegulator: ThingData = {
  id: 'power-voltage-regulator',
  slug: 'power-voltage-regulator',
  simpleName: 'The Power Holder',
  realName: 'Voltage Regulator',
  category: 'power',
  color: '#4682B4',
  funFacts: [
    'This box holds the power at one size while the machine works.',
    'It looks at the power all the time and makes small changes.',
    'When the machines ask for more, it lets more power through.',
    'The chip makes the choice and the parts do the work.',
    'Some of the power turns into heat, so it has fins to let the heat out.',
    'It keeps a computer safe, because a big jump in power can kill the parts.'
  ],
  parts: [
    { id: 'sense', label: 'Sense Wire', realName: 'Sense Line', position: [0, 0.12, 0], finish: 'warning' },
    { id: 'chip', label: 'Control Chip', realName: 'Control Chip', position: [-0.06, 0.04, 0], finish: 'titanium' },
    { id: 'heat', label: 'Heat Fins', realName: 'Heat Sink Fins', position: [0.16, 0.06, 0], finish: 'hull' },
    { id: 'in', label: 'Power In', realName: 'Input End', position: [-0.3, 0, 0], finish: 'hull' },
    { id: 'out', label: 'Power Out', realName: 'Output End', position: [0.3, 0, 0], finish: 'hull' },
    { id: 'case', label: 'Main Case', realName: 'Regulator Case', position: [0, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This box holds the power at one size while the machine is working.'],
        ['The ', { text: 'sense wire', part: 'sense' }, ' is the wire that tells the box how big the power is.'],
        ['The ', { text: 'control chip', part: 'chip' }, ' is the small part that makes the choice.'],
        ['The ', { text: 'heat fins', part: 'heat' }, ' are the flat parts that let the heat out.'],
        ['The ', { text: 'power in', part: 'in' }, ' is the end where the power comes in.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'power out', part: 'out' }, ' is the end where it goes out at one size.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the parts.'],
        ['The power comes in and the sense wire tells the chip how big it is.'],
        ['The chip makes a small choice and the box lets more or less power through.'],
        ['The heat fins take the heat away so the chip does not get too hot.'],
        ['That keeps a computer safe when the power jumps up and down.']
      ]
    }
  ],
  flow: [
    { partIds: ['sense'], caption: 'The sense wire tells the chip how big the power is', sentenceRef: 1 },
    { partIds: ['chip'], caption: 'The control chip makes the choice', sentenceRef: 2 },
    { partIds: ['heat'], caption: 'The heat fins let the heat out', sentenceRef: 3 },
    { partIds: ['out'], caption: 'The power out goes out at one size', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'sense wire', partId: 'sense' },
    { text: 'control chip', partId: 'chip' },
    { text: 'heat fins', partId: 'heat' },
    { text: 'power in', partId: 'in' }
  ]
};
