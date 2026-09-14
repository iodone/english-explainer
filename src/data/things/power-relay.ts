import type { ThingData } from '../types'

export const powerRelay: ThingData = {
  id: 'power-relay',
  slug: 'power-relay',
  simpleName: 'The Power On And Off Thing',
  realName: 'Power relay',
  category: 'power',
  funFacts: [
    'It was made a long time ago to control big power with a small signal.',
    'It is used in cars and houses and big buildings to turn things on and off safely.',
    'When it works, it makes a sound because it has a small moving part inside.',
    'It can control very strong power and still be safe to use with a small button.',
    'Some of them can switch on and off many times without breaking.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'Terminals', position: [0, -0.1, 0], finish: 'titanium' },
    { id: 'inside', label: 'inside', realName: 'Coil', position: [0, 0, 0.04], finish: 'cold' },
    { id: 'contact', label: 'contact', realName: 'Contact', position: [0, 0.05, 0.04], finish: 'warning' },
    { id: 'plug', label: 'plug', realName: 'Control pins', position: [0, 0.1, 0], finish: 'titanium' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Base', position: [0, -0.15, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'power on and off thing', dict: 'power-relay' }, '. It is a small thing that uses a little power to turn a strong power on or off safely.'],
        ['The ', { text: 'body', part: 'body' }, ' is the outside part that holds everything inside. It is made of hard stuff to keep the inside safe.'],
        ['The ', { text: 'end', part: 'end' }, ' is the bottom part where the power lines join. The strong power goes in one end and out the other when the thing is on.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is a long piece of thin wire wound round and round. When power goes through it, it makes a pull that moves a small part.'],
        ['The ', { text: 'contact', part: 'contact' }, ' is the small piece that moves. When the inside works, it touches two points and lets the strong power go through.'],
        ['The ', { text: 'plug', part: 'plug' }, ' is the part where the small power joins. A small power here tells the thing to turn the big power on or off.'],
        ['The ', { text: 'bottom part', part: 'bottom-part' }, ' is the flat part that holds the thing in place. It is usually put on a flat thing with small pieces.'],
      ],
    },
    {
      sentences: [
        ['When you want to turn something on, you send a small power to the plug.'],
        ['The inside gets the power and makes a pull that moves the contact so it touches the two points.'],
        ['Now the strong power can go through from one end to the other and the thing is on.'],
        ['When you want to turn it off, you stop the small power and the contact moves back and the strong power stops.'],
      ],
    },
  ],
  flow: [
    { partIds: ['plug', 'inside'], sentenceRef: 1, caption: 'Small power goes to plug and makes inside work.' },
    { partIds: ['contact'], sentenceRef: 2, caption: 'Contact moves and touches two points.' },
    { partIds: ['body', 'end'], sentenceRef: 0, caption: 'Body holds all parts; end lets strong power go through.' },
    { partIds: ['bottom-part'], sentenceRef: 6, caption: 'Bottom part holds thing in place.' },
  ],
  keyExpressions: [
    { text: 'power on and off thing', partId: 'body' },
    { text: 'contact', partId: 'contact' },
    { text: 'plug', partId: 'plug' },
    { text: 'strong power', partId: 'end' },
  ],
  color: '#808080',
}