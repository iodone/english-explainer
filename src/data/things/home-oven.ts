import type { ThingData } from '../types';

export const homeOven: ThingData = {
  id: 'home-oven',
  slug: 'home-oven',
  simpleName: 'The Hot Box',
  realName: 'Oven',
  category: 'home',
  color: '#696969',
  funFacts: [
    'This is a hot box that cooks food.',
    'You can make bread and many other things in it.',
    'It gets very hot inside, so you should not touch it when it is on.',
    'Most of them have a glass door so you can look at the food while it cooks.',
    'Some of them have a light inside so you can see better.',
    'You set how hot you want it with buttons or a turner.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'door', position: [0, -0.15, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'stovetop', position: [0, 0.15, 0], finish: 'hull' },
    { id: 'inside', label: 'inside', realName: 'chamber', position: [0, 0, 0], finish: 'warning' },
    { id: 'power', label: 'power', realName: 'heating element', position: [0, -0.1, 0], finish: 'warning' },
    { id: 'handle', label: 'handle', realName: 'handle', position: [0, -0.18, 0.12], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This is a hot box that cooks food for you.'],
        ['You put food inside it and it makes the food hot.'],
        ['You can make bread and many other things in the ', { text: 'inside', part: 'inside' }, '.'],
        ['The ', { text: 'body', part: 'body' }, ' is the outside part that holds all the hot parts.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'end', part: 'end' }, ' has glass in it so you can look at your food while it cooks.'],
        ['You open the ', { text: 'end', part: 'end' }, ' with the ', { text: 'handle', part: 'handle' }, '.'],
        ['The ', { text: 'power', part: 'power' }, ' makes the inside very hot.'],
        ['You tell the box how hot to be with buttons or a turner.'],
        ['The ', { text: 'top', part: 'top' }, ' on top can also cook food in pots.'],
        ['The inside light turns on when you open the ', { text: 'end', part: 'end' }, '.'],
        ['When the food is done, you take it out with special hand covers so you do not get hurt.']
      ]
    }
  ],
  flow: [
    { partIds: ['inside'], caption: 'You put food inside the hot box', sentenceRef: 2 },
    { partIds: ['end', 'handle'], caption: 'You open the door with the handle', sentenceRef: 5 },
    { partIds: ['power'], caption: 'The heating part makes the inside hot', sentenceRef: 6 },
    { partIds: ['top'], caption: 'The top can cook with pots', sentenceRef: 8 }
  ],
  keyExpressions: [
    { text: 'oven', partId: 'body' },
    { text: 'chamber', partId: 'inside' },
    { text: 'stovetop', partId: 'top' },
    { text: 'heating element', partId: 'power' }
  ]
};