import type { ThingData } from '../types'

export const toaster: ThingData = {
  id: 'toaster',
  slug: 'toaster',
  simpleName: 'The Bread Browner',
  realName: 'Toaster',
  category: 'home',
  funFacts: [
    'The wires inside get about 3 times hotter than boiling water — hot enough to turn a cold piece of bread brown in under 3 minutes.',
    'The pop-up jump was once the newest thing in the kitchen: before it, people had to watch the wires themselves and pull the bread out by hand — often not fast enough.',
    'One of the first home bread browning boxes was sold more than 100 years ago, and it already had glowing wires, a spring, and a side handle — almost the same as the one in your kitchen today.',
  ],
  parts: [
    { id: 'steel-house', label: 'steel house', realName: 'Outer Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'bread-holes', label: 'bread holes', realName: 'Bread Slots', position: [0, 0.32, 0], finish: 'cold' },
    { id: 'hot-wires', label: 'hot wires', realName: 'Heating Elements', position: [0, 0.06, 0], finish: 'warning' },
    { id: 'spring-bed', label: 'spring bed', realName: 'Pop-up Carriage', position: [0, -0.12, 0], finish: 'titanium' },
    { id: 'hold-lever', label: 'hold lever', realName: 'Lever', position: [0.46, -0.05, 0], finish: 'cold' },
    { id: 'heat-watcher', label: 'heat watcher', realName: 'Thermostat', position: [-0.32, 0.05, 0], finish: 'cold' },
    { id: 'crumb-drawer', label: 'crumb drawer', realName: 'Crumb Tray', position: [0, -0.36, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        [
          'The fastest hot morning food in the house comes from a small steel friend that sits on the kitchen table: the ',
          { text: 'toaster', dict: 'toaster' },
          '.',
        ],
        [
          'Its whole body is a ',
          { text: 'steel house', part: 'steel-house', dict: 'steel' },
          ' — a bright, strong box that holds the heat in and keeps your hands safe.',
        ],
        [
          'You give it two pieces of ',
          { text: 'bread', dict: 'bread' },
          ', push a handle down, and a few quiet minutes later the bread comes back out warm, dry, and brown.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'bread holes', part: 'bread-holes' },
          ' on top are two long doors into the inside — wide enough for the bread, too narrow for a hand.',
        ],
        [
          'Down in each hole wait the ',
          { text: 'hot wires', part: 'hot-wires', dict: 'wire' },
          ': thin lines that turn red and ',
          { text: 'glow', dict: 'glow' },
          ' when the power flows through them, sending heat onto both faces of the bread.',
        ],
        [
          'The bread rests on a ',
          { text: 'spring bed', part: 'spring-bed' },
          ': held down while it cooks, then pushed up with a jump when the work is done.',
        ],
        [
          'On the side, a ',
          { text: 'hold lever', part: 'hold-lever' },
          ' pushes the bed down and sets the work going.',
        ],
      ],
    },
    {
      sentences: [
        [
          'When you push the lever, the power starts to flow, and the wires begin their quiet red work.',
        ],
        [
          'They get hot fast — hotter than boiling water — and slowly the outside of the bread turns hard, dry, and brown, beginning to smell the way a warm kitchen should.',
        ],
        [
          'All the while, the ',
          { text: 'heat watcher', part: 'heat-watcher' },
          ' follows the heat and the time and says when enough is enough.',
        ],
        [
          'When it says stop, the spring lets go, and the bed throws the warm ',
          { text: 'toast', dict: 'toast' },
          ' up into the air with a happy little jump.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Not everything leaves the box: little bits called ',
          { text: 'crumbs', dict: 'crumb' },
          ' fall down through the wires and gather at the bottom.',
        ],
        [
          'There they land in the ',
          { text: 'crumb drawer', part: 'crumb-drawer' },
          ', a quiet room under everything that you can pull out and empty when it gets too full.',
        ],
        [
          'That is the whole story: cold bread in, warm ',
          { text: 'toast', dict: 'toast' },
          ' out — one of the smallest machines in the house doing one of the nicest jobs.',
        ],
      ],
    },
  ],
  flow: [
    { partIds: ['bread-holes'], sentenceRef: 3, caption: 'Two long doors on top: the cold bread goes in, one piece in each hole.' },
    { partIds: ['hot-wires'], sentenceRef: 4, caption: 'The hot wires turn red and glow, sending heat onto both faces of the bread.' },
    { partIds: ['spring-bed'], sentenceRef: 5, caption: 'The spring bed holds the bread down in the warm middle of the box.' },
    { partIds: ['heat-watcher'], sentenceRef: 9, caption: 'The heat watcher follows the heat and the time and says when enough is enough.' },
    { partIds: ['crumb-drawer'], sentenceRef: 12, caption: 'The little bits fall down and gather in the crumb drawer, waiting to be cleaned out.' },
  ],
  keyExpressions: [
    { text: 'a bright, strong box that holds the heat in', partId: 'steel-house' },
    { text: 'two long doors on top where the bread goes in', partId: 'bread-holes' },
    { text: 'thin lines that turn red and glow', partId: 'hot-wires' },
    { text: 'held down while it cooks, then pushed up with a jump', partId: 'spring-bed' },
    { text: 'the handle on the side that starts the work', partId: 'hold-lever' },
    { text: 'follows the heat and the time and says when enough is enough', partId: 'heat-watcher' },
    { text: 'the quiet room where the little bits gather', partId: 'crumb-drawer' },
    { text: 'hotter than boiling water', partId: 'hot-wires' },
    { text: 'cold bread in, warm toast out', partId: 'spring-bed' },
  ],
  color: '#BC6C25',
}
