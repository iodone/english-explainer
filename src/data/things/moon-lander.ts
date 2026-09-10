import type { ThingData } from '../types'

export const moonLander: ThingData = {
  id: 'moon-lander',
  slug: 'moon-lander',
  simpleName: 'Moon Jumper',
  realName: 'Lunar Module',
  category: 'space',
  funFacts: [
    'Six moon jumpers landed on the moon; the bottom halves of all six, and three little moon cars, are still up there.',
    'The walls of the top room were so thin that a person could push them in with one finger — every bit of weight saved was air, water, or food for the way home.',
    'When the first moon walker came down the steps, he stopped on the last step, jumped back up to make sure he could reach it, and only then stepped off.',
  ],
  parts: [
    { id: 'bottom-room', label: 'Bottom Room', realName: 'Descent Stage', position: [0, -0.15, 0], finish: 'hull' },
    { id: 'top-room', label: 'Top Room', realName: 'Ascent Stage', position: [0, 0.32, 0], finish: 'titanium' },
    { id: 'landing-fire', label: 'Landing Fire', realName: 'Descent Engine', position: [0, -0.52, 0], finish: 'warning' },
    { id: 'up-engine', label: 'Up Engine', realName: 'Ascent Engine', position: [0, 0.66, 0], finish: 'warning' },
    { id: 'moon-legs', label: 'Moon Legs', realName: 'Landing Legs', position: [-0.72, -0.66, 0], finish: 'cold' },
    { id: 'moon-steps', label: 'Moon Steps', realName: 'Ladder', position: [0, -0.32, 0.68], finish: 'cold' },
    { id: 'gold-coat', label: 'Gold Coat', realName: 'Thermal Blanket', position: [0.55, -0.15, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['A moon jumper is a little two-room house that rides on top of a space fire ship, carries two people down to the ground of the moon, and then throws its own top half back up to the sky.'],
        [
          'The moon has no air: wings would find nothing to push against, and no boat could ',
          { text: 'float', dict: 'float' },
          ' down — so the moon jumper sits on fire instead.',
        ],
        [
          'The plan is two rooms: when the work is done, leave the ',
          { text: 'bottom room', part: 'bottom-room' },
          ' behind and ride the ',
          { text: 'top room', part: 'top-room' },
          ' home.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The room below is the work room — ',
          { text: 'fuel', dict: 'fuel' },
          ' and fire and boxes for carrying moon rock home — and it is built to be left behind.',
        ],
        [
          'In its side sits a little door, and below the door the ',
          { text: 'moon steps', part: 'moon-steps' },
          ' run down to the dust: the first steps anyone ever took on another world were down these.',
        ],
        ['The room above is the living room: small, round, and closed shut, with two little windows to look through and just room enough for two people standing in their space clothes.'],
        [
          'Wrapped around both rooms is a thin ',
          { text: 'gold coat', part: 'gold-coat' },
          ', a soft metal skin that turns the burning sun away by day and holds the little heat in by night.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Coming down is one long fall, and the ',
          { text: 'landing fire', part: 'landing-fire' },
          ' is the only hand that catches it: burn too little and the fall stays too fast, burn too long and the fuel runs out before the ground does.',
        ],
        [
          'The last of the fall is taken by the ',
          { text: 'moon legs', part: 'moon-legs' },
          ': long sticks with wide round feet that press into the dust and hold the house still.',
        ],
        ['The moon walkers climb down, work, sleep, and climb back up the same steps with their boxes of rock — and then it is time to go home.'],
        [
          'Then the ',
          { text: 'up engine', part: 'up-engine' },
          ' fires, the top half tears free, and the room below stays on the moon forever: table, step, and door of the visit — the only house anyone ever left standing on another world.',
        ],
      ],
    },
    {
      sentences: [
        ['Six of these houses stood on the moon, and the bottom halves of all six, and three little moon cars, are still up there.'],
        ['Every part was built light, because every bit of weight had to be pushed all the way up out of Earth’s pull: the walls of the rooms are thinner than the walls of a drink can, and it worked anyway.'],
        [
          'And on the way home, the flying room met the bigger ',
          { text: 'ship', dict: 'ship' },
          ' in the sky — a house joining a house, no ground under either — before the long fall back to Earth.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['bottom-room'], sentenceRef: 2, caption: 'Two rooms, one plan: the room below lands and stays, the room above flies home.' },
    { partIds: ['landing-fire'], sentenceRef: 7, caption: 'One long fall, caught by the landing fire — burn deep or soft.' },
    { partIds: ['moon-legs'], sentenceRef: 8, caption: 'The moon legs take the last soft touch.' },
    { partIds: ['moon-steps'], sentenceRef: 9, caption: 'Down the moon steps for the walk, and back up with the rock.' },
    { partIds: ['up-engine'], sentenceRef: 10, caption: 'The up engine fires — the bottom room stays behind forever.' },
  ],
  keyExpressions: [
    { text: 'a two-room house' },
    { text: 'nothing to push against' },
    { text: 'leave the bottom room behind' },
    { text: 'the only hand that catches it' },
    { text: 'the last of the fall' },
    { text: 'the first steps on another world' },
    { text: 'closed shut' },
    { text: 'thinner than the walls of a drink can' },
    { text: 'a house joining a house' },
  ],
  color: '#FBBF24',
}
