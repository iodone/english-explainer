import type { ThingData } from '../types'

export const stethoscope: ThingData = {
  id: 'stethoscope',
  slug: 'stethoscope',
  simpleName: 'The Body Listener',
  realName: 'Stethoscope',
  category: 'home',
  funFacts: [
    'A body listener can hear sounds inside you that you can not hear yourself.',
    'The first body listener was made from a piece of wood about 200 years ago.',
    'Doctors use a body listener to count how fast your heart beats in one minute.',
  ],
  parts: [
    { id: 'ear-pieces', label: 'ear pieces', realName: 'Ear tips', position: [0, 0.28, 0], finish: 'cold' },
    { id: 'tubes', label: 'tubes', realName: 'Tubes', position: [0, 0.14, 0], finish: 'hull' },
    { id: 'head', label: 'head', realName: 'Chest piece', position: [0, -0.14, 0], finish: 'titanium' },
    { id: 'round-end', label: 'round end', realName: 'Diaphragm', position: [0, -0.22, 0], finish: 'titanium' },
    { id: 'small-end', label: 'small end', realName: 'Bell', position: [0.08, -0.18, 0], finish: 'titanium' },
    { id: 'ring', label: 'ring', realName: 'Ring', position: [0, -0.10, 0], finish: 'warning' },
    { id: 'y-piece', label: 'y piece', realName: 'Y connector', position: [0, 0.22, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'body listener', dict: 'stethoscope' },
          '. It is a tool that doctors use to hear sounds inside your body.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The two ',
          { text: 'ear pieces', part: 'ear-pieces' },
          ' go into the doctor\'s ears. They are soft and fit well so the doctor can hear clearly.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Two ',
          { text: 'tubes', part: 'tubes' },
          ' carry the sound from the bottom up to the ears.',
        ],
        [
          'They join together at the ',
          { text: 'y piece', part: 'y-piece' },
          ' near the top.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the bottom is the ',
          { text: 'head', part: 'head' },
          ' — a small round piece that the doctor puts on your body.',
        ],
        [
          'One side has a ',
          { text: 'round end', part: 'round-end' },
          ' that picks up sounds like your heart beating.',
        ],
        [
          'The other side has a ',
          { text: 'small end', part: 'small-end' },
          ' that picks up quieter sounds.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'ring', part: 'ring' },
          ' around the head holds it all together.',
        ],
        ['The doctor turns the head to change between the round end and the small end.'],
      ],
    },
    {
      sentences: [
        ['When the doctor puts the head on your back, they can hear how you take in air.'],
        ['When they put it on your chest, they can hear your heart beating.'],
        ['This helps the doctor know if you are well or if something needs to be fixed.'],
      ],
    },
  ],
  flow: [
    { partIds: ['ear-pieces'], sentenceRef: 1, caption: 'The ear pieces go into the doctor\'s ears.' },
    { partIds: ['tubes', 'y-piece'], sentenceRef: 3, caption: 'Tubes carry sound up to the ears.' },
    { partIds: ['head', 'round-end'], sentenceRef: 5, caption: 'The head is placed on the body to hear sounds.' },
    { partIds: ['small-end'], sentenceRef: 7, caption: 'The small end picks up quieter sounds.' },
    { partIds: ['ring'], sentenceRef: 8, caption: 'A ring holds the head together.' },
  ],
  keyExpressions: [
    { text: 'body listener', partId: 'head' },
    { text: 'hear sounds inside your body', partId: 'head' },
    { text: 'ear pieces go into the ears', partId: 'ear-pieces' },
    { text: 'carry the sound from the bottom up', partId: 'tubes' },
    { text: 'picks up sounds like your heart beating', partId: 'round-end' },
    { text: 'picks up quieter sounds', partId: 'small-end' },
    { text: 'turns the head to change between', partId: 'head' },
  ],
  color: '#FFB6C1',
}