import type { ThingData } from '../types'

export const waterWheel: ThingData = {
  id: 'water-wheel',
  slug: 'water-wheel',
  simpleName: 'Water Turner',
  realName: 'Water Wheel',
  category: 'power',
  funFacts: [
    'Some water wheels were built bigger than houses — not to make food dust, but to lift water out of the deep holes under the hills where metal waits.',
    'A wheel turns slowly enough that a fish can pass through the moving boards and be fine — the river keeps its fish, and the town keeps its food.',
    'Hundreds of water wheels still turn today, a few of them still making food dust the very old way, pushed by nothing but the river.',
  ],
  parts: [
    { id: 'big-wheel', label: 'Big Wheel', realName: 'Water Wheel', position: [-0.35, 0.15, 0], finish: 'hull' },
    { id: 'water-boards', label: 'Water Boards', realName: 'Paddles', position: [-0.35, 1.13, 0], finish: 'warning' },
    { id: 'middle-stick', label: 'Middle Stick', realName: 'Axle', position: [0.35, 0.15, 0], finish: 'cold' },
    { id: 'gear-wheels', label: 'Gear Wheels', realName: 'Gears', position: [1.15, 0.15, 0], finish: 'cold' },
    { id: 'stone-pair', label: 'Stone Pair', realName: 'Millstones', position: [1.15, 0.64, 0], finish: 'titanium' },
    { id: 'water-gate', label: 'Water Gate', realName: 'Sluice Gate', position: [-0.7, 1.13, 0], finish: 'cold' },
    { id: 'water-road', label: 'Water Road', realName: 'Flume', position: [-1.25, 1.32, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['A water turner is a great wheel with boards around its edge, standing beside a river and turned by the weight of falling water — a power machine so old that no one remembers who built the first one.'],
        ['Water is heavy, and a river pushing on the boards of a wheel is a hand that never gets tired: a good wheel can do the work of twenty horses, day and night, eating nothing.'],
        ['The idea is older than books: set a wheel in a falling river and the river will turn it for you, all day, all night, for as long as the water comes down the hill.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'water road', part: 'water-road' },
          ' — a short path of wood or stone, built above the river — carries the water to the top of the wheel and drops it on the boards, so every drop falls from as high as it can.',
        ],
        [
          'The ',
          { text: 'water gate', part: 'water-gate' },
          ' decides how much of the river gets to push: open it wide and the wheel runs fast, close it almost shut and the wheel walks, shut it and the whole house rests.',
        ],
        [
          'The ',
          { text: 'water boards', part: 'water-boards' },
          ' take the push, the ',
          { text: 'big wheel', part: 'big-wheel' },
          ' turns, and the ',
          { text: 'middle stick', part: 'middle-stick' },
          ' — the long bar the wheel rides on — carries the turning out of the water and into the house.',
        ],
        [
          'Inside, the ',
          { text: 'gear wheels', part: 'gear-wheels', dict: 'gear' },
          ' ',
          { text: 'trade', dict: 'trade' },
          ' the wheel’s fast turning for slow, strong turning, and hand it to the ',
          { text: 'stone pair', part: 'stone-pair' },
          ': two round stones, one upon the other, that rub the dry food people grow into the soft dust that feeds the town.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The river sets the ',
          { text: 'speed', dict: 'speed' },
          ': in the dry months the wheel slows, in the wet months it may turn too hard, and the gate is how the wheel’s keeper keeps the stones from running hot.',
        ],
        ['A water turner wants a river that falls or runs fast: on a slow, flat river the boards just sleep in the water.'],
        ['Where the land gave no falling water, people raised wind turners instead — the two are brothers under different skies, each catching a different pushing hand.'],
        ['And in time the children of the wheel grew as big as the Water Wall: falling water, turning wheels, engines that make light — the idea never changed, only the size.'],
      ],
    },
    {
      sentences: [
        ['For as long as anyone can remember, almost everything that turned was turned by water: the wheels made the food dust, the paper, the cloth; they cut the wood and beat the metal; whole towns grew up anywhere a river fell.'],
        [
          'When ',
          { text: 'steam', dict: 'steam' },
          ' engines came, the work moved off the rivers, and the wheels that remain now turn mostly to be watched and loved rather than needed.',
        ],
        ['But stand beside one when the river is high, and you can hear the whole story: water falling, wood turning, stone rubbing — the push of a river becoming the food of a town.'],
      ],
    },
  ],
  flow: [
    { partIds: ['water-road'], sentenceRef: 3, caption: 'The water road lifts every drop as high as it can before spending it.' },
    { partIds: ['water-gate'], sentenceRef: 4, caption: 'The gate decides how much river gets to push.' },
    { partIds: ['big-wheel'], sentenceRef: 5, caption: 'The big wheel turns under the falling water.' },
    { partIds: ['gear-wheels'], sentenceRef: 6, caption: 'Gears trade fast for strong.' },
    { partIds: ['stone-pair'], sentenceRef: 11, caption: 'For hundreds of years, the wheels fed the towns.' },
  ],
  keyExpressions: [
    { text: 'the weight of falling water' },
    { text: 'a hand that never gets tired' },
    { text: 'the work of twenty horses' },
    { text: 'every drop falls from as high as it can' },
    { text: 'trade fast for strong' },
    { text: 'the river sets the speed' },
    { text: 'the boards just sleep in the water' },
    { text: 'brothers under different skies' },
    { text: 'grew up anywhere a river fell' },
  ],
  color: '#22C55E',
}
