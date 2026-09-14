import type { ThingData } from '../types';

export const homePepperMill: ThingData = {
  id: 'home-pepper-mill',
  slug: 'home-pepper-mill',
  simpleName: 'The Spice Breaker',
  realName: 'Pepper Mill',
  category: 'home',
  color: '#8B4513',
  funFacts: [
    'A pepper mill breaks dry seeds into small bits for food.',
    'You turn the top with one hand and hold the body with the other.',
    'You can set it to make big bits or very fine bits.',
    'The seeds stay dry inside, so they keep their good smell for a long time.',
    'It is small, so it sits on a table with the other food things.',
    'People fill it again when all the seeds are gone.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Mill Body', position: [0.13, -0.02, 0], finish: 'hull' },
    { id: 'turn', label: 'Turn Top', realName: 'Turning Knob', position: [0, 0.26, 0], finish: 'titanium' },
    { id: 'grind', label: 'Break Part', realName: 'Grinding Burr', position: [0, -0.14, 0], finish: 'warning' },
    { id: 'rod', label: 'Center Rod', realName: 'Center Rod', position: [0, -0.02, 0], finish: 'titanium' },
    { id: 'store', label: 'Seed Box', realName: 'Seed Hopper', position: [0, 0.12, 0], finish: 'cold' },
    { id: 'set', label: 'Size Set', realName: 'Grind Setting', position: [0, -0.22, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This small box breaks dry seeds into bits when you turn the top.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the part you hold with your hand.'],
        ['The ', { text: 'turn top', part: 'turn' }, ' is the part you turn to break the seeds.'],
        ['The ', { text: 'break part', part: 'grind' }, ' is the hard wheel that breaks the seeds into bits.'],
        ['The ', { text: 'center rod', part: 'rod' }, ' holds the break part in the middle of the box.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'seed box', part: 'store' }, ' is the space at the top where the seeds wait.'],
        ['The ', { text: 'size set', part: 'set' }, ' lets you pick how big the bits will be.'],
        ['You turn the top one way for big bits and the other way for fine bits.'],
        ['The seeds fall down to the break part and come out at the bottom.'],
        ['People put it on the table and turn it over their food.'],
        ['It must be filled again when all the seeds are gone.']
      ]
    }
  ],
  flow: [
    { partIds: ['turn'], caption: 'You turn the turn top to break the seeds', sentenceRef: 2 },
    { partIds: ['grind'], caption: 'The break part breaks the seeds into bits', sentenceRef: 3 },
    { partIds: ['store'], caption: 'The seed box holds the seeds at the top', sentenceRef: 5 },
    { partIds: ['set'], caption: 'The size set picks how big the bits will be', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'turn top', partId: 'turn' },
    { text: 'break part', partId: 'grind' },
    { text: 'seed box', partId: 'store' },
    { text: 'size set', partId: 'set' }
  ]
};
