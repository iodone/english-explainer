import type { ThingData } from '../types';

export const spaceAirlock: ThingData = {
  id: 'space-airlock',
  slug: 'space-airlock',
  simpleName: 'The Space Door',
  realName: 'Airlock',
  category: 'space',
  color: '#B0C4DE',
  funFacts: [
    'This thing lets people go from inside to outside without letting all the air out.',
    'It has two doors that never open at the same time.',
    'It is like a small room between two places.',
    'People put on their space clothes inside this thing.',
    'It can also be used to move things in and out.',
    'Every space house has at least one of these.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'chamber', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'outer door', position: [0, -0.15, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'inner door', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'control panel', position: [0.24, 0, 0], finish: 'warning' },
    { id: 'power', label: 'power', realName: 'air pump', position: [-0.24, 0, 0], finish: 'hull' },
    { id: 'plug', label: 'plug', realName: 'seal', position: [0, 0, 0.24], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This is a special door for space.'],
        ['It is a small room between the inside and the outside.'],
        ['The ', { text: 'body', part: 'body' }, ' has two doors that never open at the same time.'],
        ['This stops the air from going out into space.']
      ]
    },
    {
      sentences: [
        ['When a person wants to go outside, they go into this room first.'],
        ['They close the ', { text: 'top', part: 'top' }, ' door behind them.'],
        ['Then the ', { text: 'power', part: 'power' }, ' takes the air out of the room.'],
        ['When there is no air left, the ', { text: 'end', part: 'end' }, ' door opens.'],
        ['The person can now go out into space.'],
        ['The ', { text: 'inside', part: 'inside' }, ' lets the person control everything.'],
        ['The ', { text: 'plug', part: 'plug' }, ' keeps the air from getting out around the doors.']
      ]
    }
  ],
  flow: [
    { partIds: ['top'], caption: 'The person goes in and closes the top door', sentenceRef: 1 },
    { partIds: ['power'], caption: 'The power takes the air out of the room', sentenceRef: 2 },
    { partIds: ['end'], caption: 'The end door opens when there is no air', sentenceRef: 3 },
    { partIds: ['inside', 'plug'], caption: 'The inside controls everything and the plug keeps air in', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'airlock', partId: 'body' },
    { text: 'chamber', partId: 'body' },
    { text: 'seal', partId: 'plug' },
    { text: 'pump', partId: 'power' }
  ]
};