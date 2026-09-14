import type { ThingData } from '../types'

export const blender: ThingData = {
  id: 'blender',
  slug: 'blender',
  simpleName: 'The Food Cutter',
  realName: 'Blender',
  category: 'home',
  funFacts: [
    'The first blenders were made to make drinks at a food store — people loved them so much they wanted one at home.',
    'A good blender can turn ice into snow in less than ten seconds.',
    'Some blenders are so strong they can break down the hardest food into a fine drink.',
  ],
  parts: [
    { id: 'cup', label: 'cup', realName: 'Jar', position: [0, 0.14, 0], finish: 'cold' },
    { id: 'blade', label: 'blade', realName: 'Blade assembly', position: [0, -0.02, 0], finish: 'titanium' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Motor base', position: [0, -0.20, 0], finish: 'hull' },
    { id: 'lid', label: 'lid', realName: 'Lid', position: [0, 0.32, 0], finish: 'cold' },
    { id: 'button', label: 'button', realName: 'Speed control', position: [0, -0.14, 0.14], finish: 'warning' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0.22, 0.14, 0], finish: 'hull' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.24, -0.14], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This ',
          { text: 'blender', dict: 'blender' },
          ' cuts food very fast — it can turn hard food into a fine drink.',
        ],
        [
          'Put your food and drink into the ',
          { text: 'cup', part: 'cup' },
          ', push the ',
          { text: 'button', part: 'button' },
          ', and watch it go.',
        ],
        ['The blade inside turns so fast that it cuts everything into very small parts.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'cup', part: 'cup' },
          ' is made of a clear glass so you can see the food getting put together.',
        ],
        [
          'At the bottom of the cup, a sharp ',
          { text: 'blade', part: 'blade' },
          ' spins around and cuts the food.',
        ],
        [
          'The ',
          { text: 'bottom part', part: 'bottom-part' },
          ' holds the motor that makes the blade turn.',
        ],
        [
          'A ',
          { text: 'lid', part: 'lid' },
          ' on top keeps everything inside — without it, food would fly everywhere.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'button', part: 'button' },
          ' on the front lets you choose how fast the blade turns.',
        ],
        [
          'A ',
          { text: 'handle', part: 'handle' },
          ' on the side helps you hold the cup when you pour.',
        ],
        [
          'The ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back brings power from the wall to the motor.',
        ],
        ['When you are done, take off the lid, pour out the drink, and wash the cup.'],
      ],
    },
    {
      sentences: [
        ['The first blenders were made in the 1920s — people used them to make drinks at food stores.'],
        ['Today, almost every kitchen has one — they can make drinks, hot foods, and even break ice.'],
        ['Some new ones can even heat food while they put food together — they are like a kitchen in one thing.'],
      ],
    },
  ],
  flow: [
    { partIds: ['cup'], sentenceRef: 3, caption: 'The cup is made of a clear glass so you can see the food getting put together.' },
    { partIds: ['blade'], sentenceRef: 4, caption: 'A sharp blade at the bottom spins and cuts the food.' },
    { partIds: ['bottom-part'], sentenceRef: 5, caption: 'The bottom part holds the motor that makes the blade turn.' },
    { partIds: ['lid'], sentenceRef: 6, caption: 'A lid on top keeps everything inside.' },
    { partIds: ['power-wire'], sentenceRef: 9, caption: 'The power wire brings power from the wall to the motor.' },
  ],
  keyExpressions: [
    { text: 'cuts and puts food together very fast', partId: 'blade' },
    { text: 'turn hard food into a fine drink', partId: 'cup' },
    { text: 'made of a clear glass so you can see', partId: 'cup' },
    { text: 'spins around and cuts the food', partId: 'blade' },
    { text: 'holds the motor that makes the blade turn', partId: 'bottom-part' },
    { text: 'keeps everything inside', partId: 'lid' },
    { text: 'lets you choose how fast the blade turns', partId: 'button' },
    { text: 'helps you hold the cup when you pour', partId: 'handle' },
    { text: 'brings power from the wall to the motor', partId: 'power-wire' },
  ],
  color: '#FF6B6B',
}