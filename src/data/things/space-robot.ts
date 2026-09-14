import type { ThingData } from '../types'

export const spaceRobot: ThingData = {
  id: 'space-robot',
  slug: 'space-robot',
  simpleName: 'The Ship Fixer',
  realName: 'Space Robot',
  category: 'space',
  funFacts: [
    'The first space robot arm flew on the space shuttle and could grab things as big as a bus.',
    'A space robot does not breathe, does not get cold, and can work for days without stopping.',
    'If a space robot loses its hold, it can float away — so every move must be slow and sure.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Main chassis', position: [0, 0.02, 0], finish: 'hull' },
    { id: 'camera-eye', label: 'camera eyes', realName: 'Stereo cameras', position: [0, 0.22, 0], finish: 'warning' },
    { id: 'grab-arm', label: 'grab arm', realName: 'Grapple arm', position: [-0.28, 0.04, 0], finish: 'titanium' },
    { id: 'tool-arm', label: 'tool arm', realName: 'Dexterous manipulator', position: [0.28, 0.04, 0], finish: 'cold' },
    { id: 'magnets', label: 'magnets', realName: 'Electromagnetic feet', position: [0, -0.20, 0], finish: 'cold' },
    { id: 'talk-stick', label: 'talk stick', realName: 'Communication antenna', position: [0, 0.34, 0], finish: 'cold' },
    { id: 'tool-box', label: 'tool box', realName: 'Tool storage bay', position: [0.22, -0.12, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'This ',
          { text: 'robot', dict: 'robot' },
          ' has a strong ',
          { text: 'body', part: 'body' },
          ' and works outside the ship, where it is too cold and dark for people.',
        ],
        ['It moves by itself, fixing things that break and building things that are needed.'],
        ['It never gets tired, never needs air, and can work all day and all night.'],
      ],
    },
    {
      sentences: [
        [
          'Two ',
          { text: 'camera eyes', part: 'camera-eye' },
          ' on its head help it see — not like your eyes, but like two small cameras.',
        ],
        [
          'Under its feet, strong ',
          { text: 'magnets', part: 'magnets' },
          ' hold it to the ship so it does not float away.',
        ],
        [
          'One arm is the ',
          { text: 'grab arm', part: 'grab-arm' },
          ' — it can hold things shut, from small parts to big boxes.',
        ],
        [
          'The other arm is the ',
          { text: 'tool arm', part: 'tool-arm' },
          ' — it can fix things, turn things, and pull things apart.',
        ],
      ],
    },
    {
      sentences: [
        [
          'On the side, a ',
          { text: 'tool box', part: 'tool-box' },
          ' holds all the ',
          { text: 'tools', dict: 'tool' },
          ' it needs for the job.',
        ],
        [
          'A ',
          { text: 'talk stick', part: 'talk-stick' },
          ' on top lets it talk to the people inside — they tell it what to do next.',
        ],
        ['In space, a robot must move slow and sure — one wrong push and it can float away for good.'],
        ['But most of the time, it knows what to do all by itself.'],
      ],
    },
    {
      sentences: [
        ['The first space robots could only hold things — they could not fix or build.'],
        ['Today, some can turn a screw, cut a wire, and even catch a flying part.'],
        ['One day, space robots will build whole stations while people watch from far away.'],
      ],
    },
  ],
  flow: [
    { partIds: ['camera-eye'], sentenceRef: 3, caption: 'Camera eyes help it see — like two small cameras.' },
    { partIds: ['magnets'], sentenceRef: 4, caption: 'Strong magnets hold it to the ship so it does not float away.' },
    { partIds: ['grab-arm'], sentenceRef: 5, caption: 'The grab arm can hold things shut, from small parts to big boxes.' },
    { partIds: ['tool-arm'], sentenceRef: 6, caption: 'The tool arm can fix things, turn things, and pull things apart.' },
    { partIds: ['tool-box'], sentenceRef: 7, caption: 'A tool box holds all the tools it needs for the job.' },
  ],
  keyExpressions: [
    { text: 'works outside the ship', partId: 'body' },
    { text: 'two small cameras help it see', partId: 'camera-eye' },
    { text: 'strong magnets hold it to the ship', partId: 'magnets' },
    { text: 'hold things shut, from small parts to big boxes', partId: 'grab-arm' },
    { text: 'fix things, turn things, and pull things apart', partId: 'tool-arm' },
    { text: 'talk to the people inside', partId: 'talk-stick' },
    { text: 'holds all the tools it needs', partId: 'tool-box' },
    { text: 'never gets tired, never needs air' },
    { text: 'one wrong push and it can float away for good' },
  ],
  color: '#A8D8B9',
}