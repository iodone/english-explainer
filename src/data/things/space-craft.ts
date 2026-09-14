import type { ThingData } from '../types'

export const spaceCraft: ThingData = {
  id: 'space-craft',
  slug: 'space-craft',
  simpleName: 'The Sky Boat',
  realName: 'Spacecraft',
  category: 'space',
  funFacts: [
    'A sky boat can carry people or things from the ground all the way up to the sky.',
    'The first sky boat that carried people was sent up more than 60 years ago.',
    'Some sky boats can go to other worlds in our sky.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Hull', position: [0, 0, 0], finish: 'hull' },
    { id: 'front-part', label: 'front part', realName: 'Command module', position: [0, 0, 0.12], finish: 'titanium' },
    { id: 'fire-part', label: 'fire part', realName: 'Engine', position: [0, 0, -0.14], finish: 'warning' },
    { id: 'power-part', label: 'power part', realName: 'Power system', position: [0.08, 0, 0], finish: 'cold' },
    { id: 'talk-part', label: 'talk part', realName: 'Communication system', position: [0, 0.08, 0.04], finish: 'titanium' },
    { id: 'air-part', label: 'air part', realName: 'Life support', position: [0, -0.06, 0.06], finish: 'cold' },
    { id: 'wing', label: 'wing', realName: 'Solar array', position: [0.14, 0, -0.04], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky boat', dict: 'space-craft' },
          '. It can carry people or things from the ground up to the sky.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the big round part that holds everything inside.',
        ],
        [
          'The ',
          { text: 'front part', part: 'front-part' },
          ' at the front is where the people sit and drive the sky boat.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'fire part', part: 'fire-part' },
          ' at the back makes fire to push the sky boat forward.',
        ],
        ['The fire can be very, very hot — hot enough to push a very heavy thing up.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'power part', part: 'power-part' },
          ' makes power for all the other parts.',
        ],
        [
          'The ',
          { text: 'talk part', part: 'talk-part' },
          ' lets the people talk to the ground.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'air part', part: 'air-part' },
          ' makes the air inside good for people to breathe.',
        ],
        ['Without the air part, the people inside could not live.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'wing', part: 'wing' },
          ' on the side takes in light from the sun and makes power.',
        ],
        ['Sky boats are how we go from the ground to the sky and back again.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'front-part'], sentenceRef: 1, caption: 'Body holds everything; front part is where people sit.' },
    { partIds: ['fire-part'], sentenceRef: 4, caption: 'Fire part makes fire to push it forward.' },
    { partIds: ['power-part', 'talk-part'], sentenceRef: 6, caption: 'Power part makes power; talk part lets people talk to ground.' },
    { partIds: ['air-part'], sentenceRef: 8, caption: 'Air part makes good air for people to breathe.' },
    { partIds: ['wing'], sentenceRef: 10, caption: 'Wing takes in light from the sun.' },
  ],
  keyExpressions: [
    { text: 'sky boat', partId: 'body' },
    { text: 'carries people or things from the ground up to the sky', partId: 'body' },
    { text: 'holds everything inside', partId: 'body' },
    { text: 'where the people sit and drive', partId: 'front-part' },
    { text: 'makes fire to push forward', partId: 'fire-part' },
    { text: 'makes the air inside good for people to breathe', partId: 'air-part' },
    { text: 'talk to the ground', partId: 'talk-part' },
  ],
  color: '#C0C0C0',
}