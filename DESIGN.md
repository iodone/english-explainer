# DESIGN.md — Thing Explainer 视觉系统（真相源②）

> markdown 单源。逆向生成：token 层对照 `src/styles/design-tokens.css` 反推继承；
> 结构与交互层按 PRODUCT.md 目标态书写，标注 **[保留]** / **[新增]** / **[移除]** 三态。
> 实施完成后本文件即视觉契约，逐项对照验收。

---

## 1. Theme

见 `design/direction.md`（THESIS / OWN-WORLD / STORY / FIRST VIEWPORT / FORM 五段块）。
一句话：复古制图室的安静纸面 + 仪器青光；一切视觉为"词找到物"服务。

**氛围规则**：
- 纸面（底、网格、正文）安静不动；仪器（HUD 元素）允许呼吸感（扫描线/状态灯/发光）
- 全站只有一种主发光色：HUD 青 `#3ECFCF`；红 `#E8453C` / 橙 `#F0923A` 仅作部件激活与警示点缀
- 每个 thing 有自己的 accent color（数据字段 `color`），用于卡片标识与该 thing 页的部件激活色

## 2. Design Tokens

### 2.1 Color **[保留]**

| Token | 值 | 用途 |
|---|---|---|
| `--color-canvas` | `#F4F1EA` | 纸面底色 |
| `--color-canvas-dark` | `#E8E4DA` | 纸面凹陷（槽、未激活轨道） |
| `--color-canvas-grid` | `rgba(180,170,155,.15)` | 工程网格线 |
| `--color-ink` | `#2C2A25` | 正文墨色 |
| `--color-ink-soft` | `#5A554C` | 次级文字 |
| `--color-ink-faint` | `#8E8678` | 辅助标注（micro-label） |
| `--color-hud-cyan` | `#3ECFCF` | 主强调：线框/关联高亮/链接 |
| `--color-hud-red` | `#E8453C` | 激活/警示点缀 |
| `--color-hud-orange` | `#F0923A` | 次激活/过程动画中的"能量"步骤 |
| `--color-hud-green` | `#4ADE80` | 在线状态/掌握标记(P1) |
| `--color-hud-blue` | `#60A5FA` | 蓝色系部件线框 |

阅读正文附加 **[新增]**：
| Token | 值 | 用途 |
|---|---|---|
| `--color-word-part` | `#0E7C7B`（hud-cyan 加深 60%） | 文中部件词常态色（比正文深、可辨识） |
| `--color-word-active-bg` | `rgba(62,207,207,.18)` | 部件词/句被激活时的底色 |
| `--color-sentence-active-bg` | `rgba(62,207,207,.08)` | 当前阅读句底色 |

### 2.2 Typography **[保留]**

| 层 | 字体 | 用法 |
|---|---|---|
| Display | Newsreader 400/500 | 标题（thing-title）、正文衬线段落 |
| Body | Inter 400/500 | UI 文字、按钮 |
| Mono | JetBrains Mono 300/400 | micro-label、编码、坐标、状态 |

**[新增] 阅读排版规格**（Thing 阅读页文章列）：
- 正文：Newsreader 400，`20px / 1.8`，段距 `28px`，最大行宽 `68ch`
- 首段可放大 `24px`（首屏阅读邀请感）
- 部件词：Newsreader 500，`#0E7C7B`，虚线下划线 `border-bottom: 1px dashed`，hover 底色 `word-active-bg`
- 生词（有词条但非部件）：正文色 + 点状下划线 `border-bottom: 1px dotted`
- 词条卡内中文：Inter 400，14px

### 2.3 Effects **[保留 + 收敛]**

| 类 | 状态 | 说明 |
|---|---|---|
| `.canvas-grid` | 保留 | 纸面 + 双层网格（40px 细 / 200px 粗） |
| `.scanline` | 保留 | 全屏扫描线，opacity .15，8s 循环 |
| `.hud-panel` | 保留 | 仪表贴片：`.85` 纸色 + blur + 顶部青渐变线 |
| `.corner-accent` | 保留 | 面板角标 |
| `.status-blink` | 保留 | 状态灯呼吸 |
| `.reticle` | 保留 | 图区十字标线 |
| `.micro-label` | 保留 | 10px mono 大写字距标注 |
| 波形/雷达/仪表动画 keyframes | **[移除]** | `@keyframes waveform` 等装饰动画删除 |

**[新增]**：
| 类 | 说明 |
|---|---|
| `.part-glow` | 3D 部件激活（草稿化后为 LineMaterial 实现，见 §7） |
| `.part-dim` | 过程动画中未到步骤部件：线 opacity .12 |
| `.card-pop` | 词条卡入场：translateY(4px)+fade，160ms ease-out |

