import type { ThingData } from '../types';

export const homeIroningBoard: ThingData = {
  id: 'home-ironing-board',
  slug: 'home-ironing-board',
  simpleName: 'The Flat Board',
  realName: 'Ironing Board',
  category: 'home',
  color: '#DEB887',
  funFacts: [
    'This is a long flat board where you put cloth to make it flat with a hot thing.',
    'It has legs that can be made longer or shorter so people of any size can use it.',
    'The top has a soft cover that does not get hot when the hot thing sits on it.',
    'You can bend it up and put it away when you are done using it.',
    'Some of these have a place to hold the hot thing when you are not using it.',
    'It is one of the biggest things in the kitchen or washing room.'
  ],
  parts: [
    { id: 'body', label: 'Flat Top', realName: 'Board Surface', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Pointed End', realName: 'Nose End', position: [0, 0, -0.4], finish: 'titanium' },
    { id: 'top', label: 'Soft Cover', realName: 'Pad Cover', position: [0, 0.03, 0], finish: 'cold' },
    { id: 'leg', label: 'Leg Part', realName: 'Leg Frame', position: [0, -0.15, 0], finish: 'warning' },
    { id: 'rest', label: 'Hot Thing Rest', realName: 'Iron Rest', position: [0, 0.05, 0.3], finish: 'titanium' },
    { id: 'bend', label: 'Fold Part', realName: 'Hinge Joint', position: [0, -0.1, 0.15], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a long flat board where you put cloth to make it flat.'],
        ['The ', { text: 'body', part: 'body' }, ' is the flat top where the cloth sits.'],
        ['The ', { text: 'end', part: 'end' }, ' is the pointed part at one end of the board.'],
        ['The ', { text: 'top', part: 'top' }, ' is the soft cover that goes over the board.'],
        ['The ', { text: 'leg', part: 'leg' }, ' are the parts that hold the board up off the ground.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'rest', part: 'rest' }, ' is where you put the hot thing when you are not using it.'],
        ['The ', { text: 'bend', part: 'bend' }, ' is the part that lets you bend the board up.'],
        ['You put the cloth on the ', { text: 'body', part: 'body' }, ' and move the hot thing over it.'],
        ['The ', { text: 'top', part: 'top' }, ' keeps the hot thing from hurting the board.'],
        ['The ', { text: 'end', part: 'end' }, ' is pointed so you can get into small parts of the cloth.'],
        ['When done, you can bend it up by the ', { text: 'bend', part: 'bend' }, ' and put it away.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'top'], caption: 'The flat board has a soft cover', sentenceRef: 1 },
    { partIds: ['leg', 'bend'], caption: 'The legs hold it up and it can bend', sentenceRef: 4 },
    { partIds: ['end'], caption: 'The pointed end gets into small parts', sentenceRef: 9 },
    { partIds: ['rest'], caption: 'The rest holds the hot thing when not in use', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'ironing board', partId: 'body' },
    { text: 'board surface', partId: 'body' },
    { text: 'pad cover', partId: 'top' },
    { text: 'iron rest', partId: 'rest' }
  ]
};
