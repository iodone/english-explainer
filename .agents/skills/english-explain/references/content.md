# Content —— 先让词和物闭合成数据

## 一个 lesson 文件

入口默认导出 lesson，并导出 `shapes`。`examples/iron/main.js` 是最小完整模板：
站内已有 thing 用展开复用，额外只写 `partExplanations`、所需 `dictionary` 和可选 `tour`。

```js
export const lesson = {
  id: 'my-lesson', slug: 'my-lesson',
  simpleName: 'Simple Name', realName: 'Real Name',
  category: 'home', color: '#3ECFCF',
  parts: [
    { id: 'moving-part', label: 'Moving Part', realName: 'Real Part', finish: 'cold' },
  ],
  article: [{ sentences: [[
    'The ', { text: 'moving part', part: 'moving-part' }, ' does the work.',
  ]] }],
  flow: [{ partIds: ['moving-part'], caption: 'The moving part does the work.', sentenceRef: 0 }],
  keyExpressions: [{ text: 'does the work', partId: 'moving-part' }],
  funFacts: [],
  // 所有实际渲染的提示语、HUD 标签和按钮文字；闸门会递归检查。
  ui: {
    showMe: 'SHOW ME',
    yourTurn: 'YOUR TURN',
    wordHint: 'Touch a word. Find its part.',
  },
  partExplanations: {
    'moving-part': 'The moving part is the piece that does the work.',
  },
  dictionary: {},
  // 可选；省略时自动导览直接读 flow。
  tour: [{ kind: 'link', partIds: ['moving-part'], sentenceRef: 0, caption: 'The word finds its part.' }],
}
export const shapes = [
  { type: 'box', partId: 'moving-part', args: [1, .2, .4], position: [0, 0, 0] },
]
export default lesson
```

`article`、`flow`、`keyExpressions` 与本仓 `ThingData` 同契约。`sentenceRef` 是全篇连续、
0-based 句索引。每个 part 必须：id 唯一、在 article 有短语、在 shapes 有几何、
在 partExplanations 有解释。构建器会卡住断链。

## shapes 原语

| type | 参数 |
|---|---|
| `box` | `args: [width, height, depth]` |
| `cylinder` | `args: [radiusTop, radiusBottom, height, segments]` |
| `sphere` | `args: [radius, widthSegments, heightSegments]` |
| `rod` | `from`, `to`, `radius`；用于线状但须可点/高亮的部件 |

box/cylinder/sphere 可带 `position`、`rotation`、`scale`。同一 partId 可重复出现，
runtime 会把它们组成一个部件组，一次点亮整组。需要高亮的“线”用 rod，不要装饰线冒充部件。

几何密度服务辨认，不服务炫技。部件要相互接得上，词要指得清；不要为了有 3D 而画抽象堆叠。
语法点的 parts 可以是 action / doer / receiver / time 等语义块，article 仍用同一 `part` 机制，
partExplanations 用简单英文解释这个角色在句子里做什么。

## 千词闸门

```bash
npx tsx scripts/check-simple-words.mjs --entry path/to/main.js
```

它与站点共用 xkcd 原表、站内合并词表、dict 豁免和屈折逆推，不复制另一套较宽松规则。
检查 article / flow / keyExpressions / funFacts / partExplanations / tour，以及 `ui` 中所有
实际渲染的提示语、HUD 标签和按钮文字。不要把界面文案另藏在 runtime 字符串里绕过闸门。
共享文案见 `ui.js`；自定义文案放进 lesson.ui 并直接用于渲染。parts.realName 是术语对照层，
中文词典释义不受限。先用简单词改写；确需引入概念词时给明确 dict 词条，不要靠海量豁免掩盖难句。
