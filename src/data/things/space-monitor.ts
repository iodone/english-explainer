import type { ThingData } from '../types'

export const spaceMonitor: ThingData = {
  id: 'space-monitor',
  slug: 'space-monitor',
  simpleName: 'The Space Watcher',
  realName: 'Space monitor',
  category: 'space',
  funFacts: [
    'It watches many things in space all the time so we know what is happening out there.',
    'It can see things that are very far away and very small that we can not see with our eyes.',
    'It tells us when something is coming close to the world so we can be ready.',
    'It helps people who go to space know what is around them so they stay safe.',
    'Some of them are very big and some are very small but they all do the same work.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Casing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'Sensor array', position: [0.15, 0, 0], finish: 'titanium' },
    { id: 'top', label: 'top', realName: 'Antenna', position: [0, 0.12, 0], finish: 'titanium' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Base', position: [0, -0.12, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'Circuit board', position: [0, 0, 0.06], finish: 'cold' },
    { id: 'power', label: 'power', realName: 'Power unit', position: [-0.15, 0, 0], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'space watcher', dict: 'space-monitor' }, '. It is a thing that watches what is happening in space and tells us about it.'],
        ['The ', { text: 'body', part: 'body' }, ' is the outside part that holds all the other parts. It is made of hard stuff to keep the inside safe from things that hit it in space.'],
        ['The ', { text: 'end', part: 'end' }, ' is the part that looks at things in space. It has special things inside that can see light and other things we can not see.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part that sends and gets messages. It can send what it sees back to the world so people can see it too.'],
        ['The ', { text: 'bottom part', part: 'bottom-part' }, ' is the part that holds the body in place. It is where the body joins the thing that keeps it in the right place.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is where all the thinking happens. It takes what the end sees and turns it into pictures and numbers that people can read.'],
        ['The ', { text: 'power', part: 'power' }, ' is what makes the body work. It gets power from the sun and turns it into the kind of power that the body needs.'],
      ],
    },
    {
      sentences: [
        ['When it is working, the end looks at things in space and the inside thinks about what it sees.'],
        ['The top then sends a message back to the world with what it found.'],
        ['People on the world get the message and look at the pictures and numbers.'],
        ['Now they know what is happening in space and can make good choices about what to do next.'],
      ],
    },
  ],
  flow: [
    { partIds: ['end', 'inside'], sentenceRef: 1, caption: 'End looks at things; inside thinks about them.' },
    { partIds: ['top'], sentenceRef: 2, caption: 'Top sends message back to the world.' },
    { partIds: ['body', 'bottom-part'], sentenceRef: 0, caption: 'Body holds all parts; bottom part keeps it in place.' },
    { partIds: ['power'], sentenceRef: 6, caption: 'Power gets what it needs from the sun.' },
  ],
  keyExpressions: [
    { text: 'space watcher', partId: 'body' },
    { text: 'end', partId: 'end' },
    { text: 'top', partId: 'top' },
    { text: 'power', partId: 'power' },
  ],
  color: '#2F4F4F',
}