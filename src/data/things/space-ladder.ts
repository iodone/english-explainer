import type { ThingData } from '../types'

export const spaceLadder: ThingData = {
  id: 'space-ladder',
  slug: 'space-ladder',
  simpleName: 'The Up-Down Thing',
  realName: 'Space ladder',
  category: 'space',
  funFacts: [
    'In the sky, there is no up or down, so ladders work very differently.',
    'People hold on to them so they do not float away while working.',
    'They are put inside big flying things to help people move from room to room.',
    'Some of them have things that hold your feet so you can use your hands.',
    'Without them, people would have to push off walls to get around.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Ladder frame', position: [0, 0, 0], finish: 'hull' },
    { id: 'steps', label: 'steps', realName: 'Rungs', position: [0, 0, 0.04], finish: 'cold' },
    { id: 'hold-parts', label: 'hold parts', realName: 'Hand rails', position: [0.08, 0, 0], finish: 'titanium' },
    { id: 'foot-holds', label: 'foot holds', realName: 'Foot straps', position: [0, -0.14, 0.04], finish: 'cold' },
    { id: 'top-part', label: 'top', realName: 'Top mount', position: [0, 0.16, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'up-down thing', dict: 'space-ladder' }, '. It helps people move up and down inside big things in the sky.'],
        ['The ', { text: 'body', part: 'body' }, ' is the long part that goes from bottom to top. It holds all the other parts together.'],
        ['The ', { text: 'steps', part: 'steps' }, ' are the parts you hold on to. In the sky, you do not stand on them — you pull yourself along.'],
        ['The ', { text: 'hold parts', part: 'hold-parts' }, ' are on both sides. They give you something to hold with your hands so you do not float away.'],
        ['The ', { text: 'foot holds', part: 'foot-holds' }, ' keep your feet in place. Without them, your feet would just float around.'],
        ['The ', { text: 'top', part: 'top-part' }, ' is where the ladder is held to the wall. It must be very strong so the ladder does not come off.'],
      ],
    },
    {
      sentences: [
        ['When someone wants to move, they put their feet in the foot holds first.'],
        ['Then they grab the steps or hold parts and pull themselves along.'],
        ['It is not like climbing on the ground — there is no pulling force.'],
        ['You move by pushing and pulling, not by stepping up.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body goes from bottom to top.' },
    { partIds: ['steps'], sentenceRef: 2, caption: 'Steps are what you hold on to.' },
    { partIds: ['hold-parts'], sentenceRef: 3, caption: 'Hold parts keep your hands in place.' },
    { partIds: ['foot-holds'], sentenceRef: 4, caption: 'Foot holds keep your feet from floating.' },
    { partIds: ['top-part'], sentenceRef: 5, caption: 'The top holds the ladder to the wall.' },
  ],
  keyExpressions: [
    { text: 'up-down thing', partId: 'body' },
    { text: 'steps', partId: 'steps' },
    { text: 'hold parts', partId: 'hold-parts' },
    { text: 'foot holds', partId: 'foot-holds' },
  ],
  color: '#C0C0C0',
}