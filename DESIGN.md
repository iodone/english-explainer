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
windmill = three-blades 红 / power-maker 钛白 / nose-box 外壳灰（余冷灰）。

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

### 实施备注（与规格的已知偏差）

- PracticePanel 关键表达 hover 的"微亮 40%"实现为全亮（复用 highlightPartId 通道，简化状态）
- 已解决（2026-09-09）：标注标签重叠（原 P1 打磨项）——屏面碰撞布局引擎（useFrame 逐帧 · 候选偏移避让 · 无槽位淡出）替代固定偏移
- 已修复：FlowPlayer 初版因内联回调引用触发 update-depth 循环，回调 ref 化后 effect 只依赖 stepIndex
- 草稿化后 Part 高亮实现在 SketchMesh 子级 drei `<Edges>`（LineMaterial color/opacity/linewidth 每帧 lerp）
- 图→词点击通道用 React context（PartClickContext）穿透 Canvas 独立 reconciler root：Provider 放 Canvas children 内，SketchMesh 深处 useContext 直达
