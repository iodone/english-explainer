import type { ThingData } from '../types'

export const homeRug: ThingData = {
  id: 'home-rug',
  slug: 'home-rug',
  simpleName: 'The Soft Floor Thing',
  realName: 'Home rug',
  category: 'home',
  funFacts: [
    'People have been making them for a very long time, since before we could write.',
    'Some of them are very old and are very important because they are so good.',
    'They make a room look nice and keep your feet from touching a cold floor.',
    'They can be very big and cover the whole floor, or very small like a blanket for the floor.',
    'It is good to hit them with a stick or use a special cleaning machine to get the dirt out.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Rug body', position: [0, 0, 0], finish: 'hull' },
    { id: 'top', label: 'top', realName: 'Top surface', position: [0, 0.01, 0], finish: 'warning' },
    { id: 'edges', label: 'edges', realName: 'Fringe', position: [0, 0, 0.3], finish: 'cold' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Underside', position: [0, -0.01, 0], finish: 'titanium' },
    { id: 'picture', label: 'picture', realName: 'Pattern', position: [0, 0.011, 0], finish: 'hull' },
    { id: 'threads', label: 'threads', realName: 'Fibers', position: [0.1, 0.02, 0.1], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'soft floor thing', dict: 'home-rug' }, '. It is a soft thing you put on the floor to make the room look nice and feel nice.'],
        ['The ', { text: 'body', part: 'body' }, ' is the big flat part. It is usually a long flat shape or a round shape.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part you see and walk on. It is made of many small soft things called threads.'],
        ['The ', { text: 'edges', part: 'edges' }, ' are the ends of the threads at the sides. They hang down and move when the wind blows.'],
        ['The ', { text: 'bottom part', part: 'bottom-part' }, ' is the part that touches the floor. It is usually darker and helps it not to move.'],
        ['The ', { text: 'picture', part: 'picture' }, ' is made by putting different colors of threads together. This can make very beautiful things.'],
        ['The ', { text: 'threads', part: 'threads' }, ' are the small soft things that make up the top. They are what makes it feel nice on your feet.'],
      ],
    },
    {
      sentences: [
        ['To make one, people tie many, many small holds on strings.'],
        ['This takes a very long time and is hard to do well.'],
        ['When it is finished, it is very strong and can last for a very long time.'],
        ['You can put it on any floor to make the room feel warmer and look better.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'top'], sentenceRef: 1, caption: 'Body is the big flat part; top is for walking on.' },
    { partIds: ['edges'], sentenceRef: 3, caption: 'Edges are the ends of the threads.' },
    { partIds: ['picture', 'threads'], sentenceRef: 5, caption: 'Picture is made of many threads.' },
    { partIds: ['bottom-part'], sentenceRef: 4, caption: 'Bottom part touches the floor.' },
  ],
  keyExpressions: [
    { text: 'soft floor thing', partId: 'body' },
    { text: 'threads', partId: 'threads' },
    { text: 'edges', partId: 'edges' },
    { text: 'bottom part', partId: 'bottom-part' },
  ],
  color: '#8B4513',
}