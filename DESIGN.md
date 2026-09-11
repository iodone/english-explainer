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

## 1.5 3D 模型绘制风格基准（2026-09-09 · JX-7b 规范）

> 用户提供的风格基准（仿生水母机器人 Model JX-7b 描述）。**后续所有 3D 模型绘制均按此执行**，
> 是草稿图纸方向（§1 氛围规则）的材质与 HUD 细化。

**结构语言（机械仿生学）**：形态可仿生，但必须拆解为可命名的工程部件
（伞盖 / 动力舱 / 推进器 / 触手式执行器）——部件化是词-物关联的前提。

**材质分层（核心规则）**：
| 部件类型 | 材质 | 实现 |
|---|---|---|
| 外壳/包裹类（伞盖、箱体、穹顶） | 半透明网格线框（四边形拓扑）+ 内部实体机械结构——双层表达 | 灰实体面 `opacity .12` + 墨 Edges 轮廓 |
| 结构件（臂、杆、触手、执行器） | 哑光低反射复合材料（matte 100% 粗糙度，无高光），带纵向低多边形结构线 | Rod 4 面方杆 + Edges 纵线 |

**色彩**：军工灰 / 冷灰 / 钛白 + 微弱泛黄复古图纸调（纸面 #F4F1EA 承担）；
点缀色 = 高饱和工业警示红 `#E8453C`，仅用于核心舱 / 传感器 / 推进器末端等功能指示位。
**已落地（2026-09-09）**：`ThingPart.finish?: 'hull' | 'cold' | 'titanium' | 'warning'` 数据角色
驱动渲染（FINISH_POOL 单源：面/线色 + 透明度），校验脚本约束每件 warning ≤ 2 处。
激活态一律覆盖为 thing accent（学习聚焦语义），常态红件标注 dot 同红。
当前标注：reactor = core+wheel 红 / dome 钛白 / water 冷灰；helicopter = engine+window 红 / body 钛白 / rotor 冷灰；
station = solar+dome 红 / truss 钛白 / modules 冷灰；rover = mast+power 红 / body 钛白 / wheels+brain 冷灰；
washer = hot-air 红 / drum 钛白 / motor 冷灰；
microwave = wave-maker 红 / turning-table 钛白 / door-screen 外壳灰（余冷灰）；
refrigerator = cold-maker+heat-watcher 红 / ice-room 钛白 / cold-box 外壳灰（余冷灰）；
elevator = top-wheel+catch-teeth 红 / room 钛白 / other-weight 外壳灰（余冷灰）；
bicycle = hand-stoppers 红 / metal-bones 钛白 / 余冷灰（纯线架，无外壳件）；
clock = turning-heart+tick-stopper 红 / time-face 钛白 / 余冷灰；
vacuum-cleaner = air-puller 红 / dust-bag 外壳灰 / 余冷灰；
toilet = water-door 红 / water-bowl 钛白 / 余冷灰（water-tank 顶置）；
speaker = wire-ring 红 / sound-paper 钛白 / box-body 外壳灰（余冷灰）；
drill = go-button 红 / speed-changer 钛白 / 余冷灰；
camera = light-door 红 / light-catcher 钛白 / dark-box 外壳灰（余冷灰）；
battery = top-cap 红 / second-metal 钛白 / steel-skin 外壳灰（余冷灰）；
zipper = walker-box 红 / teeth-rows 钛白 / 余冷灰；
lock = door-bolt 红 / pin-stacks 钛白 / outer-body 外壳灰（余冷灰）；
scissors = middle-screw 红 / blade-pair 钛白 / 余冷灰；
pencil = rub-end 红 / black-heart 钛白 / wood-case 外壳灰（余冷灰）；
iron = heat-maker 红 / hot-bottom 钛白 / water-room 外壳灰（余冷灰）；
glasses = turn-screws 红 / bender-pair 钛白 / 余冷灰；
faucet = hand-turner 红 / turn-doors 钛白 / tap-body 外壳灰（余冷灰）；
light-bulb = touch-point 红 / light-wire 钛白 / glass-ball 外壳灰（余冷灰）；
stapler = push-head 红 / bend-plate 钛白 / pin-room 外壳灰（余冷灰）；
submarine = water-pusher 红 / water-rooms 钛白 / hard-skin 外壳灰（余冷灰）；
telescope = turn-bed 红 / far-glass 钛白 / long-tube 外壳灰（余冷灰）；
space-suit = air-back 红 / glass-head 钛白 / soft-suit 外壳灰（余冷灰）；
windmill = three-blades 红 / power-maker 钛白 / nose-box 外壳灰（余冷灰）；
train = power-arm 红 / power-car 钛白 / people-cars 外壳灰（余冷灰）；
rocket = fire-heart 红 / fuel-rooms 钛白 / drop-tanks 外壳灰（余冷灰）；
dam = water-gate 红 / fall-pipes 钛白 / wall-body 外壳灰（余冷灰）；
ship = push-foot 红 / push-room 钛白 / float-body 外壳灰（余冷灰）；
satellite = sun-wings 红 / brain-box 钛白（余冷灰，无容器件——线框本体）；
sun-catcher = light-plate 红 / light-changer 钛白 / back-board 外壳灰（余冷灰）；
hot-air-balloon = fire-maker 红 / cloth-bag 钛白 / people-box 外壳灰（余冷灰）；
moon-lander = landing-fire + up-engine 双红（产线首例双警示件）/ top-room 钛白 / bottom-room 外壳灰（余冷灰）；
water-wheel = water-boards 红 / stone-pair 钛白 / big-wheel 外壳灰（余冷灰）；
airplane = jets 红 / wings 钛白 / body-room 外壳灰（余冷灰）；
comet = ice-heart 红 / dust-tail 钛白 / warm-coat 外壳灰（余冷灰）；
steam-engine = fire-box 红 / spin-wheel 钛白 / water-room 外壳灰（余冷灰）；
car = fire-rooms 红 / road-feet 钛白 / body-box 外壳灰（余冷灰）；
moon = dark-lands 红 / ring-mountains 钛白 / rock-ball 外壳灰（余冷灰）；
power-grid = long-wires 红 / iron-men 钛白 / night-windows 外壳灰（余冷灰）；
escalator = step-chain 红 / moving-steps 钛白 / side-walls 外壳灰（余冷灰）；
black-hole = hot-ring 红 / light-ring 钛白 / dark-heart 外壳灰（余冷灰）；
sun = fire-heart 红 / slow-roads 钛白 / hot-face 外壳灰（余冷灰）；
crane = hook-line 红 / long-arm 钛白 / standing-tower 外壳灰（余冷灰）；
mars = red-dust 红 / ice-caps 钛白 / thin-air 外壳灰（余冷灰）；
electric-motor = spin-heart 红 / still-ring 钛白 / box-body 外壳灰（余冷灰）；
bridge = great-lines 红 / hold-towers 钛白 / road-way 外壳灰（余冷灰）；
earth = turning-heart 红 / power-field 钛白 / air-skin 外壳灰（余冷灰）；
atom = heavy-heart 红 / near-road 钛白 / far-road 外壳灰（余冷灰）；
drone = sky-eye 红 / spin-blades 钛白 / fly-box 外壳灰（余冷灰）；
galaxy = heart-light 红 / turning-arms 钛白 / flat-wheel 外壳灰（余冷灰）；
geothermal = heat-rocks 红 / deep-holes 钛白 / steam-hall 外壳灰（余冷灰）；
sailboat = main-sail 红 / deep-fin 钛白 / boat-body 外壳灰（余冷灰）；
saturn = top-storm 红 / ring-plate 钛白 / round-body 外壳灰（余冷灰）；
fusion = star-ring 红 / hold-hands 钛白 / ring-room 外壳灰（余冷灰）；
motorcycle = fire-heart 红 / ride-seat 钛白 / metal-bones 外壳灰（余冷灰）；
jupiter = red-eye 红 / ice-moon 钛白 / big-ball 外壳灰（余冷灰）；
generator = light-ball 红 / strong-magnet 钛白 / hold-shape 外壳灰（余冷灰）；
subway = power-rail 红 / deep-hole 钛白 / long-train 外壳灰（余冷灰）；
space-shuttle = fire-sticks 红 / food-tank 钛白 / white-body 外壳灰（余冷灰）；
wave-power = power-maker 红 / turn-pin 钛白 / sea-rider 外壳灰（余冷灰）。

**环境（3D viewport = CAD 虚空工作区）**：
- 地面：数字化三维透视网格（无限延伸的淡灰细线），与虚线中心轴并存
- 标注：虚线/细引线 + 等宽全大写技术文本，字号克制、无装饰边框，贴原始工程数据格式
- 标注防重叠（2026-09-09）：标签逐帧屏面碰撞布局——按优先级（激活 > 悬停 > 常态，同级近相机优先）取槽，
  每标签在 7 个垂直候选偏移里选第一个不与已占屏面矩形相交的槽位；全部冲突时该标签淡至 .18 而非叠字，
  引线随标签移动实时重画（`setPositions` 直写顶点）
- HUD：右上角坐标轴 gizmo（数字化指南针）；顶部视角朝向指示器 P1
- 标签 billboard 朝向相机（drei Text 天然满足），随模型旋转产生空间透视联动

**技术红线**：线框只用于外壳类部件（不是全模型 wireframe）；
哑光材质禁止高光反射（meshBasicMaterial unlit）；透明外壳 depthWrite 关闭防排序瑕疵。

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
- **[同日裁决 · 交互四点]**：① 详情页去扫描线（scanline 类只挂 Home）；② 分界线独立成可拖动条（默认 50/50 居中）；③ 图→词命中扩大到模型本体；④ 词条卡点击 → 悬停 2s 触发。落地见 §3.2 / §5.2 / §5.3

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
│   文章主列 50%（min 420px） │▌│   图辅列 flex（min 360px）│
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

**阅读态**（默认）：如上图。文章列滚动，图列随分栏共存（整页 flex 布局，无 sticky）。
两列之间是独立拖动条：默认 50/50 居中，按住拖动调宽（约束 30–70%，文章 min 420px / 图 min 360px），`localStorage 'thing-split'` 持久化，双击复位 50%。拖动中 `cursor: col-resize` + 禁止选中文本。

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

### 3.3 词表页 /words **[已实现 2026-09-09]**

```
┌────────────────────────────────────────────────────────┐
│ StatusBar（NAV · HOME / WORDS 链接，当前页青色高亮）        │
├────────────────────────────────────────────────────────┤
│ Hero：micro-label「C7 · VOCABULARY INDEX」+ 大标题 Words  │
│       统计条 hud-panel：X / 1283 KNOWN · 来源标注          │
│ 搜索条 hud-panel：SEARCH + as-you-type 过滤 + N SHOWN     │
├────────────────────────────────────────────────────────┤
│ 字母分组（A-Z，每组 hud-panel + 组头 字母 / N WORDS）       │
│   词卡网格 1/2/3/4 列响应式：                              │
│   · 词（Newsreader thing-title，已知 = HUD 青 + ✓）        │
│   · 有词条 → 内联 音标 · 词性 · 中文                        │
│   · 有 thing 覆盖 → simpleName 徽标（点击跳 /thing/:slug）  │
│ 检索无结果 → 空态（NO WORDS FOUND — try fewer letters）    │
├────────────────────────────────────────────────────────┤
│ Footer：来源标注 + ← BACK TO THINGS                       │
└────────────────────────────────────────────────────────┘
```

数据：`src/data/word-list.ts`（xkcd Simple Writer 0.2.1，家族合并 3634 形式 → 1283 基础词，含 2026-09-09 补的
8 个基础词 early/find/good/hold/letter/mind/officer/word——旧合并的单层后缀剥离把它们错折到了 fin/goo/min/ear 等同形异义短词）；
Munroe 闸门权威源 = vendored 原表 `scripts/data/xkcd-simple-writer-words.txt`（3634 全形式）。
掌握标记 localStorage `'known-words'`（防御解析）；thing 关联运行时从 article dict 标注构建 word→thingSlug 映射。

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
| `WordPopup` | 词条卡：音标、词性、中文释义、构词拆解（复合短语时）；悬停词 2s 触发 | open（锚定悬停词上方）/ 词缺失态 |
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
1. 命中区 = 部件**本体 mesh**（SketchMesh 带 onClick）或标注 dot，命中时 cursor 变 pointer
2. 部件 `part-glow`
3. 文章列滚动到包含该部件词的句子，句加 `sentence-active-bg`，词加 `word-active-bg`
4. 滚动行为：`scrollIntoView({behavior:'smooth', block:'center'})`

### 5.3 词条卡（WordPopup）**[2026-09-09 改悬停触发]**
- 触发：悬停标注词 **2s**（HOVER_DICT_MS，避免扫读时乱弹）；点击标注词不再弹卡，只做词→图部件关联
- 锚定悬停词上方 8px，最大宽 320px，`hud-panel` + `card-pop` 入场
- 内容层级：词头（词 + 音标）→ 词性 → 中文释义 → 构词拆解（仅复合短语）
- 关闭链：离开词 250ms 延迟关（容许词→卡移动）；卡上悬停取消关闭，离开卡关；点卡外立即关
- 卡开时文章列滚动锁定（防止卡漂移）

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

### 验收对照 · 交互四点 + JX-7b（2026-09-09 第二轮）

- [x] 详情页无扫描线（`scanline` 类只挂 Home 路由）
- [x] 分栏默认 50/50 居中；拖动实测 957→1110px（localStorage 记 58%），双击复位；拖动中 col-resize + 禁选中，松手恢复
- [x] 点击**模型本体**（非仅标注 dot）→ 文中部件词高亮（reactor core 本体实测 "hot part"×3 + "heavy metal" 点亮）+ cursor pointer
- [x] 词条卡悬停 2s 出现（power 实测 2.2s 出卡）；离词 250ms 关、卡上悬停保持、点外即关
- [x] 取景自适应：drei `<Bounds fit clip observe margin={1.1} key={thing.id}>`——默认取景合适（模型约占画布高 55%），分栏拖动后画布 resize 自动重取景；调相机距离而非缩放模型（标注 dot 与模型同坐标）
- [x] JX-7b 规范落地（§1.5）：外壳半透明灰实体面（#6E6C64 · depthWrite off）+ 墨 Edges；地面透视网格 + 虚线中心轴；右上角三色坐标轴 gizmo；等宽大写 billboard 标注

### 验收对照 · 部件配色（2026-09-09 第三轮）

- [x] `ThingPart.finish` 四角色数据驱动：reactor 四色同屏可见（core/wheel 警示红、dome 钛白、water 冷灰、rods/steam 军工灰）；helicopter 抽查通过（body 钛白、window 警示红）
- [x] 常态→激活覆盖：core（红）→ accent 青绿（线 2.5 + 面 .28），word 侧 "hot part"×3 + "heavy metal" 同步点亮；water（冷灰）→ accent 亦验证
- [x] 警示红件标注 dot 同红（HOT AIR MACHINE 无几何仅 dot，红 dot 正确标记）
- [x] 校验：finish 枚举 + 每件 warning ≤ 2（validate-data.mjs）
- 备注：raycast 取最近命中——reactor 的 dome 在多数视角遮挡 core（安全壳包着堆芯，物理写实），学习者可旋转视角点 core；engine/brain/motor/water-in 数据 part 无几何体（既有空缺，仅标注 dot）

### 验收对照 · 几何分文件 + Munroe 闸门（2026-09-09 第五轮，production line 前置改造）

- [x] 几何分文件：ThingScene.tsx 699 → 283 行（只剩 Canvas 编排/标注层/环境）；`src/geometry/primitives.tsx`（配色池 + PartMetaContext + usePartHighlight + SketchMesh/Rod/DraftLine）+ 5 个 `<slug>.tsx` 几何文件 + `index.ts` GEOMETRY map 分发。加新 thing 不再碰 ThingScene
- [x] Munroe 闸门 `scripts/check-simple-words.mjs` 四通道：vendored xkcd 原表（3634 形式）∨ 词表（1283）∨ dict 词条 ∨ 屈折逆推（链式 + er/est 补 e/双写 + ly）；检查范围 = article + flow caption + keyExpressions + funFacts；每 thing 报告 dict 豁免依赖词数（review 盯防指标）
- [x] 词表修正：旧合并把 good/find/word/hold/early/mind/letter/officer 错折到 goo/fin/…（单层后缀剥离的同形异义陷阱），补 8 词 → 1283；闸门实测抓出并修正
- [x] 闸门首跑收获：11 个概念词补 dict 词条（gas/soap/sideways/backward/difference/test/football/dirty/umbrella/rainy/liter，词典 73→83）+ 3 处改文更 Munroe（sixteen→16、forty→40、flows→moves）
- [x] 验证全绿：tsc / build / validate-data / 闸门 exit 0；浏览器回归 5 thing 页 3D 渲染完整（截图逐页核对，washer 门圈为 autoRotate 背面时序非 bug）+ /words 显示 0/1283
- 备注：验证中发现 Vite HMR 对 R3F 组件树热替换有陈旧模块态（改造后 navigate 首次截图模型消失，硬刷新即恢复）——production line 的 pi 验证 3D 时须硬刷新

