import type { ThingData } from '../types'

export const sun: ThingData = {
  id: 'sun',
  slug: 'sun',
  simpleName: 'The Day Star',
  realName: 'The Sun',
  category: 'power',
  funFacts: [
    'The day star loses a little weight every second as its fire turns stuff into light — the weight of 4,000,000 cars, every second, gone from the star forever — yet it is so heavy that, in all its life, it will use up only a small part of itself.',
    'The hot face is not still in any way: it turns once in about a month at its middle, faster at its top than at its ends, so the star is forever being wound and stretched by its own turning.',
    'If the day star were the size of a door, the earth beside it would be smaller than the end of your little finger — and the moon, smaller still, would be the head of a pin.',
  ],
  parts: [
    { id: 'fire-heart', label: 'fire heart', realName: 'Core (Fusion)', position: [0, 0, 0], finish: 'warning' },
    { id: 'slow-roads', label: 'slow roads', realName: 'Radiative Zone', position: [0, 0, 0], finish: 'titanium' },
    { id: 'hot-face', label: 'hot face', realName: 'Photosphere', position: [0, 0, 0], finish: 'hull' },
    { id: 'fire-arms', label: 'fire arms', realName: 'Corona & Prominences', position: [0.53, 0.32, 0], finish: 'cold' },
    { id: 'wind-breath', label: 'wind breath', realName: 'Solar Wind', position: [-0.85, 0.5, 0], finish: 'cold' },
    { id: 'light-road', label: 'straight road', realName: 'Sunlight Path (8 Minutes)', position: [1.5, -0.07, 0], finish: 'cold' },
    { id: 'light-catchers', label: 'light catchers', realName: 'Solar Panels', position: [2.44, 0.36, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The day star is the fire at the middle of our sky — a ball so wide that a hundred earths would fit across it, side by side — and it does not burn the way wood burns, with air: it presses its own stuff together, and the pressing itself makes heat and light.',
        ],
        [
          'It is a star — the only one near enough to see as a circle rather than a point of light: every other star in the night sky is a sun too, most with their own turning worlds, so far away that their light is years old when it reaches your eye.',
        ],
        [
          'And every warm thing you know is warmed from there: the bright side of a wall, the hot top of a road, the light in the room where you sit — none of that heat is made on earth; it is the day star’s fire, arriving.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The making happens in the ',
          { text: 'fire heart', part: 'fire-heart' },
          ', the middle of the ball, where the weight of the whole star above presses down from every side: there, the smallest pieces of stuff are pushed so close together that they join, two becoming one — and every joining gives off heat, so many joinings in every second that the middle of the day star is hotter than any fire we know how to make.',
        ],
        [
          'But the light born there cannot simply fly out: it must walk the ',
          { text: 'slow roads', part: 'slow-roads' },
          ' — star stuff pressed close together and ',
          { text: 'glowing', dict: 'glow' },
          ', deeper than the whole earth crossed many times, where a bit of light moves a shorter way than your finger is wide before it hits something and jumps away — in and out, turned and lost, for about 100,000 years, before it ever reaches the face of the star.',
        ],
        [
          'Then, at last, free: from the face of the star to your skin is one ',
          { text: 'straight road', part: 'light-road' },
          ' of eight minutes — the light touching you as you read this left the star while you were still finding your morning shoes.',
        ],
        [
          'The face itself, the ',
          { text: 'hot face', part: 'hot-face' },
          ', is a skin that ',
          { text: 'boils', dict: 'boil' },
          ': great turning ',
          { text: 'bubbles', dict: 'bubble' },
          ' of glowing stuff, each one as wide as a country, rising, giving off their light, cooling as they reach the top, and falling back again — the whole face of the star slowly turning over, like a great round sea of fire that never stops moving.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Out from the edge of the face reach the ',
          { text: 'fire arms', part: 'fire-arms' },
          ': great rings and bridges of glowing stuff, held up above the star by the same hidden force that pulls a magnet — some standing a hundred earths high, lasting days before falling back or flying off into space.',
        ],
        [
          'And it never stops breathing out: the ',
          { text: 'wind breath', part: 'wind-breath' },
          ', a never-ending flow of tiny fast bits, blows past all the worlds and on into the dark — when it strikes ours, it lights the far night skies with hanging green fires, and when it blows hard, it pushes power around in our own long wires, and whole cities have gone dark from it.',
        ],
        [
          'Every power people use is its power, second-hand: the green world catches its light and keeps it as food and wood; the old green world, pressed under the ground for ages, became the burning stuff of the fire rooms; its heat lifts the air, and the moving air turns the great wind wheels; and the ',
          { text: 'light catchers', part: 'light-catchers' },
          ' on the roofs drink it straight from the sky, no fire at all.',
        ],
        [
          'The day star is middle-aged: it has burned for about 5,000,000,000 years and has about the same left — and when the end comes it will not die quietly, but will grow, wider than the orbit of the near worlds, before it settles at last into a small, slow, slowly cooling star.',
        ],
      ],
    },
    {
      sentences: [
        [
          'People have watched it for all our time on earth: first as a god; then as the great clock of the fields — the oldest standing stones are set to catch its first light on the longest day — and only in the last few hundred years have we learned what it is: not a fire and not a god, but a pressed-together star, the nearest one, burning over our heads, all our lives.',
        ],
        [
          'For the earth does not just sit near the star — it rides around it: falling forever on a road bent by the star’s great weight, traveling more than 60,000 ',
          { text: 'miles', dict: 'mile' },
          ' an hour through the dark, round and round, carrying everything and everyone, all the days there are.',
        ],
        [
          'The fire rooms of the long wire, the wind wheels on the hills, the green fields, the wood in your walls, the food in your body, the light you are reading by — all of it is day-star fire, arriving — the one great power house at the middle of our sky.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['fire-heart'], sentenceRef: 3, caption: 'In the fire heart, the smallest pieces are pressed together — two becoming one, heat and light made.' },
    { partIds: ['slow-roads'], sentenceRef: 4, caption: 'The light walks the slow roads for 100,000 years, jumping again and again inside the glowing star stuff.' },
    { partIds: ['light-road'], sentenceRef: 5, caption: 'One straight road of eight minutes: the light falls on the turning earth.' },
    { partIds: ['hot-face'], sentenceRef: 6, caption: 'At the hot face it flies free — great turning bubbles giving off their light.' },
    { partIds: ['light-catchers'], sentenceRef: 9, caption: 'Green leaves and roof catchers drink it — every power on earth, second-hand.' },
  ],
  keyExpressions: [
    { text: 'the fire at the middle of our sky' },
    { text: 'a hundred earths would fit across it' },
    { text: 'their light is years old when it reaches your eye' },
    { text: 'two becoming one', partId: 'fire-heart' },
    { text: 'one straight road of eight minutes', partId: 'light-road' },
    { text: 'the whole face of the star slowly turning over', partId: 'hot-face' },
    { text: 'held up above the star by the same hidden force that pulls a magnet', partId: 'fire-arms' },
    { text: 'every power people use is its power, second-hand', partId: 'light-catchers' },
    { text: 'the one great power house at the middle of our sky' },
  ],
  color: '#FB923C',
}
