import type { ThingData } from '../types'

export const sunCatcher: ThingData = {
  id: 'sun-catcher',
  slug: 'sun-catcher',
  simpleName: 'Sun Catcher',
  realName: 'Solar Panel',
  category: 'power',
  funFacts: [
    'Even the best light plate turns less than one part in four of the light that lands on it into power — and that is still enough to change the world.',
    'Above the sky there are no clouds and almost no night, so the strongest sun catchers people have ever made fly on little moons and on the Shared Space House, where the light is stronger than anywhere on the ground.',
    'The rock inside a light plate is the same rock that beach sand is made of — one of the easiest things in the world to find in the ground, so the world will never run out of it.',
  ],
  parts: [
    { id: 'light-plate', label: 'Light Plate', realName: 'Solar Cell', position: [-0.5, 0.35, 0], finish: 'warning' },
    { id: 'glass-face', label: 'Glass Face', realName: 'Glass Cover', position: [0.15, 0.42, 0], finish: 'cold' },
    { id: 'wire-net', label: 'Wire Net', realName: 'Electrical Grid', position: [-0.2, 0.48, 0], finish: 'cold' },
    { id: 'back-board', label: 'Back Board', realName: 'Backsheet', position: [-0.2, 0.2, 0], finish: 'hull' },
    { id: 'light-changer', label: 'Light Changer', realName: 'Inverter', position: [1.35, -0.3, 0], finish: 'titanium' },
    { id: 'sky-turner', label: 'Sky Turner', realName: 'Sun Tracker', position: [0, -0.1, 0], finish: 'cold' },
    { id: 'stand-legs', label: 'Stand Legs', realName: 'Mounting Frame', position: [0, -0.55, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['A sun catcher is a flat dark mirror that eats light and pays the world back in power — the first machine that makes something out of nothing but light from the sun.'],
        ['The idea is the strangest in all power-making: light landing on a special piece of sand knocks tiny bits of power free — no fire, no turning, no noise at all.'],
        ['Put a whole field of them together, all facing the sky, and they make as much power as a small town uses — from nothing but light falling out of the sky.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'light plate', part: 'light-plate' },
          ' is where it happens: a thin piece of special rock, cut up into little bits, each one quietly turning its share of light into moving power.',
        ],
        [
          'Over the front lies the ',
          { text: 'glass face', part: 'glass-face' },
          ' — hard and clear, letting all the light through while keeping rain, dust, and everything else off the soft rock behind it.',
        ],
        [
          'Across the face runs the ',
          { text: 'wire net', part: 'wire-net', dict: 'net' },
          ': thin lines of metal, drawn from edge to edge, gathering the moving power from every little bit and carrying it away.',
        ],
        [
          'And behind it all, the ',
          { text: 'back board', part: 'back-board' },
          ' shuts out the wet and the cold, holding the rock, the metal, and the glass safe as one for its whole working life.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The power that comes out is not the kind houses use, so the ',
          { text: 'light changer', part: 'light-changer' },
          ' takes it in and gives back just the right kind — the quiet heart of every sun-catching field.',
        ],
        [
          'Some catchers sit still and take what the sky gives; others ride the ',
          { text: 'sky turner', part: 'sky-turner' },
          ', a moving neck that follows the sun from morning to night, always holding the face full against the light.',
        ],
        [
          'They lean back on their ',
          { text: 'stand legs', part: 'stand-legs' },
          ', like a hand over an eye looking far away, turned toward the half of the sky where the sun spends its day.',
        ],
        ['And when the night comes, or the sky turns gray, they make nothing at all — which is why sun catchers and windmills and dams work together, each filling in while the others rest.'],
      ],
    },
    {
      sentences: [
        ['Year by year they have grown easier to make, and now a field of them makes power for less than burning anything — the first time light has beaten fire.'],
        ['Every year the world covers more ground with them — roofs, empty fields, even fields of them floating on the water — and the sun sends down more power in one hour than all the people of the Earth use in a year.'],
        ['A quiet rock that eats light and gives power — the closest thing to a leaf that people have ever made.'],
      ],
    },
  ],
  flow: [
    { partIds: ['light-plate'], sentenceRef: 3, caption: 'The light plate: a piece of special rock, turning light into moving power.' },
    { partIds: ['wire-net'], sentenceRef: 5, caption: 'The wire net gathers the power from every little bit.' },
    { partIds: ['light-changer'], sentenceRef: 7, caption: 'The light changer turns it into just the kind houses use.' },
    { partIds: ['sky-turner'], sentenceRef: 8, caption: 'The sky turner follows the sun from morning to night.' },
    { partIds: ['stand-legs'], sentenceRef: 9, caption: 'The stand legs hold the whole thing leaning into the sun’s half of the sky.' },
  ],
  keyExpressions: [
    { text: 'eats light and pays the world back in power' },
    { text: 'a special piece of sand' },
    { text: 'nothing but light falling out of the sky' },
    { text: 'thin lines of metal, drawn from edge to edge' },
    { text: 'rock, metal, and glass held safe as one' },
    { text: 'the quiet heart of every sun-catching field' },
    { text: 'always holding the face full against the light' },
    { text: 'each filling in while the others rest' },
    { text: 'the closest thing to a leaf that people have ever made' },
  ],
  color: '#D97706',
}