### 验收对照 · 词表页 C7（2026-09-09 第四轮，dsx：codex 实现 / claude+pi 双验证）

- [x] 构建链：tsc -b 零错误、build 成功、validate-data 全通过（pi 首跑）、新增代码 oxlint 零告警
- [x] 检索：as-you-type contains 过滤（water → water+watery）、trim/大小写归一、无匹配空态 + QUERY 回显
- [x] 掌握标记：点击 ✓ + HUD 青、localStorage `known-words`、计数 X/1275、刷新持久化（实测）
- [x] thing 关联：water → Heavy Metal Power Building 徽标（dict 标注运行时映射，22/1275 词覆盖）、点击跳 /thing/nuclear-reactor（实测）
- [x] 词条内联：about /əˈbaʊt/ · prep · 关于（lookupWord 命中词显示音标/词性/中文）
- [x] 性能：1275 卡全渲染，程序化滚动 61fps 满帧（hud-panel blur 实测无碍）；已知优化点 = 词表进主 bundle（gzip 388KB，P1 可 dynamic import 拆）
- [x] StatusBar 导航：HOME/WORDS 链接，当前页青色高亮
- 备注：徽标显示 thing 名（simpleName）而非 part 名——设计选择，部件信息在 thing 页内呈现；ThingPage.tsx:114 既有 lint 错误与本轮无关（遗留）

### 验收对照 · production line 首批 3 thing（2026-09-09 第六轮）

- [x] 3 新 thing 全链路：microwave（Food-Heating Radio Box，accent 橙）/ refrigerator（Cold Box，accent 蓝）/ elevator（Up-Down Room，accent 紫 #A78BFA —— 首个紫色系 accent）——数据 + 词条 + 几何 + 注册，各 7 部件 / 12-13 句 / flow 5-6 步 / keyExpressions 9
- [x] JX-7b finish 角色齐备（§1.5 当前标注新增三行）：每件 warning ≤ 2（elevator top-wheel+catch-teeth、refrigerator cold-maker+heat-watcher、microwave wave-maker）
- [x] Munroe 闸门 8 thing 全绿（新件 dict 豁免依赖：microwave 3 / refrigerator 1 / elevator 1 词）；validate-data 全通过，词典 96 词条
- [x] 标注防重叠引擎：3 新 thing 视角实测标签无重叠、激活标签优先占位、无槽位标签淡出不糊字（word→part 激活后标签重排实测）
- [x] 词表分包：WordsPage + word-list 拆懒加载 chunk（gzip 2.3KB + 3.6KB，主 bundle 不再含词表页）；/words 直达与 Home→/words 双路径零控制台错误
- [x] 浏览器回归：3 新 thing 阅读态渲染 / 词→图高亮（wave maker / cold maker / room 实测）/ flow 播放（microwave 02/06、elevator 03/06 中段实测）通过；Home 卡片 8/8
- [x] 构建链：tsc / build（255ms）/ validate-data / 闸门 exit 0

### 验收对照 · production line 第二批 3 thing（2026-09-09 第七轮，参考 Ogden Basic English 850 创作）

- [x] 3 新 thing 全链路：bicycle（Two-Wheel Push Machine，accent 绿 #4ADE80，transport 域补位）/ clock（Round Time Keeper，accent 黄 #EAB308，机械钟擒纵叙事）/ vacuum-cleaner（Dust Eater，accent 粉 #F472B6，气压物理）——各 7 部件 / 13-14 句 / flow 5 步 / keyExpressions 9
- [x] 几何探索三型：bicycle 纯线架（torus 轮 + Rod 菱形车架 + 链条双股线 + 刹车线）/ clock 半展开（表盘 10:10 双针在位，机芯四件拉出下方）/ vacuum-cleaner 在位剖视（microwave 式机身 + 左端拉出风机）——DraftLine 首次用于表盘刻度（12 线循环生成）与车轮辐条
- [x] Basic English 850 参考：vendored `scripts/data/ogden-basic-english-850.txt`（852 形式）；与 xkcd 表交叉核对仅 ~58% 重合，机器词（chain…）按产品设计走 dict 词条通道而非扩闸门
- [x] Munroe 闸门 11 thing 全绿（新件 dict 豁免依赖：bicycle 2 = bicycle+chain / clock 4 = clock+tick+tock+forth（forth 借微波炉词条，全局共享池符合设计）/ vacuum 3 = vacuum+tube+dirty（dirty 借洗衣机词条））；首跑抓 9 超纲词：chain 走词条、motor/rule/hungry/printed/speed/fully/guide 等 8 处改写
- [x] 词典 106 词条；validate-data 11 thing 全通过
- [x] 浏览器回归（CDP 硬刷新流）：3 新 thing 阅读态渲染完整零错误 / 词→图高亮（metal bones / turning heart / air puller 实测，文章滚句+标签重排）/ flow 多部件步（bicycle 04/05 转向杆+前轮、clock 05/05 双针、vacuum 02/05 嘴+鼻，past 部件半亮）/ dict 悬停卡（tube /tuːb/ 实测）/ Home 11/11 卡片
- [x] 构建链：tsc / build（242ms）/ validate-data / 闸门 / oxlint 新增代码零告警 exit 0

### 验收对照 · production line 第三批 3 thing（2026-09-09 第八轮，概念零重叠选题）

- [x] 3 新 thing 全链路：toilet（Water Swirl Seat，accent 天蓝 #38BDF8，虹吸水力学）/ speaker（Sound Box，accent 靛 #6366F1，电磁声学）/ drill（Fast-Spinning Hole Maker，accent 品红 #D946EF，齿轮减速）——各 6-7 部件 / 14 句 / flow 5 步 / keyExpressions 9；选题原则：与既有 11 thing 概念零重叠（弃 dishwasher≈洗衣机水+泵+皂、fan≈吸尘器风机+直升机旋翼）
- [x] 几何探索三型：toilet 侧视剖面（4-Rod 虹吸暗道路径 + 双水位 DraftLine）/ speaker 前视 X 光（锥盆-线圈-磁铁 z 轴堆叠 + 3 道声波弧线）/ drill 侧视朝右（三齿轮减速组 + 两段收细钻头 + 钻尖转动指示圈）
- [x] Munroe 闸门 14 thing 全绿（新件 dict 豁免依赖：toilet 7 = toilet+handle+tank+bowl+pipe+float+chain（float 借空间站、chain 借自行车；flows/screws 经屈折通道由 flow/screw 词条覆盖）/ speaker 3 = wire+magnet+apart（apart 借核反应堆）/ drill 5 = drill+strength+button+speed+grip）；首跑抓 24 超纲词：概念词 11 个走词条通道（handle/tank/bowl/pipe/flow/wire/button/speed/strength/grip/screw，dict 分词 132→143）、普通词 13 处改写（tight/glued/mixing/clicks/trades/frame/endless/mix/brush…）
- [x] 词典 121 词条；validate-data 14 thing 全通过
- [x] 浏览器回归（CDP 硬刷新流）：3 新 thing 阅读态渲染完整零错误 / 词→图高亮（water tank / sound wire / power box 实测）/ flow 多部件步（toilet 05/05 float ball+fill pipe 双亮、speaker 02/05 wire ring+still magnet 双亮、drill 03/05 speed-changer 齿轮组）/ dict 悬停卡（toilet /ˈtɔɪlət/、speaker /ˈspiːkər/、drill /drɪl/ 实测）/ Home 14/14 卡片
- [x] 构建链：tsc / build（271ms）/ validate-data / 闸门 / oxlint 新增代码零输出 exit 0

### 验收对照 · production line 第四批 3 thing（2026-09-10 第九轮，光学/电化学/微型机械三新域）

- [x] 3 新 thing 全链路：camera（Light Catcher Box，accent teal #2DD4BF，光学汇聚与倒像）/ battery（Power Can，accent 烧橙 #EA580C，power 域第二件，电化学缓释交换）/ zipper（Teeth Catcher，accent cyan #22D3EE，微型机械互锁）——各 6-7 部件 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 几何探索三型：camera 左视光路图（镜筒三层圆柱 + 6 条淡墨光线过镜心交叉铺到感光板，倒像原理图）/ battery 同轴分层沿 x 炸开（碳棒→隔膜→电解膏→锌层→钢壳，顶帽按钮在钢壳顶 + 外电路方框线绕行）/ zipper 正视图（13×2 开口齿 + 左段互扣加厚 + 滑块前探劈齿墙 + Y 形通道淡墨）
- [x] 预检工作流升级：动笔前对闸门双表（xkcd 原表 + SIMPLE_WORDS 合并表）批量预 grep 生僻词（四轮约 130 词，含 motor 等 batch 2/3 教训词）——camera 首跑零超纲，全批首跑仅 9 处（batch 3 为 24 处）
- [x] Munroe 闸门 17 thing 全绿（新件 dict 豁免依赖：camera 2 = lens+upside（camera 一词本在 xkcd 表内，仍配词条供悬停卡）/ battery 7 = battery+trade+rod+paste+cap+apart+wire（apart 借核反应堆、wire 借音箱）/ zipper 4 = zipper+button+apart+cloth（button 借电钻））；概念词 5 个走词条（rod/paste/cap/cloth+trade/charge 等，dict 分词 143→154）、改写 4 处（hero→keeper、trick→idea、steel→metal、depends/stack）
- [x] 词典 132 词条；validate-data 17 thing 全通过
- [x] 浏览器回归（CDP 硬刷新流）：3 新 thing 零错误 / 词→图高亮（light bender / first metal 双处同亮 / teeth 实测）/ flow 多部件步（camera 05/05 picture keeper+back screen、battery 01/05 双金属、zipper 04/05 双止位块）/ dict 悬停卡（camera /ˈkæmərə/、battery /ˈbætri/、zipper /ˈzɪpər/ 实测）/ Home 17/17 卡片
- [x] 构建链：tsc / build（283ms）/ validate-data / 闸门 / oxlint exit 0

### 验收对照 · production line 第五批 3 thing（2026-09-10 第十轮，锁/剪/笔机械三件，首批 dsx 三鲜流水线）

- [x] 3 新 thing 全链路：lock（Key Turner，accent amber #F59E0B，弹子锁"销跨线卡中盘"）/ scissors（Two-Blade Cutter，accent rose #FB7185，剪切点行走 + 杠杆放大）/ pencil（Writing Stick，accent lime #A3E635，石墨落尘于纸面山谷）——各 6-7 部件 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 几何探索三型：lock 正对锁芯剖面（外圈壳环 + 可转中盘 + 5 组销/弹簧错落 + 台阶钥匙 + 金属板门闩，切割线横贯）/ scissors X 交叉正视图（双臂双刃双环 + 修磨面 + 剪切点标记 + 纸分两片，切割竖线 + 行走路径）/ pencil 沿 x 装配分解（主轴杆件 + 下侧芯/漆皮/六边截面 exploded，左端纸面承接尘点 + 引线回装）
- [x] 首批 dsx 三鲜流水线：🥔 claude 词汇三轮预检（约 150 词）+ 设计简报 + 亲审 12 文件 diff（修正 flow ref 错位 5 处、笔尖锥体朝向、底销错落、纸面边缘线）/ 🍆 codex 实现（闸门迭代 1h26m 全绿，9 处简报漏检词自纠：thousand→hundred、straddles→crosses、loops→rings、valleys→low spots、baked→made hard with fire 等）/ 🫑 pi 独立验证（闸门独立复跑 + 底销错落像素级复核 + CDP 六项回归 13 张截图，2 处 minor off-by-one 全采纳修复）
- [x] Munroe 闸门 20 thing 全绿（新件 dict 豁免依赖：lock 2 = pin+bolt、scissors 8 = scissors+pivot+blade+handle+lever+screw+cloth+apart、pencil 6 = pencil+graphite+clay+tip+blade+float）；词典 132→142 词条（新 10：lock/pin/bolt、scissors/lever/pivot、pencil/graphite/eraser/clay）、dict 分词 154→164
- [x] validate-data 20 thing 全通过；构建链 tsc / build / validate-data / 闸门 / oxlint exit 0
- [x] flow sentenceRef 修正后终态（caption↔滚动句逐句核对）：lock 5,6,8,9,11 / scissors 2,3,5,6,8 / pencil 1,6,8,10,11，全部单调递增；funFact 措辞稳健化（car-hours→步行一整日）
- [x] 浏览器回归（CDP 硬刷新流，pi 独立执行）：3 新 thing 零错误 / 词→图高亮（pin groups 29k 琥珀 / blades 31k 玫红 / black heart 16k 青柠像素实测）/ flow 步进（scissors 双部件步 ×2、pencil rub-end+metal-ring）/ dict 悬停卡（lock /lɒk/、scissors /ˈsɪzərz/、pencil /ˈpensl/）/ Home 20/20 卡片 + "20 THINGS LOADED"

### 验收对照 · production line 第六批 3 thing（2026-09-10 第十一轮，熨/镜/阀家居三件，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：iron（Cloth Presser，accent red #EF4444，热压塑形 + 汽蒸穿透）/ glasses（Eye Helpers，accent indigo #818CF8，光学域第二件，厚薄镜片折光回焦）/ faucet（Water Key，accent blue #60A5FA，螺纹增压 + 陶瓷双盘启闭）——部件 7/6/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 几何探索三型：iron 侧视剪影（布条双线 + 旧折痕锯齿 + 前尖楔底板 + 剖视热杆 + 5 蒸汽孔 + 十字调温盘 + 双段电源线，蒸汽波纹 + 热箭头）/ glasses 正视主图 + 下方光路小图（torus 镜圈 + 薄盘镜片；三平行光线经凸透镜剖面汇聚到后壁焦点、焦点后微发散——焦点 x 取 0.95 与后壁线对齐，简报 0.9 系笔误，实现取值光学更准）/ faucet 侧剖图（墙体砖纹 + 墙内水管 + 双盘阀孔标记 + 螺纹杆 + 十字把手 + 水路虚线 + 八边形气泡 + 接水碗）
- [x] dsx 工序升级——全文定稿简报：🥔 简报直接给出 14 句逐句定稿（全局句序号 + 内联标注），🍆 codex 纯转录零改写（1h01m 五闸门全绿）；亲审零修复（batch 5 为 6 处）；🫑 pi 独立验证零缺陷可提交（六节全 pass + 19 截图）。三鲜互捕照常生效：词汇漏检 1 处（pole，codex Munroe 闸门自纠为 stick ×3）、dict 字段契约纠偏 1 处（简报 ipa 笔误 → phonetic/pos/meaning）、焦点坐标纠偏 1 处（见上）
- [x] Munroe 闸门 23 thing 全绿（新件 dict 豁免依赖：iron 5 = iron+handle+cloth+steam+wire（cloth 借拉链、wire 借电池）、glasses 3 = apart+screw+focus（apart 借核反应堆、screw 借剪刀）、faucet 3 = faucet+pipe+screw（pipe 借马桶））；词典 142→145 词条（新 3：iron / focus / faucet）、dict 分词 164→167
- [x] validate-data 23 thing 全通过；构建链 tsc / build（330ms）/ validate-data / 闸门 / oxlint exit 0
- [x] flow sentenceRef 终态（caption↔滚动句逐句核对）：iron 0,3,9,11,12 / glasses 3,4,6,7,9 / faucet 1,3,6,7,8，全部单调递增
- [x] 浏览器回归（CDP 硬刷新流，pi 独立执行）：3 新 thing 零错误（WebGL 均 288 clears）/ 词→图高亮（iron 红 724→6,558 / glasses indigo 718→4,436 / faucet 蓝 384→2,166 像素实测）/ dict 悬停卡（iron /ˈaɪərn/、glasses 末段 focus /ˈfoʊkəs/、faucet /ˈfɔːsɪt/）/ flow 字幕↔句子各 5/5 强匹配 / 多部件步（iron 步 3 water-room+steam-holes、步 5 heat-maker+power-wire；glasses 步 5 side-arms+ear-bends+turn-screws 三部件；faucet 步 2 hand-turner+turning-screw）/ Home 23/23 卡片 + "23 THINGS LOADED"

