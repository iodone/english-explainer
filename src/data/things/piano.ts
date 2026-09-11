import type { ThingData } from '../types'

export const piano: ThingData = {
  id: 'piano',
  slug: 'piano',
  simpleName: 'The Big Music Box',
  realName: 'Piano',
  category: 'home',
  funFacts: [
    'The longest strings are longer than your arm — they sing the lowest notes, the ones you feel as much as hear.',
    'To make every string just right, a worker listens to each one of the more than 200 strings and turns a small metal piece, one by one, until the sound is true.',
    'Inside, the stretched strings pull on the wood as hard as a small car pulling the other way — the box has to be built strong.',
  ],
  parts: [
    { id: 'play-keys', label: 'white and black keys', realName: 'Keyboard', position: [0.31, 0.075, 0], finish: 'hull' },
    { id: 'jump-hammers', label: 'jumping hammers', realName: 'Hammers', position: [-0.12, 0.042, 0], finish: 'warning' },
    { id: 'song-strings', label: 'song strings', realName: 'Strings', position: [-0.12, 0.065, 0], finish: 'titanium' },
    { id: 'singing-box', label: 'singing box', realName: 'Soundboard & Rim', position: [-0.09, 0.06, 0], finish: 'cold' },
    { id: 'wood-lid', label: 'wood lid', realName: 'Lid', position: [-0.15, 0.195, 0], finish: 'cold' },
    { id: 'foot-pedals', label: 'foot pedals', realName: 'Pedals', position: [0.27, -0.335, 0.02], finish: 'cold' },
    { id: 'wood-legs', label: 'wood legs', realName: 'Legs', position: [0.02, -0.19, 0], finish: 'cold' },
  ],
  article: [
    {
      sentences: [
        ['Press a part of this big wood box and it answers with music: high notes, low notes, soft or loud.'],
        [
          'Its real name is a ',
          { text: 'piano', dict: 'piano' },
          ', and it has been the biggest thing in music for 300 years.',
        ],
        [
          'The surprise is inside: more than 200 ',
          { text: 'strings', dict: 'string' },
          ', each one stretched just right for its own note.',
        ],
      ],
    },
    {
      sentences: [
        [
          'The ',
          { text: 'white and black keys', part: 'play-keys' },
          ' are where every sound starts: press one, and the machine goes to work.',
        ],
        [
          'Under every key sits one of the ',
          { text: 'jumping hammers', part: 'jump-hammers', dict: 'hammer' },
          ', ready to jump the moment you press.',
        ],
        [
          'Press, and a hammer jumps up and hits one of the ',
          { text: 'song strings', part: 'song-strings' },
          ', which shakes very fast — that fast shaking is the very note you hear.',
        ],
        [
          'The shaking passes into the big ',
          { text: 'singing box', part: 'singing-box' },
          ', the wood body that takes a small sound and makes it big, warm, and full.',
        ],
      ],
    },
    {
      sentences: [
        [
          'Open the ',
          { text: 'wood lid', part: 'wood-lid' },
          ' and the sound flies out free — that is why players lift it up before they play for people.',
        ],
        [
          'Under the keys, your ',
          { text: 'foot pedals', part: 'foot-pedals', dict: 'pedal' },
          ' change the sound too: one makes it softer, and one lets every note ring on and on.',
        ],
        [
          'Three strong ',
          { text: 'wood legs', part: 'wood-legs' },
          ' hold the whole thing up and carry its weight down to the ground.',
        ],
        ['Long strings sing low and short strings sing high — now you know why the notes run from deep to high.'],
      ],
    },
    {
      sentences: [
        ['A good player can make it sound like rain, like running water, like 10 people singing at once.'],
        ['It has no motor and burns no fuel — just wood, metal, and string, and the power of your own two hands.'],
        ['That is the wonder of the big music box: 300 years old, and still the newest sound in the room.'],
      ],
    },
  ],
  flow: [
    { partIds: ['play-keys'], sentenceRef: 3, caption: 'The white and black keys are where every sound starts: press one.' },
    { partIds: ['jump-hammers'], sentenceRef: 4, caption: 'Under the key, a jumping hammer sits ready — press, and it jumps.' },
    { partIds: ['song-strings'], sentenceRef: 5, caption: 'The hammer hits a song string, and the string shakes very fast.' },
    { partIds: ['singing-box'], sentenceRef: 6, caption: 'The shaking passes into the singing box, and the sound comes out big and warm.' },
    { partIds: ['wood-lid', 'foot-pedals'], sentenceRef: 7, caption: 'Open the wood lid to let the sound fly free, and use the foot pedals to change it: softer, or ringing on and on.' },
  ],
  keyExpressions: [
    { text: 'where every sound starts', partId: 'play-keys' },
    { text: 'ready to jump the moment you press', partId: 'jump-hammers' },
    { text: 'shakes very fast — that is the note', partId: 'song-strings' },
    { text: 'takes a small sound and makes it big, warm, and full', partId: 'singing-box' },
    { text: 'open it and the sound flies out free', partId: 'wood-lid' },
    { text: 'softer, or ringing on and on', partId: 'foot-pedals' },
    { text: 'hold the whole thing up', partId: 'wood-legs' },
    { text: 'long strings sing low, short strings sing high' },
    { text: 'wood, metal, and string, and the power of your own two hands' },
  ],
  color: '#D4A373',
}
