import type { ThingData } from '../types'

export const spaceCalculator: ThingData = {
  id: 'space-calculator',
  slug: 'space-calculator',
  simpleName: 'The Space Counting Thing',
  realName: 'Space calculator',
  category: 'space',
  funFacts: [
    'It was first used to help people know where they are and where they are going in space.',
    'It can do many hard number problems very fast that would take a person a long time.',
    'It helps people who go to space know how to get to the right place and come back safely.',
    'Some of them are very big and fill a whole room and some are very small and fit in your hand.',
    'It can also help us know what will happen next by looking at what has happened before.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Casing', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'end', realName: 'Keypad', position: [0, -0.12, 0], finish: 'cold' },
    { id: 'top', label: 'top', realName: 'Display', position: [0, 0.12, 0], finish: 'titanium' },
    { id: 'inside', label: 'inside', realName: 'Processor', position: [0, 0, 0.05], finish: 'cold' },
    { id: 'power', label: 'power', realName: 'Battery', position: [0, -0.15, 0.04], finish: 'warning' },
    { id: 'plug', label: 'plug', realName: 'Data port', position: [0.12, 0, 0], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'space counting thing', dict: 'space-calculator' }, '. It is a thing that can do many hard number problems very fast.'],
        ['The ', { text: 'body', part: 'body' }, ' is the outside part that holds all the other parts. It is made of hard stuff to keep the inside safe.'],
        ['The ', { text: 'end', part: 'end' }, ' is the part with all the small things you push to tell the body what to do. Each one is a different number or thing.'],
        ['The ', { text: 'top', part: 'top' }, ' is the flat part that shows you what the body is thinking. It shows numbers and words and pictures.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the part that does all the thinking. It is very fast and can do many number problems in a very short time.'],
        ['The ', { text: 'power', part: 'power' }, ' is what makes the body work. It can be a small thing that you can put in again or it can get power from a line.'],
        ['The ', { text: 'plug', part: 'plug' }, ' is the part that lets the body talk to other things. You can join it to another body to share what it knows.'],
      ],
    },
    {
      sentences: [
        ['When you want to do a number problem, you push the things on the end to put the numbers in.'],
        ['The inside gets the numbers and does the work very fast.'],
        ['The top then shows you the answer so you can see it.'],
        ['If you want to do more, you just push more things on the end and it will keep working for you.'],
      ],
    },
  ],
  flow: [
    { partIds: ['end', 'inside'], sentenceRef: 1, caption: 'End puts numbers in; inside does the work.' },
    { partIds: ['top'], sentenceRef: 2, caption: 'Top shows you the answer.' },
    { partIds: ['body', 'power'], sentenceRef: 0, caption: 'Body holds all parts; power makes it work.' },
    { partIds: ['plug'], sentenceRef: 6, caption: 'Plug lets it talk to other things.' },
  ],
  keyExpressions: [
    { text: 'space counting thing', partId: 'body' },
    { text: 'end', partId: 'end' },
    { text: 'top', partId: 'top' },
    { text: 'inside', partId: 'inside' },
  ],
  color: '#36454F',
}