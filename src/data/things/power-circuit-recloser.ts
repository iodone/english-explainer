import type { ThingData } from '../types';

export const powerCircuitRecloser: ThingData = {
  id: 'power-circuit-recloser',
  slug: 'power-circuit-recloser',
  simpleName: 'The Power Restarter',
  realName: 'Circuit Recloser',
  category: 'power',
  color: '#FF6347',
  funFacts: [
    'Most times a tree branch touches a line, the power stops for a moment.',
    'This box waits a short time and turns the power back on.',
    'If the bad thing is gone, the power stays on.',
    'If the power keeps stopping, the box stays off for good.',
    'It sits high on the line, so it can work on its own.',
    'A worker can also pull a handle to cut the power.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Control Box', position: [0, 0, 0], finish: 'hull' },
    { id: 'switch', label: 'Main Switch', realName: 'Vacuum Switch', position: [0, 0.12, 0], finish: 'titanium' },
    { id: 'coil', label: 'Sense Coil', realName: 'Current Coil', position: [-0.16, 0, 0], finish: 'cold' },
    { id: 'board', label: 'Small Board', realName: 'Control Board', position: [0.08, -0.02, 0.06], finish: 'hull' },
    { id: 'handle', label: 'Pull Handle', realName: 'Manual Handle', position: [0.3, -0.06, 0], finish: 'warning' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [-0.3, 0, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['Most times a tree branch touches a line, the power stops for a moment.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the box that sits high on the line.'],
        ['The ', { text: 'main switch', part: 'switch' }, ' is the part that cuts the power.'],
        ['The ', { text: 'sense coil', part: 'coil' }, ' is the part that reads the power in the line.'],
        ['The ', { text: 'small board', part: 'board' }, ' is the part that counts the stops.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'pull handle', part: 'handle' }, ' lets a worker cut the power by hand.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the power through the box.'],
        ['When the power stops, the box waits a short time.'],
        ['Then the main switch closes, and the power comes back.'],
        ['If the bad thing is still there, the box tries two more times.'],
        ['If the power still stops, the box stays off for good.']
      ]
    }
  ],
  flow: [
    { partIds: ['switch'], caption: 'The main switch cuts the power', sentenceRef: 2 },
    { partIds: ['coil'], caption: 'The sense coil reads the power in the line', sentenceRef: 3 },
    { partIds: ['board'], caption: 'The small board counts the stops', sentenceRef: 4 },
    { partIds: ['handle'], caption: 'The pull handle lets a worker cut the power by hand', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'main switch', partId: 'switch' },
    { text: 'sense coil', partId: 'coil' },
    { text: 'small board', partId: 'board' },
    { text: 'pull handle', partId: 'handle' }
  ]
};
