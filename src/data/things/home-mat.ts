import type { ThingData } from '../types'

export const homeMat: ThingData = {
  id: 'home-mat',
  slug: 'home-mat',
  simpleName: 'The Floor Thing',
  realName: 'Home mat',
  category: 'home',
  funFacts: [
    'Most people put one at the door so people can clean their feet before they come in.',
    'Some of them have words on them like "Hello" or "Welcome".',
    'They are usually made of a hard stuff that is not afraid of water.',
    'It is good to hit them outside to get the dirt out of them.',
    'Some of them are made of small round things that feel nice on your feet.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Mat body', position: [0, 0, 0], finish: 'hull' },
    { id: 'top', label: 'top', realName: 'Top surface', position: [0, 0.01, 0], finish: 'warning' },
    { id: 'edges', label: 'edges', realName: 'Edges', position: [0, 0, 0.15], finish: 'cold' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Underside', position: [0, -0.01, 0], finish: 'titanium' },
    { id: 'picture', label: 'picture', realName: 'Design', position: [0, 0.011, 0], finish: 'hull' },
    { id: 'threads', label: 'threads', realName: 'Bristles', position: [0.1, 0.02, 0.1], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'floor thing', dict: 'home-mat' }, '. You put it on the floor near a door so people can clean their feet before they come in.'],
        ['The ', { text: 'body', part: 'body' }, ' is the flat part. It is usually not very big and is easy to move.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part you see and step on. It has many small hard things that take the dirt off your feet.'],
        ['The ', { text: 'edges', part: 'edges' }, ' are the sides of the body. They are usually a little higher than the middle part.'],
        ['The ', { text: 'bottom part', part: 'bottom-part' }, ' is the part that touches the floor. It is made of a stuff that stops it from moving when you step on it.'],
        ['The ', { text: 'picture', part: 'picture' }, ' is the words or thing you see on the top. Some of them say "Hello" or have a picture of a dog or a house.'],
        ['The ', { text: 'threads', part: 'threads' }, ' are the small hard things on the top. They are what take the dirt off your feet.'],
      ],
    },
    {
      sentences: [
        ['To use it, you just put it on the floor near the door.'],
        ['When people come in, they step on it and move their feet back and forth.'],
        ['The small hard things on the top take the dirt off the bottom of their feet.'],
        ['Then the floor inside your house stays clean.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'top'], sentenceRef: 1, caption: 'Body is flat; top is for stepping on.' },
    { partIds: ['edges'], sentenceRef: 3, caption: 'Edges are the sides of the body.' },
    { partIds: ['picture', 'threads'], sentenceRef: 5, caption: 'Picture is on top; threads take dirt off.' },
    { partIds: ['bottom-part'], sentenceRef: 4, caption: 'Bottom part stops it from moving.' },
  ],
  keyExpressions: [
    { text: 'floor thing', partId: 'body' },
    { text: 'threads', partId: 'threads' },
    { text: 'edges', partId: 'edges' },
    { text: 'bottom part', partId: 'bottom-part' },
  ],
  color: '#556B2F',
}