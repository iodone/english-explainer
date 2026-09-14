import type { ThingData } from '../types'

export const dishWasher: ThingData = {
  id: 'dish-washer',
  slug: 'dish-washer',
  simpleName: 'The Dish Washer',
  realName: 'Dishwasher',
  category: 'home',
  funFacts: [
    'A dish washer can clean all the things you eat from in about one hour.',
    'The first dish washers were made about 100 years ago.',
    'A dish washer uses much less water than washing by hand.',
  ],
  parts: [
    { id: 'box-body', label: 'box body', realName: 'Tub', position: [0, 0, 0], finish: 'hull' },
    { id: 'door', label: 'door', realName: 'Door', position: [0, -0.18, 0.14], finish: 'hull' },
    { id: 'top-spin', label: 'top spin', realName: 'Upper spray arm', position: [0, 0.08, 0], finish: 'cold' },
    { id: 'bottom-spin', label: 'bottom spin', realName: 'Lower spray arm', position: [0, -0.08, 0], finish: 'cold' },
    { id: 'water-box', label: 'water box', realName: 'Reservoir', position: [0, -0.14, 0], finish: 'titanium' },
    { id: 'dirty-water-pipe', label: 'dirty water pipe', realName: 'Drain hose', position: [0, -0.10, -0.12], finish: 'cold' },
    { id: 'button', label: 'button', realName: 'Control panel', position: [0, 0.14, 0.14], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'dish washer', dict: 'dish-washer' },
          '. It cleans all the things you eat from so you do not have to.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'box body', part: 'box-body' },
          ' is the big box where you put all the dirty things.',
        ],
        [
          'You open the ',
          { text: 'door', part: 'door' },
          ' at the front to put things in and take them out.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside, the ',
          { text: 'top spin', part: 'top-spin' },
          ' and the ',
          { text: 'bottom spin', part: 'bottom-spin' },
          ' shoot water at the things to clean them.',
        ],
        ['The spins go round and round so water hits everything.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'water box', part: 'water-box' },
          ' at the bottom holds the water and makes it very hot.',
        ],
        ['Hot water cleans much better than cold water.'],
      ],
    },
    {
      sentences: [
        [
          'When it is done, the dirty water goes out through the ',
          { text: 'dirty water pipe', part: 'dirty-water-pipe' },
          ' at the back.',
        ],
        ['Then the dish washer blows hot air on the things to dry them.'],
      ],
    },
    {
      sentences: [
        [
          'You press the ',
          { text: 'button', part: 'button' },
          ' on the front to start the dish washer.',
        ],
        ['Then you can do other things while it cleans for you.'],
      ],
    },
  ],
  flow: [
    { partIds: ['box-body', 'door'], sentenceRef: 1, caption: 'The box body holds dirty things; door opens to put them in.' },
    { partIds: ['top-spin', 'bottom-spin'], sentenceRef: 4, caption: 'The spins shoot water at things to clean them.' },
    { partIds: ['water-box'], sentenceRef: 6, caption: 'Water box holds and heats water.' },
    { partIds: ['dirty-water-pipe'], sentenceRef: 8, caption: 'Dirty water goes out through the pipe.' },
    { partIds: ['button'], sentenceRef: 10, caption: 'Press the button to start it.' },
  ],
  keyExpressions: [
    { text: 'dish washer', partId: 'box-body' },
    { text: 'cleans all the things you eat from', partId: 'bottom-spin' },
    { text: 'put all the dirty things', partId: 'box-body' },
    { text: 'shoot water at the things to clean them', partId: 'top-spin' },
    { text: 'makes it very hot', partId: 'water-box' },
    { text: 'dirty water goes out through', partId: 'dirty-water-pipe' },
    { text: 'press the button to start', partId: 'button' },
  ],
  color: '#F0F8FF',
}