import type { ThingData } from '../types'

export const spaceFoodHeater: ThingData = {
  id: 'space-food-heater',
  slug: 'space-food-heater',
  simpleName: 'The Food Warmer',
  realName: 'Space food heater',
  category: 'space',
  funFacts: [
    'In the sky, there is no fire, so food must be heated in a different way.',
    'It uses very small things you can not see to make food hot.',
    'It can heat food in less than a minute, even when it is very cold outside.',
    'It was made because people in the sky can not cook like they do on the ground.',
    'Without this, people in the sky would have to eat cold food all the time.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Heating chamber', position: [0, 0, 0], finish: 'hull' },
    { id: 'door', label: 'door', realName: 'Access door', position: [0, 0, 0.1], finish: 'cold' },
    { id: 'inside', label: 'inside', realName: 'Heating plate', position: [0, -0.04, 0], finish: 'titanium' },
    { id: 'buttons', label: 'buttons', realName: 'Control panel', position: [0, 0.1, 0.06], finish: 'hull' },
    { id: 'light', label: 'light', realName: 'Indicator light', position: [0, 0.08, 0.1], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'food warmer', dict: 'space-food-heater' }, '. It makes food hot when people are up in the sky.'],
        ['The ', { text: 'body', part: 'body' }, ' is the big part that holds everything. It is made to work even when things around it are very different from home.'],
        ['The ', { text: 'door', part: 'door' }, ' opens and closes so you can put food inside. It must close very well so nothing falls out.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is where the food sits. It gets very hot very fast using things you can not see.'],
        ['The ', { text: 'buttons', part: 'buttons' }, ' on the front let you tell it how hot to make the food.'],
        ['The ', { text: 'light', part: 'light' }, ' tells you when the food is ready. It turns on when the heating is done.'],
      ],
    },
    {
      sentences: [
        ['When you want to eat, you put your food inside and close the door.'],
        ['Then you press the buttons and wait a short time.'],
        ['The things you can not see move around inside and make the food hot.'],
        ['When the light comes on, your food is ready to eat.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body holds everything inside.' },
    { partIds: ['door'], sentenceRef: 2, caption: 'The door opens to put food in.' },
    { partIds: ['inside'], sentenceRef: 3, caption: 'The inside gets hot very fast.' },
    { partIds: ['buttons', 'light'], sentenceRef: 4, caption: 'Buttons set the heat; light says when done.' },
  ],
  keyExpressions: [
    { text: 'food warmer', partId: 'body' },
    { text: 'door', partId: 'door' },
    { text: 'inside', partId: 'inside' },
    { text: 'buttons', partId: 'buttons' },
  ],
  color: '#FF4500',
}