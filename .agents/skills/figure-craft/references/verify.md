# Verify —— 跑起来才算画完

图版的毛病基本都是**看得见但说不清**的那类：标签在闪、标签压在形体上、
旋转到某个角度有个部件没人管、4× 一看全是光板。所以自检不是"跑个 build"，是**看**。

## 1. 工具

```bash
S=.agents/skills/figure-craft/scripts/figure.mjs
# 先 npm run dev；端口被占用时 Vite 会顺延，用 --base 指到它

node $S shot   clock --out tmp/shot.png              # 整体：形体关系 / 取景 / 有无遮挡
node $S shot   clock --scale 2 --clip 800,200,600,500 # 局部 2×（配合截图坐标），4× 判据用
node $S shot   clock --width 900                     # 窄画布：分栏拖窄后标注还成不成立
node $S labels nuclear-reactor --wait 7000           # 标注层逐帧采样
node $S labels nuclear-reactor --click .word-part    # 激活态（优先级重排）再采一遍
node $S shot   tooth-brush --click-at 1200,500       # 点画布上的部件本体（图→词激活态）
node $S labels tooth-brush --click-at 1050,400       # 点中部件之后，标注层再采一遍
node $S shot   tooth-brush --click .hud-panel --click-has "HOW IT WORKS"   # 点 DOM 按钮造 flow 态
node $S eval   clock "document.querySelectorAll('[data-label]').length"

# 静态盘点（不开浏览器）：谁在小世界里、谁的装饰线长过头
node .agents/skills/figure-craft/scripts/span-audit.mjs
```

**激活态一定要单独走一遍**：点选会触发优先级重排（被点中的标签升到最高优先级、其余退开），
这是最容易抖的状态。`--click-at x,y` 是往 canvas 上补一次真 pointerdown/up/click
（部件不是 DOM 元素，只有真事件走到 canvas 上 R3F 才会射线拾取）；坐标用 `shot` 的输出
反推——它会把 canvas 的 `[left, top, w, h]` 打出来。`--click <css>` 则是点 DOM 元素，
`--click-has 文案` 用来在一堆同 class 的按钮里挑那一个。

`labels` 的判据是**相邻采样的跳变**，不是位移总量：`autoRotate` 会让标签平滑漂移
（1–2px/次，正常），**抖动是一步跳一整个标签宽度**。所以看 `最大跳变` 那一列。

## 2. 交付前的门（一个都不能跳）

```bash
npx tsc -p tsconfig.app.json --noEmit   # 类型
npm run build                           # tsc -b && vite build
npx tsx scripts/validate-data.mjs       # 部件↔词闭环 / finish 约束 / 句数
npx tsx scripts/check-simple-words.mjs  # Munroe ~1000 词闸门
npx oxlint src                          # 静态检查（存量告警不背锅，别新增）
node $S labels <这件>                    # 标注稳定
```

## 3. 走查清单

**是件真东西**
- [ ] 1× 看是一台能叫出名字的机器，不是一堆占位的色块。
- [ ] 每个部件坐在别的部件上；没有一个零件悬空。
- [ ] 4×（`--scale 2` + `--clip`）扫过主体与机构，**每个区域都还有真东西**：
      箍带/螺栓/分缝/刻度/筋板至少占一样，没有一面光板。
- [ ] 细节纹样都落在真实边界上（刻度贴盘缘、箍带箍筒身、分缝走到棱边），没有中途截止。

**体量与材质**
- [ ] 朝上的面明显亮一档（顶面档生效）；没有一眼看过去"平"的面。
- [ ] 透明壳件内部机构透得出来（`finish: 'shell'`），没被不透明材质盖住。
- [ ] 底面有软影；没有部件像贴在纸上的贴纸。
- [ ] 配色克制：唯一 HUD 青 `#3ECFCF`，`warning` ≤ 2 处，其余是纸面灰阶。

**标注**（细节见 `annotate.md`）
- [ ] `labels` 全 stable（含 `--click` 激活态）。
- [ ] 没有任何标签压在模型剪影上（实排或淡排都不允许"印在形体上"）。
- [ ] 没有标签互相叠字。
- [ ] 没有部件**没有**标签（标签消失 = 候选位不够，见 `annotate.md` §3）。
- [ ] 窄画布（`--width 900`）下标注仍然成立。

