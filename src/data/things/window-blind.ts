import type { ThingData } from '../types'

export const windowBlind: ThingData = {
  id: 'window-blind',
  slug: 'window-blind',
  simpleName: 'The Window Cover',
  realName: 'Window blind',
  category: 'home',
  funFacts: [
    'A window cover can stop light from coming in or let just a little bit in.',
    'The first window covers were just pieces of cloth hung over the window.',
    'Some window covers can go up and down by themselves when you push a button.',
  ],
  parts: [
    { id: 'top-bar', label: 'top bar', realName: 'Headrail', position: [0, 0.16, 0], finish: 'hull' },
    { id: 'flat-piece', label: 'flat piece', realName: 'Slat', position: [0, 0.04, 0], finish: 'cold' },
    { id: 'side-string', label: 'side string', realName: 'Ladder cord', position: [0.12, 0, 0], finish: 'cold' },
    { id: 'pull-string', label: 'pull string', realName: 'Lift cord', position: [0.14, -0.08, 0], finish: 'titanium' },
    { id: 'turn-stick', label: 'turn stick', realName: 'Wand', position: [0.16, 0.08, 0], finish: 'titanium' },
    { id: 'bottom-bar', label: 'bottom bar', realName: 'Bottom rail', position: [0, -0.16, 0], finish: 'hull' },
    { id: 'hold-part', label: 'hold part', realName: 'Bracket', position: [-0.14, 0.16, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'window cover', dict: 'window-blind' },
          '. It goes over the window to stop light from coming in.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'top bar', part: 'top-bar' },
          ' at the top holds the window cover to the wall above the window.',
        ],
        [
          'Many ',
          { text: 'flat pieces', part: 'flat-piece' },
          ' hang down from the top bar one under the other.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'side string', part: 'side-string' },
          ' on the side holds all the flat pieces in a line.',
        ],
        [
          'When you pull the ',
          { text: 'pull string', part: 'pull-string' },
          ', the flat pieces go up and the window opens.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'turn stick', part: 'turn-stick' },
          ' on the side lets you turn the flat pieces to let just a little light in.',
        ],
        ['Turn them one way and the light comes in; turn them the other way and it does not.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'bottom bar', part: 'bottom-bar' },
          ' at the bottom holds all the flat pieces in place at the bottom.',
        ],
        ['It also helps the window cover hang straight.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' on each side holds the top bar to the wall.',
        ],
        ['Window covers are a simple way to control how much light comes in.'],
      ],
    },
  ],
  flow: [
    { partIds: ['top-bar', 'flat-piece'], sentenceRef: 1, caption: 'Top bar holds it up; flat pieces hang down.' },
    { partIds: ['side-string', 'pull-string'], sentenceRef: 4, caption: 'Side string holds pieces; pull string makes them go up.' },
    { partIds: ['turn-stick'], sentenceRef: 6, caption: 'Turn stick turns pieces to let light in.' },
    { partIds: ['bottom-bar'], sentenceRef: 8, caption: 'Bottom bar holds pieces in place at the bottom.' },
    { partIds: ['hold-part'], sentenceRef: 10, caption: 'Hold part keeps top bar on the wall.' },
  ],
  keyExpressions: [
    { text: 'window cover', partId: 'flat-piece' },
    { text: 'stops light from coming in', partId: 'flat-piece' },
    { text: 'holds the window cover to the wall', partId: 'top-bar' },
    { text: 'hang down from the top bar', partId: 'flat-piece' },
    { text: 'pull the pull string', partId: 'pull-string' },
    { text: 'turn the flat pieces to let light in', partId: 'turn-stick' },
    { text: 'control how much light comes in', partId: 'turn-stick' },
  ],
  color: '#F5F5DC',
}