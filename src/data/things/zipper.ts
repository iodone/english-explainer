import type { ThingData } from '../types'

export const zipper: ThingData = {
  id: 'zipper',
  slug: 'zipper',
  simpleName: 'Teeth Catcher',
  realName: 'Zipper',
  category: 'home',
  funFacts: [
    'When the zipper first came out, almost nobody wanted one — for twenty years it was sold as a strange little thing nobody needed.',
    'The name zipper came from the fast sound it makes when it closes.',
    'There are zippers made to keep water out — water suits use them, and they are harder to make than the whole rest of the suit.',
  ],
  parts: [
    { id: 'cloth-sides', label: 'Cloth Sides', realName: 'Tape', position: [0.3, 0.44, -0.08], finish: 'cold' },
    { id: 'teeth-rows', label: 'Teeth Rows', realName: 'Teeth', position: [0.6, 0.16, 0], finish: 'titanium' },
    { id: 'walker-box', label: 'Walker Box', realName: 'Slider', position: [-0.45, 0.22, 0], finish: 'warning' },
    { id: 'pull-ring', label: 'Pull Ring', realName: 'Pull Tab', position: [-0.45, -0.38, 0.16], finish: 'cold' },
    { id: 'inside-wall', label: 'Inside Wall', realName: 'Plow', position: [-0.45, 0, 0.22], finish: 'cold' },
    { id: 'top-stopper', label: 'Top Stopper', realName: 'Top Stop', position: [-1.28, 0.22, 0], finish: 'cold' },
    { id: 'bottom-stopper', label: 'Bottom Stopper', realName: 'Bottom Stop', position: [1.32, 0.22, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'zipper', dict: 'zipper' },
          ' is a row of little teeth that holds two edges of your jacket together — and opens again with one pull.',
        ],
        ['It is a machine you wear: many small metal parts, each doing a tiny job, all moving when you pull one ring.'],
        ['Before it came, coats and shoes closed with buttons — one button at a time.'],
      ],
    },
    {
      sentences: [
        [
          'Each side of the jacket carries a long row of ',
          { text: 'teeth', part: 'teeth-rows' },
          ', and the two rows face each other.',
        ],
        ['Every tooth has a high side and a low side.'],
        [
          'When a tooth from the left and a tooth from the right are pushed together, the high side of one drops into the low side of the other — and they hold on to each other.',
        ],
        ['One tooth by itself can hold only a little; a whole row of them, one inside the other, holds so much that you cannot pull the jacket apart by hand.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'walker box', part: 'walker-box' },
          ' is the small metal box that walks up and down the rows, pulled by the ',
          { text: 'pull ring', part: 'pull-ring' },
          '.',
        ],
        [
          'The box has a Y-shaped way through it: pull up, and it pushes every left tooth into a right tooth as they pass — the row comes out joined below.',
        ],
        [
          'Pull down, and the same box does the other job: a small ',
          { text: 'inside wall', part: 'inside-wall' },
          ' runs between the joined teeth and pushes them apart — two open rows come out above.',
        ],
        ['One box, two jobs — which job it does comes only from which way you pull.'],
      ],
    },
    {
      sentences: [
        [
          'At the two ends, a ',
          { text: 'top stopper', part: 'top-stopper' },
          ' and a ',
          { text: 'bottom stopper', part: 'bottom-stopper' },
          ' — two small metal blocks — stop the box from walking off the end of the rows.',
        ],
        [
          'The ',
          { text: 'cloth sides', part: 'cloth-sides' },
          ' under the teeth carry the pull: they run the whole way down the jacket and are joined to it, so the teeth never pull free.',
        ],
        ['Pull up to close, pull down to open — the smallest machine most people wear every day.'],
      ],
    },
  ],
  flow: [
    {
      partIds: ['teeth-rows'],
      caption: 'Left tooth drops into right tooth — high side into low side, all the way down.',
      sentenceRef: 5,
    },
    {
      partIds: ['walker-box'],
      caption: 'Pull the ring up, and the walker box pushes every left tooth into a right tooth.',
      sentenceRef: 8,
    },
    {
      partIds: ['inside-wall'],
      caption: 'Pull down, and the inside wall runs between the teeth and pushes them apart.',
      sentenceRef: 9,
    },
    {
      partIds: ['top-stopper', 'bottom-stopper'],
      caption: 'The stoppers block the box from walking off either end.',
      sentenceRef: 11,
    },
    {
      partIds: ['cloth-sides', 'pull-ring'],
      caption: 'The cloth sides join the teeth to the jacket, and the pull ring gives your hand a hold.',
      sentenceRef: 12,
    },
  ],
  keyExpressions: [
    { text: 'a row of teeth', partId: 'teeth-rows' },
    { text: 'high side and low side' },
    { text: 'drops into' },
    { text: 'hold on to each other' },
    { text: 'walks up and down', partId: 'walker-box' },
    { text: 'a Y-shaped way through' },
    { text: 'pushes them apart', partId: 'inside-wall' },
    { text: 'walking off the end', partId: 'top-stopper' },
    { text: 'pull up to close, pull down to open' },
  ],
  color: '#22D3EE',
}