**闭环与内容**
- [ ] 每个部件都能在文章里找到可点亮的词（`validate-data.mjs` 卡这条）。
- [ ] 图→词、词→图两个方向都通：点击部件本体滚动到对应句。
- [ ] flow 的 `sentenceRef` 是全篇连续句索引，数清楚了。

## 4. 常见故障表（现象 → 原因 → 改法）

| 现象 | 原因 | 改法 |
|---|---|---|
| **标注字一直在闪** | 文字朝向用了现场算的浮点符号（`sx >= 0`），法线与相机右轴垂直时 `±1e-9` 逐帧翻 | 朝向取槽位里的 `textRight` + 死区；见 `annotate.md` §5 坑 1 |
| 标注位置"没道理"地漂 | `pointsFor` 读的 `tmp.normal/tmp.vis` 是"最后一个部件"的值 | 方向向量挂到 ctx 上；`annotate.md` §5 坑 2 |
| 两个标签叠在一起印出来 | 粘滞复用旧槽位时改了 `textRight` 却没重算 rect，"校验的"和"落笔的"差一个标签宽 | 改完重算再校验；`annotate.md` §5 坑 3 |
| 标注集体糊在图上 | 硬占用用的是"整个模型包围盒"，一个矩形吃掉大半个画布，候选位全员失败 | 改成逐 mesh 的屏幕矩形；`annotate.md` §4 |
| 某个标签干脆不见了 | 候选方向只有"朝外"，贴边部件无位可落 | 方向集补屏幕左右/上下；`annotate.md` §3 |
| 标签跟着相机一格一格跳 | 决策和几何没分开，每帧重算选位 | 选位节流 + 粘滞，几何逐帧重建；`annotate.md` §2 |
| 隐藏的标签照旧画在屏幕上 | drei `<Html>` 是 DOM portal，不受父 group `visible` 控制 | 切 `labelEl.style.display`；`annotate.md` §6 |
| 透明壳把内部机构全挡住 | 用了不透明材质 | `finish: 'shell'`（纸面 22% + 剪影边） |
| 落地阴影糊成一块灰板 | 缩放外层 group，把 `ContactShadows` 的正交视锥一起放大了 | 改 `scale/far`，别缩放容器（`GroundShadow` 已这么做） |
| **点中的部件变灰/褪色，像被洗掉了** | 激活档走的是"提亮"（旧 `lit` 档是近白色），纸底本来就亮，(面 → 近白) 就是**对比度下降** | lit 档改成更深一档 + 排线加重（`craft.md` §2 纪律 2）；"被照亮"在制图语境里 = 墨更实 |
| **点中的部件发黄/土黄（金色件）** | 拿金 accent 当墨：压深=橄榄土黄、不压=看不见，sRGB 里没有"好看的金墨" | 黄色相换档到激活红（`accentInkOf`）；面染色也走这支色，别往面上刷金色（`craft.md` §2 纪律 2b） |
| **点中的红件变成土黄/橄榄（红色身份丢了）** | 激活色一律用 thing 的 accent 墨色，把 `warning` 的语义红覆盖掉了 | 红件保自己的红（`markInk` / `markFor`，红是语义色）；金 accent 的墨色还要走黄色相容差档（`craft.md` §2 纪律 2b/2c） |
| **同一个红件点前点后是两种红** | `warning` 的 `lit` 档被写成更深一档，或选中时面又叠了 accent | `warning.lit` 与常态同值；纸面不吃 accent；选中只加线宽/排线/点阵（`paperSurface.ts` / `craft.md` §2 纪律 2c） |
| **灰阶件一点中，面上多出一层淡红** | 纸面 shader 在 `uEmphasis` 时混了 14% accent；金 accent 回落的激活红正好把面洗红 | 纸面只按 finish 走纸阶，身份色只走线/点/标注（`makePaperMaterial(finish, dpr)`） |
| **点画布空白/文章空白，选中不取消** | 只做了"再点同一个词/部件"的取消，没接背景点击 | `<Canvas onPointerMissed>` → `onBackgroundClick`；文章容器点击时排除 `.word-part/.word-new/button/a`（拖拽旋转不会被当成空白点击） |
| **点中的部件只有一圈极浅的彩色线，几乎看不见** | accent 是浅粉彩身份色（`#87CEEB` 这类），拿来当线色对比度 1.5:1 | 线/点阵/标注过 `accentInkOf()`；别用 `THREE.Color.getHSL` 换算（三 r185 默认线性空间，压了明度还是浅的，`craft.md` §2 纪律 2b） |
| **点了部件之后整张图都灰蒙蒙** | 其余部件只降了面（`uDim`）没降线，淡面 + 硬墨边 = 鬼影；或者"压暗"被写成给面加深色 | 面和线成对退开（线 ×0.4），标注层同步（`craft.md` §2 激活态三条通道） |
| 小东西上标注点糊成一串黑球 / 标签飞出画布 | 世界空间的绝对尺寸（点半径 0.07、外推档 0.95→6.6）落到跨度只有 0.1–0.5 的小模型上 | `ThingScene` 的跨度归一（`MODEL_SPAN`）：把模型放大到基准，别去改绝对尺寸 |
| 物件在画面上只是一个小点，四周空一片 | 取景按**整组**算了，几何文件里的草稿线/地面线把盒子撑大（常有 2–11×） | 取景与影子都按**部件盒**（`partsBounds`：带 `name` 的 mesh）；装饰线出画布是正常的 |
| 归一之后模型还是溢出画布、相机像被钉死 | `controls.maxDistance` 还是按缩放前的小盒算的，小于 `minDistance 2.5`，OrbitControls 每帧把相机拉回来 | 取景时同时重算 `near/far` 与 `maxDistance`（`ModelSpanProbe` 已这么做） |
| 同一件东西刷新几次，取景时好时坏（有时缩成一个小点） | 用了 drei `Bounds` 的 `fit()`：它只写 goal，而它自己的 `refresh()` 会清掉 goal | 别用 `Bounds.fit()`，取景自己算（`ModelSpanProbe`） |
| 往盆/锅/桶里看是一片**黑洞**（其实是透到地面影子上） | 纸面材质单面：凹面是背面，被剔掉了 | 纸面走 `DoubleSide` + `gl_FrontFacing` 翻法线（`paperSurface.ts`）；空腔件只画外壳就够 |
| 部件点浮在盆口正中的**空腔里**（一颗黑球） | 落点取的是包围盒面心，空心件的盒顶面心就是开口正中 | 落点改取**真顶点极值**（`dotFor` + `extremePoints`） |
| 宽画布下标签压在右上角 `MODEL / SKETCH-*` 上 | 四角块是 DOM，标注层看不见 | 画布尺寸变化时实测 `[data-plate-corner]` 矩形，当 `occupied` 初值（见 annotate.md §4） |
| 某根"线"点击不高亮 | 用了 drei `Line`（GlooLine 不参与部件高亮） | 该用 `Rod`（细圆柱 mesh + `name`） |
| 图整体变平、没有体量 | 新几何绕开了顶面档，或面材质被换成了 basic | 走 `SketchMesh`，别自己拼材质；确认 `smoothstep(0.62,0.72,n.y)` 生效 |
| 线在缩放后变粗/变细 | 写死了 `lineWidth` | 用屏幕恒定换算（`HULL_WIDTH_PX`） |
| 模型渲染成纯黑 | hex 位数写错（如 `#3EFCFCF`） | 6 位 hex；写错**不报错**，只是变黑 |
| 控制台 404 | drei `<Text>` 传了 `font` 去加载远程 woff2 | 别传 `font`，默认字体够用 |
| flow 高亮错句 | `sentenceRef` 写成了段内索引 | 它是**全篇连续**索引（跨段累加、0-based） |
| 部件点不亮 | 几何 mesh 没带 `name={partId}` | 每个部件 mesh 都要带 |

## 5. 这门手艺的来源与边界

- upstream：`wheresryan22/anatomy`（MIT）——"物体即解释"、四档明暗、屏幕恒定线宽、
  以零件密度换精细度、"放大到 4× 逐个接头看"。调研笔记在 `design/anatomy-figures-research.md`。
- 有意偏离 upstream 两处，**别照着 upstream 改回来**：
  1. upstream 明令禁止 leader line / 标注气球；本项目**必须**有——引线承载"词找到物"。
     但接受它的线的纪律（每根线落在东西上、线宽恒定、文字归图版四角）。
  2. upstream 是实心等距 SVG；本项目是纸面线框 + 局部位移的 3D。
     取它的**明暗分档与细节密度**，不取它的 SVG 引擎。
- 上游那句"每个接头放大到 4× 看一遍"在这里的等价物是：
  `shot --scale 2 --clip` 扫一遍主体 + `labels` 采样。**两个都要做。**
