import type { ThingData } from '../types'

export const solarHeater: ThingData = {
  id: 'solar-heater',
  slug: 'solar-heater',
  simpleName: 'The Sun Warmer',
  realName: 'Solar heater',
  category: 'power',
  funFacts: [
    'A sun warmer can make water hot using only light from the sun.',
    'The first sun warmers were made more than 100 years ago.',
    'Some sun warmers can make water so hot that it can be used to make power.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Collector panel', position: [0, 0, 0], finish: 'hull' },
    { id: 'glass-front', label: 'glass front', realName: 'Glass cover', position: [0, 0.04, 0.04], finish: 'cold' },
    { id: 'dark-part', label: 'dark part', realName: 'Absorber plate', position: [0, 0, 0.02], finish: 'titanium' },
    { id: 'pipe-in', label: 'pipe in', realName: 'Inlet pipe', position: [0, -0.08, -0.04], finish: 'cold' },
    { id: 'pipe-out', label: 'pipe out', realName: 'Outlet pipe', position: [0, 0.08, -0.04], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Frame', position: [0, -0.04, -0.06], finish: 'hull' },
    { id: 'water-box', label: 'water box', realName: 'Storage tank', position: [0, -0.12, -0.04], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'sun warmer', dict: 'solar-heater' },
          '. It makes water hot using only light from the sun.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the flat part on the roof that catches light from the sun.',
        ],
        [
          'A ',
          { text: 'glass front', part: 'glass-front' },
          ' on the front lets light in but keeps the heat inside.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Under the glass is the ',
          { text: 'dark part', part: 'dark-part' },
          ' — a dark piece of metal that gets very hot when light hits it.',
        ],
        ['The dark color helps it take in more light from the sun.'],
      ],
    },
    {
      sentences: [
        [
          'Water goes into the body through the ',
          { text: 'pipe in', part: 'pipe-in' },
          ' at one end.',
        ],
        [
          'The water gets hot as it goes through the dark part and comes out through the ',
          { text: 'pipe out', part: 'pipe-out' },
          ' at the other end.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' holds the body in place on the roof.',
        ],
        [
          'The hot water goes into the ',
          { text: 'water box', part: 'water-box' },
          ' where it stays hot until you need it.',
        ],
      ],
    },
    {
      sentences: [
        ['Sun warmers are very good because they do not use any power — only light from the sun.'],
        ['They can save a lot of power that would be used to heat water.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'glass-front'], sentenceRef: 1, caption: 'The body catches sun light; glass front keeps heat inside.' },
    { partIds: ['dark-part'], sentenceRef: 4, caption: 'The dark part gets very hot when light hits it.' },
    { partIds: ['pipe-in', 'pipe-out'], sentenceRef: 6, caption: 'Water goes in through pipe in, gets hot, comes out through pipe out.' },
    { partIds: ['hold-part', 'water-box'], sentenceRef: 8, caption: 'Hold part holds it on the roof; water box stores hot water.' },
    { partIds: ['dark-part'], sentenceRef: 10, caption: 'Sun warmers use only light from the sun — no power needed.' },
  ],
  keyExpressions: [
    { text: 'sun warmer', partId: 'dark-part' },
    { text: 'makes water hot using only light from the sun', partId: 'dark-part' },
    { text: 'catches light from the sun', partId: 'body' },
    { text: 'lets light in but keeps the heat inside', partId: 'glass-front' },
    { text: 'dark piece of metal that gets very hot', partId: 'dark-part' },
    { text: 'water gets hot as it goes through', partId: 'dark-part' },
    { text: 'stays hot until you need it', partId: 'water-box' },
  ],
  color: '#FFD700',
}