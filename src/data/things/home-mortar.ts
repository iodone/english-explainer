import type { ThingData } from '../types';

export const homeMortar: ThingData = {
  id: 'home-mortar',
  slug: 'home-mortar',
  simpleName: 'The Smash Bowl',
  realName: 'Mortar and Pestle',
  category: 'home',
  color: '#8B8682',
  funFacts: [
    'A mortar and a pestle are used to smash dry food into powder.',
    'It is one of the oldest kitchen things in the world.',
    'The bowl is heavy, so it does not move when you push the stick.',
    'People use it for seeds, dry leaves, and other hard food.',
    'It must be washed and dried after you use it.',
    'The stone stays cool, so the food does not get hot when you work.'
  ],
  parts: [
    { id: 'bowl', label: 'Smash Bowl', realName: 'Mortar Bowl', position: [0, 0, 0], finish: 'hull' },
    { id: 'head', label: 'Round Head', realName: 'Pestle Head', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'handle', label: 'Hold End', realName: 'Pestle Handle', position: [0, 0.28, 0], finish: 'hull' },
    { id: 'side', label: 'Thick Side', realName: 'Heavy Wall', position: [0.28, 0, 0], finish: 'titanium' },
    { id: 'lip', label: 'Pour Lip', realName: 'Pouring Lip', position: [0, 0.12, 0], finish: 'cold' },
    { id: 'foot', label: 'Flat Foot', realName: 'Wide Foot', position: [0, -0.14, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This heavy bowl and its round stick smash food into a soft powder.'],
        ['The ', { text: 'smash bowl', part: 'bowl' }, ' is the deep bowl that holds the food.'],
        ['The ', { text: 'round head', part: 'head' }, ' is the heavy end of the stick that pushes the food down.'],
        ['The ', { text: 'hold end', part: 'handle' }, ' is the part you hold in your hand.'],
        ['The ', { text: 'thick side', part: 'side' }, ' is the wall of the bowl that does not break.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'pour lip', part: 'lip' }, ' lets you pour the powder out of the bowl.'],
        ['The ', { text: 'flat foot', part: 'foot' }, ' keeps the bowl still on the table.'],
        ['You push the stick down and turn it to smash the food.'],
        ['The food gets smaller and smaller until it is a fine powder.'],
        ['This bowl is made of stone, so it is very heavy and does not move.'],
        ['People use it to smash dry seeds and leaves for cooking.']
      ]
    }
  ],
  flow: [
    { partIds: ['head'], caption: 'The round head pushes the food down', sentenceRef: 2 },
    { partIds: ['bowl'], caption: 'The smash bowl holds the food', sentenceRef: 1 },
    { partIds: ['foot'], caption: 'The flat foot keeps the bowl still', sentenceRef: 6 },
    { partIds: ['lip'], caption: 'The pour lip lets the powder come out', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'smash bowl', partId: 'bowl' },
    { text: 'round head', partId: 'head' },
    { text: 'hold end', partId: 'handle' },
    { text: 'pour lip', partId: 'lip' }
  ]
};
