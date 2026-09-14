import type { ThingData } from '../types'

export const gasStove: ThingData = {
  id: 'gas-stove',
  slug: 'gas-stove',
  simpleName: 'The Fire Cooker',
  realName: 'Gas stove',
  category: 'power',
  funFacts: [
    'A fire cooker uses gas that comes through pipes under the ground to make fire for cooking.',
    'The first fire cookers were made about 200 years ago.',
    'Some fire cookers can make fire in many different sizes — from very small to very big.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Cooktop', position: [0, 0, 0], finish: 'hull' },
    { id: 'fire-rings', label: 'fire rings', realName: 'Burners', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'top-parts', label: 'top parts', realName: 'Grates', position: [0, 0.06, 0], finish: 'cold' },
    { id: 'turn-handles', label: 'turn handles', realName: 'Knobs', position: [0, 0.02, 0.14], finish: 'warning' },
    { id: 'gas-pipe', label: 'gas pipe', realName: 'Gas line', position: [0, -0.08, -0.08], finish: 'cold' },
    { id: 'light-part', label: 'light part', realName: 'Igniter', position: [0, 0.02, 0.06], finish: 'warning' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Oven', position: [0, -0.14, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'fire cooker', dict: 'gas-stove' },
          '. It makes fire for cooking food using gas that comes through pipes.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the top part where you put your pots.',
        ],
        [
          'On the body are the ',
          { text: 'fire rings', part: 'fire-rings' },
          ' — round parts that make fire when you turn them on.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'top parts', part: 'top-parts' },
          ' are metal pieces that hold the pots up above the fire.',
        ],
        ['They are made of strong metal because they have to hold heavy pots.'],
      ],
    },
    {
      sentences: [
        [
          'You turn the ',
          { text: 'turn handles', part: 'turn-handles' },
          ' to make the fire bigger or smaller.',
        ],
        ['Turning them all the way makes the fire go out.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'gas pipe', part: 'gas-pipe' },
          ' at the back brings gas from the pipes under the ground.',
        ],
        [
          'A small ',
          { text: 'light part', part: 'light-part' },
          ' makes a tiny fire to start the big fire when you turn the handle.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Under the top is the ',
          { text: 'bottom part', part: 'bottom-part' },
          ' — a big closed space that can get very hot for cooking food.',
        ],
        ['The fire cooker is one of the most important things in a kitchen.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'fire-rings'], sentenceRef: 1, caption: 'The body is the top; fire rings make fire for cooking.' },
    { partIds: ['top-parts'], sentenceRef: 4, caption: 'Top parts hold pots up above the fire.' },
    { partIds: ['turn-handles'], sentenceRef: 6, caption: 'Turn handles make fire bigger or smaller.' },
    { partIds: ['gas-pipe', 'light-part'], sentenceRef: 8, caption: 'Gas pipe brings gas; light part starts the fire.' },
    { partIds: ['bottom-part'], sentenceRef: 10, caption: 'The bottom part is a big hot space for cooking food.' },
  ],
  keyExpressions: [
    { text: 'fire cooker', partId: 'fire-rings' },
    { text: 'makes fire for cooking food', partId: 'fire-rings' },
    { text: 'round parts that make fire', partId: 'fire-rings' },
    { text: 'hold the pots up above the fire', partId: 'top-parts' },
    { text: 'make the fire bigger or smaller', partId: 'turn-handles' },
    { text: 'brings gas from the pipes under the ground', partId: 'gas-pipe' },
    { text: 'a big closed space that can get very hot', partId: 'bottom-part' },
  ],
  color: '#F0E68C',
}