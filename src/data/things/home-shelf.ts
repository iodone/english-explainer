import type { ThingData } from '../types'

export const homeShelf: ThingData = {
  id: 'home-shelf',
  slug: 'home-shelf',
  simpleName: 'The Thing Holder',
  realName: 'Shelf',
  category: 'home',
  funFacts: [
    'Some of them can hold more than a hundred heavy books without breaking.',
    'The first ones were just flat rocks put into holes in walls.',
    'Some of them can be moved up and down to fit different things.',
    'They help keep your home clean by giving things a place to go.',
    'Some are made of wood, while others are made of metal or even glass.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Shelf board', position: [0, 0, 0], finish: 'hull' },
    { id: 'hold-parts', label: 'hold parts', realName: 'Brackets', position: [0, -0.04, -0.06], finish: 'cold' },
    { id: 'sides', label: 'sides', realName: 'Side walls', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'lip', label: 'lip', realName: 'Front lip', position: [0, 0.02, 0.06], finish: 'hull' },
    { id: 'back-part', label: 'back part', realName: 'Back panel', position: [0, 0.04, -0.06], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'thing holder', dict: 'home-shelf' }, '. You put things on it like books, pictures, and other stuff.'],
        ['The ', { text: 'body', part: 'body' }, ' is the flat part that holds everything. It must be strong so it does not break when you put heavy things on it.'],
        ['The ', { text: 'hold parts', part: 'hold-parts' }, ' are under the body. They join the body to the wall so it stays up.'],
        ['The ', { text: 'sides', part: 'sides' }, ' are on the left and right. They stop things from falling off the sides.'],
        ['The ', { text: 'lip', part: 'lip' }, ' is at the front. It is a small part that stops things from sliding off the front.'],
        ['The ', { text: 'back part', part: 'back-part' }, ' is behind everything. It stops things from falling off the back and hitting the wall.'],
      ],
    },
    {
      sentences: [
        ['When you want to put something on it, you just place it on the body.'],
        ['The sides and lip keep it from falling off.'],
        ['You can put many different things on it, like books and pictures.'],
        ['It helps keep your home clean by giving everything a place to go.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body is the flat part for things.' },
    { partIds: ['hold-parts'], sentenceRef: 2, caption: 'Hold parts join it to the wall.' },
    { partIds: ['sides', 'lip'], sentenceRef: 3, caption: 'Sides and lip stop things from falling.' },
    { partIds: ['back-part'], sentenceRef: 5, caption: 'Back part stops things from going off the back.' },
  ],
  keyExpressions: [
    { text: 'thing holder', partId: 'body' },
    { text: 'hold parts', partId: 'hold-parts' },
    { text: 'sides', partId: 'sides' },
    { text: 'lip', partId: 'lip' },
  ],
  color: '#DEB887',
}