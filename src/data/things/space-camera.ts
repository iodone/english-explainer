import type { ThingData } from '../types'

export const spaceCamera: ThingData = {
  id: 'space-camera',
  slug: 'space-camera',
  simpleName: 'The Sky Eye',
  realName: 'Space camera',
  category: 'space',
  funFacts: [
    'A sky eye can see things that are very far away — it can take pictures of stars that are many years of travel away.',
    'The first sky eyes were very simple and could only take black and white pictures.',
    'Some sky eyes can see light that human eyes cannot see at all.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'glass-front', label: 'glass front', realName: 'Lens assembly', position: [0, 0, 0.14], finish: 'cold' },
    { id: 'big-glass', label: 'big glass', realName: 'Primary mirror', position: [0, 0, 0.06], finish: 'cold' },
    { id: 'small-glass', label: 'small glass', realName: 'Secondary mirror', position: [0, 0, 0.10], finish: 'cold' },
    { id: 'eye-piece', label: 'eye piece', realName: 'Detector', position: [0, 0, -0.08], finish: 'titanium' },
    { id: 'power-box', label: 'power box', realName: 'Power unit', position: [0, -0.12, -0.06], finish: 'hull' },
    { id: 'send-box', label: 'send box', realName: 'Transmitter', position: [0, 0.12, -0.06], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky eye', dict: 'space-camera' },
          '. It takes pictures of things in the sky that are very far away from the ground.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' holds all the important parts inside and keeps them safe from the cold of the sky.',
        ],
        [
          'At the front is the ',
          { text: 'glass front', part: 'glass-front' },
          ' — a round piece of glass that lets light come in.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside, a ',
          { text: 'big glass', part: 'big-glass' },
          ' catches the light and sends it to a smaller glass.',
        ],
        [
          'The ',
          { text: 'small glass', part: 'small-glass' },
          ' then sends the light to the eye piece at the back.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'eye piece', part: 'eye-piece' },
          ' changes the light into a picture that can be sent back to the ground.',
        ],
        ['This is how people on the ground can see what the sky eye sees.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'power box', part: 'power-box' },
          ' makes power from the sun so the sky eye can work all the time.',
        ],
        [
          'The ',
          { text: 'send box', part: 'send-box' },
          ' sends the pictures back to the ground using things that move through the air.',
        ],
      ],
    },
    {
      sentences: [
        ['Sky eyes help us learn about things that are too far away for us to visit.'],
        ['They can also help us see things on the ground from very high up.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'glass-front'], sentenceRef: 1, caption: 'The body holds everything; glass front lets light in.' },
    { partIds: ['big-glass', 'small-glass'], sentenceRef: 4, caption: 'Big glass catches light; small glass sends it to the back.' },
    { partIds: ['eye-piece'], sentenceRef: 6, caption: 'The eye piece changes light into a picture.' },
    { partIds: ['power-box'], sentenceRef: 8, caption: 'Power box makes power from the sun.' },
    { partIds: ['send-box'], sentenceRef: 9, caption: 'Send box sends pictures to the ground.' },
  ],
  keyExpressions: [
    { text: 'sky eye', partId: 'glass-front' },
    { text: 'takes pictures of things in the sky', partId: 'eye-piece' },
    { text: 'lets light come in', partId: 'glass-front' },
    { text: 'catches the light and sends it', partId: 'big-glass' },
    { text: 'changes the light into a picture', partId: 'eye-piece' },
    { text: 'makes power from the sun', partId: 'power-box' },
    { text: 'sends the pictures back to the ground', partId: 'send-box' },
  ],
  color: '#E6E6FA',
}