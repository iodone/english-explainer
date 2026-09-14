import type { ThingData } from '../types'

export const spaceWelder: ThingData = {
  id: 'space-welder',
  slug: 'space-welder',
  simpleName: 'The Sky Fire Joiner',
  realName: 'Space welder',
  category: 'space',
  funFacts: [
    'A sky fire joiner can join metal things together in the sky where there is no air.',
    'The first sky fire joiners were used more than 50 years ago to fix things in the sky.',
    'Some sky fire joiners use a very bright light instead of fire to join things.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Welding gun', position: [0, 0, 0], finish: 'hull' },
    { id: 'fire-part', label: 'fire part', realName: 'Electron beam', position: [0, 0, 0.14], finish: 'warning' },
    { id: 'hold-part', label: 'hold part', realName: 'Handle', position: [0, -0.10, 0], finish: 'titanium' },
    { id: 'wire', label: 'wire', realName: 'Power cable', position: [0, -0.06, -0.08], finish: 'cold' },
    { id: 'gas-pipe', label: 'gas pipe', realName: 'Gas line', position: [0, 0.04, -0.06], finish: 'cold' },
    { id: 'look-part', label: 'look part', realName: 'Viewing screen', position: [0, 0.06, 0.10], finish: 'cold' },
    { id: 'safe-cover', label: 'safe cover', realName: 'Shield', position: [0, 0, 0.12], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky fire joiner', dict: 'space-welder' },
          '. It joins metal things together in the sky using very hot fire.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the part that the person holds in their hand.',
        ],
        [
          'At the front is the ',
          { text: 'fire part', part: 'fire-part' },
          ' — a very hot fire that can make metal soft.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' at the back is where the person holds the sky fire joiner.',
        ],
        ['It is made to be easy to hold even with big hand covers on.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'wire', part: 'wire' },
          ' at the back brings power to make the fire.',
        ],
        [
          'A ',
          { text: 'gas pipe', part: 'gas-pipe' },
          ' brings special gas that helps the fire burn better.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'look part', part: 'look-part' },
          ' on top lets the person see what they are joining.',
        ],
        [
          'A ',
          { text: 'safe cover', part: 'safe-cover' },
          ' around the fire part keeps the person safe from the very bright light.',
        ],
      ],
    },
    {
      sentences: [
        ['Without the safe cover, the very bright light could hurt the person\'s eyes.'],
        ['Sky fire joiners are very important for building and fixing things in the sky.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'fire-part'], sentenceRef: 1, caption: 'The body holds the fire part that makes metal soft.' },
    { partIds: ['hold-part'], sentenceRef: 4, caption: 'The hold part is easy to hold with big hand covers.' },
    { partIds: ['wire', 'gas-pipe'], sentenceRef: 6, caption: 'Wire brings power; gas pipe brings gas for the fire.' },
    { partIds: ['look-part', 'safe-cover'], sentenceRef: 8, caption: 'Look part lets you see; safe cover keeps safe your eyes.' },
    { partIds: ['safe-cover'], sentenceRef: 10, caption: 'The safe cover stops the bright light from hurting eyes.' },
  ],
  keyExpressions: [
    { text: 'sky fire joiner', partId: 'fire-part' },
    { text: 'joins metal things together in the sky', partId: 'fire-part' },
    { text: 'very hot fire that can make metal soft', partId: 'fire-part' },
    { text: 'easy to hold even with big hand covers on', partId: 'hold-part' },
    { text: 'brings power to make the fire', partId: 'wire' },
    { text: 'brings special gas that helps the fire burn', partId: 'gas-pipe' },
    { text: 'keeps the person safe from the very bright light', partId: 'safe-cover' },
  ],
  color: '#FFD700',
}