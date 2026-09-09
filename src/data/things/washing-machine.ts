import type { ThingData } from '../types'

/**
 * Boxes That Make Clothes Smell Better — Washing Machine & Dryer
 * 文章遵循 Munroe 约束：只用 ~1000 常用词。
 * segment 标注：part（短语级部件关联）+ dict（词条）。
 */
export const washingMachine: ThingData = {
  id: 'washing-machine',
  slug: 'washing-machine',
  simpleName: 'Boxes That Make Clothes Smell Better',
  realName: 'Washing Machine & Dryer',
  category: 'home',
  funFacts: [
    'One wash can use more than forty liters of water — that is about two hundred cups.',
    'When the box spins the water out, it can turn faster than the wheels of a car driving down the road.',
    'If the hot air box gets too hot, your clothes can get smaller and smaller.',
  ],
  parts: [
    { id: 'drum', label: 'Round Turning Box', realName: 'Drum', position: [0, 0, 0], finish: 'titanium' },
    { id: 'motor', label: 'Spinning Power', realName: 'Electric Motor', position: [0, -1, 0], finish: 'cold' },
    { id: 'water-in', label: 'Water In', realName: 'Water Inlet', position: [-1, 1, 0] },
    { id: 'soap', label: 'Soap Box', realName: 'Detergent Dispenser', position: [-1, 0.5, 0] },
    { id: 'pump', label: 'Water Pusher', realName: 'Drain Pump', position: [0, -1, 1] },
    { id: 'hot-air', label: 'Hot Air Blower', realName: 'Heating Element', position: [1, 0, 0], finish: 'warning' },
  ],
  article: [
    {
      // 段 1 —— 是什么（S0-S2）
      sentences: [
        [
          'These are two boxes that work ',
          { text: 'side by side', dict: 'side by side' },
          ': a water box and a hot air box.',
        ],
        [
          'The first one uses water to ',
          { text: 'wash off', dict: 'wash off' },
          ' the ',
          { text: 'dirt', dict: 'dirt' },
          ' on your clothes.',
        ],
        [
          'The second one blows hot air over the ',
          { text: 'wet', dict: 'wet' },
          ' clothes until they are dry.',
        ],
      ],
    },
    {
      // 段 2 —— 洗（S3-S6）
      sentences: [
        [
          'When you start the wash, the ',
          { text: 'water in', part: 'water-in' },
          ' on top lets clean water run down into the ',
          { text: 'round turning box', part: 'drum' },
          ', which begins to ',
          { text: 'fill up', dict: 'fill up' },
          '.',
        ],
        [
          'At the same time, the ',
          { text: 'soap box', part: 'soap' },
          ' sends soap water in, and soap is very good at ',
          { text: 'grabbing', dict: 'grab' },
          ' dirt — it ',
          { text: 'holds on to', dict: 'hold on to' },
          ' dirt better than your clothes do.',
        ],
        [
          'Then the ',
          { text: 'round turning box', part: 'drum' },
          ' starts to turn, pushed by the ',
          { text: 'spinning power', part: 'motor' },
          ' under it.',
        ],
        [
          'It turns this way and that way, ',
          { text: 'tossing', dict: 'toss' },
          ' the clothes ',
          { text: 'over and over', dict: 'over and over' },
          ', so the dirt comes off and falls into the water.',
        ],
      ],
    },
    {
      // 段 3 —— 排水与甩干（S7-S10）
      sentences: [
        [
          'When the clothes are clean, the ',
          { text: 'water pusher', part: 'pump' },
          ' ',
          { text: 'pushes out', dict: 'push out' },
          ' all the dirty water.',
        ],
        [
          'Then the ',
          { text: 'round turning box', part: 'drum' },
          ' ',
          { text: 'spins', dict: 'spin' },
          ' very fast, much faster than before.',
        ],
        [
          'It is like turning a wet umbrella fast on a rainy day — the water ',
          { text: 'flies off', dict: 'fly off' },
          ' the same way.',
        ],
        [
          'The fast turning throws the water out through little holes in the wall of the box, and the holes are too small for the clothes to fit through.',
        ],
      ],
    },
    {
      // 段 4 —— 烘干（S11-S13）
      sentences: [
        [
          'Now you put the wet clothes into the second box, and the ',
          { text: 'hot air blower', part: 'hot-air' },
          ' starts to blow very hot air.',
        ],
        [
          'The hot air ',
          { text: 'passes through', dict: 'pass through' },
          ' the clothes and ',
          { text: 'carries away', dict: 'carry away' },
          ' the water, ',
          { text: 'little by little', dict: 'little by little' },
          '.',
        ],
        [
          'The box keeps turning while the clothes dry, so they do not ',
          { text: 'stick together', dict: 'stick together' },
          ' — and they ',
          { text: 'come out', dict: 'come out' },
          ' warm, soft, and smelling good.',
        ],
      ],
    },
  ],
  flow: [
    {
      partIds: ['water-in'],
      caption: 'Clean water runs in from the water in on top, and the round turning box begins to fill up.',
      sentenceRef: 3,
    },
    {
      partIds: ['soap'],
      caption: 'Soap water flows in from the soap box. Soap is very good at grabbing dirt.',
      sentenceRef: 4,
    },
    {
      partIds: ['motor', 'drum'],
      caption: 'The spinning power under the box makes it turn, tossing the clothes over and over.',
      sentenceRef: 5,
    },
    {
      partIds: ['pump'],
      caption: 'The water pusher pushes out all the dirty water.',
      sentenceRef: 7,
    },
    {
      partIds: ['drum'],
      caption: 'The box spins very fast, and the water flies off, just like a wet umbrella on a rainy day.',
      sentenceRef: 9,
    },
    {
      partIds: ['hot-air'],
      caption: 'In the second box, the hot air blower blows very hot air through the clothes and carries the water away.',
      sentenceRef: 12,
    },
  ],
  keyExpressions: [
    { text: 'wash off the dirt', partId: 'drum' },
    { text: 'lets clean water run down', partId: 'water-in' },
    { text: 'very good at grabbing dirt', partId: 'soap' },
    { text: 'pushed by the spinning power', partId: 'motor' },
    { text: 'tossing the clothes over and over', partId: 'drum' },
    { text: 'pushes out the dirty water', partId: 'pump' },
    { text: 'spins very fast', partId: 'drum' },
    { text: 'carries the water away', partId: 'hot-air' },
  ],
  color: '#4ADE80',
}
