import type { ThingData } from '../types'

export const powerOutlet: ThingData = {
  id: 'power-outlet',
  slug: 'power-outlet',
  simpleName: 'The Power Hole',
  realName: 'Power outlet',
  category: 'power',
  funFacts: [
    'A power hole can give power to many different things at the same time if you use a special thing with many holes.',
    'The first power holes were made about 140 years ago when people started using power in their homes.',
    'In different countries, power holes look different and have different shapes.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Faceplate', position: [0, 0, 0], finish: 'hull' },
    { id: 'holes', label: 'holes', realName: 'Socket openings', position: [0, 0, 0.04], finish: 'cold' },
    { id: 'inside-part', label: 'inside part', realName: 'Contacts', position: [0, 0, -0.02], finish: 'titanium' },
    { id: 'wire-in', label: 'wire in', realName: 'Line wire', position: [0, -0.08, -0.04], finish: 'cold' },
    { id: 'ground-wire', label: 'ground wire', realName: 'Ground wire', position: [0, 0.08, -0.04], finish: 'cold' },
    { id: 'hold-part', label: 'hold part', realName: 'Mounting bracket', position: [0, 0, -0.06], finish: 'hull' },
    { id: 'safe-part', label: 'safe part', realName: 'Safety shutter', position: [0, 0, 0.02], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'power hole', dict: 'power-outlet' },
          '. It is a place on the wall where you can get power for things in your home.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'body', part: 'body' },
          ' is the flat part on the wall that you see every day.',
        ],
        [
          'The ',
          { text: 'holes', part: 'holes' },
          ' in the front are where you put in the end of a wire to get power.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Inside the body is the ',
          { text: 'inside part', part: 'inside-part' },
          ' — pieces of metal that touch the end of the wire.',
        ],
        ['These pieces of metal carry power from the wires in the wall to your thing.'],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'wire in', part: 'wire-in' },
          ' at the back brings power from the wires in the wall.',
        ],
        [
          'A ',
          { text: 'ground wire', part: 'ground-wire' },
          ' keeps people safe if something goes wrong.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'hold part', part: 'hold-part' },
          ' joins the power hole to the wall so it does not move.',
        ],
        [
          'Some power holes have a ',
          { text: 'safe part', part: 'safe-part' },
          ' that stops small things from going into the holes.',
        ],
      ],
    },
    {
      sentences: [
        ['Power holes are in every home and are one of the most used things.'],
        ['They help keep people safe by having a ground wire that takes away bad power.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body', 'holes'], sentenceRef: 1, caption: 'The body is on the wall; holes are where you put in the wire.' },
    { partIds: ['inside-part'], sentenceRef: 4, caption: 'Inside part: pieces of metal that touch the wire.' },
    { partIds: ['wire-in', 'ground-wire'], sentenceRef: 6, caption: 'Wire in brings power; ground wire keeps people safe.' },
    { partIds: ['hold-part', 'safe-part'], sentenceRef: 8, caption: 'Hold part joins it to the wall; safe part stops small things.' },
    { partIds: ['ground-wire'], sentenceRef: 10, caption: 'The ground wire takes away bad power.' },
  ],
  keyExpressions: [
    { text: 'power hole', partId: 'holes' },
    { text: 'place on the wall where you can get power', partId: 'holes' },
    { text: 'put in the end of a wire to get power', partId: 'holes' },
    { text: 'pieces of metal that touch the end of the wire', partId: 'inside-part' },
    { text: 'brings power from the wires in the wall', partId: 'wire-in' },
    { text: 'keeps people safe if something goes wrong', partId: 'ground-wire' },
    { text: 'stops small things from going into the holes', partId: 'safe-part' },
  ],
  color: '#F5F5F5',
}