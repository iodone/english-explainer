import type { ThingData } from '../types'

export const satellite: ThingData = {
  id: 'satellite',
  slug: 'satellite',
  simpleName: 'Little Moon',
  realName: 'Satellite',
  category: 'space',
  funFacts: [
    'There are more little moons over your head right now than there are towns on the whole Earth — and every one of them was put there by a rocket.',
    'The first one, the size of a car and lighter than a person, did nothing but send one sound around the world for weeks — anyone with a radio could hear it passing.',
    'Some of them watch the world change: ice growing and going at the top and bottom of the Earth, fields turning green and brown as the year turns, water rising slowly at the edges of the land.',
  ],
  parts: [
    { id: 'sun-wings', label: 'Sun Wings', realName: 'Solar Panels', position: [1.05, 0.05, 0], finish: 'warning' },
    { id: 'brain-box', label: 'Brain Box', realName: 'Computer', position: [0, 0.25, 0], finish: 'titanium' },
    { id: 'watch-eye', label: 'Watch Eye', realName: 'Camera', position: [0, -0.62, 0], finish: 'cold' },
    { id: 'talk-dish', label: 'Talk Dish', realName: 'Communication Antenna', position: [0.25, 0.78, 0], finish: 'cold' },
    { id: 'star-eyes', label: 'Star Eyes', realName: 'Star Tracker', position: [-0.25, 0.6, 0], finish: 'cold' },
    { id: 'turn-wheels', label: 'Turn Wheels', realName: 'Reaction Wheels', position: [0, -0.12, 0], finish: 'cold' },
    { id: 'push-feet', label: 'Push Feet', realName: 'Thrusters', position: [0.2, -0.6, 0.2], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'satellite', dict: 'satellite' },
          ' is a little moon made by people: a machine that rides around the Earth, falling all the time and never coming down.',
        ],
        ['The answer is speed — it falls toward the Earth without stopping, but it also runs sideways so fast that the ground keeps falling away under it: a fall that never ends, and it never lands.'],
        ['Up there the sky is empty and hard: no air, no wind, no rain — only the sun’s light, burning hot on one side of the machine and ice cold on the other.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'sun wings', part: 'sun-wings' },
          ' spread out to both sides, catching the light and turning it into the running power for everything on board.',
        ],
        [
          'The ',
          { text: 'brain box', part: 'brain-box' },
          ' is the machine’s mind — a small computer that never sleeps, watching every part, following its orders from the ground, and deciding what to do next.',
        ],
        [
          'Under it, the ',
          { text: 'watch eye', part: 'watch-eye' },
          ' looks down day and night, and the Earth rolls past like a great turning picture — green land, blue water, white clouds, over and over.',
        ],
        [
          'The ',
          { text: 'talk dish', part: 'talk-dish', dict: 'dish' },
          ' swings to face the ground, carrying what the eye sees down to the people below — and bringing their orders back up.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Which way the machine points matters more than anything up there, and there are no hands to push it right: the ',
          { text: 'star eyes', part: 'star-eyes' },
          ' watch the fixed stars and tell the brain box which way is which.',
        ],
        [
          'When the machine must turn, its ',
          { text: 'turn wheels', part: 'turn-wheels' },
          ' spin faster or slower inside — and like a cat turning in the air, the machine turns the other way, without spending any push at all.',
        ],
        [
          'For the biggest turns there are ',
          { text: 'push feet', part: 'push-feet' },
          ' — tiny fires that breathe out gas for a moment — but every breath is spent and gone, so they are saved for the times that matter.',
        ],
        ['And no one can come to fix what breaks: the machine must carry its own extra parts, or find a way to work around the broken one, alone in the dark.'],
      ],
    },
    {
      sentences: [
        ['A little moon’s life is a slow fall: the thin air at the very top of the sky pushes against it, a tiny touch at a time, year by year, until it slides slowly down.'],
        ['When the end comes, most machines are brought down on their last day, to fall into the empty sea — a last order, a last fire, and a quiet end far from anywhere.'],
        ['A little moon that never stops falling, watching the whole world roll past — the quiet eye in the sky.'],
      ],
    },
  ],
  flow: [
    { partIds: ['sun-wings'], sentenceRef: 3, caption: 'The sun wings catch the light — running power for everything on board.' },
    { partIds: ['brain-box'], sentenceRef: 4, caption: 'The brain box: a small mind that never sleeps, running the whole machine.' },
    { partIds: ['watch-eye'], sentenceRef: 5, caption: 'The watch eye looks down — the Earth rolls past like a great turning picture.' },
    { partIds: ['talk-dish'], sentenceRef: 6, caption: 'The talk dish carries what the eye sees down to the ground — and brings orders back up.' },
    { partIds: ['turn-wheels'], sentenceRef: 8, caption: 'The turn wheels spin — the machine turns the other way, no push spent.' },
  ],
  keyExpressions: [
    { text: 'falling all the time and never coming down' },
    { text: 'a fall that never ends, and it never lands' },
    { text: 'a little moon made by people' },
    { text: 'the Earth rolls past like a great turning picture' },
    { text: 'like a cat turning in the air' },
    { text: 'every breath is spent and gone' },
    { text: 'a slow fall' },
    { text: 'alone in the dark' },
    { text: 'the quiet eye in the sky' },
  ],
  color: '#4F46E5',
}
