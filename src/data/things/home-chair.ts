import type { ThingData } from '../types'

export const homeChair: ThingData = {
  id: 'home-chair',
  slug: 'home-chair',
  simpleName: 'The Sit Place',
  realName: 'Chair',
  category: 'home',
  funFacts: [
    'The first ones were only for very important people a long time ago.',
    'A person spends about six years of their life sitting on one.',
    'Some of them can go up and down to fit people of how tall they are.',
    'Some have wheels so you can move around without standing up.',
    'The best ones help your back feel good even after sitting for a long time.',
  ],
  parts: [
    { id: 'seat', label: 'seat', realName: 'Seat', position: [0, 0, 0], finish: 'hull' },
    { id: 'back', label: 'back', realName: 'Backrest', position: [0, 0.1, -0.08], finish: 'cold' },
    { id: 'legs', label: 'legs', realName: 'Legs', position: [0, -0.08, 0], finish: 'hull' },
    { id: 'arm-parts', label: 'arm parts', realName: 'Armrests', position: [0, 0.04, 0], finish: 'titanium' },
    { id: 'foot-parts', label: 'foot parts', realName: 'Floor glides', position: [0, -0.14, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'sit place', dict: 'home-chair' }, '. You sit on it when you want to rest or do work.'],
        ['The ', { text: 'seat', part: 'seat' }, ' is the flat part you sit on. It must be wide enough and strong enough to hold you.'],
        ['The ', { text: 'back', part: 'back' }, ' goes up from the back of the seat. It holds up your back so you do not have to hold yourself up.'],
        ['The ', { text: 'legs', part: 'legs' }, ' hold the seat up off the ground. There are usually four of them, one at each corner.'],
        ['The ', { text: 'arm parts', part: 'arm-parts' }, ' are on the sides. They give your arms a place to rest while you sit.'],
        ['The ', { text: 'foot parts', part: 'foot-parts' }, ' are at the bottom of the legs. They help the chair slide without making marks on the floor.'],
      ],
    },
    {
      sentences: [
        ['When you want to sit, you stand in front of it and lower yourself down.'],
        ['Your back rests against the back and your arms can rest on the arm parts.'],
        ['When you are done, you push yourself up and stand again.'],
        ['A good one makes sitting for a long time feel nice for your body.'],
      ],
    },
  ],
  flow: [
    { partIds: ['seat'], sentenceRef: 1, caption: 'The seat is the flat part you sit on.' },
    { partIds: ['back'], sentenceRef: 2, caption: 'The back holds up your back.' },
    { partIds: ['legs', 'foot-parts'], sentenceRef: 3, caption: 'Legs hold it up; foot parts keep the floor safe.' },
    { partIds: ['arm-parts'], sentenceRef: 4, caption: 'Arm parts give your arms a place to rest.' },
  ],
  keyExpressions: [
    { text: 'sit place', partId: 'seat' },
    { text: 'seat', partId: 'seat' },
    { text: 'back', partId: 'back' },
    { text: 'arm parts', partId: 'arm-parts' },
  ],
  color: '#8B4513',
}