import type { ThingData } from '../types'

export const homeBroom: ThingData = {
  id: 'home-broom',
  slug: 'home-broom',
  simpleName: 'The Floor Sweeper',
  realName: 'Home broom',
  category: 'home',
  funFacts: [
    'It is one of the oldest tools in the world and has been used for a very long time.',
    'Some of them are made from the parts of plants that grow near water.',
    'It is good to use it every day to keep your floor clean.',
    'You should stand up straight when you use it so your back does not get tired.',
    'Some people use it to clean the outside of their house too.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Broom handle', position: [0, 0.1, 0], finish: 'hull' },
    { id: 'brush', label: 'brush', realName: 'Bristles', position: [0, -0.02, 0], finish: 'warning' },
    { id: 'end', label: 'end', realName: 'Handle end', position: [0, 0.2, 0], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Grip wrap', position: [0, 0.15, 0], finish: 'titanium' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Broom head', position: [0, 0, 0], finish: 'hull' },
    { id: 'bristles', label: 'bristles', realName: 'Individual bristles', position: [0.05, -0.03, 0.05], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'floor sweeper', dict: 'home-broom' }, '. It cleans the floor by pushing dirt to one place so you can pick it up.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long part you hold. It is usually made of wood or something like it.'],
        ['The ', { text: 'brush', part: 'brush' }, ' is at the bottom. It is made of many small hard things that touch the floor and move the dirt.'],
        ['The ', { text: 'end', part: 'end' }, ' is at the top of the body. Some people hold it here for more power when they need to push hard.'],
        ['The ', { text: 'hold part', part: 'hold-part' }, ' is in the middle of the body. Most people hold it here when they are cleaning.'],
        ['The ', { text: 'bottom part', part: 'bottom-part' }, ' is the part that holds all the bristles together. It joins the brush to the body.'],
        ['The ', { text: 'bristles', part: 'bristles' }, ' are the small hard things in the brush. They are what actually move the dirt on the floor.'],
      ],
    },
    {
      sentences: [
        ['To use it, you hold the body with both hands.'],
        ['Then you move it from side to side and the dirt starts to move.'],
        ['You push the dirt to one place and then pick it up with your hands or another thing.'],
        ['It is a very simple thing but it works very well to keep your floor clean.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'hold-part'], sentenceRef: 1, caption: 'Body is long; hold part is for your hands.' },
    { partIds: ['brush', 'bristles'], sentenceRef: 2, caption: 'Brush has bristles that move dirt.' },
    { partIds: ['bottom-part'], sentenceRef: 4, caption: 'Bottom part holds bristles together.' },
    { partIds: ['end'], sentenceRef: 3, caption: 'End is for pushing hard.' },
  ],
  keyExpressions: [
    { text: 'floor sweeper', partId: 'body' },
    { text: 'brush', partId: 'brush' },
    { text: 'bristles', partId: 'bristles' },
    { text: 'hold part', partId: 'hold-part' },
  ],
  color: '#D2B48C',
}