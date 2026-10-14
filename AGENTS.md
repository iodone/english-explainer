# AGENTS.md — english-explainer

Thing Explainer 英语学习网站。复古制图室纸面 + HUD 青光：文章是阅读主体，
3D 线框图作辅证；核心机制是"词找到物"——文中部件词与图上部件双向点亮。
产品决策见 `PRODUCT.md`（真相源①），视觉契约见 `DESIGN.md`（真相源②）。

## 命令

所有命令在项目根目录（本目录）执行：

```bash
npm run dev                  # 开发服务器 http://localhost:5173
npm run build                # 生产构建（tsc -b && vite build）
npx tsc --noEmit             # 仅类型检查
npx tsx scripts/validate-data.mjs  # 数据一致性校验（句数/partId/dict 闭环）
npx tsx scripts/check-simple-words.mjs  # Munroe ~1000 词闸门（article/flow/keyExpressions/funFacts 四通道）

# 图版走查（需要 npm run dev 开着；自己起 headless Chrome，零依赖）
node .agents/skills/figure-craft/scripts/figure.mjs shot   <thing>            # 截图
node .agents/skills/figure-craft/scripts/figure.mjs labels <thing> [--click .word-part]
```

## 结构

### 数据层（`src/data/`）

- `types.ts` — 类型契约。文章是结构化的：句 = `(string | MarkedSeg)[]` 混排，
  segment 带可选 `part`（部件关联）+ `dict`（词条 key）。**先改类型，再写数据**
- `things/` — 每个 thing 一个文件（`nuclear-reactor.ts` 是模板级示例）。
  内容：parts（id/label/realName/position）+ article（4 段 simple-words 文章，
  短语级标注）+ flow（工作流程步骤，`sentenceRef` 是全篇连续句索引）+ keyExpressions（复述清单）
- `dict/` — 每个 thing 一份词条（word/音标 IPA/词性/中文/breakdown 构词拆解）。
  dict key 用动词原形（文中 "pushes back" → key "push back"）
- `dictionary.ts` — 词条汇总（先到先得合并），`lookupWord()` 是查询入口
- `things.ts` — 注册表：导入 `things/` 全部文件，导出 `things` / `getThingBySlug` / `categories`
- `utils.ts` — 文章铺平 / 词数统计 / 图→词句索引查找

加新 thing = `things/` 加数据文件 + `dict/` 加词条 + `things.ts`/`dictionary.ts` 各注册一行 +
`src/geometry/<slug>.tsx` 加几何体（`geometry/index.ts` GEOMETRY map 注册一行）。
ThingScene.tsx 只做 Canvas 编排与标注层，不再放几何体。

### 几何层（`src/geometry/`）

- `primitives.tsx` — 公共面：FINISH_POOL 配色池 / PartMetaContext / usePartHighlight / SketchMesh / Rod / DraftLine
- `<slug>.tsx` — 每个 thing 一个几何体文件（部件 mesh 带 `name={partId}` + `finish` 角色）
- `index.ts` — `GEOMETRY` 分发 map（thing.id → 组件）

### 组件层（`src/components/`）

- `ThingScene.tsx` — R3F 3D 线框。受控高亮 props：`highlightPartId`（阅读态）、
  `activePartIds`/`pastPartIds`/`dimOthers`（flow 播放态）、`onPartClick`（图→词）。
  每个 mesh 带 `name={partId}`，`usePartHighlight` 每帧 lerp 材质亮度
- `ArticleView.tsx` — 结构化文章渲染（部件词 `.word-part` / 生词 `.word-new`），
  ref 暴露 `scrollToSentence`
- `WordPopup.tsx` — 词条卡（fixed 锚定点击词上方，构词拆解）
- `FlowPlayer.tsx` — 过程动画状态机（每步 3.2s 自动推进）+ 步骤指示器
- `PracticePanel.tsx` — 复述态：关键表达自评 + 部件名对照
- `PageActions.tsx` — 底部动作条（read/flow/practice 三态）

### 样式

- `src/styles/design-tokens.css` — Tailwind 4 `@theme` 令牌 + 特效类。
  阅读层新增：`.word-part`（#0E7C7B 虚线下划线）/ `.word-new` / `.sentence-active` / `.card-pop`

## 设计约束

- 配色：羊皮纸底 `#F4F1EA` + 墨色 `#2C2A25` + HUD 青 `#3ECFCF`（唯一主发光色），
  红/橙仅作部件激活点缀；每 thing 有自己的 accent color（`color` 字段）
- 字体：Newsreader（阅读正文衬线 20px/1.8/68ch）/ Inter（UI）/ JetBrains Mono（micro-label）—— index.html 引入
- 3D 模型全部程序化生成（Three.js wireframe），不依赖外部模型文件
- 内容遵循 Munroe 约束：simple name ↔ real name 对照，解释只用 ~1000 常用词
  （"gravity" → "the pull of the world"）；释义卡中文不受此限

## 画图

3D 图版的绘制技艺（部件密度、明暗分档、墨线、细节原语配方、标注层选位算法）与
自检工具链在 **`.agents/skills/figure-craft/`**（`.claude/skills/figure-craft` 是同一个目录的软链）。
要新增/改造某件的几何体、调细节密度、动标注层，或用户抱怨"图太简陋""标签在闪""标注压在图上"时，
先读它的 `SKILL.md`。视觉契约的真相源仍是 `DESIGN.md`（§1.5），skill 只补它没写的可执行技艺与踩坑。

## 已知坑

- Tailwind 4 用 `@theme` 定义令牌，class 名是 `text-hud-cyan` / `bg-canvas` / `text-ink` 等
  （`--color-hud-cyan` → `text-hud-cyan`）
- drei `Text` 组件不要传 font prop 加载远程 woff2（会 404），默认字体够用
- hex 颜色写错位数（如 `#3EFCFCF`）不会报错但渲染黑色，注意 6 位
- `sentenceRef` 是全篇连续句索引（跨段累加，0-based），写 flow 时数清楚
- GlooLine（drei Line）不参与部件高亮——需要高亮的"线"用 `Rod` 组件（细圆柱 mesh + name）
- drei `<Html>` 渲染进 DOM portal，**不受父 group `visible` 控制**——隐藏标签必须切
  `labelEl.style.display`（标注层细节见 `.agents/skills/figure-craft/references/annotate.md`）
- 标注点半径（0.07）/ 引线外推档（`LABEL_REACH_CANDIDATES`）/ 原语默认半径（`Rod` 0.03、
  `SeamRing` 0.018）都是**世界单位的绝对尺寸**，按"模型跨度 ≈ 2"调的；跨度小于 `MODEL_SPAN`
  的 thing 由 `ThingScene` 归一放大。动取景逻辑时记住：**缩放不经过 `Bounds`**，
  改完必须自己 `bounds.refresh().clip().fit()` —— 漏了 `clip()` 就是 `controls.maxDistance`
  小于 `minDistance`，相机被每帧钉死；取景量的是**部件盒**（`partsBounds`：带 `name` 的 mesh），
  装饰性草稿线不算（它常常是物件的 10×，按整组取景物件就成一个小点）
  （见 `.agents/skills/figure-craft/references/craft.md` §5）
- 逐帧重算的结果**不能**用在二值判断上：`sx >= 0` 这类浮点符号在 0 附近会逐帧翻转，
  表现为"标注字一直在闪"（同一个坑有三个变体，见 annotate.md §5）
