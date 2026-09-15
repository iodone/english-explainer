import type { ThingData } from '../types';

export const spaceSolarSail: ThingData = {
  id: 'space-solar-sail',
  slug: 'space-solar-sail',
  simpleName: 'The Light Sail',
  realName: 'Solar Sail',
  category: 'space',
  color: '#FFE082',
  funFacts: [
    'This very wide thin sheet moves a ship with the push of sun light.',
    'Light from the sun has a very small push.',
    'The wide sail takes that push and pulls the ship along.',
    'The ship does not need any fuel to move.',
    'The push starts small, but it works all day and all night.',
    'A sail can be as wide as a big field.'
  ],
  parts: [
    { id: 'sail', label: 'Main Sail', realName: 'Sail', position: [0, 0, 0], finish: 'hull' },
    { id: 'boom', label: 'Long Boom', realName: 'Boom', position: [0, 0, 0], finish: 'titanium' },
    { id: 'cable', label: 'Hold Cable', realName: 'Cable', position: [0, -0.14, 0], finish: 'cold' },
    { id: 'sensor', label: 'Push Sense', realName: 'Sensor', position: [0, 0.16, 0], finish: 'warning' },
    { id: 'hub', label: 'Center Hub', realName: 'Hub', position: [0, -0.24, 0], finish: 'hull' },
    { id: 'wire', label: 'Lead Wire', realName: 'Lead Line', position: [0.16, -0.3, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This very wide thin sheet moves a ship with the push of sun light.'],
        ['The ', { text: 'main sail', part: 'sail' }, ' is the wide thin sheet that takes the light push.'],
        ['The ', { text: 'long boom', part: 'boom' }, ' is the strong bar that holds the sail out flat.'],
        ['The ', { text: 'hold cable', part: 'cable' }, ' keeps the boom in place.'],
        ['The ', { text: 'push sense', part: 'sensor' }, ' reads how hard the light pushes on the sail.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'center hub', part: 'hub' }, ' is the middle part that joins the sail to the ship.'],
        ['The ', { text: 'lead wire', part: 'wire' }, ' takes the answer to the computers.'],
        ['Light from the sun has a very small push.'],
        ['The wide sail takes that push and pulls the ship along.'],
        ['The ship does not need any fuel to move.'],
        ['The push starts small, but it works all day and all night.']
      ]
    }
  ],
  flow: [
    { partIds: ['sail'], caption: 'The main sail takes the light push', sentenceRef: 1 },
    { partIds: ['boom'], caption: 'The long boom holds the sail out flat', sentenceRef: 2 },
    { partIds: ['cable'], caption: 'The hold cable keeps the boom in place', sentenceRef: 3 },
    { partIds: ['sensor'], caption: 'The push sense reads how hard the light pushes on the sail', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'main sail', partId: 'sail' },
    { text: 'long boom', partId: 'boom' },
    { text: 'hold cable', partId: 'cable' },
    { text: 'center hub', partId: 'hub' }
  ]
};
