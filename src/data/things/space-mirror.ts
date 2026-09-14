import type { ThingData } from '../types'

export const spaceMirror: ThingData = {
  id: 'space-mirror',
  slug: 'space-mirror',
  simpleName: 'The Sky Mirror',
  realName: 'Space mirror',
  category: 'space',
  funFacts: [
    'A sky mirror can send light from the sun to places that do not get much sun.',
    'The first sky mirror was sent up to the sky about 30 years ago.',
    'Some sky mirrors are as wide as a very large house.',
  ],
  parts: [
    { id: 'big-mirror', label: 'big mirror', realName: 'Reflector', position: [0, 0, 0], finish: 'cold' },
    { id: 'body', label: 'body', realName: 'Bus', position: [0, 0, -0.06], finish: 'hull' },
    { id: 'wing', label: 'wing', realName: 'Solar panel', position: [0.10, 0, -0.04], finish: 'cold' },
    { id: 'talk-part', label: 'talk part', realName: 'Antenna', position: [0, 0.06, -0.04], finish: 'titanium' },
    { id: 'turn-part', label: 'turn part', realName: 'Attitude control', position: [0, -0.04, -0.06], finish: 'titanium' },
    { id: 'point-part', label: 'point part', realName: 'Star tracker', position: [0, 0.04, 0.04], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Deployment mechanism', position: [0, -0.06, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky mirror', dict: 'space-mirror' },
          '. It is a very big flat thing that floats in the sky and sends light where it is needed.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'big mirror', part: 'big-mirror' },
          ' is the very flat, very bright part that catches light from the sun and sends it down.',
        ],
        ['It is made of very bright metal that sends back almost all the light that hits it.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' behind the big mirror holds all the other parts.',
        ],
        [
          'The ',
          { text: 'wing', part: 'wing' },
          ' on the side takes in light from the sun to make power for the body.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'talk part', part: 'talk-part' },
          ' on the body lets people on the ground talk to the sky mirror.',
        ],
        [
          'The ',
          { text: 'turn part', part: 'turn-part' },
          ' under the body can move the sky mirror to point at different places.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'point part', part: 'point-part' },
          ' on the body reads the stars to know exactly where it is.',
        ],
        ['This helps it send light to the right place.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' opens up the big mirror after it gets to the sky.',
        ],
        ['Sky mirrors could one day help light up places that do not get much sun.'],
      ],
    },
  ],
  flow: [
    { partIds: ['big-mirror'], sentenceRef: 1, caption: 'Big mirror catches sun light and sends it down.' },
    { partIds: ['body', 'wing'], sentenceRef: 4, caption: 'Body holds parts; wing makes power from light.' },
    { partIds: ['talk-part', 'turn-part'], sentenceRef: 6, caption: 'Talk part talks to ground; turn part moves it.' },
    { partIds: ['point-part'], sentenceRef: 8, caption: 'Point part reads the stars to know where it is.' },
    { partIds: ['hold-part'], sentenceRef: 10, caption: 'Hold part opens up the big mirror in the sky.' },
  ],
  keyExpressions: [
    { text: 'sky mirror', partId: 'big-mirror' },
    { text: 'catches light from the sun and sends it down', partId: 'big-mirror' },
    { text: 'sends back almost all the light that hits it', partId: 'big-mirror' },
    { text: 'holds all the other parts', partId: 'body' },
    { text: 'talks to the sky mirror', partId: 'talk-part' },
    { text: 'move the sky mirror to point at different places', partId: 'turn-part' },
    { text: 'opens up the big mirror after it gets to the sky', partId: 'hold-part' },
  ],
  color: '#C0C0C0',
}