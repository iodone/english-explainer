import type { ThingData } from '../types';

export const homeGarage: ThingData = {
  id: 'home-garage',
  slug: 'home-garage',
  simpleName: 'The Car House',
  realName: 'Garage',
  category: 'home',
  color: '#D2B48C',
  funFacts: [
    'This is a place to keep your car safe.',
    'It is usually next to your house.',
    'Some people use it to keep other things too.',
    'The door can go up and down.',
    'Some of them have a thing that opens the door for you.',
    'You can also use it to fix your car.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'structure', position: [0, 0, 0], finish: 'hull' },
    { id: 'top', label: 'top', realName: 'roof', position: [0, 0.25, 0], finish: 'cold' },
    { id: 'end', label: 'end', realName: 'door', position: [0, -0.15, 0], finish: 'titanium' },
    { id: 'inside', label: 'inside', realName: 'floor', position: [0, -0.25, 0], finish: 'hull' },
    { id: 'power', label: 'power', realName: 'opener', position: [0, 0.2, 0], finish: 'warning' },
    { id: 'plug', label: 'plug', realName: 'lock', position: [0.24, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a house for your car.'],
        ['It is a room next to your house.'],
        ['It keeps your car safe from the rain and cold and from people who want to take it.'],
        ['You can also keep other things inside it.']
      ]
    },
    {
      sentences: [
        ['When you come home, you drive your car into this room.'],
        ['You use the ', { text: 'power', part: 'power' }, ' to close the big ', { text: 'end', part: 'end' }, '.'],
        ['The ', { text: 'end', part: 'end' }, ' goes down and closes the room.'],
        ['The ', { text: 'plug', part: 'plug' }, ' keeps the door closed so no one can get in.'],
        ['The ', { text: 'top', part: 'top' }, ' keeps the rain and sun off your car.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is where your car sits.'],
        ['The ', { text: 'body', part: 'body' }, ' is the walls that hold everything up.']
      ]
    }
  ],
  flow: [
    { partIds: ['inside'], caption: 'You drive your car into the room', sentenceRef: 0 },
    { partIds: ['power', 'end'], caption: 'The power closes the big door', sentenceRef: 1 },
    { partIds: ['plug'], caption: 'The lock keeps the door closed', sentenceRef: 3 },
    { partIds: ['top', 'body'], caption: 'The top and body keep the car safe', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'garage', partId: 'body' },
    { text: 'door', partId: 'end' },
    { text: 'opener', partId: 'power' },
    { text: 'lock', partId: 'plug' }
  ]
};