### 验收对照 · production line 第七批 3 thing（2026-09-10 第十二轮，灯/钉/艇三域各一，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：light-bulb（Light Maker，accent yellow #FACC15，power 域第三件，白炽发光 + 惰气保护）/ stapler（Pin Presser，accent purple #A855F7，杠杆击发 + 弯板折脚）/ submarine（Under-Water Boat，accent green #10B981，transport 域第四件，压载沉浮 + 声呐视觉化）——部件 7/6/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 几何探索三型：light-bulb 竖直剖视（低分段玻球 + 三环灯丝螺线 + 双托举杆 + 中央双引线 + 五气体环 + 螺纹圆柱 + 底触点球 + 放射光线——glow 被词表禁用，几何替词说话）/ stapler 侧视击发定格（长臂微抬 + 铰点圆柱 + 推头 + 弹仓三 U 针 + 四环弹簧 + V 槽弯板 + 纸组 + mid-strike 针 + 下压箭头）/ submarine 侧视悬停（主筒双球 + 帆 + 双鞍形水舱 + 三瓶气簇 + 三叶桨 + 水平翼 + 潜望镜 + 艏声呐球 + 三道声波弧 + 左段水面虚线 + 下潜箭头）
- [x] 亲审 1 处修复：段落形态 4-4-4-2 → 3-4-4-3（全站节律统一；🥔 简报上游错误，🍆 忠实转写并如实上报）。纯段落边界移动，句序/flow refs/标注零变化；重组后 P2 语义收拢为机构核心段（bulb 灯丝故事 / stapler 完整击发循环 / submarine 完整沉浮循环）。转写保真度：42 句逐句零误差；codex 两处裁量合理——撇号归一弯引号（house style）、装饰元素归一淡墨 DraftLine（拒绝简报 accent 着色过-spec）
- [x] 词汇改写大批——本批禁词 38 个（glow/shine/fold/tight/tilt/steer/purpose/whenever/level/height/neither/aside/dips/hammer/tool/whales/echo/squeeze/liquid/melt/needle/thread/sewed/sewn/enemy/blink/candles/oil/base/bump/flap/glide/glued/loaded/oceans/trick 等）：预检三轮收敛，FAIL 终态仅 3 新词条（+复数）；关键改名 light-wire（glow 表外）/ tip-wings（复用 pencil 的 tip 词条）/ Pin Presser（pinch 表外）；简报字段契约纠偏 3 处（accent→color、DictEntry[]→Record<string, DictEntry>、sketchMap→GEOMETRY，codex 按代码库实际契约自纠）
- [x] Munroe 闸门 26 thing 全绿；词典 145→148 词条（新 3：bulb / stapler / submarine）、dict 分词 167→170；dict 豁免依赖 light-bulb 5 = bulb+wire+gas+screw+flow、stapler 4 = stapler+pin+lever+iron、submarine 4 = submarine+tip+tube+football（pi 复核 13 个豁免词全部真实词条、仅 3 新增——无堆词条绕闸门）
- [x] validate-data 26 thing 全通过；构建链 tsc / build（307ms）/ validate-data / 闸门 / oxlint exit 0
- [x] flow sentenceRef 终态（caption↔滚动句逐句核对）：light-bulb 4,7,8,9,10 / stapler 3,4,5,6,7 / submarine 4,5,7,8,10，全部单调递增（pi 15 条 caption 逐条语义对应确认）；submarine 的 hard-skin / long-eye 不进 flow（结构件与观察件，承 faucet 部件不全覆盖先例）
- [x] 浏览器回归（CDP 硬刷新流，pi 独立执行）：3 新 thing 零 error（12 条消息全为既有 THREE.Clock warning 基线）/ Home 182/182 字段（26 卡 × 7）逐项对齐数据源，末三卡 Light Maker #FACC15 / Pin Presser #A855F7 / Under-Water Boat #10B981 / 词→图高亮像素实测（静息 accent=0 → 点击后 20668 / 18953 / 16927，证明真实高亮无 stray）/ 图→文各命中 ≥2 部件 / flow 5/5 步点亮 / dict 悬停卡恰为本批 3 新词条（bulb /bʌlb/、stapler /ˈsteɪplər/、submarine /ˌsʌbməˈriːn/）/ 38 张截图留证（tmp/screens/b7-*.png）；pi 判定可提交（0 blocker / 0 major，4 条 minor 观察均不阻塞）

### 验收对照 · production line 第八批 3 thing（2026-09-10 第十三轮，space×2 + power×1 类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：telescope（Sky Eye，accent orange #F97316，space 域第三件，折射成像 + 回望时间）/ space-suit（Space Clothes，accent rose #F43F5E，space 域第四件，软飞船生命维持系统）/ windmill（Wind Turner，accent cyan #06B6D4，power 域第四件，风能三级增速发电）——部件 6/7/6 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 几何探索三型：telescope 横置折射侧视（低分段镜筒 + 前镜片双环 + 目镜锥 + 顶部寻星镜 + 云台旋钮 + 三脚架 + 三线会聚入射光 + 十字星记 + 地面虚线）/ space-suit 正面立姿（头盔球 + 面窗环 + 躯干双臂双腿 + 颈环 + 内衬水冷盒三层墨线 + 背包 + 双段气路管 + 手套球对 + 靴对 + 太阳放射线 + 热反射线 + 星记）/ windmill 侧视转子朝前（三桨叶 120° + 轮毂球轴 + 机舱 + 齿轮对 torus + 发电机筒 + 双半径锥形塔 + 交叉撑杆 + 来风虚线 + 小屋剪影 + 五点折线电线）
- [x] 亲审零修复：42 句转写零误差（连续第二批全对）；段落 3-4-4-3 从设计简报起即正确排布（第十二轮教训落地）；DraftLine 多点折线核实为原语原生支持（windmill 电线五点折线 + 小屋轮廓闭合折线）；风机塔架以 cylinderGeometry 双半径（0.1/0.22）实现锥形，优于简报规格（codex 合理裁量）；tsc / validate-data / check-simple-words 三道快闸门亲审后独立复核，与 codex 报告完全一致
- [x] 词汇改写：本批禁词 19 个改述规避（altogether/boil/curve/curved/evenly/farms/fourteen/million/thousand/nine/sixty/nowhere/plane/practice/stream/weak/weather/web/upside），预检三轮收敛，FAIL 终态仅 5 新词条（+复数）；数字词系全表外（fourteen/thousand/million/nine/sixty 均改述：light older than the whole human story / half a hundred years ago / twenty times in a minute / Most of the new power machines）；色彩查重改锚（原选 #FB7185/#22D3EE 已被既有件占用 → rose-600 #F43F5E / cyan-500 #06B6D4）
- [x] Munroe 闸门 29 thing 全绿；词典 148→153 词条（新 5：telescope / planet / balloon / windmill / gear）、dict 分词 170→175；dict 豁免依赖 telescope = telescope+planet+tube、space-suit = balloon+gas、windmill = windmill+gear+blade+cloth（pi 复核豁免词全部真实词条、零冲突）
- [x] validate-data 29 thing 全通过；构建链 tsc / build（272ms）/ validate-data / 闸门 / oxlint exit 0
- [x] flow sentenceRef 终态（caption↔滚动句逐句核对）：telescope 3,5,7,8,9（far-glass 两现：折焦 s3 + 集光 s9）/ space-suit 3,4,5,6,7（连续机构链）/ windmill 3,4,5,6,7（连续机构链），全部单调递增（pi 15 条 caption 逐条同构确认，含存疑项 telescope s9 "older light" ← "their light left them before there were any people on Earth" 判定匹配）；不入 flow 部件：telescope long-tube（容器）、space-suit soft-suit+moon-boots（结构/着装）、windmill nose-box（舱体），承 submarine 先例
- [x] 浏览器回归（CDP 硬刷新流，pi 独立执行）：3 新 thing 零 error（12 条消息全为既有 THREE.Clock warning 基线，非本批引入）/ Home 29 卡片全字段对齐数据源（页脚/分类/过滤 29·4·4·4·17），末三卡 Sky Eye #F97316 / Space Clothes #F43F5E / Wind Turner #06B6D4 / 词→图高亮像素实测（静息 accent=0 → 点击后 12171 / 34932 / 14089，证明真实高亮无 stray）/ flow 5/5 步点亮 / dict 悬停卡本批 5 新词条全验（telescope /ˈtelɪskoʊp/、planet /ˈplænɪt/、balloon /bəˈluːn/、windmill /ˈwɪndmɪl/、gear /ɡɪər/）/ 装饰约束双向反证（几何文件零 hex 色 + 静息 accent 像素 0）/ 41 张截图留证（tmp/screens/b8-*.png）；pi 判定可提交（0 blocker / 0 major / 0 minor，两处疑似异常均为 pi 验收脚本自身缺陷已修正：mouseenter 需先移出目标、青色像素判别阈值漏混合色）

### 验收对照 · production line 第九批 3 thing（2026-09-10 第十四轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：train（Iron Road，accent lime #84CC16，transport 域第五件，钢轮钢轨低阻力 + 接触网供能系统）/ rocket（Space Fire Ship，accent violet #7C3AED，space 域第五件，反冲推进 + 分级抛离 + 逃逸塔）/ dam（Water Wall，accent sky #0EA5E9，power 域第五件，高差蓄能 + 水轮发电）——部件 6/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 候选修正记录：batch 8 收口稿原列 helicopter 为 batch 9 候选，起草时发现 helicopter 是原站 5 个初始 thing 之一（双重计数错误），以 dam 替换——类别分布 17/5/5/5 均衡；产线规约增补：候选起草前先 grep things.ts 查重
- [x] 几何探索三型：train 侧视列车（机车+受电弓∧+通长接触网+3 客车+车钩+16 轮 8 轴位每车 2 轴位+双轨+轨枕/速度线/支柱装饰）/ rocket 立式堆叠（双级贮箱+级间环+双半径钟形喷管+双助推器+锥顶乘员舱+逃逸塔杆+120° 三尾翼+之字主焰/星十字/8 段折线月亮）/ dam 侧视剖面（三级阶梯坝体+上游水面薄板+斜穿引水管×2+厂房双水轮 torus+发电机+鱼道 4 级阶梯+溢洪之字/下游水面/输电线装饰）
- [x] 亲审记录（2026-09-10，claude 全量亲读 9 文件 + 3 注册 diff）：42 句逐字比对一致（弯引号/破折号/段落 3-4-4-3、flow refs 3 组、keyExpressions 27 条、funFacts 9 条、parts 表 20 项、颜色 3 项全部符合简报）；注册纯追加 +18 行、原站 5 件未触碰。三处修正：① codex 报告的偏差——简报漏给 fish-way 正文标注（设计缺陷，validate-data 闸门要求每部件可点亮），codex 临时挂 s0 "the river" 属语义错误锚点，亲审撤销并改为 s6 尾部正式从句 "— while fish climb their own small fish way beside the wall."（新词 7 个全过 xkcd 原表）；② 亲审发现 codex 未报告——dam 鱼道阶梯方向朝下游爬升（物理反向），改为贴下游面从下游水面 (0.4,-0.7) 爬至库面下 (-0.35,0.5)；③ train 轮组 8 轴位 16 轮 vs 简报 5 轴位（简报笔误，codex 每车 2 轴位分布更合理，接受，pi 独立复核出同一矛盾）。修正后五闸门独立重跑全绿
- [x] 词汇改写：本批禁词 40+ 改述规避（helicopter 批：apart/balance/bell/coal/costs/eighty/electric/exists/feathers/fog/frames/freedom/health/invisible/kilometers/loads/muscle/nine/patch/pillow/pole/price/science/sealed/sink/skid/smooth/square/stacked/steady/steering/sweeping/swimming/tail/tower/twin/warn → 弃用整篇；dam 批：base/height/lake/measured/melting/slopes/steep/swim 改述），预检五轮收敛，FAIL 终态仅 4 新词条（dam/rail/rocket/fuel + 复数）
- [x] Munroe 闸门 32 thing 全绿；词典 153→157 词条（新 4：dam / rail / rocket / fuel）、dict 分词 175→179；dict 豁免依赖 train = iron+trade+wire+rail+speed+float+tube+fuel、rocket = rocket+gas+fuel+rod+cloth+speed、dam = dam+windmill+battery
- [x] validate-data 32 thing 全通过；构建链 tsc / build / validate-data / 闸门 / oxlint exit 0
- [x] flow sentenceRef 终态：train 3,4,5,6,7（rail-lines 两现：s6 导引 + s7 滚动）/ rocket 3,4,6,8,9 / dam 3,4,6,7,8（wall→water→pipe→wheel→power 能量链），全部单调递增；不入 flow 部件：rocket fuel-rooms+people-room（容器/乘员）、dam water-gate+fish-way（安全阀/附属），承 batch 8 先例
- [x] 浏览器回归（CDP 硬刷新流，pi 独立执行，123 张截图，目标 ≥30）：Home 32/32 卡（Move 5 / Space 5 / Power 5 分类正确）；三页静息 accent=0 → 词→图点亮 sky 像素 +2283 / +1244 / +16704，图→词回滚高亮，flow 5 步全亮（2.9k–61k px，0.75 alpha 混合阈值吻合）；鱼道专项：点 fish way → active=["fish way"]、sky 0→11091 px；既有件 helicopter / windmill / submarine 回归正常；两处异常根因定位均非本批缺陷（rocket flow 1–2 步取景伪影——scrollTo 决定性实验证实；右上角彩色簇为 batch-8 既有 sticky chrome）；pi 判定可提交（0 blocker / 0 major / 0 minor）

