import type { ThingData } from '../types'

export const blackHole: ThingData = {
  id: 'black-hole',
  slug: 'black-hole',
  simpleName: 'The Sky Trap',
  realName: 'Black Hole',
  category: 'space',
  funFacts: [
    'The first picture of a sky trap, made in 2019, showed the hot ring around the one at the heart of a far star city — a ring of light that had traveled 55,000,000 years to reach us, bent around a dark middle we can never see.',
    'If the sun were pressed into a trap, its no-return line would be a ball only a few miles across — and if the whole earth were pressed into one, that line would be small enough to hold between two fingers: what makes a trap is not how much stuff there is, but how close together it is pressed.',
    'The stuff of the hot ring turns so fast, and so close to the edge, that a clock riding on it would run slower than ours, enough for us to see — one of the few places in the sky where we can watch time itself slow down, and have.',
  ],
  parts: [
    { id: 'dark-heart', label: 'dark middle', realName: 'The Black Hole Itself', position: [0, 0, 0], finish: 'hull' },
    { id: 'no-return-line', label: 'no-return line', realName: 'Event Horizon', position: [0, 0, 0], finish: 'cold' },
    { id: 'hot-ring', label: 'hot ring', realName: 'Accretion Disk', position: [0, 0, 0], finish: 'warning' },
    { id: 'light-ring', label: 'light ring', realName: 'Photon Ring', position: [0, 0, 0], finish: 'titanium' },
    { id: 'jet-lines', label: 'jet lines', realName: 'Relativistic Jets', position: [0, 1, 0], finish: 'cold' },
    { id: 'space-bend', label: 'bent space', realName: 'Curved Spacetime', position: [0, -0.45, 0], finish: 'cold' },
    { id: 'star-dance', label: 'flying stars', realName: 'Stars Orbiting Sgr A*', position: [1, 0.3, 0.4], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The sky ',
          { text: 'trap', dict: 'trap' },
          ' is a place where space itself falls in — a hole in the floor of the sky so deep and so heavy that nothing that falls in can ever climb back out: not rock, not air, not even light.',
        ],
        [
          'It is not made of stuff but of weight: it is what is left when a great burning star has used up all its fire and falls in on itself, pressing smaller and smaller until the falling itself never stops.',
        ],
        [
          'No one has ever seen one, and no one ever will: a sky trap gives out no light and sends none back — it looks like a round piece of night, a hole cut out of the stars — so we find them by what they do to the things around them.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Every trap wears one quiet edge, the ',
          { text: 'no-return line', part: 'no-return-line' },
          ': cross it going in and every road leads further in — every rocket, every turn, every ',
          { text: 'ray', dict: 'ray' },
          ' of light points only down; from outside the line looks like nothing at all, but it is the one line in the sky that works only one way.',
        ],
        [
          'Just outside the edge, falling stuff makes the greatest light show there is: the ',
          { text: 'hot ring', part: 'hot-ring' },
          ' — dust and gas and broken stars, pulled in and spun around at nearly the speed of light, rubbing against itself until it burns white — a ring brighter than a whole city of stars.',
        ],
        [
          'The trap even wears a ring of its own light: light passing close by bends so hard that some rays go all the way around it, like cars going around a track — so that behind the dark circle we can see, bent round to meet us, the light of things on its far side: the ',
          { text: 'light ring', part: 'light-ring' },
          ', a bright circle drawn in the sky by the trap’s own pull.',
        ],
        [
          'And when it eats faster than the ring can carry, it throws long thin lines of stuff straight out from its ends — ',
          { text: 'jet lines', part: 'jet-lines' },
          ' faster than anything else we know, running on for 5,000 light years, marking their trap from one end of the sky to the other.',
        ],
      ],
    },
    {
      sentences: [
        [
          'But the deepest truth of the trap is not what it does to stuff — it is what it does to space: near the trap, space itself is bent, the way a heavy ball pushes down the middle of a held-out bed cover, so that everything near it rolls toward the middle.',
        ],
        [
          'Time bends too, and this is the strangest part of all: the nearer a clock stands to the edge, the slower it runs — a traveler who flew down close to the edge and came back would find the whole sky grown old around them, while their own watch had ticked only a few times.',
        ],
        [
          'Light must follow that ',
          { text: 'bent space', part: 'space-bend' },
          ': a ray passing by does not go straight past — it bends around, the way a ball rolls around the side of a bowl, and the stars behind the trap appear pulled and stretched and shown twice, as if we were looking through a dark round eye-glass made of nothing.',
        ],
        [
          'We found the nearest great one by waiting and watching: in the heart of our own star city — the great turning wheel of stars that we live inside — ',
          { text: 'stars fly around', part: 'star-dance' },
          ' a ',
          { text: 'dark middle', part: 'dark-heart' },
          ', year after year, faster than anything in our sky, and the thing they fly around is as heavy as 4,000,000 suns and gives no light at all.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Traps come in every size: some are born when one great star falls — a few times heavier than our sun — and the smallest of those are smaller than a city; the great ones at the hearts of star cities are as heavy as 10,000,000,000 suns, and grow all their lives.',
        ],
        [
          'Nothing that goes over the edge can come back or send word back: inside, every road points down — and down, and down — and no one knows what happens at the very bottom, for no answer can ever climb back up to tell us.',
        ],
        [
          'A round piece of night, wearing a ring of burning light, bending the stars behind it like a dark round eye-glass — the sky trap is the strangest thing the sky holds: a place made of nothing but weight, where even the ways of the sky fall in and do not come out.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['dark-heart'], sentenceRef: 1, caption: 'A great star uses up its fire and falls in on itself — the falling never stops.' },
    { partIds: ['no-return-line'], sentenceRef: 3, caption: 'Around the quiet edge, the no-return line: one way only.' },
    { partIds: ['hot-ring'], sentenceRef: 4, caption: 'Falling dust and gas spin into the hot ring — the greatest light show there is.' },
    { partIds: ['light-ring'], sentenceRef: 5, caption: 'Light passing close by bends around the dark circle — the stars behind it are pulled and shown twice.' },
    { partIds: ['jet-lines'], sentenceRef: 6, caption: 'When it eats too fast, jet lines shoot from its ends, 5,000 light years out.' },
  ],
  keyExpressions: [
    { text: 'a place where space itself falls in' },
    { text: 'not made of stuff but of weight' },
    { text: 'the one line in the sky that works only one way', partId: 'no-return-line' },
    { text: 'a ring brighter than a whole city of stars', partId: 'hot-ring' },
    { text: 'a bright circle drawn in the sky by the trap’s own pull', partId: 'light-ring' },
    { text: 'the way a heavy ball pushes down the middle of a held-out bed cover', partId: 'space-bend' },
    { text: 'the stars behind it appear pulled and stretched and shown twice' },
    { text: 'the nearer a clock stands to the edge, the slower it runs', partId: 'dark-heart' },
    { text: 'a place made of nothing but weight' },
  ],
  color: '#8B5CF6',
}
