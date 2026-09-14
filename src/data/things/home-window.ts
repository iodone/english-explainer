import type { ThingData } from '../types'

export const homeWindow: ThingData = {
  id: 'home-window',
  slug: 'home-window',
  simpleName: 'The Window',
  realName: 'Home window',
  category: 'home',
  funFacts: [
    'It is made of a special stuff called glass that you can see through but the wind can not get through.',
    'They have been used for a very long time to let light into houses and to see what is outside.',
    'Some of them can be opened to let fresh air in and some are shut all the time.',
    'They come in many different shapes like long and tall or wide and flat or even round.',
    'They keep the rain and the wind out but let the light in so the house is bright and nice.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Frame', position: [0, 0, 0], finish: 'hull' },
    { id: 'top', label: 'top', realName: 'Top sash', position: [0, 0.12, 0], finish: 'cold' },
    { id: 'glass', label: 'glass', realName: 'Glass pane', position: [0, 0, 0.04], finish: 'titanium' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Bottom sash', position: [0, -0.12, 0], finish: 'cold' },
    { id: 'lock', label: 'lock', realName: 'Latch', position: [0.12, 0, 0.04], finish: 'warning' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [-0.12, 0, 0.04], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'window', dict: 'home-window' }, '. It is a flat thing in a wall that lets you see outside and lets light come in.'],
        ['The ', { text: 'body', part: 'body' }, ' is the part that holds the glass in place. It is made of wood or metal and is put into the wall.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part at the very top of the body. It can move up and down in some kinds of windows.'],
        ['The ', { text: 'glass', part: 'glass' }, ' is the flat clear thing in the middle. You can see through it but the wind and rain can not get through.'],
        ['The ', { text: 'bottom part', part: 'bottom-part' }, ' is the part at the very bottom of the body. It can move up and down too in some kinds of windows.'],
        ['The ', { text: 'lock', part: 'lock' }, ' is the thing that keeps the body shut so no one can open it from outside. It keeps the house safe.'],
        ['The ', { text: 'handle', part: 'handle' }, ' is the part you hold to open and close the body. You turn it and the body moves so you can let air in.'],
      ],
    },
    {
      sentences: [
        ['When you want to see outside, you just look through the glass.'],
        ['The light comes through the glass and makes the room bright and nice.'],
        ['If you want to let air in, you turn the handle and open the body.'],
        ['Now the fresh air comes in and the room feels nice and cool.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'top', 'bottom-part'], sentenceRef: 0, caption: 'Body holds glass; top and bottom part can move.' },
    { partIds: ['glass'], sentenceRef: 1, caption: 'Glass lets light in and keeps wind out.' },
    { partIds: ['lock', 'handle'], sentenceRef: 5, caption: 'Lock keeps it shut; handle lets you open it.' },
  ],
  keyExpressions: [
    { text: 'window', partId: 'body' },
    { text: 'glass', partId: 'glass' },
    { text: 'lock', partId: 'lock' },
    { text: 'handle', partId: 'handle' },
  ],
  color: '#B0C4DE',
}