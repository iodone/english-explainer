import type { ThingData } from '../types'

export const homeBed: ThingData = {
  id: 'home-bed',
  slug: 'home-bed',
  simpleName: 'The Sleep Place',
  realName: 'Bed',
  category: 'home',
  funFacts: [
    'You spend about a third of your life on one of these.',
    'The first ones were just piles of soft stuff on the ground.',
    'Some of them can move up and down at the top and bottom.',
    'A good one can help your body feel better when you wake up.',
    'In some places, people sleep on very thin ones on the floor.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Bed frame', position: [0, 0, 0], finish: 'hull' },
    { id: 'soft-part', label: 'soft part', realName: 'Mattress', position: [0, 0.06, 0], finish: 'titanium' },
    { id: 'head-part', label: 'head part', realName: 'Headboard', position: [0, 0.1, -0.14], finish: 'cold' },
    { id: 'foot-part', label: 'foot part', realName: 'Footboard', position: [0, 0.06, 0.14], finish: 'cold' },
    { id: 'cover', label: 'cover', realName: 'Blanket', position: [0, 0.1, 0], finish: 'hull' },
    { id: 'pillow', label: 'pillow', realName: 'Pillow', position: [0, 0.12, -0.1], finish: 'titanium' },
    { id: 'legs', label: 'legs', realName: 'Bed legs', position: [0, -0.06, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'sleep place', dict: 'home-bed' }, '. You use it every night to rest your body and mind.'],
        ['The ', { text: 'body', part: 'body' }, ' is the part that holds everything up. It is usually made of wood or strong metal.'],
        ['The ', { text: 'soft part', part: 'soft-part' }, ' is on top of the body. It is soft so your body is nice when you lie down.'],
        ['The ', { text: 'head part', part: 'head-part' }, ' is at the top. It stops your head from hitting the wall and gives you something to lean on.'],
        ['The ', { text: 'foot part', part: 'foot-part' }, ' is at the bottom. It stops the cover from falling off the end.'],
        ['The ', { text: 'cover', part: 'cover' }, ' keeps you warm when it is cold. You pull it over your body before you go to sleep.'],
        ['The ', { text: 'pillow', part: 'pillow' }, ' goes under your head. It makes sleeping more nice for your neck.'],
        ['The ', { text: 'legs', part: 'legs' }, ' at the bottom hold the whole thing off the ground. They keep the body high enough to use.'],
      ],
    },
    {
      sentences: [
        ['When it is time to sleep, you lie down on the soft part.'],
        ['You put your head on the pillow and pull the cover over yourself.'],
        ['The soft part holds your body so it can rest and get better.'],
        ['When you wake up, your body should feel good and ready for the day.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'legs'], sentenceRef: 1, caption: 'The body holds everything; legs hold it up.' },
    { partIds: ['soft-part'], sentenceRef: 2, caption: 'The soft part is on top for a nice feel.' },
    { partIds: ['head-part', 'foot-part'], sentenceRef: 3, caption: 'Head and foot parts at each end.' },
    { partIds: ['cover', 'pillow'], sentenceRef: 5, caption: 'Cover keeps warm; pillow is nice for your head.' },
  ],
  keyExpressions: [
    { text: 'sleep place', partId: 'body' },
    { text: 'soft part', partId: 'soft-part' },
    { text: 'head part', partId: 'head-part' },
    { text: 'cover', partId: 'cover' },
  ],
  color: '#DEB887',
}