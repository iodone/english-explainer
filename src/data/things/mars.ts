import type { ThingData } from '../types'

export const mars: ThingData = {
  id: 'mars',
  slug: 'mars',
  simpleName: 'The Red World',
  realName: 'Mars',
  category: 'space',
  funFacts: [
    'The dead fire mountain stands about two and a half times as tall as the tallest mountain on earth, and is so wide across that a person standing in the middle of it would see only flat ground as far as the eye can see — the mountain’s edge lying, hidden, far beyond.',
    'The great cut would stretch across a whole country on earth: about 2,500 miles long and, in places, four miles straight down — the deepest and longest cut of its kind known in the sky.',
    'The near moon rises in the west and sets in the east — the only moon in the sky that runs backwards across its world — and it draws closer every year: in about 50,000,000 years it will break apart, and the red world will wear a ring.',
  ],
  parts: [
    { id: 'red-dust', label: 'red dust', realName: 'Iron Oxide Regolith', position: [0, 0, 0], finish: 'warning' },
    { id: 'thin-air', label: 'thin air', realName: 'Thin Atmosphere', position: [0, 0, 0], finish: 'hull' },
    { id: 'ice-caps', label: 'ice caps', realName: 'Polar Ice Caps', position: [0, 0.55, 0], finish: 'titanium' },
    { id: 'dead-fire-mountain', label: 'dead fire mountain', realName: 'Olympus Mons', position: [-0.25, 0.17, 0.52], finish: 'cold' },
    { id: 'great-cut', label: 'great cut', realName: 'Valles Marineris', position: [0.3, -0.1, 0.52], finish: 'cold' },
    { id: 'old-river-beds', label: 'old river beds', realName: 'Ancient Riverbeds', position: [-0.2, 0.36, 0.44], finish: 'cold' },
    { id: 'two-moons', label: 'two moons', realName: 'Phobos & Deimos', position: [1.05, 0.38, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The red world is world number four from the day star — a cold, dry ball of rock about half as wide as the earth, its face covered in dust the color of old iron: the small red eye of our night sky.',
        ],
        [
          'Of all the worlds that circle the day star, it is the one most like home: a day almost as long as ours, ground to stand on, mountains and low places, ice at its ends — near enough that people have sent machines to drive across it, and are now building the ships to go themselves.',
        ],
        [
          'But it is a broken home, a world that lost almost everything: its water, its air, its warm days — leaving behind the emptiest red world in the sky, quiet from end to end, waiting.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Its face is red because of the ',
          { text: 'red dust', part: 'red-dust' },
          ': fine dust of ',
          { text: 'rusted', dict: 'rust' },
          ' iron — iron that met water, once, long ago, and was changed by it — blown by the wind into every corner of the world, until the whole world wears the color of old iron left in the rain.',
        ],
        [
          'Across its middle runs the ',
          { text: 'great cut', part: 'great-cut' },
          ': a ',
          { text: 'canyon', dict: 'canyon' },
          ' so long that, set down on the earth, it would reach from one side of a great country to the other; so deep that its floor is a world of its own, shadowed and cold.',
        ],
        [
          'On its edge stands the ',
          { text: 'dead fire mountain', part: 'dead-fire-mountain' },
          ': the greatest dead fire mountain in the sky — so wide that, standing on it, you would not know you were on a mountain at all, and so tall that its top rises past the air into the black.',
        ],
        [
          'And over it all hangs the ',
          { text: 'thin air', part: 'thin-air' },
          ': a covering a hundred times thinner than the air on earth, so thin that a cup of warm water would boil at the heat of your own hand, and a person standing in the open would need a space suit like the ones made for walking on the moon.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The strangest thing about the red world is that it was not always like this: its face is covered with ',
          { text: 'old river beds', part: 'old-river-beds' },
          ' — dry beds where rivers once ran, breaking apart and joining again on their way down to low ground — the clear mark of rain, rivers, and perhaps a sea, all from a time when the world was young and warm.',
        ],
        [
          'Then, some 3,500,000,000 years ago, the world began to lose its air: with no deep turning heart like ours to stand over it, the day star’s wind slowly blew the air away into space, the water dried to ice or went under the ground, and the rivers stopped.',
        ],
        [
          'The water is still there, hiding: the ',
          { text: 'ice caps', part: 'ice-caps' },
          ' at the two ends grow larger and smaller with the turning of the year — white caps of water ice and air ice — and under the red dust, everywhere, lies ground ice: more water, as ice, than in every river on earth, waiting for a warm day.',
        ],
        [
          'Watching over it all fly the ',
          { text: 'two moons', part: 'two-moons' },
          ': two small dark rocks, named in the old stories for the sons of the god of war — one rising in the west and setting in the east, three times a day; the other moving slowly, a small dark stone, waiting for the day it breaks apart and falls as a ring of dust.',
        ],
      ],
    },
    {
      sentences: [
        [
          'For years now, ',
          { text: 'robot', dict: 'robot' },
          ' cars have been driving on the red world: six wheels, camera eyes, and a long arm to hold each stone up to the light — looking for the marks of old water and old life, sending home pictures of a red, empty land under a pink sky.',
        ],
        [
          'And the ships for people are being built now: the ride takes about seven months, and the thin air is too thin to slow a falling ship, so it must land by fire and legs, the way the moon landers did.',
        ],
        [
          'Red dust, dead rivers, hiding ice, and two dark moons going round — the red world is the next house over in the sky: a cold old home that lost its air, keeping its water against the day we come to stay.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['red-dust'], sentenceRef: 3, caption: 'The red dust is the mark of water that was — iron that rusted when the world was young.' },
    { partIds: ['old-river-beds'], sentenceRef: 7, caption: 'Old river beds cross the face — rain, rivers, and maybe a sea, all long gone.' },
    { partIds: ['thin-air'], sentenceRef: 8, caption: 'With no deep turning heart to hold the air, the day star’s wind blew it away — the water dried to ice.' },
    { partIds: ['ice-caps'], sentenceRef: 9, caption: 'The water waits as ice — white caps at the ends, and ground ice under the dust.' },
    { partIds: ['two-moons'], sentenceRef: 10, caption: 'Two small dark moons circle the quiet world — one rising backwards, three turns a day.' },
  ],
  keyExpressions: [
    { text: 'world number four from the day star' },
    { text: 'dust the color of old iron', partId: 'red-dust' },
    { text: 'the color of old iron left in the rain' },
    { text: 'so wide that, standing on it, you would not know you were on a mountain at all', partId: 'dead-fire-mountain' },
    { text: 'a hundred times thinner than the air on earth', partId: 'thin-air' },
    { text: 'dry beds where rivers once ran', partId: 'old-river-beds' },
    { text: 'the clear mark of rain, rivers, and perhaps a sea' },
    { text: 'the water is still there, hiding', partId: 'ice-caps' },
    { text: 'the next house over in the sky' },
  ],
  color: '#E11D48',
}
