import type { ThingData } from '../types'

export const spaceHabitat: ThingData = {
  id: 'space-habitat',
  slug: 'space-habitat',
  simpleName: 'The Sky Home',
  realName: 'Space habitat',
  category: 'space',
  funFacts: [
    'A sky home can be as big as a very large house and hold many people at the same time.',
    'The first sky homes were very small and could only hold a few people.',
    'Some sky homes have special rooms for growing food so the people do not have to bring all their food from the ground.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Pressure vessel', position: [0, 0, 0], finish: 'hull' },
    { id: 'rooms', label: 'rooms', realName: 'Living quarters', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'air-part', label: 'air part', realName: 'Life support', position: [0, -0.08, 0], finish: 'cold' },
    { id: 'sun-boards', label: 'sun boards', realName: 'Solar arrays', position: [0, 0.12, -0.10], finish: 'cold' },
    { id: 'talk-box', label: 'talk box', realName: 'Communications', position: [0, 0.10, 0.08], finish: 'warning' },
    { id: 'water-box', label: 'water box', realName: 'Water recycling', position: [0, -0.04, 0.08], finish: 'cold' },
    { id: 'food-room', label: 'food room', realName: 'Greenhouse', position: [0, 0.04, -0.08], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky home', dict: 'space-habitat' },
          '. It is a place where people can live in the sky for a long time.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the outside part that holds air inside so people can live.',
        ],
        [
          'Inside are the ',
          { text: 'rooms', part: 'rooms' },
          ' where people sleep, eat, and work.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'air part', part: 'air-part' },
          ' keeps the air clean and at the right warm for people.',
        ],
        ['Without this part, the air would not be good for people to live in.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'sun boards', part: 'sun-boards' },
          ' on the outside catch light from the sun and turn it into power.',
        ],
        ['This power runs everything inside the sky home.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'talk box', part: 'talk-box' },
          ' lets the people talk to people on the ground.',
        ],
        [
          'The ',
          { text: 'water box', part: 'water-box' },
          ' cleans water so it can be used again and again.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A special ',
          { text: 'food room', part: 'food-room' },
          ' grows food using light from the sun.',
        ],
        ['This is important because it is hard to bring food from the ground to the sky.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'rooms'], sentenceRef: 1, caption: 'The body holds air inside; rooms are where people live.' },
    { partIds: ['air-part'], sentenceRef: 4, caption: 'The air part keeps air clean and at the right warm.' },
    { partIds: ['sun-boards'], sentenceRef: 6, caption: 'Sun boards turn light from the sun into power.' },
    { partIds: ['talk-box', 'water-box'], sentenceRef: 8, caption: 'Talk box lets people talk to the ground; water box cleans water.' },
    { partIds: ['food-room'], sentenceRef: 10, caption: 'The food room grows food using light from the sun.' },
  ],
  keyExpressions: [
    { text: 'sky home', partId: 'rooms' },
    { text: 'place where people can live in the sky', partId: 'body' },
    { text: 'holds air inside so people can live', partId: 'body' },
    { text: 'keeps the air clean and at the right warm', partId: 'air-part' },
    { text: 'catch light from the sun and turn it into power', partId: 'sun-boards' },
    { text: 'cleans water so it can be used again and again', partId: 'water-box' },
    { text: 'grows food using light from the sun', partId: 'food-room' },
  ],
  color: '#B0C4DE',
}