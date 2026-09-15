import type { ThingData } from '../types';

export const homeBreadToaster: ThingData = {
  id: 'home-bread-toaster',
  slug: 'home-bread-toaster',
  simpleName: 'The Bread Browning Box',
  realName: 'Toaster',
  category: 'home',
  color: '#BFB8AE',
  funFacts: [
    'This box uses hot wires to make bread brown and warm.',
    'The hot wires warm the bread on both sides at once.',
    'You put the bread in the opening and push the lever down.',
    'When the time is done, the bread comes back up.',
    'The crumb tray catches the small bits that fall.',
    'The wires get very hot, so you must not touch them.'
  ],
  parts: [
    { id: 'case', label: 'Main Case', realName: 'Case', position: [0, 0, 0], finish: 'hull' },
    { id: 'opening', label: 'Bread Opening', realName: 'Slot', position: [0, 0.18, 0], finish: 'hull' },
    { id: 'wire', label: 'Hot Wire', realName: 'Heating Wire', position: [0, 0, 0], finish: 'cold' },
    { id: 'lever', label: 'Down Lever', realName: 'Lever', position: [0.22, 0.1, 0], finish: 'titanium' },
    { id: 'timer', label: 'Time Dial', realName: 'Timer', position: [-0.2, 0.16, 0], finish: 'warning' },
    { id: 'tray', label: 'Crumb Tray', realName: 'Tray', position: [0, -0.2, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This box uses hot wires to make bread brown and warm.'],
        ['The ', { text: 'main case', part: 'case' }, ' is the box that holds the parts.'],
        ['The ', { text: 'bread opening', part: 'opening' }, ' is the hole where you put the bread in.'],
        ['The ', { text: 'hot wire', part: 'wire' }, ' gets very hot and browns the bread.'],
        ['The ', { text: 'down lever', part: 'lever' }, ' takes the bread down inside the box.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'time dial', part: 'timer' }, ' sets how long the bread stays in.'],
        ['The ', { text: 'crumb tray', part: 'tray' }, ' catches the small bits that fall.'],
        ['You put the bread in the opening and push the lever down.'],
        ['The hot wires warm the bread on both sides at once.'],
        ['When the time is done, the bread comes back up.'],
        ['You take it out and eat it warm.']
      ]
    }
  ],
  flow: [
    { partIds: ['opening'], caption: 'The bread opening is the hole where you put the bread in', sentenceRef: 2 },
    { partIds: ['wire'], caption: 'The hot wire gets very hot and browns the bread', sentenceRef: 3 },
    { partIds: ['lever'], caption: 'The down lever takes the bread down inside the box', sentenceRef: 4 },
    { partIds: ['timer'], caption: 'The time dial sets how long the bread stays in', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'bread opening', partId: 'opening' },
    { text: 'hot wire', partId: 'wire' },
    { text: 'down lever', partId: 'lever' },
    { text: 'crumb tray', partId: 'tray' }
  ]
};
