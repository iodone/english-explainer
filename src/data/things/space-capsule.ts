import type { ThingData } from '../types';

export const spaceCapsule: ThingData = {
  id: 'space-capsule',
  slug: 'space-capsule',
  simpleName: 'The Space Box',
  realName: 'Space Capsule',
  category: 'space',
  color: '#4682B4',
  funFacts: [
    'This is the box that brings people back to the ground from space.',
    'It gets very hot when it comes back down through the air.',
    'The bottom has a special cover that takes the heat so the people stay safe.',
    'It has seats that hold the people in place during the fast ride.',
    'It comes down under a big piece of cloth that slows it down.',
    'The top part opens up so the people can get out when it lands.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'hull', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'base', position: [0, -0.2, 0], finish: 'warning' },
    { id: 'top', label: 'top', realName: 'hatch', position: [0, 0.2, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'cabin', position: [0, 0, 0], finish: 'hull' },
    { id: 'heat-shield', label: 'heat-shield', realName: 'heat shield', position: [0, -0.25, 0], finish: 'warning' },
    { id: 'seat', label: 'seat', realName: 'seat', position: [0, 0.05, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This is the box that brings people back to the ground from space.'],
        ['The ', { text: 'body', part: 'body' }, ' is a round room that holds the people inside.'],
        ['It is not very big, but it keeps the people safe on the long ride.'],
        ['The ', { text: 'seat', part: 'seat' }, ' holds each person in place so they do not move around.']
      ]
    },
    {
      sentences: [
        ['When the box comes back down, the ', { text: 'end', part: 'end' }, ' faces the ground.'],
        ['The ', { text: 'heat-shield', part: 'heat-shield' }, ' on the ', { text: 'end', part: 'end' }, ' takes all the heat from the air around it.'],
        ['The ', { text: 'inside', part: 'inside' }, ' stays cool while the outside gets very, very hot.'],
        ['After the hot part is over, a big piece of cloth opens up to slow the box down.'],
        ['Then some more cloths open up to slow it down even more.'],
        ['The ', { text: 'top', part: 'top' }, ' opens so the people can get out after it lands.'],
        ['The ', { text: 'body', part: 'body' }, ' is made of very strong stuff to keep everyone safe.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'inside'], caption: 'The box holds the people inside', sentenceRef: 1 },
    { partIds: ['seat'], caption: 'Seats hold each person in place', sentenceRef: 3 },
    { partIds: ['end', 'heat-shield'], caption: 'The bottom takes all the heat', sentenceRef: 5 },
    { partIds: ['top'], caption: 'The top opens so people can get out', sentenceRef: 9 }
  ],
  keyExpressions: [
    { text: 'capsule', partId: 'body' },
    { text: 'heat shield', partId: 'heat-shield' },
    { text: 'hatch', partId: 'top' },
    { text: 'reentry', partId: 'end' }
  ]
};