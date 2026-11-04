import { iron } from '../../../../../src/data/things/iron.ts'
import { ironDict } from '../../../../../src/data/dict/iron.ts'
import { nuclearReactorDict } from '../../../../../src/data/dict/nuclear-reactor.ts'
import { toiletDict } from '../../../../../src/data/dict/toilet.ts'
import { UI } from '../../ui.js'

// Existing article, flow, labels, and numbers stay in the repository's data layer.
// This file adds only the per-part explanations the standalone lesson needs.
export const lesson = {
  ...iron,
  ui: UI,
  partExplanations: {
    'hand-holder': 'The hand holder gives your hand a cool place to hold. Your hand pushes down, but the heavy bottom does most of the work.',
    'hot-bottom': 'The hot bottom is a thick piece of metal. Its heat and weight press the little lines in cloth back into a flat shape.',
    'water-room': 'The water room holds water inside the iron. Small openings let the water run down toward the hot metal.',
    'steam-holes': 'The steam holes are little openings in the bottom. Water becomes steam there and goes up into the cloth.',
    'heat-wheel': 'The heat wheel sets how hot the iron gets. It turns the heat maker off and on so the bottom does not get too hot.',
    'heat-maker': 'The heat maker is a wire that gets hot when power runs through it. It warms the thick metal bottom.',
    'power-wire': 'The power wire brings power from the wall. It joins the heat maker to the power in your house.',
  },
  dictionary: {
    ...ironDict,
    handle: toiletDict.handle,
    steam: nuclearReactorDict.steam,
  },
  tour: [
    {
      kind: 'link',
      partIds: ['hand-holder'],
      sentenceRef: 0,
      caption: 'The words “hand holder” and the part above the hot bottom share one light. A word finds its thing.',
    },
    ...iron.flow,
  ],
}

export const shapes = [
  { type: 'box', partId: 'hot-bottom', args: [1.3, 0.07, 0.4], position: [-0.1, -0.55, 0] },
  { type: 'box', partId: 'hot-bottom', args: [0.35, 0.07, 0.4], position: [-0.85, -0.53, 0], rotation: [0, 0, -0.12] },
  { type: 'box', partId: 'water-room', args: [1.0, 0.38, 0.36], position: [0.05, -0.28, 0] },
  { type: 'box', partId: 'heat-maker', args: [0.9, 0.045, 0.05], position: [0, -0.13, 0.19] },
  ...Array.from({ length: 5 }, (_, index) => ({
    type: 'cylinder', partId: 'steam-holes', args: [0.015, 0.015, 0.04, 8],
    position: [-0.55 + index * 0.25, -0.6, 0], rotation: [Math.PI / 2, 0, 0],
  })),
  { type: 'box', partId: 'hand-holder', args: [0.05, 0.28, 0.05], position: [-0.25, 0.05, 0] },
  { type: 'box', partId: 'hand-holder', args: [0.05, 0.28, 0.05], position: [0.3, 0.05, 0] },
  { type: 'box', partId: 'hand-holder', args: [0.72, 0.06, 0.07], position: [0.02, 0.22, 0], rotation: [0, 0, -0.06] },
  { type: 'cylinder', partId: 'heat-wheel', args: [0.09, 0.09, 0.04, 16], position: [-0.45, -0.28, 0.21], rotation: [Math.PI / 2, 0, 0] },
  { type: 'rod', partId: 'power-wire', from: [0.55, -0.2, 0], to: [0.95, -0.08, 0], radius: 0.02 },
  { type: 'rod', partId: 'power-wire', from: [0.95, -0.08, 0], to: [1.25, 0.18, 0], radius: 0.02 },
]

export default lesson
