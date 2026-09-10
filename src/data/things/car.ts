import type { ThingData } from '../types'

export const car: ThingData = {
  id: 'car',
  slug: 'car',
  simpleName: 'Road Horse',
  realName: 'Car',
  category: 'transport',
  funFacts: [
    'Each fire in a car is started by a jumping spark: power jumping across a space thinner than this page, hot enough to light the fuel-air cloud in less time than it takes light to cross the room.',
    'The first road horses were so strange to the road that some lands made a person walk ahead of each one with a red cloth on a stick, so the horses already there would not be afraid.',
    'A new kind of road horse is quietly winning: it keeps the wheels and the gear room but trades the fire rooms for a box that stores power, like a great battery — the fire is not gone, only moved far away, to the great power houses of the long wire.',
  ],
  parts: [
    { id: 'fire-rooms', label: 'fire rooms', realName: 'Engine Cylinders', position: [0.72, 0.25, 0], finish: 'warning' },
    { id: 'push-sticks', label: 'push sticks', realName: 'Pistons', position: [0.72, 0.5, 0], finish: 'cold' },
    { id: 'spin-stick', label: 'spin stick', realName: 'Crankshaft', position: [0.6, 0.05, 0], finish: 'cold' },
    { id: 'gear-room', label: 'gear room', realName: 'Gearbox', position: [0.15, 0, 0], finish: 'cold' },
    { id: 'road-feet', label: 'road feet', realName: 'Wheels & Tires', position: [0.75, -0.32, 0], finish: 'titanium' },
    { id: 'stop-shoes', label: 'stop shoes', realName: 'Brakes', position: [0.75, -0.32, 0.45], finish: 'cold' },
    { id: 'body-box', label: 'body box', realName: 'Car Body', position: [0, 0.1, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'A road horse is a room on wheels that carries people down any road it meets — no horses, no river, no rails: it carries its own fire inside, and the fire does the pushing.',
        ],
        [
          'That fire lives in the ',
          { text: 'fire rooms', part: 'fire-rooms' },
          ': small round metal rooms where ',
          { text: 'fuel', dict: 'fuel' },
          ' and air are pushed together and lit by a jumping ',
          { text: 'spark', dict: 'spark' },
          ', burning in quick flashes, one after another, all day long.',
        ],
        [
          'Each flash is a push: the hot air from the fire wants more room and shoves a ',
          { text: 'push stick', part: 'push-sticks' },
          ' down its own room — the same idea as the push stick of the steam horse, but here no water is turned to ',
          { text: 'steam', dict: 'steam' },
          ': the fire itself does the pushing, room after room, in a never-ending order.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Yet up-and-down is not what a car needs, so the ',
          { text: 'spin stick', part: 'spin-stick' },
          ' takes them all: a long turning rod, bent again and again from end to end, so that every down-shove becomes a bit of turning — and the turning goes on as long as the fires burn.',
        ],
        [
          'The turning next enters the ',
          { text: 'gear room', part: 'gear-room' },
          ': a box of toothed wheels that can make it strong and slow for starting, or light and fast for the open road, changed by the driver with one move of a hand.',
        ],
        [
          'The last wheels in the line are the ',
          { text: 'road feet', part: 'road-feet' },
          ': four round feet of metal dressed in thick rubber, the only parts of the whole machine that touch the road — everything the fire does ends as their push against the ground.',
        ],
        [
          'Stopping is the other half of the art: the ',
          { text: 'stop shoes', part: 'stop-shoes' },
          ' close on each spinning wheel when the driver’s foot asks, pressing hard until the turning slows to nothing — the power of moving, given up as heat.',
        ],
      ],
    },
    {
      sentences: [
        [
          'All of this hangs inside the ',
          { text: 'body box', part: 'body-box' },
          ': a metal skin bent round the people room, made to keep the rain out and the people in, and shaped with a round nose so the air parts easily around it at speed.',
        ],
        [
          'At night the car opens its eyes: two round lights throw light far down the road ahead, and small red eyes at the back tell the car behind what is about to come.',
        ],
        [
          'The quiet heart of the whole machine is the hand wheel: turn it a little, and the front feet turn far more, through arms and rods the driver never sees — so a small move of the hands points the whole running car, without the driver ever feeling its weight.',
        ],
        [
          'And the whole thing runs on timing: each fire is lit at just the right moment of the turning, so the car is never pushed once but pushed again and again, hundreds of pushes every second, faster than a person could count.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The first road horses kept the shape of the boxes the horses had pulled, with the fire machine hidden under a seat — and their makers told the power of the new machines in horses, because horses were what everyone understood.',
        ],
        [
          'We still speak of their power that way: a strong road horse today may hold the work of 300 sleeping horses under its skin, waiting for the foot to call them.',
        ],
        [
          'A metal room with its own fire, resting outside the house, ready to cross a whole land at the touch of a foot — the road horse is the machine that let anyone go where they wanted, when they wanted.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['fire-rooms'], sentenceRef: 1, caption: 'Fuel and air burn in quick flashes, room after room — the fire never sleeps while the car runs.' },
    { partIds: ['push-sticks'], sentenceRef: 2, caption: 'Each flash shoves its push stick down its room: straight fire push, no steam in between.' },
    { partIds: ['spin-stick'], sentenceRef: 3, caption: 'The bent spin stick takes in every down-shove and turns them into going-around turning.' },
    { partIds: ['gear-room'], sentenceRef: 4, caption: 'The gear room makes the turning strong and slow for starting, or light and fast for the road.' },
    { partIds: ['road-feet'], sentenceRef: 5, caption: 'The road feet push the ground — the only touch between the whole machine and the road.' },
  ],
  keyExpressions: [
    { text: 'carries its own fire inside' },
    { text: 'a room on wheels' },
    { text: 'no water, no steam' },
    { text: 'strong and slow for starting, or light and fast for the open road', partId: 'gear-room' },
    { text: 'the only parts that touch the road', partId: 'road-feet' },
    { text: 'pressing hard until the turning slows to nothing', partId: 'stop-shoes' },
    { text: 'hundreds of pushes every second' },
    { text: 'the work of 300 sleeping horses' },
    { text: 'go where they wanted, when they wanted' },
  ],
  color: '#F87171',
}
