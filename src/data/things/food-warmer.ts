import type { ThingData } from '../types'

export const foodWarmer: ThingData = {
  id: 'food-warmer',
  slug: 'food-warmer',
  simpleName: 'The Food Warmer',
  realName: 'Food warmer',
  category: 'home',
  funFacts: [
    'A food warmer can keep food warm for many hours without cooking it more.',
    'The first food warmers were made a very long time ago using fire under a box.',
    'Some food warmers can keep food at just the right warm so it does not get too hot or too cold.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'heat-part', label: 'heat part', realName: 'Heating element', position: [0, -0.04, 0], finish: 'warning' },
    { id: 'food-place', label: 'food place', realName: 'Warming tray', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'top-part', label: 'top part', realName: 'Glass lid', position: [0, 0.10, 0], finish: 'cold' },
    { id: 'button', label: 'button', realName: 'Control knob', position: [0, 0.06, 0.12], finish: 'warning' },
    { id: 'light', label: 'light', realName: 'Indicator light', position: [0, 0.08, 0.10], finish: 'cold' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cord', position: [0, -0.10, -0.08], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'food warmer', dict: 'food-warmer' },
          '. It keeps food warm after it has been cooked.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' holds all the important parts inside.',
        ],
        [
          'The ',
          { text: 'heat part', part: 'heat-part' },
          ' under the top gets warm and heats the food place.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'food place', part: 'food-place' },
          ' on top is where you put the food you want to keep warm.',
        ],
        ['It is made of metal that gets warm and stays warm for a long time.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'top part', part: 'top-part' },
          ' made of see-through stuff closes the top so the heat stays inside.',
        ],
        ['You can see the food through the top part without opening it.'],
      ],
    },
    {
      sentences: [
        [
          'You turn the ',
          { text: 'button', part: 'button' },
          ' to make the food warmer more or less warm.',
        ],
        [
          'A small ',
          { text: 'light', part: 'light' },
          ' shows you if the food warmer is on.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The food warmer gets power through the ',
          { text: 'power wire', part: 'power-wire' },
          ' at the back.',
        ],
        ['Food warmers are very good for keeping food warm when many people are eating at different times.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'heat-part'], sentenceRef: 1, caption: 'The body holds everything; the heat part gets warm.' },
    { partIds: ['food-place'], sentenceRef: 4, caption: 'The food place is where you put the food to keep it warm.' },
    { partIds: ['top-part'], sentenceRef: 6, caption: 'The top part closes the top so heat stays inside.' },
    { partIds: ['button', 'light'], sentenceRef: 8, caption: 'Button makes it more or less warm; light shows if it is on.' },
    { partIds: ['power-wire'], sentenceRef: 10, caption: 'Power wire brings power; food stays warm for a long time.' },
  ],
  keyExpressions: [
    { text: 'food warmer', partId: 'food-place' },
    { text: 'keeps food warm after it has been cooked', partId: 'food-place' },
    { text: 'gets warm and heats the food place', partId: 'heat-part' },
    { text: 'put the food you want to keep warm', partId: 'food-place' },
    { text: 'made of see-through stuff closes the top', partId: 'top-part' },
    { text: 'make the food warmer more or less warm', partId: 'button' },
    { text: 'shows you if the food warmer is on', partId: 'light' },
  ],
  color: '#FFE4B5',
}