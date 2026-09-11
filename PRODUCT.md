# PRODUCT.md — Thing Explainer 英语学习网站

> 真相源①：产品决策（概念 + 结构 + 流程）。
> 逆向产出：由 HUD 仪表盘原型（commit 92a5698）+ 用户方向修正（2026-09-09）反推。
> 学习目标为用户确认项；交互细节含标注的设计建议，均为待审内容。

---

## 1. 概念层

### Users

- **唯一用户：meta42**。中文母语者，中高级英语学习者，程序员背景。
- 使用场景：本地运行，桌面浏览器，日常主动学习（非被动浏览）。

### Product Purpose

通过 Randall Munroe《Thing Explainer》式的 simple-words 图解，**建立英文具象词汇与实物部件的意象关联**，并训练用简单词汇理解和表达复杂事物的能力。

### Positioning

- 个人学习工具（本地模式，暂不部署，无账号/后端）。
- 不是通用教育产品，不是内容展示站——**一切界面元素必须服务于学习目标**。
- 与原书的差异：原书是静态读物；本产品把"读"升级为"关联、查询、检验"的交互学习。

### Operating Context

- 纯前端 SPA（React + Vite），本地 `npm run dev` 使用。
- 数据全部静态内置（thing 内容、词典、词表），无网络依赖（字体 CDN 除外）。
- 桌面浏览器优先；移动端不保证。

### Capabilities（重构后，P0 = 本期全部）

| # | 能力 | 说明 | 状态 |
|---|---|---|---|
| C1 | 事物图解阅读 | 59 个 thing（2026-09-09/11 production line 十八批：batch 1 microwave / refrigerator / elevator，batch 2 bicycle / clock / vacuum-cleaner，batch 3 toilet / speaker / drill，batch 4 camera / battery / zipper，batch 5 lock / scissors / pencil，batch 6 iron / glasses / faucet，batch 7 light bulb / stapler / submarine，batch 8 telescope / space suit / windmill，batch 9 train / rocket / dam，batch 10 ship / satellite / sun-catcher，batch 11 hot air balloon / moon lander / water wheel，batch 12 airplane / comet / steam engine，batch 13 car / moon / power grid，batch 14 escalator / black hole / sun，batch 15 crane / mars / electric motor，batch 16 bridge / earth / atom，batch 17 drone / galaxy / geothermal，batch 18 sailboat / saturn / fusion），每篇 simple-words 文章 + 3D 线框图 | 已实现 |
| C2 | 词-物双向关联 | 文中部件词点击 → 图中部件高亮；图中部件点击 → 文中词高亮 | 新增 |
| C3 | 工作流程过程动画 | 部件按工作原理顺序点亮并配解说（如核反应堆：燃料→热水→蒸汽→轮子→电） | 新增 |
| C4 | 单词释义 | 点击任意单词 → 弹出音标、词性、中文释义；复合词组（如 food-heating radio box）展示构词拆解 | 新增，词典数据源见未决项 |
| C5 | 句式阅读辅助 | simple-words 句式的结构呈现：句内高亮当前阅读句；复合名词短语可展开拆解 | 新增（轻量，融入 C1/C4） |
| C6 | 复述练习 | 读后进入练习态：隐藏文章只显示图 → 用户用自己的话描述 → 展开"关键表达"清单自评覆盖度 | 新增（自评模式，无 NLP/输入框） |
| C7 | 常用词表 | 书末 "ten hundred most common words" 词表页，可查询、标记已掌握 | 已实现（/words，xkcd Simple Writer 词表 1283 词 + 检索/标记/thing 关联） |

**砍掉的现有能力**：左侧装饰性数据面板（波形图、复杂度雷达图、功率仪表、年份时间轴、词数计量）——与学习无关。趣味事实（FunFacts）可保留但降级为文章附属内容。

### Principles

1. **学习优先于炫技**：每个像素都要回答"这帮助学英语吗"。
2. **阅读不打断**：文章是主阅读流；释义、关联均以轻量弹出/高亮实现，不跳转、不遮挡。
3. **词-物关联是核心机制**：具象词汇的习得靠意象，不是靠背诵。
4. **Simple words 约束**：解释文本遵循 Munroe 原书精神——只用 ~1000 常用词（释义卡、UI 文案不受此限）。由 `scripts/check-simple-words.mjs` 四通道闸门强制（xkcd 原表 3634 形式 ∨ 站内词表 ∨ dict 词条 ∨ 屈折逆推），表外概念词必须以 dict 词条显式引入。创作参考词表：Ogden Basic English 850（"90% 的概念可用 850 词表达"，vendored 于 `scripts/data/ogden-basic-english-850.txt`，2026-09-09）——与 xkcd 表仅 ~58% 重合，机器词（chain/spring/pump/wire…）有意经 dict 词条通道引入。
5. **英文呈现优先**：正文英文为主，大字号、高可读性；中文仅出现在释义卡。

### Brand

- 保留现有视觉方向：羊皮纸工程网格 + HUD 青 + Newsreader/Inter/JetBrains Mono（用户已确认"风格没问题"）。
- 语气：Munroe 式的直白、好奇、略带幽默。

### Evidence（现状审计 → 意图）

