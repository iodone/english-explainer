import type { ThingData } from '../types'

export const spaceSuit: ThingData = {
  id: 'space-suit',
  slug: 'space-suit',
  simpleName: 'Space Clothes',
  realName: 'Space Suit',
  category: 'space',
  funFacts: [
    'On the moon, the dust is the real problem of suits: it is sharp, it gets into everything, and it never wears down — suit makers keep looking for new ways to keep it out.',
    'A space suit has more than ten layers, and only some are for air and heat: others stop small rocks flying faster than any gun can shoot.',
    'Space men and women learn their work in a big water tank: under water, a heavy suit can be made to feel as light as it would on a space walk, so they can try the work over and over without leaving Earth.',
  ],
  parts: [
    { id: 'glass-head', label: 'Glass Head', realName: 'Helmet', position: [0, 1.75, 0], finish: 'titanium' },
    { id: 'soft-suit', label: 'Soft Suit', realName: 'Suit Body', position: [-1.05, 0.65, 0], finish: 'hull' },
    { id: 'water-shirt', label: 'Water Shirt', realName: 'Cooling Garment', position: [-1.0, 0.15, 0], finish: 'cold' },
    { id: 'air-back', label: 'Air Back', realName: 'Life Support Backpack', position: [0.95, 0.85, 0], finish: 'warning' },
    { id: 'air-tube', label: 'Air Tube', realName: 'Air Feed Line', position: [1.0, 0.25, 0], finish: 'cold' },
    { id: 'hand-covers', label: 'Hand Covers', realName: 'Gloves', position: [-1.0, -0.3, 0], finish: 'cold' },
    { id: 'moon-boots', label: 'Moon Boots', realName: 'Boots', position: [0, -1.4, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['A space suit is a space ship for one, in the shape of a person: space has no air, no help of any kind — and the suit brings everything you need with you.'],
        [
          'Up there, the air is not just thin — there is none at all: nothing comes in when you open your mouth, and the water in you would turn to ',
          { text: 'gas', dict: 'gas' },
          ' and float away into the open dark.',
        ],
        ['So the suit does what a ship does, only soft: it holds a little world of air around your body, keeps you warm, keeps you cool, and lets you work with your hands.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'glass head', part: 'glass-head' },
          ' is your window: a hard glass ball, strong enough to keep the air in when the air inside pushes hard to get out.',
        ],
        [
          'On your back rides the ',
          { text: 'air back', part: 'air-back' },
          ', a hard box that carries new air for you to breathe and cleans the used air you breathe out, hour after hour.',
        ],
        [
          'The ',
          { text: 'air tube', part: 'air-tube' },
          ' runs from the box around to your front, bringing new air up into the glass head and taking the used air away.',
        ],
        [
          'Under everything, next to your skin, you wear the ',
          { text: 'water shirt', part: 'water-shirt' },
          ': a second skin of thin water lines that carries your body heat away, because in a closed suit your own heat has no way out.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The hardest work is for the hands: your ',
          { text: 'hand covers', part: 'hand-covers' },
          ' are like two strong ',
          { text: 'balloons', dict: 'balloon' },
          ', and every bend of your fingers fights the suit’s wish to stay round — work in them all day and your hands will know it.',
        ],
        [
          'The ',
          { text: 'soft suit', part: 'soft-suit' },
          ' and the ',
          { text: 'moon boots', part: 'moon-boots' },
          ' are built in layers, like clothes for the very worst day in space: some layers stop heat, some stop small flying rocks, and some just hold everything together.',
        ],
        ['The outside is all white, because white throws the sun’s heat back instead of drinking it in — under a sun with no clouds to hide it, that matters.'],
        ['And every suit carries a small radio, so that even with a glass ball over your head, your voice always gets out.'],
      ],
    },
    {
      sentences: [
        ['The first suits, half a hundred years ago, were built like clothes and blown up like balloons — soft, round, and very hard to bend in.'],
        ['Today’s suits are better, but the idea has not changed: a little world, shaped like a person, that follows you anywhere the ship cannot go.'],
        ['A glass head, a box of air, a shirt of water, hands like balloons — one person, dressed for the whole of space.'],
      ],
    },
  ],
  flow: [
    { partIds: ['glass-head'], sentenceRef: 3, caption: 'A hard glass ball keeps the air in and lets you see.' },
    { partIds: ['air-back'], sentenceRef: 4, caption: 'The air back carries new air and cleans the used air, hour after hour.' },
    { partIds: ['air-tube'], sentenceRef: 5, caption: 'The air tube brings new air up and takes the used air away.' },
    { partIds: ['water-shirt'], sentenceRef: 6, caption: 'A second skin of thin water lines carries your body heat away.' },
    { partIds: ['hand-covers'], sentenceRef: 7, caption: 'Hand covers like strong balloons: every finger bend is a small fight.' },
  ],
  keyExpressions: [
    { text: 'a space ship for one' },
    { text: 'holds a little world of air around your body', partId: 'soft-suit' },
    { text: 'strong enough to keep the air in', partId: 'glass-head' },
    { text: 'cleans the used air', partId: 'air-back' },
    { text: 'hour after hour', partId: 'air-back' },
    { text: 'a second skin of thin water lines', partId: 'water-shirt' },
    { text: 'your own heat has no way out', partId: 'water-shirt' },
    { text: 'hands like strong balloons', partId: 'hand-covers' },
    { text: 'built in layers, like clothes for the worst day in space', partId: 'soft-suit' },
  ],
  color: '#F43F5E',
}
