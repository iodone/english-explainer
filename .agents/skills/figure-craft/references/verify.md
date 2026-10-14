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
node $S eval   clock "document.querySelectorAll('[data-label]').length"

# 静态盘点（不开浏览器）：谁在小世界里、谁的装饰线长过头
node .agents/skills/figure-craft/scripts/span-audit.mjs
```

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
| 小东西上标注点糊成一串黑球 / 标签飞出画布 | 世界空间的绝对尺寸（点半径 0.07、外推档 0.95→6.6）落到跨度只有 0.1–0.5 的小模型上 | `ThingScene` 的跨度归一（`MODEL_SPAN`）：把模型放大到基准，别去改绝对尺寸 |
| 物件在画面上只是一个小点，四周空一片 | 取景按**整组**算了，几何文件里的草稿线/地面线把盒子撑大（常有 2–11×） | 取景与影子都按**部件盒**（`partsBounds`：带 `name` 的 mesh）；装饰线出画布是正常的 |
| 归一之后模型还是溢出画布、相机像被钉死 | 缩放不经过 `Bounds`，它的 `fit` 没重跑；且挂载那次 `clip()` 把 `controls.maxDistance` 算成了小于 `minDistance 2.5` | 归一后补一次 `bounds.refresh().clip().fit()`——`clip` 不能省 |
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