| 现状（代码） | 意图（本次重构） |
|---|---|
| 文章在底部小块，3D 图占满中央 | 文章升级为阅读主体，图为辅证 |
| 左侧装饰面板（波形/雷达/仪表） | 移除；代之以学习相关内容（如词表/进度） |
| 部件标注单向（图上标签） | 升级为词-物双向点击关联 |
| 无释义、无动画、无练习 | C2-C6 全部新增 |
| 5 个 thing 数据结构（parts 无流程序） | 数据结构扩展：parts 增加流程序列、文章结构化为可交互段落 |

---

## 2. 结构层

### 信息架构（≤3 层）

```
Home（thing 列表）
├── Thing 阅读页（/thing/:slug）
│   ├── 阅读态（默认）
│   ├── 过程动画态（播放工作流程）
│   └── 复述练习态（文章隐藏，图 + 自评清单）
└── 词表页（/words）
```

### 页面清单

| 页面 | 优先级 | 说明 |
|---|---|---|
| Home | P0 | thing 卡片列表（沿用现有，弱化装饰指标） |
| Thing 阅读页 | P0 | 核心：文章 + 图 + C2/C3/C4/C5/C6 |
| 词表页 | P1（已实现） | 1000 常用词表 + 掌握标记（localStorage）+ thing 关联跳转 |
| 进度/收藏 | P2 | 后置，不做 |

### 核心路径（用户旅程）

```
Home → 选 thing → 阅读态：逐句读文章
  ├─ 遇到生词 → 点词 → 释义卡（音标/词性/中文/构词拆解）→ 关闭继续读
  ├─ 遇到部件词 → 点词 → 图中部件高亮（反向亦然）
  ├─ 想懂原理 → 点「How it works」→ 过程动画（部件顺序点亮 + 解说句）
  └─ 读完 → 进复述态 → 看图自述 → 展开关键表达清单自评 → 返回/下一个
```

### 状态矩阵

| 页面/态 | 空 | 加载 | 错误 |
|---|---|---|---|
| Home | 不适用（静态数据≥1） | bundle 首载（白屏/Splash） | 不适用 |
| Thing 阅读 | 不适用 | 3D 模型懒加载（文章先行渲染，图区显示占位） | slug 无效 → 「Thing Not Found」+ 返回 |
| 释义卡 | 词不在词典 → 显示「暂无释义」+ 原词 | 内置 JSON，瞬时 | 不适用 |
| 过程动画 | thing 无 flow 数据 → 按钮隐藏 | 播放中可暂停/重播 | 不适用 |
| 复述态 | — | 进入时文章淡出 | 不适用 |
| 词表页(P1) | 检索无结果 → 空态提示 | 瞬时 | 不适用 |

---

## 3. 流程层

### F1 阅读流（主流程，无分支回退需求）

1. 进入 thing 页：文章 + 图同屏（文章主列，图辅位）。
2. 点文中单词 → 释义卡（词条含构词拆解）；点部件词 → 图高亮 + 该部件标注放大。
3. 点图中部件 → 文中对应词滚动到视口并高亮。
4. 流程内任意操作不离开当前页。

### F2 过程动画流

1. 点「How it works」→ 图进入动画态：部件按 flow 序列逐个点亮（HUD 青发光），每步配一句 simple-words 解说（同步高亮文中对应句）。
2. 播放中：暂停 / 重播 / 跳步（点步骤指示器）。
3. 结束 → 回到阅读态，全部部件恢复常规亮度。

### F3 复述练习流

1. 阅读态点「Practice」→ 文章淡出，只留图与部件名提示（可开关）。
2. 用户对着图用自己的话（口头/心中）描述。
3. 点「Show key expressions」→ 展开关键表达清单：核心部件词 + 关键动词短语（如 "breaks apart" / "turns the wheel"）+ 句式骨架。
4. 自评勾选覆盖到的项 → 显示覆盖度（如 7/10）。
5. 「Read again」回阅读态 或 「Next thing」下一个。

---

## 4. 数据结构变更（实现指引，供 DESIGN/开发参照）

```ts
// things.ts 扩展
interface ThingPart {
  id: string
  label: string          // simple name（保留）
  realName: string       // 真实术语（保留）
  position: [number, number, number]
  aliases?: string[]     // 文中可能出现的其他指称（词-物关联匹配用）
}

interface FlowStep {
  partIds: string[]      // 本步点亮的部件
  caption: string        // simple-words 解说句
  sentenceRef?: number   // 对应文章句索引（同步高亮）
}

interface ThingData {
  // ...现有字段
  article: ArticleParagraph[]  // 结构化文章：句数组，句内标注部件词与生词
  flow: FlowStep[]             // 工作流程（C3）
  keyExpressions: { text: string; partId?: string }[]  // 复述自评清单（C6）
}
```

---

## 5. 未决项（不阻塞 PRODUCT 定稿，需在开发前落定）

| # | 项 | 建议 |
|---|---|---|
| U1 | 单词释义词典数据源 | 用开源 ECDICT 筛出 5 篇文章实际用词（约 300-500 词），生成内置 JSON（音标/词性/中文） |
| U2 | 文章正文来源 | 现有 50 篇均为原创 simple-words 改写；是否需要按原书内容逐篇替换/扩充（版权自担） |
| U3 | 词-物关联匹配粒度 | 词级匹配（"core" → 部件）还是短语级（"hot water box" → 部件）；建议短语级优先、词级兜底 |
| U4 | 复述练习是否记录历史 | 建议本期仅会话内自评，不做持久化（P2 再说） |
