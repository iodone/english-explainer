import type { ThingData } from '../types';

export const spaceMeteorShield: ThingData = {
  id: 'space-meteor-shield',
  slug: 'space-meteor-shield',
  simpleName: 'The Rock Shield',
  realName: 'Meteor Shield',
  category: 'space',
  color: '#A8B8C0',
  funFacts: [
    'This wall of layers keeps small space rocks away from a ship.',
    'A small rock can go very fast and make a hole in a ship.',
    'The outer layer takes the hit and breaks the rock apart.',
    'The pieces are slow and small, and the middle layer takes them.',
    'Then the people inside do not get hurt.',
    'The wall can take many small hits and still work.'
  ],
  parts: [
    { id: 'outer', label: 'Outer Layer', realName: 'Outer Wall', position: [0, 0, 0], finish: 'hull' },
    { id: 'middle', label: 'Middle Layer', realName: 'Middle Wall', position: [0, 0, -0.05], finish: 'cold' },
    { id: 'inner', label: 'Inner Wall', realName: 'Inner Wall', position: [0, 0, -0.1], finish: 'hull' },
    { id: 'frame', label: 'Strong Frame', realName: 'Frame', position: [0, 0, -0.05], finish: 'titanium' },
    { id: 'sensor', label: 'Hit Sense', realName: 'Hit Sensor', position: [0, 0.2, 0], finish: 'warning' },
    { id: 'mount', label: 'Mount Ring', realName: 'Mount', position: [0, 0, -0.14], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This wall of layers keeps small space rocks away from a ship.'],
        ['The ', { text: 'outer layer', part: 'outer' }, ' is the first wall that a rock hits.'],
        ['The ', { text: 'middle layer', part: 'middle' }, ' is the soft wall that catches the small pieces.'],
        ['The ', { text: 'inner wall', part: 'inner' }, ' is the last wall that keeps the ship safe.'],
        ['The ', { text: 'strong frame', part: 'frame' }, ' holds all the layers in place.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hit sense', part: 'sensor' }, ' tells the computer when a rock hits the wall.'],
        ['The ', { text: 'mount ring', part: 'mount' }, ' holds the wall on the ship.'],
        ['A small rock can go very fast and make a hole in a ship.'],
        ['The outer layer takes the hit and breaks the rock apart.'],
        ['The pieces are slow and small, and the middle layer takes them.'],
        ['Then the ship is safe, and the people inside do not get hurt.']
      ]
    }
  ],
  flow: [
    { partIds: ['outer'], caption: 'The outer layer is the first wall that a rock hits', sentenceRef: 1 },
    { partIds: ['middle'], caption: 'The middle layer catches the small pieces', sentenceRef: 2 },
    { partIds: ['inner'], caption: 'The inner wall keeps the ship safe', sentenceRef: 3 },
    { partIds: ['frame'], caption: 'The strong frame holds all the layers in place', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'outer layer', partId: 'outer' },
    { text: 'middle layer', partId: 'middle' },
    { text: 'inner wall', partId: 'inner' },
    { text: 'strong frame', partId: 'frame' }
  ]
};
