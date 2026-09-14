import type { ThingData } from '../types';

export const homeNutCracker: ThingData = {
  id: 'home-nut-cracker',
  slug: 'home-nut-cracker',
  simpleName: 'The Hard Shell Breaker',
  realName: 'Nutcracker',
  category: 'home',
  color: '#8B4513',
  funFacts: [
    'A nutcracker breaks the hard shell of a nut with one push of your hand.',
    'The two jaws hold the nut and press it until the shell breaks.',
    'The joint lets the two arms turn like a small pair of scissors.',
    'You put the nut in the cup so it does not jump away.',
    'The spring pushes the arms open again after each nut.',
    'It works best on nuts with a thin shell.'
  ],
  parts: [
    { id: 'arm', label: 'Wood Arms', realName: 'Handle Arms', position: [0.1, 0.1, 0], finish: 'hull' },
    { id: 'jaw', label: 'Break Jaws', realName: 'Cracking Jaws', position: [-0.02, 0.04, 0], finish: 'warning' },
    { id: 'joint', label: 'Turn Joint', realName: 'Joint Pin', position: [-0.26, 0, 0], finish: 'titanium' },
    { id: 'cup', label: 'Nut Cup', realName: 'Nut Holder', position: [-0.06, 0, 0], finish: 'cold' },
    { id: 'spring', label: 'Spring Back', realName: 'Return Spring', position: [0.2, 0, 0], finish: 'cold' },
    { id: 'grip', label: 'Hold Grip', realName: 'Handle Grip', position: [0.42, 0.16, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This small pair of arms breaks the hard shell of a nut.'],
        ['The ', { text: 'wood arms', part: 'arm' }, ' are the two long parts you hold.'],
        ['The ', { text: 'break jaws', part: 'jaw' }, ' are the two parts that press the shell.'],
        ['The ', { text: 'turn joint', part: 'joint' }, ' is the point where the two arms turn.'],
        ['The ', { text: 'nut cup', part: 'cup' }, ' is the small hole that holds the nut.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'spring back', part: 'spring' }, ' is the part that pushes the arms open again.'],
        ['The ', { text: 'hold grip', part: 'grip' }, ' is the part your hand holds.'],
        ['You put the nut in the cup and press the arms with one hand.'],
        ['The jaws press the shell and it breaks into two parts.'],
        ['You take the soft nut out and eat it.'],
        ['The spring pushes the arms open so you can take the next nut.']
      ]
    }
  ],
  flow: [
    { partIds: ['arm'], caption: 'The wood arms are what you hold', sentenceRef: 1 },
    { partIds: ['jaw'], caption: 'The break jaws press the shell', sentenceRef: 2 },
    { partIds: ['spring'], caption: 'The spring back opens the arms again', sentenceRef: 5 },
    { partIds: ['grip'], caption: 'The hold grip is what your hand holds', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'wood arms', partId: 'arm' },
    { text: 'break jaws', partId: 'jaw' },
    { text: 'spring back', partId: 'spring' },
    { text: 'hold grip', partId: 'grip' }
  ]
};
