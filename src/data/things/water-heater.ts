import type { ThingData } from '../types'

export const waterHeater: ThingData = {
  id: 'water-heater',
  slug: 'water-heater',
  simpleName: 'The Water Warmer',
  realName: 'Water Heater',
  category: 'power',
  funFacts: [
    'A water heater works all day and night — it is one of the things in your house that never stops.',
    'The first water heaters were just pots of water over a fire — today they are much safer.',
    'Some new water heaters make hot water only when you need it — they do not keep a big tank of hot water all the time.',
  ],
  parts: [
    { id: 'tank', label: 'tank', realName: 'Storage tank', position: [0, 0, 0], finish: 'hull' },
    { id: 'water-in', label: 'water in', realName: 'Cold water inlet', position: [-0.20, 0.18, 0], finish: 'cold' },
    { id: 'water-out', label: 'water out', realName: 'Hot water outlet', position: [0.20, 0.18, 0], finish: 'warning' },
    { id: 'heat-part', label: 'heat part', realName: 'Heating element', position: [0, -0.16, 0], finish: 'warning' },
    { id: 'temperature-handle', label: 'temperature handle', realName: 'Thermostat', position: [0, -0.06, 0.14], finish: 'titanium' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cable', position: [0, -0.24, -0.10], finish: 'cold' },
    { id: 'safety-valve', label: 'safety valve', realName: 'T&P valve', position: [0.14, 0.22, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This tall box keeps water hot so you can wash your hands and take a hot bath.'],
        [
          'Cold water goes in at the bottom, the ',
          { text: 'heat part', part: 'heat-part' },
          ' makes it hot, and hot water comes out the top.',
        ],
        ['It is like a big pot that never stops heating water.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'tank', part: 'tank' },
          ' is a tall round box that holds a lot of water inside.',
        ],
        [
          'Cold water comes in through the ',
          { text: 'water in', part: 'water-in' },
          ' at the top left.',
        ],
        [
          'Hot water goes out through the ',
          { text: 'water out', part: 'water-out' },
          ' at the top right — ready for your bath.',
        ],
        [
          'The ',
          { text: 'heat part', part: 'heat-part' },
          ' at the bottom makes the water hot, like a fire under a pot.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'temperature handle', part: 'temperature-handle' },
          ' on the front lets you choose how hot the water gets.',
        ],
        [
          'A ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back brings power to the heat part.',
        ],
        [
          'A ',
          { text: 'safety valve', part: 'safety-valve' },
          ' on top lets water out if it gets too hot — this keeps the tank from breaking.',
        ],
        ['Without this box, there would be no hot water for washing or cooking.'],
      ],
    },
    {
      sentences: [
        ['The first water heaters were just big pots over a fire — not very safe.'],
        ['Today, they are much safer and can keep water hot all day and all night.'],
        ['Some new ones use the heat from the ground instead of fire — they are very good for the world.'],
      ],
    },
  ],
  flow: [
    { partIds: ['tank'], sentenceRef: 3, caption: 'The tank is a tall round box that holds a lot of water.' },
    { partIds: ['water-in'], sentenceRef: 4, caption: 'Cold water comes in through the water in at the top left.' },
    { partIds: ['water-out'], sentenceRef: 5, caption: 'Hot water goes out through the water out at the top right.' },
    { partIds: ['heat-part'], sentenceRef: 6, caption: 'The heat part at the bottom makes the water hot.' },
    { partIds: ['safety-valve'], sentenceRef: 9, caption: 'The safety valve lets water out if it gets too hot.' },
  ],
  keyExpressions: [
    { text: 'keeps water hot so you can wash', partId: 'tank' },
    { text: 'cold water goes in at the bottom', partId: 'water-in' },
    { text: 'hot water comes out the top', partId: 'water-out' },
    { text: 'makes the water hot, like a fire under a pot', partId: 'heat-part' },
    { text: 'lets you choose how hot the water gets', partId: 'temperature-handle' },
    { text: 'brings power to the heat part', partId: 'power-wire' },
    { text: 'lets water out if it gets too hot', partId: 'safety-valve' },
    { text: 'a big pot that never stops heating water' },
    { text: 'keeps the tank from breaking' },
  ],
  color: '#FF7F7F',
}