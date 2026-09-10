import type { ThingData } from '../types'

export const iron: ThingData = {
  id: 'iron',
  slug: 'iron',
  simpleName: 'Cloth Presser',
  realName: 'Iron',
  category: 'home',
  funFacts: [
    'Before power, people heated flat metal pieces on the fire and pressed with those — a house kept two, one pressing while the other heated.',
    'The word iron is also the name of the metal — the first ones were one thick piece of it, so heavy that the weight of the metal itself did much of the work.',
    'Before heat wheels, people tested the metal with a drop of water: if it jumped and moved fast, the iron was ready.',
  ],
  parts: [
    { id: 'hot-bottom', label: 'Hot Bottom', realName: 'Soleplate', position: [-0.1, 0.85, 0], finish: 'titanium' },
    { id: 'heat-maker', label: 'Heat Maker', realName: 'Heating Element', position: [0.9, 0.15, 0], finish: 'warning' },
    { id: 'water-room', label: 'Water Room', realName: 'Water Tank', position: [-0.9, -0.45, 0], finish: 'hull' },
    { id: 'steam-holes', label: 'Steam Holes', realName: 'Steam Vents', position: [0.15, -0.5, 0], finish: 'cold' },
    { id: 'hand-holder', label: 'Hand Holder', realName: 'Handle', position: [1.35, 0.45, 0], finish: 'cold' },
    { id: 'heat-wheel', label: 'Heat Wheel', realName: 'Thermostat Dial', position: [-1.25, 0.1, 0], finish: 'cold' },
    { id: 'power-wire', label: 'Power Wire', realName: 'Power Cord', position: [1.5, -0.15, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'An ',
          { text: 'iron', dict: 'iron' },
          ' is a hot, heavy piece of metal with a ',
          { text: 'handle', part: 'hand-holder', dict: 'handle' },
          ' — made to press the lines out of cloth.',
        ],
        ['Cloth is not one piece: it is tiny lines going over and under each other.'],
        ['When you wear cloth all day, those tiny lines get pushed out of their places — and the cloth remembers.'],
      ],
    },
    {
      sentences: [
        [
          'The heart of the machine is its ',
          { text: 'hot bottom', part: 'hot-bottom' },
          ': a thick plate of metal that grows very hot.',
        ],
        ['Under heat and weight, the tiny lines inside the cloth become soft and slide back into place, and the cloth goes flat.'],
        ['As the cloth cools, it keeps its new flat shape, and the old lines do not come back.'],
        ['Be careful: the hot bottom can burn your hand faster than you can pull it away.'],
      ],
    },
    {
      sentences: [
        [
          'Most irons also hold water, in a small ',
          { text: 'water room', part: 'water-room' },
          ' hidden inside the body.',
        ],
        [
          'The water runs down to a line of ',
          { text: 'steam holes', part: 'steam-holes' },
          ' in the bottom.',
        ],
        [
          'There it touches the hot metal, becomes ',
          { text: 'steam', dict: 'steam' },
          ', and pushes up into the cloth.',
        ],
        ['Steam carries heat far inside, so the tiny lines become soft all the way through — not only on top.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'heat wheel', part: 'heat-wheel' },
          ' sets how hot: two different metals stuck together bend as they warm, and that little bend turns the ',
          { text: 'heat maker', part: 'heat-maker' },
          ' off before things get too hot, then on again as it cools.',
        ],
        [
          'The ',
          { text: 'power wire', part: 'power-wire' },
          ' brings power from the wall to the heat maker — power running through it makes it hot, like a small fire that never burns.',
        ],
        ['No moving parts, no computer — only heat, weight and water, doing what hot stones did hundreds and hundreds of years ago.'],
      ],
    },
  ],
  flow: [
    { partIds: ['hand-holder'], caption: 'Your hand only pushes — the heavy metal does half the work.', sentenceRef: 0 },
    { partIds: ['hot-bottom'], caption: 'The thick bottom grows very hot and presses the tiny lines flat.', sentenceRef: 3 },
    { partIds: ['water-room', 'steam-holes'], caption: 'Water touches the hot metal, becomes steam, and pushes up into the cloth.', sentenceRef: 9 },
    { partIds: ['heat-wheel'], caption: 'Two different metals bend as they warm, turning the heat off and on.', sentenceRef: 11 },
    { partIds: ['heat-maker', 'power-wire'], caption: 'Power from the wall runs through the heat maker and makes it hot.', sentenceRef: 12 },
  ],
  keyExpressions: [
    { text: 'press the lines out of cloth', partId: 'hot-bottom' },
    { text: 'tiny lines going over and under' },
    { text: 'the cloth remembers', partId: 'hot-bottom' },
    { text: 'become soft and slide back into place' },
    { text: 'keeps its new flat shape' },
    { text: 'carries heat far inside', partId: 'steam-holes' },
    { text: 'becomes steam', partId: 'water-room' },
    { text: 'bend as they warm', partId: 'heat-wheel' },
    { text: 'like a small fire that never burns', partId: 'heat-maker' },
  ],
  color: '#EF4444',
}
