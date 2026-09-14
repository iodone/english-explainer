import type { ThingData } from '../types';

export const homeCanOpener: ThingData = {
  id: 'home-can-opener',
  slug: 'home-can-opener',
  simpleName: 'The Tin Opener',
  realName: 'Can Opener',
  category: 'home',
  color: '#808080',
  funFacts: [
    'A can opener cuts the top off a tin with one turn of the knob.',
    'The two wheels hold the edge of the tin and pull it along.',
    'You do not need much force, because the wheels do the work.',
    'The cut wheel leaves no sharp bits on the tin.',
    'Some of these have a small part that holds the lid after it comes off.',
    'You wash it by hand, or the food on it will make it smell.'
  ],
  parts: [
    { id: 'grip', label: 'Hold Grip', realName: 'Handle', position: [0.5, 0.04, 0], finish: 'hull' },
    { id: 'turn', label: 'Turn Knob', realName: 'Turning Knob', position: [0.36, 0.04, 0], finish: 'cold' },
    { id: 'blade', label: 'Cut Wheel', realName: 'Cutting Wheel', position: [0, 0, 0], finish: 'warning' },
    { id: 'gear', label: 'Pull Wheel', realName: 'Feed Wheel', position: [0, 0.14, 0], finish: 'titanium' },
    { id: 'jaw', label: 'Lid Hold', realName: 'Lid Gripper', position: [0.07, -0.12, 0], finish: 'titanium' },
    { id: 'body', label: 'Main Body', realName: 'Opener Body', position: [0.2, 0.02, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This small pair of wheels cuts the top off a tin and holds the lid.'],
        ['The ', { text: 'hold grip', part: 'grip' }, ' is the part your hand holds.'],
        ['The ', { text: 'turn knob', part: 'turn' }, ' is the part you turn to move the wheels.'],
        ['The ', { text: 'cut wheel', part: 'blade' }, ' is the sharp wheel that cuts through the tin.'],
        ['The ', { text: 'pull wheel', part: 'gear' }, ' is the wheel with teeth that pulls the tin along.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'lid hold', part: 'jaw' }, ' is the part that holds the lid after it comes off.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the part that holds the two wheels in place.'],
        ['You put the tin between the two wheels and turn the knob.'],
        ['The wheels turn, the cut wheel cuts, and the tin moves along.'],
        ['You can open a whole tin in a few seconds this way.'],
        ['The cut edge is not sharp, so your hand is safe.']
      ]
    }
  ],
  flow: [
    { partIds: ['turn'], caption: 'The turn knob is what you turn', sentenceRef: 2 },
    { partIds: ['blade'], caption: 'The cut wheel cuts through the tin', sentenceRef: 3 },
    { partIds: ['gear'], caption: 'The pull wheel pulls the tin along', sentenceRef: 4 },
    { partIds: ['jaw'], caption: 'The lid hold keeps the lid', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'turn knob', partId: 'turn' },
    { text: 'cut wheel', partId: 'blade' },
    { text: 'pull wheel', partId: 'gear' },
    { text: 'lid hold', partId: 'jaw' }
  ]
};
