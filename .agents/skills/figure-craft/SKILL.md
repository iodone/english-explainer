---
name: figure-craft
description: 本项目 3D 图版的绘制技艺参考 —— 部件密度、纸面明暗四档、屏幕恒定墨线、细节原语配方、标注层选位算法，以及"跑起来才算画完"的自检工具链。当你要新增/改造某个 thing 的几何体（`src/geometry/<slug>.tsx`）、调这件图的细节密度、动标注层（引线/标签选位）、改纸面材质或投影，或用户说"这图太简陋/太稀/像抽象堆叠""标签在闪""标签压在图上了""标注挡住部件了""这个图和别的图风格不统一"时，读这个 skill。视觉契约的真相源仍是 `DESIGN.md`（尤其 §1.5），本 skill 只补它没写的可执行技艺与踩坑。
---

# figure-craft

`DESIGN.md` 说**要什么**（纸面 #F4F1EA / 墨色 / 唯一 HUD 青 / 每件一个 accent），
这个 skill 说**怎么画到那个标准**，以及**怎么证明画到了**。

来源：`design/anatomy-figures-research.md`（对 upstream `wheresryan22/anatomy` 技能的调研）+
本项目落地过程中真实踩过的坑。上游那句"**物体即解释**"在这里换一种说法：

> **图是辅证，但辅证必须经得起放大看。** 文章是阅读主体，3D 图存在的理由是
> "文中这个词，指的是图上这个东西"。所以每一个部件都得是一件**真东西**——
> 有厚度、坐在别的零件上、有它自己的分缝/箍带/螺栓；而不是一块占了位的色块。

## 三条不可让步的判据

画完自问，任何一条答"否"就是没画完：

1. **放大到 4×，图上每个区域都还有真东西可看。** 一面光板、一个空角落，是"没做完"，
   不是"干净"。细节来自**属于这个机构的零件**（箍带、法兰、螺栓圈、刻度、分缝、
   筋板、梯子、检修口），不是来自噪点贴图。
2. **每个部件坐在别的部件上，尺寸关系说得通。** 穹顶扣在底座上，箍带箍在筒身上，
   轴穿进轴承里。悬空的零件读起来是装饰，不是机构。
3. **图↔词闭合。** 每个几何 mesh 带 `name={partId}`、数据层每个 part 在文章里有一段可点亮的词。
   加部件的同时必须加词（`validate-data.mjs` 会把这件事卡住）。

## 工作顺序

**先数据，后几何，最后才是调好看。** 顺序错了返工最贵。

1. **量级先定。** 这件是"小而准"（6–9 个部件）还是"密而深"（10+ 部件）？
   部件数由**真实物件**决定，不由时间决定。装配体多就多，别为了省事合并部件——
   合并掉的部件将来就是文章里一个点不亮的词。
2. **写 parts 清单，再写几何。** `src/data/things/<slug>.ts` 的 parts（id / label / realName /
   position / finish）是照片的说明文字；先把清单写对，几何只是把它立起来。
3. **先让页面跑起来，再加密。** 第一版就把 `npm run dev` 打开看：形体关系对不对、
   取景是否合适、有没有哪个部件被别的部件完全遮住。**不要**在看不见效果的情况下
   一口气写 300 行，最后发现整体比例是错的。
4. **加密到 4× 标准**（见 `references/craft.md` 的密度清单）：大面加分缝，圆体加箍带/刻度，
   连接处加螺栓圈，长杆加筋/节。每加一样都问"真实物件这里有没有这个东西"。
5. **标注层跟着部件的**锚点**走**：新部件的朝外方向、屏幕上会落到哪里，都要跑一遍看
   （`references/annotate.md`）。
6. **跑自检**（`references/verify.md`）。跑起来看到的才算数。

## 常驻规则（长版见 references/）

**形体**
- 纸面四档 + **顶面独立档**：朝上的面必须比侧面亮一档（`smoothstep(0.62, 0.72, n.y)`），
  这是等距读法能读成"实体"的关键。顶面同时抑制排线。
