import type { ThingData } from '../types';

export const powerIsolator: ThingData = {
  id: 'power-isolator',
  slug: 'power-isolator',
  simpleName: 'The Power Cutter',
  realName: 'Isolator',
  category: 'power',
  color: '#FF6347',
  funFacts: [
    'This switch cuts power so a person can work on a line and be safe.',
    'The space of air inside it stops power from going across.',
    'A worker can put a lock on it so nobody turns it on.',
    'It is made to be slow and hard to turn, so it never turns by itself.',
    'People use it in power plants and in big buildings.',
    'It is made for safety first, so it is big and strong.'
  ],
  parts: [
    { id: 'handle', label: 'Long Handle', realName: 'Operating Handle', position: [0, 0.3, 0], finish: 'hull' },
    { id: 'arm', label: 'Pull Arm', realName: 'Moving Blade', position: [0, 0.14, 0], finish: 'titanium' },
    { id: 'jaw', label: 'Jaw Parts', realName: 'Fixed Jaws', position: [0.14, 0.06, 0], finish: 'titanium' },
    { id: 'case', label: 'Main Case', realName: 'Insulator Case', position: [0, -0.12, 0], finish: 'cold' },
    { id: 'wire', label: 'Line Ends', realName: 'Line Terminals', position: [-0.26, 0.06, 0], finish: 'hull' },
    { id: 'lock', label: 'Lock Part', realName: 'Lockout Point', position: [0.2, 0.2, 0.08], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This switch cuts power in a line so people can work on it.'],
        ['The ', { text: 'long handle', part: 'handle' }, ' is the part a person pulls down.'],
        ['The ', { text: 'pull arm', part: 'arm' }, ' moves out of the jaws when you pull the handle.'],
        ['The ', { text: 'jaw parts', part: 'jaw' }, ' hold the two ends of the line when power is on.'],
        ['The ', { text: 'main case', part: 'case' }, ' keeps the parts dry and stops power from going through it.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'line ends', part: 'wire' }, ' bring the power in and out of the switch.'],
        ['The ', { text: 'lock part', part: 'lock' }, ' lets a worker put a lock on it so nobody turns it on.'],
        ['When the switch is open, there is a big space of air in the line.'],
        ['Air cannot carry much power, so the line is safe to touch.'],
        ['People use it to cut power before they work on a line or a machine.'],
        ['It is made to be very safe, so it is slow and hard to turn.']
      ]
    }
  ],
  flow: [
    { partIds: ['handle'], caption: 'A person pulls the long handle down', sentenceRef: 1 },
    { partIds: ['arm'], caption: 'The pull arm moves out of the jaws', sentenceRef: 2 },
    { partIds: ['jaw'], caption: 'The jaw parts hold the two ends of the line', sentenceRef: 3 },
    { partIds: ['lock'], caption: 'The lock part keeps it off while people work', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'long handle', partId: 'handle' },
    { text: 'pull arm', partId: 'arm' },
    { text: 'jaw parts', partId: 'jaw' },
    { text: 'lock part', partId: 'lock' }
  ]
};
