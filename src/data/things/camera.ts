import type { ThingData } from '../types'

export const camera: ThingData = {
  id: 'camera',
  slug: 'camera',
  simpleName: 'Light Catcher Box',
  realName: 'Camera',
  category: 'home',
  funFacts: [
    'The first cameras had no glass and no counters — just a dark room with one small hole, and the outside world painted itself on the wall, upside down.',
    'Old light catchers needed the light door to stay open for many seconds, so people had to sit very still — that is why nobody smiles in very old photos.',
    'Your eye is a camera too: it has a lens, a hole that gets bigger and smaller, and a light catcher at the back.',
  ],
  parts: [
    { id: 'light-bender', label: 'Light Bender', realName: 'Lens', position: [-0.95, 0.25, 0], finish: 'cold' },
    { id: 'light-hole', label: 'Light Hole', realName: 'Aperture', position: [-0.72, -0.32, 0], finish: 'cold' },
    { id: 'light-door', label: 'Light Door', realName: 'Shutter', position: [-0.5, 0.32, 0], finish: 'warning' },
    { id: 'light-catcher', label: 'Light Catcher', realName: 'Image Sensor', position: [0.45, 0, 0], finish: 'titanium' },
    { id: 'picture-keeper', label: 'Picture Keeper', realName: 'Memory Card', position: [0.3, -0.38, 0.3], finish: 'cold' },
    { id: 'back-screen', label: 'Back Screen', realName: 'Display', position: [0.66, 0.28, 0], finish: 'cold' },
    { id: 'dark-box', label: 'Dark Box', realName: 'Camera Body', position: [0, 0.75, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'camera', dict: 'camera' },
          ' is a dark box that catches light and keeps it as a picture.',
        ],
        ['Light jumps off everything around you — off faces, off trees, off your food — all day long.'],
        ['The camera takes a small piece of that jumping light, and remembers where every little bit of it landed.'],
      ],
    },
    {
      sentences: [
        [
          'At the front sits the ',
          { text: 'light bender', part: 'light-bender' },
          ' — a round piece of glass, a ',
          { text: 'lens', dict: 'lens' },
          ', that bends all the coming light to meet at one point.',
        ],
        ['When that point lands right on the back of the box, the picture is sharp; a little before or behind, everything comes out soft.'],
        [
          'Behind the glass, the ',
          { text: 'light hole', part: 'light-hole' },
          ' can open wide or close down to a small ring, letting in more light or less.',
        ],
        [
          'And the ',
          { text: 'light door', part: 'light-door' },
          ' opens only for a tiny part of a second — then it shuts.',
        ],
      ],
    },
    {
      sentences: [
        [
          'At the back, the ',
          { text: 'light catcher', part: 'light-catcher' },
          ' — a small plate with very, very many tiny light counters — sits waiting in the dark.',
        ],
        ['While the light door is open, every counter counts the light that falls on it and turns the count into a number.'],
        ['Each counter becomes one little box of the picture — the brighter the light, the higher the number.'],
        [
          'A picture is nothing but a very long line of numbers, and the box writes it onto the ',
          { text: 'picture keeper', part: 'picture-keeper' },
          ' — a card smaller than your little finger.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'dark box', part: 'dark-box' },
          ' itself must stay perfectly dark inside — any other light that gets in would wash the picture out.',
        ],
        [
          'Right after you take the picture, the ',
          { text: 'back screen', part: 'back-screen' },
          ' shows it to you at once, so you can see if it came out well.',
        ],
        ['Light in, numbers out, numbers back into light — that is the whole game.'],
      ],
    },
  ],
  flow: [
    {
      partIds: ['light-bender'],
      caption: 'Light comes in, and the glass bends it all to meet at one point.',
      sentenceRef: 3,
    },
    {
      partIds: ['light-hole'],
      caption: 'The light hole opens wide for a dark room, small for a bright day.',
      sentenceRef: 5,
    },
    {
      partIds: ['light-door'],
      caption: 'The light door opens for only a tiny part of a second.',
      sentenceRef: 6,
    },
    {
      partIds: ['light-catcher'],
      caption: 'Every tiny counter counts its light and turns it into a number.',
      sentenceRef: 8,
    },
    {
      partIds: ['picture-keeper', 'back-screen'],
      caption: 'The numbers are kept on the card, and the back screen shows the picture at once.',
      sentenceRef: 10,
    },
  ],
  keyExpressions: [
    { text: 'catches light' },
    { text: 'meet at one point', partId: 'light-bender' },
    { text: 'sharp or soft' },
    { text: 'opens wide or closes down', partId: 'light-hole' },
    { text: 'a tiny part of a second', partId: 'light-door' },
    { text: 'very many tiny light counters', partId: 'light-catcher' },
    { text: 'turns it into a number' },
    { text: 'a very long line of numbers', partId: 'picture-keeper' },
    { text: 'shows it to you at once', partId: 'back-screen' },
  ],
  color: '#2DD4BF',
}
