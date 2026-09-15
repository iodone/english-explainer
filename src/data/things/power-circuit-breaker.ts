import type { ThingData } from '../types';

export const powerCircuitBreaker: ThingData = {
  id: 'power-circuit-breaker',
  slug: 'power-circuit-breaker',
  simpleName: 'The Safe Switch',
  realName: 'Circuit Breaker',
  category: 'power',
  color: '#C62828',
  funFacts: [
    'This switch opens on its own when the power gets too big.',
    'The contacts come apart, and the power stops at once.',
    'You push the handle to set the switch back on.',
    'It stops the wires and the machines from breaking.',
    'It can work faster than you can take a breath.',
    'People use it to keep a house safe.'
  ],
  parts: [
    { id: 'case', label: 'Main Case', realName: 'Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'handle', label: 'Switch Handle', realName: 'Handle', position: [0.16, 0, 0.14], finish: 'titanium' },
    { id: 'contacts', label: 'Touch Parts', realName: 'Contacts', position: [-0.12, 0, 0], finish: 'hull' },
    { id: 'coil', label: 'Line Coil', realName: 'Coil', position: [0.06, 0, 0], finish: 'cold' },
    { id: 'trip', label: 'Trip Part', realName: 'Trip Mechanism', position: [0.06, 0.1, 0], finish: 'warning' },
    { id: 'vent', label: 'Side Vent', realName: 'Vent', position: [-0.16, -0.1, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This switch opens on its own when the power gets too big.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the parts.'],
        ['The ', { text: 'switch handle', part: 'handle' }, ' is the part you push to turn it back on.'],
        ['The ', { text: 'touch parts', part: 'contacts' }, ' are the parts that touch to let the power through.'],
        ['The ', { text: 'line coil', part: 'coil' }, ' is the part that feels the power in the line.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'trip part', part: 'trip' }, ' is the small part that opens the switch.'],
        ['The ', { text: 'side vent', part: 'vent' }, ' lets the hot air out of the case.'],
        ['When the power gets too big, the coil pulls the trip part.'],
        ['The touch parts come apart, and the power stops at once.'],
        ['You push the handle to set the switch back on.'],
        ['That is why people use it to keep a house safe.']
      ]
    }
  ],
  flow: [
    { partIds: ['coil'], caption: 'The line coil feels the power in the line', sentenceRef: 4 },
    { partIds: ['trip'], caption: 'The coil pulls the trip part', sentenceRef: 7 },
    { partIds: ['contacts'], caption: 'The touch parts come apart', sentenceRef: 8 },
    { partIds: ['handle'], caption: 'You push the handle to set the switch back on', sentenceRef: 9 }
  ],
  keyExpressions: [
    { text: 'line coil', partId: 'coil' },
    { text: 'trip part', partId: 'trip' },
    { text: 'touch parts', partId: 'contacts' },
    { text: 'switch handle', partId: 'handle' }
  ]
};
