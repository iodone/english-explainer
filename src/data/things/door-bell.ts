import type { ThingData } from '../types'

export const doorBell: ThingData = {
  id: 'door-bell',
  slug: 'door-bell',
  simpleName: 'The Door Sound',
  realName: 'Doorbell',
  category: 'home',
  funFacts: [
    'A door sound lets you know when someone is at the door without them having to call out.',
    'The first door sounds were just pieces of metal on a string that made a sound when you moved them.',
    'Some new door sounds can show you who is at the door on a small picture box.',
  ],
  parts: [
    { id: 'button', label: 'button', realName: 'Push button', position: [0, 0, 0.04], finish: 'warning' },
    { id: 'body', label: 'body', realName: 'Button housing', position: [0, 0, 0], finish: 'hull' },
    { id: 'sound-part', label: 'sound part', realName: 'Chime unit', position: [0, 0, -0.08], finish: 'hull' },
    { id: 'inside-part', label: 'inside part', realName: 'Striker', position: [0, 0, -0.06], finish: 'titanium' },
    { id: 'wire', label: 'wire', realName: 'Wiring', position: [0, -0.04, -0.04], finish: 'cold' },
    { id: 'look-part', label: 'look part', realName: 'Camera', position: [0, 0.04, 0.06], finish: 'cold' },
    { id: 'talk-part', label: 'talk part', realName: 'Speaker', position: [0, -0.04, 0.02], finish: 'titanium' },
  ],
  article: [
    {
      sentences: [
        [
          'This is a ',
          { text: 'door sound', dict: 'door-bell' },
          '. It makes a sound when someone is at the door.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'button', part: 'button' },
          ' at the door is what people push to make the sound.',
        ],
        [
          'The ',
          { text: 'body', part: 'body' },
          ' around the button keeps it safe from rain and wind.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'sound part', part: 'sound-part' },
          ' inside the house makes the sound you hear.',
        ],
        [
          'The ',
          { text: 'inside part', part: 'inside-part' },
          ' hits a piece of metal to make the sound.',
        ],
      ],
    },
    {
      sentences: [
        [
          'A ',
          { text: 'wire', part: 'wire' },
          ' goes from the button to the sound part to tell it when someone pushed the button.',
        ],
        ['Some door sounds use things that move through the air instead of a wire.'],
      ],
    },
    {
      sentences: [
        [
          'New door sounds have a ',
          { text: 'look part', part: 'look-part' },
          ' that can show you who is at the door.',
        ],
        [
          'They also have a ',
          { text: 'talk part', part: 'talk-part' },
          ' so you can talk to the person without opening the door.',
        ],
      ],
    },
    {
      sentences: [
        ['Door sounds are very good because you do not have to keep watching the door.'],
        ['You will always know when someone comes to visit.'],
      ],
    },
  ],
  flow: [
    { partIds: ['button', 'body'], sentenceRef: 1, caption: 'Button is what people push; body keeps it safe.' },
    { partIds: ['sound-part', 'inside-part'], sentenceRef: 4, caption: 'Sound part makes the sound; inside part hits metal.' },
    { partIds: ['wire'], sentenceRef: 6, caption: 'Wire tells the sound part when someone pushed the button.' },
    { partIds: ['look-part', 'talk-part'], sentenceRef: 8, caption: 'Look part shows who is there; talk part lets you talk.' },
    { partIds: ['sound-part'], sentenceRef: 10, caption: 'Door sounds — you always know when someone comes.' },
  ],
  keyExpressions: [
    { text: 'door sound', partId: 'sound-part' },
    { text: 'makes a sound when someone is at the door', partId: 'sound-part' },
    { text: 'what people push to make the sound', partId: 'button' },
    { text: 'keeps it safe from rain and wind', partId: 'body' },
    { text: 'hits a piece of metal to make the sound', partId: 'inside-part' },
    { text: 'show you who is at the door', partId: 'look-part' },
    { text: 'talk to the person without opening the door', partId: 'talk-part' },
  ],
  color: '#C0C0C0',
}