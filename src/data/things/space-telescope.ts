import type { ThingData } from '../types'

export const spaceTelescope: ThingData = {
  id: 'space-telescope',
  slug: 'space-telescope',
  simpleName: 'The Far Looker',
  realName: 'Space telescope',
  category: 'space',
  funFacts: [
    'A far looker can see things that are very, very far away in the sky.',
    'The first far looker was sent up to the sky about 35 years ago.',
    'Some far lookers can see light that is more than 13,000,000,000 years old.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Optical tube', position: [0, 0, 0], finish: 'hull' },
    { id: 'big-mirror', label: 'big mirror', realName: 'Primary mirror', position: [0, 0, -0.10], finish: 'cold' },
    { id: 'small-mirror', label: 'small mirror', realName: 'Secondary mirror', position: [0, 0, 0.06], finish: 'cold' },
    { id: 'eye-part', label: 'eye part', realName: 'Camera', position: [0, 0, 0.10], finish: 'titanium' },
    { id: 'sun-cover', label: 'sun cover', realName: 'Sunshield', position: [0, -0.08, 0], finish: 'hull' },
    { id: 'power-wing', label: 'power wing', realName: 'Solar panel', position: [0.12, 0, 0], finish: 'cold' },
    { id: 'talk-part', label: 'talk part', realName: 'Antenna', position: [0, 0.08, 0.04], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'far looker', dict: 'space-telescope' },
          '. It is a very big eye that floats in the sky and looks at things very far away.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the long round part that holds everything together.',
        ],
        [
          'At one end is the ',
          { text: 'big mirror', part: 'big-mirror' },
          ' — a very flat piece of glass that catches light from far away.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'small mirror', part: 'small-mirror' },
          ' at the other end sends the light to the ',
          { text: 'eye part', part: 'eye-part' },
          '.',
        ],
        ['The eye part takes pictures of what the light shows.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'sun cover', part: 'sun-cover' },
          ' under the body keeps the sun from making it too hot.',
        ],
        ['It is very big — as large as a very large house.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'power wing', part: 'power-wing' },
          ' on the side takes in light from the sun and makes power.',
        ],
        [
          'The ',
          { text: 'talk part', part: 'talk-part' },
          ' sends the pictures back to the ground.',
        ],
      ],
    },
    {
      sentences: [
        ['The pictures from far lookers have shown us things about the sky we never knew before.'],
        ['They help us understand how the sky began and what it looks like far, far away.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'big-mirror'], sentenceRef: 1, caption: 'The body holds everything; big mirror catches light.' },
    { partIds: ['small-mirror', 'eye-part'], sentenceRef: 4, caption: 'Small mirror sends light to eye part; eye part takes pictures.' },
    { partIds: ['sun-cover'], sentenceRef: 6, caption: 'Sun cover keeps it from getting too hot.' },
    { partIds: ['power-wing'], sentenceRef: 8, caption: 'Power wing makes power from light.' },
    { partIds: ['talk-part'], sentenceRef: 9, caption: 'Talk part sends pictures to the ground.' },
  ],
  keyExpressions: [
    { text: 'far looker', partId: 'big-mirror' },
    { text: 'a very big eye that floats in the sky', partId: 'eye-part' },
    { text: 'catches light from far away', partId: 'big-mirror' },
    { text: 'sends the light to the eye part', partId: 'small-mirror' },
    { text: 'takes pictures of what the light shows', partId: 'eye-part' },
    { text: 'keeps the sun from making it too hot', partId: 'sun-cover' },
    { text: 'sends the pictures back to the ground', partId: 'talk-part' },
  ],
  color: '#B0C4DE',
}