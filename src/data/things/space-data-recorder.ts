import type { ThingData } from '../types';

export const spaceDataRecorder: ThingData = {
  id: 'space-data-recorder',
  slug: 'space-data-recorder',
  simpleName: 'The Flight Keeper',
  realName: 'Data Recorder',
  category: 'space',
  color: '#8D6E63',
  funFacts: [
    'This box saves the story of a flight for people to read later.',
    'The case can take a hard hit and still work.',
    'It can also take a very hot fire for a short time.',
    'People can read the numbers many years later.',
    'It sits in the back of the ship, where it is safest.',
    'People use what they learn to make the next flight safer.'
  ],
  parts: [
    { id: 'case', label: 'Outer Case', realName: 'Crash Case', position: [0, 0, 0], finish: 'titanium' },
    { id: 'chip', label: 'Memory Chip', realName: 'Memory Chip', position: [0, 0, 0], finish: 'hull' },
    { id: 'link', label: 'Sensor Link', realName: 'Sensor Link', position: [-0.14, 0.1, 0], finish: 'cold' },
    { id: 'light', label: 'Power Light', realName: 'Power Light', position: [0.14, 0.1, 0], finish: 'warning' },
    { id: 'seal', label: 'Fire Seal', realName: 'Heat Seal', position: [0, 0.14, 0], finish: 'hull' },
    { id: 'plug', label: 'Data Plug', realName: 'Data Plug', position: [0.2, -0.08, 0], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This box saves the story of a flight for people to read later.'],
        ['The ', { text: 'outer case', part: 'case' }, ' is the hard shell that keeps the parts safe.'],
        ['The ', { text: 'memory chip', part: 'chip' }, ' is the part that keeps the numbers.'],
        ['The ', { text: 'sensor link', part: 'link' }, ' brings in the speed, the heat, and the place.'],
        ['The ', { text: 'power light', part: 'light' }, ' shows that the box is on.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'fire seal', part: 'seal' }, ' keeps the heat out of the case.'],
        ['The ', { text: 'data plug', part: 'plug' }, ' lets people take the numbers out.'],
        ['When the flight is over, people read all of the numbers.'],
        ['The case can take a hard hit and still work.'],
        ['It can also take a very hot fire for a short time.'],
        ['That is why people call it the box that tells the story.']
      ]
    }
  ],
  flow: [
    { partIds: ['case'], caption: 'The outer case keeps the parts safe', sentenceRef: 1 },
    { partIds: ['chip'], caption: 'The memory chip keeps the numbers', sentenceRef: 2 },
    { partIds: ['link'], caption: 'The sensor link brings in the speed, the heat, and the place', sentenceRef: 3 },
    { partIds: ['plug'], caption: 'The data plug lets people take the numbers out', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'outer case', partId: 'case' },
    { text: 'memory chip', partId: 'chip' },
    { text: 'sensor link', partId: 'link' },
    { text: 'data plug', partId: 'plug' }
  ]
};
