import type { ThingData } from '../types';

export const spaceHeadset: ThingData = {
  id: 'space-headset',
  slug: 'space-headset',
  simpleName: 'The Space Talk Thing',
  realName: 'Space Headset',
  category: 'space',
  color: '#2F4F4F',
  funFacts: [
    'This thing lets people talk to each other in space where the air is very thin.',
    'It has a part that goes over the ear so you can hear well even with loud noise.',
    'The small part in front of the mouth picks up what you say.',
    'People use it to talk to others on the ship or far away on the ground.',
    'It is made to work well even when there is a lot of noise from the ship.',
    'Without it, people would have to shout to be heard in the loud ship.'
  ],
  parts: [
    { id: 'body', label: 'Head Band', realName: 'Headband Frame', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Ear Part', realName: 'Ear Cup', position: [-0.12, -0.05, 0], finish: 'cold' },
    { id: 'top', label: 'Soft Part', realName: 'Cushion Pad', position: [0, 0.08, 0], finish: 'titanium' },
    { id: 'mic', label: 'Talk Part', realName: 'Microphone Boom', position: [0.1, -0.1, -0.05], finish: 'warning' },
    { id: 'wire', label: 'Line Part', realName: 'Communication Cable', position: [0, -0.08, 0.1], finish: 'hull' },
    { id: 'plug', label: 'End Part', realName: 'Connector Plug', position: [0, -0.08, 0.2], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a thing that lets people talk to each other in space.'],
        ['The ', { text: 'body', part: 'body' }, ' is the part that goes over the top of the head.'],
        ['The ', { text: 'end', part: 'end' }, ' is the part that goes over the ear so you can hear.'],
        ['The ', { text: 'top', part: 'top' }, ' is the soft part that makes it feel good on the head.'],
        ['The ', { text: 'talk part', part: 'mic' }, ' is the small part in front of the mouth that picks up what you say.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'wire', part: 'wire' }, ' is the line that carries what you say to the ship.'],
        ['The ', { text: 'plug', part: 'plug' }, ' is the end part that goes into the ship to join it.'],
        ['When you talk, the ', { text: 'talk part', part: 'mic' }, ' picks up your words and sends them through the ', { text: 'wire', part: 'wire' }, '.'],
        ['The ', { text: 'end', part: 'end' }, ' lets you hear what other people say back.'],
        ['The ', { text: 'top', part: 'top' }, ' keeps the band from hurting the top of your head.'],
        ['This thing is very important for talking to people when you are far from home.']
      ]
    }
  ],
  flow: [
    { partIds: ['body', 'top'], caption: 'The band goes over the head with soft padding', sentenceRef: 1 },
    { partIds: ['end'], caption: 'The ear part lets you hear well', sentenceRef: 2 },
    { partIds: ['mic', 'wire'], caption: 'The talk part sends words through the line', sentenceRef: 7 },
    { partIds: ['plug'], caption: 'The end part joins to the ship', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'headset', partId: 'body' },
    { text: 'ear cup', partId: 'end' },
    { text: 'microphone boom', partId: 'mic' },
    { text: 'communication cable', partId: 'wire' }
  ]
};
