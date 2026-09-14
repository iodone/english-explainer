import type { ThingData } from '../types';

export const homeMandoline: ThingData = {
  id: 'home-mandoline',
  slug: 'home-mandoline',
  simpleName: 'The Even Cutter',
  realName: 'Mandoline',
  category: 'home',
  color: '#808080',
  funFacts: [
    'A mandoline cuts food into pieces that are all the same.',
    'It can cut food much faster than a knife and a hand.',
    'The blade is very sharp, so you must use the hand guard.',
    'You can set it to cut thick pieces or very thin pieces.',
    'It must be washed with care, because the blade can cut your hand.',
    'People use it in kitchens to cut food for many kinds of dishes.'
  ],
  parts: [
    { id: 'board', label: 'Main Board', realName: 'Cutting Board', position: [0, 0, 0], finish: 'hull' },
    { id: 'blade', label: 'Long Blade', realName: 'Cutting Blade', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'ramp', label: 'Slide Slope', realName: 'Sliding Ramp', position: [0, 0.03, 0.16], finish: 'cold' },
    { id: 'guard', label: 'Hand Guard', realName: 'Food Holder', position: [-0.2, 0.1, -0.12], finish: 'warning' },
    { id: 'knob', label: 'Round Turn Part', realName: 'Thickness Dial', position: [0.32, 0.06, -0.1], finish: 'hull' },
    { id: 'leg', label: 'Hold Legs', realName: 'Stand Legs', position: [-0.24, -0.06, 0.12], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This board cuts food into even pieces when you slide food along it.'],
        ['The ', { text: 'main board', part: 'board' }, ' is the flat part you put the food on.'],
        ['The ', { text: 'long blade', part: 'blade' }, ' is the sharp part that cuts the food.'],
        ['The ', { text: 'slide slope', part: 'ramp' }, ' is the part the food slides down.'],
        ['The ', { text: 'round turn part', part: 'knob' }, ' sets how thick each piece will be.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hand guard', part: 'guard' }, ' holds the food and keeps your hand away from the blade.'],
        ['The ', { text: 'hold legs', part: 'leg' }, ' keep the board up on the table.'],
        ['You slide a piece of food down the board and the blade cuts it.'],
        ['The food falls in thin even pieces into a bowl or on a plate.'],
        ['You must keep your hand away from the blade at all times.'],
        ['This board cuts food fast, but it must be washed with care.']
      ]
    }
  ],
  flow: [
    { partIds: ['ramp'], caption: 'You slide the food down the slide slope', sentenceRef: 3 },
    { partIds: ['blade'], caption: 'The long blade cuts the food into even pieces', sentenceRef: 2 },
    { partIds: ['knob'], caption: 'The round turn part sets how thick each piece is', sentenceRef: 4 },
    { partIds: ['guard'], caption: 'The hand guard keeps your hand away from the blade', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'main board', partId: 'board' },
    { text: 'long blade', partId: 'blade' },
    { text: 'hand guard', partId: 'guard' },
    { text: 'slide slope', partId: 'ramp' }
  ]
};
