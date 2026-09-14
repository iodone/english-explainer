import type { ThingData } from '../types'

export const homeTable: ThingData = {
  id: 'home-table',
  slug: 'home-table',
  simpleName: 'The Eating Place',
  realName: 'Table',
  category: 'home',
  funFacts: [
    'The first ones were just flat rocks that people put food on.',
    'In some places, people sit on the floor around a very low one.',
    'A good one can last for many, many years if you take care of it.',
    'Some of them can get bigger by adding more parts in the middle.',
    'They come in all shapes — round, long, and even ones with many sides.',
  ],
  parts: [
    { id: 'top-part', label: 'top', realName: 'Tabletop', position: [0, 0.08, 0], finish: 'hull' },
    { id: 'legs', label: 'legs', realName: 'Legs', position: [0, 0, 0], finish: 'cold' },
    { id: 'under-part', label: 'under part', realName: 'Apron', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'foot-parts', label: 'foot parts', realName: 'Foot pads', position: [0, -0.08, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'eating place', dict: 'home-table' }, '. You put things on it like food and books.'],
        ['The ', { text: 'top', part: 'top-part' }, ' is the flat part on top. This is where you put everything. It must be very flat so things do not fall off.'],
        ['The ', { text: 'legs', part: 'legs' }, ' hold the top up high enough to use. There are usually four of them, one at each corner.'],
        ['The ', { text: 'under part', part: 'under-part' }, ' goes around under the top. It joins the legs together and makes the whole thing stronger.'],
        ['The ', { text: 'foot parts', part: 'foot-parts' }, ' are at the bottom of the legs. They stop the legs from making marks on the floor.'],
      ],
    },
    {
      sentences: [
        ['When you want to eat, you sit near it and put your food on the top.'],
        ['When you are done, you clean the top so it is ready for next time.'],
        ['Some people also use it for work, drawing, or playing games.'],
        ['It is one of the most used things in any home.'],
      ],
    },
  ],
  flow: [
    { partIds: ['top-part'], sentenceRef: 1, caption: 'The top is the flat part for putting things on.' },
    { partIds: ['legs'], sentenceRef: 2, caption: 'Legs hold the top up high.' },
    { partIds: ['under-part'], sentenceRef: 3, caption: 'The under part joins legs and makes it strong.' },
    { partIds: ['foot-parts'], sentenceRef: 4, caption: 'Foot parts stop marks on the floor.' },
  ],
  keyExpressions: [
    { text: 'eating place', partId: 'top-part' },
    { text: 'top', partId: 'top-part' },
    { text: 'legs', partId: 'legs' },
    { text: 'under part', partId: 'under-part' },
  ],
  color: '#DEB887',
}