import type { ThingData } from '../types';

export const powerCapacitorBank: ThingData = {
  id: 'power-capacitor-bank',
  slug: 'power-capacitor-bank',
  simpleName: 'The Power Saver Group',
  realName: 'Capacitor Bank',
  category: 'power',
  color: '#4169E1',
  funFacts: [
    'These cans can give a lot of power in a very short time.',
    'A big motor needs a push to start, and these cans give that push.',
    'They can take power in and give it back much faster than a battery can.',
    'A group of cans can hold power for a while after the power line stops.',
    'These groups are found in power plants, trains, and big machines.',
    'The state light shows when the cans are full or need to rest.'
  ],
  parts: [
    { id: 'rack', label: 'Holder Frame', realName: 'Mounting Rack', position: [0, 0, 0], finish: 'hull' },
    { id: 'cell', label: 'Power Can', realName: 'Capacitor Cell', position: [0, 0.02, 0], finish: 'titanium' },
    { id: 'bar', label: 'Top Bar', realName: 'Bus Bar', position: [0, 0.2, 0], finish: 'cold' },
    { id: 'board', label: 'Small Brain', realName: 'Control Board', position: [0, -0.06, 0.12], finish: 'hull' },
    { id: 'light', label: 'State Light', realName: 'Status Lamp', position: [0.15, 0.1, 0.12], finish: 'warning' },
    { id: 'wire', label: 'Safe Line', realName: 'Ground Wire', position: [-0.18, -0.18, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This group of cans saves power for the time when it is needed.'],
        ['The ', { text: 'holder frame', part: 'rack' }, ' keeps every can in its place.'],
        ['Each ', { text: 'power can', part: 'cell' }, ' holds a small bit of power inside.'],
        ['The ', { text: 'top bar', part: 'bar' }, ' takes power in and out of all the cans.'],
        ['A ', { text: 'small brain', part: 'board' }, ' watches them and stops the power if something goes wrong.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'state light', part: 'light' }, ' tells you when the group is full or empty.'],
        ['The ', { text: 'safe line', part: 'wire' }, ' sends power away if the box gets too hot.'],
        ['Power comes in fast, and the cans take it in a very short time.'],
        ['They can give it back just as fast when a big motor needs a push.'],
        ['This helps keep the power line the same for the whole town.'],
        ['These groups are found in power plants and in big trains.']
      ]
    }
  ],
  flow: [
    { partIds: ['rack'], caption: 'The holder frame keeps every can in its place', sentenceRef: 1 },
    { partIds: ['cell'], caption: 'Each power can stores a small bit of power', sentenceRef: 2 },
    { partIds: ['bar'], caption: 'The top bar moves power in and out of the cans', sentenceRef: 3 },
    { partIds: ['light'], caption: 'The state light shows when the group is full', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'holder frame', partId: 'rack' },
    { text: 'power can', partId: 'cell' },
    { text: 'top bar', partId: 'bar' },
    { text: 'state light', partId: 'light' }
  ]
};
