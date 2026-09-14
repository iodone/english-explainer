import type { ThingData } from '../types';

export const powerGroundFault: ThingData = {
  id: 'power-ground-fault',
  slug: 'power-ground-fault',
  simpleName: 'The Power Leak Finder',
  realName: 'Ground Fault Sensor',
  category: 'power',
  color: '#B22222',
  funFacts: [
    'This small box looks for power that is going where it should not.',
    'When some power goes to the ground, the box knows at once.',
    'It cuts the power in a small part of a second.',
    'That can save a life, because a person can not let go of live wires.',
    'A button on the front lets you test it by hand.',
    'These boxes are in wet places, like a room with a bath.'
  ],
  parts: [
    { id: 'ring', label: 'Ring Coil', realName: 'Toroid', position: [0, 0.02, -0.02], finish: 'titanium' },
    { id: 'wind', label: 'Sense Wind', realName: 'Sense Winding', position: [0.03, 0.02, -0.02], finish: 'warning' },
    { id: 'contact', label: 'Trip Contact', realName: 'Trip Contact', position: [-0.08, 0.08, 0], finish: 'titanium' },
    { id: 'case', label: 'Main Case', realName: 'Sensor Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'panel', label: 'Face Panel', realName: 'Front Panel', position: [0, 0, 0.11], finish: 'cold' },
    { id: 'button', label: 'Test Button', realName: 'Test Button', position: [0.07, -0.06, 0.12], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This box looks for power that is going where it should not.'],
        ['The ', { text: 'ring coil', part: 'ring' }, ' is the ring that the power line goes through.'],
        ['The ', { text: 'sense wind', part: 'wind' }, ' is the small roll of wire that feels the lost power.'],
        ['The ', { text: 'trip contact', part: 'contact' }, ' is the part that opens and stops the power.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the parts.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'face panel', part: 'panel' }, ' is the front with the small light and the button.'],
        ['The ', { text: 'test button', part: 'button' }, ' is the part you press to be sure it works.'],
        ['The power goes into the box on one wire and comes back on the other.'],
        ['When a person touches a live part, some power goes out through them to the ground.'],
        ['The box feels that at once and the trip contact opens very fast.'],
        ['People press the test button to be sure the box still works.']
      ]
    }
  ],
  flow: [
    { partIds: ['ring'], caption: 'The ring coil goes around the power line', sentenceRef: 1 },
    { partIds: ['wind'], caption: 'The sense wind feels the lost power', sentenceRef: 2 },
    { partIds: ['contact'], caption: 'The trip contact opens and stops the power', sentenceRef: 3 },
    { partIds: ['button'], caption: 'The test button is what you press', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'ring coil', partId: 'ring' },
    { text: 'sense wind', partId: 'wind' },
    { text: 'trip contact', partId: 'contact' },
    { text: 'test button', partId: 'button' }
  ]
};
