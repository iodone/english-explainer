import type { ThingData } from '../types';

export const powerCurrentLimiter: ThingData = {
  id: 'power-current-limiter',
  slug: 'power-current-limiter',
  simpleName: 'The Power Cap',
  realName: 'Current Limiter',
  category: 'power',
  color: '#A0522D',
  funFacts: [
    'This part stops the power in a line from getting too big.',
    'When the power gets too big, it makes the power smaller.',
    'Then the machine gets power that it can take.',
    'It can work many times in one second.',
    'People use it to keep good machines from getting hurt.',
    'The warn light comes on when the power was too big.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Body Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'sense', label: 'Sense Part', realName: 'Sense Resistor', position: [-0.12, 0.08, 0], finish: 'cold' },
    { id: 'chip', label: 'Control Chip', realName: 'Control Chip', position: [0.02, 0.08, 0], finish: 'hull' },
    { id: 'out', label: 'Output End', realName: 'Output Terminal', position: [0.28, 0, 0], finish: 'titanium' },
    { id: 'in', label: 'Input End', realName: 'Input Terminal', position: [-0.28, 0, 0], finish: 'titanium' },
    { id: 'light', label: 'Warn Light', realName: 'Warning Light', position: [0.18, 0.12, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This part stops the power in a line from getting too big.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the case that holds the parts.'],
        ['The ', { text: 'sense part', part: 'sense' }, ' reads how much power is in the line.'],
        ['The ', { text: 'control chip', part: 'chip' }, ' is the small part that makes the choice.'],
        ['The ', { text: 'output end', part: 'out' }, ' takes the safe power on to the machine.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'input end', part: 'in' }, ' takes the power in from the line.'],
        ['The ', { text: 'warn light', part: 'light' }, ' comes on when the power was too big.'],
        ['When the power gets too big, the sense part sees it.'],
        ['The control chip makes the power smaller in a short time.'],
        ['Then the machine gets power that it can take.'],
        ['When the power is safe again, the part lets it all pass.']
      ]
    }
  ],
  flow: [
    { partIds: ['sense'], caption: 'The sense part reads how much power is in the line', sentenceRef: 2 },
    { partIds: ['chip'], caption: 'The control chip makes the choice', sentenceRef: 3 },
    { partIds: ['out'], caption: 'The output end takes the safe power on to the machine', sentenceRef: 4 },
    { partIds: ['light'], caption: 'The warn light comes on when the power was too big', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'sense part', partId: 'sense' },
    { text: 'control chip', partId: 'chip' },
    { text: 'output end', partId: 'out' },
    { text: 'warn light', partId: 'light' }
  ]
};
