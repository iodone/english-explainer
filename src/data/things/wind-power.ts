import type { ThingData } from '../types'

export const windPower: ThingData = {
  id: 'wind-power',
  slug: 'wind-power',
  simpleName: 'The Wind Maker',
  realName: 'Wind turbine',
  category: 'power',
  funFacts: [
    'A wind maker can make power for hundreds of houses from only the wind.',
    'The first wind makers were made more than 100 years ago.',
    'Some wind makers are as tall as a very, very tall building.',
  ],
  parts: [
    { id: 'tower', label: 'tower', realName: 'Tower', position: [0, 0, 0], finish: 'hull' },
    { id: 'big-spin', label: 'big spin', realName: 'Rotor blade', position: [0, 0.14, 0.02], finish: 'cold' },
    { id: 'front-part', label: 'front part', realName: 'Nacelle', position: [0, 0.10, 0], finish: 'hull' },
    { id: 'turn-part', label: 'turn part', realName: 'Generator', position: [0, 0.10, -0.02], finish: 'titanium' },
    { id: 'power-wire', label: 'power wire', realName: 'Power cable', position: [0, -0.04, -0.04], finish: 'cold' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Foundation', position: [0, -0.18, 0], finish: 'hull' },
    { id: 'point-part', label: 'point part', realName: 'Anemometer', position: [0, 0.12, 0.04], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'wind maker', dict: 'wind-power' },
          '. It makes power from only the wind.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'tower', part: 'tower' },
          ' is the very tall part that goes up into the air.',
        ],
        ['It is made very strong so the wind can not push it over.'],
      ],
    },
    {
      sentences: [
        [
          'At the top of the tower is the ',
          { text: 'big spin', part: 'big-spin' },
          ' — three very long flat pieces that turn in the wind.',
        ],
        [
          'The big spin is joined to the ',
          { text: 'front part', part: 'front-part' },
          ' behind it.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside the front part is the ',
          { text: 'turn part', part: 'turn-part' },
          ' that makes power when the big spin turns.',
        ],
        ['The harder the wind blows, the more power it makes.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'power wire', part: 'power-wire' },
          ' inside the tower carries the power down to the ground.',
        ],
        [
          'The ',
          { text: 'bottom part', part: 'bottom-part' },
          ' under the ground holds the tower in place.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'point part', part: 'point-part' },
          ' on top reads how fast the wind is going.',
        ],
        ['Wind makers are very good because they use only the wind, which is free.'],
      ],
    },
  ],
  flow: [
    { partIds: ['tower'], sentenceRef: 1, caption: 'The tower is very tall and strong.' },
    { partIds: ['big-spin', 'front-part'], sentenceRef: 4, caption: 'Big spin turns in the wind; front part holds the turn part.' },
    { partIds: ['turn-part'], sentenceRef: 6, caption: 'Turn part makes power when big spin turns.' },
    { partIds: ['power-wire', 'bottom-part'], sentenceRef: 8, caption: 'Power wire carries power down; bottom part holds tower.' },
    { partIds: ['point-part'], sentenceRef: 10, caption: 'Point part reads how fast the wind is going.' },
  ],
  keyExpressions: [
    { text: 'wind maker', partId: 'big-spin' },
    { text: 'makes power from only the wind', partId: 'turn-part' },
    { text: 'very tall part that goes up into the air', partId: 'tower' },
    { text: 'three very long flat pieces that turn', partId: 'big-spin' },
    { text: 'makes power when the big spin turns', partId: 'turn-part' },
    { text: 'carries the power down to the ground', partId: 'power-wire' },
    { text: 'reads how fast the wind is going', partId: 'point-part' },
  ],
  color: '#F5F5F5',
}