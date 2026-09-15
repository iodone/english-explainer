import type { ThingData } from '../types';

export const spaceRobotArm: ThingData = {
  id: 'space-robot-arm',
  slug: 'space-robot-arm',
  simpleName: 'The Long Arm',
  realName: 'Robotic Arm',
  category: 'space',
  color: '#8E9AA6',
  funFacts: [
    'This arm is strong enough to lift a car in space.',
    'In space a heavy load has no weight, but it still has a lot of push.',
    'The arm moves at a slow speed so it does not shake the station.',
    'A person can drive the arm from a seat inside with a stick and a screen.',
    'People on the ground can send a plan up and the arm will follow it.',
    'The same arm brings in small ships that come with food and tools.'
  ],
  parts: [
    { id: 'boom', label: 'Long Arm', realName: 'Arm Boom', position: [0, 0, 0], finish: 'hull' },
    { id: 'shoulder', label: 'Shoulder Joint', realName: 'Shoulder Joint', position: [-0.42, -0.02, 0], finish: 'hull' },
    { id: 'elbow', label: 'Elbow Joint', realName: 'Elbow Joint', position: [0.4, 0, 0], finish: 'titanium' },
    { id: 'hand', label: 'Hand', realName: 'End Effector', position: [0.82, 0, 0], finish: 'hull' },
    { id: 'camera', label: 'Eye Camera', realName: 'Camera', position: [0.62, 0.14, 0.1], finish: 'cold' },
    { id: 'motor', label: 'Turn Motor', realName: 'Motor', position: [-0.42, 0.2, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This long arm is on the outside of a space station.'],
        ['The ', { text: 'long arm', part: 'boom' }, ' can reach out and take hold of a load.'],
        ['The ', { text: 'shoulder joint', part: 'shoulder' }, ' turns the whole arm from side to side.'],
        ['The ', { text: 'elbow joint', part: 'elbow' }, ' bends the arm so the hand can go near a thing.'],
        ['The ', { text: 'turn motor', part: 'motor' }, ' pushes the arm with a lot of force.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hand', part: 'hand' }, ' holds the load so it does not float away.'],
        ['The ', { text: 'eye camera', part: 'camera' }, ' shows the people what the hand is doing.'],
        ['A person inside the station can move the arm with a stick and a screen.'],
        ['A person on the ground can also send a plan up to the arm.'],
        ['The arm moves very slow, because a fast move could shake the whole station.'],
        ['With this arm, people can build and fix things outside without going out.']
      ]
    }
  ],
  flow: [
    { partIds: ['boom'], caption: 'The long arm can reach out and take hold of a load', sentenceRef: 1 },
    { partIds: ['shoulder'], caption: 'The shoulder joint turns the whole arm from side to side', sentenceRef: 2 },
    { partIds: ['elbow'], caption: 'The elbow joint bends the arm so the hand can go near a thing', sentenceRef: 3 },
    { partIds: ['hand'], caption: 'The hand holds the load so it does not float away', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'long arm', partId: 'boom' },
    { text: 'shoulder joint', partId: 'shoulder' },
    { text: 'elbow joint', partId: 'elbow' },
    { text: 'eye camera', partId: 'camera' }
  ]
};
