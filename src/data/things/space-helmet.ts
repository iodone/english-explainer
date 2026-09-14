import type { ThingData } from '../types'

export const spaceHelmet: ThingData = {
  id: 'space-helmet',
  slug: 'space-helmet',
  simpleName: 'The Sky Head Cover',
  realName: 'Space helmet',
  category: 'space',
  funFacts: [
    'A sky head cover can keep a person alive in the sky where there is no air to take in.',
    'The front of the sky head cover is made of very strong glass that can not be broken by small things flying through the sky.',
    'Inside the sky head cover, there is a small machine that makes the air clean to take in.',
  ],
  parts: [
    { id: 'hard-cover', label: 'hard cover', realName: 'Pressure vessel', position: [0, 0, 0], finish: 'hull' },
    { id: 'glass-front', label: 'glass front', realName: 'Visor', position: [0, 0.04, 0.18], finish: 'cold' },
    { id: 'neck-ring', label: 'neck ring', realName: 'Disconnect ring', position: [0, -0.18, 0], finish: 'titanium' },
    { id: 'air-pipe', label: 'air pipe', realName: 'Oxygen hose', position: [0.16, -0.10, 0], finish: 'cold' },
    { id: 'talk-box', label: 'talk box', realName: 'Communications carrier', position: [0, -0.08, 0.10], finish: 'warning' },
    { id: 'head-pad', label: 'head pad', realName: 'Comfort liner', position: [0, 0.06, -0.08], finish: 'cold' },
    { id: 'light', label: 'light', realName: 'Headlamp', position: [0, 0.16, 0.12], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sky head cover', dict: 'space-helmet' },
          '. It is a special cover that keeps a person\'s head safe in the sky where there is no air.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hard cover', part: 'hard-cover' },
          ' is the hard outside part that holds everything together. It is very strong and can not be broken easily.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the front is the ',
          { text: 'glass front', part: 'glass-front' },
          ' — a big piece of very strong glass that lets the person see outside.',
        ],
        ['The glass is made to stop small things flying through the sky from getting in.'],
      ],
    },
    {
      sentences: [
        [
          'At the bottom, the ',
          { text: 'neck ring', part: 'neck-ring' },
          ' joins the head cover to the body cover.',
        ],
        [
          'An ',
          { text: 'air pipe', part: 'air-pipe' },
          ' brings clean air from the body cover into the head cover so the person can take in air.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside, a ',
          { text: 'talk box', part: 'talk-box' },
          ' near the mouth lets the person talk to other people far away.',
        ],
        [
          'Soft ',
          { text: 'soft parts', part: 'head-pad' },
          ' inside make the cover fit well and feel nice on the head.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A small ',
          { text: 'light', part: 'light' },
          ' at the top front helps the person see when it is dark.',
        ],
        ['The light is very bright and can send light a long way.'],
      ],
    },
  ],
  flow: [
    { partIds: ['hard-cover'], sentenceRef: 1, caption: 'The hard cover is the outside part that keeps the head safe.' },
    { partIds: ['glass-front'], sentenceRef: 3, caption: 'The glass front lets the person see outside.' },
    { partIds: ['neck-ring', 'air-pipe'], sentenceRef: 5, caption: 'The neck ring joins to the body cover and air pipe brings clean air.' },
    { partIds: ['talk-box', 'head-pad'], sentenceRef: 7, caption: 'The talk box lets the person talk to others.' },
    { partIds: ['light'], sentenceRef: 9, caption: 'A small light helps the person see in the dark.' },
  ],
  keyExpressions: [
    { text: 'sky head cover', partId: 'hard-cover' },
    { text: 'keeps a person\'s head safe', partId: 'hard-cover' },
    { text: 'very strong glass that lets the person see', partId: 'glass-front' },
    { text: 'joins the head cover to the body cover', partId: 'neck-ring' },
    { text: 'brings clean air into the head cover', partId: 'air-pipe' },
    { text: 'talk to other people far away', partId: 'talk-box' },
    { text: 'soft parts make the cover fit well', partId: 'head-pad' },
  ],
  color: '#FFE4E1',
}