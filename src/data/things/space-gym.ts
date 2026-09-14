import type { ThingData } from '../types'

export const spaceGym: ThingData = {
  id: 'space-gym',
  slug: 'space-gym',
  simpleName: 'The Sky Exercise Place',
  realName: 'Space gym',
  category: 'space',
  funFacts: [
    'People in the sky must exercise every day or their bodies get not strong.',
    'Without pulling force, your bones and muscles get smaller very fast.',
    'Some of the machines look very different from the ones on the ground.',
    'People usually spend about two hours every day using these machines.',
    'The machines must hold you down so you can use them without floating away.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Exercise frame', position: [0, 0, 0], finish: 'hull' },
    { id: 'seat', label: 'seat', realName: 'Exercise seat', position: [0, -0.04, 0], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Body restraint', position: [0, 0.04, 0.06], finish: 'titanium' },
    { id: 'move-part', label: 'move part', realName: 'Resistance system', position: [0, 0.08, -0.04], finish: 'hull' },
    { id: 'foot-part', label: 'foot part', realName: 'Foot platform', position: [0, -0.1, 0], finish: 'cold' },
    { id: 'show-part', label: 'show part', realName: 'Display', position: [0, 0.12, 0.04], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'sky exercise place', dict: 'space-gym' }, '. It helps people in the sky keep their bodies strong.'],
        ['The ', { text: 'body', part: 'body' }, ' is the big part that holds everything. It is very strong because it must not break.'],
        ['The ', { text: 'seat', part: 'seat' }, ' is where you sit or lie down. It has things that hold you so you do not float away.'],
        ['The ', { text: 'hold part', part: 'hold-part' }, ' keeps your body in place. Without it, you could not push or pull against anything.'],
        ['The ', { text: 'move part', part: 'move-part' }, ' is what you push and pull. It makes it hard to move so your muscles have to work.'],
        ['The ', { text: 'foot part', part: 'foot-part' }, ' is where you put your feet. It holds them down so you can push with your legs.'],
        ['The ', { text: 'show part', part: 'show-part' }, ' tells you how well you are doing. It shows how long you have been working and how hard.'],
      ],
    },
    {
      sentences: [
        ['When someone wants to exercise, they sit on the seat and put their feet on the foot part.'],
        ['The hold part keeps them from floating away while they work.'],
        ['They push and pull the move part to make their muscles strong.'],
        ['The show part tells them when they have done enough for the day.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body is the big strong part.' },
    { partIds: ['seat', 'hold-part'], sentenceRef: 2, caption: 'Seat and hold part keep you in place.' },
    { partIds: ['move-part'], sentenceRef: 4, caption: 'The move part makes your muscles work.' },
    { partIds: ['foot-part'], sentenceRef: 5, caption: 'The foot part holds your feet down.' },
    { partIds: ['show-part'], sentenceRef: 6, caption: 'The show part tells how well you do.' },
  ],
  keyExpressions: [
    { text: 'sky exercise place', partId: 'body' },
    { text: 'seat', partId: 'seat' },
    { text: 'hold part', partId: 'hold-part' },
    { text: 'move part', partId: 'move-part' },
  ],
  color: '#FF69B4',
}