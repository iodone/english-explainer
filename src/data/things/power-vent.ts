import type { ThingData } from '../types'

export const powerVent: ThingData = {
  id: 'power-vent',
  slug: 'power-vent',
  simpleName: 'The Air Mover',
  realName: 'Power vent',
  category: 'power',
  funFacts: [
    'It can move a very large flow of air every minute.',
    'Some of them can feel how hot or cold the air is and turn on by themselves.',
    'They help stop rooms from getting too hot or too wet.',
    'Some are very quiet, so you can not even hear them working.',
    'They are used in homes, places where people work, and even in big flying things.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Vent housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'spinning-part', label: 'spinning part', realName: 'Fan blades', position: [0, 0, 0.04], finish: 'cold' },
    { id: 'cover', label: 'cover', realName: 'Vent cover', position: [0, 0, 0.06], finish: 'titanium' },
    { id: 'wire', label: 'wire', realName: 'Power wire', position: [0, -0.06, 0], finish: 'hull' },
    { id: 'feel-part', label: 'feel part', realName: 'Temperature sensor', position: [0, 0.04, 0.04], finish: 'cold' },
    { id: 'open-part', label: 'open part', realName: 'Louver', position: [0, 0.02, 0.06], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'air mover', dict: 'power-vent' }, '. It moves air in and out of a room to keep it nice.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the parts together. It goes into a hole in the wall or the top of a room.'],
        ['The ', { text: 'spinning part', part: 'spinning-part' }, ' is what actually moves the air. It goes around very fast and pushes air along.'],
        ['The ', { text: 'cover', part: 'cover' }, ' is on the outside. It has many small lines that let air through but stop things from going in.'],
        ['The ', { text: 'wire', part: 'wire' }, ' brings power from the wall. Without power, the spinning part can not go.'],
        ['The ', { text: 'feel part', part: 'feel-part' }, ' can tell how hot or cold the air is. When it is too hot, it can turn the vent on by itself.'],
        ['The ', { text: 'open part', part: 'open-part' }, ' can change which way the air goes. It can point the air up, down, or to the side.'],
      ],
    },
    {
      sentences: [
        ['When it turns on, the spinning part starts to go around very fast.'],
        ['It pulls air from one side and pushes it out the other side.'],
        ['The feel part watches the air and tells the vent when to start and stop.'],
        ['The open part makes the air go where it is needed most.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body goes into a hole in the wall.' },
    { partIds: ['spinning-part', 'cover'], sentenceRef: 2, caption: 'Spinning part moves air; cover keeps things out.' },
    { partIds: ['wire'], sentenceRef: 4, caption: 'The wire brings power from the wall.' },
    { partIds: ['feel-part', 'open-part'], sentenceRef: 5, caption: 'Feel part senses heat; open part changes direction.' },
  ],
  keyExpressions: [
    { text: 'air mover', partId: 'spinning-part' },
    { text: 'spinning part', partId: 'spinning-part' },
    { text: 'feel part', partId: 'feel-part' },
    { text: 'open part', partId: 'open-part' },
  ],
  color: '#87CEEB',
}