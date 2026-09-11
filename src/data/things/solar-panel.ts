import type { ThingData } from '../types'

export const solarPanel: ThingData = {
  id: 'solar-panel',
  slug: 'solar-panel',
  simpleName: 'The Sun Sheet',
  realName: 'Solar Panel',
  category: 'power',
  funFacts: [
    'The sun sends more power to Earth in one hour than every person uses in a whole year.',
    'The dark blue color is not for looks: dark colors take in more light, and this color works best of all for the job.',
    'Some sun fields are so big that you can see them from space — dark blue against the green ground.',
  ],
  parts: [
    { id: 'glass-face', label: 'glass face', realName: 'Glass Cover', position: [0, 0.02, 0.04], finish: 'hull' },
    { id: 'sun-checkers', label: 'sun checkers', realName: 'Solar Cells', position: [0, 0.02, 0.028], finish: 'warning' },
    { id: 'metal-bars', label: 'metal bars', realName: 'Busbars', position: [0, 0.02, 0], finish: 'titanium' },
    { id: 'back-sheet', label: 'back sheet', realName: 'Backsheet', position: [0, 0.02, 0.015], finish: 'cold' },
    { id: 'stand-legs', label: 'stand legs', realName: 'Mounting Frame', position: [0, -0.2, 0.02], finish: 'cold' },
    { id: 'power-box', label: 'power box', realName: 'Junction Box', position: [-0.28, 0.02, -0.055], finish: 'cold' },
    { id: 'wire-line', label: 'wire line', realName: 'Output Cable', position: [0.3, -0.31, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ["This flat blue sheet sits in the sun all day, turning the sun's light into power for your house."],
        [
          'Its full name is a ',
          { text: 'solar', dict: 'solar' },
          ' ',
          { text: 'panel', dict: 'panel' },
          ': solar for the sun, panel for the flat sheet.',
        ],
        ['No fire, no turning parts, no noise — just light going in and power coming out.'],
      ],
    },
    {
      sentences: [
        [
          'The front is a ',
          { text: 'glass face', part: 'glass-face' },
          ' — a clear cover that keeps water and dust off the working parts inside.',
        ],
        [
          'Under the glass lie the ',
          { text: 'sun checkers', part: 'sun-checkers' },
          ' — dark blue pieces set out in rows, catching the light and turning it into power.',
        ],
        ['One piece makes only a little power, but a whole sheet of them makes enough to run a house.'],
        [
          'Behind them all lies the ',
          { text: 'back sheet', part: 'back-sheet' },
          ', which shuts out water and holds everything flat and dry.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Thin ',
          { text: 'metal bars', part: 'metal-bars' },
          ' run across the back like little roads, carrying the power away from every row.',
        ],
        [
          'The whole sheet sits on strong ',
          { text: 'stand legs', part: 'stand-legs' },
          ', turned so that it faces the sun as much as it can.',
        ],
        [
          'On the back, a small ',
          { text: 'power box', part: 'power-box' },
          ' brings all the roads together and sends the power on its way.',
        ],
        [
          'From there, a ',
          { text: 'wire line', part: 'wire-line', dict: 'wire' },
          ' carries it to your house — out to your lights, your computer, your hot water.',
        ],
      ],
    },
    {
      sentences: [
        ['At night, or on dark days, the sheet sleeps and makes nothing.'],
        ['But on a clear day, one roof of sheets can power a whole house, with enough left over to warm the water.'],
        ['The sun sends its power here for free, from very far away — and this quiet sheet just sits there and takes it.'],
      ],
    },
  ],
  flow: [
    { partIds: ['sun-checkers'], sentenceRef: 4, caption: 'The sun checkers catch the light and turn it into power.' },
    { partIds: ['back-sheet'], sentenceRef: 6, caption: 'The back sheet keeps the water out and holds the working parts flat and dry.' },
    { partIds: ['metal-bars'], sentenceRef: 7, caption: 'Metal bars run across the back like little roads, carrying the power away from every row.' },
    { partIds: ['power-box'], sentenceRef: 9, caption: 'The power box brings the roads together and sends the power on its way.' },
    { partIds: ['wire-line'], sentenceRef: 10, caption: 'The wire line carries the power to your house — lights, computer, hot water.' },
  ],
  keyExpressions: [
    { text: 'a clear cover that keeps water and dust off', partId: 'glass-face' },
    { text: 'dark blue pieces set out in rows', partId: 'sun-checkers' },
    { text: 'little roads carrying the power away', partId: 'metal-bars' },
    { text: 'shuts out water, holds everything flat and dry', partId: 'back-sheet' },
    { text: 'turned to face the sun as much as it can', partId: 'stand-legs' },
    { text: 'brings all the roads together', partId: 'power-box' },
    { text: 'carries the power to your house', partId: 'wire-line' },
    { text: "turns the sun's light into power" },
    { text: 'just sits there and takes it' },
  ],
  color: '#FFD166',
}
