import type { ThingData } from '../types';

export const spaceLaserCommunicator: ThingData = {
  id: 'space-laser-communicator',
  slug: 'space-laser-communicator',
  simpleName: 'The Light Talk Thing',
  realName: 'Laser Communicator',
  category: 'space',
  color: '#FF4500',
  funFacts: [
    'Light can carry more words and pictures than radio waves can.',
    'This box sends that light out through a very thin beam.',
    'The beam can go very far because space has no air in it.',
    'Two ships can talk this way when radio waves do not work well.',
    'The beam must point just right, or the light will miss the other ship.',
    'These boxes are used on ships that go far from the world.'
  ],
  parts: [
    { id: 'box', label: 'Main Box', realName: 'Main Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'pipe', label: 'Long Pipe', realName: 'Guide Tube', position: [0, 0, 0.2], finish: 'hull' },
    { id: 'lens', label: 'Light Lens', realName: 'Lens Assembly', position: [0, 0, 0.36], finish: 'titanium' },
    { id: 'glass', label: 'Front Glass', realName: 'Window Glass', position: [0, 0, 0.4], finish: 'cold' },
    { id: 'beam', label: 'Light Beam', realName: 'Laser Beam', position: [0, 0, 0.68], finish: 'warning' },
    { id: 'wire', label: 'Power Line', realName: 'Power Cable', position: [0, -0.16, -0.12], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This box talks to far ships and space stations with light.'],
        ['The ', { text: 'main box', part: 'box' }, ' holds all the parts and keeps them safe.'],
        ['The ', { text: 'long pipe', part: 'pipe' }, ' points the light at the ship far away.'],
        ['The ', { text: 'lens', part: 'lens' }, ' makes the light go straight and thin.'],
        ['The ', { text: 'front glass', part: 'glass' }, ' keeps dust and cold air out of the box.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'light beam', part: 'beam' }, ' is very thin and can go very far.'],
        ['The ', { text: 'power line', part: 'wire' }, ' brings power from the ship to this box.'],
        ['When two of these boxes point at each other, they can talk with light.'],
        ['Light can carry many words and pictures in a very short time.'],
        ['The light does not get lost in space like radio sound does.'],
        ['This box lets ships talk even when they are very far from the world.']
      ]
    }
  ],
  flow: [
    { partIds: ['pipe'], caption: 'The long pipe points the light far away', sentenceRef: 2 },
    { partIds: ['lens', 'glass'], caption: 'The lens and the glass shape the light', sentenceRef: 3 },
    { partIds: ['beam'], caption: 'The light beam carries words and pictures', sentenceRef: 5 },
    { partIds: ['wire'], caption: 'The power line brings power into the box', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'laser light', partId: 'beam' },
    { text: 'lens assembly', partId: 'lens' },
    { text: 'guide tube', partId: 'pipe' },
    { text: 'power cable', partId: 'wire' }
  ]
};
