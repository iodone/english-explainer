import type { ThingData } from '../types';

export const homeRollingPin: ThingData = {
  id: 'home-rolling-pin',
  slug: 'home-rolling-pin',
  simpleName: 'The Flat Stick',
  realName: 'Rolling Pin',
  category: 'home',
  color: '#DEB887',
  funFacts: [
    'This thing makes bread stuff flat so you can make food like bread.',
    'You put it on bread stuff and push down while moving it back and forth.',
    'Some of these have handles on the sides and some do not.',
    'It was used a long time ago and is still used in every home.',
    'The best ones are made of wood because wood does not stick to bread stuff.',
    'You can also use it to break things like ice or hard food.'
  ],
  parts: [
    { id: 'body', label: 'Long Body', realName: 'Roller Barrel', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Handle One', realName: 'Left Handle', position: [0, 0, -0.25], finish: 'cold' },
    { id: 'top', label: 'Handle Two', realName: 'Right Handle', position: [0, 0, 0.25], finish: 'cold' },
    { id: 'inside', label: 'Middle Part', realName: 'Bearing Core', position: [0, 0, 0], finish: 'warning' },
    { id: 'face', label: 'Flat Side', realName: 'Rolling Surface', position: [0, 0.06, 0], finish: 'titanium' },
    { id: 'ring', label: 'Ring Part', realName: 'Handle Collar', position: [0, 0, -0.18], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that makes bread stuff flat for making food.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long round part that goes over the bread stuff.'],
        ['The ', { text: 'end', part: 'end' }, ' is the first handle on one side.'],
        ['The ', { text: 'top', part: 'top' }, ' is the second handle on the other side.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the part in the middle that lets the body turn.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'face', part: 'face' }, ' is the flat part that sits on the bread stuff.'],
        ['The ', { text: 'ring', part: 'ring' }, ' is a small ring that stops the handle from going too far.'],
        ['You hold the ', { text: 'end', part: 'end' }, ' and ', { text: 'top', part: 'top' }, ' and move it back and forth.'],
        ['The ', { text: 'face', part: 'face' }, ' pushes the bread stuff out flat.'],
        ['The ', { text: 'inside', part: 'inside' }, ' lets the body turn so it is easy to move.'],
        ['When done, the bread stuff is flat and ready to be made into food.']
      ]
    }
  ],
  flow: [
    { partIds: ['end', 'top'], caption: 'You hold both handles', sentenceRef: 7 },
    { partIds: ['body', 'face'], caption: 'The flat part goes over the bread stuff', sentenceRef: 8 },
    { partIds: ['inside'], caption: 'The middle part lets it turn easy', sentenceRef: 9 },
    { partIds: ['ring'], caption: 'The ring stops the handle from going too far', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'rolling pin', partId: 'body' },
    { text: 'roller barrel', partId: 'body' },
    { text: 'rolling surface', partId: 'face' },
    { text: 'bearing core', partId: 'inside' }
  ]
};
