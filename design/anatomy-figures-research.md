# anatomy-figures 制图技法调研

> 调研对象：https://skills.wheresryan.sh/anatomy/collection/public-key · npm `anatomy-figures@0.1.0`（MIT）
> 分支：`research/blueprint-3d-drawing`（2026-10-13）
> 目的：同 blueprint 那轮——保留本仓「纸面 + HUD 青」主题，只借鉴其**精细绘制能力**。
> 材料来源：站点正文 + 包源码（`dist/chunks/chunk-BLU*.js` 运行时、`chunk-BH*.js` 主题、
> `chunk-Y7*.js` 投影数学），已 prettier 反格式化后阅读。截图存 `tmp/ryan/`（gitignore）。

---

## 0. TL;DR

anatomy 是"用一件真机器的运动去解释一个概念"的**等距矢量（SVG）制图引擎**：每个图由几十到几百个
小实体零件组成，零件是「2D 剖面 + 厚度」挤出的 2.5D 体，用画家算法逐帧重投影重排序。

它比 blueprint 更精细的**不是**着色，是四条**制图纪律**：

1. **面只有 4 档 + 顶面单独一档**：侧壁按「边法线 vs 单一光向」的 half-lambert 量化进 4 个色阶，
   朝上的面走独立的 `top` 档。等距图能读成实体，靠的就是这一档。
2. **线宽屏幕恒定且极细**：`--anatomy-weight: .6px` + CSS `vector-effect: non-scaling-stroke`，
   所有线在设备空间恒为 0.6px，放大缩小都不变粗。线的浓淡由 `hi/mid/lo/faint` 四档墨阶给。
3. **细节密度**：真齿形齿轮、螺栓圈、箍带、刻度圈、圆角倒边——精细感来自**零件数量**，
   不是多边形数量。引擎自带 `齿轮/圆环面/圆柱/圆角矩形` 发生器。
4. **图版化的外壳**：物件装在一个「plate」里，四角固定四枚 10.5px 等宽小字
   （图号 / 标题 / 操作提示 / 实时读数），图例符号是**用同一套画法画的小缩略体**。

---

## 1. 引擎结构

| 项 | anatomy | 本仓 english-explainer |
|---|---|---|
| 渲染 | **SVG**（React 组件 / 自定义元素，框架无关） | R3F + Three.js 0.185（WebGL） |
| 相机 | 等距投影 az=45° / el=30°，`k = scale·√1.6` | 透视 fov50 或正交（可切） |
| 体 | 2D 剖面 → 沿法线挤出（`V()`），逐面分类 | 真 3D 网格（程序化生成） |
| 光照 | 单一固定光向，4 档量化 + top 档 | 同思路（本轮对齐） |
| 排序 | 画家算法逐帧重排（`J()` 深度） | z-buffer |

**绘制管线**（`V(profile, z, thickness, camera, {bevel})`）：

```
2D 剖面(圆角矩形/圆/齿轮/任意多边形)
  ├─ 背面剔除：边法线 · 视线 < 0 的边不生成侧壁
  ├─ 侧壁四边形 → 按 half-lambert 量化分进 shade[0..3]；法线接近垂直的进 top
  ├─ fill   = 前盖 + 后盖 + 所有侧壁（同一个 path，nonzero）→ 一个实心剪影
  ├─ outline= 真轮廓边（相邻边可见性翻转处 + 可见边段），不是所有边
  ├─ crease = 可见的内部棱（形体转折）
  └─ bevel  = 沿边法线内缩 c 生成的倒角面
```

图层顺序 `["fill","shade-0"…"shade-3","top","face","crease","edge"]` —— **先铺实心，再盖色阶，
最后描棱**。这套"先填后描"的顺序是它看起来"有体量又不脏"的原因。

## 2. Token 系统（5 主题）

`themes.js` 里 5 套主题（dark / light / paper / blueprint / sepia）共用一份 token 名：

| token | 作用 |
|---|---|
| `paper` / `card` / `page` | 纸面、图版底 |
| `face` / `top` / `shade-0..3` | **4+1 个面色阶**（顶面单独一档） |
| `lit` / `lit-top` / `lit-shade` | **被点亮时整套调色板切换**（不是叠色） |
| `hi` / `mid` / `lo` / `faint` | 4 档墨阶（线） |
| `weight` | 线宽（.6px） |
| `halo` + `halo-opacity` | 软影（模糊 9px、下移 3px） |
| `red` / `green` / `blue` | 三档强调色（每个主题仅一组） |

