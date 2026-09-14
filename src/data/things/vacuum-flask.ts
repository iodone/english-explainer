import type { ThingData } from '../types'

export const vacuumFlask: ThingData = {
  id: 'vacuum-flask',
  slug: 'vacuum-flask',
  simpleName: 'The Hot Cold Box',
  realName: 'Vacuum flask',
  category: 'home',
  funFacts: [
    'A hot cold box can keep water hot for over 12 hours.',
    'The space between the two walls has no air in it — this is what keeps the heat from getting out.',
    'The first hot cold box was made over 100 years ago by a man who wanted to keep his water cold.',
  ],
  parts: [
    { id: 'outer-wall', label: 'outer wall', realName: 'Outer shell', position: [0, 0, 0], finish: 'hull' },
    { id: 'inner-wall', label: 'inner wall', realName: 'Inner flask', position: [0, 0, 0], finish: 'titanium' },
    { id: 'space-between', label: 'space between', realName: 'Vacuum layer', position: [0, 0, 0], finish: 'cold' },
    { id: 'top-cover', label: 'top cover', realName: 'Stopper', position: [0, 0.22, 0], finish: 'warning' },
    { id: 'cup', label: 'cup', realName: 'Cup', position: [0, 0.28, 0], finish: 'cold' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Base', position: [0, -0.22, 0], finish: 'hull' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0.18, 0.08, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'hot cold box', dict: 'vacuum-flask' },
          '. It keeps hot things hot and cold things cold for a long, long time.',
        ],
      ],
    },
    {
      sentences: [
        [
          'It has two walls — an ',
          { text: 'outer wall', part: 'outer-wall' },
          ' and an ',
          { text: 'inner wall', part: 'inner-wall' },
          '.',
        ],
        ['The inner wall holds the water or other things you want to keep hot or cold.'],
      ],
    },
    {
      sentences: [
        [
          'Between the two walls is a ',
          { text: 'space between', part: 'space-between' },
          ' that has no air in it.',
        ],
        ['This is the most important part — heat can not get through a space with no air.'],
      ],
    },
    {
      sentences: [
        [
          'At the top, the ',
          { text: 'top cover', part: 'top-cover' },
          ' closes the box closed so no heat can get out from the top.',
        ],
        [
          'Some hot cold boxes come with a ',
          { text: 'cup', part: 'cup' },
          ' on top that you can use to drink from.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'bottom part', part: 'bottom-part' },
          ' at the bottom keeps the box standing up straight.',
        ],
        [
          'A ',
          { text: 'handle', part: 'handle' },
          ' on the side makes it easy to carry the box around.',
        ],
      ],
    },
    {
      sentences: [
        ['To use it, you put hot or cold things inside and close the top cover closed.'],
        ['The heat stays inside for many hours because it can not get through the space with no air.'],
        ['This is why your water stays hot even after a very long time.'],
      ],
    },
  ],
  flow: [
    { partIds: ['outer-wall', 'inner-wall'], sentenceRef: 1, caption: 'Two walls hold the water inside.' },
    { partIds: ['space-between'], sentenceRef: 3, caption: 'The space between has no air — heat can not get through.' },
    { partIds: ['top-cover', 'cup'], sentenceRef: 5, caption: 'The top cover closes closed; a cup sits on top.' },
    { partIds: ['bottom-part', 'handle'], sentenceRef: 7, caption: 'The bottom part keeps it standing; the handle makes it easy to carry.' },
    { partIds: ['space-between', 'top-cover'], sentenceRef: 9, caption: 'Heat stays inside for many hours.' },
  ],
  keyExpressions: [
    { text: 'hot cold box', partId: 'inner-wall' },
    { text: 'keeps hot things hot and cold things cold', partId: 'inner-wall' },
    { text: 'two walls — an outer wall and an inner wall', partId: 'outer-wall' },
    { text: 'space between that has no air in it', partId: 'space-between' },
    { text: 'heat can not get through', partId: 'space-between' },
    { text: 'closes the box closed', partId: 'top-cover' },
    { text: 'easy to carry the box around', partId: 'handle' },
  ],
  color: '#FFDAB9',
}