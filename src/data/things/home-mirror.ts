import type { ThingData } from '../types';

export const homeMirror: ThingData = {
  id: 'home-mirror',
  slug: 'home-mirror',
  simpleName: 'The Look-Back Glass',
  realName: 'Mirror',
  category: 'home',
  color: '#E0E0E0',
  funFacts: [
    'This is a piece of glass that shows you what you look like.',
    'It does not make a new picture — it sends the light back to your eyes.',
    'Almost every house has at least one.',
    'You use it to see if your hair looks good.',
    'Some are very big and some are very small.',
    'The first ones were made of very bright metal, not glass.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'frame', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'glass', position: [0, 0, 0.02], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'edge', position: [0, 0.25, 0], finish: 'hull' },
    { id: 'inside', label: 'inside', realName: 'coating', position: [0, 0, 0.01], finish: 'titanium' },
    { id: 'back', label: 'back', realName: 'backing', position: [0, 0, -0.02], finish: 'hull' },
    { id: 'hook', label: 'hook', realName: 'hook', position: [0, 0.28, -0.01], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This is a piece of glass that shows you what you look like.'],
        ['Light hits the ', { text: 'end', part: 'end' }, ' and comes back to your eyes.'],
        ['The ', { text: 'body', part: 'body' }, ' around the ', { text: 'end', part: 'end' }, ' holds it in place.'],
        ['The ', { text: 'inside', part: 'inside' }, ' on the back of the ', { text: 'end', part: 'end' }, ' is what makes it send light back.']
      ]
    },
    {
      sentences: [
        ['Without the ', { text: 'inside', part: 'inside' }, ', the ', { text: 'end', part: 'end' }, ' would just be glass.'],
        ['The ', { text: 'back', part: 'back' }, ' behind the ', { text: 'inside', part: 'inside' }, ' keeps it safe.'],
        ['The ', { text: 'top', part: 'top' }, ' around the ', { text: 'body', part: 'body' }, ' makes it look nice.'],
        ['The ', { text: 'hook', part: 'hook' }, ' at the top lets you hang it on a wall.'],
        ['You look at it to see if your hair looks good.'],
        ['Some are very big and some are very small.'],
        ['Almost every house has at least one of these.']
      ]
    }
  ],
  flow: [
    { partIds: ['end', 'inside'], caption: 'Light hits the glass and comes back', sentenceRef: 1 },
    { partIds: ['body', 'top'], caption: 'The frame holds the glass and looks nice', sentenceRef: 6 },
    { partIds: ['back'], caption: 'The backing keeps the coating safe', sentenceRef: 5 },
    { partIds: ['hook'], caption: 'The hook lets you hang it on a wall', sentenceRef: 7 }
  ],
  keyExpressions: [
    { text: 'mirror', partId: 'end' },
    { text: 'frame', partId: 'body' },
    { text: 'coating', partId: 'inside' },
    { text: 'reflection', partId: 'end' }
  ]
};