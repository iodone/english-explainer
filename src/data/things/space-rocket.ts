import type { ThingData } from '../types'

export const spaceRocket: ThingData = {
  id: 'space-rocket',
  slug: 'space-rocket',
  simpleName: 'The Fire Stick',
  realName: 'Space rocket',
  category: 'space',
  funFacts: [
    'A fire stick can go faster than anything else people have ever made.',
    'The first fire stick that went to the sky was sent up about 70 years ago.',
    'Some fire sticks are as tall as a very tall building.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Rocket body', position: [0, 0, 0], finish: 'hull' },
    { id: 'front-part', label: 'front part', realName: 'Nose cone', position: [0, 0.16, 0], finish: 'titanium' },
    { id: 'fire-part', label: 'fire part', realName: 'Engine nozzle', position: [0, -0.18, 0], finish: 'warning' },
    { id: 'side-body', label: 'side body', realName: 'Booster', position: [0.08, -0.04, 0], finish: 'hull' },
    { id: 'wing', label: 'wing', realName: 'Fin', position: [0.06, -0.14, 0], finish: 'cold' },
    { id: 'point-part', label: 'point part', realName: 'Guidance system', position: [0, 0.10, 0], finish: 'titanium' },
    { id: 'power-part', label: 'power part', realName: 'Fuel tank', position: [0, -0.04, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'fire stick', dict: 'space-rocket' },
          '. It is the fastest thing people have ever made.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the tall round part that holds everything inside.',
        ],
        [
          'The ',
          { text: 'front part', part: 'front-part' },
          ' at the top is pointy so it can go through the air fast.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the bottom is the ',
          { text: 'fire part', part: 'fire-part' },
          ' where very hot fire comes out.',
        ],
        ['The fire pushes the fire stick up into the sky.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'side body', part: 'side-body' },
          ' on the side holds more fire-making things to make it go even faster.',
        ],
        [
          'The ',
          { text: 'wing', part: 'wing' },
          ' at the bottom helps it go straight and not turn.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'point part', part: 'point-part' },
          ' tells the fire stick where to go.',
        ],
        [
          'The ',
          { text: 'power part', part: 'power-part' },
          ' in the middle holds the things that make the fire.',
        ],
      ],
    },
    {
      sentences: [
        ['When the fire-making things are all used up, the side body falls off.'],
        ['Fire sticks are how we send things from the ground up to the sky.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'front-part'], sentenceRef: 1, caption: 'Body holds everything; front part is pointy for going fast.' },
    { partIds: ['fire-part'], sentenceRef: 4, caption: 'Fire part makes fire to push it up.' },
    { partIds: ['side-body', 'wing'], sentenceRef: 6, caption: 'Side body holds more fire; wing keeps it straight.' },
    { partIds: ['point-part', 'power-part'], sentenceRef: 8, caption: 'Point part tells where to go; power part holds fire things.' },
    { partIds: ['side-body'], sentenceRef: 10, caption: 'Side body falls off when fire things are used up.' },
  ],
  keyExpressions: [
    { text: 'fire stick', partId: 'body' },
    { text: 'the fastest thing people have ever made', partId: 'fire-part' },
    { text: 'pointy so it can go through the air fast', partId: 'front-part' },
    { text: 'very hot fire comes out', partId: 'fire-part' },
    { text: 'pushes the fire stick up into the sky', partId: 'fire-part' },
    { text: 'tells the fire stick where to go', partId: 'point-part' },
    { text: 'holds the things that make the fire', partId: 'power-part' },
  ],
  color: '#F5F5F5',
}