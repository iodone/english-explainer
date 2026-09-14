import type { ThingData } from '../types';

export const homeColander: ThingData = {
  id: 'home-colander',
  slug: 'home-colander',
  simpleName: 'The Water Hole Bowl',
  realName: 'Colander',
  category: 'home',
  color: '#C0C0C0',
  funFacts: [
    'A colander lets water go out but keeps the food in the bowl.',
    'The holes are small, so food like rice will not go through.',
    'You can also use it to wash fresh food under running water.',
    'It is one of the oldest things in a kitchen.',
    'Some have two handles, and some have one long handle.',
    'People also use it to let wet food go dry before they cook it.'
  ],
  parts: [
    { id: 'bowl', label: 'Main Bowl', realName: 'Strainer Bowl', position: [0, 0, 0], finish: 'hull' },
    { id: 'holes', label: 'Small Holes', realName: 'Drain Holes', position: [0, -0.12, 0], finish: 'warning' },
    { id: 'handle', label: 'Side Handles', realName: 'Grip Handles', position: [0.34, 0.08, 0], finish: 'hull' },
    { id: 'foot', label: 'Hold Feet', realName: 'Support Feet', position: [0, -0.14, 0], finish: 'titanium' },
    { id: 'rim', label: 'Top Rim', realName: 'Pour Rim', position: [0, 0.13, 0], finish: 'cold' },
    { id: 'hook', label: 'Hang Loop', realName: 'Hanging Loop', position: [0.34, 0.16, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This bowl has many small holes that let water run out.'],
        ['The ', { text: 'main bowl', part: 'bowl' }, ' holds the food and the water.'],
        ['The ', { text: 'small holes', part: 'holes' }, ' let the water go out but keep the food in.'],
        ['The ', { text: 'side handles', part: 'handle' }, ' are the parts you hold on each side.'],
        ['The ', { text: 'hold feet', part: 'foot' }, ' keep the bowl up so the water can flow away.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'top rim', part: 'rim' }, ' is the round edge at the top of the bowl.'],
        ['The ', { text: 'hang loop', part: 'hook' }, ' lets you put it on a hook on the wall.'],
        ['You put food in the bowl and pour water over it to wash it.'],
        ['The water runs out through the holes and takes small bits with it.'],
        ['People use this bowl to wash food and to let wet food go dry.'],
        ['It is light and easy to wash after you use it in the kitchen.']
      ]
    }
  ],
  flow: [
    { partIds: ['holes'], caption: 'The small holes let the water run out', sentenceRef: 2 },
    { partIds: ['handle'], caption: 'The side handles are easy to hold', sentenceRef: 3 },
    { partIds: ['rim'], caption: 'The top rim is the round edge of the bowl', sentenceRef: 5 },
    { partIds: ['hook'], caption: 'The hang loop lets it rest on the wall', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'main bowl', partId: 'bowl' },
    { text: 'small holes', partId: 'holes' },
    { text: 'side handles', partId: 'handle' },
    { text: 'hang loop', partId: 'hook' }
  ]
};
