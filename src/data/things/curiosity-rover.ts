import type { ThingData } from '../types'

/**
 * Red World Space Car — Curiosity Rover
 * 文章遵循 Munroe 约束：只用 ~1000 常用词（the red world / space car / hot box）。
 * segment 标注：part（短语级部件关联）+ dict（词条，见 dict/curiosity-rover.ts）。
 */
export const curiosityRover: ThingData = {
  id: 'curiosity-rover',
  slug: 'curiosity-rover',
  simpleName: 'Red World Space Car',
  realName: 'Curiosity Rover',
  category: 'space',
  funFacts: [
    'It was only supposed to work for two years, but it has kept working for more than ten.',
    'It moves slower than a person walking, so you could walk right past it.',
    'It is about the size of a small car.',
  ],
  parts: [
    { id: 'body', label: 'Car Body', realName: 'Warm Electronics Box', position: [0, 0.5, 0], finish: 'titanium' },
    { id: 'wheels', label: 'Rolling Feet', realName: 'Rocker-Bogie Wheels', position: [0, -0.5, 0], finish: 'cold' },
    { id: 'mast', label: 'Long Neck', realName: 'Camera Mast', position: [0, 1.5, 0], finish: 'warning' },
    { id: 'arm', label: 'Reaching Hand', realName: 'Robotic Arm', position: [0, 0, 1] },
    { id: 'power', label: 'Hot Box', realName: 'RTG Power Source', position: [-1, 0.8, 0], finish: 'warning' },
    { id: 'brain', label: 'Think Box', realName: 'Rover Computer', position: [0, 0.5, 0], finish: 'cold' },
  ],
  article: [
    {
      // 段 1 —— 是什么（S0-S2）
      sentences: [
        [
          'This is a ',
          { text: 'space car', part: 'body' },
          ' that people sent to ',
          { text: 'the red world', dict: 'the red world' },
          ' far away.',
        ],
        [
          'It flew through the sky for more than seven months before it ',
          { text: 'landed', dict: 'land' },
          ' on the red ground.',
        ],
        [
          'Up there it ',
          { text: 'drives around', dict: 'drive around' },
          ', ',
          { text: 'looks at', dict: 'look at' },
          ' rocks and dirt, and ',
          { text: 'sends pictures back', dict: 'send back' },
          ' home.',
        ],
      ],
    },
    {
      // 段 2 —— 看与走（S3-S6）
      sentences: [
        [
          'On top of its ',
          { text: 'long neck', part: 'mast' },
          ' ',
          { text: 'sit', dict: 'sit' },
          ' two eyes that can see very far.',
        ],
        [
          'They help the car ',
          { text: 'find out', dict: 'find out' },
          ' which way is ',
          { text: 'safe', dict: 'safe' },
          ', so it does not get stuck.',
        ],
        [
          'The whole car stands on six ',
          { text: 'rolling feet', part: 'wheels' },
          '.',
        ],
        [
          'Together, these feet can ',
          { text: 'climb over', dict: 'climb over' },
          ' rocks taller than a person.',
        ],
      ],
    },
    {
      // 段 3 —— 动力（S7-S10）
      sentences: [
        [
          'All its power comes from a ',
          { text: 'hot box', part: 'power' },
          ' that hangs on its back.',
        ],
        [
          'Inside the box is a special kind of ',
          { text: 'matter', dict: 'matter' },
          ' that gets hot all by itself, with no fire at all.',
        ],
        [
          'That heat is ',
          { text: 'turned into', dict: 'turn into' },
          ' power for the whole car, day and night.',
        ],
        [
          'Because it needs no sun, the car can keep working at night and in a big ',
          { text: 'dust storm', dict: 'dust storm' },
          ' — that is how it has lived much longer than the space cars sent before it.',
        ],
      ],
    },
    {
      // 段 4 —— 干活（S11-S14）
      sentences: [
        [
          'When the car finds an interesting rock, its ',
          { text: 'reaching hand', part: 'arm' },
          ' ',
          { text: 'reaches out', dict: 'reach out' },
          ' to touch it.',
        ],
        [
          'The hand can ',
          { text: 'bite off', dict: 'bite off' },
          ' little pieces of the rock to make a fine ',
          { text: 'powder', dict: 'powder' },
          '.',
        ],
        [
          'The powder goes into the ',
          { text: 'car body', part: 'body' },
          ', where a ',
          { text: 'think box', part: 'brain' },
          ' ',
          { text: 'figures out', dict: 'figure out' },
          ' what the rock is made of.',
        ],
        [
          'The ',
          { text: 'think box', part: 'brain' },
          ' also decides where the car should drive the next day, and everything it learns is ',
          { text: 'sent back', dict: 'send back' },
          ' home by ',
          { text: 'radio', dict: 'radio' },
          '.',
        ],
      ],
    },
  ],
  flow: [
    {
      partIds: ['power'],
      caption: 'Inside the hot box, a special kind of matter gets hot all by itself.',
      sentenceRef: 8,
    },
    {
      partIds: ['power', 'brain'],
      caption: 'That heat is turned into power for the whole car, and the think box wakes up.',
      sentenceRef: 9,
    },
    {
      partIds: ['mast'],
      caption: 'The eyes on top of the long neck look far and wide, helping the car pick a safe way.',
      sentenceRef: 4,
    },
    {
      partIds: ['wheels'],
      caption: 'Six rolling feet carry the car, climbing over rocks taller than a person.',
      sentenceRef: 6,
    },
    {
      partIds: ['arm'],
      caption: 'The reaching hand bites off little pieces of rock and turns them into a fine powder.',
      sentenceRef: 12,
    },
    {
      partIds: ['brain'],
      caption:
        'The think box figures out what the powder is, and sends everything it learns back home by radio.',
      sentenceRef: 14,
    },
  ],
  keyExpressions: [
    { text: 'sends pictures back home', partId: 'mast' },
    { text: 'find out which way is safe', partId: 'mast' },
    { text: 'climb over rocks taller than a person', partId: 'wheels' },
    { text: 'gets hot all by itself', partId: 'power' },
    { text: 'heat is turned into power', partId: 'power' },
    { text: 'reaches out to touch the rock', partId: 'arm' },
    { text: 'bites off little pieces of the rock', partId: 'arm' },
    { text: 'figures out what the rock is made of', partId: 'brain' },
  ],
  color: '#E8453C',
}
