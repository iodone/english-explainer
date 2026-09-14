import type { ThingData } from '../types';

export const spaceManipulatorArm: ThingData = {
  id: 'space-manipulator-arm',
  slug: 'space-manipulator-arm',
  simpleName: 'The Space Arm',
  realName: 'Manipulator Arm',
  category: 'space',
  color: '#808080',
  funFacts: [
    'This arm can work outside a ship when it is not safe for a person.',
    'It has many joints, so it can reach around a corner.',
    'The people inside move it with sticks and buttons and watch it on a screen.',
    'The arm can hold a ship that comes in and bring it close.',
    'It must move slowly, or it can hit the ship and break something.',
    'These arms are used on space stations and on some ships that fly far.'
  ],
  parts: [
    { id: 'arm', label: 'Long Arm', realName: 'Arm Boom', position: [0, -0.06, 0], finish: 'hull' },
    { id: 'joint', label: 'Turn Joint', realName: 'Rotary Joint', position: [0, 0.26, 0], finish: 'titanium' },
    { id: 'hand', label: 'Grab Hand', realName: 'Gripper', position: [0, 0.36, 0], finish: 'titanium' },
    { id: 'finger', label: 'Hold Fingers', realName: 'Grip Fingers', position: [0.07, 0.47, 0], finish: 'hull' },
    { id: 'eye', label: 'Watch Eye', realName: 'Camera Eye', position: [0.11, 0.36, 0.07], finish: 'cold' },
    { id: 'root', label: 'Root Part', realName: 'Mounting Plate', position: [0, -0.4, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This long arm can pick up things outside a ship and move them.'],
        ['The ', { text: 'long arm', part: 'arm' }, ' is the part that reaches out into space.'],
        ['The ', { text: 'turn joint', part: 'joint' }, ' lets each part of the arm turn and bend.'],
        ['The ', { text: 'grab hand', part: 'hand' }, ' is the part at the end that holds a thing.'],
        ['The ', { text: 'hold fingers', part: 'finger' }, ' open and close to hold things of many sizes.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'watch eye', part: 'eye' }, ' is a small camera that helps the people inside.'],
        ['The ', { text: 'root part', part: 'root' }, ' is where the arm is held on the ship.'],
        ['A person inside the ship moves the arm with a stick and some buttons.'],
        ['The arm can move very big things with no help from a person.'],
        ['It must move slowly, so it does not hit the ship or the people.'],
        ['This arm is used to catch ships, to move boxes, and to fix things outside.']
      ]
    }
  ],
  flow: [
    { partIds: ['joint'], caption: 'The turn joint lets each part of the arm bend', sentenceRef: 2 },
    { partIds: ['hand'], caption: 'The grab hand holds a thing at the end', sentenceRef: 3 },
    { partIds: ['eye'], caption: 'The watch eye helps the people inside', sentenceRef: 5 },
    { partIds: ['root'], caption: 'The root part holds the arm on the ship', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'long arm', partId: 'arm' },
    { text: 'turn joint', partId: 'joint' },
    { text: 'grab hand', partId: 'hand' },
    { text: 'watch eye', partId: 'eye' }
  ]
};
