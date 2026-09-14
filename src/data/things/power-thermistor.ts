import type { ThingData } from '../types';

export const powerThermistor: ThingData = {
  id: 'power-thermistor',
  slug: 'power-thermistor',
  simpleName: 'The Heat Power Part',
  realName: 'Thermistor',
  category: 'power',
  color: '#2F4F4F',
  funFacts: [
    'This part changes how much power goes through it when it gets hot or cold.',
    'It is very small but helps keep big things from getting too hot.',
    'Some of these parts let more power through when they are warm.',
    'Others let less power through when they are warm.',
    'You can find them in things that need to watch how hot they are.',
    'They help keep other parts safe by telling them when to stop.'
  ],
  parts: [
    { id: 'body', label: 'Round Body', realName: 'Ceramic Bead', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Wire End', realName: 'Lead Terminal', position: [-0.2, 0, 0], finish: 'cold' },
    { id: 'top', label: 'Top Coat', realName: 'Epoxy Shell', position: [0, 0.06, 0], finish: 'titanium' },
    { id: 'inside', label: 'Inside Stuff', realName: 'Semiconductor Core', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'Wire One', realName: 'Anode Lead', position: [-0.12, 0, 0], finish: 'titanium' },
    { id: 'power', label: 'Wire Two', realName: 'Cathode Lead', position: [0.12, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a small part that feels how hot or cold things are.'],
        ['The ', { text: 'body', part: 'body' }, ' is a small round piece that holds the part that does the work.'],
        ['The ', { text: 'end', part: 'end' }, ' is a wire that joins it to the rest of the power line.'],
        ['The ', { text: 'top', part: 'top' }, ' is a hard coat that keeps it safe from water and hits.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is the stuff that changes how much power goes through.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' is the first wire that brings power in.'],
        ['The ', { text: 'power', part: 'power' }, ' is the second wire that takes power out.'],
        ['When the part gets hot, the ', { text: 'inside', part: 'inside' }, ' lets more or less power through.'],
        ['This change tells other parts how hot it is around the part.'],
        ['Many things use this to stop from getting too hot and breaking.'],
        ['The ', { text: 'body', part: 'body' }, ' keeps the inside safe so it can work for a long time.']
      ]
    }
  ],
  flow: [
    { partIds: ['plug', 'end'], caption: 'Power comes in through the first wire', sentenceRef: 5 },
    { partIds: ['inside', 'body'], caption: 'The inside feels how hot it is', sentenceRef: 7 },
    { partIds: ['top'], caption: 'The coat keeps the part safe', sentenceRef: 3 },
    { partIds: ['power'], caption: 'Power goes out changed by the heat', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'thermistor', partId: 'body' },
    { text: 'ceramic bead', partId: 'body' },
    { text: 'semiconductor core', partId: 'inside' },
    { text: 'epoxy shell', partId: 'top' }
  ]
};
