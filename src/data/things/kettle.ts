import type { ThingData } from '../types'

export const kettle: ThingData = {
  id: 'kettle',
  slug: 'kettle',
  simpleName: 'The Hot Water Pot',
  realName: 'Electric Kettle',
  category: 'home',
  funFacts: [
    'The hot plate pulls more power than about 50 little lights burning at once — for a few minutes, the kettle is the hardest-working machine in the whole house.',
    'The very first kettles with a hidden heater inside, more than 100 years ago, took over 10 minutes to boil; today most do it in under 3.',
    'Some lands drink so much tea that their power makers get ready for the half-time jump, when 1,000,000 kettles all go on at once.',
  ],
  parts: [
    { id: 'water-pot', label: 'water pot', realName: 'Kettle Body', position: [0, -0.02, 0], finish: 'cold' },
    { id: 'pot-lid', label: 'pot lid', realName: 'Lid', position: [0, 0.22, 0], finish: 'cold' },
    { id: 'spout', label: 'spout', realName: 'Spout', position: [0.3, 0.06, 0], finish: 'cold' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0, 0.31, 0], finish: 'cold' },
    { id: 'hot-plate', label: 'hot plate', realName: 'Heating Plate', position: [0, -0.3, 0], finish: 'warning' },
    { id: 'power-switch', label: 'power switch', realName: 'Switch', position: [0.26, -0.13, 0], finish: 'titanium' },
    { id: 'bottom-plate', label: 'bottom plate', realName: 'Base', position: [0, -0.345, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'In the kitchen, on the table near the tea cups, sits the ',
          { text: 'kettle', dict: 'kettle' },
          ' — a short round ',
          { text: 'water pot', part: 'water-pot', dict: 'pot' },
          ' with one job: make water hot.',
        ],
        [
          'A ',
          { text: 'pot lid', part: 'pot-lid', dict: 'lid' },
          ' on top keeps the dust out and the heat in until you are ready.',
        ],
        [
          'A ',
          { text: 'handle', part: 'handle', dict: 'handle' },
          ' reaches over the top, and a small ',
          { text: 'power switch', part: 'power-switch', dict: 'switch' },
          ' waits just under it.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Press it down, and deep under the pot the hidden ',
          { text: 'hot plate', part: 'hot-plate' },
          ' turns red and begins to ',
          { text: 'glow', dict: 'glow' },
          '.',
        ],
        [
          'Heat climbs into the water, and soon tiny ',
          { text: 'bubbles', dict: 'bubble' },
          ' rise along the sides — the water starts to ',
          { text: 'boil', dict: 'boil' },
          '.',
        ],
        [
          'White ',
          { text: 'steam', dict: 'steam' },
          ' breathes out of the ',
          { text: 'spout', part: 'spout', dict: 'spout' },
          ', saying the water is ready.',
        ],
        [
          'A quiet little maker inside feels that heat and turns everything off by itself, so the pot never gets too hot.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Quiet falls over the kitchen: the water inside is ready for tea, for coffee, for a cold morning that needs warming up.',
        ],
        [
          'Lift the whole thing off its ',
          { text: 'bottom plate', part: 'bottom-plate' },
          ' and carry it over, warm and heavy with work.',
        ],
        [
          'Tip it, and a round, bright line of water pours into the cup.',
        ],
        [
          'The cup fills slowly, and the morning turns warm and bright.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Minutes later, the kettle goes back on its plate, cold again and waiting.',
        ],
        [
          'All day it sits there doing nothing but being ready — one of the smallest, quietest machines in the house.',
        ],
        [
          'That is its whole story: cold water in, warm tea out.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['pot-lid'], sentenceRef: 1, caption: 'The lid opens, and cold water runs in through the top.' },
    { partIds: ['power-switch'], sentenceRef: 2, caption: 'A small push on the switch under the handle, and the work begins.' },
    { partIds: ['hot-plate'], sentenceRef: 3, caption: 'Deep under the pot, the hidden hot plate turns red and glows.' },
    { partIds: ['spout'], sentenceRef: 5, caption: 'Steam slips out of the spout — the water is boiling and ready.' },
    { partIds: ['bottom-plate'], sentenceRef: 8, caption: 'Lift the pot off the bottom plate and pour, cup after cup.' },
  ],
  keyExpressions: [
    { text: 'a short round water pot with one job', partId: 'water-pot' },
    { text: 'keeps the dust out and the heat in', partId: 'pot-lid' },
    { text: 'reaches over the top for carrying', partId: 'handle' },
    { text: 'a small push and the work begins', partId: 'power-switch' },
    { text: 'turns red and glows deep under the pot', partId: 'hot-plate' },
    { text: 'the mouth where the steam says ready', partId: 'spout' },
    { text: 'lift the pot off and carry it over', partId: 'bottom-plate' },
    { text: 'tiny bubbles rise along the sides', partId: 'hot-plate' },
    { text: 'cold water in, warm tea out', partId: 'water-pot' },
  ],
  color: '#2A9D8F',
}
