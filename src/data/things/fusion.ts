import type { ThingData } from '../types'

export const fusion: ThingData = {
  id: 'fusion',
  slug: 'fusion',
  simpleName: 'The Star Bottle',
  realName: 'Fusion Reactor',
  category: 'power',
  funFacts: [
    'When the fire is first lit it glows pink; as it grows hotter it turns blue-white, like the hottest stars — you can read how hot a star bottle is just by its color.',
    'The biggest star bottle now being built will be as heavy as 10,000 cars, put together out of more than 1,000,000 pieces by many lands working as one.',
    'The sun is a real star bottle: it has done this same joining, over and over, for about 5,000,000,000 years, and it will keep going for about 5,000,000,000 more.',
  ],
  parts: [
    { id: 'ring-room', label: 'ring room', realName: 'Vacuum Vessel', position: [0.75, 0.17, 0], finish: 'hull' },
    { id: 'star-ring', label: 'star ring', realName: 'Plasma', position: [-0.75, 0.05, 0], finish: 'warning' },
    { id: 'hold-hands', label: 'hold hands', realName: 'Toroidal Field Coils', position: [1.14, 0, 0], finish: 'titanium' },
    { id: 'push-heart', label: 'push heart', realName: 'Central Solenoid', position: [0, 0.55, 0], finish: 'cold' },
    { id: 'heat-guns', label: 'heat guns', realName: 'Neutral Beam Heaters', position: [1.2, 0.5, 0.33], finish: 'cold' },
    { id: 'fire-catcher', label: 'fire catcher', realName: 'Divertor', position: [0, -0.28, -0.7], finish: 'cold' },
    { id: 'cold-box', label: 'cold box', realName: 'Cryostat', position: [0, -0.75, 1.09], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The star bottle is a machine built to make power the way the sun does: not by burning things but by joining them — pushing two tiny hearts of water together until they become one, and give off star-fire.',
        ],
        [
          'That joining is called ',
          { text: 'fusion', dict: 'fusion' },
          ': it is what lights the sun and every star in the sky — and a tiny bit of it makes heat past any fire.',
        ],
        [
          'Inside the bottle is not fire at all but ',
          { text: 'plasma', dict: 'plasma' },
          ': a glowing pink cloud of broken-apart gas, hotter than the middle of the sun — the same stuff stars are made of.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The fire sits inside the ',
          { text: 'ring room', part: 'ring-room' },
          ': an empty room shaped like a ring, longer around than a house is long, with all the air taken out — nothing inside but the fire itself.',
        ],
        [
          'Through the hole of the ring runs the ',
          { text: 'push heart', part: 'push-heart' },
          ': a great rod that pushes and pulls the fire without touching it, starting it turning and driving it around the ring, like a hand spinning a top.',
        ],
        [
          'The fire must never touch the walls, so the ring is held by ',
          { text: 'hold hands', part: 'hold-hands' },
          ': great ',
          { text: 'magnet', dict: 'magnet' },
          ' hands, colder than deep space, reaching around from every side to hold the fire in the very middle of the room.',
        ],
        [
          'To make the fire hotter still, ',
          { text: 'heat guns', part: 'heat-guns' },
          ' shoot hot stuff into it from the sides — fast-flying bits that drive the fire to 10 times the heat of the middle of the sun.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Held in the middle of the room, the fire makes a ',
          { text: 'star ring', part: 'star-ring' },
          ': a thin, bright ring of star-stuff going around and around — a little star pulled into the shape of a circle, hanging in the empty air.',
        ],
        [
          'As the fire burns, used-up bits of it must be taken away: they are pulled down to the ',
          { text: 'fire catcher', part: 'fire-catcher' },
          ', a set of plates at the bottom of the room that take the used stuff away, keeping the fire clean and the walls safe.',
        ],
        [
          'The whole machine sits inside the ',
          { text: 'cold box', part: 'cold-box' },
          ': a huge metal cover, colder than the coldest winter night, that keeps the magnet hands cold — for the stuff they are made of only works its great push and pull when it is colder than the coldest place on our world.',
        ],
        [
          'The point of all this is power: the star fire gives off great heat, and that heat can be caught, turned to steam, and used to make the power that runs our towns — sun-power, in a bottle, on Earth.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The biggest star bottle of all is now being built, piece by piece, by many lands working as one: a machine built to give back 10 times more power than it drinks.',
        ],
        [
          'The longest a star bottle has held its fire so far is 1,066 seconds — almost 18 minutes with a star held inside a machine.',
        ],
        [
          'And the fuel is nearly free: a small pool of sea water holds enough of the heavy water-stuff to power a person’s whole life — sun-fire from the ocean, free for the taking.',
        ],
      ],
    },
  ],
  keyExpressions: [
    { text: 'not by burning things but by joining them' },
    { text: 'enough of the heavy water-stuff to power a person’s whole life' },
    { text: 'an empty room shaped like a ring, longer around than a house is long', partId: 'ring-room' },
    { text: 'pushes and pulls the fire without touching it', partId: 'push-heart' },
    { text: 'colder than deep space', partId: 'hold-hands' },
    { text: 'drive the fire to 10 times the heat of the middle of the sun', partId: 'heat-guns' },
    { text: 'a little star pulled into the shape of a circle', partId: 'star-ring' },
    { text: 'keeping the fire clean and the walls safe', partId: 'fire-catcher' },
    { text: 'colder than the coldest winter night', partId: 'cold-box' },
  ],
  flow: [
    { partIds: ['ring-room'], sentenceRef: 3, caption: 'The fire sits inside the ring room — an empty ring-shaped room with all the air taken out, longer around than a house is long.' },
    { partIds: ['push-heart'], sentenceRef: 4, caption: 'Through the hole runs the push heart — the great rod that starts the fire turning and drives it around the ring, like a hand spinning a top.' },
    { partIds: ['hold-hands'], sentenceRef: 5, caption: 'Around it reach the hold hands — great cold magnet hands, holding the fire in the very middle so it never touches the walls.' },
    { partIds: ['star-ring'], sentenceRef: 7, caption: 'And there it is: the star ring — a thin, bright ring of star-stuff, a little star pulled into the shape of a circle.' },
    { partIds: ['fire-catcher'], sentenceRef: 8, caption: 'At the bottom, the fire catcher — plates that take the used-up stuff away, keeping the fire clean and the walls safe.' },
  ],
  color: '#C026D3',
}
