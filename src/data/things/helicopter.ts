import type { ThingData } from '../types'

/**
 * Sky Boat with Turning Wings — Helicopter
 * 文章遵循 Munroe 约束：只用 ~1000 常用词。
 * segment 标注：part（短语级部件关联）+ dict（词条）。
 */
export const helicopter: ThingData = {
  id: 'helicopter',
  slug: 'helicopter',
  simpleName: 'Sky Boat with Turning Wings',
  realName: 'Helicopter',
  category: 'transport',
  funFacts: [
    'The turning wings on top can spin around more than four hundred times in one minute.',
    'This sky boat can fly backward and even hang in one place in the sky, which most sky boats can not do.',
    'Even if the hot air machine stops, the turning wings can keep turning by themselves for a short time, so the boat can still come down safely.',
  ],
  parts: [
    { id: 'rotor', label: 'Turning Wings', realName: 'Main Rotor', position: [0, 2.5, 0], finish: 'cold' },
    { id: 'tail', label: 'Back Turning Stick', realName: 'Tail Rotor', position: [0, 1, -3] },
    { id: 'body', label: 'Sky Boat Body', realName: 'Fuselage', position: [0, 0, 0], finish: 'titanium' },
    { id: 'engine', label: 'Hot Air Machine', realName: 'Turboshaft Engine', position: [0, 1.5, 0], finish: 'warning' },
    { id: 'skids', label: 'Standing Legs', realName: 'Landing Skids', position: [0, -1, 0] },
    { id: 'window', label: 'See-Through Front', realName: 'Windshield', position: [0, 0.5, 1.5], finish: 'warning' },
  ],
  article: [
    {
      // 段 1 —— 是什么（S0-S2）
      sentences: [
        [
          'This is a ',
          { text: 'sky boat', part: 'body' },
          ' with ',
          { text: 'turning wings', part: 'rotor' },
          ' on top.',
        ],
        [
          'It does not need a long road to ',
          { text: 'take off', dict: 'take off' },
          ' — it can go ',
          { text: 'straight', dict: 'straight' },
          ' up into the sky.',
        ],
        [
          'Its real name ',
          { text: 'comes from', dict: 'come from' },
          ' two old words: one means "turning" and the other means "wing".',
        ],
      ],
    },
    {
      // 段 2 —— 怎么飞（S3-S6）
      sentences: [
        [
          'The ',
          { text: 'turning wings', part: 'rotor' },
          ' on top ',
          { text: 'spin around', dict: 'spin around' },
          ' very fast, many times every minute.',
        ],
        [
          'As they turn, the wings ',
          { text: 'push air down', dict: 'push down' },
          ', and the air ',
          { text: 'pushes back', dict: 'push back' },
          ' — up, against the ',
          { text: 'sky boat body', part: 'body' },
          '.',
        ],
        [
          'When the push up is stronger than the ',
          { text: 'pull', dict: 'pull' },
          ' of the world, the whole boat leaves the ground.',
        ],
        [
          'All that turning needs a lot of power, and the power ',
          { text: 'comes from', dict: 'come from' },
          ' a ',
          { text: 'hot air machine', part: 'engine' },
          ' that ',
          { text: 'burns', dict: 'burn' },
          ' gas.',
        ],
      ],
    },
    {
      // 段 3 —— 稳定与控制（S7-S10）
      sentences: [
        [
          'But there is a problem: as the wings on top turn one way, the ',
          { text: 'sky boat body', part: 'body' },
          ' below them wants to turn the other way.',
        ],
        [
          'A small ',
          { text: 'back turning stick', part: 'tail' },
          ' at the end of the boat pushes air ',
          { text: 'sideways', dict: 'sideways' },
          ' to ',
          { text: 'fight', dict: 'fight' },
          ' this turning, so the boat does not go around in circles.',
        ],
        [
          'To move through the sky, the ',
          { text: 'turning wings', part: 'rotor' },
          ' can ',
          { text: 'tip', dict: 'tip' },
          ' a little — to the front, to the back, or to the side.',
        ],
        [
          'Then the push is not straight up any more, and the boat moves that way — ',
          { text: 'forward', dict: 'forward' },
          ', backward, or from ',
          { text: 'side to side', dict: 'side to side' },
          '.',
        ],
      ],
    },
    {
      // 段 4 —— 乘坐与着陆（S11-S14）
      sentences: [
        [
          'People inside ',
          { text: 'look out', dict: 'look out' },
          ' through the big ',
          { text: 'see-through front', part: 'window' },
          ' to see where they are going.',
        ],
        [
          'When it is time to come down, the boat ',
          { text: 'lands', dict: 'land' },
          ' on its ',
          { text: 'standing legs', part: 'skids' },
          '.',
        ],
        [
          'It can ',
          { text: 'land in a very small space', part: 'skids' },
          ' — a small field, the top of a tall building, or the back of a ship on the water.',
        ],
        [
          'This is the biggest difference from a sky boat with ',
          { text: 'fixed', dict: 'fixed' },
          ' wings: that one must run along a long road first, but this one can go up from almost any ',
          { text: 'flat', dict: 'flat' },
          ' place.',
        ],
      ],
    },
  ],
  flow: [
    {
      partIds: ['engine'],
      caption: 'The hot air machine starts to burn gas and makes the power for turning.',
      sentenceRef: 6,
    },
    {
      partIds: ['rotor'],
      caption: 'The turning wings on top spin around very fast and push air down.',
      sentenceRef: 4,
    },
    {
      partIds: ['body'],
      caption: 'The push up is stronger than the pull of the world, so the boat leaves the ground.',
      sentenceRef: 5,
    },
    {
      partIds: ['tail'],
      caption: 'The back turning stick pushes air sideways, so the boat does not turn around in circles.',
      sentenceRef: 8,
    },
    {
      partIds: ['window', 'rotor'],
      caption:
        'Through the see-through front, people watch where they go as the boat moves forward, backward, or side to side.',
      sentenceRef: 11,
    },
    {
      partIds: ['skids'],
      caption: 'The boat comes down and lands on its standing legs, even in a very small space.',
      sentenceRef: 12,
    },
  ],
  keyExpressions: [
    { text: 'take off straight up', partId: 'rotor' },
    { text: 'pushes air down', partId: 'rotor' },
    { text: 'the air pushes back up', partId: 'body' },
    { text: 'burns gas to make power', partId: 'engine' },
    { text: 'pushes air sideways', partId: 'tail' },
    { text: 'the wings tip a little', partId: 'rotor' },
    { text: 'look out through the see-through front', partId: 'window' },
    { text: 'lands on its standing legs', partId: 'skids' },
    { text: 'can land in a very small space', partId: 'skids' },
  ],
  color: '#F0923A',
}
