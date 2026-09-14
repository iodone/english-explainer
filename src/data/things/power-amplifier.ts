import type { ThingData } from '../types'

export const powerAmplifier: ThingData = {
  id: 'power-amplifier',
  slug: 'power-amplifier',
  simpleName: 'The Power Maker',
  realName: 'Power amplifier',
  category: 'power',
  funFacts: [
    'It makes small power into big power so you can hear things from far away.',
    'It is used in many things like music players and talking machines and radios.',
    'When it works, it can get very hot because it uses a lot of power.',
    'Some of them are very small and fit inside a phone and some are very big and fill a whole room.',
    'It was first made a long time ago when people wanted to make sounds louder.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Chassis', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'Terminals', position: [0, -0.1, 0], finish: 'titanium' },
    { id: 'top', label: 'top', realName: 'Heat sink', position: [0, 0.1, 0], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'Circuit', position: [0, 0, 0.06], finish: 'cold' },
    { id: 'plug', label: 'plug', realName: 'Input', position: [-0.15, 0, 0], finish: 'titanium' },
    { id: 'power', label: 'power', realName: 'Power supply', position: [0.15, 0, 0], finish: 'warning' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'power maker', dict: 'power-amplifier' }, '. It is a thing that takes a small power and makes it into a big power.'],
        ['The ', { text: 'body', part: 'body' }, ' is the outside part that holds all the other parts. It is made of metal to keep the inside safe and to help take heat away.'],
        ['The ', { text: 'end', part: 'end' }, ' is the part where the big power comes out. You join the things that make sound or light to this part.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part that takes the heat away. When the body works, it gets very hot and the top keeps it from getting too hot.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is where the small power gets made into big power. It has many very small parts that work together to do this.'],
        ['The ', { text: 'plug', part: 'plug' }, ' is the part where the small power comes in. You join the thing that makes the small power to this part.'],
        ['The ', { text: 'power', part: 'power' }, ' is what gives the body the power it needs to work. It takes the power from the wall and turns it into the right kind of power.'],
      ],
    },
    {
      sentences: [
        ['When you want to make a small power into a big power, you join the small power to the plug.'],
        ['The inside gets the small power and makes it into a big power.'],
        ['The big power then goes out through the end to the thing that needs it.'],
        ['Now the thing that was quiet is loud or the thing that was dark is bright.'],
      ],
    },
  ],
  flow: [
    { partIds: ['plug', 'inside'], sentenceRef: 1, caption: 'Small power goes in; inside makes it big.' },
    { partIds: ['end'], sentenceRef: 2, caption: 'Big power goes out through the end.' },
    { partIds: ['body', 'top'], sentenceRef: 0, caption: 'Body holds all parts; top takes heat away.' },
    { partIds: ['power'], sentenceRef: 6, caption: 'Power gives the body what it needs to work.' },
  ],
  keyExpressions: [
    { text: 'power maker', partId: 'body' },
    { text: 'inside', partId: 'inside' },
    { text: 'plug', partId: 'plug' },
    { text: 'end', partId: 'end' },
  ],
  color: '#4B0082',
}