### 验收对照 · production line 第十批 3 thing（2026-09-10 第十五轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：ship（Water Walker，accent blue #3B82F6，transport 域第六件，浮力支承 + 螺旋桨推进 + 压载稳性）/ satellite（Little Moon，accent indigo #4F46E5，space 域第六件，轨道下坠不落地 + 太阳翼供能 + 反作用轮姿态）/ sun-catcher（Sun Catcher，accent amber #D97706，power 域第六件，光伏效应 + 逆变 + 逐日支架）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 候选查重前置（batch 9 教训制度化）：起草前 grep things.ts 全 32 slug，space-ship 因与 batch 9 rocket 内容撞车（Saturn V 叙事已覆盖）弃选改 satellite；ship / satellite / sun-catcher 无冲突
- [x] 词汇预检三轮收敛（历史最快）：本批改写 ~31 处（load→the more you put on it / hollow→empty inside / giant,king→the heaviest thing that ever walked on water / trick,secret→The answer is speed / brushes→pushes against it, a tiny touch at a time / steered on purpose→brought down on their last day / seasons→as the year turns / printed like a spider's net→drawn from edge to edge / repair room→dry room where ships are fixed 等），终态 FAIL 仅 3 计划词条 + 伪 token；预检脚本 false-pass bug（fin→fining 撞表）由真闸门兜底抓获并已修复（stem 列表移除废码 `"${w%ing}ing"`），check11.sh 起不再复现
- [x] 亲审记录（2026-09-10，claude 全量亲读 12 文件 + 3 注册 diff）：42 句逐字比对一致（弯引号/破折号/段落 3-4-4-3、flow refs 3 组、keyExpressions 27 条、funFacts 9 条、parts 表 21 项、颜色 3 项全部符合简报）；注册纯追加、原站 5 件及既有 27 件未触碰。三处裁定：① codex 报告偏差——简报漏判 fin（预检脚本废码 `"${w%ing}ing"` 对非 -ing 词凭空造词 fin→fining，恰撞 xkcd 表 1045 行，false-pass；脚本已修复），codex 最小替换 wing 被否决（与 s5 螺旋桨 "turning wings" 隐喻冲突、正文与 3D 标签 Back Fin 不一致、舵非翼），终审改走 dict 词条通道：shipDict 增 fin /fɪn/ 鳍；尾翼，舵，s6 恢复 "back fin" 并挂 dict 双标注，caption 4 恢复 fin；② codex 未报告裁量——dish/net 两处 part+dict 双标注，经查 MarkedSeg 类型文档明示 "part 关联 和/或 词条"、渲染层点击/悬停两通道独立，裁定接受且 fin 统一同模式；③ 亲审新发现——ship 水线 y−0.44 画在船底（−0.425）之下，整船悬于水面，与 s4 "under the water line" 矛盾，修正水线至 −0.30（穿船体下部、机舱没水）、桨下移 −0.5 全浸、首波/尾流装饰随调。修正后五闸门 + oxlint 独立重跑全绿
- [x] 几何三型：ship 侧视（船首收尖 + 船尾内部机舱 + 螺旋桨 3 叶 + 舵 + 双层驾驶楼 + 3 货舱口 + 纵贯压载龙骨 + 水线/首波/尾流装饰）/ satellite 立式（双侧太阳翼 + 格栅线 + 内部脑箱 + 双反作用轮 + 对地眼 + 顶置碟 + 星敏感器 + 四角推力器 + 信号弧/地球弧装饰）/ sun-catcher 斜置面板（glass→wire-net→light-plate→back-board 四层序 + A 形支架 + 枢轴 + 落地逆变器 + 太阳/光线/走线装饰）
- [x] 词典 157→162 词条（新 5：ship /sat/ 轮船、fin 鳍；尾翼、satellite 卫星、dish 碟形天线、net 网）、dict 分词 179→184；ship 词-物锚定 span（s0 [ship|dict:ship]）沿 rocket/dam 先例，fin/dish/net 三处 part+dict 双标注为产线首用（MarkedSeg 类型设计内能力：点击→部件高亮、悬停→释义卡两通道独立）
- [x] Munroe 闸门 35 thing 全绿；validate-data 35 thing 全通过；构建链 tsc / build / validate-data / check-simple-words / oxlint exit 0
- [x] flow sentenceRef 终态：ship 3,4,5,6,7（body→room→foot→fin→watch 操纵链）/ satellite 3,4,5,6,8（wings→brain→eye→dish→wheels 能量-信息-姿态链）/ sun-catcher 3,5,7,8,9（plate→net→changer→turner→legs 光电链），全部单调递增
- [x] finish 模式：ship/sun-catcher 三色齐（红/钛白/外壳灰）；satellite 无容器件（线框本体，余冷灰）为产线首例，简报明示；修订 #1：back-board cold→hull（背板=保护性容器件，JX-7b 外壳语义）
- [x] pi 独立验证（2026-09-10，tmp/batch10-verify-report.md，判定可提交）：五闸门独立重跑全绿（35 things / 词典 162 / 分词 184 / build 697 modules / oxlint 批内 0 告警）；数据完整性 12 类检查全过（段落 3-4-4-3、1:1 部件标注、warning 各 1、双标注恰 3 条、装饰纯 DraftLine）；浏览器矩阵全绿——三件静止态 accent 基线 0、词→图点亮 gains ship 20940 / satellite 8869 / sun-catcher 10111、图→词双向各 2 部件、词典卡片全量 true、双标注三件 click→高亮 + hover→词条卡两通道均 true、flow 5 步字幕/句/点亮全对（步点像素 4706~29335）、practice + keyExpressions 完整；Home 35 卡 + Move/Space/Power 各 6 正确入列；存量 8 件（helicopter/dam/windmill/train/rocket/submarine/telescope/light-bulb）零回归；控制台零新增错误（仅 THREE.Clock 既有告警）；54 截图留证（tmp/shots10/）；几何语义 satellite/sun-catcher 全符（sun-catcher 四层层序未倒置）、ship 7 项中 6 符
- [x] 终审修订（claude，2026-09-10）：pi 建议级——push-room [0.7,0.38,0.5]@[0.95,−0.2] 水下仅 23.7%（s4 "under the water line" 要求大半浸没），落盘改为 [0.7,0.20,0.5]@[0.95,−0.325]：浸没率 62.5%、底边贴船底线不出包络、与压载龙骨（顶 −0.43）零重叠（机舱坐压载舱顶，符合真船构造），水线 −0.30 与 back-fin 半浸锁定不动，部件表锚点同步；五闸门 + oxlint 重跑全绿，截图目视复核（b10-ship-after-pushroom.png）。三项待复核由终审读图关闭：① 水线视觉正确（整船没水非悬空）② flow-1 accent 触底行系 flow UI 进度条非几何裁切 ③ viewport-only 截图方法论偏离沿 batch-9 先例记录在案

### 验收对照 · production line 第十一批 3 thing（2026-09-10 第十六轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：hot-air-balloon（Hot Air Ball，accent orange #F97316——#FACC15 已被 light-bulb 占用改选橙红，火语义；transport 域第七件，热空气浮力 + 开顶收口 + 风层导航）/ moon-lander（Moon Jumper，accent #FBBF24，space 域第七件，两级构型 + 降落制动 + 抛级返航）/ water-wheel（Water Turner，accent #22C55E，power 域第七件，高位落水 + 齿轮变速 + 磨石制粉）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 候选查重前置：起草前 grep 全 35 slug，space telescope（telescope 已存在）/ Mars car（curiosity-rover 同题材）/ nuclear battery（battery 同题材）弃选，三新件无冲突
- [x] 词汇预检**一轮收敛 FAIL 清零**（产线最快）；8 个 dict 依赖词全为既有词条 → **产线首例零新增词典批**（词典 162 词条 / 184 分词与 batch 10 完全一致，dictionary.ts 不动，批次 8 文件制：6 新 + 2 注册）；dict span 10 处：balloon fuel/cloth/balloon、lander float/fuel/ship、water gear（**s6 "gear wheels" part+dict 双标注**）/trade/speed/steam
- [x] 亲审记录（2026-09-10，claude 全量亲读 8 文件 + 2 注册 diff）：数据层逐字比对**零偏离**（42 句 / 部件表 / flow / keyExpressions / funFacts / 配色 / 注册纯追加）；7 项裁定 6 项修复落盘——① 简报坐标错 ×3：balloon tie-lines 顶端悬空（改 mouth 缘四角 [±0.24,0.31,±0.24]）、water 水槽末端低于轮缘顶（抬升至 [-1.25,1.32,0]，末端 (-0.706,1.238) 全程高于轮缘，闸门/落水线随调）、lander 梯子陷入金箔八棱柱（径向 0.578 < 内切半径 0.61，改正面居中 face-on z0.68 双轨 6 踏）；② codex 偏离 ×2：风箭两层同向（s10 要求反向，低层翻转左指）、磨坊立柱画到地面线以下（改 y-0.5→-0.85）；③ codex 遗漏 ×1：gore 经线装饰（补 3 弧 φ=π/4,π/2,3π/4）；④ 追认裁量 ×1：spindle 竖杆直立于齿轮轴入下磨石（简报原写斜连石心，竖直更合磨坊构造）。修复后五闸门 + oxlint 独立重跑全绿，CDP 截图目视复核 6 项到位
- [x] 几何三型：balloon 纵构图（倒雨滴 envelope 1.15 拉伸 + 3 gore 经线 + 微喇叭火口 + 燃烧器支柱 + 吊舱 + 舱内双燃料瓶 + 4 系绳 mouth 缘→吊舱角 + 高低两层反向风箭 + 火/云/地装饰）/ lander 侧视两级（八角金箔柱包下级 + 双窗上级 + 钟形降落喷管 + 顶置上升发动机 + 4 外张腿圆足垫 + 正面居中梯 + 月面弧/四星/地球弧线装饰）/ water-wheel 侧视（12 boards 径向均布 + 8 轮辐 + 双齿轮齿尖交错啮合（圆心距 0.426 ≈ 齿尖半径和 0.43）+ 双磨石叠置 + 水槽高位左上斜置 + 立闸提杆 + 3 落水线 + 磨坊轮廓 + 河面线波浪装饰）
- [x] finish 模式：balloon/water-wheel 三色齐（红/钛白/外壳灰）；**moon-lander 双警示件 landing-fire + up-engine（warning 2 = 上限，产线首例）**，validate-data warning ≤2 规则内合法
- [x] Munroe 闸门 38 thing 全绿；validate-data 38 thing 全通过；构建链 tsc / build（703 modules）/ validate-data / check-simple-words / oxlint exit 0
- [x] flow sentenceRef 终态：balloon 2,3,6,8,10（cloth-bag 两现步 1/5，mouth→fire→box→door→bag 升空链）/ moon-lander 2,7,8,9,10（两室→落火→腿→梯→升火 任务链）/ water-wheel 3,4,5,6,11（road→gate→wheel→gears→stones 水力链），全部单调递增
- [x] pi 独立验证（2026-09-10，tmp/batch11-verify-report.md，判定**可提交**，0 阻塞 3 建议）：五闸门独立重跑全绿（38 things / 词典 162·184 零新增核实 / build 703 modules / oxlint 批内 0 告警）；亲审 7 裁定 6 落盘修订**逐条确认** + 第 7 项一致；数据完整性全过（段落 3-4-4-3、1:1 部件标注、warning 配额、双标注恰 1、flowRefs 单调、曲撇 house style）；浏览器矩阵全绿（三件静息 accent 0、词→图双向各 2 部件、双标注 gear 两通道独立 true、flow 15 步 caption/句/部件全对——13 步高亮在可视画布内，余 2 步为整页自动滚动取景现象非高亮失效、practice + keyExpressions 完整）；Home 38 卡 + Move/Space/Power 各 7 正确入列；既有 11 件零回归；控制台仅 THREE.Clock 既有告警；几何方向/层序像素自检全对（风箭反向、落水线终点贴轮缘 y1.088≈1.09、lander 竖向层序单调、齿轮齿尖交错压深、金罩内切余量 0.022）；77 截图留证（tmp/shots11/）
- [x] pi 建议级 3 项记录在案（不阻塞）：① 流程播放整页自动滚动（step5 水车 +452px）致部件出视口——UX 观察待后续统一处理；② 页头右上同色系静态发光污染 accent 统计——验证方法学；③ autoRotate 下细几何点击偶发落空——验证方法学（源码核对部件名一一对应，非产品缺陷）

### 验收对照 · production line 第十二批 3 thing（2026-09-11 第十七轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：airplane（Metal Bird，accent sky #7DD3FC，transport 域第八件，机翼升力差 + 喷气反推 + 升降配平）/ comet（Sky Ice Ball，accent #67E8F9，space 域第八件，冰核升华 + 双尾反日 + 长轨回归）/ steam-engine（Steam Horse，accent red #DC2626，power 域第八件，闭箱汽压 + 往复转旋 + 飞轮储能）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 候选查重前置：起草前 grep 全 38 slug，三件无题材冲突（airplane vs helicopter/balloon 飞行域不撞叙事；comet vs rocket/satellite 航天域不撞；steam-engine vs train 只借"iron horses"一句收束）
- [x] 词汇预检一轮收敛 FAIL 清零；wing 查得 xkcd 原表在列免立词条 → 仅新增 3 词条（jet / comet / tail），词典 162→165 词条、184→187 分词；dict span 13 处：airplane 7（float/difference/fuel/tube/tail/trade 纯 + **s3 jets part+dict 双标注**，产线第二个 part:dict 双标注批次件）/ comet 3（comet/gas/tails 复数 span→单数 key）/ steam-engine 3（steam/iron/rail）
- [x] **预检保真度事故与修复（本批工艺教训，已制度化为预检脚本内注释）**：预检脚本 er/est 屈折循环漏抄 `endsWith` 守卫，对任意词生成幻影词干（bike→be / weighs→we / worth→wore，恰全为表内词）造成假放行——codex 真闸门拦下 4 处（bike×2→two-wheel machine / weighs→is heavier than / worth→of use），裁定批准；`scripts/check-simple-words.mjs:72` 原闸门本有守卫，预检复制时失真——**后续批次预检脚本以闸门源文件为唯一蓝本**
- [x] 亲审记录（2026-09-11，claude 全量亲读 8 新文件 + 3 注册 diff + CDP 三页截图）：数据层逐字比对零未申报偏离；codex 7 项申报偏差全批准（4 词汇改写 + DraftLine 装饰解简报自相矛盾 + comet tuple 类型 + 711 modules 系简报算术误差 703+8）；几何解析核验——机头锥 +x 尖/尾锥 -x 细端、翼后掠 ∓0.3、曲柄销距轮心 0.283、炉门居中于火箱正面 z0.225
- [x] 几何三型：airplane 侧俯视（机身圆柱 + 头/尾锥 + 双翼后掠 + 双喷气吊舱带撑杆 + 尾翼/垂尾 + 三点起落架 + 驾驶舱双窗/六客舱窗 + 云三朵 + 尾后速度线）/ comet 侧视（双核冰球 + 暗皮 + 暖云 + 三喷气孔杆 + **尘尾四条两段折线（凹面朝阳）/ 离子尾三条直线（严格反日）双尾物理** + 长轨两段断口于彗发 + 太阳八边 + 六射线 + 运动箭头 + 四星）/ steam-engine 侧视（火箱 + 炉门/双火苗 + 卧式锅炉 + 烟囱/三烟团 + 汽门 + 汽管 + 汽缸/活塞杆/十字头 + 双导轨 + 连杆 + 曲柄销 + **飞轮五辐条 + A 字架轴承座** + 汽 puff + 地面四刻度）
- [x] finish 模式：三件均三色齐（红/钛白/外壳灰），warning 各 1（jets/ice-heart/fire-box）配额内
- [x] Munroe 闸门 41 thing 全绿；validate-data 41 thing 全通过；构建链 tsc / build（711 modules）/ validate-data / check-simple-words / oxlint exit 0
- [x] flow sentenceRef 终态：airplane 1,3,4,7,10（wing→jets→body→tail→landing 巡航链）/ comet 2,4,5,7,10（heart→doors→coat→tails→path 彗发链）/ steam-engine 3,4,5,6,7（fire→water→door+stick→arm→wheel 热力链），全部单调递增
- [x] pi 独立验证（2026-09-11，tmp/batch12-verify-report.md，判定**可提交**，0 阻塞 4 建议）：五闸门独立重跑全绿（41 things / 词典 165·187 / build 711 modules / oxlint 批内 0）；亲审 7 项裁定**逐条确认落盘**；数据完整性 15 类全过（段落 3-4-4-3、1:1 部件标注、warning 配额、双标注恰 1、flowRefs 单调、曲撇 house style、GEOMETRY 三键、注册表尾部序）；浏览器矩阵全绿（三件静息 accent 0、词→图点亮 gains 20222/12409/11113 + 火箭对照组证同机制、图→词命中 body room/gas doors/water room、双标注 jets hover 词条卡 true、flow 15 步 caption/句/部件全对、practice + keyExpressions 完整、console error 0）；Home 41 卡 + Move/Space/Power 各 8 正确入列；既有 3 件采样零回归；几何源码级核算——**彗尾四线段点积 -0.988~-1.000 严格反日**、曲柄销距轮心 0.283 在轮内、链连续；46 截图留证（tmp/shots12/）；**read 态首屏可见性 + gizmo 污染两条测量学陷阱在方法层修正**（scrollIntoView 后测量、对照组法）
- [x] pi 建议级 4 项终审裁定（2026-09-11，claude）：① read 态 3D 模型首屏外（既有 UX 观察沿 batch 11 同源记录）② steam-engine 车轮悬空 0.10——**驳回**：spin-wheel realName 为 Flywheel，固定式蒸汽机飞轮装于 A 字架轴承座（架顶收敛于轮心下 0.03 即轴位），本就不落地；火箱落地为炉排高度，工程语义正确，文中无触地表述 ③ flow 整页自动滚动（既有同源）④ gizmo/warning 本色污染 accent 探测（既有同源，验证方法学）

