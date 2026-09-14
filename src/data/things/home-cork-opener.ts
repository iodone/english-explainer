import type { ThingData } from '../types';

export const homeCorkOpener: ThingData = {
  id: 'home-cork-opener',
  slug: 'home-cork-opener',
  simpleName: 'The Bottle Opener',
  realName: 'Corkscrew',
  category: 'home',
  color: '#8B4513',
  funFacts: [
    'This small spiral pulls the soft top out of a bottle.',
    'You turn the top and the spiral goes down into the soft top.',
    'The hook holds the bottle so it does not turn with your hand.',
    'Then you press the side arm down and the soft top comes out.',
    'It works on a top that is made of soft wood.',
    'You wash it by hand after use.'
  ],
  parts: [
    { id: 'spiral', label: 'Turn Spiral', realName: 'Spiral Worm', position: [0, 0.1, 0], finish: 'titanium' },
    { id: 'cap', label: 'Top Cap', realName: 'Top Knob', position: [0, 0.3, 0], finish: 'hull' },
    { id: 'grip', label: 'Hold Grip', realName: 'Handle', position: [0, 0.22, 0], finish: 'cold' },
    { id: 'collar', label: 'Ring Collar', realName: 'Collar', position: [0, 0.16, 0], finish: 'hull' },
    { id: 'hook', label: 'Bottle Hook', realName: 'Rim Hook', position: [-0.1, 0.02, 0], finish: 'warning' },
    { id: 'arm', label: 'Side Arm', realName: 'Lever Arm', position: [0.12, 0.05, 0], finish: 'hull' }
  ],
  article: [
    {
      sentences: [
        ['This small spiral pulls the soft top out of a bottle.'],
        ['The ', { text: 'turn spiral', part: 'spiral' }, ' is the long screw that goes into the soft top.'],
        ['The ', { text: 'top cap', part: 'cap' }, ' is the part you turn with your hand.'],
        ['The ', { text: 'hold grip', part: 'grip' }, ' is the part that stays in your hand.'],
        ['The ', { text: 'ring collar', part: 'collar' }, ' is the ring that joins the top to the spiral.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'bottle hook', part: 'hook' }, ' is the part that holds the top of the bottle.'],
        ['The ', { text: 'side arm', part: 'arm' }, ' is the part you press down.'],
        ['You turn the top cap and the spiral goes into the soft top.'],
        ['The hook holds the bottle so it does not turn.'],
        ['Then you press the side arm and the soft top comes out.'],
        ['You wash it by hand after use, because the bottle stays wet.']
      ]
    }
  ],
  flow: [
    { partIds: ['spiral'], caption: 'The turn spiral goes into the soft top', sentenceRef: 1 },
    { partIds: ['cap'], caption: 'The top cap is what you turn', sentenceRef: 2 },
    { partIds: ['grip'], caption: 'The hold grip stays in your hand', sentenceRef: 3 },
    { partIds: ['collar'], caption: 'The ring collar joins the top to the spiral', sentenceRef: 4 }
  ],
  keyExpressions: [
    { text: 'turn spiral', partId: 'spiral' },
    { text: 'top cap', partId: 'cap' },
    { text: 'hold grip', partId: 'grip' },
    { text: 'ring collar', partId: 'collar' }
  ]
};
