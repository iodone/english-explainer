import type { ThingData } from '../types'

/**
 * Shared Space House — International Space Station
 * 文章遵循 Munroe 约束：只用 ~1000 常用词。
 * segment 标注：part（短语级部件关联）+ dict（词条）。
 */
export const spaceStation: ThingData = {
  id: 'space-station',
  slug: 'space-station',
  simpleName: 'Shared Space House',
  realName: 'International Space Station',
  category: 'space',
  funFacts: [
    'It goes around our world sixteen times every day.',
    'At night you can see it from the ground — it looks like a bright star moving across the sky.',
    'The whole house is as big as a football field.',
  ],
  parts: [
    { id: 'modules', label: 'Living Rooms', realName: 'Habitation Modules', position: [0, 0, 0] },
    { id: 'solar', label: 'Sun Power Wings', realName: 'Solar Arrays', position: [4, 0, 0] },
    { id: 'truss', label: 'Back Bone', realName: 'Truss Structure', position: [2, 0, 0] },
    { id: 'dome', label: 'Look-Down Window', realName: 'Cupola', position: [0, -1, 0] },
    { id: 'radiators', label: 'Heat Get-Rid-Of Things', realName: 'Thermal Radiators', position: [2, 1, 0] },
    { id: 'arm', label: 'Long Grabber', realName: 'Canadarm2', position: [0, 1, 0] },
  ],
  article: [
    {
      // 段 1 —— 是什么（S0-S2）
      sentences: [
        [
          'This is a shared space house — a home that ',
          { text: 'flies around', dict: 'fly around' },
          ' our world, ',
          { text: 'far above', dict: 'far above' },
          ' the sky.',
        ],
        [
          'People from many different countries live and work here together, ',
          { text: 'carrying out', dict: 'carry out' },
          ' studies to learn new things about the world and the sky.',
        ],
        [
          'The house moves so fast that it ',
          { text: 'goes around', dict: 'go around' },
          ' the world sixteen times every day.',
        ],
      ],
    },
    {
      // 段 2 —— 为什么里面的人会飘（S3-S6）
      sentences: [
        [
          'Inside the house, people and things ',
          { text: 'float', dict: 'float' },
          ' all the time.',
        ],
        [
          'The house is always ',
          { text: 'falling toward', dict: 'fall toward' },
          ' the world, but it moves forward so fast that it keeps falling around the world and never ',
          { text: 'hits', dict: 'hit' },
          ' the ground.',
        ],
        [
          'When you fall together with the house, it ',
          { text: 'feels like', dict: 'feel like' },
          ' there is no up and no down.',
        ],
        [
          'At night, people ',
          { text: 'tie', dict: 'tie' },
          ' their sleeping bags to the wall in the ',
          { text: 'living rooms', part: 'modules' },
          ' so they do not ',
          { text: 'float away', dict: 'float away' },
          '.',
        ],
      ],
    },
    {
      // 段 3 —— 电与热的难题（S7-S10）
      sentences: [
        [
          'The house needs a lot of power, so it has big ',
          { text: 'sun power wings', part: 'solar' },
          ' that ',
          { text: 'face', dict: 'face' },
          ' the sun, and the light they catch ',
          { text: 'turns into', dict: 'turn into' },
          ' power.',
        ],
        [
          'The wings and the rooms are held together by a strong ',
          { text: 'back bone', part: 'truss' },
          ' that ',
          { text: 'runs across', dict: 'run across' },
          ' the house and carries power from one end to the other.',
        ],
        [
          'The machines and the people inside all make heat, and the house must ',
          { text: 'get rid of', dict: 'get rid of' },
          ' that heat — but far above the sky there is no air to ',
          { text: 'carry it away', dict: 'carry away' },
          '.',
        ],
        [
          'So the house has ',
          { text: 'heat get-rid-of things', part: 'radiators' },
          ' — big white boards that take in heat and ',
          { text: 'throw it away', dict: 'throw away' },
          ' into the cold, dark sky.',
        ],
      ],
    },
    {
      // 段 4 —— 工作与生活（S11-S14）
      sentences: [
        [
          'A ',
          { text: 'long grabber', part: 'arm' },
          ' outside the house ',
          { text: 'catches', dict: 'catch' },
          ' the ships that come to visit and moves big things around.',
        ],
        [
          'Through the ',
          { text: 'look-down window', part: 'dome' },
          ', people can watch the world turn below them.',
        ],
        [
          'In the ',
          { text: 'living rooms', part: 'modules' },
          ', they eat together, run tests, and talk to their families far down on the ground.',
        ],
        [
          'Some people stay in the house for many months before a ship brings them home.',
        ],
      ],
    },
  ],
  flow: [
    {
      partIds: ['solar'],
      caption: 'The sun power wings face the sun and turn its light into power for the whole house.',
      sentenceRef: 7,
    },
    {
      partIds: ['truss', 'modules'],
      caption: 'The power runs along the back bone to the living rooms, where it lights the rooms and runs the machines.',
      sentenceRef: 8,
    },
    {
      partIds: ['modules'],
      caption: 'The machines and the people in the rooms all make heat as they work and live.',
      sentenceRef: 9,
    },
    {
      partIds: ['radiators'],
      caption: 'The heat get-rid-of things take in the heat and throw it away into the cold, dark sky.',
      sentenceRef: 10,
    },
    {
      partIds: ['arm'],
      caption: 'The long grabber catches the ships that come to visit and moves big things around.',
      sentenceRef: 11,
    },
    {
      partIds: ['dome'],
      caption: 'Through the look-down window, people watch the world turn far below them.',
      sentenceRef: 12,
    },
  ],
  keyExpressions: [
    { text: 'falls around the world' },
    { text: 'turns light into power', partId: 'solar' },
    { text: 'runs across the house', partId: 'truss' },
    { text: 'tie their sleeping bags to the wall', partId: 'modules' },
    { text: 'get rid of the heat', partId: 'radiators' },
    { text: 'throw it away into the sky', partId: 'radiators' },
    { text: 'catches the ships that come to visit', partId: 'arm' },
    { text: 'watch the world turn below', partId: 'dome' },
  ],
  color: '#60A5FA',
}