### 验收对照 · production line 第十三批 3 thing（2026-09-11 第十八轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：car（Road Horse，accent #F87171，transport 域第九件，燃烧膨胀 + 齿轮变速 + 轮地摩擦）/ moon（The Night Ball，accent #A5B4FC，space 域第九件，光照自转 + 引力潮汐 + 轨道日食）/ power-grid（The Long Wire，accent #FCD34D，power 域第九件，发电升压 + 塔线输送 + 降压入户）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 词汇预检两轮收敛 FAIL 清零（首检 48/49 处方落地：boils→"no water is turned to steam"、borrowed→second-hand、twelve→"12"、flag→"a small cloth on a standing stick"、steadies→holds us up、giants→shapes 等）；moon/power-grid 各增词条——orbit /ˈɔːbɪt/ 轨道、tide /taɪd/ 潮汐、eclipse /ɪˈklɪps/ 日食；月食、circuit /ˈsɜːkɪt/ 电路；回路，词典 165→169 词条、187→191 分词；car 零新词（fuel/spark/steam 全部复用既有词条，产线首件无 dict 文件 thing）；dict span 11 处：car 3（fuel/spark/steam）/ moon 3（tides 复数 span→单数 key tide、orbit、eclipse）/ power-grid 5（magnet/battery/wire/circuit/dam）
- [x] 几何三型：car 侧视（车身箱 + 座舱 + 三缸体/活塞推杆 + 五段曲拐折线 throw 0.18 + 齿轮箱/齿圈 + 四轮 torus 双深度对 + 轮毂圆 + 刹车鞋 + **路面线 y-0.675 与四轮底精确相切（误差 0.0000）** + 车灯射线 + 尾运动线）/ moon 系统视图（月核 + **远面半球 phiStart 1.5π 长 π 即 -x 半边** + dark-lands 四扁球面 quaternion 径向贴面 + 环形山六环 + 尘壳 + 着陆器/旗 + 引力三箭 + 地球弧 120° + **轨道弧 r2.72 圆心过月心 2.7166（差 0.12%R）** + 145° 切向箭头 + 阳光四线 + 四星两线十字）/ power-grid 全景（厂房 + 水轮 + 三环升压器 + 三铁塔 A 腿/双臂/X 撑 + **10 段导线链 sag 相位修正（挂点全落真臂尖、下垂仅在塔间中点）** + 鸟坐 sag 段 + 小降压器 + 房屋/双亮窗/双壁插 + 山丘双弧避让 + 烟圈三 + 星二）
- [x] flow sentenceRef 终态：car 1,2,3,4,5（fuel→steam→gear→wheel→stop 动力链）/ moon 4,5,6,7,10（light→turn→pull→tides→path 月地链）/ power-grid 1,3,4,6,10（make→tall→iron+wires 双件步→change→wall 输电链），全部单调递增；单出部件（不入 flow）：car stop-shoes+body-box / moon far-face+rock-ball / power-grid wall-doors，均语义正确（刹车/容器/插座非链路环节）
- [x] finish 模式：三件均三色齐（fire-rooms·dark-lands·long-wires 红 / road-feet·ring-mountains·iron-men 钛白 / body-box·rock-ball·night-windows 外壳灰），warning 各 1 配额内
- [x] 亲审记录（2026-09-11，claude 全量亲读 8 新文件 + 3 注册 diff + CDP 三页截图）：数据层逐字比对零未申报偏离；codex 6 项申报偏差全批准（**DraftLine 原语无 partId——long-wires 改 Rod 链**（🥔 简报错误，flow step3 高亮须可寻址）/ cold finish 固定 opacity 0.12 语义等价 / quaternion 贴面等价数学 / 星号两线按 comet 先例 / 水流线 3 段凑足 / 离散 radius 取值）；亲审另发现 2 项几何缺陷并命令修复——**moon 轨道箭头悬浮弧外 0.74 且方向错误**（重设三线于弧 145° 点 (0.072,1.362) 切向对齐；弃 160° 因弧入尘壳内）/ **power-grid 山丘弧 2 横穿小降压器盒体**（🥔 简报坐标自伤，五点左移至 x1.4–1.9）
- [x] Munroe 闸门 44 thing 全绿；validate-data 44 thing 全通过（词典 169）；构建链 tsc / build（719 modules）/ validate-data / check-simple-words（3634/1283/191）/ oxlint 批内 0
- [x] pi 独立验证（2026-09-11，tmp/batch13-verify-report.md，判定**可提交**，0 阻塞 3 建议）：五闸门独立重跑全绿（44 things·词典 169·分词 191 / build 719 / oxlint 0）；亲审 8 项裁定逐条确认落盘；数据完整性全过（段落 3-4-4-3、1:1 部件标注、warning 配额、flowRefs 单调、grid s4 双 part span 与简报一致、弯引号 house style、GEOMETRY 三键）；浏览器矩阵全绿（静息 accent 0、词→图点亮 n 15103/2069 类/7706、**图→词对细杆/自转模型确立「accent 质心回点」法**——均匀网格扫描只可作存在性证据、tides→tide 词形归一生效、flow 15 步句句对齐、practice 完整、console error 0）；Home 44 卡 {ALL 44 / POWER 9 / MOVE 9 / SPACE 9 / HOME 17} + steam-engine/comet 回归零异常；几何源码级核算——**car 四轮相切误差 0.0000** / **moon 远面 -x 半球数学成立 + 轨道弧过月心 2.7166≈2.72 且月心恰在弧段中央 ±40°** / **grid 山弧与线/塔最小距离 0.3728/0.0800 无相交**；46 截图留证（tmp/shots13/）
- [x] pi 建议级 3 项终审裁定（2026-09-11，claude）：① 最左塔 sag 顶点落塔轴（相位不一致）——**采纳修复**：复核发现系 🥔 简报坐标系统性错误（两挂点落塔轴、两臂尖反被压至 sag 高度），codex 重设 10 段链（挂点全落真臂尖 ±0.3、sag 仅塔间中点 0.22、塔臂跨直连 0.32），tsc/oxlint 复跑 0 + 🥔 delta 截图复核相位一致 ② car/moon 各 2 部件不入 flow——**驳回**：刹车/容器部件语义不属动力链，batch 10–12 各批均有 1–3 个单出部件先例 ③ read 态模型首屏外/flow 自动滚动/gizmo 污染——承前技术债记账不修；**§6.3 视口内截图法确认**（captureBeyondViewport 会破 R3F canvas 至 300×150，batch 10 已复现，viewport-only 为既定正确方法学）

### 验收对照 · production line 第十四批 3 thing（2026-09-11 第十九轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：escalator（Moving Steps，accent #34D399，transport 域第十件，环链循环 + 弯轨翻转 + 藏于地板下机房）/ black-hole（The Sky Trap，accent #8B5CF6，space 域第十件，视界单向 + 吸积盘发光 + 引力弯光弯时）/ sun（The Day Star，accent #FB923C，power 域第十件，压聚变 + 十万年慢路 + 八分钟直路）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 词汇预检一轮通过（tmp/b14-vocab-check.mjs 四通道 + 屈折逆推 + er/est 守卫）：新增 7 词条——motor /ˈmoʊtər/ 马达；电动机、trap /træp/ 陷阱；捕捉器、ray /reɪ/ 光线；射线、glow /ɡloʊ/ 发光；辉光、mile /maɪl/ 英里、boil /bɔɪl/ 沸腾；煮沸、bubble /ˈbʌbəl/ 气泡，词典 169→176 词条、191→198 分词；dict span 8 处：escalator 1（motor）/ black-hole 2（trap、ray）/ sun 5（glowing→glow -ing 映射、boils→boil、bubbles→bubble 同句双 dict + part 三标注 batch 13 grid s2 先例、miles→mile 复数映射 batch 12 tails 先例）
- [x] 几何三型：escalator 侧视（双链轮 torus + 上行/回程双 Rod + **18 踏面板四段布阵（上行程 8 + 顶平 2 + 底平 2 + 回程 6，链线斜率 0.3593≈19.76°）** + bent-rails 6 杆 ±0.24 + motor-heart 箱/环/驱动杆 + under-room 双坑 + hand-rail 双 Rod 双小轮 + side-walls 双侧 5 杆框 + 双层地板刻度 + 上行箭头）/ black-hole 天体视图（暗球 r0.42 + no-return 环 r0.50 + 钛白光环 r0.58 + **倾斜吸积盘 r0.88 rotation [1.15,0,0]（y 极值 ±0.3595 / z 极值 ±0.8032）** + 双极喷流 4 箭 + 引力漏斗 3 环 8 径杆 + 5 星 S 轨道 + S 星轨道椭圆 20 段公式折线 + 光弯双弧 + 5 背景星）/ sun 洋葱剖视（火心 r0.18 + 钛白双壳 r0.34/0.50 + 光球面 r0.62 + 4 沸腾气泡半嵌面 + 日珥双半环 Math.PI + 风息 3+6 杆 + 光路 Rod + 双箭头翼 + 接收板 2 Box 2 支架 + 地球 16 段圆 + **轨道弧 60° 跨度地球居中（-34.2°→25.8°，地心方位 -4.16° 偏弧心 0.04°）** + 4 背景星）
- [x] flow sentenceRef 终态：escalator 4,5,7,8,11（motor+chain 双件步→steps→rails→pit→handrail 循环链）/ black-hole 1,3,4,5,6（heart→edge→ring→light→jets 天体链）/ sun 3,4,5,6,9（heart→roads→road→face→catchers 光能链），全部单调递增；单出部件（不入 flow）：escalator side-walls / black-hole space-bend+star-dance / sun fire-arms+wind-breath，均语义正确（容器/背景效应/非链路环节，batch 10–13 单出先例沿承）
- [x] finish 模式：三件均三色齐（step-chain·hot-ring·fire-heart 红 / moving-steps·light-ring·slow-roads 钛白 / side-walls·dark-heart·hot-face 外壳灰），warning 各 1 配额内
- [x] 亲审记录（2026-09-11，claude 全量亲读 9 新文件 + 3 注册 diff + CDP 三页截图）：数据层逐字比对零未申报偏离；codex 3 项申报偏差全批准（新文件 9 非简报头误写 8——本批三件均有 dict 文件 / build 728=719+9 非简报误写 727 / escalator·black-hole 几何坐标数组补 tuple 类型标注，均简报笔误级无坐标漂移）；特殊 span 归位三处核验——escalator motor-heart 落 s12 避 s4 dict 嵌套（线性 segment 数组不支持嵌套）、escalator s12 同句双 part span、black-hole s10 相邻双 part span（stars fly around + dark middle）
- [x] Munroe 闸门 47 thing 全绿；validate-data 47 thing 全通过（词典 176）；构建链 tsc / build（728 modules）/ validate-data / check-simple-words（3634/1283/198）/ oxlint 批内 0
- [x] pi 独立验证（2026-09-11，tmp/b14-pi-report.md，判定**可提交**，0 阻塞 4 建议）：五闸门独立重跑全绿（47 things·词典 176·分词 198 / build 728 / oxlint 0）且关键数字与交付声明逐项吻合；亲审 3 项裁定确认落盘；数据 27/27 通过（[3,4,4,3]、1:1 部件标注、warning 配额、flowRefs 严格递增、特殊归位 s12/s10/s6 逐句实证、弯引号、7 新词条含 IPA 逐字比对、分类 home 17/transport 10/space 10/power 10）；浏览器矩阵全绿（三页线框墨点 5.6–7.3 万 px + rAF 出帧、**词→图像素级 A/B：accent 静息 0 → 点击后 9184/10717/2719 px，且 warning 红被替换证高亮为换色非叠加**、图→词质心点击命中 .word-active、flow 15/15 句索引级同步 0 mismatch、dict 卡四张含 IPA+词性+中文且 glowing→glow / miles→mile 映射还原原形、console 0 错误）；几何源码级独立核算——**escalator 链线为两轮外公切线（垂直距 0.129692 = 轮半径 0.13，Rod 端点即切点，上下两段异侧构成平行输送带）** / **black-hole 倾斜盘极值 ±0.3595/±0.8032 与 rotation 自洽** / **sun 光路终点距地心 0.3413 vs r 0.35 落边缘 + 地球心恰落轨道弧上（2.75726 vs R 2.76）**；git 前后 IDENTICAL 验证方 0 改动
- [x] pi 建议级 4 项终审裁定（2026-09-11，claude）：① 简报措辞"链线距轮心 ≈0"——**采纳记档**：实际垂直距 = 轮半径 0.13（外公切线关系），代码本就正确且比简报描述更强，教训为 🥔 简报几何契约措辞错误，下批简报改写"距离 = 轮半径" ② escalator 踏板 x=0.75 y=0.34 vs 链线公式 0.35（差 0.01 world ≈ 1 CSS px，其余 7/8 逐位吻合）——**驳回改动**：坐标为简报明文、codex 逐字转写无错，delta 0.0696 在 +0.075 偏移自然散布内（八块极差 0.0087），无可见影响 ③ read 态模型首屏外——承前技术债记账不修（batch 12 建议① 同源沿承）④ captureBeyondViewport 模板措辞——**已在 §6.3 落账**：viewport-only 为既定正确方法学（batch 10 复现 300×150 破坏），本批简报实际引用 viewport-only 参考脚本，无方法学变化

### 验收对照 · production line 第十五批 3 thing（2026-09-11 第二十轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：crane（The Tall Arm，accent #38BDF8，transport 域第十一件，格构塔身 + 回转双臂 + 配重杠杆自平衡）/ mars（The Red World，accent #E11D48，space 域第十一件，锈色红尘 + 古河床水文 + 双小月逆行）/ electric-motor（The Spin Maker，accent #22D3EE，power 域第十一件，定子转子磁场博弈 + 换向器半转变向）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 词汇预检三轮通过（tmp/b15-vocab-check.mjs 四通道 + 屈折逆推 + er/est 守卫）：新增 11 词条——crane /kreɪn/ 起重机；吊车；鹤、concrete /ˈkɑːŋkriːt/ 混凝土、tower /ˈtaʊər/ 塔；塔楼、load /loʊd/ 负载；载荷、hook /hʊk/ 钩；吊钩、rust /rʌst/ 锈；铁锈、canyon /ˈkænjən/ 峡谷、robot /ˈroʊbɑːt/ 机器人、invisible /ɪnˈvɪzəbl/ 看不见的；无形的、fan /fæn/ 风扇；扇子、switch /swɪtʃ/ 开关；转换，词典 176→187 词条、198→209 分词；dict span 10 处：crane 4（loads→load 复数映射 b14 miles 先例、concrete、hook、tower）/ mars 3（rusted→rust -ed 屈折映射 b14 glowing 先例、canyon、robot）/ motor 3（invisible、fan、switch）
- [x] 几何三型：crane 侧视（格构塔身 2 弦杆 + 8 横杆等差 0.32 + 7 之字斜杆节点闭合 + 双臂格构上下弦/竖杆/之字斜 + 臂尖小塔 + 配重三块 x -1.0/-1.18/-1.36 等距悬臂压重 + 吊钩系统小车/钢缆/滑轮箱/钩头 torus π·1.2 开口/载荷箱 + 司机室窗带 + **回转扫掠弧 4 段（25°–65° 五点连线）+ 汇于 65° 端点箭头** + 在建楼层 4 层 + 屋顶落点十字）/ mars 天体视图（行星球 r0.62 + 大气包层 r0.74 + 极冠双球 r0.16 @±0.56 伸出 0.10 + 火山锥贴面 |p|≈0.60 + 峡谷三杆折线 + 古河床四杆分支网络 + **双月贴轨道（近月 |(1.05,0.38)|≈1.117 vs r1.12 / 远月 |(1.27,-0.46)|≈1.351 vs r1.35，偏差均 <0.01）** + 轨道弧 5+3 段带箭头 + 左下火箭 45° 机身/尾翼/尾焰 + 航迹 4 dash + 5 背景星十字）/ motor 侧视剖切（主壳 + 双端盖 + **定子轭环 r0.36 包转子 r0.17（0.315>0.17）** + 双极靴 + 铁芯柱 + 三绕线环 r0.2 环包芯 + 换向器筒 r0.10 + 分割缝双杆 + **碳刷内缘 0.09 与筒半径 0.10 相贴** + 输出轴 + 键块 + 转向箭头上下弧各 4 段 + 三组磁感线（中极面双短段避铁芯遮蔽 + 左右环各 3 段）+ 墙上插座方框 + 地面线）
- [x] flow sentenceRef 终态：crane 3,7,8,9,10（tower→cab→hook→[turn-ring+long-arm 双件步]→[back-arm+hold-stones 双件步]）/ mars 3,7,8,9,10（dust→rivers→air→caps→moons）/ motor 4,5,8,10,11（ring→heart→[changer+bridges 双件步]→stick→wires），全部单调递增；**crane 7/7 部件全入 flow（批次首例全覆盖）**；单出部件（不入 flow）：mars great-cut+dead-fire-mountain（风景件，b14 space-bend+star-dance 先例）/ motor box-body（容器件，b14 escalator side-walls 先例），均语义正确
- [x] finish 模式：三件均三色齐（hook-line·red-dust·spin-heart 红 / long-arm·ice-caps·still-ring 钛白 / standing-tower·thin-air·box-body 外壳灰），warning 各 1 配额内
- [x] 亲审记录（2026-09-11，claude 全量亲读 9 新文件 + 3 注册 diff + CDP 三页截图）：数据层与几何层逐字比对零未申报偏离；codex 唯一申报偏差（扫掠弧简报称"五段"实为 5 角度点 4 段——简报措辞自相矛盾，坐标零改动）裁定接受；附带记录 codex 报告笔误 turn-changer 句号 s7 误记 s8（实现正确）与简报设计取数瑕疵 mars great-cut 中点 |p|≈0.59 略低于贴面基准带 0.61（见下方裁定①）
- [x] Munroe 闸门 50 thing 全绿；validate-data 50 thing 全通过（词典 187）；构建链 tsc / build（737 modules）/ validate-data / check-simple-words（3634/1283/209）/ oxlint 批内 0
- [x] 类别平衡达成：50 件 = home 17 / transport 11 / space 11 / power 11
- [x] pi 独立验证（2026-09-11，tmp/b15-pi-report.md，判定**可提交**，0 阻塞 5 建议）：五闸门独立重跑全绿（50 things·词典 187·分词 209 / build 737 / oxlint 0）且关键数字与交付声明逐项吻合；数据 40/40 断言通过（[3,4,4,3]、1:1 部件标注、finish 配额、flowRefs 严格递增、双件步 crane step4/5 + motor step3 逐句实证、motor s13 七部件纯文本列举、弯引号、11 新词条含 IPA 逐字比对、分类 home 17/transport 11/space 11/power 11、mars 全文无 "Mars" 正则零命中）；**Munroe 第二实现独立复算**（自写屈折规则与官方不同写法，2771 词次越界 0）；几何 37/38（格构节点闭合、钢缆 x=0.9 落臂、配重三块等距 0.18 悬臂压重、双月贴轨 Δ<0.01、碳刷相贴间隙恰 0.01、端盖落壳缘差 0.005、轭环包芯 0.315>0.17）；浏览器矩阵全绿（词→物 3/3、**accent 像素 0→8961/26526/37805 且 warning 红同时归零证替换式高亮**、flow 句索引级同步 MISMATCH=0、dict 卡 3/3 含 IPA+词性+中文、console 0 错误、rAF 25 帧/400ms）；git 前后 IDENTICAL 验证方 0 改动；18 截图留证（tmp/b15-pi-verify/）
- [x] pi 建议级 5 项终审裁定（2026-09-11，claude）：① mars great-cut 首端 |p0|=0.6047 低于简报基准带 0.61、p1+杆半径 0.606 < 球半径 0.62——**驳回改动**：像素级复核（base 截图 zoom 裁剪）显示峡谷三段折线全程可见，"埋没不可见"推断不成立于本渲染模型——面材质 depthWrite=false（JX-7b 半透明面，pi §4.7 自证）不写深度不遮挡内杆；Δ0.0053 属简报设计容差级（b14 escalator 0.01 同驳先例）；记档教训：贴面基准带措辞应留可见性出口 ② 图→词反向直点被最外层包壳独占（mars 18/18=thin-air、motor 19/19=box-body、既有件 light-bulb 5/5 复现）——**记账不修**：系统性 SketchMesh 拾取模型属性（primitives.tsx 每 mesh onClick+stopPropagation、transparent 面光线投射实心，最外层恒胜），非本批回归；词→物主通道 21/21 全绿，用户仍可经文中词/flow 步进抵达；列为后续专项候选（包壳 raycast 透传 + dot 标记贴面）③ 简报措辞 2 处（火山坐标实为锥体中心非锥底、第三配重块 x=-1.36 悬臂无吊杆）——**记档**：简报精确化，无代码影响 ④ 首屏外模型（canvas 2012/2137/2347 ≫ 视口 799）——**承前技术债记账不修**（batch 12 同源沿承）⑤ viewport-only 截图——**已落账方法学**（§6.3，captureBeyondViewport 会破 R3F canvas 至 300×150，batch 10 复现），无变化

