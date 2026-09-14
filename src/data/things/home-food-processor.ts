import type { ThingData } from '../types';

export const homeFoodProcessor: ThingData = {
  id: 'home-food-processor',
  slug: 'home-food-processor',
  simpleName: 'The Food Cutter',
  realName: 'Food Processor',
  category: 'home',
  color: '#B0B0B0',
  funFacts: [
    'One cutting star can cut food much faster than a hand knife.',
    'You can cut many kinds of food with the same box.',
    'The blade is very sharp, so people must keep their hands away.',
    'The bowl can be washed in water when you are done.',
    'Some of these can cut food into very thin flat pieces.',
    'People use this box to make food soft for babies and older people.'
  ],
  parts: [
    { id: 'bowl', label: 'Main Bowl', realName: 'Work Bowl', position: [0, 0, 0], finish: 'hull' },
    { id: 'blade', label: 'Cutting Star', realName: 'Blade Disc', position: [0, -0.08, 0], finish: 'warning' },
    { id: 'lid', label: 'Top Cover', realName: 'Lid', position: [0, 0.2, 0], finish: 'hull' },
    { id: 'feed', label: 'Food Tube', realName: 'Feed Chute', position: [0.03, 0.26, 0], finish: 'cold' },
    { id: 'motor', label: 'Turning Part', realName: 'Motor', position: [0, -0.24, 0], finish: 'titanium' },
    { id: 'button', label: 'Push Part', realName: 'Control Button', position: [0.13, -0.2, 0.12], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This box cuts food into small bits with a fast turning blade.'],
        ['The ', { text: 'main bowl', part: 'bowl' }, ' holds the food while the blade cuts it.'],
        ['The ', { text: 'cutting star', part: 'blade' }, ' is the part that turns very fast and cuts.'],
        ['The ', { text: 'top cover', part: 'lid' }, ' keeps the food inside and stops your hand from touching the blade.'],
        ['You can put more food in through the ', { text: 'food tube', part: 'feed' }, '.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'turning part', part: 'motor' }, ' turns the blade when you push the button.'],
        ['The ', { text: 'push part', part: 'button' }, ' starts and stops the machine.'],
        ['You push the food down the tube with a long round stick.'],
        ['The bowl can be taken off and washed with water.'],
        ['Some of these have a small plate that cuts food into flat pieces.'],
        ['This box makes it easy to cut many things in a very short time.']
      ]
    }
  ],
  flow: [
    { partIds: ['motor'], caption: 'The turning part turns the cutting star', sentenceRef: 5 },
    { partIds: ['blade'], caption: 'The cutting star cuts the food very fast', sentenceRef: 2 },
    { partIds: ['lid'], caption: 'The top cover keeps your hand away from the blade', sentenceRef: 3 },
    { partIds: ['bowl'], caption: 'The main bowl holds the food while it is cut', sentenceRef: 1 }
  ],
  keyExpressions: [
    { text: 'cutting star', partId: 'blade' },
    { text: 'main bowl', partId: 'bowl' },
    { text: 'top cover', partId: 'lid' },
    { text: 'food tube', partId: 'feed' }
  ]
};