**[2026-09-09 用户裁决 · 草稿图纸化]**：背景网格与 3D 冲突、两区需明显分界、3D 偏草稿图纸风。落地：
- 3D 材质：彩色 wireframe → 统一墨线 `#2C2A25` 的 EdgesGeometry 轮廓（无三角剖分线），激活 = accent 色 + lineWidth 2.5；GridFloor/Float/灯光移除，新增虚线中心轴（制图符号）
- 文章列：`bg-canvas` 实色（干净纸面，网格只存在于图列下方 = 方格草稿纸隐喻）
- 分界：图列 `border-l-2 ink-soft/70` 制图分界线；PageActions 同步实色纸面

## 3. Layout

### 3.1 Home **[保留，微调]**

- 结构不变：Hero 标题 → 分类筛选 → 卡片网格（1/2/3 列响应式）→ Footer
- **[移除]**：卡片底部 PWR/WORDS/YEAR 装饰指标条 → 换为一句 description 预览 + 该 thing 部件数（学习相关：`6 PARTS · 87 WORDS`，词数保留是因为它本身是 Munroe 概念的一部分）

### 3.2 Thing 阅读页 **[重构核心]**

三态共用一个页面框架，状态切换不换页：

```
┌────────────────────────────────────────────────────────┐
│ StatusBar（保留）                                         │
├─────────────────────────────┬──────────────────────────┤
│                             │                          │
│   文章主列 60%（min 560px）  │   图辅列 40%（min 420px）  │
│                             │                          │
│   ┌ 图纸标题块 ┐             │   ┌──────────────────┐  │
│   │ simpleName（大衬线）      │   │                  │  │
│   │ realName（micro-label）  │   │   3D 线框场景      │  │
│   └───────────┘             │   │  （ThingScene）    │  │
│                             │   │                  │  │
│   正文段落（逐句渲染）         │   │                  │  │
│   · 部件词 #0E7C7B 虚线下划 │   │  图区 HUD 角标：    │  │
│   · 生词 点状下划线          │   │  SPECIMEN/MODEL   │  │
│   · 当前句 sentence-bg       │   │                  │  │
│                             │   └──────────────────┘  │
│   [How it works] [Practice] │   图操作提示（保留）       │
│   ← 底部动作条，sticky       │                          │
├─────────────────────────────┴──────────────────────────┤
│ （无底部描述区——文章即主体，原 ThingDescription [移除]）      │
└────────────────────────────────────────────────────────┘
```

**阅读态**（默认）：如上图。文章列滚动，图列 sticky（跟随视口）。

**过程动画态**：
- 文章列：解说句逐句自动滚动到视口中央并高亮（sentence-active-bg）
- 图列：部件按 flow 序列点亮（part-glow），已过步骤保持 60% 亮度，未到 part-dim
- 图列底部浮出步骤指示器：`● ● ● ○ ○`（点可跳步）+ 暂停/重播
- 动作条变为 `■ Stop` + 步骤计数 `STEP 2/5`

**复述练习态**：
- 文章列整体淡出 → 替换为：练习说明（micro-label）+ `Show key expressions` 按钮 + 关键表达清单（展开后）
- 图列保留（这是复述的对象），部件名提示可开关（`Show part names`）
- 清单项：checkbox（hud-cyan 选中态）+ 关键短语 + 覆盖度计数 `7/10`
- 动作条：`↺ Read again` / `Next thing →`

### 3.3 词表页 /words **[新增，P1 后置]**

本期不实施，占位路由不留。

## 4. Modules

### 4.1 保留（改造）

| 组件 | 改造点 |
|---|---|
| `StatusBar` | 无改动 |
| `ThingScene` | 暴露高亮 API：`highlightPart(id | null)`；新增 flow 播放：`playFlow(steps, onStep)`；部件 hover 标签保留 |
| `HomePage` | 卡片指标条替换（见 3.1） |

### 4.2 新增

| 组件 | 职责 | 关键状态 |
|---|---|---|
| `ArticleView` | 结构化文章渲染：逐句、部件词/生词标注、点击分发 | idle / part-active / word-popup-open |
| `WordPopup` | 词条卡：音标、词性、中文释义、构词拆解（复合短语时） | open（定位到点击词上方）/ 词缺失态 |
| `FlowPlayer` | 过程动画编排：驱动 ThingScene + 文章句同步高亮 | playing / paused / done / step-n |
| `PracticePanel` | 复述态：关键表达清单、自评勾选、覆盖度 | hidden / active / revealed |
| `PageActions` | 底部 sticky 动作条：模式切换 | 随三态变化 |

### 4.3 移除

