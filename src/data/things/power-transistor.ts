import type { ThingData } from '../types'

export const powerTransistor: ThingData = {
  id: 'power-transistor',
  slug: 'power-transistor',
  simpleName: 'The Power Controller',
  realName: 'Power transistor',
  category: 'power',
  funFacts: [
    'It is one of the most important things ever made because it is in almost every machine now.',
    'It can turn power on and off very fast, much faster than a person can.',
    'It was first made a long time ago and has been made better and smaller many times.',
    'It is made of a special stuff that can let power go through it or stop it.',
    'It is so small that you can not see one without a special thing that makes things look bigger.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Package', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'Leads', position: [0, -0.12, 0], finish: 'titanium' },
    { id: 'inside', label: 'inside', realName: 'Die', position: [0, 0, 0.04], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'Heat spreader', position: [0, 0.08, 0], finish: 'titanium' },
    { id: 'plug', label: 'plug', realName: 'Gate pin', position: [0.08, 0.08, 0], finish: 'warning' },
    { id: 'bottom-part', label: 'bottom part', realName: 'Tab', position: [0, -0.08, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'power controller', dict: 'power-transistor' }, '. It is a very small thing that can turn power on and off very fast.'],
        ['The ', { text: 'body', part: 'body' }, ' is the outside part that holds the very small inside parts. It is made of hard stuff to keep the inside safe.'],
        ['The ', { text: 'end', part: 'end' }, ' is the part that sticks out of the body. These are the parts that join to the power lines and let power go in and out.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the very small part that does all the work. It is made of a special stuff that can let power go through or stop it.'],
        ['The ', { text: 'top', part: 'top' }, ' is the part at the top that takes away the heat. When power goes through the inside, it gets hot and the top keeps it cool.'],
        ['The ', { text: 'plug', part: 'plug' }, ' is the part that tells the inside to let power go through or stop. A very small power here can control a very big power.'],
        ['The ', { text: 'bottom part', part: 'bottom-part' }, ' is the part at the bottom that joins to the thing it is put on. It helps take the heat away too.'],
      ],
    },
    {
      sentences: [
        ['When you want to let power go through, you put a very small power on the plug.'],
        ['The inside sees this and opens up so the big power can go from one end to the other.'],
        ['When you want to stop the power, you take the small power off the plug.'],
        ['The inside closes and the big power can not go through any more.'],
      ],
    },
  ],
  flow: [
    { partIds: ['plug', 'inside'], sentenceRef: 1, caption: 'Small power on plug tells inside to open.' },
    { partIds: ['end'], sentenceRef: 2, caption: 'End lets big power go through when inside is open.' },
    { partIds: ['body', 'top', 'bottom-part'], sentenceRef: 0, caption: 'Body holds inside; top and bottom part take heat away.' },
  ],
  keyExpressions: [
    { text: 'power controller', partId: 'body' },
    { text: 'inside', partId: 'inside' },
    { text: 'plug', partId: 'plug' },
    { text: 'end', partId: 'end' },
  ],
  color: '#333333',
}