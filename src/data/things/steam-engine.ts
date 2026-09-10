import type { ThingData } from '../types'

export const steamEngine: ThingData = {
  id: 'steam-engine',
  slug: 'steam-engine',
  simpleName: 'Steam Horse',
  realName: 'Steam Engine',
  category: 'power',
  funFacts: [
    'One cup of water, turned all to steam, wants hundreds of times more room — that wanting, held inside a strong metal box, is where the hundred horses live.',
    'The first steam horses were so slow that people used them only for one thing, lifting water — yet they worked day and night in the dark of the mines, and people came from far away just to watch them breathe.',
    'The first great test of machines was won by a steam horse: five engines stood on a stretch of new rail, and the one that ran best, day after day, with the fewest stops and the least fire, set the shape of every train that followed.',
  ],
  parts: [
    { id: 'fire-box', label: 'Fire Box', realName: 'Firebox', position: [-0.85, -0.45, 0], finish: 'warning' },
    { id: 'water-room', label: 'Water Room', realName: 'Boiler', position: [0.05, 0.15, 0], finish: 'hull' },
    { id: 'smoke-pipe', label: 'Smoke Pipe', realName: 'Chimney', position: [-0.85, 0.15, 0], finish: 'cold' },
    { id: 'steam-door', label: 'Steam Door', realName: 'Slide Valve', position: [0.78, 0.3, 0], finish: 'cold' },
    { id: 'push-stick', label: 'Push Stick', realName: 'Piston', position: [1.05, 0.1, 0], finish: 'cold' },
    { id: 'turn-arm', label: 'Turn Arm', realName: 'Connecting Rod', position: [1.65, 0.08, 0], finish: 'cold' },
    { id: 'spin-wheel', label: 'Spin Wheel', realName: 'Flywheel', position: [1.95, -0.15, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'steam', dict: 'steam' },
          ' horse is a standing machine that eats fire, drinks water, and works like a hundred horses — without ever taking a step: it turns the push of hot steam into a turning wheel that other machines can hang on.',
        ],
        [
          'The whole idea is a closed box: water, heated in a strong metal room, turns to steam that wants hundreds of times more room than the water had — and in a closed box, wanting room becomes push.',
        ],
        [
          'Before this machine, the only turning power people had was the river: a water turner needs falling water, and mines and work shops cannot all sit beside a falling river — the steam horse puts falling water anywhere, and it never runs dry.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'fire box', part: 'fire-box' },
          ' is the stomach of the horse: a metal room where black stone that burns is fed through a door and set on fire, day and night.',
        ],
        [
          'The fire plays on the ',
          { text: 'water room', part: 'water-room' },
          ', a long closed metal tube lying above the fire, full of water, built thick and strong — for the steam inside pushes on its walls all day long.',
        ],
        [
          'At the working end sits the ',
          { text: 'push stick', part: 'push-stick' },
          ': a rod that fills a round room so well that steam cannot pass it, only push it — and the ',
          { text: 'steam door', part: 'steam-door' },
          ' beside it opens and closes, letting steam in first one side, then the other, so the stick runs out and home, out and home, all day.',
        ],
        [
          'But back-and-forth is not what most work wants: the ',
          { text: 'turn arm', part: 'turn-arm' },
          ', a rod from the stick to the edge of a wheel, is what changes it — the same idea that makes a two-wheel machine go when your legs push down and up.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'spin wheel', part: 'spin-wheel' },
          ' is the heavy one, a great metal wheel that does not want to stop once it is turning: it carries the machine over the dead spots between pushes, the way a spinning top will not fall.',
        ],
        [
          'The ',
          { text: 'smoke pipe', part: 'smoke-pipe' },
          ' stands over the fire room like a tall open door for smoke: the hotter the fire, the faster the smoke runs up the pipe, and the harder fresh air runs in to feed the fire — the pipe is what lets the horse eat fast.',
        ],
        [
          'The strangest part: the steam door is worked by the turning wheel itself, so the machine times its own breathing — each turn opens the door, each opening makes another turn.',
        ],
        [
          'From the spin wheel, the turning goes out to work: wood saws, cloth makers, water pushers, iron rollers — whatever a town had, the horse could drive it, one horse serving a hundred shops at once.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The first ones, three hundred years ago, were built to do one job: pushing water out of deep mine holes, where no river could help — and they ate so much fuel that they were only of use where the black stone was free.',
        ],
        [
          'Then better ones came that used half the fire for the same work, and the steam horse left the mines: it turned the work shops of whole cities, and its children grew wheels and ran away to become the ',
          { text: 'iron', dict: 'iron' },
          ' horses of the ',
          { text: 'rail', dict: 'rail' },
          ' lines.',
        ],
        [
          'Today most of the light in the world is still made this way: in power houses far away, water is still turned to steam, and steam still pushes — the wheel it turns now makes light, but the horse doing the work is the same.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['fire-box'], sentenceRef: 3, caption: 'The stomach: black stone on fire in a metal room, day and night.' },
    { partIds: ['water-room'], sentenceRef: 4, caption: 'The fire plays on a closed tube of water, built thick — the steam pushes all day.' },
    { partIds: ['steam-door', 'push-stick'], sentenceRef: 5, caption: 'The door lets steam in first one side, then the other, and the stick runs out and home.' },
    { partIds: ['turn-arm'], sentenceRef: 6, caption: 'The arm changes back-and-forth push into going-around turning.' },
    { partIds: ['spin-wheel'], sentenceRef: 7, caption: 'The heavy wheel keeps the turning between the pushes, over the dead spots.' },
  ],
  keyExpressions: [
    { text: 'eats fire and drinks water' },
    { text: 'works like a hundred horses' },
    { text: 'without ever taking a step' },
    { text: 'wanting room becomes push' },
    { text: 'puts falling water anywhere' },
    { text: 'out and home, out and home' },
    { text: 'the same idea that makes a two-wheel machine go' },
    { text: 'over the dead spots between pushes' },
    { text: 'times its own breathing' },
  ],
  color: '#DC2626',
}
