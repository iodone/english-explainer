import type { ThingData } from '../types';

export const spaceCargoBag: ThingData = {
  id: 'space-cargo-bag',
  slug: 'space-cargo-bag',
  simpleName: 'The Space Bag',
  realName: 'Space Cargo Bag',
  category: 'space',
  color: '#8B7D6B',
  funFacts: [
    'This bag can hold things while people move in space.',
    'The bag is soft, so it can fit in a small place when it is empty.',
    'A strap can hold the bag to a wall so it does not float away.',
    'The zip line keeps small things from coming out.',
    'People can carry a full bag with the handle on top.',
    'The bag is made to take a hit and keep the things inside safe.'
  ],
  parts: [
    { id: 'body', label: 'Soft Bag Body', realName: 'Cargo Bag', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Bag End', realName: 'End Strap', position: [-0.25, 0, 0], finish: 'cold' },
    { id: 'top', label: 'Top Handle', realName: 'Carry Handle', position: [0, 0.3, 0], finish: 'titanium' },
    { id: 'inside', label: 'Bag Inside', realName: 'Cargo Space', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'Close Zip', realName: 'Zip Seal', position: [0, 0.22, 0], finish: 'titanium' },
    { id: 'strap', label: 'Side Strap', realName: 'Restraint Strap', position: [0.27, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This bag is made to hold things in space.'],
        ['The ', { text: 'body', part: 'body' }, ' is soft, so it can bend and fit in a small place.'],
        ['The ', { text: 'end', part: 'end' }, ' has a strap that can hold the bag to a wall.'],
        ['The ', { text: 'top', part: 'top' }, ' has a handle for your hand.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is where the things go.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' is a line of teeth that close the bag.'],
        ['The ', { text: 'strap', part: 'strap' }, ' on the side can hold the bag in place when it is full.'],
        ['A person pulls the ', { text: 'strap', part: 'strap' }, ' to make the bag small.'],
        ['The soft ', { text: 'body', part: 'body' }, ' can take a hit without breaking.'],
        ['You can open the ', { text: 'plug', part: 'plug' }, ' and put your things in the ', { text: 'inside', part: 'inside' }, '.'],
        ['This bag keeps things safe while people move and work.']
      ]
    }
  ],
  flow: [
    { partIds: ['body'], caption: 'The soft bag holds things', sentenceRef: 1 },
    { partIds: ['plug'], caption: 'You open the zip to put things in', sentenceRef: 9 },
    { partIds: ['top', 'strap'], caption: 'The handle and strap hold the bag', sentenceRef: 3 },
    { partIds: ['end', 'inside'], caption: 'The bag keeps things safe inside', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'cargo bag', partId: 'body' },
    { text: 'restraint strap', partId: 'strap' },
    { text: 'zip seal', partId: 'plug' },
    { text: 'carry handle', partId: 'top' }
  ]
};
