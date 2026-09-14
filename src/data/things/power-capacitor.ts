import type { ThingData } from '../types';

export const powerCapacitor: ThingData = {
  id: 'power-capacitor',
  slug: 'power-capacitor',
  simpleName: 'The Power Saver',
  realName: 'Capacitor',
  category: 'power',
  color: '#4169E1',
  funFacts: [
    'This is a thing that saves power for later use.',
    'It can fill up with power very fast and let it go very fast too.',
    'It is like a very fast battery that does not hold power for very long.',
    'You can find it inside almost every thing that uses power.',
    'Some are very small and some are as big as a can.',
    'It helps keep the power even.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'case', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'terminal', position: [0, 0.15, 0], finish: 'titanium' },
    { id: 'top', label: 'top', realName: 'terminal', position: [0, -0.15, 0], finish: 'titanium' },
    { id: 'inside', label: 'inside', realName: 'plates', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'plug', realName: 'lead', position: [0, 0.2, 0], finish: 'hull' },
    { id: 'power', label: 'power', realName: 'dielectric', position: [0, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that saves power for later use.'],
        ['It can fill up with power very fast and let it go very fast too.'],
        ['The ', { text: 'body', part: 'body' }, ' is the outside part that holds everything.'],
        ['The ', { text: 'inside', part: 'inside' }, ' are two flat pieces of metal inside.']
      ]
    },
    {
      sentences: [
        ['The two ', { text: 'inside', part: 'inside' }, ' do not touch each other.'],
        ['The ', { text: 'power', part: 'power' }, ' between them keeps them apart.'],
        ['Power builds up on the ', { text: 'inside', part: 'inside' }, ' when it comes in.'],
        ['The ', { text: 'end', part: 'end' }, ' and ', { text: 'top', part: 'top' }, ' are where the wires join.'],
        ['Power goes in through one and out through the other.'],
        ['The ', { text: 'plug', part: 'plug' }, ' at the top joins it to the rest of the thing.'],
        ['It helps keep the power even for the thing it is in.']
      ]
    }
  ],
  flow: [
    { partIds: ['end', 'top'], caption: 'Power goes in through the terminals', sentenceRef: 7 },
    { partIds: ['inside', 'power'], caption: 'Power builds up on the plates', sentenceRef: 6 },
    { partIds: ['plug'], caption: 'The lead joins it to the rest', sentenceRef: 9 },
    { partIds: ['body'], caption: 'The case holds all the parts', sentenceRef: 2 }
  ],
  keyExpressions: [
    { text: 'capacitor', partId: 'body' },
    { text: 'plates', partId: 'inside' },
    { text: 'dielectric', partId: 'power' },
    { text: 'terminal', partId: 'end' }
  ]
};