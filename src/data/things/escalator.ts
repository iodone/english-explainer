import type { ThingData } from '../types'

export const escalator: ThingData = {
  id: 'escalator',
  slug: 'escalator',
  simpleName: 'Moving Steps',
  realName: 'Escalator',
  category: 'transport',
  funFacts: [
    'The steps of a full-grown moving line are wider than a door and stronger than the floor of a room: each one is built to carry people standing on its very edge, day after day for tens of years, without bending.',
    'The hand rail is the hardest-working part of the machine: it wears out and is changed far more often than the steps, for hands pull and lean on it all day — and if it ever ran slower than the steps, riders would slowly begin to lean the wrong way, so its hidden wheels keep it running at exactly the speed of the steps — never faster, never slower, by even a hair.',
    'In the tallest buildings the lines run in crossing pairs — an up river and a down river — and in the biggest flying fields some run flat, with no rise at all, carrying people across a whole long hall: the same ring of steps, walking sideways.',
  ],
  parts: [
    { id: 'moving-steps', label: 'moving steps', realName: 'Steps', position: [0.25, 0.15, 0], finish: 'titanium' },
    { id: 'step-chain', label: 'step chain', realName: 'Step Chain', position: [0.15, -0.05, 0], finish: 'warning' },
    { id: 'motor-heart', label: 'motor heart', realName: 'Drive Motor', position: [2.1, 0.32, 0], finish: 'cold' },
    { id: 'bent-rails', label: 'bent rails', realName: 'Step Guide Rails', position: [0.15, 0.05, 0.24], finish: 'cold' },
    { id: 'under-room', label: 'under-room', realName: 'Machinery Pit', position: [-0.35, -0.15, 0], finish: 'cold' },
    { id: 'hand-rail', label: 'hand rail', realName: 'Handrail', position: [0.25, 0.62, 0.3], finish: 'cold' },
    { id: 'side-walls', label: 'side walls', realName: 'Balustrade', position: [0.25, 0.38, 0.3], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'The ',
          { text: 'moving steps', part: 'moving-steps' },
          ' are steps that walk: a never-ending line of steps going up or going down, so that a person standing still is carried — the way a boat is carried by a river — from one floor of a building to the next.',
        ],
        [
          'You meet them where many people must rise: in the tall stores of big cities, in the train houses, in the under-street ways — anywhere the walking would be too slow, and the waiting too long.',
        ],
        [
          'For they ask nothing and stop for no one: no door to wait for, no climbing with tired legs — you step on, and the river is already moving.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Under your feet the steps are not many stones but one joined ring: every step is joined to the next with moving arms, like the cars of a train, so the whole line moves together — step pulling step, around and around, without end.',
        ],
        [
          'The walking is done by the ',
          { text: 'motor', dict: 'motor' },
          ' heart: a turning machine hidden under the top of the line, which drives the ',
          { text: 'step chain', part: 'step-chain' },
          ' — a circle of joined metal pieces running from end to end — around two great wheels, one at each end of the steps.',
        ],
        [
          'Each step rides on small wheels set at its corners, and the wheels run along rails — two metal roads hidden under the line that hold each step flat under your feet and never let it tip, no matter how many people stand on one side.',
        ],
        [
          'The strangest moment of the ride is the top: the step under your feet does not simply end — it goes flat, drops, and slides away under the floor, and you walk off over it without ever seeing it go.',
        ],
      ],
    },
    {
      sentences: [
        [
          'This is the work of the ',
          { text: 'bent rails', part: 'bent-rails' },
          ': two rails under the line, bent in a special way — where they run side by side, each step stands up like a little box; where they turn down at the end, the step’s front wheels and back wheels are led down different paths, and the step lays itself flat, one edge sliding under its neighbor, a standing box turned into a thin plate.',
        ],
        [
          'Under the floor at each end lies the ',
          { text: 'under-room', part: 'under-room' },
          ': a short dark hall where the flat steps run around the end wheel, pass beneath the line itself, and travel back — hidden — to the far end, where the bent rails lift them up into standing steps again, just in time to rise out of the floor and meet the next rider.',
        ],
        [
          'So the same steps that carried you this morning also carried the hundred people behind you, and will carry a hundred more tonight: nothing is used up, nothing is worn away — the line only keeps turning its ring of steps, the same steps, over and over, all day.',
        ],
        [
          'Seen from the side, the whole animal shows at once: steps standing and rising on top, steps lying flat and running back below — one machine walking up and down at the same time, its two ends joined in the dark under the floor.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hand rail', part: 'hand-rail' },
          ' is the other half of the ride: a moving ring of dark rubber riding on the top edge of the side wall, turned by its own hidden wheels at exactly the speed of the steps — so your hand travels while your feet travel, and your whole body stays one piece.',
        ],
        [
          'The ',
          { text: 'side walls', part: 'side-walls' },
          ' are the skin of the machine: inside them live the ',
          { text: 'motor heart', part: 'motor-heart' },
          ', the bent rails, and the end wheels; on top of them runs the hand rail; and their still dark face stands beside you the whole way up, hiding in its inside the turning wheels that make the river run.',
        ],
        [
          'And that is the whole promise of the moving steps: a river that never sleeps, running up and down through the middle of the building, always half empty, always ready, asking nothing of anyone.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['motor-heart', 'step-chain'], sentenceRef: 4, caption: 'The motor heart turns the end wheel — the step chain pulls step after step, and the whole joined ring travels, up on top and back below.' },
    { partIds: ['moving-steps'], sentenceRef: 5, caption: 'Each step rides its corner wheels on the rails, held flat under the riders.' },
    { partIds: ['bent-rails'], sentenceRef: 7, caption: 'At the top, the bent rails part the wheels — the standing step lays itself flat and slides under the floor.' },
    { partIds: ['under-room'], sentenceRef: 8, caption: 'Through the under-room the flat steps run back, rise at the far end, and come up standing — ready for the next rider.' },
    { partIds: ['hand-rail'], sentenceRef: 11, caption: 'The hand rail runs at exactly the speed of the steps — your hand travels while your feet travel.' },
  ],
  keyExpressions: [
    { text: 'steps that walk' },
    { text: 'carried the way a boat is carried by a river' },
    { text: 'one joined ring', partId: 'step-chain' },
    { text: 'step pulling step, around and around' },
    { text: 'it goes flat, drops, and slides away under the floor', partId: 'moving-steps' },
    { text: 'a standing box turned into a thin plate', partId: 'bent-rails' },
    { text: 'nothing is used up' },
    { text: 'your hand travels while your feet travel', partId: 'hand-rail' },
    { text: 'a river that never sleeps' },
  ],
  color: '#34D399',
}
