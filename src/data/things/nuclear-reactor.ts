import type { ThingData } from '../types'

/**
 * Heavy Metal Power Building — Nuclear Reactor
 * 文章遵循 Munroe 约束：只用 ~1000 常用词。
 * segment 标注：part（短语级部件关联）+ dict（词条）。
 */
export const nuclearReactor: ThingData = {
  id: 'nuclear-reactor',
  slug: 'nuclear-reactor',
  simpleName: 'Heavy Metal Power Building',
  realName: 'Nuclear Reactor',
  category: 'power',
  funFacts: [
    'The tiny pieces of matter are so small you can not see them.',
    'One building like this can make enough power for a whole city.',
    'The hot parts must stay in water all the time so they never get too hot.',
  ],
  parts: [
    { id: 'core', label: 'Hot Part', realName: 'Reactor Core', position: [0, 0.5, 0], finish: 'warning' },
    { id: 'rods', label: 'Sticks That Stop Heat', realName: 'Control Rods', position: [0, 2.2, 0] },
    { id: 'water', label: 'Hot Water Box', realName: 'Coolant System', position: [1.5, 0, 0], finish: 'cold' },
    { id: 'steam', label: 'Steam Maker', realName: 'Steam Generator', position: [2.5, 1, 0] },
    { id: 'wheel', label: 'Power Wheel', realName: 'Turbine', position: [3.5, 1, 0], finish: 'warning' },
    { id: 'building', label: 'Big Round House', realName: 'Containment Dome', position: [0, 3, 0], finish: 'shell' },
  ],
  article: [
    {
      // 段 1 —— 是什么（S0-S2）
      sentences: [
        [
          'This is a ',
          { text: 'heavy metal power building', part: 'building' },
          '.',
        ],
        [
          'People use it to make ',
          { text: 'power', dict: 'power' },
          ' for a whole city, by ',
          { text: 'breaking apart', dict: 'break apart' },
          ' tiny pieces of ',
          { text: 'matter', dict: 'matter' },
          '.',
        ],
        [
          'These pieces are so small that you can not see them, even through a glass that makes small things look big.',
        ],
      ],
    },
    {
      // 段 2 —— 核心原理（S3-S6）
      sentences: [
        [
          'Deep inside the building ',
          { text: 'sits', dict: 'sit' },
          ' the ',
          { text: 'hot part', part: 'core', dict: 'core' },
          '.',
        ],
        [
          'It is made of a special ',
          { text: 'heavy metal', part: 'core', dict: 'heavy metal' },
          ', the same kind of stuff that makes the ground warm under your feet.',
        ],
        [
          'When the tiny pieces inside it are broken apart, they ',
          { text: 'let out', dict: 'let out' },
          ' a lot of heat — more heat than a big fire.',
        ],
        [
          'The ',
          { text: 'hot part', part: 'core' },
          ' can get hotter than fire, so it must ',
          { text: 'sit', dict: 'sit' },
          ' inside ',
          { text: 'water', part: 'water', dict: 'water' },
          ' all the time.',
        ],
      ],
    },
    {
      // 段 3 —— 蒸汽与发电（S7-S10）
      sentences: [
        [
          'The water around the hot part gets very hot and ',
          { text: 'turns into', dict: 'turn into' },
          ' ',
          { text: 'steam', part: 'steam', dict: 'steam' },
          ' — water in gas form.',
        ],
        [
          'The steam is pushed through the ',
          { text: 'steam maker', part: 'steam' },
          ' and out to a big ',
          { text: 'power wheel', part: 'wheel' },
          ' with ',
          { text: 'blades', dict: 'blade' },
          '.',
        ],
        [
          'The steam hits the blades, and the wheel ',
          { text: 'spins', dict: 'spin' },
          ' around very fast.',
        ],
        [
          'As the wheel turns, it runs a machine that makes ',
          { text: 'power', dict: 'power' },
          ' — the same power that lights your room.',
        ],
      ],
    },
    {
      // 段 4 —— 安全（S11-S13）
      sentences: [
        [
          'All of this ',
          { text: 'sits', dict: 'sit' },
          ' inside a ',
          { text: 'big round house', part: 'building' },
          ' made of very strong stuff.',
        ],
        [
          'The round house keeps everything ',
          { text: 'safe', dict: 'safe' },
          ' inside, even if something goes wrong.',
        ],
        [
          'If things get too hot, ',
          { text: 'sticks that stop heat', part: 'rods' },
          ' can be pushed down into the ',
          { text: 'hot part', part: 'core' },
          ' to slow it or stop it.',
        ],
      ],
    },
  ],
  flow: [
    {
      partIds: ['core'],
      caption: 'Deep inside, tiny pieces of matter are broken apart. This lets out a lot of heat.',
      sentenceRef: 5,
    },
    {
      partIds: ['core', 'water'],
      caption: 'The heat warms the water that sits around the hot part.',
      sentenceRef: 6,
    },
    {
      partIds: ['steam'],
      caption: 'The very hot water turns into steam — water in gas form.',
      sentenceRef: 7,
    },
    {
      partIds: ['wheel'],
      caption: 'The steam is pushed out and hits the power wheel. The wheel spins fast.',
      sentenceRef: 9,
    },
    {
      partIds: ['wheel'],
      caption: 'The turning wheel runs the machine that makes power for your lights.',
      sentenceRef: 10,
    },
    {
      partIds: ['rods'],
      caption: 'If things get too hot, the sticks that stop heat are pushed in to slow everything down.',
      sentenceRef: 13,
    },
  ],
  keyExpressions: [
    { text: 'breaking apart tiny pieces of matter', partId: 'core' },
    { text: 'let out a lot of heat', partId: 'core' },
    { text: 'turns into steam', partId: 'steam' },
    { text: 'the wheel spins around', partId: 'wheel' },
    { text: 'runs a machine that makes power', partId: 'wheel' },
    { text: 'sticks that stop heat', partId: 'rods' },
    { text: 'big round house', partId: 'building' },
    { text: 'keeps everything safe inside', partId: 'building' },
  ],
  color: '#E8453C',
}
