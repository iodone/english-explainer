import type { ThingData } from '../types'

export const spaceRover: ThingData = {
  id: 'space-rover',
  slug: 'space-rover',
  simpleName: 'The Ground Walker',
  realName: 'Space rover',
  category: 'space',
  funFacts: [
    'A ground walker moves very slowly — it can only go about as fast as a person walking.',
    'The first ground walkers were sent to the moon more than 50 years ago.',
    'Some ground walkers can work for many years without any help from people on the ground.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Rover body', position: [0, 0, 0], finish: 'hull' },
    { id: 'wheels', label: 'wheels', realName: 'Wheels', position: [0, -0.10, 0], finish: 'cold' },
    { id: 'arm', label: 'arm', realName: 'Robotic arm', position: [0.14, 0.04, 0], finish: 'titanium' },
    { id: 'eye', label: 'eye', realName: 'Camera mast', position: [0, 0.10, 0.08], finish: 'cold' },
    { id: 'sun-boards', label: 'sun boards', realName: 'Solar panels', position: [0, 0.06, -0.10], finish: 'cold' },
    { id: 'talk-box', label: 'talk box', realName: 'Antenna', position: [0, 0.12, -0.04], finish: 'warning' },
    { id: 'power-box', label: 'power box', realName: 'Battery', position: [0, -0.04, -0.06], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'ground walker', dict: 'space-rover' },
          '. It is a special car that can move on the ground of other worlds far away from our own.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' holds all the important parts and keeps them safe from the cold and from things that fall from the sky.',
        ],
        [
          'The ',
          { text: 'wheels', part: 'wheels' },
          ' on the bottom help it move over rocks and soft ground.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A long ',
          { text: 'arm', part: 'arm' },
          ' on the front can pick up rocks and put them in a special box to study.',
        ],
        [
          'At the top of a tall stick, the ',
          { text: 'eye', part: 'eye' },
          ' can see things all around and take pictures.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'sun boards', part: 'sun-boards' },
          ' on top catch light from the sun and turn it into power.',
        ],
        ['This power lets the ground walker work all by itself for a very long time.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'talk box', part: 'talk-box' },
          ' sends pictures and other things back to the ground using things that move through the air.',
        ],
        ['People on the ground can tell the ground walker where to go and what to study.'],
      ],
    },
    {
      sentences: [
        [
          'Inside the body, a ',
          { text: 'power box', part: 'power-box' },
          ' keeps power for when the sun is not there.',
        ],
        ['Ground walkers help us learn about other worlds without having to send people there.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'wheels'], sentenceRef: 1, caption: 'The body holds everything; wheels help it move over rocks.' },
    { partIds: ['arm'], sentenceRef: 4, caption: 'The arm picks up rocks and puts them in a box to study.' },
    { partIds: ['eye'], sentenceRef: 5, caption: 'The eye sees things all around and takes pictures.' },
    { partIds: ['sun-boards'], sentenceRef: 6, caption: 'Sun boards turn light from the sun into power.' },
    { partIds: ['talk-box', 'power-box'], sentenceRef: 8, caption: 'Talk box sends things to the ground; power box keeps power for later.' },
  ],
  keyExpressions: [
    { text: 'ground walker', partId: 'wheels' },
    { text: 'special car that can move on other worlds', partId: 'wheels' },
    { text: 'helps it move over rocks and soft ground', partId: 'wheels' },
    { text: 'picks up rocks and puts them in a special box', partId: 'arm' },
    { text: 'can see things all around and take pictures', partId: 'eye' },
    { text: 'catch light from the sun and turn it into power', partId: 'sun-boards' },
    { text: 'sends pictures and other things back to the ground', partId: 'talk-box' },
  ],
  color: '#DEB887',
}