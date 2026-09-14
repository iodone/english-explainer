import type { ThingData } from '../types';

export const homeShutter: ThingData = {
  id: 'home-shutter',
  slug: 'home-shutter',
  simpleName: 'The Window Cover',
  realName: 'Interior Window Shutter',
  category: 'home',
  color: '#DEB887',
  funFacts: [
    'This cover can keep a room dark in the middle of the day.',
    'Turning the pieces can let light in without opening the whole window.',
    'Some covers move by hand, and some move with a motor.',
    'They also help keep a room warm on a cold day.',
    'The cover can stop strong sun from making a room too hot.',
    'People have used covers like this for hundreds of years.'
  ],
  parts: [
    { id: 'body', label: 'Wide Cover', realName: 'Shutter Panel', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Side Piece', realName: 'Rail End Cap', position: [0.28, 0, 0], finish: 'cold' },
    { id: 'top', label: 'Top Bar', realName: 'Head Rail', position: [0, 0.24, 0], finish: 'titanium' },
    { id: 'inside', label: 'Turning Stick', realName: 'Tilt Rod', position: [0, 0, 0.08], finish: 'warning' },
    { id: 'plug', label: 'Bottom Holder', realName: 'Locking Mechanism', position: [0, -0.24, 0], finish: 'titanium' },
    { id: 'power', label: 'Turning Motor', realName: 'Shutter Motor', position: [0.32, 0.16, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a cover for a window in a house.'],
        ['The ', { text: 'body', part: 'body' }, ' is made of wide pieces that can turn to let light in or keep it out.'],
        ['The ', { text: 'top', part: 'top' }, ' is a long bar that holds the ', { text: 'body', part: 'body' }, ' up.'],
        ['The ', { text: 'end', part: 'end' }, ' on each side helps the ', { text: 'body', part: 'body' }, ' move without falling out.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is a small stick that turns the pieces.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' at the bottom can hold the ', { text: 'body', part: 'body' }, ' so it stays in place.'],
        ['The ', { text: 'power', part: 'power' }, ' is a small motor that can move the ', { text: 'body', part: 'body' }, ' for you.'],
        ['You can move the ', { text: 'body', part: 'body' }, ' down to make a room dark.'],
        ['You can turn the pieces to let a little light in.'],
        ['The ', { text: 'top', part: 'top' }, ' and ', { text: 'end', part: 'end' }, ' carry the weight of the ', { text: 'body', part: 'body' }, '.'],
        ['The ', { text: 'plug', part: 'plug' }, ' keeps the cover still when the wind moves it.']
      ]
    }
  ],
  flow: [
    { partIds: ['top', 'end'], caption: 'The bar and sides hold the cover', sentenceRef: 2 },
    { partIds: ['inside'], caption: 'The stick turns the pieces', sentenceRef: 4 },
    { partIds: ['body'], caption: 'The cover can make a room dark', sentenceRef: 7 },
    { partIds: ['plug', 'power'], caption: 'The holder and motor keep the cover in place', sentenceRef: 10 }
  ],
  keyExpressions: [
    { text: 'window shutter', partId: 'body' },
    { text: 'tilt rod', partId: 'inside' },
    { text: 'head rail', partId: 'top' },
    { text: 'shutter motor', partId: 'power' }
  ]
};
