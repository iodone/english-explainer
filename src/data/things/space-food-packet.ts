import type { ThingData } from '../types';

export const spaceFoodPacket: ThingData = {
  id: 'space-food-packet',
  slug: 'space-food-packet',
  simpleName: 'The Space Food Bag',
  realName: 'Space Food Pouch',
  category: 'space',
  color: '#FFD700',
  funFacts: [
    'In space, food can float away if it is not held.',
    'This bag lets people eat without a plate or bowl.',
    'The food inside is often dry, so it can stay good for a long time.',
    'People add water to some bags before they eat.',
    'You can not use a cup for a drink in space.',
    'When the bag is empty, it can be put in the trash.'
  ],
  parts: [
    { id: 'body', label: 'Food Bag Body', realName: 'Pouch Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Open End', realName: 'Tear Notch', position: [0, 0.24, 0], finish: 'titanium' },
    { id: 'top', label: 'Top Line', realName: 'Zip Seal', position: [0, 0.16, 0.04], finish: 'cold' },
    { id: 'inside', label: 'Food Inside', realName: 'Meal Pouch', position: [0, -0.02, 0], finish: 'hull' },
    { id: 'plug', label: 'Drink Door', realName: 'Drink Tube', position: [0.14, 0.1, 0.05], finish: 'cold' },
    { id: 'power', label: 'Warm Part', realName: 'Heat Pack', position: [0, -0.2, 0.04], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This bag holds food for people who live in space.'],
        ['The ', { text: 'body', part: 'body' }, ' is a soft bag that keeps the food safe.'],
        ['The ', { text: 'end', part: 'end' }, ' is the part you open when it is time to eat.'],
        ['The ', { text: 'top', part: 'top' }, ' is a line you pull to close the bag again.'],
        ['The ', { text: 'inside', part: 'inside' }, ' holds the food, and it must not float out.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' is a small door for a drink tube.'],
        ['The ', { text: 'power', part: 'power' }, ' is a warm part that can heat the food.'],
        ['You open the ', { text: 'end', part: 'end' }, ' and put the ', { text: 'plug', part: 'plug' }, ' in the drink tube.'],
        ['You can eat right from the bag with a small tool.'],
        ['When you are done, you close the ', { text: 'top', part: 'top' }, ' and put the bag in the trash can.'],
        ['This bag helps people eat in space and keep the room clean.']
      ]
    }
  ],
  flow: [
    { partIds: ['body'], caption: 'The soft bag keeps food safe', sentenceRef: 1 },
    { partIds: ['end'], caption: 'You open the end when it is time to eat', sentenceRef: 2 },
    { partIds: ['plug', 'power'], caption: 'The tube and warm part help you eat', sentenceRef: 5 },
    { partIds: ['top', 'inside'], caption: 'You close the top so food stays in', sentenceRef: 9 }
  ],
  keyExpressions: [
    { text: 'food pouch', partId: 'body' },
    { text: 'tear notch', partId: 'end' },
    { text: 'drink tube', partId: 'plug' },
    { text: 'heat pack', partId: 'power' }
  ]
};
