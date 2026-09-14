import type { ThingData } from '../types';

export const spaceTug: ThingData = {
  id: 'space-tug',
  slug: 'space-tug',
  simpleName: 'The Space Puller',
  realName: 'Space Tug',
  category: 'space',
  color: '#4682B4',
  funFacts: [
    'This thing can pull heavy things in space.',
    'It uses fire stuff to move other things.',
    'It can push broken things back to the ground place.',
    'It works like a car that tows other cars.',
    'It can move things between different going-around paths.',
    'It helps put big things together in space.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'chassis', position: [0, 0, 0], finish: 'titanium' },
    { id: 'end', label: 'end', realName: 'engine', position: [0, -0.15, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'docking port', position: [0, 0.175, 0], finish: 'hull' },
    { id: 'inside', label: 'inside', realName: 'cargo bay', position: [0, 0, 0], finish: 'hull' },
    { id: 'power', label: 'power', realName: 'thruster', position: [-0.19, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'plug', realName: 'connection', position: [0.19, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a space thing that pulls other things.'],
        ['It is like a car that ', { text: 'tows', part: 'body', dict: 'tow' }, ' broken cars.'],
        ['But it works far away from the ground, in the dark up there.'],
        ['It can push and pull very heavy things.']
      ]
    },
    {
      sentences: [
        ['When a thing breaks in space, this thing goes to help.'],
        ['It goes close to the broken thing.'],
        ['Then it holds on to it and moves it with its ', { text: 'power', part: 'power' }, '.'],
        ['It can take the broken thing back down to the ground using its ', { text: 'end', part: 'end' }, '.'],
        ['Or it can put it in a new place using the ', { text: 'top', part: 'top' }, '.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is very strong and can hold things that are much bigger than it.'],
        ['It uses a ', { text: 'plug', part: 'plug' }, ' to hold on to other things.']
      ]
    }
  ],
  flow: [
    { partIds: ['power'], caption: 'The power makes the fire stuff come out', sentenceRef: 0 },
    { partIds: ['end'], caption: 'The fire stuff pushes the body forward', sentenceRef: 2 },
    { partIds: ['top'], caption: 'The top finds the thing to pull', sentenceRef: 4 },
    { partIds: ['inside', 'body'], caption: 'The inside holds on and moves the thing', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'tow', partId: 'body' },
    { text: 'tug', partId: 'end' },
    { text: 'orbit', partId: 'top' },
    { text: 'docking', partId: 'plug' }
  ]
};