---
name: english-explain
description: 把一个英语概念、词、句子或真实物件讲成单文件离线交互解释页 —— 中央 3D 线框、四周学习 HUD、文中短语与部件双向点亮、点部件读 simple English、无人操作时自动导览。用于用户要“做一个英语解释页 / visual English lesson / interactive word-to-object explainer / 把一个词或语法点讲明白”，或要在 english-explainer 里新增独立教学 HTML 时。复用本仓 ThingData、词典与千词闸门；视觉真相源仍是 PRODUCT.md 和 DESIGN.md。
---

# english-explain

**一个概念，一页；一个词，能找到一件东西。** 产物是可以直接双击打开的 HTML，
不是需要 dev server 的 React 路由，也不是把文章贴到一张漂亮背景上。

本 skill 借 `elvarofficial/teardown` 的单文件打包、共享状态、自动巡展与截图评审回路，
但页面始终服务本仓的学习目标：**词 ↔ 物 ↔ 简单英文解释**。不要做与学习无关的仪表。

`SKILL_DIR` 指本文件所在目录。命令从仓库根目录执行；构建复用根目录 `node_modules`。

## 先跑完整示例

```bash
# 直接打开已提交的离线示例，无需安装或启动服务器
open "$SKILL_DIR/examples/iron.html"

# 从结构化数据重新构建同一个文件
node "$SKILL_DIR/scripts/build.mjs" \
  "$SKILL_DIR/examples/iron/main.js" \
  --out english-explain-out/iron.html

# 零 npm 依赖走查：离线在 file:// 打开，真实点词、真实 raycast 点部件、验导览并截图
node "$SKILL_DIR/scripts/walkthrough.mjs" \
  english-explain-out/iron.html --out english-explain-out/review
```

走查只要求 Node ≥ 22 与本机 Chrome/Chromium；`CHROME=/path/to/chrome` 可指定浏览器。
截图必须打开看，不能只看“7 checks passed”。

## 工作顺序

1. **先读真相源。** `PRODUCT.md` 决定学习机制，`DESIGN.md` 决定纸面、墨色、HUD 青、
   simple name ↔ real name。画自建几何还要遵守 `DESIGN.md` 的制图契约；不要改现有 SPA。
2. **找一个可指的解释对象。** 实物优先参考真实照片/结构图。词或语法点则把句子中的
   语义角色做成可点的形（谁做 / 做什么 / 对谁 / 何时），不要硬套一台无关机器。
3. **先数据，后几何。** 复制 `examples/iron/main.js` 到新目录。先写 parts、结构化 article、
   flow、每部件 simple-words 解释和词典，再写 shapes。完整契约见 `references/content.md`。
4. **共享一个选择状态。** `runtime.js` 已把选中 partId 同时接到模型、文中短语、部件索引、
   当前句和解释卡。新增 HUD 数字也必须从 lesson 计算；禁止随机波形、假读数、硬编码部件数。
5. **构建并过词闸门。** 默认站点闸门不变；`--entry` 用同一套四通道规则额外检查独立页，
   包括 `partExplanations`。中文释义不受千词限制，学习英文必须受限制。
6. **走查、看帧、修、再走查。** 词→物和物→词都要真实点击；导览要真的自动前进，
   访客输入要接管，安静后导览恢复。交付清单见 `references/review.md`。

```bash
npx tsc --noEmit
npx tsx scripts/validate-data.mjs
npx tsx scripts/check-simple-words.mjs
npx tsx scripts/check-simple-words.mjs --entry path/to/lesson/main.js
node "$SKILL_DIR/scripts/build.mjs" path/to/lesson/main.js --out english-explain-out/lesson.html
node "$SKILL_DIR/scripts/walkthrough.mjs" english-explain-out/lesson.html
```

## 页面契约

- **中央是可点的程序化 3D 线框。** 每个 shape 都带真实 `partId`；一个部件可以含多个 mesh。
- **四周只有学习 HUD。** 左侧当前句与部件索引，右侧 simple English 与中文词典卡，
   顶部部件/句/词/步数全部由 lesson 计算。文章仍在首屏可读，不被 3D 吞掉。
- **短语级关联优先。** article segment 的 `part` 点亮部件；模型 raycast 点击反查句子。
   `dict` 另开词条卡，两者可共存于一个短语。
- **点部件就能学到表达。** `partExplanations[partId]` 是必答题：用简单英文说它是什么、
   做什么，而不是只换一行 realName。
- **无人操作自动导览。** 首步演示“词找到物”，后续沿用 flow；点击、拖动、滚轮接管，
   15 秒无输入恢复。`prefers-reduced-motion` 下不自动播放。
- **真正离线。** Three.js、运行时、数据、CSS 全部内联；无 CDN 字体、远程模型或模块请求。
   `walkthrough.mjs` 在导航前切离线，任何外部资源都会失败。

## 借 teardown 什么，改掉了什么

**借用**：单 HTML/IIFE 内联打包；数据/几何/HUD 同一状态；脚本化自动巡展与访客接管；
浏览器自动点选 + 当前产物静帧评审；示例即模板。

**按本仓改掉**：不要转速、压力等工程遥测，不要装饰性 gauge；不强制拆解/cutaway；
不做固定 1600×900 影片时间线、配乐或 ffmpeg；高亮服务“词找到物”，不是强调做功机构；
构建复用本仓 Vite，走查使用自带的零依赖 CDP 脚本，不引入 Playwright。

## References

- `references/content.md` —— lesson/shapes 数据契约、新词/语法点映射、千词闸门。
- `references/review.md` —— 浏览器检查覆盖、静帧走查清单、常见失败与排查。
- `examples/iron/main.js` —— 完整源示例；直接复用站内 iron 的 7 部件、14 句、5 步与词典。
- `examples/iron.html` —— 已构建的完整离线示例。
