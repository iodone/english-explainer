import type { ThingData } from '../types';

export const homeShoe: ThingData = {
  id: 'home-shoe',
  slug: 'home-shoe',
  simpleName: 'The Foot Cover',
  realName: 'Shoe',
  category: 'home',
  color: '#8B4513',
  funFacts: [
    'This is a cover for your foot.',
    'It keeps your foot safe from things on the ground.',
    'People have been wearing foot covers for a very long time.',
    'Some are soft and some are hard.',
    'You put them on with your hands and take them off the same way.',
    'Most people wear two at the same time, one for each foot.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'upper', position: [0, 0.05, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'sole', position: [0, -0.1, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'tongue', position: [0, 0.12, 0.05], finish: 'hull' },
    { id: 'inside', label: 'inside', realName: 'insole', position: [0, -0.05, 0], finish: 'titanium' },
    { id: 'front', label: 'front', realName: 'toe cap', position: [0, 0, 0.15], finish: 'cold' },
    { id: 'hole', label: 'hole', realName: 'opening', position: [0, 0.1, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a cover for your foot.'],
        ['The ', { text: 'end', part: 'end' }, ' is the hard part on the bottom that touches the ground.'],
        ['The ', { text: 'body', part: 'body' }, ' is the soft part that goes around your foot.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the soft part your foot sits on.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'front', part: 'front' }, ' keeps your toes safe from things you might walk into.'],
        ['You put your foot in through the ', { text: 'hole', part: 'hole' }, ' at the top.'],
        ['The ', { text: 'top', part: 'top' }, ' is a soft piece under the ', { text: 'hole', part: 'hole' }, ' that keeps your foot feeling good.'],
        ['Some ', { text: 'body', part: 'body' }, ' covers have strings to hold them on your foot.'],
        ['Some have nothing to hold them on, and you just slide your foot in.'],
        ['The ', { text: 'end', part: 'end' }, ' keeps your foot off the ground so it stays clean and safe.'],
        ['When you go inside your house, you often take them off at the door.']
      ]
    }
  ],
  flow: [
    { partIds: ['end'], caption: 'The hard bottom touches the ground', sentenceRef: 1 },
    { partIds: ['body', 'inside'], caption: 'The soft parts go around your foot', sentenceRef: 2 },
    { partIds: ['front'], caption: 'The front keeps your toes safe', sentenceRef: 4 },
    { partIds: ['hole', 'top'], caption: 'You put your foot in through the top', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'shoe', partId: 'body' },
    { text: 'sole', partId: 'end' },
    { text: 'tongue', partId: 'top' },
    { text: 'toe cap', partId: 'front' }
  ]
};