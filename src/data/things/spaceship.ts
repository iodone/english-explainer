import type { ThingData } from '../types'

export const spaceship: ThingData = {
  id: 'spaceship',
  slug: 'spaceship',
  simpleName: 'The Sky Ship',
  realName: 'Spaceship',
  category: 'space',
  funFacts: [
    'The first spaceship to carry people went around the world in just 108 minutes — faster than any flying machine.',
    'A spaceship has to go more than 25 times faster than a flying machine to get into space.',
    'Some spaceships can be used more than once — they fly up, do their job, and land back on the ground.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Fuselage', position: [0, 0, 0], finish: 'hull' },
    { id: 'wings', label: 'wings', realName: 'Wings', position: [0, -0.04, 0], finish: 'cold' },
    { id: 'tail', label: 'tail', realName: 'Empennage', position: [-0.36, 0.10, 0], finish: 'cold' },
    { id: 'nose', label: 'nose', realName: 'Nose cone', position: [0.36, 0, 0], finish: 'titanium' },
    { id: 'windows', label: 'windows', realName: 'Viewports', position: [0.12, 0.08, 0.08], finish: 'cold' },
    { id: 'door', label: 'door', realName: 'Hatch', position: [-0.08, 0.08, 0.10], finish: 'titanium' },
    { id: 'engines', label: 'engines', realName: 'Rocket engines', position: [-0.34, -0.06, 0], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ship that flies up through the air and into ',
          { text: 'space', dict: 'spaceship' },
          ' — the empty place far above the world.',
        ],
        ['It has to go very, very fast to get away from the pull of the world.'],
        ['Once it is in space, there is no air, so it floats like a boat on a quiet sea.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the big round part that holds everything — the people, the food, and all the machines.',
        ],
        [
          'On the sides, ',
          { text: 'wings', part: 'wings' },
          ' help it fly when it comes back down through the air.',
        ],
        [
          'At the back, the ',
          { text: 'tail', part: 'tail' },
          ' helps it turn and stay going straight.',
        ],
        [
          'The ',
          { text: 'nose', part: 'nose' },
          ' at the front is shaped to cut through the air like a knife.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Small ',
          { text: 'windows', part: 'windows' },
          ' let the people inside see out into space.',
        ],
        [
          'A ',
          { text: 'door', part: 'door' },
          ' on the side lets people get in and out — in space, it has to be very shut so air cannot get out.',
        ],
        [
          'At the back, the ',
          { text: 'engines', part: 'engines' },
          ' make a very hot fire that pushes the ship up into the sky.',
        ],
        ['The fire is so hot and bright that it lights up the ground like it is day.'],
      ],
    },
    {
      sentences: [
        ['The first spaceships could only go up and come back down — they could not fly like a flying machine.'],
        ['Today, some spaceships can land on their feet like a person and be used again.'],
        ['One day, spaceships may carry people to other worlds — far, far away from our own.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 3, caption: 'The body holds everything — the people, the food, and all the machines.' },
    { partIds: ['wings'], sentenceRef: 4, caption: 'Wings help it fly when it comes back down through the air.' },
    { partIds: ['tail'], sentenceRef: 5, caption: 'The tail helps it turn and stay going straight.' },
    { partIds: ['nose'], sentenceRef: 6, caption: 'The nose is shaped to cut through the air like a knife.' },
    { partIds: ['engines'], sentenceRef: 9, caption: 'The engines make a very hot fire that pushes the ship up.' },
  ],
  keyExpressions: [
    { text: 'flies up through the air and into space', partId: 'body' },
    { text: 'has to go very, very fast', partId: 'engines' },
    { text: 'holds everything — the people and the food', partId: 'body' },
    { text: 'help it fly when it comes back down', partId: 'wings' },
    { text: 'helps it turn and stay going straight', partId: 'tail' },
    { text: 'cut through the air like a knife', partId: 'nose' },
    { text: 'make a very hot fire that pushes the ship up', partId: 'engines' },
    { text: 'floats like a boat on a quiet sea' },
    { text: 'lands on their feet like a person' },
  ],
  color: '#FFDAB9',
}