### 验收对照 · production line 第十六批 3 thing（2026-09-11 第二十一轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：bridge（The High Road，accent #EA580C，transport 域第十二件，悬链主缆 17 节点 + 9 吊杆逐节点对齐 + 双塔格构 + 锚碇 + 加劲桁架）/ earth（The Blue World，accent #0EA5E9，space 域第十二件，洋葱嵌套五层 + 海陆贴面 + 偶极场线 + 月亮贴轨）/ atom（The Tiny Piece，accent #8B5CF6，power 域第十二件，核子六点阵 + 双壳层 + 电子精确落壳 + 跃迁光子）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] 词汇预检（tmp/b16-vocab-check.mjs 四通道 + 屈折逆推，93 文本单元）：新增 7 词条——bridge /brɪdʒ/ 桥、cable /ˈkeɪbl/ 缆索、steel /stiːl/ 钢、rope /roʊp/ 绳、planet /ˈplænɪt/ 行星（与 telescopeDict 重复键，先到先得合并不增唯一 key，简报设计瑕疵既成事实裁定接受）、ocean /ˈoʊʃən/ 海洋、atom /ˈætəm/ 原子；词典 187→193、分词 209→215；dict span 7 处：bridge 4（bridge、steel、cable、ropes→rope 复数映射）/ earth 2（planets→planet 复数映射、ocean）/ atom 1（atom）
- [x] flow sentenceRef：bridge 3,4,5,8,10（step4 road-way+under-bones 双件步）/ earth 4,5,6,9,10 / atom 3,4,7,8,9（step2 push-points+still-points、step4 near-road+far-road 双件步；7 部件全入 flow）；单出：bridge water-legs（基础件）/ earth blue-water+dry-lands（景面件，b14 先例）
- [x] finish 模式：三件均三色齐（great-lines·turning-heart·heavy-heart 红 / hold-towers·power-field·near-road 钛白 / road-way·air-skin·far-road 外壳灰），warning 各 1 配额内
- [x] 亲审（tmp/b16-claude-review.md）：数据层 93 文本单元逐字节对齐、注册纯追加 18 行 0 删、earth/atom 几何零偏离；**bridge.tsx 塔身之字 map 第三参越界崩溃 bug（tsc 盲区——五闸门全绿但页面白屏）由 🥔 终审两轮修复**——towerDiagonals 模板提升模块级 + slice(0,-1) + to 引用原数组（本文件 mainCablePoints 习语；第一轮只加 slice 仍引 map 第三参为错误修复）；取证方法论教训落档：只查 DOM 会假阴性（后台节流 tab R3F 挂载延迟），页面级验证必须带 Runtime.exceptionThrown 监听（tmp/b16-forensic.mjs）；codex 4 项申报偏离全裁为简报错误（dict 导出类型 / 词典 194→193 / 分词 216→215 / build 740→746）
- [x] Munroe 闸门 53 thing 全绿；validate-data 53 件（词典 193）；构建链 tsc 0 / build 746 modules / check-simple-words 分词 215 / oxlint 批内 0
- [x] 类别平衡达成：53 件 = home 17 / transport 12 / space 12 / power 12
- [x] pi 独立验证（2026-09-11，tmp/b16-pi-report.md + tmp/b16-pi-verify/ 39 截图全证据链，判定**通过（4 处内容修复后）**）：五闸门独立重跑全绿（53·词典 193·分词 215 / build 746 / oxlint 0）；数据 85 断言 + 几何 58 断言全过（括号平衡解析器直读 tsx 杜绝转录误差——悬链步长递减 0.16→0.03、海洋球 |p|+r∈(0.62,0.80)、月亮贴轨 Δ0.0008、电子落壳 Δ<1e-3、核子六点交错 60°）；**Munroe 四通道第二实现独立复算 3001 词次 offender 0**（pi 自曝勘误：其首轮漏 -ily→-y 屈折规则产假阳性，补规则归零——官方闸门语义正确）；浏览器矩阵：词→物 21/21 word-active 全命中、物→词 21/21 词激活正确（pi 自设"居中句/位移"二级观测对多部件同屏情形失真为方法学局限非产品缺陷；earth turning-heart 激活点像素未检出 = 洋葱包层遮挡同因）；pi §4-§6 叙述因 128k 上下文 compact 失败未落盘，证据完整存 tmp/b16-pi-verify/，由 🥔 终审合成
- [x] pi 数字自洽审计 4 项终审裁定（claude，修复已应用 + 三闸门复跑全绿）：① bridge s3 主缆 "100,000 thin steel wires" 与 funFact1 "more than 25,000" 同物自相矛盾（金门实况 27,572 根/缆）——**修复**：s3 改 "more than 25,000 thin steel wires" ② earth funFact1 外核单独小于火星（r 2,260 vs 3,390 km），仅核球+外核合计 3,480 才略大——**修复**："the sea of flowing iron around it a little bigger" 改 "ball and sea together a little bigger" ③ earth s5 地幔厚 "2,000 miles"（实 ~1,800）——**修复**：改 "1,800 miles" ④ atom funFact1 "99 parts of every 100"（实况空隙率 10^-15 量级，方向保守但数字为假）——**修复**：删错误数字，playing field/dust 类比自承载尺度；教训：数字不在词汇闸门管辖，产线简报新增"数字自洽预检"条款（下批起执行）

### 验收对照 · production line 第十七批 3 thing（2026-09-11 第二十二轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：drone（The Sky Watcher，accent #0891B2，transport 域第十三件，四臂对角 armRoots(±0.15)→armEnds(±0.8) + 旋翼 12 边形环 + 交叉桨叶 + sky-eye 吊杆云台 + far-talk 天线顶球 + 起落腿×1.2 外撇）/ galaxy（The Star City，accent #9333EA，space 域第十三件，对数螺线双臂 9 点 + armTwo 逐点取反 + 三环 24 段 + heart-light 双球 0.13/0.06 嵌套 + hidden-hold r1.55 + halo 8 散点 + starCloud 15 球）/ geothermal（The Earth Heat House，accent #C2410C，power 域第十三件，双井剖面 4 壁杆 + heatRocks 5 球 + 门洞厂房 7 杆框架 + turning-wheel + 三节冷却塔）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] dict +3 词条：drone /droʊn/ 无人机 · galaxy /ˈɡæləksi/ 星系；银河系 · geyser /ˈɡaɪzər/ 间歇泉（dict span 复数映射 geysers→geyser，同 bridge ropes→rope 先例）；词典 193→196（无重复键）、分词 215→218
- [x] flow sentenceRef 全单件步：drone 2,3,4,7,11 / galaxy 2,3,5,7,11 / geothermal 1,3,5,7,9（修复后值，见下 pi 修复行）；单出：drone power-pocket、far-talk / galaxy dust-rivers、old-star-groups / geothermal heat-rocks、steam-hall
- [x] finish 三色齐：sky-eye·heart-light·heat-rocks 红 / spin-blades·turning-arms·deep-holes 钛白 / fly-box·flat-wheel·steam-hall 外壳灰，warning 各 1 配额内
- [x] 亲审（tmp/b17-claude-review.md）：零偏离——数据逐字节对齐、注册纯追加、几何全核验（Rod 链全 slice(0,-1)+模块级原数组，b16 崩溃类零复现；depthWrite 疑点裁定为 SketchMesh 内建非偏离）；五闸门全绿 56/196/218/755/0；浏览器矩阵全过零异常（tmp/shots17/ 12 截图——词→物 3/3 word-active+3D 高亮、dict 卡 3/3 含 geysers→geyser 复数映射、flow 15/15 caption 逐字 + STEP 计数全对）；测试手法修正 2 处记录（跨行 span 用 getClientRects()[0] 首片段中心点击；HOW IT WORKS 大写匹配）均非产品缺陷
- [x] pi 独立验证（2026-09-11，tmp/b17-pi-report.md，判定**有条件通过——1 HIGH + 2 LOW + INFO，修复后全绿**）：五闸门独立重跑全绿（56 · 词典 196 · 分词 218 / build 755 / oxlint 0）；结构断言全过 + Munroe 四通道第二实现 12 句抽样 offender 0（geyser 实走 dict 通道，简报"够 ORIG 表"归因有误已勘正）；Rod 链审计 0 零长段（drone 22 / galaxy 104 / geothermal 27 Rod）；几何 4/4 断言过；浏览器三页 forensic 零 exceptionThrown；git 前后一致零仓库变更。**🔴 HIGH：flow sentenceRef 系统性 off-by-one 15/15 步**（三路互证：简报 1-based 编号直抄进 0-based 字段 / caption↔ref−1 逐句配对 / 全库 56 件惯例对照唯一 match=0）——五闸门对此类语义错位全盲区，唯 pi 对抗层抓出
- [x] pi 发现终审修复（claude 裁定 + 应用 + 五闸门复跑全绿 + 运行时复验 15/15 高亮句==sentenceRef 句且含部件 span，tmp/b17-fix.mjs / b17-highlight-check.mjs）：① 15 refs 各 −1（ref==span 句索引，后期批次惯例）② galaxy "two thirds"→"about half way out"（太阳距银心 ~26k ly / 盘径 100k ly ≈ 52%，与自身数字自洽）+ hereRing 几何 0.68R→0.53R 跨层一致 ③ galaxy "five times"→"more than ten times"（DM:恒星 ≈ 12–25×；pi 建议 "stuff" 未采纳——DM 与星系内普通物质之比亦 ~15×，5× 仅为含星系外气体的宇宙口径）④ geothermal "by the north sea"→"far out in the cold sea"（冰岛在北大西洋）⑤ INFO 项不修（drone "hundreds of turns a second" 竞速级可达 / "stay up for days" 太阳能机先例 / galaxy "hundreds of balls" 可辩护简化）
- [x] 闸门硬化：validate-data.mjs 新增 flow sentenceRef 系统性 off-by-one 检查（整件 100% 步 ref==span+1 且 n≥3 报错；正测 56 件零误报——curiosity-rover 5/6、refrigerator 2/5 等"ref 指向功能句"混合惯例不触发；负测人为回退 drone refs 正确报错）；caption↔ref 内容词重合度审计原型（tmp/caption-ref-audit.mjs）全库 27 处微弱边际噪声，不采纳为闸门
- [x] 类别平衡达成：56 件 = home 17 / transport 13 / space 13 / power 13
- [x] 流程事件：pi 首轮 session 因 b16 像素取证残留 128k 耗尽未启动验证（零产出；Escape 破 compact 死循环 + /new 重开 session）；二轮简报增补铁律 6 禁像素深挖 / 7 工具输出瘦身 / 8 数字自洽审计，81.3% 水位收束令降载后全节完成；流程教训落档：pi 简报下批起改分段派发，产线简报新增 span 编号与 sentenceRef 统一 0-based 记法条款

