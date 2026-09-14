import type { ThingData } from '../types'

export const toothBrush: ThingData = {
  id: 'tooth-brush',
  slug: 'tooth-brush',
  simpleName: 'The Mouth Cleaner',
  realName: 'Toothbrush',
  category: 'home',
  funFacts: [
    'You should use it two times every day to keep your teeth clean.',
    'The first ones were made from animal hair a very long time ago.',
    'Some of them can make many, many tiny moves every minute.',
    'You should get a new one every three months or so.',
    'It helps stop bad things from growing inside your mouth.',
  ],
  parts: [
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0, 0, 0], finish: 'hull' },
    { id: 'head', label: 'head', realName: 'Brush head', position: [0, 0.22, 0], finish: 'cold' },
    { id: 'hairs', label: 'hairs', realName: 'Bristles', position: [0, 0.26, 0], finish: 'titanium' },
    { id: 'grip', label: 'grip', realName: 'Grip area', position: [0, -0.08, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'mouth cleaner', dict: 'tooth-brush' }, '. You use it every day to keep your teeth clean.'],
        ['The ', { text: 'handle', part: 'handle' }, ' is the long part you hold. It is made to fit nicely in your hand so it does not fall.'],
        ['The ', { text: 'head', part: 'head' }, ' is at the top. It holds all the tiny hairs that do the cleaning work.'],
        ['The ', { text: 'hairs', part: 'hairs' }, ' are very small and soft. They move back and forth across your teeth to clean them.'],
        ['The ', { text: 'grip', part: 'grip' }, ' is a special part that helps you hold it better. It does not slip when your hands are wet.'],
      ],
    },
    {
      sentences: [
        ['When you use it, you put a little bit of cleaning stuff on the hairs.'],
        ['Then you move it back and forth over all your teeth.'],
        ['The tiny hairs get into all the small spaces between your teeth.'],
        ['This stops bad things from growing and keeps your mouth feeling clean and good.'],
      ],
    },
  ],
  flow: [
    { partIds: ['handle'], sentenceRef: 1, caption: 'The handle is the long part you hold.' },
    { partIds: ['head', 'hairs'], sentenceRef: 2, caption: 'The head holds tiny hairs that clean.' },
    { partIds: ['grip'], sentenceRef: 3, caption: 'The grip helps you hold it when wet.' },
  ],
  keyExpressions: [
    { text: 'mouth cleaner', partId: 'head' },
    { text: 'handle', partId: 'handle' },
    { text: 'hairs', partId: 'hairs' },
  ],
  color: '#87CEEB',
}