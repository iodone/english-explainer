import type { ThingData } from '../types';

export const homeMicrowave: ThingData = {
  id: 'home-microwave',
  slug: 'home-microwave',
  simpleName: 'The Fast Heater',
  realName: 'Microwave Oven',
  category: 'home',
  color: '#C4C8CE',
  funFacts: [
    'The waves inside this box are the same kind as the waves that carry radio shows.',
    'Water takes in these waves much better than dry things do.',
    'That is why a dry plate stays cool while hot food on it gets warm.',
    'The first one was sold in 1947 and was as tall as a person.',
    'A small screen in the door blocks the waves but lets light through.',
    'Never put a metal cup inside, because the waves can make it very hot.'
  ],
  parts: [
    { id: 'box', label: 'Box', realName: 'Cavity', position: [0, 0, 0], finish: 'hull' },
    { id: 'table', label: 'Turning Table', realName: 'Turntable', position: [0, -0.22, 0.05], finish: 'hull' },
    { id: 'door', label: 'Door', realName: 'Door', position: [0, 0, 0.3], finish: 'titanium' },
    { id: 'wave-maker', label: 'Wave Maker', realName: 'Magnetron', position: [-0.55, 0.1, -0.1], finish: 'cold' },
    { id: 'timer', label: 'Timer Dial', realName: 'Timer', position: [0.4, 0.42, 0.22], finish: 'warning' },
    { id: 'vent', label: 'Air Holes', realName: 'Vent', position: [0.55, 0.1, -0.1], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This box heats food very fast with waves you can not see.'],
        ['You put the food in and close the ', { text: 'door', part: 'door' }, '.'],
        ['The ', { text: 'wave maker', part: 'wave-maker' }, ' makes the waves and sends them into the box.'],
        ['The ', { text: 'box', part: 'box' }, ' holds the waves so they do not get out.'],
        ['The waves make the water in the food move very fast, and that makes heat.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'turning table', part: 'table' }, ' turns the food so all sides get hot.'],
        ['The ', { text: 'timer dial', part: 'timer' }, ' rings when the food is done.'],
        ['The ', { text: 'air holes', part: 'vent' }, ' let hot air out of the box.'],
        ['The door has a screen with small holes, so you can look in but the waves stay in.'],
        ['Metal things must not go inside, because the waves can make them very hot.'],
        ['In a few minutes, cold food comes out hot all the way through.']
      ]
    }
  ],
  flow: [
    { partIds: ['wave-maker'], caption: 'The wave maker makes the waves and sends them into the box', sentenceRef: 2 },
    { partIds: ['box'], caption: 'The box holds the waves so they do not get out', sentenceRef: 3 },
    { partIds: ['table'], caption: 'The turning table turns the food so all sides get hot', sentenceRef: 5 },
    { partIds: ['timer'], caption: 'The timer dial rings when the food is done', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'wave maker', partId: 'wave-maker' },
    { text: 'turning table', partId: 'table' },
    { text: 'timer dial', partId: 'timer' },
    { text: 'air holes', partId: 'vent' }
  ]
};
