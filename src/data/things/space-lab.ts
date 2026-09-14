import type { ThingData } from '../types'

export const spaceLab: ThingData = {
  id: 'space-lab',
  slug: 'space-lab',
  simpleName: 'The Sky Test Room',
  realName: 'Space laboratory',
  category: 'space',
  funFacts: [
    'A sky test room can be as big as a very large house and have many different rooms for testing.',
    'The first sky test rooms were sent up more than 40 years ago.',
    'Some things that were first made in sky test rooms are now used by people every day.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Module', position: [0, 0, 0], finish: 'hull' },
    { id: 'rooms', label: 'rooms', realName: 'Work areas', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'look-part', label: 'look part', realName: 'Viewing ports', position: [0, 0, 0.12], finish: 'cold' },
    { id: 'sun-boards', label: 'sun boards', realName: 'Solar panels', position: [0, 0.12, -0.10], finish: 'cold' },
    { id: 'talk-box', label: 'talk box', realName: 'Communications', position: [0, 0.10, 0.08], finish: 'warning' },
    { id: 'air-part', label: 'air part', realName: 'Life support', position: [0, -0.08, 0], finish: 'cold' },
    { id: 'join-part', label: 'join part', realName: 'Docking port', position: [0, 0, -0.14], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky test room', dict: 'space-lab' },
          '. It is a special room in the sky where people can do tests that cannot be done on the ground.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' holds all the rooms and keeps the air inside.',
        ],
        [
          'Inside are the ',
          { text: 'rooms', part: 'rooms' },
          ' where people do many different kinds of tests.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'look part', part: 'look-part' },
          ' on the sides lets people see outside into the sky.',
        ],
        ['From here, they can see the ground and other things in the sky.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'sun boards', part: 'sun-boards' },
          ' on the outside catch light from the sun and turn it into power.',
        ],
        ['This power runs all the things in the sky test room.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'talk box', part: 'talk-box' },
          ' lets the people talk to the ground and send the things they learn.',
        ],
        [
          'The ',
          { text: 'air part', part: 'air-part' },
          ' keeps the air clean and at the right warm for people.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'join part', part: 'join-part' },
          ' at the back lets other things join to the sky test room.',
        ],
        ['This is how people and things come and go from the ground.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'rooms'], sentenceRef: 1, caption: 'The body holds everything; rooms are for doing tests.' },
    { partIds: ['look-part'], sentenceRef: 4, caption: 'The look part lets people see outside into the sky.' },
    { partIds: ['sun-boards'], sentenceRef: 6, caption: 'Sun boards turn light from the sun into power.' },
    { partIds: ['talk-box', 'air-part'], sentenceRef: 8, caption: 'Talk box sends things to the ground; air part keeps air clean.' },
    { partIds: ['join-part'], sentenceRef: 10, caption: 'The join part lets other things join to the sky test room.' },
  ],
  keyExpressions: [
    { text: 'sky test room', partId: 'rooms' },
    { text: 'special room in the sky for tests', partId: 'rooms' },
    { text: 'tests that cannot be done on the ground', partId: 'rooms' },
    { text: 'lets people see outside into the sky', partId: 'look-part' },
    { text: 'catch light from the sun and turn it into power', partId: 'sun-boards' },
    { text: 'talk to the ground and send the things they learn', partId: 'talk-box' },
    { text: 'lets other things join to the sky test room', partId: 'join-part' },
  ],
  color: '#B0C4DE',
}