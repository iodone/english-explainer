import type { ThingData } from '../types';

export const powerOscillator: ThingData = {
  id: 'power-oscillator',
  slug: 'power-oscillator',
  simpleName: 'The Back-and-Forth Power Maker',
  realName: 'Oscillator',
  category: 'power',
  color: '#2F4F4F',
  funFacts: [
    'This is a thing that makes power go back and forth very fast.',
    'It does this over and over, many times in one second.',
    'You can find it in things that make sound or light.',
    'Some of them use a thing that shakes to keep the speed right.',
    'It is used in almost every thing that sends information.',
    'Without it, phones and computers would not work.'
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'output', position: [0, 0.1, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'crystal', position: [0, 0, 0], finish: 'titanium' },
    { id: 'inside', label: 'inside', realName: 'resonator', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'plug', realName: 'pin', position: [0, -0.1, 0], finish: 'titanium' },
    { id: 'power', label: 'power', realName: 'driver', position: [0, 0, 0.08], finish: 'warning' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that makes power go back and forth very fast.'],
        ['It does this over and over, many times in one second.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the parts inside.'],
        ['The ', { text: 'top', part: 'top' }, ' inside shakes at just the right speed.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'inside', part: 'inside' }, ' is what makes the power go back and forth.'],
        ['The ', { text: 'power', part: 'power' }, ' keeps the ', { text: 'inside', part: 'inside' }, ' going.'],
        ['The back-and-forth power comes out of the ', { text: 'end', part: 'end' }, '.'],
        ['The ', { text: 'plug', part: 'plug' }, ' joins it to the thing that needs the power.'],
        ['You can find it in things that make sound or light.'],
        ['It is used in almost every thing that sends information.'],
        ['Without it, phones and computers would not work.']
      ]
    }
  ],
  flow: [
    { partIds: ['top', 'inside'], caption: 'The crystal shakes at the right speed', sentenceRef: 3 },
    { partIds: ['power'], caption: 'The driver keeps it going', sentenceRef: 5 },
    { partIds: ['end'], caption: 'Back-and-forth power comes out', sentenceRef: 6 },
    { partIds: ['plug', 'body'], caption: 'The pin joins it to the rest', sentenceRef: 7 }
  ],
  keyExpressions: [
    { text: 'oscillator', partId: 'body' },
    { text: 'crystal', partId: 'top' },
    { text: 'resonator', partId: 'inside' },
    { text: 'driver', partId: 'power' }
  ]
};