import type { ThingData } from '../types';

export const powerTurbine: ThingData = {
  id: 'power-turbine',
  slug: 'power-turbine',
  simpleName: 'The Spinning Power Maker',
  realName: 'Turbine',
  category: 'power',
  color: '#2F4F4F',
  funFacts: [
    'This thing makes power by spinning around very fast.',
    'Wind or water or hot gas makes it spin.',
    'The spinning turns a machine that makes power.',
    'Some of them are as tall as a very big building.',
    'The ones in the sea use the water to spin.',
    'They can make enough power for a whole town.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'nacelle', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'exhaust', position: [0, -0.15, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'intake', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'rotor', position: [0, 0, 0], finish: 'warning' },
    { id: 'blade', label: 'blade', realName: 'blade', position: [0, 0.25, 0], finish: 'titanium' },
    { id: 'power', label: 'power', realName: 'generator', position: [0, 0, 0.15], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that makes power by spinning around.'],
        ['Wind or water or hot gas pushes the ', { text: 'blade', part: 'blade' }, ' to make it go around.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the parts together.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the part that spins around very fast.']
      ]
    },
    {
      sentences: [
        ['When the ', { text: 'blade', part: 'blade' }, ' spins, it turns the ', { text: 'inside', part: 'inside' }, ' inside the ', { text: 'body', part: 'body' }, '.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is joined to the ', { text: 'power', part: 'power' }, '.'],
        ['The ', { text: 'power', part: 'power' }, ' turns the spinning into power that we can use.'],
        ['The wind or water comes in through the ', { text: 'top', part: 'top' }, '.'],
        ['After it pushes the ', { text: 'blade', part: 'blade' }, ', it goes out through the ', { text: 'end', part: 'end' }, '.'],
        ['Some of these are very tall, taller than a big building.'],
        ['They can make enough power for a whole town.']
      ]
    }
  ],
  flow: [
    { partIds: ['top'], caption: 'Wind or water comes in through the top', sentenceRef: 7 },
    { partIds: ['blade', 'inside'], caption: 'The blades spin the rotor around', sentenceRef: 4 },
    { partIds: ['power'], caption: 'The generator turns spinning into power', sentenceRef: 6 },
    { partIds: ['end'], caption: 'The air or water goes out through the end', sentenceRef: 8 }
  ],
  keyExpressions: [
    { text: 'turbine', partId: 'body' },
    { text: 'rotor', partId: 'inside' },
    { text: 'blade', partId: 'blade' },
    { text: 'generator', partId: 'power' }
  ]
};