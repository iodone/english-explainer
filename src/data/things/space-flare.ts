import type { ThingData } from '../types';

export const spaceFlare: ThingData = {
  id: 'space-flare',
  slug: 'space-flare',
  simpleName: 'The Light Shot',
  realName: 'Signal Flare',
  category: 'space',
  color: '#FF4500',
  funFacts: [
    'This is a thing that makes a very bright light to get attention.',
    'It is used when someone needs help and wants to be found.',
    'The light it makes can be seen from very far away.',
    'It burns very hot and very bright for a short time.',
    'Space people carry them in case something goes wrong.',
    'Some of them make smoke instead of light.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'tube', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'nozzle', position: [0, 0.2, 0], finish: 'warning' },
    { id: 'top', label: 'top', realName: 'cap', position: [0, -0.15, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'charge', position: [0, 0, 0], finish: 'hull' },
    { id: 'power', label: 'power', realName: 'igniter', position: [0, -0.1, 0], finish: 'titanium' },
    { id: 'light', label: 'light', realName: 'flare', position: [0, 0.25, 0], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that makes a very bright light.'],
        ['It is used when someone needs help and wants to be found.'],
        ['The ', { text: 'body', part: 'body' }, ' holds the stuff that burns to make the light.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the stuff that burns very hot and very bright.']
      ]
    },
    {
      sentences: [
        ['When you want to use it, you pull or press the ', { text: 'power', part: 'power' }, '.'],
        ['The ', { text: 'power', part: 'power' }, ' starts the ', { text: 'inside', part: 'inside' }, ' burning.'],
        ['The burning stuff comes out of the ', { text: 'end', part: 'end' }, ' at the top.'],
        ['A very bright ', { text: 'light', part: 'light' }, ' comes out and can be seen from far away.'],
        ['The ', { text: 'top', part: 'top' }, ' keeps the ', { text: 'end', part: 'end' }, ' closed until you need it.'],
        ['The light does not last very long, but it is very bright.'],
        ['People who need help use it so others can find them.']
      ]
    }
  ],
  flow: [
    { partIds: ['power'], caption: 'You press the igniter to start it', sentenceRef: 4 },
    { partIds: ['inside'], caption: 'The charge starts burning', sentenceRef: 5 },
    { partIds: ['end', 'light'], caption: 'A bright light comes out the top', sentenceRef: 7 },
    { partIds: ['top', 'body'], caption: 'The body holds it all together', sentenceRef: 8 }
  ],
  keyExpressions: [
    { text: 'flare', partId: 'light' },
    { text: 'igniter', partId: 'power' },
    { text: 'nozzle', partId: 'end' },
    { text: 'signal', partId: 'light' }
  ]
};