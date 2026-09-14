import type { ThingData } from '../types';

export const homeSink: ThingData = {
  id: 'home-sink',
  slug: 'home-sink',
  simpleName: 'The Water Bowl',
  realName: 'Sink',
  category: 'home',
  color: '#F5F5F5',
  funFacts: [
    'This thing is in every house where people live.',
    'You use it to wash your hands and food.',
    'The dirty water goes down a hole in the bottom.',
    'Most of them are made from a white stone.',
    'Some of them have two places for water to come out.',
    'You can wash your clothes in a big one.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'basin', position: [0, 0, 0], finish: 'titanium' },
    { id: 'top', label: 'top', realName: 'faucet pipe', position: [0, 0.175, 0], finish: 'cold' },
    { id: 'pipe', label: 'pipe', realName: 'drain pipe', position: [0, -0.25, 0], finish: 'hull' },
    { id: 'handle', label: 'handle', realName: 'handle', position: [-0.24, 0.1, 0], finish: 'cold' },
    { id: 'drain', label: 'drain', realName: 'drain', position: [0, -0.125, 0], finish: 'hull' },
    { id: 'hole', label: 'hole', realName: 'overflow', position: [0.24, 0, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing you use to wash things.'],
        ['It is a ', { text: 'bowl', part: 'body', dict: 'basin' }, ' that holds water.'],
        ['You turn a ', { text: 'handle', part: 'handle', dict: 'faucet' }, ' and water comes out.'],
        ['The water goes away when you are done through the ', { text: 'drain', part: 'drain' }, '.']
      ]
    },
    {
      sentences: [
        ['When you want to wash your hands, you use this thing.'],
        ['You turn the ', { text: 'handle', part: 'handle' }, ' and water comes out of the ', { text: 'top', part: 'top' }, ' part.'],
        ['You put your hands under the water in the ', { text: 'body', part: 'body' }, '.'],
        ['The water cleans your hands.'],
        ['Then the dirty water goes down the ', { text: 'drain', part: 'drain' }, '.'],
        ['It goes through a ', { text: 'pipe', part: 'pipe' }, ' and leaves your house.'],
        ['The ', { text: 'hole', part: 'hole' }, ' stops water from going too high.']
      ]
    }
  ],
  flow: [
    { partIds: ['handle'], caption: 'You turn the handle', sentenceRef: 1 },
    { partIds: ['top', 'body'], caption: 'Water comes out and fills the bowl', sentenceRef: 2 },
    { partIds: ['drain'], caption: 'The dirty water goes down the drain', sentenceRef: 4 },
    { partIds: ['pipe'], caption: 'The water goes through the pipe and leaves', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'faucet', partId: 'handle' },
    { text: 'drain', partId: 'drain' },
    { text: 'pipe', partId: 'pipe' },
    { text: 'basin', partId: 'body' }
  ]
};