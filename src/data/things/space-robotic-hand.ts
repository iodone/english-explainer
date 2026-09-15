import type { ThingData } from '../types';

export const spaceRoboticHand: ThingData = {
  id: 'space-robotic-hand',
  slug: 'space-robotic-hand',
  simpleName: 'The Space Hand',
  realName: 'Robotic End Effector',
  category: 'space',
  color: '#9AA6B2',
  funFacts: [
    'This hand can hold a tool and turn it, just like a person does.',
    'The fingers are strong, but they close very slow.',
    'The eye helps the people inside see where the fingers are.',
    'The nerve wire carries both power and orders from the arm.',
    'A lock pin keeps the fingers from opening on their own.',
    'Space hands must work in the cold and in the hot sun.'
  ],
  parts: [
    { id: 'fingers', label: 'Grab Fingers', realName: 'Grab Fingers', position: [0, 0.3, 0.15], finish: 'hull' },
    { id: 'wrist', label: 'Wrist', realName: 'Wrist Joint', position: [0, 0, 0.1], finish: 'titanium' },
    { id: 'motor', label: 'Move Motor', realName: 'Motor', position: [-0.3, -0.2, 0.05], finish: 'cold' },
    { id: 'camera', label: 'Eye', realName: 'Camera', position: [0.2, 0.2, 0.25], finish: 'cold' },
    { id: 'lock', label: 'Lock Pin', realName: 'Lock Pin', position: [0, -0.15, 0.2], finish: 'warning' },
    { id: 'cable', label: 'Nerve Wire', realName: 'Cable', position: [-0.4, 0, -0.1], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This hand sits at the end of a space arm and holds on to things.'],
        ['The ', { text: 'grab fingers', part: 'fingers' }, ' close around a tool or a box.'],
        ['The ', { text: 'turn joint', part: 'wrist' }, ' turns the hand so it can point in any way.'],
        ['The ', { text: 'move motor', part: 'motor' }, ' gives the hand the push to open and close.'],
        ['The ', { text: 'eye', part: 'camera' }, ' shows the people inside what the hand is near.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'lock pin', part: 'lock' }, ' holds the fingers shut when the hand carries a heavy load.'],
        ['The ', { text: 'nerve wire', part: 'cable' }, ' brings power and orders from the arm.'],
        ['A person can move the hand with a stick, or the arm can do it on its own.'],
        ['The hand is slow and strong, so it does not drop what it holds.'],
        ['It can turn a small screw or hold a big box in place.'],
        ['This hand lets people work outside the station and stay safe inside.']
      ]
    }
  ],
  flow: [
    { partIds: ['fingers'], caption: 'The grab fingers close around a tool or a box', sentenceRef: 1 },
    { partIds: ['wrist'], caption: 'The turn joint turns the hand so it can point in any way', sentenceRef: 2 },
    { partIds: ['motor'], caption: 'The move motor gives the hand the push to open and close', sentenceRef: 3 },
    { partIds: ['lock'], caption: 'The lock pin holds the fingers shut when the hand carries a heavy load', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'grab fingers', partId: 'fingers' },
    { text: 'turn joint', partId: 'wrist' },
    { text: 'move motor', partId: 'motor' },
    { text: 'nerve wire', partId: 'cable' }
  ]
};
