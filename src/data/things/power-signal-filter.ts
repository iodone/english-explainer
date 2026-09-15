import type { ThingData } from '../types';

export const powerSignalFilter: ThingData = {
  id: 'power-signal-filter',
  slug: 'power-signal-filter',
  simpleName: 'The Noise Taker',
  realName: 'Signal Filter',
  category: 'power',
  color: '#7E57C2',
  funFacts: [
    'This part takes the noise out of a power or sound line.',
    'A line can carry the sound you want and other noise.',
    'The noise is made of fast and slow waves.',
    'The coil and the cap take those waves out of the line.',
    'People use it in sound boxes and in power boxes.',
    'What comes out is the sound you want, and no noise.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Body Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'in', label: 'Input End', realName: 'Input Terminal', position: [-0.3, 0, 0], finish: 'titanium' },
    { id: 'coil', label: 'Filter Coil', realName: 'Filter Coil', position: [-0.1, 0, 0], finish: 'cold' },
    { id: 'cap', label: 'Small Cap', realName: 'Capacitor', position: [0.08, 0, 0], finish: 'hull' },
    { id: 'out', label: 'Output End', realName: 'Output Terminal', position: [0.3, 0, 0], finish: 'titanium' },
    { id: 'light', label: 'Warn Light', realName: 'Warning Light', position: [0.14, 0.12, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This part takes the noise out of a power or sound line.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the case that holds the parts.'],
        ['The ', { text: 'input end', part: 'in' }, ' takes the line in from the machine.'],
        ['The ', { text: 'filter coil', part: 'coil' }, ' stops the fast jumps in the line.'],
        ['The ', { text: 'small cap', part: 'cap' }, ' takes the slow waves out of the line.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'output end', part: 'out' }, ' sends the clean line on.'],
        ['The ', { text: 'warn light', part: 'light' }, ' comes on when the line is too loud.'],
        ['A line can carry the sound you want and other noise.'],
        ['The noise is made of fast and slow waves.'],
        ['The coil and the cap take those waves out of the line.'],
        ['What comes out is the sound you want, and no noise.']
      ]
    }
  ],
  flow: [
    { partIds: ['in'], caption: 'The input end takes the line in from the machine', sentenceRef: 2 },
    { partIds: ['coil'], caption: 'The filter coil stops the fast jumps in the line', sentenceRef: 3 },
    { partIds: ['cap'], caption: 'The small cap takes the slow waves out of the line', sentenceRef: 4 },
    { partIds: ['out'], caption: 'The output end sends the clean line on', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'input end', partId: 'in' },
    { text: 'filter coil', partId: 'coil' },
    { text: 'small cap', partId: 'cap' },
    { text: 'output end', partId: 'out' }
  ]
};
