import type { ThingData } from '../types';

export const powerArcFaultDetector: ThingData = {
  id: 'power-arc-fault-detector',
  slug: 'power-arc-fault-detector',
  simpleName: 'The Fire Power Finder',
  realName: 'Arc Fault Detector',
  category: 'power',
  color: '#B22222',
  funFacts: [
    'This box looks for bad jumps of power that can start a fire.',
    'It sits in the power box in your home and watches all day.',
    'It can turn off the power very fast, before a fire can start.',
    'It finds bad jumps that a normal power switch does not find.',
    'It works with the power that comes to your home.',
    'You can push a test button to see that it still works.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Body Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'board', label: 'Sense Board', realName: 'Circuit Board', position: [0, 0, 0.06], finish: 'cold' },
    { id: 'coil', label: 'Pick Coil', realName: 'Current Coil', position: [-0.14, 0, 0], finish: 'titanium' },
    { id: 'clamp', label: 'Wire Clamp', realName: 'Wire Clamp', position: [-0.14, 0.1, 0], finish: 'hull' },
    { id: 'light', label: 'Warn Light', realName: 'Warning Light', position: [0.14, 0.1, 0], finish: 'warning' },
    { id: 'button', label: 'Test Button', realName: 'Test Button', position: [0.14, -0.08, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['A bad wire can make a small fire start inside a wall.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the box that holds the parts.'],
        ['The ', { text: 'sense board', part: 'board' }, ' is the part that reads the power in the wire.'],
        ['The ', { text: 'pick coil', part: 'coil' }, ' is the ring that goes around the wire.'],
        ['The ', { text: 'wire clamp', part: 'clamp' }, ' holds the coil on the wire.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'warn light', part: 'light' }, ' comes on when the box finds a bad wire.'],
        ['The ', { text: 'test button', part: 'button' }, ' lets you try the box by hand.'],
        ['When a wire gets old, small jumps of power can cross the air.'],
        ['Those jumps are hot, and they can start a fire.'],
        ['The sense board sees the jump and turns off the power.'],
        ['The warn light comes on, so you know there was a jump.']
      ]
    }
  ],
  flow: [
    { partIds: ['coil'], caption: 'The pick coil goes around the wire', sentenceRef: 3 },
    { partIds: ['clamp'], caption: 'The wire clamp holds the coil on the wire', sentenceRef: 4 },
    { partIds: ['board'], caption: 'The sense board reads the power in the wire', sentenceRef: 2 },
    { partIds: ['light'], caption: 'The warn light comes on when the box finds a bad wire', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'sense board', partId: 'board' },
    { text: 'pick coil', partId: 'coil' },
    { text: 'wire clamp', partId: 'clamp' },
    { text: 'warn light', partId: 'light' }
  ]
};
