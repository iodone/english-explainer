import type { ThingData } from '../types'

export const windmill: ThingData = {
  id: 'windmill',
  slug: 'windmill',
  simpleName: 'Wind Turner',
  realName: 'Wind Turbine',
  category: 'power',
  funFacts: [
    'Most of the new power machines built on Earth in the last few years are sun-and-wind machines — the windmill is one of the fastest-growing power makers in the world.',
    'At sea, the wind is stronger and more even than on land, so the biggest wind fields now stand in the water, held up by legs taller than the tallest trees.',
    'Even when the great wheel turns only twenty times in a minute, a blade tip can move faster than a car on the road.',
  ],
  parts: [
    { id: 'three-blades', label: 'Three Blades', realName: 'Rotor Blades', position: [-1.0, 1.7, 0], finish: 'warning' },
    { id: 'spin-heart', label: 'Spin Heart', realName: 'Rotor Hub', position: [-0.55, 1.15, 0], finish: 'cold' },
    { id: 'nose-box', label: 'Nose Box', realName: 'Nacelle', position: [1.5, 1.1, 0], finish: 'hull' },
    { id: 'gear-room', label: 'Gear Room', realName: 'Gearbox', position: [1.6, 0.55, 0], finish: 'cold' },
    { id: 'power-maker', label: 'Power Maker', realName: 'Generator', position: [1.6, 0.0, 0], finish: 'cold' },
    { id: 'tall-leg', label: 'Tall Leg', realName: 'Tower', position: [-0.35, -0.7, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'windmill', dict: 'windmill' },
          ' is a machine that turns moving air into power for your house: the wind pushes, the blades turn, and the wires carry it away.',
        ],
        ['The wind itself is the sun’s work: the sun warms the ground, the ground warms the air, warm air rises, and cooler air runs in to take its place — that running air is the wind.'],
        ['A windmill just stands in the river of moving air, the way a water wheel stands in a river of moving water.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'three blades', part: 'three-blades' },
          ' are really wings turned inside out: a bird’s wing pushes air down as it flies, but these blades sit still and let the moving air push them — sliding over each blade, the wind leaves a pull behind, and the pull turns the whole wheel.',
        ],
        [
          'All three blades meet at the ',
          { text: 'spin heart', part: 'spin-heart' },
          ', a round heart that turns with them and carries the turning back into the ',
          { text: 'nose box', part: 'nose-box' },
          '.',
        ],
        [
          'There, in the ',
          { text: 'gear room', part: 'gear-room' },
          ', small turning parts run between big ones, stepping the slow turn of the blades up to a fast, power-ready spin — a slow big turn becomes a fast small one.',
        ],
        [
          'The fast spin drives the ',
          { text: 'power maker', part: 'power-maker' },
          ', where turning metal and magnets push power into the wires — at heart, the same idea as the big power buildings.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'tall leg', part: 'tall-leg' },
          ' holds the whole turning machine high in the air, because up there the wind blows harder, with fewer stops and starts — near the ground, houses and trees slow it down.',
        ],
        ['The nose box can turn on the leg to face the wind, from any side it comes from; and when a storm brings too much, the blades can be turned to miss most of it, or brought to a full stop.'],
        ['Kept right, the blades can turn for twenty years, day and night, making power every hour the wind blows.'],
        ['One big machine can light hundreds of houses; a whole field of them, turning together on a hill, can light a whole town.'],
      ],
    },
    {
      sentences: [
        [
          'The old windmills, with ',
          { text: 'cloth', dict: 'cloth' },
          ' wings and wooden hearts, did smaller work: they moved water for the fields and turned heavy stone wheels to make food from seed.',
        ],
        ['The biggest ones today stand taller than a hundred men, and their blades are longer than a football field is wide.'],
        [
          'Three blades, a box of ',
          { text: 'gears', dict: 'gear' },
          ', a tall leg — set it in the wind, and the sky works for you.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['three-blades'], sentenceRef: 3, caption: 'Wings turned inside out: moving air slides over each blade and leaves a pull behind.' },
    { partIds: ['spin-heart'], sentenceRef: 4, caption: 'All three blades meet at the spin heart, which carries the turning back.' },
    { partIds: ['gear-room'], sentenceRef: 5, caption: 'Gears step the slow big turn up to a fast small one.' },
    { partIds: ['power-maker'], sentenceRef: 6, caption: 'Turning metal and magnets push power into the wires.' },
    { partIds: ['tall-leg'], sentenceRef: 7, caption: 'The tall leg holds it all high, where the wind blows harder.' },
  ],
  keyExpressions: [
    { text: 'turns moving air into power' },
    { text: 'that running air is the wind' },
    { text: 'the way a water wheel stands in a river of moving water' },
    { text: 'wings turned inside out', partId: 'three-blades' },
    { text: 'leaves a pull behind', partId: 'three-blades' },
    { text: 'a slow big turn becomes a fast small one', partId: 'gear-room' },
    { text: 'push power into the wires', partId: 'power-maker' },
    { text: 'the wind blows harder, with fewer stops and starts', partId: 'tall-leg' },
    { text: 'light a whole town' },
  ],
  color: '#06B6D4',
}
