import type { ThingData } from '../types'

export const bicycle: ThingData = {
  id: 'bicycle',
  slug: 'bicycle',
  simpleName: 'Two-Wheel Push Machine',
  realName: 'Bicycle',
  category: 'transport',
  funFacts: [
    'The first bicycles had no foot holders — riders pushed the ground with their feet.',
    'A bicycle carries you farther for the same food than any other machine ever made.',
    'Riding with no hands looks cool, but the turning stick is there for a reason.',
  ],
  parts: [
    { id: 'metal-bones', label: 'Metal Bones', realName: 'Frame', position: [-0.2, 0.4, 0], finish: 'titanium' },
    { id: 'front-wheel', label: 'Front Wheel', realName: 'Front Wheel', position: [1.1, -0.4, 0], finish: 'cold' },
    { id: 'back-wheel', label: 'Back Wheel', realName: 'Rear Wheel', position: [-1.1, -0.4, 0], finish: 'cold' },
    { id: 'pull-chain', label: 'Pull Chain', realName: 'Chain Drive', position: [-0.55, -0.4, 0.14], finish: 'cold' },
    { id: 'foot-holders', label: 'Foot Holders', realName: 'Pedals & Crankset', position: [0.05, -0.35, 0], finish: 'cold' },
    { id: 'hand-stoppers', label: 'Hand Stoppers', realName: 'Brakes', position: [1.05, 0.15, 0], finish: 'warning' },
    { id: 'turning-stick', label: 'Turning Stick', realName: 'Handlebar & Fork', position: [0.7, 1.0, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'bicycle', dict: 'bicycle' },
          ' is a two-wheel machine that you push with your feet.',
        ],
        ['It has no machine inside — all the power comes from you.'],
        ['Every push of your legs moves the whole machine forward.'],
      ],
    },
    {
      sentences: [
        [
          'You put your feet on two ',
          { text: 'foot holders', part: 'foot-holders' },
          ' and push them around and around.',
        ],
        [
          'The turning foot holders pull a ',
          { text: 'chain', dict: 'chain' },
          ' that runs to the back wheel.',
        ],
        [
          'The ',
          { text: 'pull chain', part: 'pull-chain' },
          ' turns the ',
          { text: 'back wheel', part: 'back-wheel' },
          ', and the back wheel pushes against the road.',
        ],
        [
          'When the wheel pushes on the road, the road ',
          { text: 'pushes back', dict: 'push back' },
          ' — and the machine rolls forward.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A strong shape of metal — the ',
          { text: 'metal bones', part: 'metal-bones' },
          ' — holds every part together and carries you.',
        ],
        [
          'You hold a ',
          { text: 'turning stick', part: 'turning-stick' },
          ' and turn it left or right to point the front wheel.',
        ],
        [
          'The ',
          { text: 'front wheel', part: 'front-wheel' },
          ' follows, and the machine goes where you look.',
        ],
      ],
    },
    {
      sentences: [
        [
          'To stop, you pull on ',
          { text: 'hand stoppers', part: 'hand-stoppers' },
          '.',
        ],
        [
          'They press against the wheels, and the rubbing ',
          { text: 'slows you down', dict: 'slow down' },
          '.',
        ],
        ['A bicycle is quiet, needs nothing but you and your food, and the ride keeps you strong.'],
      ],
    },
  ],
  flow: [
    {
      partIds: ['foot-holders'],
      caption: 'Your feet push the foot holders around and around.',
      sentenceRef: 3,
    },
    {
      partIds: ['pull-chain'],
      caption: 'The foot holders pull the chain toward the back wheel.',
      sentenceRef: 4,
    },
    {
      partIds: ['back-wheel'],
      caption: 'The chain turns the back wheel, and the wheel pushes against the road.',
      sentenceRef: 5,
    },
    {
      partIds: ['turning-stick', 'front-wheel'],
      caption: 'You point the front wheel with the turning stick, and the machine rolls forward.',
      sentenceRef: 8,
    },
    {
      partIds: ['hand-stoppers'],
      caption: 'The hand stoppers press the wheels to slow you down.',
      sentenceRef: 10,
    },
  ],
  keyExpressions: [
    { text: 'bicycle' },
    { text: 'push with your feet' },
    { text: 'foot holders', partId: 'foot-holders' },
    { text: 'pull chain', partId: 'pull-chain' },
    { text: 'pushes against the road' },
    { text: 'metal bones', partId: 'metal-bones' },
    { text: 'turn left or right', partId: 'turning-stick' },
    { text: 'slow down', partId: 'hand-stoppers' },
    { text: 'rolls forward' },
  ],
  color: '#4ADE80',
}
