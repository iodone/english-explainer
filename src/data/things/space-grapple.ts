import type { ThingData } from '../types';

export const spaceGrapple: ThingData = {
  id: 'space-grapple',
  slug: 'space-grapple',
  simpleName: 'Space Grabber',
  realName: 'Grapple Fixture',
  category: 'space',
  color: '#A8B4C0',
  funFacts: [
    'The space station has many of these small parts on the outside.',
    'A space arm can hold this part and not let go.',
    'The catch can open and close many times and still hold.',
    'Water can get in when people come back from a space walk.',
    'The small water hole lets that water out before it turns to ice.',
    'Ice can push hard, so the hole keeps the part from bending.'
  ],
  parts: [
    { id: 'grapple-pin', label: 'Grapple Pin', realName: 'Grapple Pin', position: [0, 0.12, 0.15], finish: 'hull' },
    { id: 'base-plate', label: 'Base Plate', realName: 'Base Plate', position: [0, -0.05, -0.08], finish: 'titanium' },
    { id: 'guide-rail', label: 'Guide Rail', realName: 'Guide Rail', position: [-0.35, 0, 0.1], finish: 'cold' },
    { id: 'latch', label: 'Catch', realName: 'Latch', position: [0.3, 0.15, 0.12], finish: 'warning' },
    { id: 'align-pin', label: 'Center Pin', realName: 'Align Pin', position: [0, 0.08, 0.25], finish: 'hull' },
    { id: 'drain-hole', label: 'Water Hole', realName: 'Drain Hole', position: [-0.2, -0.2, -0.05], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This small part lets a space arm take hold of a thing and hold it still.'],
        ['The ', { text: 'grapple pin', part: 'grapple-pin' }, ' is the short bar that the arm locks on to.'],
        ['The ', { text: 'back plate', part: 'base-plate' }, ' is the strong plate that takes the push and the pull.'],
        ['The ', { text: 'guide rail', part: 'guide-rail' }, ' leads the arm into the right spot every time.'],
        ['The ', { text: 'catch', part: 'latch' }, ' closes and keeps the pin in place.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'center pin', part: 'align-pin' }, ' lines up the arm before the catch closes.'],
        ['The ', { text: 'water hole', part: 'drain-hole' }, ' lets water out, so ice does not push the parts apart.'],
        ['A space arm brings a load close and pushes the pin into the hole.'],
        ['Then the arm pulls back a little to test that the hold is good.'],
        ['If the hold is good, the arm can move the load or let it go.'],
        ['This part is small, but it makes big jobs in space much easier.']
      ]
    }
  ],
  flow: [
    { partIds: ['grapple-pin'], caption: 'The grapple pin is the short bar that the arm locks on to', sentenceRef: 1 },
    { partIds: ['guide-rail'], caption: 'The guide rail leads the arm into the right spot every time', sentenceRef: 3 },
    { partIds: ['latch'], caption: 'The catch closes and keeps the pin in place', sentenceRef: 4 },
    { partIds: ['align-pin'], caption: 'The center pin lines up the arm before the catch closes', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'grapple pin', partId: 'grapple-pin' },
    { text: 'back plate', partId: 'base-plate' },
    { text: 'guide rail', partId: 'guide-rail' },
    { text: 'center pin', partId: 'align-pin' }
  ]
};
