import type { ThingData } from '../types'

export const homeAlarm: ThingData = {
  id: 'home-alarm',
  slug: 'home-alarm',
  simpleName: 'The Safe Sound',
  realName: 'Home alarm system',
  category: 'home',
  funFacts: [
    'It can hear when a door or window opens when it should not.',
    'Some of them can call for help even when you are not at home.',
    'It makes a very loud sound to scare away bad people.',
    'It can watch your home all day and all night without getting tired.',
    'The first ones were made more than one hundred years ago.',
  ],
  parts: [
    { id: 'body', label: 'body', realName: 'Main unit', position: [0, 0, 0], finish: 'hull' },
    { id: 'sound-part', label: 'sound part', realName: 'Siren', position: [0, 0.12, 0], finish: 'titanium' },
    { id: 'watch-part', label: 'watch part', realName: 'Sensor', position: [0, -0.08, 0.06], finish: 'cold' },
    { id: 'buttons', label: 'buttons', realName: 'Keypad', position: [0, 0.04, 0.08], finish: 'hull' },
    { id: 'light', label: 'light', realName: 'Status LED', position: [0, 0.1, 0.06], finish: 'titanium' },
    { id: 'talk-part', label: 'talk part', realName: 'Communication module', position: [0, -0.04, -0.06], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['This is a ', { text: 'safe sound', dict: 'home-alarm' }, '. It watches your home and makes a loud sound when something is wrong.'],
        ['The ', { text: 'body', part: 'body' }, ' is the main part that holds all the important pieces. It is usually put near the door.'],
        ['The ', { text: 'sound part', part: 'sound-part' }, ' makes a very loud noise when it finds something wrong. The noise is so loud that bad people run away.'],
        ['The ', { text: 'watch part', part: 'watch-part' }, ' can feel when a door or window opens. It is always watching, even when you are sleeping.'],
        ['The ', { text: 'buttons', part: 'buttons' }, ' let you turn it on and off. You need to know the right numbers to use it.'],
        ['The ', { text: 'light', part: 'light' }, ' shows if it is working. When it is on, the light tells you that your home is being watched.'],
        ['The ', { text: 'talk part', part: 'talk-part' }, ' can send a message to get help. Even if you are far away, it can still call for help.'],
      ],
    },
    {
      sentences: [
        ['When you leave home, you turn it on using the buttons.'],
        ['If someone tries to open a door or window, the watch part feels it right away.'],
        ['The sound part starts making its loud noise.'],
        ['At the same time, the talk part sends a message so people can come and help.'],
      ],
    },
  ],
  flow: [
    { partIds: ['body'], sentenceRef: 1, caption: 'The body holds all the important pieces.' },
    { partIds: ['sound-part'], sentenceRef: 2, caption: 'The sound part makes a very loud noise.' },
    { partIds: ['watch-part'], sentenceRef: 3, caption: 'The watch part feels when doors open.' },
    { partIds: ['buttons', 'light'], sentenceRef: 4, caption: 'Buttons turn it on; light shows it works.' },
    { partIds: ['talk-part'], sentenceRef: 6, caption: 'The talk part sends a message for help.' },
  ],
  keyExpressions: [
    { text: 'safe sound', partId: 'body' },
    { text: 'sound part', partId: 'sound-part' },
    { text: 'watch part', partId: 'watch-part' },
    { text: 'talk part', partId: 'talk-part' },
  ],
  color: '#DC143C',
}