- 透明壳件用 `finish: 'shell'`（纸面 22% 不透明 + 剪影边），**不要**用不透明材质盖住内部——
  安全壳/玻璃罩/护罩包着的机构必须透出来。
- 落地阴影 `ContactShadows` 每帧贴模型底面、按足印给 `scale/far`。
  **不可缩放外层 group**（它的正交视锥会跟着放大，整块阴影糊成灰板）。

**墨线**
- 线宽**屏幕恒定**（`HULL_WIDTH_PX = 1.1` CSS px）：每帧按「世界单位/像素」换算，
  远近都不变粗。手写 `lineWidth={2}` 这类值在缩放后会露馅。
- 外壳/钛白/透明壳件走 BackSide 反向外壳描边（连续剪影边）；结构件只走 Edges 纵线——
  两者分工就是 DESIGN.md §1.5 的"双层表达"。
- **线条要落在东西上**：细节纹样（刻度、箍带、分缝）必须贴在真实边界上，
  要么走满整条边、要么渐隐，**不许在中途齐刷刷断掉**。这是 upstream 被退回最多的毛病。

**细节原语**（`src/geometry/primitives.tsx`，都带 `partId` 参与高亮）
- `BoltCircle` 螺栓圈 —— 法兰、盖板、轴承座的连接处
- `SeamRing` 箍带 / 环缝 —— 筒身、管道、压力容器（也用来打断过长的光面）
- `PanelLines` 面板分缝 —— 箱体大面
- `TickRing` 刻度圈（长短交替，批量线段）—— 表盘、旋钮、调节环
- `Gear` 真齿形 + 倒边（齿数/齿深可配）—— 传动
- `DraftSegments` 批量线段 —— 一次画很多条淡墨装饰线
- `Rod` 细圆柱 —— **需要参与高亮的"线"必须用它**（drei `Line` 不参与高亮）

**配色**
- 唯一主发光色 HUD 青 `#3ECFCF`；红/橙只作部件激活点缀；**每件 `warning` ≤ 2 处**
  （`validate-data.mjs` 卡这条）。颜色是语义（哪块是核心、哪块是热的），不是装饰。
- 激活态一律覆盖为 **thing 自己的 accent**——身份不变，只是"被照亮了"（换调色板，不是叠色）。

**不要**
- 抽象堆叠（浮板/薄片象征"层"）、一块大平板撑场面、纯线架看不到体量、
  彩色到处刷、细节纹样中途截止、为了过校验塞假零件。

## 自检工具（跑起来才算画完）

skill 自带零依赖的 headless Chrome 走查工具，用之前先 `npm run dev`：

```bash
S=.agents/skills/figure-craft/scripts/figure.mjs
# 先 npm run dev；端口被占用时 Vite 会顺延，用 --base 指到它
node $S shot   clock --out tmp/shot.png          # 整体：形体关系 / 取景 / 遮挡
node $S shot   clock --scale 2 --clip 800,200,600,500   # 局部放大：4× 判据用
node $S labels nuclear-reactor                   # 标注逐帧采样：跳变 / 显隐
node $S labels nuclear-reactor --click .word-part # 激活态再采一遍（最容易抖）
node $S eval   clock "document.querySelectorAll('[data-label]').length"
```

改动几何/标注后**必须**跑的门（一个都不能跳）：

```bash
npx tsc -p tsconfig.app.json --noEmit
npm run build
npx tsx scripts/validate-data.mjs        # 部件↔词闭环、finish 约束、句数
npx tsx scripts/check-simple-words.mjs   # Munroe ~1000 词闸门
npx oxlint src
```

## References

- `references/craft.md` —— 制图技艺全文：四档明暗与顶面档、墨线层级、细节原语配方、
  密度清单（每类形体该有哪些细节）、取景与构图、upstream 反例清单。**设计新几何前读它。**
- `references/annotate.md` —— 标注层（工程图 leader line）的选位算法、粘滞与节流、
  **三个浮点噪声坑**、drei `<Html>` 的 portal 陷阱。**动标注前读它。**
- `references/verify.md` —— 走查清单、常见故障表（现象 → 原因 → 改法）、
  headless Chrome 采样口径。**交付前读它。**
