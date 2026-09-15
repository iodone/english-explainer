import type { ThingData } from '../types';

export const powerGroundTester: ThingData = {
  id: 'power-ground-tester',
  slug: 'power-ground-tester',
  simpleName: 'The Ground Check',
  realName: 'Ground Tester',
  category: 'power',
  color: '#B08A3E',
  funFacts: [
    'The ground wire is the safe path for power if something goes wrong.',
    'A house plug has three holes: two for power and one for the ground.',
    'This small tool can save a life.',
    'The long wire lets you reach a water pipe far from the plug.',
    'The number on the box tells you how good the path is.',
    'Always check the ground before you touch the wires inside a wall.'
  ],
  parts: [
    { id: 'probe', label: 'Ground Pin', realName: 'Probe', position: [0, 0.3, 0.1], finish: 'cold' },
    { id: 'meter', label: 'Show Box', realName: 'Meter', position: [0, 0.1, 0.2], finish: 'hull' },
    { id: 'wire', label: 'Long Wire', realName: 'Lead Wire', position: [-0.4, -0.1, 0.05], finish: 'cold' },
    { id: 'clip', label: 'Wire Clip', realName: 'Clip', position: [0.3, -0.2, 0.08], finish: 'titanium' },
    { id: 'light', label: 'Pass Light', realName: 'Indicator Light', position: [0, 0.2, 0.3], finish: 'warning' },
    { id: 'body', label: 'Body', realName: 'Body', position: [0, 0, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This tool checks that the ground wire in a wall plug is safe.'],
        ['The ', { text: 'ground pin', part: 'probe' }, ' goes into the ground hole of the plug.'],
        ['The ', { text: 'long wire', part: 'wire' }, ' goes to a metal part on the wall, like a water pipe.'],
        ['The ', { text: 'show box', part: 'meter' }, ' looks at the path between the two and shows a number.'],
        ['The ', { text: 'pass light', part: 'light' }, ' comes on when the path is good.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'wire clip', part: 'clip' }, ' holds the long wire so your hands stay free.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the parts and fits in one hand.'],
        ['If the path is bad, the light stays dark and the number is high.'],
        ['A bad path to the ground means a person can get hurt.'],
        ['People who fix houses use this tool before they work on a plug.'],
        ['It is small, but it keeps a person safe.']
      ]
    }
  ],
  flow: [
    { partIds: ['probe'], caption: 'The ground pin goes into the ground hole of the plug', sentenceRef: 1 },
    { partIds: ['wire'], caption: 'The long wire goes to a metal part on the wall, like a water pipe', sentenceRef: 2 },
    { partIds: ['meter'], caption: 'The show box looks at the path between the two and shows a number', sentenceRef: 3 },
    { partIds: ['light'], caption: 'The pass light comes on when the path is good', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'ground pin', partId: 'probe' },
    { text: 'long wire', partId: 'wire' },
    { text: 'show box', partId: 'meter' },
    { text: 'pass light', partId: 'light' }
  ]
};
