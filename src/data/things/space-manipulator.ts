import type { ThingData } from '../types';

export const spaceManipulator: ThingData = {
  id: 'space-manipulator',
  slug: 'space-manipulator',
  simpleName: 'The Space Arm',
  realName: 'Robotic Arm',
  category: 'space',
  color: '#4682B4',
  funFacts: [
    'This is a long arm that can move things in space.',
    'It is not alive — people control it from inside the space thing.',
    'It can pick up very heavy things that people could not move by themselves.',
    'It has many parts that bend, like your arm.',
    'It has a hand at the end that can hold things.',
    'Without it, many things in space could not be done.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'boom', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'effector', position: [0, -0.25, 0], finish: 'titanium' },
    { id: 'top', label: 'top', realName: 'shoulder', position: [0, 0.2, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'joint', position: [0, 0.05, 0], finish: 'warning' },
    { id: 'plug', label: 'plug', realName: 'wrist', position: [0, -0.18, 0], finish: 'titanium' },
    { id: 'power', label: 'power', realName: 'motor', position: [0, 0.1, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This is a long arm that can move things in space.'],
        ['People control it from inside the space thing.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long part that reaches out.'],
        ['The ', { text: 'end', part: 'end' }, ' at the tip is the hand that holds things.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'top', part: 'top' }, ' is where the ', { text: 'body', part: 'body' }, ' joins the space thing.'],
        ['The ', { text: 'inside', part: 'inside' }, ' lets the ', { text: 'body', part: 'body' }, ' bend in many ways.'],
        ['The ', { text: 'power', part: 'power' }, ' inside moves each ', { text: 'inside', part: 'inside' }, '.'],
        ['The ', { text: 'plug', part: 'plug' }, ' near the ', { text: 'end', part: 'end' }, ' lets the hand move around.'],
        ['It can pick up very heavy things that people could not move.'],
        ['Without this arm, many things in space could not be done.'],
        ['It works like your arm, but much bigger and much stronger.']
      ]
    }
  ],
  flow: [
    { partIds: ['top'], caption: 'The shoulder joins the arm to the space thing', sentenceRef: 4 },
    { partIds: ['inside', 'power'], caption: 'The joints and motors bend the arm', sentenceRef: 6 },
    { partIds: ['plug', 'end'], caption: 'The end part lets the hand move', sentenceRef: 7 },
    { partIds: ['body'], caption: 'The boom reaches out to pick things up', sentenceRef: 8 }
  ],
  keyExpressions: [
    { text: 'manipulator', partId: 'body' },
    { text: 'effector', partId: 'end' },
    { text: 'joint', partId: 'inside' },
    { text: 'boom', partId: 'body' }
  ]
};