import type { ThingData } from '../types';

export const powerLoadBreakSwitch: ThingData = {
  id: 'power-load-break-switch',
  slug: 'power-load-break-switch',
  simpleName: 'The Power Breaker',
  realName: 'Load Break Switch',
  category: 'power',
  color: '#4682B4',
  funFacts: [
    'This switch turns the power off when a line must be safe to touch.',
    'You pull a long handle to move the arm down.',
    'A hot flash can jump across the gap when the arm comes off.',
    'The arc guard takes that flash, so nothing gets hurt.',
    'People use it on big lines that carry a lot of power.',
    'It lets a worker work on a line with the power off.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Switch Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'handle', label: 'Pull Handle', realName: 'Handle', position: [0.34, 0.06, 0], finish: 'hull' },
    { id: 'arm', label: 'Move Arm', realName: 'Arm', position: [0.06, 0, 0], finish: 'titanium' },
    { id: 'contact', label: 'Touch Point', realName: 'Contact', position: [-0.16, 0, 0], finish: 'cold' },
    { id: 'arc', label: 'Arc Guard', realName: 'Arc Chute', position: [-0.16, 0.12, 0], finish: 'warning' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [-0.34, 0, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This switch turns the power off when a line must be safe to touch.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the box that holds the parts.'],
        ['The ', { text: 'pull handle', part: 'handle' }, ' is the long part you pull down.'],
        ['The ', { text: 'move arm', part: 'arm' }, ' is the bar that goes down with the handle.'],
        ['The ', { text: 'touch point', part: 'contact' }, ' is where the arm meets the wire.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'arc guard', part: 'arc' }, ' is the part that takes the hot flash.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the power in and out of the box.'],
        ['When you pull the handle, the arm comes off the touch point.'],
        ['A hot flash of power can jump across the gap.'],
        ['The arc guard takes that flash, so nothing gets hurt.'],
        ['Then the power is off, and a worker can work on the line.']
      ]
    }
  ],
  flow: [
    { partIds: ['handle'], caption: 'The pull handle is the long part you pull down', sentenceRef: 2 },
    { partIds: ['arm'], caption: 'The move arm goes down with the handle', sentenceRef: 3 },
    { partIds: ['contact'], caption: 'The touch point is where the arm meets the wire', sentenceRef: 4 },
    { partIds: ['arc'], caption: 'The arc guard takes the hot flash', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'pull handle', partId: 'handle' },
    { text: 'move arm', partId: 'arm' },
    { text: 'touch point', partId: 'contact' },
    { text: 'arc guard', partId: 'arc' }
  ]
};
