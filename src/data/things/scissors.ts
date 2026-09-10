import type { ThingData } from '../types'

export const scissors: ThingData = {
  id: 'scissors',
  slug: 'scissors',
  simpleName: 'Two-Blade Cutter',
  realName: 'Scissors',
  category: 'home',
  funFacts: [
    'The oldest scissors were one piece of bent metal: two blades and one spring, with no screw.',
    'Left-hand scissors put the blades the other way round so a left hand can see the cutting line — most scissors are made for right hands.',
    'Hair scissors have the thinnest, sharpest edges — they cut every single hair, not a layer of cloth.',
  ],
  parts: [
    { id: 'middle-screw', label: 'Middle Screw', realName: 'Pivot Screw', position: [-0.3, -0.4, 0], finish: 'warning' },
    { id: 'blade-pair', label: 'Blade Pair', realName: 'Blades', position: [0.55, 0.38, 0], finish: 'titanium' },
    { id: 'edge-faces', label: 'Edge Faces', realName: 'Bevels', position: [1.0, 0.34, 0], finish: 'cold' },
    { id: 'cross-point', label: 'Cross Point', realName: 'Shear Point', position: [0.3, -0.32, 0], finish: 'cold' },
    { id: 'long-arms', label: 'Long Arms', realName: 'Shanks', position: [-0.8, 0.55, 0], finish: 'cold' },
    { id: 'handle-loops', label: 'Handle Loops', realName: 'Handles', position: [-1.3, 0.6, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          { text: 'Scissors', dict: 'scissors' },
          ' look like two knives, but they are not.',
        ],
        [
          'They are one machine: two ',
          { text: 'long arms', part: 'long-arms' },
          ' meet at a turning point — a ',
          { text: 'pivot', dict: 'pivot' },
          '.',
        ],
        ['When one arm moves, the other moves the other way round, like a mirror.'],
      ],
    },
    {
      sentences: [
        [
          'Two ',
          { text: 'blades', part: 'blade-pair' },
          ' cross each other in an X.',
        ],
        ['Cutting does not happen all along a blade.'],
        [
          'It happens only where the two ',
          { text: 'edge faces', part: 'edge-faces' },
          ' press past each other and slide — the ',
          { text: 'cross point', part: 'cross-point' },
          '.',
        ],
        ['That point walks along the paper; on its left the paper is whole, and on its right there are two pieces.'],
      ],
    },
    {
      sentences: [
        [
          'Your hand presses the two ',
          { text: 'handle rings', part: 'handle-loops' },
          '.',
        ],
        [
          'The arms are a ',
          { text: 'lever', dict: 'lever' },
          ': handles long, blades short.',
        ],
        ['A small force from your far hand becomes a big force at the short blades.'],
        [
          'The ',
          { text: 'middle screw', part: 'middle-screw' },
          ' holds them close, but not too close — held too hard and they cannot turn, too open and they cannot bite the paper.',
        ],
      ],
    },
    {
      sentences: [
        ['The oldest scissors were one piece of bent metal: two blades and one spring, snapping open when your hand let go.'],
        ['They closed with a press and opened with a snap; there was no screw.'],
        ['Today scissors for cloth, hair, and the kitchen still use the same X, the same screw, and the same walk of the cross point.'],
      ],
    },
  ],
  flow: [
    { partIds: ['middle-screw'], caption: 'One turning point makes the two arms move like a mirror.', sentenceRef: 2 },
    { partIds: ['blade-pair'], caption: 'Two blades cross each other in an X.', sentenceRef: 3 },
    { partIds: ['edge-faces', 'cross-point'], caption: 'Cutting happens only where the two edge faces press past each other.', sentenceRef: 5 },
    { partIds: ['cross-point'], caption: 'The cross point walks along, and the paper comes apart into two pieces.', sentenceRef: 6 },
    { partIds: ['handle-loops', 'long-arms'], caption: 'Your hand presses the rings; long arms and short blades make the force bigger.', sentenceRef: 8 },
  ],
  keyExpressions: [
    { text: 'one turning point', partId: 'middle-screw' },
    { text: 'the other way round' },
    { text: 'press past each other', partId: 'edge-faces' },
    { text: 'the cross point walks along', partId: 'cross-point' },
    { text: 'two pieces', partId: 'blade-pair' },
    { text: 'long arms, short blades', partId: 'long-arms' },
    { text: 'a small force becomes a big one', partId: 'long-arms' },
    { text: 'close, but not too close', partId: 'middle-screw' },
    { text: 'the same X', partId: 'blade-pair' },
  ],
  color: '#FB7185',
}
