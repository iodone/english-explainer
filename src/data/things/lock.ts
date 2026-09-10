import type { ThingData } from '../types'

export const lock: ThingData = {
  id: 'lock',
  slug: 'lock',
  simpleName: 'Key Turner',
  realName: 'Pin-Tumbler Lock',
  category: 'home',
  funFacts: [
    'The falling-pin idea is very old — big wood doors hundreds and hundreds of years ago used the same hanging pins.',
    'A hotel’s one special key can open every door on a floor — its high spots and low spots work for many locks.',
    'A person who wants in can push each pin up and hold it there, one at a time; people who make locks make that game harder, but the game is as old as the lock.',
  ],
  parts: [
    { id: 'key-hole', label: 'Key Hole', realName: 'Keyway', position: [-0.75, -0.55, 0], finish: 'cold' },
    { id: 'pin-stacks', label: 'Pin Stacks', realName: 'Pin Tumblers', position: [0.15, 0.45, 0], finish: 'titanium' },
    { id: 'push-springs', label: 'Push Springs', realName: 'Springs', position: [0.15, 0.95, 0], finish: 'cold' },
    { id: 'turning-middle', label: 'Turning Middle', realName: 'Plug', position: [-0.2, -0.5, 0], finish: 'cold' },
    { id: 'door-bolt', label: 'Door Bolt', realName: 'Bolt', position: [1.15, 0.45, 0], finish: 'warning' },
    { id: 'the-key', label: 'The Key', realName: 'Key', position: [-1.5, -0.8, 0], finish: 'cold' },
    { id: 'outer-body', label: 'Lock Body', realName: 'Cylinder Shell', position: [0.75, -0.8, 0], finish: 'hull' },
  ],
  article: [
    {
      sentences: [
        [
          'A ',
          { text: 'lock', dict: 'lock' },
          ' is a small machine that can say only one word: no.',
        ],
        ['When you put in the right key, it turns its no into yes.'],
        ['It has no eyes and no ears, but it knows one key from hundreds.'],
      ],
    },
    {
      sentences: [
        [
          'Inside, a ',
          { text: 'turning middle', part: 'turning-middle' },
          ' stands in a ',
          { text: 'round body', part: 'outer-body' },
          '.',
        ],
        [
          'Five ',
          { text: 'pin groups', part: 'pin-stacks', dict: 'pin' },
          ' hang from the top.',
        ],
        [
          'Each one is a top pin over a bottom pin, and ',
          { text: 'push springs', part: 'push-springs' },
          ' hold them down.',
        ],
        ['The pins cross the line between the middle and the body — the middle is held like a foot in the door.'],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'key', part: 'the-key' },
          ' has a row of high spots and low spots on its edge.',
        ],
        [
          'Push it through the ',
          { text: 'key hole', part: 'key-hole' },
          ', and every spot pushes each pin up.',
        ],
        ['When the five bottom pins stand exactly at the line, nothing crosses it, and the turning middle turns free.'],
        ['A wrong key leaves one pin crossing the line, so the middle stays caught — this lock wants one key in a hundred.'],
      ],
    },
    {
      sentences: [
        [
          'Turn the key, and the ',
          { text: 'door bolt', part: 'door-bolt', dict: 'bolt' },
          ' slides back out of a hole in a metal plate.',
        ],
        ['The door opens.'],
        ['No computer, no power — only hills and springs, guarding every door in the world.'],
      ],
    },
  ],
  flow: [
    { partIds: ['push-springs'], caption: 'The springs press down all the time, so the pins always want to go home.', sentenceRef: 5 },
    { partIds: ['pin-stacks'], caption: 'Pins cross the line between the middle and the body, and the middle is caught.', sentenceRef: 6 },
    { partIds: ['the-key'], caption: 'The key’s high spots push each bottom pin up to the line.', sentenceRef: 8 },
    { partIds: ['turning-middle'], caption: 'All five pins reach the line at once, and the middle turns free.', sentenceRef: 9 },
    { partIds: ['door-bolt'], caption: 'The bolt slides back, and the door opens.', sentenceRef: 11 },
  ],
  keyExpressions: [
    { text: 'a row of high spots and low spots', partId: 'the-key' },
    { text: 'pushes each pin up', partId: 'pin-stacks' },
    { text: 'exactly at the line', partId: 'pin-stacks' },
    { text: 'held like a foot in the door', partId: 'turning-middle' },
    { text: 'turns free', partId: 'turning-middle' },
    { text: 'crosses the line', partId: 'pin-stacks' },
    { text: 'one key in a hundred', partId: 'the-key' },
    { text: 'slides back', partId: 'door-bolt' },
    { text: 'turns no into yes', partId: 'the-key' },
  ],
  color: '#F59E0B',
}
