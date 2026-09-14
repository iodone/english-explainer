import type { ThingData } from '../types'

export const spaceLander: ThingData = {
  id: 'space-lander',
  slug: 'space-lander',
  simpleName: 'The Sky Downer',
  realName: 'Space lander',
  category: 'space',
  funFacts: [
    'A sky downer can land on other worlds and send back pictures.',
    'The first sky downer that landed on the world next to us was sent more than 50 years ago.',
    'Some sky downers have very long arms with tools on the end to pick up things.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Lander body', position: [0, 0, 0], finish: 'hull' },
    { id: 'leg', label: 'leg', realName: 'Landing gear', position: [0.08, -0.08, 0], finish: 'titanium' },
    { id: 'foot', label: 'foot', realName: 'Foot pad', position: [0.10, -0.14, 0], finish: 'hull' },
    { id: 'fire-part', label: 'fire part', realName: 'Retro-rocket', position: [0, -0.06, 0], finish: 'warning' },
    { id: 'look-part', label: 'look part', realName: 'Camera', position: [0, 0.06, 0.06], finish: 'cold' },
    { id: 'talk-part', label: 'talk part', realName: 'Antenna', position: [0, 0.10, 0], finish: 'titanium' },
    { id: 'arm', label: 'arm', realName: 'Robotic arm', position: [0.06, 0.02, 0.06], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky downer', dict: 'space-lander' },
          '. It can go down to the ground on other worlds.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' holds all the important parts and keeps them safe.',
        ],
        [
          'The ',
          { text: 'leg', part: 'leg' },
          ' and ',
          { text: 'foot', part: 'foot' },
          ' at the bottom are what it stands on when it lands.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'fire part', part: 'fire-part' },
          ' at the bottom makes fire to slow it down when it goes down.',
        ],
        ['Without the fire part, it would hit the ground too fast and break.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'look part', part: 'look-part' },
          ' on the body takes pictures of the new world.',
        ],
        [
          'The ',
          { text: 'talk part', part: 'talk-part' },
          ' at the top sends the pictures back to the ground.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'arm', part: 'arm' },
          ' on the side can pick up things and look at them.',
        ],
        ['The arm is very long and can reach things that are far from the body.'],
      ],
    },
    {
      sentences: [
        ['Sky downers have shown us what other worlds look like up close.'],
        ['They help us learn about places that are too far for people to go to.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'leg', 'foot'], sentenceRef: 1, caption: 'Body holds parts; leg and foot stand on the ground.' },
    { partIds: ['fire-part'], sentenceRef: 4, caption: 'Fire part slows it down so it does not break.' },
    { partIds: ['look-part', 'talk-part'], sentenceRef: 6, caption: 'Look part takes pictures; talk part sends them back.' },
    { partIds: ['arm'], sentenceRef: 8, caption: 'Arm picks up things and looks at them.' },
    { partIds: ['look-part'], sentenceRef: 10, caption: 'Sky downers show us what other worlds look like.' },
  ],
  keyExpressions: [
    { text: 'sky downer', partId: 'body' },
    { text: 'goes down to the ground on other worlds', partId: 'fire-part' },
    { text: 'what it stands on when it lands', partId: 'foot' },
    { text: 'makes fire to slow it down', partId: 'fire-part' },
    { text: 'takes pictures of the new world', partId: 'look-part' },
    { text: 'sends the pictures back to the ground', partId: 'talk-part' },
    { text: 'picks up things and looks at them', partId: 'arm' },
  ],
  color: '#C0C0C0',
}