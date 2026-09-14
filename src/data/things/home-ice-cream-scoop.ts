import type { ThingData } from '../types';

export const homeIceCreamScoop: ThingData = {
  id: 'home-ice-cream-scoop',
  slug: 'home-ice-cream-scoop',
  simpleName: 'The Ice Cream Tool',
  realName: 'Ice Cream Scoop',
  category: 'home',
  color: '#C0C0C0',
  funFacts: [
    'This small scoop lifts a ball of ice cream out of a box.',
    'The round bowl holds the ice cream in one round piece.',
    'You pull the lever and the sweep arm pushes the ice cream out.',
    'The grip stays cold in your hand for a short time.',
    'You wash it by hand, because the sweet ice cream stays on the bowl.',
    'It also works for other soft food.'
  ],
  parts: [
    { id: 'bowl', label: 'Round Bowl', realName: 'Scoop Bowl', position: [-0.22, 0, 0], finish: 'titanium' },
    { id: 'grip', label: 'Hold Grip', realName: 'Handle', position: [0.22, 0, 0], finish: 'hull' },
    { id: 'lever', label: 'Pull Lever', realName: 'Eject Lever', position: [0.26, 0.07, 0], finish: 'cold' },
    { id: 'sweep', label: 'Sweep Arm', realName: 'Scraper', position: [-0.3, 0, 0], finish: 'warning' },
    { id: 'band', label: 'Band Ring', realName: 'Collar', position: [0, 0, 0], finish: 'titanium' },
    { id: 'cap', label: 'End Cap', realName: 'End Cap', position: [0.42, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This small scoop lifts a ball of ice cream out of a box.'],
        ['The ', { text: 'round bowl', part: 'bowl' }, ' is the part that holds the ice cream.'],
        ['The ', { text: 'hold grip', part: 'grip' }, ' is the part your hand holds.'],
        ['The ', { text: 'pull lever', part: 'lever' }, ' is the part you pull with your fingers.'],
        ['The ', { text: 'sweep arm', part: 'sweep' }, ' is the part that slides through the bowl.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'band ring', part: 'band' }, ' is the ring that joins the bowl to the grip.'],
        ['The ', { text: 'end cap', part: 'cap' }, ' is the small cap at the back of the grip.'],
        ['You push the bowl into the ice cream and turn it.'],
        ['The bowl fills with one round ball of ice cream.'],
        ['You pull the lever and the sweep arm pushes the ball out.'],
        ['You wash it by hand, because the sweet ice cream stays on the bowl.']
      ]
    }
  ],
  flow: [
    { partIds: ['bowl'], caption: 'The round bowl holds the ice cream', sentenceRef: 1 },
    { partIds: ['grip'], caption: 'The hold grip is what your hand holds', sentenceRef: 2 },
    { partIds: ['lever'], caption: 'The pull lever moves the sweep arm', sentenceRef: 3 },
    { partIds: ['band'], caption: 'The band ring joins the bowl to the grip', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'round bowl', partId: 'bowl' },
    { text: 'hold grip', partId: 'grip' },
    { text: 'pull lever', partId: 'lever' },
    { text: 'band ring', partId: 'band' }
  ]
};