### 验收对照 · production line 第十八批 3 thing（2026-09-11 第二十三轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：sailboat（The Wind Runner，accent #14B8A6，transport 域第十四件，船体 9 点闭合轮廓 8 段 + 双帆三角各 3 杆 + 龙骨双杆汇一点+压载球 + 舵杆舵板 + 波浪/风弧/太阳/飞鸟 decor）/ saturn（The Ringed World，accent #CA8A04，space 域第十四件，全球体 r0.55 + 纬线三环恰落球面（0.531²+0.142²=0.55²）+ 环系四圈 r0.72/0.82/1.05/1.15 + 卡西尼缝双圈 r0.90/0.95 + 正六边形风暴（边长=外接圆半径 0.17）+ Titan 球 + 六小卫星 moonSizes 平行数组）/ fusion（The Star Bottle，accent #C026D3，power 域第十四件，双 torus 躺平 π/2 + 16 点 D 形线圈 8 组绕轴 + 中心柱双盘圈 + 中性束斜杆 x/z 对称 + 偏滤器环 + 低温箱 cylinder+双沿圈）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] dict +8 词条：sail /seɪl/ 帆 · mast /mæst/ 桅杆 · boom /buːm/ 帆桁 · keel /kiːl/ 龙骨 · rudder /ˈrʌdər/ 船舵（sailboatDict 5）/ saturn /ˈsætərn/ 土星（saturnDict 1，span 大小写映射 Saturn→saturn）/ fusion /ˈfjuːʒən/ 核聚变 · plasma /ˈplæzmə/ 等离子体（fusionDict 2）；另有 magnet span 跨件复用 speaker.ts 既有词条（先例 rope→bridge 类）；dict span 合计 9 处（5+1+3）；词典 196→204（无重复键）、分词 218→226
- [x] flow sentenceRef 全单件步：sailboat 3,4,5,7,8 / saturn 1,3,4,5,9 / fusion 3,4,5,7,8（亲审三路互证 0-based：b18-refs-check span 首现句比对 + 运行时 15/15 高亮句核验）；单出：sailboat front-sail、swing-arm / saturn big-moon、moon-family / fusion heat-guns、cold-box
- [x] finish 三色齐：main-sail·top-storm·star-ring 红 / deep-fin·ring-plate·hold-hands 钛白 / boat-body·round-body·ring-room 外壳灰，warning 各 1 配额内
- [x] 亲审：数据 6 文件与简报 block0-5 byte-identical（经 codex 漏转写 import 修复-撞车-自愈收敛——写竞争教训落档 memory：codex 完成信号 = task-worker 进程退出，src/ 静默期不可信）；几何 3 文件逐项核验全吻合（Rod 链全安全习语：slice(0,-1)+模块级/外层参数引用）；五闸门全绿 59/204/226/764/0；运行时 15/15 高亮句==sentenceRef 句且含部件 span + 0 JS 异常（检查脚本 slice(0,80) 截断伪影修正为 slice(0,200)——长句 span 假阴性）
- [x] pi 独立验证（2026-09-11，tmp/b18-pi-report.md，判定**通过——未发现阻断级/功能性缺陷**）：五闸门独立重跑全绿（59 件 · 词典 204 · 分词 226 / build 764 / oxlint 0）；独立审计脚本 tmp/b18-pi-verify/data-audit.ts 导入真实模块字段级核验（类别 17/14/14/14 / refs 严格递增且==span 首现句 15/15 / dict span 9 处闭环含 saturn 大小写映射与 magnet 跨件复用 / 8 新词条 IPA 逐字 8/8 无错字）；数字自洽审计 20 项与物理实况交叉核对全部成立（sailboat 3 / saturn 10 / fusion 7——75 mph 对 Vestas Sailrocket 2 纪录、环径 273,550 km÷地球=21.5 对 "20 worlds"、ITER Q=10 与 EAST 1,066 s）；Rod 链 7 处静态安全（全文无三参 .map 回调，b16 TypeError 白屏风险不存在）；几何逐项吻合（纬线恰落球面偏差 0.12% / 正六边形边=外接圆半径 / 热枪 x↔z 互为镜像）；精简浏览器矩阵（sailboat h1 / #root 未卸载 / canvas 尺寸 / word-part 7 span 枚举与 parts 一致，运行时逐步矩阵亲审覆盖）；git 前后完全一致零仓库变更
- [x] 终审合议（低危备注 3 项均裁定不修）：half a football field（美式场口径 45%≈almost half 成立 + 原文 "one of the biggest boats" 限定语；预审曾误用 FIFA 尺寸）/ colder than deep space（ITER 中央螺线管 1.8 K 确低于 CMB 2.7 K，官方通行说法）/ saturn "20 worlds" vs "almost 10"（分指环系与行星体，非矛盾）
- [x] 流程事件：pi 派发修正为 herdr pane 通道（裸 `pi -p` 后台挂死——stdin unix socket 永不 EOF，落档 memory）；分段验证 + 增量落盘骨架报告 + 60s 水位监控，72.5% 收束令（优先级排序+亲审覆盖降级豁免）终态 81.2% 受控完成，零 compact 事故
- [x] 类别平衡达成：59 件 = home 17 / transport 14 / space 14 / power 14

### 验收对照 · production line 第十九批 3 thing（2026-09-11 第二十四轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：motorcycle（The Two-Wheel Rider，accent #2563EB，transport 域第十五件，frameTriangle 模块级 4 点闭合 slice(0,-1) 3 杆 + 2 直管 = 5 杆车架 + Wheel 组件双轮复用（torus 0.26/0.03 + hub + 3 对辐条 Rod）+ 前叉双杆汇于 (0.58,−0.32) + decor 路面锯齿/速度线/太阳/飞鸟）/ jupiter（The Big Brother，accent #B91C1C，space 域第十五件，全球体 r0.60 + cloud-lines 五纬线环 y=±0.36/±0.18/0 恰落球面（y²+r²≈0.36）+ red-eye 双椭圆 @ z0.50 + glow-ring 双 torus r0.33 躺平 @ y±0.50（球面半径 0.3317）+ small-ring r0.95 + 火/冰双卫星 + 8 星 decor）/ generator（The Power Spinner，accent #059669，power 域第十五件，baseFrame 5 点闭合 4 杆 + 双立柱双轴承盒 + turn-wheel torus 0.42 + 3 辐条 60° + 曲柄臂端距轮心 0.6774 > 外线圈 0.64 + wire-rings 三环 r0.52/0.58/0.64 + power-line 135°/225° 引出 + light-ball 灯座 + 6 光芒杆 60° 步进）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] dict +5 词条：motorcycle /ˈmoʊtərsaɪkəl/ 摩托车 · brake /breɪk/ 刹车；制动器（motorcycleDict 2）/ Jupiter /ˈdʒuːpɪtər/ 木星（jupiterDict 1）/ generator /ˈdʒenəreɪtər/ 发电机 · coil /kɔɪl/ 线圈（generatorDict 2）；跨件复用 7 key（spark→microwave · chain→bicycle · ocean→earth · magnet→speaker · glow→sun · dam→dam.ts · motor→escalator）+ planet→telescope first-wins（earth/telescope 双定义同内容）；dict span 合计 13 处（4+3+6）；词典 204→209（无重复键）、分词 226→231
- [x] flow sentenceRef 全单件步：motorcycle 2,3,5,6,7 / jupiter 0,3,4,8,9 / generator 3,4,5,7,8（运行时 15/15 高亮句核验）；单出：motorcycle turning-stick、smoke-pipe / jupiter small-ring、glow-ring / generator light-ball、power-line
- [x] finish 三色齐：fire-heart·red-eye·light-ball 红 / ride-seat·ice-moon·strong-magnet 钛白 / metal-bones·big-ball·hold-shape 外壳灰，warning 各 1 配额内
- [x] 词闸门拦截（b19.0→b19.1）：初稿 11 词失败（motorcycle frame/steer/racing · jupiter nowhere/bands · generator frame/weigh/rule/factories/trick/electric）——预检只扫 article 漏 flow caption/funFacts/部件 span 文本，教训入档；修复走先例复用（metal-bones/turning-stick 复用 bicycle 命名）+ 替换词预验（racing→fast engine 等）+ generator funFacts 三条重写（顺带消重）
- [x] 亲审两处修正（b19.2）：generator s3 "a hold shape"→"the hold shape" 契约对齐；jupiter bandRings 解构序真 bug（`([radius, y])` 误读 [y, r] 序致云带全堆北半球 + 北极退化环）→ `([y, radius])`，简报补数组序显式声明；运行时 15/15 高亮句 + hover 卡 3/3（含跨件 magnet→speaker）+ 词→物点击 3/3 + 0 JS 异常
- [x] pi 独立验证（2026-09-11，tmp/b19-pi-report.md，判定**通过——未发现阻断性缺陷**）：五闸门独立重跑零偏离（62 件 · 词典 209 · 分词 231 / build 773 modules / oxlint 0 含正控）；独立审计脚本 brief 契约对象与真实模块递归深度逐字比对（含字段序）142/142 断言全绿，span closed list 三件逐字逐序全等；Rod 链安全（.map ≤2 参、to= 全模块级/外层参数，3 处启发式误报内联复核排除）；几何数学独立重算（bandRings 修正生效、五纬线落球面、glow-ring 0.3317、曲柄 0.6774>0.64）；浏览器降级矩阵三页零异常 + hover 卡逐字 + flow Step3 caption/sentence-active 逐字；git 前后逐行全等零仓库变更；66% 提前收束令（重环节静态优先 + §4 文本断言降级）受控完成无死循环
- [x] 终审合议（低危备注 3 项均裁定不修）：planet first-wins 双定义（earth/telescope 同内容 planet/行星，既有 11 处跳文件重键惯例，渲染无差）/ 简报侧笔误 2 处（magnet 音标漏 n、光芒"30°"应为 60°——实现侧均正确）/ hover 2s 延迟为既有设计
- [x] 类别平衡达成：62 件 = home 17 / transport 15 / space 15 / power 15

### 验收对照 · production line 第二十批 3 thing（2026-09-11 第二十五轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：subway（The Train Under the City，accent #0E7490，transport 域第十六件，5 隧道环 torus 0.42 @ y−0.25 顶 0.17/底 −0.67 与 stone-sides 上下壁杆精确吻合（rotation-y π/2 绕 x 轴环）+ 第三轨 z0.17 藏壁内（y−0.50 处壁半宽 0.337 > 0.184）+ 4 节长列车 + 轮轨几乎相切（−0.475/−0.478）+ 6 级扶梯带扶手 + 城市/土层剖面 decor）/ space-shuttle（The Space Plane，accent #EA580C，space 域第十六件，机身三段衔接（主箱 0.64@x0.08 + 机头 0.20@0.50 + 鼻尖球 @0.61）+ 外贮箱 0.55@y0.25 双半球封口 + 双助推器 z±0.21 侧挂嵌入 0.035 + fin/wings 闭合折线 slice(0,-1) 3 杆（wings 嵌套双层 map 内层 to= 引外层 points）+ 隔热瓦贴腹 + 机械臂 5 段链 + 起落架 + 烟尘/星 decor）/ wave-power（The Sea Swing，accent #0D9488，power 域第十六件，摆体球 r0.17 + 摆墙双板 + 铰链轴 rotation-x π/2 轴沿 z 长 0.52 双端帽封端 + 摆臂双斜杆下端 −0.60 == bed-plate 箱顶相接 + 发电机箱 + 电缆 4 点闭折 3 杆 + 海面 15 点/海床 13 点正弦 + 太阳/岩石/房/海鸥 decor）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] dict +5 词条：subway /ˈsʌbweɪ/ 地铁；地下铁道 · tunnel /ˈtʌnl/ 隧道；地道 · London /ˈlʌndən/ 伦敦（subwayDict 3）/ shuttle /ˈʃʌtl/ 航天飞机；往返班机 · shield /ʃiːld/ 护盾；防护板（spaceShuttleDict 2，shield 为 gate-only 词条——'heat shield' part span 文本过闸门用，全库既有 18 处同模式）；wave-power 无新词条（4 处 dict span 全跨件复用 float / over and over / dam / generator）；跨件复用 subway 页 rail·elevator / shuttle 页 rocket·hour·robot·telescope·umbrella；词典 209→214（无重复键）、分词 231→236
- [x] flow sentenceRef 全单件步：subway 1,3,5,7,8 / space-shuttle 0,3,4,8,11 / wave-power 0,4,5,6,7（运行时 15/15 高亮句核验）
- [x] finish 三色齐：power-rail·fire-sticks·power-maker 红 / deep-hole·food-tank·turn-pin 钛白 / long-train·white-body·sea-rider 外壳灰，warning 各 1 配额内
- [x] 预检前移（b20 新能力，b19 教训落地）：简报 fenced 块提取（import type 行 tsx/esbuild 擦除可安全 strip）→ 真实闸门镜像全量四类文本预检，派发前抓出 2 个真 MISS——subway f3 dug（不规则过去式不逆推 dig）→ 改 cut/made；wave-power base 四通道全缺 → 部件改名 bed plate（bedplate 真实工程词，波及 6 处）而非加词条（词条无 span 即不可触达）→ b20.2 后 0 MISS + 内部一致性全绿（KE partId 校验自动抓出改名漏改一处）
- [x] claude 亲审零修正通过：verbatim-check 脚本简报 vs 实仓 5 数据文件字节级全等 + 注册 3 处纯追加（+16/−0）+ 几何三文件逐项核验 + 五闸门复跑 + 运行时 15/15 高亮句 + hover 3/3（含跨件 generator→b19 词条；卡文本真格式实证：无空格连排 + pos 小写 n.，WordPopup JSX 无空白文本节点）+ 词→物点击 3/3 + home 65 卡
- [x] pi 独立验证（2026-09-11，tmp/b20-pi-report.md，判定**PASS——无阻断性缺陷**）：五闸门独立重跑零偏离（65 件 · 词典 214 · 分词 236 / build 781 modules / oxlint 0 含正控）；data-audit.ts brief 契约与真实模块递归深比（含 key 序）62/62 断言全绿 + span closed list 逐字逐序全等（12/13/11）；Rod 链安全（.map 真实最大 2 参，初报 3/4 为解构逗号假阳性已排除）；几何数学独立重算全自洽（隧道环/第三轨藏壁/助推器嵌入 0.035/摆臂 −0.60==基座顶/铰链封端）；浏览器矩阵三页零异常 + subway hover 卡逐字（真格式）+ flow caption/sentence-active 对齐；git 前后逐行全等零仓库变更；64% 提前收束令受控完成（79% 峰值无死循环）
- [x] 终审合议（低危备注均裁定不修）：仓库既有 11 组跨文件重复 dict key（push back/land/sit 等，均不涉 b20，first-wins 设计聚合 214 唯一键无渲染影响——另立专项不混批次）/ wave-power sunCircle 9 点 k=8 回绕与 k=1 重合重画首段（视觉 no-op）/ wave-power hover 首轮 null = 时序抖动（亲审 + pi 双页复现佐证机制正常）/ pi 降级诚实标注（无像素/性能探测）沿 b19 先例接受
- [x] accent 撞色审计：#0E7490 与 #0D9488 全库唯一；#EA580C（外贮箱标志橙）复用 battery/bridge 既有 ×2（接受，已有 ×3 复用先例）
- [x] 类别平衡达成：65 件 = home 17 / transport 16 / space 16 / power 16

### 验收对照 · production line 第二十一批 3 thing（2026-09-11 第二十六轮，transport/space/power 各一类别平衡批，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：fire-truck（The Fire Fighting Car，accent #E63946，transport 域第十七件，6 轮嵌套 map（wheelXs×z±0.16 torus+hub π/2）+ 驾驶室双箱 + 挡风斜杆 ±0.14 + 床身不挂 part + 水箱/水泵尾列 + 水带 3 环 z0.18 侧挂 + 云梯双纵杆 6 横档 2 支撑立于水箱顶 + 水柱弧指向房屋 + 着火房屋/火舌/烟圈 9 点圆 decor）/ space-elevator（The Sky Rope，accent #5B8DEF，space 域第十七件，缆绳 (0.10,−0.34)→(0.10,0.77) 屋顶尖↔岩心双端咬合 + rockPath 六边形 7 点 slice(0,-1) 6 杆 + 2 坑 + 地球 sphere+赤道环 + 地面站/闭合屋顶/门 + 攀爬车 4 抓轮 + 空间站 torus+双舱 + 光炮/炮管 + beamSegs 3 段光束 + 星×3/月/自转弧箭头 decor）/ flywheel（The Spinning Battery，accent #F5B301，power 域第十七件，真空箱 + 重轮 torus+轮毂+4 辐条 45° 精确接缘（偏移 ±0.17 → r0.2404==轮缘 0.24）+ 公共轴 0.52 不挂 part + 磁浮环 2 @ z±0.23 + 电机/联轴 + 真空泵/泵管 + 输电线 3 折 + 4 A 字腿 + motionArcs 3 段 r0.280 速度弧（轮缘 0.275 外）decor）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] dict +11 词条：fire-truck 8（station 车站；站；台 / force 力；力量 / engine 发动机；引擎 / smoke 烟 / pump 泵；抽水机 / hose 软管；水龙带 / ladder 梯子 / horn 喇叭；警报器——其中 **pump/hose/ladder/horn 4 处双标注 span**（part+dict 同 span：点击高亮部件 + 悬停 2s 弹释义卡兼得，.word-part 类承载，b12 airplane jets 同模式首次四连用）；station/force/engine/smoke 与 xkcd 原表冗余（31/214 既有先例，hover 卡教学职能保留））/ space-elevator 1（beam 光束；（横）梁）/ flywheel 2（cheap adj. 便宜的；廉价的 / top 陀螺；顶端）；pump 词条通道③全库放行 flywheel KE 正文（跨件非 span 复用）；跨件复用 span：space-elevator 页 fuel·steel·grip / flywheel 页 battery·spin；词典 214→225（无重复键）、分词 236→247
- [x] flow sentenceRef 全单件步：fire-truck 1,3,4,5,6 / space-elevator 1,2,4,5,6 / flywheel 3,4,5,6,8（pi 运行时 Step2 caption↔flow[1].caption 逐字 3/3 + .sentence-active 指向 s3/s2/s4）
- [x] finish 三色齐：pump-heart·light-gun·spin-motor 红 / water-tank·great-rope·heavy-wheel 钛白 / driver-room·sky-station·air-free-box 外壳灰，warning 各 1 配额内
- [x] 预检前移：b21.1 首轮 65 MISS 预排雷 → b21.2 二十余处 Munroe 式改写（steers→drives / folded→closed up short and flat / kilometers→100,000,000 meters / hums→sings / steady→rising without a stop 等）+ 4 核心具象名词词条化升格双标注 → 0 MISS；闸门探针两轮 ~110 词建档（被闸词弹药库：tap/fold/park/bump/warning/belt/siren/bell/aim/burst/buzz/toy）
- [x] claude 亲审一处修正 + 一流程发现：三数据文件缺 color 必填字段（b21.2 简报 fenced 块设计层遗漏，codex 忠实转写）→ 亲审补入 #E63946/#5B8DEF/#F5B301 + 简报 fenced 同步（verbatim 6/6 保持）+ pi 简报同步；**根 tsconfig 为 solution 文件（files:[]+references），裸 tsc --noEmit 空转假绿——gate1 改 tsc -b（b18-b20 同空转，build 闸门 tsc -b 兜底故无缺陷入库，本批起修正并入流程记忆）**；几何三件逐项核验 + 浏览器 27/27（home 68 卡 + 三页 h1/canvas/#root/.word-part=7/.word-new=4 + 双标注 hover 'pump heart' 弹 pump 卡 + 词→物点击 3/3 + 0 JS 异常）
- [x] pi 独立验证（2026-09-11，tmp/b21-pi-report.md，判定**PASS——无阻断级、无功能性缺陷**）：五闸门独立重跑零偏离（tsc -b 0 · 68 件/词典 225/分词 247 · build 790 modules · oxlint 0 含正控）；data-audit 递归深比（含 key 序）67/70 断言绿——3 failed 均简报侧/断言侧（§2.2 span 表漏 ground-house 行致表头 11 vs 表体 10 不自洽、全库 color 唯一断言过严），**实现零缺陷**；新词条 11 IPA/词性/中文逐字全等；跨件复用 key 源文件核对（fuel→rocket·steel→bridge·grip→drill·battery·spin）；Rod 链 .map 真实 ≤2 参（对象/元组解构假阳性排除）；浏览器矩阵三页零异常 + hover 3/3 逐字（fire-truck 首次 flake 重试命中）+ flow Step2 逐字 3/3；git 前后逐行全等 0 仓库改动（tmp/ 产物 gitignore 0 泄漏）；85% 收束令受控完成（§3.2 几何数学降级亲审覆盖，残余风险如实标注）
- [x] 终审合议（低危 6 项）：简报 §2.2 表漏行 + 节头旧 accent 值（#991B1B/#4338CA/#A16207，全库命中 0）+ §0.5 假绿闸门名——**契约侧本轮回填修正**（补行 + 节头同步 + tsc -b 改正）；既有 11 组跨件重复 dict key + 全库 12 处 accent 撞色——均不涉 b21，沿 b20 裁定另立专项；hover flake（HOVER_DICT_MS≈2s 时序）/ CDP 合成 click 需 element.click()——工具侧非产品
- [x] accent 撞色审计：#E63946 / #5B8DEF / #F5B301 全库唯一（pi 复核各出现恰 1 次）
- [x] 类别平衡达成：68 件 = home 17 / transport 17 / space 17 / power 17（**四类齐 17 里程碑**）

