import type { ThingData } from '../types';

export const powerVaristor: ThingData = {
  id: 'power-varistor',
  slug: 'power-varistor',
  simpleName: 'The Power Push Part',
  realName: 'Varistor',
  category: 'power',
  color: '#2F4F4F',
  funFacts: [
    'This part can take in a lot of power very fast to keep other parts safe.',
    'When the power gets too high, it lets a lot of power go through it.',
    'After the big power jump is gone, it goes back to letting just a little power through.',
    'You can find them in power boxes that keep things safe from big power jumps.',
    'They are made of special stuff that changes how it works when power gets high.',
    'Without them, a big power jump could break many things in the house.'
  ],
  parts: [
    { id: 'body', label: 'Round Body', realName: 'Disc Element', position: [0, 0, 0], finish: 'hull' },
    { id: 'end', label: 'Wire End', realName: 'Lead Terminal', position: [-0.15, 0, 0], finish: 'cold' },
    { id: 'top', label: 'Top Coat', realName: 'Epoxy Coating', position: [0, 0.08, 0], finish: 'titanium' },
    { id: 'inside', label: 'Inside Stuff', realName: 'Metal Oxide Core', position: [0, 0, 0], finish: 'warning' },
    { id: 'plug', label: 'Wire One', realName: 'Anode Lead', position: [-0.1, 0, 0], finish: 'titanium' },
    { id: 'power', label: 'Wire Two', realName: 'Cathode Lead', position: [0.1, 0, 0], finish: 'cold' }
  ],
  article: [
    {
      sentences: [
        ['This is a part that keeps other things safe from big power jumps.'],
        ['The ', { text: 'body', part: 'body' }, ' is a small round piece with wires on both sides.'],
        ['The ', { text: 'end', part: 'end' }, ' is a wire that joins it to the power line.'],
        ['The ', { text: 'top', part: 'top' }, ' is a coat that keeps it safe from water and hits.'],
        ['The ', { text: 'inside', part: 'inside' }, ' is special stuff that changes when power gets high.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'plug', part: 'plug' }, ' is the first wire that brings power in.'],
        ['The ', { text: 'power', part: 'power' }, ' is the second wire that takes power out.'],
        ['When power is normal, the ', { text: 'inside', part: 'inside' }, ' lets just a little power through.'],
        ['When a big power jump comes, it lets a lot of power through very fast.'],
        ['This stops the big jump from going on to break other parts.'],
        ['After the jump is gone, the part goes back to letting just a little power through.']
      ]
    }
  ],
  flow: [
    { partIds: ['plug', 'end'], caption: 'Power comes in through the first wire', sentenceRef: 5 },
    { partIds: ['inside', 'body'], caption: 'The inside feels when power gets too high', sentenceRef: 7 },
    { partIds: ['top'], caption: 'The coat keeps the part safe', sentenceRef: 3 },
    { partIds: ['power'], caption: 'Power goes out safe for other parts', sentenceRef: 6 }
  ],
  keyExpressions: [
    { text: 'varistor', partId: 'body' },
    { text: 'disc element', partId: 'body' },
    { text: 'metal oxide core', partId: 'inside' },
    { text: 'epoxy coating', partId: 'top' }
  ]
};
