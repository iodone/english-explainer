import type { ThingData } from '../types';

export const spaceFilter: ThingData = {
  id: 'space-filter',
  slug: 'space-filter',
  simpleName: 'The Air Cleaner',
  realName: 'Space HEPA Filter',
  category: 'space',
  color: '#B0C4DE',
  funFacts: [
    'This part cleans the air inside the ship so people can breathe well.',
    'It can take out very small things that you cannot see in the air.',
    'People must change it after some time because it gets full of bad things.',
    'Without this part, the air in the ship would get dirty very fast.',
    'It works all day and all night to keep the air clean.',
    'The clean air goes back into the room after going through this part.'
  ],
  parts: [
    { id: 'body', label: 'Square Body', realName: 'Filter Frame', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Air In', realName: 'Inlet Port', position: [0, 0, -0.15], finish: 'cold' },
    { id: 'top', label: 'Clean Air Out', realName: 'Outlet Port', position: [0, 0, 0.15], finish: 'titanium' },
    { id: 'inside', label: 'Clean Part', realName: 'HEPA Media', position: [0, 0, 0], finish: 'warning' },
    { id: 'seal', label: 'Edge Ring', realName: 'Gasket Seal', position: [0, 0.08, 0], finish: 'hull' },
    { id: 'cover', label: 'Front Wall', realName: 'Pre-Filter Screen', position: [0, 0, -0.12], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a part that cleans the air inside a ship in space.'],
        ['The ', { text: 'body', part: 'body' }, ' is the hard outside that holds all the parts.'],
        ['The ', { text: 'end', part: 'end' }, ' is where dirty air comes in.'],
        ['The ', { text: 'top', part: 'top' }, ' is where clean air goes out.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the part that catches small things in the air.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'seal', part: 'seal' }, ' is a ring that stops air from going around the clean part.'],
        ['The ', { text: 'cover', part: 'cover' }, ' is a wall that catches big things before they get to the clean part.'],
        ['Dirty air goes in through the ', { text: 'end', part: 'end' }, ' and hits the ', { text: 'cover', part: 'cover' }, '.'],
        ['Then it goes through the ', { text: 'inside', part: 'inside' }, ' which catches very small things.'],
        ['The clean air comes out the ', { text: 'top', part: 'top' }, ' and goes back into the room.'],
        ['This part works all the time to keep the air safe for people to breathe.']
      ]
    }
  ],
  flow: [
    { partIds: ['end', 'cover'], caption: 'Dirty air comes in and hits the front wall', sentenceRef: 7 },
    { partIds: ['inside', 'seal'], caption: 'The clean part catches small things', sentenceRef: 8 },
    { partIds: ['top'], caption: 'Clean air goes out', sentenceRef: 9 },
    { partIds: ['body'], caption: 'The hard body holds everything in place', sentenceRef: 1 }
  ],
  keyExpressions: [
    { text: 'HEPA filter', partId: 'inside' },
    { text: 'filter frame', partId: 'body' },
    { text: 'inlet port', partId: 'end' },
    { text: 'pre-filter screen', partId: 'cover' }
  ]
};
