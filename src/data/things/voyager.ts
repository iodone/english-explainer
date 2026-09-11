import type { ThingData } from '../types'

export const voyager: ThingData = {
  id: 'voyager',
  slug: 'voyager',
  simpleName: 'The Far Traveler',
  realName: 'Voyager 1',
  category: 'space',
  funFacts: [
    'The gold record carries 115 pictures, 55 ways of saying hello in many languages, and 90 minutes of music from around the world — a picture of one whole planet, made by the planet itself.',
    'The warm heart gives a little less power every year, so the ship has been turning off its parts one by one to save what is left; around 2030, the last light will go out.',
    'The far traveler will not come near another star for about 40,000 years — and the gold circle it carries will still be there after 1,000,000,000 years, long after the mountains of the Earth are gone.',
  ],
  parts: [
    { id: 'big-ear-dish', label: 'big ear dish', realName: 'High-Gain Antenna', position: [-0.55, 0.12, 0], finish: 'titanium' },
    { id: 'ten-side-box', label: 'ten-side box', realName: 'Equipment Bus', position: [0.10, 0, 0], finish: 'cold' },
    { id: 'warm-heart', label: 'warm heart', realName: 'RTG Power Source', position: [0.82, -0.32, 0], finish: 'warning' },
    { id: 'gold-record', label: 'gold record', realName: 'The Golden Record', position: [0.05, 0.13, 0.06], finish: 'hull' },
    { id: 'camera-eyes', label: 'camera eyes', realName: 'Vidicon Cameras', position: [0.28, 0.34, 0], finish: 'cold' },
    { id: 'little-fire-pushers', label: 'little fire pushers', realName: 'Thrusters', position: [0.05, -0.18, 0.12], finish: 'cold' },
    { id: 'long-arm', label: 'long arm', realName: 'Science Boom', position: [0.55, -0.20, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'In 1977, two small machines left the Earth on top of a great fire rocket, sent toward the far planets and beyond.',
        ],
        [
          'One of them, the far traveler, is still flying today, far past all the planets, whispering home across a dark that grows deeper every year.',
        ],
        [
          'Its face is a ',
          { text: 'big ear dish', part: 'big-ear-dish', dict: 'dish' },
          ' — a wide round ear, taller than a person, turned always toward home to catch the quiet radio calls from the Earth.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Behind the dish sits the ',
          { text: 'ten-side box', part: 'ten-side-box' },
          ', a flat box with 10 sides that runs the whole ship, following orders sent from home across the years.',
        ],
        [
          'On its side, held like a small round sign, is the ',
          { text: 'gold record', part: 'gold-record', dict: 'record' },
          ': a gold circle of sounds and pictures from the Earth, made for anyone who might find it one far day.',
        ],
        [
          'A ',
          { text: 'long arm', part: 'long-arm' },
          ' reaches out from the box, holding the ',
          { text: 'warm heart', part: 'warm-heart' },
          ' far from everything else — a small ball of stuff that stays hot by itself for years, turning that heat into power for the ship.',
        ],
        [
          'Near the heart, on a turning table, sit the ',
          { text: 'camera eyes', part: 'camera-eyes' },
          ', two round eyes that looked at planet after planet and sent the pictures home.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The trip had a short window: the four big planets stood in a line that happens once every 175 years, so one ship could swing past each of them, using the pull of one to speed it on to the next.',
        ],
        [
          'At each ',
          { text: 'planet', dict: 'planet' },
          ' it passed, the little ship turned its eyes toward it, took pictures, felt its pull, and sent everything home on its quiet radio.',
        ],
        [
          'In the empty space between the planets, its ',
          { text: 'little fire pushers', part: 'little-fire-pushers' },
          ' gave small pushes — just enough to turn the ship and point its ear at home.',
        ],
        [
          'It found moons with fire mountains, moons with ice under their skin, and rings of more little stones than anyone could ever count.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The planets are far behind it now; it has left the warm circle of the Sun and entered the great dark between the stars — the first machine from Earth ever to do so.',
        ],
        [
          'Its radio still ',
          { text: 'whispers', dict: 'whisper' },
          ' home — quieter every year — and a message now takes almost a whole day of flying to arrive.',
        ],
        [
          'Long after its heart goes cold and its ear can no longer hear us, it will keep going, carrying its gold circle of sounds out into the dark — a hello from a whole world to anyone out there.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['big-ear-dish'], sentenceRef: 2, caption: 'The big ear dish, always turned toward home, catches the quiet radio calls from the Earth.' },
    { partIds: ['ten-side-box'], sentenceRef: 3, caption: 'The ten-side box runs the whole ship, following orders sent from home across the years.' },
    { partIds: ['warm-heart'], sentenceRef: 5, caption: 'The warm heart stays hot by itself and turns that heat into power for the ship.' },
    { partIds: ['camera-eyes'], sentenceRef: 6, caption: 'The camera eyes look at planet after planet and send the pictures home.' },
    { partIds: ['little-fire-pushers'], sentenceRef: 9, caption: 'The little fire pushers give small pushes, just enough to point the ear at home.' },
  ],
  keyExpressions: [
    { text: 'a wide round ear turned always toward home', partId: 'big-ear-dish' },
    { text: 'a flat box with 10 sides that runs the whole ship', partId: 'ten-side-box' },
    { text: 'a small ball of stuff that stays hot and turns heat into power', partId: 'warm-heart' },
    { text: 'a gold circle of sounds and pictures from the Earth', partId: 'gold-record' },
    { text: 'two round eyes that looked at planet after planet', partId: 'camera-eyes' },
    { text: 'small pushes, just enough to turn the ship', partId: 'little-fire-pushers' },
    { text: 'the arm that holds the warm heart far from everything else', partId: 'long-arm' },
    { text: 'using the pull of one planet to speed on to the next', partId: 'big-ear-dish' },
    { text: 'the first machine from Earth to enter the great dark between the stars', partId: 'ten-side-box' },
  ],
  color: '#C9A227',
}
