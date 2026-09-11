import type { ThingData } from '../types'

export const asteroid: ThingData = {
  id: 'asteroid',
  slug: 'asteroid',
  simpleName: 'The Space Rock',
  realName: 'Asteroid',
  category: 'space',
  funFacts: [
    'If you could put every known space rock in one bag, the bag would still be lighter than our moon.',
    'A rock as big as a city hit our world long ago, and the big old animals could not live through the dark years after.',
    'People talk about visiting rocks like this one to bring metal home — one small rock could hold more iron than every mine on Earth.',
  ],
  parts: [
    { id: 'rock-body', label: 'rock body', realName: 'Regolith Body', position: [-0.1, 0.06, 0], finish: 'hull' },
    { id: 'metal-heart', label: 'metal heart', realName: 'Metal Core', position: [-0.1, 0.02, 0], finish: 'cold' },
    { id: 'orbit-line', label: 'orbit line', realName: 'Orbit', position: [0.2, -0.18, 0], finish: 'cold' },
    { id: 'sun-face', label: 'sun face', realName: 'Sunlit Side', position: [0.22, 0.1, 0], finish: 'warning' },
    { id: 'ice-pocket', label: 'ice pocket', realName: 'Ice Deposit', position: [-0.3, -0.08, 0.16], finish: 'cold' },
    { id: 'gas-jet', label: 'gas jet', realName: 'Gas Outflow', position: [-0.45, -0.19, 0.16], finish: 'cold' },
    { id: 'big-crater', label: 'big crater', realName: 'Impact Crater', position: [-0.34, 0.25, 0.1], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'Far out in the dark, a ',
          { text: 'rock body', part: 'rock-body' },
          ' travels around the sun, quiet and alone.',
        ],
        [
          'It is not round like a ball — more like a heavy egg, its skin covered in marks and holes.',
        ],
        [
          'People call it an ',
          { text: 'asteroid', dict: 'asteroid' },
          ', a small world of stone and ',
          { text: 'iron', dict: 'iron' },
          '.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Under the skin hides the ',
          { text: 'metal heart', part: 'metal-heart' },
          ', a ball of metal so big it could buy a whole city.',
        ],
        [
          'Its road around the sun is the ',
          { text: 'orbit line', part: 'orbit-line' },
          ', the same circle, year after year, without end.',
        ],
        [
          'As it travels, the rock rolls and turns, so first one face, then another, looks at the sun.',
        ],
        [
          'The ',
          { text: 'sun face', part: 'sun-face' },
          ' takes the light and grows warm, while the far side stays cold and dark.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Sun heat finds the ',
          { text: 'ice pocket', part: 'ice-pocket' },
          ', a hidden store inside a hole.',
        ],
        [
          'Warm ice turns to gas, and the ',
          { text: 'gas jet', part: 'gas-jet', dict: 'jet' },
          ' slips out in a thin line, like a small ',
          { text: 'tail', dict: 'tail' },
          ' for a little while.',
        ],
        [
          'Push by tiny push, the leaving gas moves the rock a hair off its old road.',
        ],
        [
          'The ',
          { text: 'big crater', part: 'big-crater', dict: 'crater' },
          ' on its side keeps an old story: the day a smaller rock hit this one, long before people.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Every mark and hole is the same story — tiny hits, one after another, over more years than anyone can count.',
        ],
        [
          'Some people who study the sky watch the big rocks with care, night after night.',
        ],
        [
          'One day, people may visit a rock like this one — to study it, or to bring its metal home.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['rock-body'], sentenceRef: 0, caption: 'A heavy egg of rock and metal rolls through the dark, far from the sun.' },
    { partIds: ['orbit-line'], sentenceRef: 4, caption: 'The orbit line is its road — the same circle around the sun, year after year.' },
    { partIds: ['sun-face'], sentenceRef: 6, caption: 'The sun face runs warm in the light, while the far side stays ice cold.' },
    { partIds: ['ice-pocket', 'gas-jet'], sentenceRef: 7, caption: 'Sun heat turns the ice pocket to gas, and the gas jet slips out in a thin line.' },
    { partIds: ['big-crater'], sentenceRef: 10, caption: 'The big crater keeps an old story — the day a smaller rock hit this one.' },
  ],
  keyExpressions: [
    { text: 'a heavy egg of rock and metal', partId: 'rock-body' },
    { text: 'a ball of metal hiding under the skin', partId: 'metal-heart' },
    { text: 'the same circle, year after year', partId: 'orbit-line' },
    { text: 'takes the light and grows warm', partId: 'sun-face' },
    { text: 'a hidden store inside a hole', partId: 'ice-pocket' },
    { text: 'slips out in a thin line, like a small tail', partId: 'gas-jet' },
    { text: 'the day a smaller rock hit this one', partId: 'big-crater' },
    { text: 'push by tiny push, off its old road', partId: 'gas-jet' },
    { text: 'to study it, or bring its metal home', partId: 'metal-heart' },
  ],
  color: '#B08968',
}
