import type { ThingData } from '../types';

export const powerPhaseDetector: ThingData = {
  id: 'power-phase-detector',
  slug: 'power-phase-detector',
  simpleName: 'The Phase Finder',
  realName: 'Phase Detector',
  category: 'power',
  color: '#3E8E7E',
  funFacts: [
    'The word phase tells you how far along a wave is at a point in time.',
    'In a house, three wires carry power and they are not all the same.',
    'One wire is live, one is the way back, and one is the safe path to the ground.',
    'This tool finds the live one without touching the metal inside.',
    'The light and the sound both help when the room is bright or loud.',
    'Never put your hand on a wire; let the tool do the work.'
  ],
  parts: [
    { id: 'probe', label: 'Touch Point', realName: 'Probe', position: [0, 0.35, 0.1], finish: 'cold' },
    { id: 'led-light', label: 'Show Light', realName: 'LED Light', position: [0, 0.2, 0.3], finish: 'warning' },
    { id: 'body', label: 'Body', realName: 'Body', position: [0, 0, 0], finish: 'hull' },
    { id: 'clip', label: 'Wire Clip', realName: 'Clip', position: [-0.3, -0.2, 0.05], finish: 'titanium' },
    { id: 'buzzer', label: 'Sound Box', realName: 'Buzzer', position: [0.2, -0.15, -0.1], finish: 'cold' },
    { id: 'switch', label: 'On-Off', realName: 'Switch', position: [0.35, 0.1, 0.15], finish: 'titanium' }
  ],
  article: [
    {
      sentences: [
        ['This small tool tells you which wire carries the power in a set of three.'],
        ['The ', { text: 'touch point', part: 'probe' }, ' goes near a wire and feels the field around it.'],
        ['The ', { text: 'body', part: 'body' }, ' holds all the parts and fits in one hand.'],
        ['The ', { text: 'show light', part: 'led-light' }, ' comes on when the wire is the one you are looking for.'],
        ['The ', { text: 'sound box', part: 'buzzer' }, ' makes a soft noise so you can work and listen at the same time.']
      ]
    },
    {
      sentences: [
        ['The ', { text: 'wire clip', part: 'clip' }, ' holds the other wire so both hands stay free.'],
        ['The ', { text: 'on-off', part: 'switch' }, ' button turns the tool on and off.'],
        ['You touch one wire at a time and watch for the light.'],
        ['If the light stays dark, that wire is not the live one.'],
        ['This helps people fix lights and wall plugs and not get hurt.'],
        ['It is small, but it keeps a person safe while they work.']
      ]
    }
  ],
  flow: [
    { partIds: ['probe'], caption: 'The touch point goes near a wire and feels the field around it', sentenceRef: 1 },
    { partIds: ['led-light'], caption: 'The show light comes on when the wire is the one you are looking for', sentenceRef: 3 },
    { partIds: ['buzzer'], caption: 'The sound box makes a soft noise so you can work and listen at the same time', sentenceRef: 4 },
    { partIds: ['clip'], caption: 'The wire clip holds the other wire so both hands stay free', sentenceRef: 5 }
  ],
  keyExpressions: [
    { text: 'touch point', partId: 'probe' },
    { text: 'show light', partId: 'led-light' },
    { text: 'sound box', partId: 'buzzer' },
    { text: 'wire clip', partId: 'clip' }
  ]
};
