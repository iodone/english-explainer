import type { ThingData } from '../types';

export const powerFuseBox: ThingData = {
  id: 'power-fuse-box',
  slug: 'power-fuse-box',
  simpleName: 'The Safety Power Box',
  realName: 'Fuse Box',
  category: 'power',
  color: '#808080',
  funFacts: [
    'A fuse is a small part that gives up first so the house does not get hurt.',
    'One box can watch over many power lines in a house.',
    'If too much power moves, a safety part opens the line.',
    'A person should turn off the main power before working here.',
    'Some safety parts can be used again, but a fuse must be changed.',
    'The box also helps stop fires before they can start.'
  ],
  parts: [
    { id: 'body', label: 'Box Shell', realName: 'Enclosure', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Door Side', realName: 'Hinge Side', position: [0, 0, 0.16], finish: 'cold' },
    { id: 'top', label: 'Top Plate', realName: 'Panel Cover', position: [0, 0.22, 0], finish: 'titanium' },
    { id: 'inside', label: 'Safety Wire', realName: 'Fuse Carrier', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'Power In', realName: 'Main Feed Terminal', position: [0, -0.18, 0], finish: 'titanium' },
    { id: 'power', label: 'Power Out', realName: 'Circuit Breaker', position: [0, 0.1, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This is a box that helps keep power safe in a house.'],
        ['The ', { text: 'body', part: 'body' }, ' is the hard outside that holds all the parts.'],
        ['The ', { text: 'top', part: 'top' }, ' is a plate that can come off when someone needs to look inside.'],
        ['The ', { text: 'end', part: 'end' }, ' is the side where the door turns.'],
        ['The ', { text: 'inside', part: 'inside' }, ' holds small safety wires.']
      ]
    },
    {
      sentences: [
        ['Each small wire is made to break if too much power goes through it.'],
        ['The ', { text: 'plug', part: 'plug' }, ' is where power from outside first comes into the box.'],
        ['The ', { text: 'power', part: 'power' }, ' parts send that power to different rooms.'],
        ['If one line has a problem, its safety part stops the flow.'],
        ['A person can open the ', { text: 'top', part: 'top' }, ' and see the ', { text: 'inside', part: 'inside' }, '.'],
        ['The ', { text: 'end', part: 'end' }, ' and ', { text: 'body', part: 'body' }, ' work together to keep dust and hands away from the ', { text: 'plug', part: 'plug' }, ' and ', { text: 'power', part: 'power' }, '.']
      ]
    }
  ],
  flow: [
    { partIds: ['plug'], caption: 'Power first comes into the box', sentenceRef: 6 },
    { partIds: ['inside'], caption: 'A safety wire breaks when too much power moves', sentenceRef: 5 },
    { partIds: ['power'], caption: 'Safety parts send power to different rooms', sentenceRef: 7 },
    { partIds: ['body', 'top', 'end'], caption: 'The box keeps hands and dust away', sentenceRef: 10 }
  ],
  keyExpressions: [
    { text: 'fuse box', partId: 'body' },
    { text: 'fuse carrier', partId: 'inside' },
    { text: 'circuit breaker', partId: 'power' },
    { text: 'main feed', partId: 'plug' }
  ]
};
