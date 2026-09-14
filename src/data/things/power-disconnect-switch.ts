import type { ThingData } from '../types';

export const powerDisconnectSwitch: ThingData = {
  id: 'power-disconnect-switch',
  slug: 'power-disconnect-switch',
  simpleName: 'The Power Off Switch',
  realName: 'Disconnect Switch',
  category: 'power',
  color: '#B22222',
  funFacts: [
    'This switch is a safe way to cut all the power on a line.',
    'You pull a long handle, and the move blade comes away.',
    'The power can not jump across the open gap.',
    'You can put a lock on it, so no one turns it on.',
    'Workers use it on big lines and on machines.',
    'It keeps a worker safe while the work is done.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Switch Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'handle', label: 'Pull Handle', realName: 'Handle', position: [0.34, 0.06, 0], finish: 'hull' },
    { id: 'blade', label: 'Move Blade', realName: 'Blade', position: [0.06, 0, 0], finish: 'titanium' },
    { id: 'clamp', label: 'Line Clamp', realName: 'Clamp', position: [-0.2, 0, 0], finish: 'cold' },
    { id: 'sign', label: 'Lock Sign', realName: 'Lock Tab', position: [0.2, -0.14, 0], finish: 'warning' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [-0.36, 0, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This switch is a safe way to cut all the power on a line.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the box that holds the parts.'],
        ['The ', { text: 'pull handle', part: 'handle' }, ' is the long part you pull down.'],
        ['The ', { text: 'move blade', part: 'blade' }, ' is the bar that comes away from the line.'],
        ['The ', { text: 'line clamp', part: 'clamp' }, ' holds the wire on the box.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'lock sign', part: 'sign' }, ' shows where you put a lock.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the power in and out.'],
        ['When you pull the handle, the move blade comes up.'],
        ['Now the power can not cross the open gap.'],
        ['You put a lock on the lock sign, so no one can turn it on.'],
        ['Then a worker can work on the line with no power in it.']
      ]
    }
  ],
  flow: [
    { partIds: ['handle'], caption: 'The pull handle is the long part you pull down', sentenceRef: 2 },
    { partIds: ['blade'], caption: 'The move blade comes away from the line', sentenceRef: 3 },
    { partIds: ['clamp'], caption: 'The line clamp holds the wire on the box', sentenceRef: 4 },
    { partIds: ['sign'], caption: 'The lock sign shows where you put a lock', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'pull handle', partId: 'handle' },
    { text: 'move blade', partId: 'blade' },
    { text: 'line clamp', partId: 'clamp' },
    { text: 'lock sign', partId: 'sign' }
  ]
};