### 验收对照 · production line 第二十二批 3 thing（2026-09-11 第二十七轮，home 归队轮转批 home/transport/space 各一，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：toaster（The Bread Browner，accent #BC6C25 烤铜棕，home 域第十八件，正视台面线 y=−0.38 + slotCenters×zigzagPts 8 点 7 段嵌套 map 加热丝（cx 偏移习语）+ springPts 9 点 8 段弹簧床 + 双床轨 z±0.12 + 压杆/旋钮 + 温控 torus [0.065,0.008]@z0.24 正对观者 + 屑抽屉拉手 + 弹起/半露吐司 + 3 热浪 decor）/ airship（The Sky Whale，accent #7C8FA6 银蓝灰，transport 域第十八件，侧视鼻左 −x + gas-bag sphere r0.60 scale [1.45,0.62,0.62] 长椭球（rx0.87/ry0.372）+ 双副气囊 + 吊舱顶 0.135 咬合气囊底 0.148 + 3 窗 + finTop/finBottom 闭合三角 slice(0,-1) + 铰轴 + enginePods 2 吊舱错侧 z±0.14（单参元组解构 map：短舱 π/2 + 桨盘 torus + 十字桨叶 + 桨毂）+ 双燃料罐轴向 x + 系留索/地锚/锚块 + 地面/4 云 decor）/ voyager（The Far Traveler，accent #C9A227 金唱片金，space 域第十八件，侧视碟朝左 = 家方向 + 大耳碟不等半径浅锥 [0.045,0.34,0.10,20] rotation [0,0,1.27]（satellite 习语）+ 馈源杆/球 + 十棱柱正对观者 + 长臂 X 撑 + 热心轴向 x + 4 散热鳍 z±0.07 + 金唱片 cylinder24 + 中心孔 torus + 双相机眼错侧 + thrustClusters×thrustRays 嵌套 map 2 簇 6 喷射杆 + 星×5/土星环/太阳+光线 decor）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] dict +8 词条：toaster 4（toaster 烤面包机；吐司机 / toast 烤面包片；吐司 / bread 面包 / crumb 面包屑；碎屑——其中 **steel-house/hot-wires 双标注 span**）/ airship 2（airship 飞艇 / whale 鲸——**gas-bag/turning-blades/nose-rope 三处双标注**）/ voyager 2（record 唱片；记录 / whisper v. 低语；耳语——**big-ear-dish/gold-record 双标注**；whisper 为 xkcd 原表冗余键、纯 hover 卡职能，b21 先例）；span text≠dict key 逆推三例（crumbs→crumb / whispers→whisper / turning blades→blade，b21 water hoses→hose 同模式）；跨件复用 span 10 key（toaster steel·wire·glow / airship gas·blade·float·rope·cheap / voyager dish·planet）；词典 225→233（无重复新键）、分词 247→255
- [x] flow sentenceRef 全单件步：toaster 3,4,5,9,12 / airship 2,3,5,6,8 / voyager 2,3,5,6,9（亲审运行时 flow STEP 2/5 caption↔flow[1].caption 逐字 3/3 + .sentence-active 指向 s4/s3/s3；voyager s5 一句双 part span（long-arm+warm-heart）各恰 1 次，flow 只纳 warm-heart 保 refs 严格递增）
- [x] finish 三色齐：hot-wires·turning-blades·warm-heart 红 / spring-bed·nose-rope·big-ear-dish 钛白 / steel-house·gas-bag·gold-record 外壳灰，warning 各 1 配额内
- [x] 预检前移双轮：b22.1-b22.2 五轮词探针 ~260 词（breakfast/burst/whoever/aim/park/tray/cell/rim/dial/grid/metal 等改述 + toast/crumb/whisper 等 8 词升格词条）→ b22.3 全量 harness（tmp/b22-full-check.mjs，b21 克隆 + 新增 accent 唯一性 import 真实 things.ts 核验 + 跨件复用 key 存在性检查）抓 **13 MISS**（probe 轮盲区词族 shining/swimming/steer/tilt/sink/leaks/weaker/self）→ 12 处改述（sending/moving/drive/move/drop/slips/quieter/less power/made by itself，替换词全部 probe orig ✓）→ 0 MISS；s0 span 切断处改述教训（"like a "+span+" swimming" 需改 span 后半段字符串）
- [x] claude 亲审全绿：五闸门独立重跑零偏离 + verbatim 6/6（tmp/b22-verbatim-check.mjs）+ 几何三件 vs 规格逐项全等（`.map` ≤2 参、slice(0,-1) 闭合、to= 只引 const/外层参）+ 浏览器 **34/34 首跑全绿**（home 71 卡 + 三页 h1 逐字/canvas/#root 单子/.word-part=7/**.word-new=6/4/2**（纯 dict span 口径，与 validate 8/7/4 双口径均验证）+ hover 卡逐字 3/3（含双标注 'steel house'→steel 卡 + span≠key 逆推 'whispers'→whisper 卡）+ 词→物点击 3/3 + flow STEP 2 caption 逐字 3/3 + exceptionThrown 0）
- [x] pi 独立验证（2026-09-11，tmp/b22-pi-report.md，判定**PASS——无阻断级、无功能性缺陷**）：五闸门独立重跑零偏离（tsc -b 0 · 71 件/词典 233/分词 255 · build 799 modules · oxlint 0 含正控）；data-audit **150/150 全绿**（span closed list 13/11/9 整表递归深比零差异 + 6 fenced 深比含 key 序零 diff + 8 新词条四字段逐字 + 跨件复用 10 key 全可解析 + accent 三色合法 hex/互不撞/不撞既有 68 件）；Rod 链 `.map` 真实 ≤2 参（元组解构+第 2 参判定为真实 2 参，参数列表层非解构括号内）；git 前后逐行全等 0 仓库改动；**收束令 73-78% 水位即时下达**（pi 续接 b21 session 派发、上下文继承起步）——§3.2 几何数学 + §4 浏览器矩阵降级亲审覆盖如实标注，pi 中途顺利 auto-compact 一次（78%→55%）无死循环
- [x] accent 审计：#BC6C25 / #7C8FA6 / #C9A227 全库唯一（预检 harness + pi §2.2 双重核验）
- [x] 类别平衡达成：71 件 = home 18 / transport 18 / space 18 / power 17（power 轮空保持 spread ≤1，home 归队轮转）

### 验收对照 · production line 第二十三批 3 thing（2026-09-11 第二十八轮，power 归队轮转批 home/transport/power 各一 space 轮空，dsx 全文定稿工序）

- [x] 3 新 thing 全链路：kettle（The Hot Water Pot，accent #2A9D8F 岚青，home 域第十九件，正视台面线 y=−0.38 + base 微锥 [0.34,0.36] + hot plate 薄盘 + body 上宽下窄 [0.26,0.23] + shoulder 收肩 + 水窗 box + lid 盘 + knob 球 + spout rot [0,0,−0.9] 指右上 + handle 半环 torus π 弧 + switch 盒 + 指示灯球 + steam 双卷线 decor）/ cable-car（The Sky Car，accent #3D5A80 暮蓝，transport 域第十九件，侧视地面 y=−0.52 + wirePts 7 点开链下垂（slice(0,-1) 习语）+ towerXs 双塔（腿收拢 ±0.05→±0.015 + X 撑 + 顶 sheave torus）+ 客舱 5 件（舱体/顶/双窗/门）+ 悬挂臂 Rod + grip 盒 + 载轮 torus 骑索（索 x=−0.10 处 y≈0.32 落轮槽）+ 动力站 4 件 + 驱动轮 torus + 轴向轴 + 回站/双山/3 树/双云 decor）/ charger（The Battery Filler，accent #8FBF3D 荧绿，power 域第十八件，正视夜景墙面 decor + 插座板 + 双槽 + 双金属腿 Rod r0.008 + 插头盒 + 双段电线 6+3 点 r0.009 穿 safe box（A 尾接盒左缘 0.245 / B 首接右缘 0.395）+ safe box + 灯球 + 手机 rot 0.12 + 电量条外框/填充/凸头同转角 + 桌线 + 月牙 torus 4.5 弧度 + 双星 decor）——部件 7/7/7 / 14 句 / flow 5 步 / keyExpressions 9
- [x] dict +7 词条：kettle 4（kettle 水壶；烧水壶 / pot 锅；壶；罐 / lid 盖子 / spout 壶嘴；喷口——water-pot/pot-lid/handle/power-switch/spout 五处双标注 span）/ cable-car 1（cabin 客舱；小木屋——sky-cabin/main-wire/steel-tower 三处双标注）/ charger 2（plug 插头；塞子 / socket 插座；插口——wall-plug/wall-socket/power-wire 三处双标注）；span text≠dict key 逆推二例（bubbles→bubble / grips→grip，b21-b22 同模式）；跨件复用 span 13 key（kettle handle·switch·steam·boil·glow·bubble / cable-car cable·tower·wire·rail·grip / charger wire·flow·battery）；词典 233→240（无重复新键）、分词 255→262
- [x] flow sentenceRef 全单件步：kettle 1,2,3,5,8 / cable-car 0,1,3,5,8 / charger 0,2,5,6,9（亲审运行时 flow STEP 2/5 caption↔flow[1].caption 逐字 3/3 + .sentence-active 指向 s2/s1/s2；cable-car s3 一句双 part span（carrier-wheel+main-wire）同入 step3，refs 严格递增保持）
- [x] finish 三色齐：hot-plate·drive-wheel·battery-bar 红 / power-switch·carrier-wheel·power-wire 钛白 / bottom-plate·main-wire·safe-box 外壳灰，warning 各 1 配额内
- [x] 预检前移：b23.1 契约四轮词探针 ~200 词 → 全量 harness（tmp/b23-full-check.mjs，b22 克隆 + EXPECT_SPANS 三件口径）抓 **18 MISS**（probe 盲区词族：part label 本身 hot-disk×4 / arcs / flag / giant / square / tight×5）→ part 改名 **hot-disk→hot-plate**（8 处）+ 十余处 Munroe 式改述（arcs→reaches / flag→saying the water is ready / giant→turning ring / square→little house / tight→drawn from hill top to hill top 等）→ 2 MISS（**thousand 不在 ten-hundred 表**——原书之梗）→ '1,000,000 kettles' 数字直书（tokenizer 数字过闸，"50 little lights" 家法先例）→ 0 MISS
- [x] claude 亲审全绿：五闸门独立重跑零偏离（tsc -b 0 · 74 件/词典 240/分词 262 · **build 808 modules**——契约 §0.7 预期 799 为笔误（b22 基线忘 +9），codex 如实报告未擅改数，正确行为 · oxlint 0）+ verbatim 6/6（tmp/b23-verbatim-check.mjs）+ 几何三件 vs 规格逐项全等（`.map` ≤2 参、开链 slice(0,-1)、to= 只引 const/外层参、载轮骑索/电线穿盒数学核）+ 浏览器 **34/34 首跑全绿**（home 74 卡 + 三页 h1 逐字/canvas/#root 单子/.word-part=7/**.word-new=5/3/2**（纯 dict span 口径，与 validate 10/6/5 双口径均验证）+ hover 卡逐字 3/3（纯 dict 'kettle'→kettle 卡 + 双标注 'sky cabin'→cabin 卡 + 'wall plug'→plug 卡）+ 词→物点击 3/3 + flow STEP 2 caption 逐字 3/3 + exceptionThrown 0）
- [x] pi 独立验证（2026-09-11，tmp/b23-pi-report.md，判定**PASS——无阻断级、无功能性缺陷**）：五闸门独立重跑零偏离（tsc -b 0 · 74 件/词典 240/分词 262 · build 808（契约 799 笔误，verify 简报已指明以 808 为准）· oxlint 0）；data-audit **148/148 全绿**（span closed list 12/10/9 整表递归深比零差异 + 6 fenced 深比含 key 序零 diff（涵盖 7 新词条四字段逐字）+ 跨件复用 13 key 全可解析 + accent 三色合法 hex/互不撞/不撞既有 71 件）；Rod 链 kettle 无 Rod（空满足）/ cable-car·charger `.map` 真实 ≤2 参、slice(0,-1) 开链正确；git 前后逐行全等 0 仓库改动；**收束令 71-75% 水位即时下达**（pi 续接 b22 session 派发、上下文继承起步）——§3.2 几何数学 + §4 浏览器矩阵降级亲审覆盖如实标注（亲审 34/34 全绿兜底）
- [x] accent 审计：#2A9D8F / #3D5A80 / #8FBF3D 全库唯一（预检 harness + pi §2.2 双重核验）
- [x] 类别平衡达成：74 件 = home 19 / transport 19 / space 18 / power 18（power 归队，spread 恰 1，space 轮空）

### 实施备注（与规格的已知偏差）

- PracticePanel 关键表达 hover 的"微亮 40%"实现为全亮（复用 highlightPartId 通道，简化状态）
- 已解决（2026-09-09）：标注标签重叠（原 P1 打磨项）——屏面碰撞布局引擎（useFrame 逐帧 · 候选偏移避让 · 无槽位淡出）替代固定偏移
- 已修复：FlowPlayer 初版因内联回调引用触发 update-depth 循环，回调 ref 化后 effect 只依赖 stepIndex
- 草稿化后 Part 高亮实现在 SketchMesh 子级 drei `<Edges>`（LineMaterial color/opacity/linewidth 每帧 lerp）
- 图→词点击通道用 React context（PartClickContext）穿透 Canvas 独立 reconciler root：Provider 放 Canvas children 内，SketchMesh 深处 useContext 直达
- 图→词直点在带包壳件上被最外层壳体独占（transparent 面不透射线、SketchMesh onClick+stopPropagation 最外层恒胜；2026-09-11 batch 15 pi 发现，mars 6/7、electric-motor 6/7 部件不可直点，light-bulb/submarine 等既有件同样）——候选专项：包壳件关闭拾取（raycast 透传）+ dot 标记贴面；词→物正向通道不受影响
