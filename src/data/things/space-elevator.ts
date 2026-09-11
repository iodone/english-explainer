import type { ThingData } from '../types'

export const spaceElevator: ThingData = {
  id: 'space-elevator',
  slug: 'space-elevator',
  simpleName: 'The Sky Rope',
  realName: 'Space Elevator',
  category: 'space',
  funFacts: [
    'A rope to the sky would need to be about 100,000,000 meters long — long enough to wrap around the whole world two and a half times.',
    'The idea is older than space flight itself: more than 130 years ago, a man who studied space travel wrote about it after seeing a great iron tower in a big city — and everyone told him it could never be done.',
    'If the rope ever broke, the part below the sky station would fall back down, but the station and everything above would fly away into space — which is why the rope must never break.',
  ],
  parts: [
    { id: 'turning-world', label: 'turning world', realName: 'Earth', position: [-0.60, -0.58, 0], finish: 'cold' },
    { id: 'ground-house', label: 'ground house', realName: 'Ground Station', position: [0.10, -0.50, 0], finish: 'cold' },
    { id: 'light-gun', label: 'light gun', realName: 'Power Beaming Station', position: [-0.36, -0.55, 0], finish: 'warning' },
    { id: 'climbing-car', label: 'climbing car', realName: 'Climber', position: [0.02, -0.12, 0], finish: 'cold' },
    { id: 'great-rope', label: 'great rope', realName: 'The Tether', position: [0.10, 0.20, 0], finish: 'titanium' },
    { id: 'sky-station', label: 'sky station', realName: 'Orbital Station', position: [0.30, 0.58, 0], finish: 'hull' },
    { id: 'space-rock', label: 'space rock', realName: 'Counterweight Asteroid', position: [0.13, 0.77, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'Riding to space on fire is loud, not safe, and burns a lot of money; but there is another way up — a quiet road that burns no ',
          { text: 'fuel', dict: 'fuel' },
          ' at all.',
        ],
        [
          'That road is a ',
          { text: 'great rope', part: 'great-rope' },
          ' — a line stronger than ',
          { text: 'steel', dict: 'steel' },
          ', standing from the ground straight up into the black sky, so tall that no flying machine could pass over it.',
        ],
        [
          'The whole tower hangs from the sky rather than resting on the ground — the ',
          { text: 'turning world', part: 'turning-world' },
          ' itself spins it like a stone on the end of a line, and that spin keeps the rope pulled hard and straight.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the bottom, on the ground by the sea, stands the ',
          { text: 'ground house', part: 'ground-house' },
          ', where travelers board and where the rope is held and cared for.',
        ],
        [
          'Riding up and down the rope is the ',
          { text: 'climbing car', part: 'climbing-car' },
          ', a small room with wheels that ',
          { text: 'grip', dict: 'grip' },
          ' the line on both sides and roll their way up, day and night.',
        ],
        [
          'Far above, where things can float around the whole world in a circle, the rope meets the ',
          { text: 'sky station', part: 'sky-station' },
          ' — a great ring that turns with the world, a door between the ground and the stars.',
        ],
        [
          'Beyond the station, higher still, sits a heavy ',
          { text: 'space rock', part: 'space-rock' },
          ', moved there to do just one job; its pull keeps the whole rope standing tall.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The car cannot carry fuel for such a long climb, so a ',
          { text: 'light gun', part: 'light-gun' },
          ' on the ground sends up a bright ',
          { text: 'beam', dict: 'beam' },
          ' that hits the car’s dark plates and turns into the power it needs.',
        ],
        [
          'Riding the beam, the car climbs at the speed of a fast train, reaching the sky station after about a week of rising without a stop.',
        ],
        [
          'Coming down is easier: the world’s own pull does the work, and the car just holds on and lets itself fall — slowly, safely, all the way home.',
        ],
        [
          'Because the rope swings with the spinning world, ships and planes must be told where it stands, so nothing ever sails or flies into the line.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Nothing like this has been built yet — the rope must be made of something stronger than anything we can make today — but the idea is sound, and the sky station could one day send ships to the stars with a soft push.',
        ],
        [
          'A ride on the sky rope would be easy and quiet: no fire, no falling pieces, just a slow climb into the black, with the whole turning world below.',
        ],
        [
          'For now, the road to the stars stays a dream put down on paper — but every great road, even this one, begins as a single line.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['great-rope'], sentenceRef: 1, caption: 'A great rope stronger than steel stands from the ground straight up into the black sky.' },
    { partIds: ['turning-world'], sentenceRef: 2, caption: 'The turning world spins the whole tower like a stone on the end of a line, keeping the rope pulled hard and straight.' },
    { partIds: ['climbing-car'], sentenceRef: 4, caption: 'The climbing car grips the line and rolls its way up, day and night.' },
    { partIds: ['sky-station'], sentenceRef: 5, caption: 'Far above, the rope meets the sky station, a door between the ground and the stars.' },
    { partIds: ['space-rock'], sentenceRef: 6, caption: 'Higher still, a heavy space rock keeps the whole rope standing tall.' },
  ],
  keyExpressions: [
    { text: 'a line stronger than steel, standing from ground to sky', partId: 'great-rope' },
    { text: 'the world we live on, whose spin keeps the rope pulled straight', partId: 'turning-world' },
    { text: 'the building where travelers board at the bottom', partId: 'ground-house' },
    { text: 'the small room that rides up and down the rope', partId: 'climbing-car' },
    { text: 'the great ring far above, a door to the stars', partId: 'sky-station' },
    { text: 'a heavy rock put high up to do one job, holding the rope tall', partId: 'space-rock' },
    { text: 'the ground machine that sends power up as light', partId: 'light-gun' },
    { text: 'a week of rising at the speed of a fast train', partId: 'climbing-car' },
    { text: 'no fire, no falling pieces, just a quiet climb', partId: 'great-rope' },
  ],
  color: '#5B8DEF',
}
