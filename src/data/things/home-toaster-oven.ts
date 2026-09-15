import type { ThingData } from '../types';

export const homeToasterOven: ThingData = {
  id: 'home-toaster-oven',
  slug: 'home-toaster-oven',
  simpleName: 'The Small Oven',
  realName: 'Toaster Oven',
  category: 'home',
  color: '#A8AEB6',
  funFacts: [
    'This box heats up much faster than a big oven.',
    'The glass in the door lets you watch the food without opening it.',
    'The hot rods turn red when the box is at the right heat.',
    'A big piece of food will not fit in this small box.',
    'The tray slides out, so you can take the food out with one hand.',
    'Never put metal or paper inside, because it can catch fire.'
  ],
  parts: [
    { id: 'door', label: 'Glass Door', realName: 'Door', position: [0, 0, 0.3], finish: 'hull' },
    { id: 'tray', label: 'Pull Tray', realName: 'Tray', position: [0, -0.2, 0.05], finish: 'cold' },
    { id: 'rod', label: 'Hot Rod', realName: 'Heating Rod', position: [0, -0.1, -0.1], finish: 'warning' },
    { id: 'dial', label: 'Time Dial', realName: 'Dial', position: [0.4, 0.3, 0.2], finish: 'titanium' },
    { id: 'body', label: 'Box', realName: 'Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'handle', label: 'Door Handle', realName: 'Handle', position: [0.3, 0.15, 0.35], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This small box cooks food with hot rods inside.'],
        ['The ', { text: 'box', part: 'body' }, ' holds the heat and keeps it in.'],
        ['The ', { text: 'glass door', part: 'door' }, ' lets you look at the food while it cooks.'],
        ['The ', { text: 'door handle', part: 'handle' }, ' stays cool so you can pull the door open.'],
        ['The ', { text: 'pull tray', part: 'tray' }, ' slides out and holds the food.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'hot rod', part: 'rod' }, ' makes the heat and turns red.'],
        ['The ', { text: 'time dial', part: 'dial' }, ' rings when the time is up.'],
        ['You set the time and the heat and then close the door.'],
        ['The food cooks on all sides, and you do not have to turn it.'],
        ['This box is smaller than a big oven, so it heats up fast.'],
        ['You can make toast or warm up food in it.']
      ]
    }
  ],
  flow: [
    { partIds: ['door'], caption: 'The glass door lets you look at the food while it cooks', sentenceRef: 2 },
    { partIds: ['handle'], caption: 'The door handle stays cool so you can pull the door open', sentenceRef: 3 },
    { partIds: ['tray'], caption: 'The pull tray slides out and holds the food', sentenceRef: 4 },
    { partIds: ['rod'], caption: 'The hot rod makes the heat and turns red', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'glass door', partId: 'door' },
    { text: 'pull tray', partId: 'tray' },
    { text: 'hot rod', partId: 'rod' },
    { text: 'time dial', partId: 'dial' }
  ]
};
