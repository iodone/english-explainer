import type { ThingData } from '../types'

export const spaceMining: ThingData = {
  id: 'space-mining',
  slug: 'space-mining',
  simpleName: 'The Sky Digger',
  realName: 'Space mining',
  category: 'space',
  funFacts: [
    'Sky diggers can find things like iron and water on rocks that fly around in the sky.',
    'The first sky diggers have not been sent yet, but many people are working on making them.',
    'Some rocks in the sky have more things we can use in them than all the rocks on the ground.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Mining vessel', position: [0, 0, 0], finish: 'hull' },
    { id: 'dig-arm', label: 'dig arm', realName: 'Excavation arm', position: [0.18, 0, 0], finish: 'titanium' },
    { id: 'hold-box', label: 'hold box', realName: 'Storage bay', position: [0, -0.08, 0], finish: 'cold' },
    { id: 'sun-boards', label: 'sun boards', realName: 'Solar arrays', position: [0, 0.12, -0.10], finish: 'cold' },
    { id: 'look-part', label: 'look part', realName: 'Navigation system', position: [0, 0.10, 0.08], finish: 'cold' },
    { id: 'talk-box', label: 'talk box', realName: 'Communications', position: [0, 0.08, 0.12], finish: 'warning' },
    { id: 'fire-parts', label: 'fire parts', realName: 'Thrusters', position: [-0.14, -0.06, -0.08], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky digger', dict: 'space-mining' },
          '. It goes to rocks in the sky and takes out things we can use from inside them.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' holds all the important parts and keeps them safe from things that fall from the sky.',
        ],
        [
          'A long ',
          { text: 'dig arm', part: 'dig-arm' },
          ' on the side can break rocks and pick up the pieces.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold box', part: 'hold-box' },
          ' at the bottom keeps the things that are taken out of the rocks.',
        ],
        ['When the hold box is full, the sky digger can send the things back to the ground.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'sun boards', part: 'sun-boards' },
          ' on top catch light from the sun and turn it into power.',
        ],
        ['This power lets the sky digger work for a very long time without stopping.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'look part', part: 'look-part' },
          ' helps the sky digger find the best rocks to dig.',
        ],
        [
          'The ',
          { text: 'talk box', part: 'talk-box' },
          ' sends pictures and other things back to the ground.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Small ',
          { text: 'fire parts', part: 'fire-parts' },
          ' on the back help the sky digger move from one rock to another.',
        ],
        ['Sky diggers could help us get things we need without digging on the ground.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'dig-arm'], sentenceRef: 1, caption: 'The body holds everything; the dig arm breaks rocks.' },
    { partIds: ['hold-box'], sentenceRef: 4, caption: 'The hold box keeps things taken from rocks.' },
    { partIds: ['sun-boards'], sentenceRef: 6, caption: 'Sun boards turn light from the sun into power.' },
    { partIds: ['look-part', 'talk-box'], sentenceRef: 8, caption: 'Look part finds rocks; talk box sends things to the ground.' },
    { partIds: ['fire-parts'], sentenceRef: 10, caption: 'Fire parts help move from one rock to another.' },
  ],
  keyExpressions: [
    { text: 'sky digger', partId: 'dig-arm' },
    { text: 'goes to rocks in the sky and takes out things we can use', partId: 'dig-arm' },
    { text: 'break rocks and pick up the pieces', partId: 'dig-arm' },
    { text: 'keeps the things that are taken out', partId: 'hold-box' },
    { text: 'catch light from the sun and turn it into power', partId: 'sun-boards' },
    { text: 'helps find the best rocks to dig', partId: 'look-part' },
    { text: 'help move from one rock to another', partId: 'fire-parts' },
  ],
  color: '#A0522D',
}