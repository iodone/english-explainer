import type { ThingData } from '../types'

export const elevator: ThingData = {
  id: 'elevator',
  slug: 'elevator',
  simpleName: 'Up-Down Room',
  realName: 'Elevator',
  category: 'transport',
  funFacts: [
    'Elevator lines are checked often, and one line can hold much more than the room needs.',
    'Some fast elevators move faster than a car driving through a city.',
    'The other weight can be as heavy as the room and the biggest group of people it can carry.',
  ],
  parts: [
    { id: 'room', label: 'Up-Down Room', realName: 'Elevator Car', position: [0, -0.3, 0], finish: 'titanium' },
    { id: 'strong-line', label: 'Strong Line', realName: 'Hoist Rope', position: [0, 0.5, 0], finish: 'cold' },
    { id: 'top-wheel', label: 'Turning Top Wheel', realName: 'Sheave & Motor', position: [0, 1.1, 0], finish: 'warning' },
    { id: 'other-weight', label: 'Other Weight', realName: 'Counterweight', position: [1.3, -0.3, 0], finish: 'hull' },
    { id: 'straight-tracks', label: 'Straight Tracks', realName: 'Guide Rails', position: [-0.75, -0.3, 0], finish: 'cold' },
    { id: 'door-brain', label: 'Door Brain', realName: 'Door Operator', position: [0, 0.35, 0.62], finish: 'cold' },
    { id: 'catch-teeth', label: 'Catch Teeth', realName: 'Safety Brake', position: [0, -1.05, 0], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'An ',
          { text: 'elevator', dict: 'elevator' },
          ' is a small ',
          { text: 'room', part: 'room' },
          ' that moves ',
          { text: 'up and down', dict: 'up and down' },
          ' inside a building.',
        ],
        [
          'It carries people and things ',
          { text: 'between floors', dict: 'between floors' },
          ', so they do not have to climb stairs.',
        ],
        [
          'A ',
          { text: 'strong line', part: 'strong-line' },
          ' and a ',
          { text: 'top wheel', part: 'top-wheel' },
          ' work together to lift it.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The line goes over the wheel and down to a big ',
          { text: 'weight', part: 'other-weight' },
          ' on the other side.',
        ],
        [
          'The weight is close to the weight of the room, so the top wheel does not need to be huge.',
        ],
        [
          'When the wheel turns one way, the room goes up; the other way, the room goes down.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Straight ',
          { text: 'tracks', part: 'straight-tracks' },
          ' hold the room and keep it from moving side to side.',
        ],
        [
          'A ',
          { text: 'door brain', part: 'door-brain' },
          ' waits until the room is in the right place.',
        ],
        [
          'Then it opens both sets of doors ',
          { text: 'at the same time', dict: 'at the same time' },
          '.',
        ],
      ],
    },
    {
      sentences: [
        [
          'If the room moves ',
          { text: 'too fast', dict: 'too fast' },
          ', ',
          { text: 'catch teeth', part: 'catch-teeth' },
          ' reach out and hold the tracks.',
        ],
        [
          'The line is made from many smaller lines, so one broken piece does not let the room fall.',
        ],
        [
          'That is why this moving room can be one of the safest ways to travel in a tall building.',
        ],
      ],
    },
  ],
  flow: [
    {
      partIds: ['room'],
      caption: 'The up-down room waits for you.',
      sentenceRef: 0,
    },
    {
      partIds: ['door-brain'],
      caption: 'The door brain opens both sets of doors at the same time.',
      sentenceRef: 8,
    },
    {
      partIds: ['strong-line', 'top-wheel'],
      caption: 'The strong line and top wheel lift the room.',
      sentenceRef: 2,
    },
    {
      partIds: ['other-weight'],
      caption: 'The other weight moves the other way.',
      sentenceRef: 3,
    },
    {
      partIds: ['straight-tracks', 'catch-teeth'],
      caption: 'The tracks and catch teeth hold the room if it moves too fast.',
      sentenceRef: 9,
    },
  ],
  keyExpressions: [
    { text: 'elevator' },
    { text: 'up and down' },
    { text: 'between floors' },
    { text: 'strong line', partId: 'strong-line' },
    { text: 'top wheel', partId: 'top-wheel' },
    { text: 'other weight', partId: 'other-weight' },
    { text: 'side to side', partId: 'straight-tracks' },
    { text: 'at the same time', partId: 'door-brain' },
    { text: 'too fast', partId: 'catch-teeth' },
  ],
  color: '#A78BFA',
}