它的 `paper` 主题几乎就是本仓的纸面（`#dfdfd8` / `#f3f3ee`），说明这条路子的配色是收敛的。

## 3. 逐条对照：本仓落地了什么

| # | 技法 | 本仓落地 |
|---|---|---|
| 1 | 顶面独立色档 | ✅ `PAPER_TONES` 加 `top`，shader 用 `smoothstep(0.62,0.72,n.y)` 混入；顶面同时抑制排线 |
| 2 | 点亮 = 换调色板 | ✅ 每档加 `lit{base,dark,top}`，`uEmphasis` 在整套色板间插值，accent 只做 16% 染色 |
| 3 | 线宽屏幕恒定 | ✅ `makeHullMaterial.uWidthPx` + `usePartHighlight` 每帧按 `世界单位/像素` 换算（透视按距离、正交按 zoom）写 `uWidth`，夹在 0.002–0.05 |
| 4 | 4 档墨阶 | ⤳ 本仓线上仍是 INK + accent 二档（Edges 的 lineWidth 已天然屏幕恒定），未引入 4 档 |
| 5 | 细节密度 | ✅ 新增原语 `BoltCircle` / `SeamRing` / `PanelLines` / `TickRing` / `Gear`（真齿形 ExtrudeGeometry + 倒边），并在 clock / nuclear-reactor 上用足 |
| 6 | 软影（halo） | ✅ drei `ContactShadows`，每帧贴模型底面、按足印给 scale/far（**不能靠缩放外层 group**，会把它的正交视锥一起放大成灰板） |
| 7 | 图版四角 | ✅ 四角统一 `plate-corner`（10.5px 等宽、`tabular-nums`），右下角新增实时读数 `AZ 046° · EL +24°` |
| 8 | 图例符号 = 缩略体 | ✅ `PartGlyph`：按该部件的 `PAPER_TONES` 三面画等距小立方，PracticePanel 部件对照表每行一枚 |
| 9 | 抗缝（`data-seamless`） | ➖ WebGL 无对应；本轮用 `depthWrite` + 单一面材质规避 |
| 10 | 齿轮/圆角发生器 | ✅ `Gear`（可配齿数/齿深/倒边）；圆角矩形本仓无对应需求 |

## 4. 顺带修掉的既有问题

- **穹顶挡堆芯**（上轮 blueprint 改造的回归）：新增 `finish: 'shell'` 角色（纸面 22% 透明 + 仍给剪影边），
  `nuclear-reactor` 的 containment dome 改用它，内部堆芯重新可见——这才是 §1.5「双层表达」的正解。
- **标注会跑出画布 / 首尾相接被读成一行**：
  - 候选矩形出画布直接丢（宁可不出标签，不留半截字）
  - 标签之间留 `LABEL_GUTTER = 12px`
  - 兜底候选也要过碰撞检测，过不了就隐藏
  - **drei `<Html>` 不受父 group `visible` 控制**——"隐藏"必须切 `labelEl.style.display`；
    这是本轮最大的坑，之前所有避让逻辑其实一直在正常工作，只是被隐藏的标签照样在画
  - 循环结束后用**真实 DOM 矩形**复核一遍（估算宽高与实测有偏差时兜住）
  - 模型自身的屏幕包围盒进"软占用"：首选位避开形体，实在没位置才淡排压上去
  - 候选方向两侧都试 + 外推档位加到 3.9 世界单位（窄分栏下才有足够落点）

## 5. 未落地 / 后续

- **亮面材质**：anatomy 的 `lit-*` 只用于"被选中的零件"；本仓 `uEmphasis` 同理，但没做
  "多个零件同时点亮"（flow 播放态）的色板分级——目前 active/past/dim 只改线色与 `uDim`。
- **4 档墨阶**：`hi/mid/lo/faint` 的线色分级没做；现在 dimOthers 是一刀切透明度。
- **`data-seamless` 的 WebGL 等价物**：共面相邻件的发丝缝在多件密排时仍会出现，
  可考虑给 Edges 加 `polygonOffset` 或给面材质加同色描边。
- **347 件全量回归**：本轮只验了 clock / nuclear-reactor 两件，其余器件的部件尺寸差异很大，
  `HULL_WIDTH_PX = 1.1` 与 `LABEL_GUTTER = 12` 需要抽样复核。
- **Gear 的性能**：`ExtrudeGeometry + bevel` 的三角面与边线数量比 `cylinderGeometry` 高一个量级，
  齿数 > 30 的场合要评估（clock 用了 11/14/15/20 齿，实测无压力）。
