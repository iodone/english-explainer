import type { ThingData } from '../types'

export const spaceWrench: ThingData = {
  id: 'space-wrench',
  slug: 'space-wrench',
  simpleName: 'The Turn Thing',
  realName: 'Space wrench',
  category: 'space',
  funFacts: [
    'In the sky, when you turn something, you also turn the other way.',
    'It must be held down or you would spin around when you use it.',
    'Some of them can change how wide they open to fit different things.',
    'It is one of the most used tools in the sky for fixing things.',
    'Without it, people could not put things together or take them apart.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Wrench body', position: [0, 0, 0], finish: 'hull' },
    { id: 'open-part', label: 'open part', realName: 'Jaw opening', position: [0, 0.08, 0], finish: 'cold' },
    { id: 'move-part', label: 'move part', realName: 'Adjustable jaw', position: [0.04, 0.08, 0], finish: 'titanium' },
    { id: 'handle', label: 'handle', realName: 'Handle', position: [0, -0.08, 0], finish: 'hull' },
    { id: 'grip', label: 'grip', realName: 'Grip surface', position: [0, -0.12, 0], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Tether ring', position: [0, -0.16, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'turn thing', dict: 'space-wrench' }, '. It turns round things to put them together or take them apart.'],
        ['The ', { text: 'body', part: 'body' }, ' is the strong part that holds everything. It must not break when you push hard on it.'],
        ['The ', { text: 'open part', part: 'open-part' }, ' is at the top. This is where the round thing goes that you want to turn.'],
        ['The ', { text: 'move part', part: 'move-part' }, ' can go in and out. This lets the open part get bigger or smaller to fit different things.'],
        ['The ', { text: 'handle', part: 'handle' }, ' is the long part you hold. It gives you a lot of power when you push on it.'],
        ['The ', { text: 'grip', part: 'grip' }, ' on the handle stops your hand from slipping. It is made of a soft stuff that feels nice.'],
        ['The ', { text: 'hold part', part: 'hold-part' }, ' at the bottom can be tied to something. This stops the wrench from floating away in the sky.'],
      ],
    },
    {
      sentences: [
        ['When you want to turn something, you put it in the open part.'],
        ['You move the move part until it holds the thing very hard.'],
        ['Then you push on the handle and the thing turns.'],
        ['In the sky, you must hold on to something with your other hand or you will turn too.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'open-part'], sentenceRef: 1, caption: 'Body is strong; open part holds the thing.' },
    { partIds: ['move-part'], sentenceRef: 3, caption: 'Move part changes how wide it opens.' },
    { partIds: ['handle', 'grip'], sentenceRef: 4, caption: 'Handle for pushing; grip stops slipping.' },
    { partIds: ['hold-part'], sentenceRef: 6, caption: 'Hold part stops it from floating away.' },
  ],
  keyExpressions: [
    { text: 'turn thing', partId: 'body' },
    { text: 'open part', partId: 'open-part' },
    { text: 'move part', partId: 'move-part' },
    { text: 'handle', partId: 'handle' },
  ],
  color: '#A9A9A9',
}