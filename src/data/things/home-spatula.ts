import type { ThingData } from '../types';

export const homeSpatula: ThingData = {
  id: 'home-spatula',
  slug: 'home-spatula',
  simpleName: 'The Flat Turn Thing',
  realName: 'Kitchen Spatula',
  category: 'home',
  color: '#C0C0C0',
  funFacts: [
    'This thing has a flat end for turning food in a hot plate.',
    'You can also use it to get food out of a bowl or off of a plate.',
    'Some of these are made of metal and some are made of hard stuff that bends.',
    'The flat end is just right for getting under food without breaking it.',
    'People use it every day to cook things like eggs and food.',
    'It is one of the most used things in the kitchen.'
  ],
  parts: [
    { id: 'body', label: 'Flat End', realName: 'Spatula Blade', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Long Handle', realName: 'Handle Shaft', position: [0, 0, -0.25], finish: 'cold' },
    { id: 'top', label: 'Edge Part', realName: 'Leading Edge', position: [0, 0.02, 0.1], finish: 'titanium' },
    { id: 'side', label: 'Side Wall', realName: 'Side Guard', position: [0.04, 0.02, 0], finish: 'warning' },
    { id: 'hang', label: 'Hang Part', realName: 'Hang Hole', position: [0, 0, -0.3], finish: 'hull' },
    { id: 'grip', label: 'Hold Part', realName: 'Grip Zone', position: [0, 0, -0.18], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing with a flat end for turning food in a hot plate.'],
        ['The ', { text: 'body', part: 'body' }, ' is the flat part that goes under the food.'],
        ['The ', { text: 'end', part: 'end' }, ' is the long part you hold to move it.'],
        ['The ', { text: 'top', part: 'top' }, ' is the thin edge at the front that gets under food.'],
        ['The ', { text: 'side', part: 'side' }, ' is a small wall on the side to keep food from falling off.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hang', part: 'hang' }, ' at the end lets you hang it up when done.'],
        ['The ', { text: 'grip', part: 'grip' }, ' is the part of the handle that feels good to hold.'],
        ['You put the ', { text: 'body', part: 'body' }, ' under the food and turn it over.'],
        ['The ', { text: 'top', part: 'top' }, ' helps it get under food that is flat in the hot plate.'],
        ['The ', { text: 'side', part: 'side' }, ' stops the food from sliding off when you turn it.'],
        ['This thing is very good for cooking things like eggs and food in a hot plate.']
      ]
    }
  ],
  flow: [
    { partIds: ['end', 'grip'], caption: 'You hold the long handle', sentenceRef: 2 },
    { partIds: ['body', 'top'], caption: 'The flat part gets under the food', sentenceRef: 8 },
    { partIds: ['side'], caption: 'The wall keeps food from falling off', sentenceRef: 9 },
    { partIds: ['hang'], caption: 'Hang it up when done', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'spatula', partId: 'body' },
    { text: 'spatula blade', partId: 'body' },
    { text: 'leading edge', partId: 'top' },
    { text: 'grip zone', partId: 'grip' }
  ]
};
