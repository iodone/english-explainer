import type { ThingData } from '../types';

export const powerContinuityTester: ThingData = {
  id: 'power-continuity-tester',
  slug: 'power-continuity-tester',
  simpleName: 'The Wire Check',
  realName: 'Continuity Tester',
  category: 'power',
  color: '#B98A34',
  funFacts: [
    'A wire can look fine and still be broken inside.',
    'This tool sends its own small power, so the wall power must be off.',
    'The light comes on only when the path is whole.',
    'People who fix phones and cars use this tool every day.',
    'One pin can be far away, and the test wire makes the reach long.',
    'Always turn the power off before you touch a wire.'
  ],
  parts: [
    { id: 'probe-a', label: 'First Pin', realName: 'Probe A', position: [0, 0.3, 0.1], finish: 'cold' },
    { id: 'probe-b', label: 'Second Pin', realName: 'Probe B', position: [0, -0.3, 0.1], finish: 'cold' },
    { id: 'light', label: 'Show Light', realName: 'Indicator Light', position: [0, 0.15, 0.3], finish: 'warning' },
    { id: 'body', label: 'Body', realName: 'Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'wire', label: 'Test Wire', realName: 'Test Lead', position: [-0.4, -0.1, 0.05], finish: 'cold' },
    { id: 'battery', label: 'Power Box', realName: 'Battery', position: [0.2, -0.15, -0.1], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This small tool checks that a wire is not broken inside.'],
        ['The ', { text: 'first pin', part: 'probe-a' }, ' touches one end of the wire.'],
        ['The ', { text: 'second pin', part: 'probe-b' }, ' touches the other end.'],
        ['The ', { text: 'power box', part: 'battery' }, ' sends a small push of power through the wire.'],
        ['The ', { text: 'show light', part: 'light' }, ' comes on when the push gets to the other end.']
      ]
    },
    {
      sentences: [
        ['If the wire is broken, the light stays dark.'],
        ['The ', { text: 'test wire', part: 'wire' }, ' adds to the reach of the first pin.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the parts and fits in one hand.'],
        ['People use this tool to find a break in a long wire.'],
        ['It also helps them find the two ends of the same wire in a wall.'],
        ['It is small, but it saves a lot of time.']
      ]
    }
  ],
  flow: [
    { partIds: ['probe-a'], caption: 'The first pin touches one end of the wire', sentenceRef: 1 },
    { partIds: ['probe-b'], caption: 'The second pin touches the other end', sentenceRef: 2 },
    { partIds: ['battery'], caption: 'The power box sends a small push of power through the wire', sentenceRef: 3 },
    { partIds: ['light'], caption: 'The show light comes on when the push gets to the other end', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'first pin', partId: 'probe-a' },
    { text: 'second pin', partId: 'probe-b' },
    { text: 'show light', partId: 'light' },
    { text: 'power box', partId: 'battery' }
  ]
};
