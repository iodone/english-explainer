import type { ThingData } from '../types'

export const crane: ThingData = {
  id: 'crane',
  slug: 'crane',
  simpleName: 'The Tall Arm',
  realName: 'Tower Crane',
  category: 'transport',
  funFacts: [
    'A full-grown tall arm can rise higher than 60 floors and still swing loads as heavy as four cars through the air — yet the ground it stands on is small enough to fit inside a living room, held down by its own weight and a few great bolts.',
    'The machine builds itself taller: when the building passes it, workers add a climbing ring around the tower, and the machine uses its own hook to pull up the next piece of itself — growing one floor at a time, the only building machine that raises its own roof.',
    'The machine takes its name from a bird: the crane — a tall thin bird that stands for hours on one leg, neck straight up, watching the water. The bird was named first; the machine took the name later, as machines often take their names from living things.',
  ],
  parts: [
    { id: 'standing-tower', label: 'standing tower', realName: 'Mast', position: [0, 0.5, 0], finish: 'hull' },
    { id: 'turn-ring', label: 'turn ring', realName: 'Slewing Ring', position: [0, 1.58, 0], finish: 'cold' },
    { id: 'long-arm', label: 'long arm', realName: 'Jib (Working Boom)', position: [1, 1.78, 0], finish: 'titanium' },
    { id: 'back-arm', label: 'back arm', realName: 'Counter-Jib', position: [-0.6, 1.78, 0], finish: 'cold' },
    { id: 'hold-stones', label: 'hold stones', realName: 'Counterweight Blocks', position: [-1.15, 1.48, 0], finish: 'cold' },
    { id: 'hook-line', label: 'hook line', realName: 'Hoist Cable & Hook Block', position: [0.9, 0.9, 0], finish: 'warning' },
    { id: 'driver-room', label: 'driver room', realName: 'Operator Cab', position: [0.32, 1.52, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The tall arm is a lifting machine that stands still and reaches far: a great metal arm held high over a building place, raising the heavy things — iron, stone, and wood — that no person could lift with hands.',
        ],
        [
          'You meet it at every place where something big is being built: it stands over the growing building for months, day and night, swinging its ',
          { text: 'loads', dict: 'load' },
          ' through the air, again and again, all day.',
        ],
        [
          'For the hardest lifting jobs of the building world, it is the answer that needs the least: no legs, no wheels, no engine moving it from place to place — it simply stands in one spot and works, sometimes for years.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Under everything stands the ',
          { text: 'standing tower', part: 'standing-tower' },
          ': a tall open tower of iron rods and crossing bars, taller than the building it serves, wide at the bottom and narrow at the top, its empty middle letting the wind blow through — for a thing that cannot move its feet, standing still is a kind of holding on.',
        ],
        [
          'At the very top sits the ',
          { text: 'turn ring', part: 'turn-ring' },
          ': a great flat ring of turning parts that joins the tower to the arms — and when it turns, the whole top of the machine turns with it, arms and driver room and hanging loads, slowly swinging from side to side to drop each thing exactly where it is wanted.',
        ],
        [
          'From the turn ring reach two arms, one each way: the ',
          { text: 'long arm', part: 'long-arm' },
          ', stretching far out over the building, and the ',
          { text: 'back arm', part: 'back-arm' },
          ', reaching back the other way — the machine stands like a see-saw turning on a middle point.',
        ],
        [
          'On the back arm sit the ',
          { text: 'hold stones', part: 'hold-stones' },
          ': great blocks of ',
          { text: 'concrete', dict: 'concrete' },
          ', made heavier than the heaviest load the long arm will ever carry, so that when the arm lifts from one side, the other side pushes back, and the whole machine does not tip.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The driver sits in the ',
          { text: 'driver room', part: 'driver-room' },
          ': a small glass-sided box hanging just under the arm, high over everything, with long windows on every side — from there one person can see the whole building place at once, and every load, near or far.',
        ],
        [
          'The lifting itself is done by the ',
          { text: 'hook line', part: 'hook-line' },
          ': a long line of strong wire, running from a turning wheel up in the arm, down to a hanging ',
          { text: 'hook', dict: 'hook' },
          ' that grips the load.',
        ],
        [
          'To place a load, the driver does three things at once: the turn ring swings the arms through the sky, the hook line pulls the load up or lets it down, and a small wheeled car riding along the long arm carries the hook nearer or farther — three acts at once, one clean path through the air, ending in a slow, soft set-down.',
        ],
        [
          'And all the while, the machine is watching its own weight: the load pulls the long arm down, the hold stones pull the back arm down just as hard, and the ',
          { text: 'tower', dict: 'tower' },
          ' between them carries nothing but the pull of both — a see-saw standing on its end.',
        ],
      ],
    },
    {
      sentences: [
        [
          'When the building grows taller than the tower, the machine does something strange: it lifts itself.',
        ],
        [
          'A climbing ring is added around the tower, and the machine pulls its own top up through it, one floor at a time, then locks itself in place at the top and goes back to work.',
        ],
        [
          'And when the last wall is up and the roof is on, the tall arm must come down — piece by piece, brought down by a smaller machine like itself, until nothing is left standing over the finished building but the sky.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['standing-tower'], sentenceRef: 3, caption: 'Under everything stands the standing tower — the still middle that holds the whole machine up.' },
    { partIds: ['driver-room'], sentenceRef: 7, caption: 'The driver climbs into the driver room — from high over everything, one person sees the whole place.' },
    { partIds: ['hook-line'], sentenceRef: 8, caption: 'The hook line runs out and grips the load — the turning wheel winds it in, and up it comes.' },
    { partIds: ['turn-ring', 'long-arm'], sentenceRef: 9, caption: 'The turn ring swings the arms, and the wheeled car rides the long arm — the load crosses the sky and sets down soft as a leaf.' },
    { partIds: ['back-arm', 'hold-stones'], sentenceRef: 10, caption: 'The back arm and hold stones pull the other way — a see-saw standing on its end, never tipping.' },
  ],
  keyExpressions: [
    { text: 'a lifting machine that stands still and reaches far' },
    { text: 'like a see-saw turning on a middle point', partId: 'back-arm' },
    { text: 'made heavier than the heaviest load', partId: 'hold-stones' },
    { text: 'three acts at once, one clean path through the air', partId: 'turn-ring' },
    { text: 'the whole building place at once', partId: 'driver-room' },
    { text: 'a hanging hook that grips the load', partId: 'hook-line' },
    { text: 'watching its own weight', partId: 'standing-tower' },
    { text: 'it lifts itself' },
    { text: 'piece by piece' },
  ],
  color: '#38BDF8',
}
