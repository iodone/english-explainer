import type { ThingData } from '../types';

export const homeGrater: ThingData = {
  id: 'home-grater',
  slug: 'home-grater',
  simpleName: 'The Food Shredder',
  realName: 'Grater',
  category: 'home',
  color: '#A0A0A0',
  funFacts: [
    'A grater turns one piece of food into many thin strips.',
    'It is one of the oldest kitchen tools in the world.',
    'The holes are very sharp, so people must keep their hands away.',
    'You can use it for cheese, and for many other foods.',
    'It is small, so it does not take much room.',
    'Wash it with water after you use it, or food bits will stay in the holes.'
  ],
  parts: [
    { id: 'body', label: 'Main Body', realName: 'Grater Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'face', label: 'Cut Face', realName: 'Shredding Face', position: [0, -0.02, -0.11], finish: 'titanium' },
    { id: 'hole', label: 'Small Holes', realName: 'Shred Holes', position: [0.06, 0.08, -0.12], finish: 'warning' },
    { id: 'handle', label: 'Hold Top', realName: 'Handle Grip', position: [0, 0.22, 0], finish: 'hull' },
    { id: 'box', label: 'Catch Box', realName: 'Catch Tray', position: [0, -0.26, 0.02], finish: 'cold' },
    { id: 'rim', label: 'Bottom Rim', realName: 'Bottom Edge', position: [0, -0.19, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This box cuts food into long thin strips when you rub food on it.'],
        ['The ', { text: 'main body', part: 'body' }, ' is the box that holds all the parts together.'],
        ['The ', { text: 'cut face', part: 'face' }, ' is the side with many small sharp holes.'],
        ['The ', { text: 'small holes', part: 'hole' }, ' cut the food into thin pieces when it moves over them.'],
        ['The ', { text: 'hold top', part: 'handle' }, ' is the part you hold with your hand.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'catch box', part: 'box' }, ' is under the face and catches the cut food.'],
        ['The ', { text: 'bottom rim', part: 'rim' }, ' keeps the box standing up on the table.'],
        ['You rub a piece of food down the face and the holes cut it.'],
        ['You can turn the box to a side with bigger holes for thin strips.'],
        ['Wash it with water after you use it, and be careful with your hands.'],
        ['This small box helps people cut food fast with very little work.']
      ]
    }
  ],
  flow: [
    { partIds: ['hole'], caption: 'The small holes cut the food into thin pieces', sentenceRef: 3 },
    { partIds: ['face'], caption: 'You rub the food down the cut face', sentenceRef: 7 },
    { partIds: ['box'], caption: 'The catch box catches the food below', sentenceRef: 5 },
    { partIds: ['rim'], caption: 'The bottom rim keeps the box standing up', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'cut face', partId: 'face' },
    { text: 'small holes', partId: 'hole' },
    { text: 'hold top', partId: 'handle' },
    { text: 'catch box', partId: 'box' }
  ]
};
