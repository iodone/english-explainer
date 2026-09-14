import type { ThingData } from '../types';

export const powerCurrentSensor: ThingData = {
  id: 'power-current-sensor',
  slug: 'power-current-sensor',
  simpleName: 'The Power Measurer',
  realName: 'Current Sensor',
  category: 'power',
  color: '#FFD700',
  funFacts: [
    'This ring goes around a power line and feels the power inside it.',
    'It does not touch the metal, so it is safe to put in a live box.',
    'The small coil makes a signal that follows the power, but much smaller.',
    'People use the signal to run a meter or a small computer.',
    'It can tell the power in a line without cutting the line open.',
    'Every big machine has one of these, so people know what it is doing.'
  ],
  parts: [
    { id: 'core', label: 'Iron Ring', realName: 'Magnetic Core', position: [0, 0, 0], finish: 'titanium' },
    { id: 'coil', label: 'Pick Coil', realName: 'Secondary Coil', position: [0.06, 0, 0], finish: 'warning' },
    { id: 'line', label: 'Power Line', realName: 'Primary Conductor', position: [-0.2, 0, 0], finish: 'hull' },
    { id: 'box', label: 'Main Box', realName: 'Sensor Body', position: [0, -0.16, 0], finish: 'hull' },
    { id: 'out', label: 'Signal Out', realName: 'Output Lead', position: [0.14, -0.22, 0], finish: 'cold' },
    { id: 'set', label: 'Range Set', realName: 'Range Knob', position: [0.08, -0.16, 0.11], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This part tells people how much power is moving through a line.'],
        ['The ', { text: 'iron ring', part: 'core' }, ' is the ring that goes around the power line.'],
        ['The ', { text: 'pick coil', part: 'coil' }, ' is the small roll of wire that makes the signal.'],
        ['The ', { text: 'power line', part: 'line' }, ' is the thick metal part that carries the power.'],
        ['The ', { text: 'main box', part: 'box' }, ' is the box that holds the ring and the coil.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'signal out', part: 'out' }, ' is the wire that takes the signal to a meter.'],
        ['The ', { text: 'range set', part: 'set' }, ' is the part you turn to pick the biggest power it can read.'],
        ['Power moves through the line and makes a field around it.'],
        ['The field pushes on the coil and the coil makes a small signal.'],
        ['The signal follows the power in the line, but it is much smaller.'],
        ['It is safe to work on, because the parts never touch the live line.']
      ]
    }
  ],
  flow: [
    { partIds: ['core'], caption: 'The iron ring goes around the line', sentenceRef: 1 },
    { partIds: ['coil'], caption: 'The pick coil makes the signal', sentenceRef: 2 },
    { partIds: ['line'], caption: 'The power line carries the power', sentenceRef: 3 },
    { partIds: ['out'], caption: 'The signal out goes to a meter', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'iron ring', partId: 'core' },
    { text: 'pick coil', partId: 'coil' },
    { text: 'power line', partId: 'line' },
    { text: 'signal out', partId: 'out' }
  ]
};
