import type { ThingData } from '../types'

export const homeCurtain: ThingData = {
  id: 'home-curtain',
  slug: 'home-curtain',
  simpleName: 'The Window Cover',
  realName: 'Home curtain',
  category: 'home',
  funFacts: [
    'They have been used for a very long time to keep light out and to make rooms look nice.',
    'Some of them are made of a heavy stuff that keeps the cold out too.',
    'They can be many different colors and have many different pictures on them.',
    'Some of them are made to be washed in a machine and some must be washed by hand.',
    'They are usually hung on a long round thing above the window.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Curtain panel', position: [0, 0, 0], finish: 'hull' },
    { id: 'top', label: 'top', realName: 'Header', position: [0, 0.15, 0], finish: 'cold' },
    { id: 'rod', label: 'rod', realName: 'Curtain rod', position: [0, 0.16, 0], finish: 'titanium' },
    { id: 'rings', label: 'rings', realName: 'Rings', position: [0, 0.15, 0], finish: 'titanium' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Hem', position: [0, -0.15, 0], finish: 'hull' },
    { id: 'cloth', label: 'cloth', realName: 'Fabric', position: [0, 0, 0.01], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'window cover', dict: 'home-curtain' }, '. It is a big piece of cloth that hangs above a window to keep light out or to make the room look nice.'],
        ['The ', { text: 'body', part: 'body' }, ' is the big piece of cloth. It hangs down from the top and covers the window.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part at the very top of the body. This is where it joins the rod that holds it up.'],
        ['The ', { text: 'rod', part: 'rod' }, ' is the long round thing above the window. It holds the body up and lets it move from side to side.'],
        ['The ', { text: 'rings', part: 'rings' }, ' are round things that go around the rod. They let the body move easily when you open or close it.'],
        ['The ', { text: 'bottom part', part: 'bottom-part' }, ' is the edge at the very bottom. It is usually a little heavier so the body hangs straight down.'],
        ['The ', { text: 'cloth', part: 'cloth' }, ' is what the body is made of. It can be thin to let some light through or thick to keep all light out.'],
      ],
    },
    {
      sentences: [
        ['To open it, you pull the body to one side.'],
        ['The rings slide on the rod and the window is open so you can see outside.'],
        ['To close it, you pull the body back to the middle.'],
        ['Now the window is covered and no one can see inside and the light stays out.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'cloth'], sentenceRef: 1, caption: 'Body is big cloth; cloth can be thin or thick.' },
    { partIds: ['top', 'rod', 'rings'], sentenceRef: 3, caption: 'Top joins rod; rings let it move.' },
    { partIds: ['bottom-part'], sentenceRef: 5, caption: 'Bottom part is heavier so it hangs straight.' },
  ],
  keyExpressions: [
    { text: 'window cover', partId: 'body' },
    { text: 'rod', partId: 'rod' },
    { text: 'rings', partId: 'rings' },
    { text: 'cloth', partId: 'cloth' },
  ],
  color: '#8FBC8F',
}