| 组件/模块 | 理由 |
|---|---|
| `LeftPanel` 整体（波形/雷达/仪表/时间轴/词数） | 与学习无关（用户裁决） |
| `RightPanel` 的 LEGEND 块 | 装饰 |
| `ThingDescription` | 文章升级为 ArticleView 主体 |
| FunFacts 轮播 | 降级为文章末尾静态"Did you know"小节（内容并入 article 数据） |

### 4.4 RightPanel 去向 **[重构决策]**

部件树本身有学习价值（simple name → real name 对照 = 词汇表），但不再是右侧固定面板：
- 并入 `PracticePanel` 的 `Show part names` 展开态（复述时看图对照）
- 阅读态不常驻——避免与"文中部件词"双轨展示

## 5. 交互视觉行为

### 5.1 词→图（文章列内点击部件词）
1. 词即时加底色 `word-active-bg`（无延迟）
2. 图列对应部件 `part-glow`（材质 emissive 提亮 + drop-shadow），标注线变 accent 色
3. 再点空白处/其他词：前一个状态清除
4. 词失焦（点别处）后图上部件保持发光直至下一次交互（不自动熄灭——留给学习者对照时间）

### 5.2 图→词（点击 3D 部件）
1. 部件 `part-glow`
2. 文章列滚动到包含该部件词的句子，句加 `sentence-active-bg`，词加 `word-active-bg`
3. 滚动行为：`scrollIntoView({behavior:'smooth', block:'center'})`

### 5.3 词条卡（WordPopup）
- 锚定点击词上方 8px，最大宽 320px，`hud-panel` + `card-pop` 入场
- 内容层级：词头（词 + 音标）→ 词性 → 中文释义 → 构词拆解（仅复合短语）
- 点卡外任意处关闭；卡开时文章列滚动锁定（防止卡漂移）

### 5.4 过程动画（FlowPlayer）
- 步进节奏：每步 2.8s（解说句完整可读），步间 400ms
- 部件点亮序：`part-dim(全) → 当前步 part-glow → 已过步骤 60%`
- 能量/流动类步骤（蒸汽、电流）允许 hud-orange 粒子线（GlowLine 动画）

### 5.5 复述自评（PracticePanel）
- 关键表达清单逐项：短语 + 指向部件（hover 时图上对应部件微亮 40%）
- 勾选后短语划线 + 计数更新；覆盖度全达成时计数变 hud-green

## 6. 状态矩阵（视觉对应）

| 状态 | 视觉 |
|---|---|
| 文章加载 | 文章列骨架屏（纸色块 + 网格），图列 3D 懒加载占位（reticle + "LOADING MODEL"） |
| slug 无效 | 居中 "Thing Not Found"（衬线）+ 返回链接（hud-cyan） |
| 词条缺失 | WordPopup 显示原词 + "— no entry —"（mono）+ 建议「视为普通词」 |
| 无 flow 数据 | 动作条不渲染 How it works 按钮 |
| 复述无 keyExpressions | Practice 按钮不渲染 |

---

## 验收对照（2026-09-09 实施后逐项勾选）

- [x] LeftPanel/ThingDescription/装饰 keyframes 从代码中删除
- [x] 文章列 20px/1.8/68ch，部件词 #0E7C7B 虚线下划可点
- [x] 词→图、图→词双向高亮闭环（5 个 thing 全通；图→词 = onPartClick → scrollToSentence，经 scrollIntoView 打桩验证）
- [x] WordPopup 含音标/词性/中文；复合短语构词拆解（break apart / take off / side by side 实测）
- [x] FlowPlayer 播放/暂停/重播/跳步；解说句同步滚动高亮（STEP 1→2 自动推进，scrollIntoView smooth+center）
- [x] PracticePanel 自评 + 覆盖度计数（勾 3/8 实测）
- [x] Home 卡片新指标条（6 PARTS · 229 WORDS 形式）
- [x] 控制台无错误（仅 three 库自身弃用警告）；生产构建通过（gzip 378KB）

### 实施备注（与规格的已知偏差）

- PracticePanel 关键表达 hover 的"微亮 40%"实现为全亮（复用 highlightPartId 通道，简化状态）
- 图上部件标注标签在小部件密集区有重叠（沿用原型的 part position），P1 打磨项
- 已修复：FlowPlayer 初版因内联回调引用触发 update-depth 循环，回调 ref 化后 effect 只依赖 stepIndex
- 草稿化后 Part 高亮实现在 SketchMesh 子级 drei `<Edges>`（LineMaterial color/opacity/linewidth 每帧 lerp）；取景距离按 thing 配置（THING_CAMERA 表），调相机而非缩放模型（标注 dot 与模型同坐标，缩放模型会错位）
